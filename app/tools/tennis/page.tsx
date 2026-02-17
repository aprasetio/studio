'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Users, 
  Clock, 
  Settings2, 
  ChevronRight, 
  UserPlus, 
  Trophy,
  Activity,
  ArrowLeft,
  CalendarDays,
  User,
  RefreshCw,
  Edit2,
  Trash2,
  ArrowLeftRight,
  Check,
  Medal,
  AlertCircle,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from '@/components/ui/badge';
import TrustBadges from '@/components/ui/TrustBadges';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

// --- INTERFACES ---
type SkillLevel = 'Newbie' | 'Beginner' | 'Intermediate' | 'Advance' | 'Pro';

interface Player {
  id: string;
  name: string;
  skill: SkillLevel;
  level: number;
}

interface MatchTeam {
  players: string[]; // IDs
  score: number;
}

interface Match {
  id: string;
  type: 'Auto' | 'Manual';
  timeStart: number; // Minutes from start
  timeEnd: number;
  team1: MatchTeam;
  team2: MatchTeam;
  status: 'Scheduled' | 'Completed';
}

interface Config {
  numPlayers: number;
  durationMinutes: number;
  matchDuration: number;
}

// --- CONSTANTS ---
const SKILL_CONFIG: Record<SkillLevel, { level: number; color: string }> = {
  'Newbie': { level: 1, color: 'bg-slate-100 text-slate-600 border-slate-200' },
  'Beginner': { level: 2, color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  'Intermediate': { level: 3, color: 'bg-blue-100 text-blue-700 border-blue-200' },
  'Advance': { level: 4, color: 'bg-orange-100 text-orange-700 border-orange-200' },
  'Pro': { level: 5, color: 'bg-purple-100 text-purple-700 border-purple-200' },
};

export default function TennisGeneratorRefactored() {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState<Config>({
    numPlayers: 8,
    durationMinutes: 120,
    matchDuration: 30,
  });
  const [players, setPlayers] = useState<Player[]>([]);
  const [schedule, setSchedule] = useState<Match[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // --- ALGORITHM LOGIC ---

  const generateSchedule = (currentPlayers: Player[], tournamentConfig: Config): Match[] => {
    const newMatches: Match[] = [];
    const totalRounds = Math.floor(tournamentConfig.durationMinutes / tournamentConfig.matchDuration);
    const courtsPerRound = Math.floor(currentPlayers.length / 4);

    for (let r = 0; r < totalRounds; r++) {
      const timeStart = r * tournamentConfig.matchDuration;
      const timeEnd = (r + 1) * tournamentConfig.matchDuration;
      
      let availableInRound = [...currentPlayers];

      for (let c = 0; c < courtsPerRound; c++) {
        if (availableInRound.length < 4) break;

        // Weighted Priority: Lowest play count first
        const getPlayCount = (pid: string) => 
          newMatches.filter(m => [...m.team1.players, ...m.team2.players].includes(pid)).length;

        availableInRound.sort((a, b) => getPlayCount(a.id) - getPlayCount(b.id));

        // Pick top 4 priority players
        const selected = availableInRound.splice(0, 4);

        // Skill Balancing: 1+4 vs 2+3
        selected.sort((a, b) => b.level - a.level);

        newMatches.push({
          id: `m-${r}-${c}-${Math.random().toString(36).substr(2, 5)}`,
          type: 'Auto',
          timeStart,
          timeEnd,
          team1: { players: [selected[0].id, selected[3].id], score: 0 },
          team2: { players: [selected[1].id, selected[2].id], score: 0 },
          status: 'Scheduled'
        });
      }
    }
    return newMatches;
  };

  const rebalanceFutureMatches = (fromMatchId: string) => {
    const matchIndex = schedule.findIndex(m => m.id === fromMatchId);
    if (matchIndex === -1) return;

    // Keep all matches up to the edited one
    const keptMatches = schedule.slice(0, matchIndex + 1);
    const lastTimeEnd = schedule[matchIndex].timeEnd;

    // Filter out all future 'Auto' matches
    const manualFutures = schedule.slice(matchIndex + 1).filter(m => m.type === 'Manual' || m.status === 'Completed');
    
    // Regenerate Auto matches for remaining time slots
    const totalMinutes = config.durationMinutes;
    const remainingMinutes = totalMinutes - lastTimeEnd;
    const roundsToGenerate = Math.floor(remainingMinutes / config.matchDuration);
    
    const regenerated: Match[] = [];
    for (let r = 0; r < roundsToGenerate; r++) {
      const timeStart = lastTimeEnd + (r * config.matchDuration);
      const timeEnd = timeStart + config.matchDuration;
      
      let available = [...players];
      const courts = Math.floor(players.length / 4);

      for (let c = 0; c < courts; c++) {
        if (available.length < 4) break;

        const getPlayCount = (pid: string) => 
          [...keptMatches, ...manualFutures, ...regenerated]
            .filter(m => [...m.team1.players, ...m.team2.players].includes(pid)).length;

        available.sort((a, b) => getPlayCount(a.id) - getPlayCount(b.id));
        const selected = available.splice(0, 4);
        selected.sort((a, b) => b.level - a.level);

        regenerated.push({
          id: `m-reg-${r}-${c}-${Math.random().toString(36).substr(2, 5)}`,
          type: 'Auto',
          timeStart,
          timeEnd,
          team1: { players: [selected[0].id, selected[3].id], score: 0 },
          team2: { players: [selected[1].id, selected[2].id], score: 0 },
          status: 'Scheduled'
        });
      }
    }

    setSchedule([...keptMatches, ...manualFutures, ...regenerated].sort((a, b) => a.timeStart - b.timeStart));
    toast({ title: "Future matches rebalanced" });
  };

  // --- HANDLERS ---

  const handleConfigSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPlayers: Player[] = Array.from({ length: config.numPlayers }).map((_, i) => {
      if (players[i]) return players[i];
      return {
        id: `p-${i}-${Math.random().toString(36).substr(2, 5)}`,
        name: '',
        skill: 'Intermediate',
        level: 3
      };
    });
    setPlayers(updatedPlayers);
    setStep(2);
  };

  const updatePlayer = (index: number, updates: Partial<Player>) => {
    const newPlayers = [...players];
    newPlayers[index] = { ...newPlayers[index], ...updates };
    setPlayers(newPlayers);
  };

  const startTournament = () => {
    if (players.some(p => !p.name.trim())) {
      toast({ title: "Validation Error", description: "Please fill in all player names.", variant: "destructive" });
      return;
    }
    const newSchedule = generateSchedule(players, config);
    setSchedule(newSchedule);
    setStep(3);
  };

  const updateMatchScore = (matchId: string, team1Score: number, team2Score: number) => {
    setSchedule(prev => prev.map(m => 
      m.id === matchId 
        ? { 
            ...m, 
            team1: { ...m.team1, score: team1Score }, 
            team2: { ...m.team2, score: team2Score },
            status: 'Completed'
          } 
        : m
    ));
  };

  const swapPlayer = (matchId: string, team: 1 | 2, playerIndex: number, newPlayerId: string) => {
    setSchedule(prev => prev.map(m => {
      if (m.id !== matchId) return m;
      const newTeam = team === 1 ? { ...m.team1 } : { ...m.team2 };
      newTeam.players[playerIndex] = newPlayerId;
      return { 
        ...m, 
        [team === 1 ? 'team1' : 'team2']: newTeam,
        type: 'Manual' // Flag as manual so rebalance doesn't overwrite
      };
    }));
    rebalanceFutureMatches(matchId);
  };

  const deleteMatch = (matchId: string) => {
    if (!confirm("Are you sure you want to delete this match?")) return;
    setSchedule(prev => prev.filter(m => m.id !== matchId));
  };

  const formatMinutes = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  };

  // --- LEADERBOARD LOGIC ---
  const leaderboardData = useMemo(() => {
    const stats: Record<string, { wins: number; losses: number; points: number }> = {};
    players.forEach(p => stats[p.id] = { wins: 0, losses: 0, points: 0 });

    schedule.filter(m => m.status === 'Completed').forEach(m => {
      const isTeam1Win = m.team1.score > m.team2.score;
      const isDraw = m.team1.score === m.team2.score;

      m.team1.players.forEach(pid => {
        if (isTeam1Win) { stats[pid].wins++; stats[pid].points += 3; }
        else if (!isDraw) { stats[pid].losses++; }
        else { stats[pid].points += 1; }
      });

      m.team2.players.forEach(pid => {
        if (!isTeam1Win && !isDraw) { stats[pid].wins++; stats[pid].points += 3; }
        else if (isTeam1Win) { stats[pid].losses++; }
        else { stats[pid].points += 1; }
      });
    });

    return players
      .map(p => ({
        ...p,
        ...stats[p.id]
      }))
      .sort((a, b) => b.points - a.points || b.wins - a.wins || b.level - a.level || a.name.localeCompare(b.name));
  }, [players, schedule]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Activity className="h-8 w-8 text-primary" />
          Tennis Match Generator
        </h1>
        <TrustBadges />
        <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Professional Tournament Management</p>
      </div>

      {/* Progress Wizard Header */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-4 px-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1 last:flex-none">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all ${
              step === s 
                ? 'bg-primary text-white shadow-lg ring-4 ring-primary/20' 
                : step > s ? 'bg-green-500 text-white' : 'bg-muted text-muted-foreground border-2'
            }`}>
              {s}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest hidden sm:block ${step === s ? 'text-primary' : 'text-muted-foreground'}`}>
              {s === 1 ? 'Config' : s === 2 ? 'Roster' : 'Schedule'}
            </span>
            {s < 3 && <div className={`flex-1 h-0.5 mx-2 ${step > s ? 'bg-green-500' : 'bg-muted'}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <Card className="w-full max-w-2xl shadow-xl border-2 rounded-[2.5rem] overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <CardHeader className="bg-primary p-8 text-white border-b">
            <CardTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
              <Settings2 className="h-6 w-6 text-accent" />
              Tournament Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleConfigSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Duration (Mins)</Label>
                  <Input 
                    type="number" 
                    value={config.durationMinutes}
                    onChange={(e) => setConfig({ ...config, durationMinutes: Math.max(1, parseInt(e.target.value) || 0) })}
                    className="h-14 text-xl font-black rounded-2xl border-2"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Match Duration (Mins)</Label>
                  <Input 
                    type="number" 
                    value={config.matchDuration}
                    onChange={(e) => setConfig({ ...config, matchDuration: Math.max(1, parseInt(e.target.value) || 0) })}
                    className="h-14 text-xl font-black rounded-2xl border-2"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Number of Players</Label>
                <Input 
                  type="number" 
                  min="4"
                  value={config.numPlayers}
                  onChange={(e) => setConfig({ ...config, numPlayers: Math.max(4, parseInt(e.target.value) || 4) })}
                  className="h-14 text-xl font-black rounded-2xl border-2"
                />
              </div>
              <Button type="submit" className="w-full h-16 bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-[0.2em] shadow-xl rounded-2xl text-lg">
                Setup Player Roster <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="w-full max-w-4xl shadow-xl border-2 rounded-[2.5rem] overflow-hidden animate-in fade-in slide-in-from-right-4">
          <CardHeader className="bg-muted/30 p-8 border-b flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-primary">
                <UserPlus className="h-6 w-6" />
                Manage Player Roster
              </CardTitle>
            </div>
            <Badge variant="outline" className="h-8 px-4 font-black uppercase tracking-widest text-[10px] bg-white">
              {players.length} Registered
            </Badge>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
              {players.map((player, index) => (
                <div key={player.id} className="flex items-center gap-3 p-4 bg-muted/20 rounded-2xl border-2 border-transparent hover:border-primary/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-black text-xs text-primary">{index + 1}</div>
                  <Input 
                    placeholder="PLAYER NAME"
                    value={player.name}
                    onChange={(e) => updatePlayer(index, { name: e.target.value.toUpperCase() })}
                    className="flex-1 font-black uppercase h-10 border-none bg-transparent focus-visible:ring-0"
                  />
                  <Select 
                    value={player.skill} 
                    onValueChange={(val: SkillLevel) => updatePlayer(index, { 
                      skill: val, 
                      level: SKILL_CONFIG[val].level 
                    })}
                  >
                    <SelectTrigger className="w-32 h-10 font-bold uppercase text-[10px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(Object.keys(SKILL_CONFIG) as SkillLevel[]).map((sk) => (
                        <SelectItem key={sk} value={sk} className="font-bold uppercase text-[10px]">
                          {sk}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="h-16 px-8 border-2 font-black uppercase tracking-widest text-xs rounded-2xl">
                <ArrowLeft className="mr-2" /> Back
              </Button>
              <Button className="flex-1 h-16 bg-primary text-white font-black uppercase tracking-[0.2em] shadow-xl rounded-2xl text-lg" onClick={startTournament}>
                Generate Matches <Trophy className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in zoom-in-95 duration-500">
          {/* DASHBOARD LEFT: SCHEDULE */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between bg-card p-6 rounded-[2rem] border-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary"><CalendarDays className="h-6 w-6" /></div>
                <div>
                  <h2 className="font-black uppercase tracking-tight text-xl">Match Schedule</h2>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">{config.matchDuration} Min Rounds</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => { if(confirm("Reset schedule?")) setStep(2); }} className="font-black uppercase text-[10px] border-2">
                <RefreshCw className="mr-2 h-4 w-4" /> Reset
              </Button>
            </div>

            <div className="space-y-12">
              {Array.from({ length: Math.floor(config.durationMinutes / config.matchDuration) }).map((_, rIdx) => {
                const roundStart = rIdx * config.matchDuration;
                const roundMatches = schedule.filter(m => m.timeStart === roundStart);
                
                // Identify Bench players for this slot
                const playersInSlot = new Set(roundMatches.flatMap(m => [...m.team1.players, ...m.team2.players]));
                const benchPlayers = players.filter(p => !playersInSlot.has(p.id));

                return (
                  <div key={rIdx} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-primary text-white font-black px-6 py-2 rounded-full text-sm shadow-md">
                        {formatMinutes(roundStart)} - {formatMinutes(roundStart + config.matchDuration)}
                      </Badge>
                      <div className="h-px bg-border flex-1" />
                      {benchPlayers.length > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase opacity-40">Bench:</span>
                          <div className="flex -space-x-2">
                            {benchPlayers.map(p => (
                              <div key={p.id} className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[8px] font-black uppercase" title={p.name}>
                                {p.name.charAt(0)}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {roundMatches.map((match, mIdx) => (
                        <MatchCard 
                          key={match.id} 
                          match={match} 
                          courtNumber={mIdx + 1}
                          players={players}
                          benchPlayers={benchPlayers}
                          onUpdateScore={updateMatchScore}
                          onSwapPlayer={swapPlayer}
                          onDelete={deleteMatch}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DASHBOARD RIGHT: LEADERBOARD */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="shadow-2xl border-2 rounded-[2.5rem] sticky top-24 overflow-hidden">
              <CardHeader className="bg-primary p-6 text-white border-b">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <Medal className="h-5 w-5 text-accent" /> Standings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-muted/50 border-b">
                      <tr className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <th className="p-4 w-12 text-center">#</th>
                        <th className="p-4">Player</th>
                        <th className="p-4 text-center">W-L</th>
                        <th className="p-4 text-center bg-primary/5 text-primary">PTS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {leaderboardData.map((p, i) => (
                        <tr key={p.id} className={cn("hover:bg-muted/5 transition-colors", i < 3 && "bg-accent/5")}>
                          <td className="p-4 text-center font-black text-sm opacity-40">{i + 1}</td>
                          <td className="p-4">
                            <div className="flex flex-col">
                              <span className="font-black uppercase text-xs truncate max-w-[120px]">{p.name}</span>
                              <Badge variant="outline" className={cn("mt-1 text-[8px] h-4 w-fit px-1.5 font-bold uppercase", SKILL_CONFIG[p.skill].color)}>
                                {p.skill}
                              </Badge>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <span className="text-[10px] font-black tabular-nums">{p.wins}-{p.losses}</span>
                          </td>
                          <td className="p-4 text-center font-black text-primary text-lg tabular-nums bg-primary/5">{p.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-2 border-dashed p-6 rounded-3xl">
               <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-primary shrink-0" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest">Scoring Rule</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Win: 3 Pts | Draw: 1 Pt | Loss: 0 Pts. <br/>
                      Tie-breaker: Most wins, then higher skill.
                    </p>
                  </div>
               </div>
            </Card>
          </div>
        </div>
      )}

      <ArticleSection toolId="tennis" />
      <SmartAd />
      <SeoContent toolId="tennis" />
    </div>
  );
}

// --- SUB-COMPONENTS ---

function MatchCard({ 
  match, 
  courtNumber, 
  players, 
  benchPlayers, 
  onUpdateScore, 
  onSwapPlayer,
  onDelete 
}: { 
  match: Match; 
  courtNumber: number; 
  players: Player[]; 
  benchPlayers: Player[];
  onUpdateScore: (id: string, s1: number, s2: number) => void;
  onSwapPlayer: (matchId: string, team: 1 | 2, idx: number, newPid: string) => void;
  onDelete: (id: string) => void;
}) {
  const [s1, setS1] = useState(match.team1.score);
  const [s2, setS2] = useState(match.team2.score);

  const getPlayer = (id: string) => players.find(p => p.id === id);

  return (
    <Card className={cn(
      "overflow-hidden border-2 rounded-[2rem] shadow-lg transition-all",
      match.status === 'Completed' ? "border-green-500/20 opacity-90" : "border-primary/5"
    )}>
      <div className="bg-muted/30 px-6 py-2 border-b flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Court {courtNumber}</span>
          <Badge variant="outline" className="text-[8px] font-black h-4 px-1.5 uppercase opacity-40">{match.type}</Badge>
        </div>
        <div className="flex items-center gap-2">
          {match.status === 'Completed' && <Check className="h-4 w-4 text-green-500" />}
          <Button variant="ghost" size="icon" onClick={() => onDelete(match.id)} className="h-6 w-6 text-red-400 hover:text-red-600">
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-8 space-y-8">
        <div className="flex items-center gap-6">
          {/* Team 1 */}
          <div className="flex-1 space-y-3">
            {match.team1.players.map((pid, idx) => {
              const p = getPlayer(pid);
              return (
                <div key={pid} className="flex flex-col items-end group">
                  <div className="flex items-center gap-2">
                    <PlayerSwapPopover 
                      currentPlayer={p!} 
                      available={benchPlayers} 
                      onSelect={(newId) => onSwapPlayer(match.id, 1, idx, newId)} 
                    />
                    <span className="font-black uppercase text-xs truncate max-w-[80px]">{p?.name || '???'}</span>
                  </div>
                  <Badge className={cn("text-[7px] h-3 px-1 font-bold uppercase", SKILL_CONFIG[p?.skill || 'Intermediate'].color)}>
                    {p?.skill || 'N/A'}
                  </Badge>
                </div>
              );
            })}
          </div>

          {/* VS & SCORE */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <Input 
                type="number" 
                value={s1} 
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  setS1(val);
                  onUpdateScore(match.id, val, s2);
                }}
                className="w-12 h-12 text-center font-black text-xl border-2 rounded-xl bg-card"
              />
              <span className="font-black opacity-20 text-[10px] uppercase tracking-widest">vs</span>
              <Input 
                type="number" 
                value={s2} 
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  setS2(val);
                  onUpdateScore(match.id, s1, val);
                }}
                className="w-12 h-12 text-center font-black text-xl border-2 rounded-xl bg-card"
              />
            </div>
            {match.status === 'Scheduled' && (s1 > 0 || s2 > 0) && (
              <Badge className="bg-orange-500 text-[8px] animate-pulse">In Progress</Badge>
            )}
          </div>

          {/* Team 2 */}
          <div className="flex-1 space-y-3">
            {match.team2.players.map((pid, idx) => {
              const p = getPlayer(pid);
              return (
                <div key={pid} className="flex flex-col items-start group">
                  <div className="flex items-center gap-2">
                    <span className="font-black uppercase text-xs truncate max-w-[80px]">{p?.name || '???'}</span>
                    <PlayerSwapPopover 
                      currentPlayer={p!} 
                      available={benchPlayers} 
                      onSelect={(newId) => onSwapPlayer(match.id, 2, idx, newId)} 
                    />
                  </div>
                  <Badge className={cn("text-[7px] h-3 px-1 font-bold uppercase", SKILL_CONFIG[p?.skill || 'Intermediate'].color)}>
                    {p?.skill || 'N/A'}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PlayerSwapPopover({ currentPlayer, available, onSelect }: { currentPlayer: Player; available: Player[]; onSelect: (id: string) => void }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-1 hover:bg-muted rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
          <ArrowLeftRight className="h-3 w-3 text-primary" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2 rounded-2xl shadow-2xl border-2">
        <div className="space-y-2">
          <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground p-2">Swap "{currentPlayer.name}" with:</p>
          <div className="max-h-48 overflow-y-auto space-y-1">
            {available.length === 0 ? (
              <p className="text-[10px] font-bold text-center py-4 opacity-40">No bench players available</p>
            ) : (
              available.map(p => (
                <button
                  key={p.id}
                  onClick={() => onSelect(p.id)}
                  className="w-full flex items-center justify-between p-2 hover:bg-primary/5 rounded-xl transition-colors text-left group/btn"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase">{p.name}</span>
                    <span className="text-[8px] font-bold text-muted-foreground uppercase">{p.skill}</span>
                  </div>
                  <Badge className={cn("text-[8px] group-hover/btn:bg-primary group-hover/btn:text-white transition-colors", SKILL_CONFIG[p.skill].color.split(' ')[0])}>
                    LVL {p.level}
                  </Badge>
                </button>
              ))
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
