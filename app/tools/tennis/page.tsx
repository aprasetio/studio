'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
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
  RefreshCw,
  Trash2,
  ArrowLeftRight,
  Check,
  Medal,
  AlertCircle,
  Download,
  Upload,
  FileJson,
  FileSpreadsheet,
  Plus,
  X,
  Edit3,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import TrustBadges from '@/components/ui/TrustBadges';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import * as XLSX from 'xlsx';

// --- INTERFACES ---
type SkillLevel = 'Newbie' | 'Beginner' | 'Upper Beginner' | 'Intermediate' | 'Advance' | 'Pro';

interface Player {
  id: string;
  name: string;
  skill: SkillLevel;
  level: number;
}

interface MatchTeam {
  players: Player[];
  score: number | null;
}

interface Match {
  id: number | string;
  type: 'Auto' | 'Manual';
  court: number;
  timeStart: number;
  timeEnd: number;
  team1: MatchTeam;
  team2: MatchTeam;
  status: 'Scheduled' | 'Completed';
}

interface Config {
  numPlayers: number;
  courts: number;
  durationMinutes: number;
  matchDuration: number;
}

// --- CONSTANTS ---
const SKILL_CONFIG: Record<SkillLevel, { level: number; color: string }> = {
  'Newbie': { level: 1, color: 'bg-gray-100 text-gray-800 border-gray-200' },
  'Beginner': { level: 2, color: 'bg-blue-100 text-blue-800 border-blue-200' },
  'Upper Beginner': { level: 3, color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
  'Intermediate': { level: 4, color: 'bg-green-100 text-green-800 border-green-200' },
  'Advance': { level: 5, color: 'bg-orange-100 text-orange-800 border-orange-200' },
  'Pro': { level: 6, color: 'bg-purple-100 text-purple-800 border-purple-200' },
};

export default function TennisGeneratorPage() {
  // --- STATE ---
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState<Config>({
    numPlayers: 8,
    courts: 1,
    durationMinutes: 120,
    matchDuration: 30,
  });
  const [players, setPlayers] = useState<Player[]>([]);
  const [schedule, setSchedule] = useState<Match[]>([]);
  const [mounted, setMounted] = useState(false);

  // Modals State
  const [showRegenModal, setShowRegenModal] = useState(false);
  const [showEditPlayersModal, setShowEditPlayersModal] = useState(false);
  const [showCustomMatchModal, setShowCustomMatchModal] = useState(false);
  
  // Custom Match Form State
  const [customMatch, setCustomMatch] = useState({ p1: '', p2: '', p3: '', p4: '', court: 1 });

  const jsonInputRef = useRef<HTMLInputElement>(null);
  const excelInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setMounted(true); }, []);

  // --- CORE LOGIC: STATS ---
  function getPlayerStatsInSchedule(scheduleArray: Match[]) {
    const stats: Record<string, { played: number; scheduled: number }> = {};
    players.forEach(p => stats[p.id] = { played: 0, scheduled: 0 });
    
    scheduleArray.forEach(m => {
      const allP = [...m.team1.players, ...m.team2.players];
      const isCompleted = m.status === 'Completed';
      allP.forEach(p => {
        if (stats[p.id]) {
          if (isCompleted) stats[p.id].played++;
          else stats[p.id].scheduled++;
        }
      });
    });
    return stats;
  }

  // --- SCHEDULING ALGORITHM ---
  function generateUpcomingMatches(existingSchedule: Match[], startTime: number) {
    const tempSchedule = [...existingSchedule];
    let time = startTime;
    let idCounter = tempSchedule.length > 0 ? Math.max(...tempSchedule.map(m => Number(m.id) || 0)) + 1 : 1;
    const newMatches: Match[] = [];

    while (time < config.durationMinutes) {
      const stats = getPlayerStatsInSchedule([...tempSchedule, ...newMatches]);
      const usedInSlot = new Set<string>();
      let anyCourtFilled = false;

      for (let court = 1; court <= config.courts; court++) {
        const candidates = [...players]
          .filter(p => !usedInSlot.has(p.id))
          .sort(() => Math.random() - 0.5)
          .sort((a, b) => {
            const totalA = stats[a.id].played + stats[a.id].scheduled;
            const totalB = stats[b.id].played + stats[b.id].scheduled;
            if (totalA !== totalB) return totalA - totalB;
            return b.level - a.level;
          });

        if (candidates.length < 4) break;

        const selected = candidates.slice(0, 4);
        selected.sort((a, b) => b.level - a.level);
        selected.forEach(p => usedInSlot.add(p.id));

        // Balanced Pairing: 1+4 vs 2+3
        const t1 = [selected[0], selected[3]].sort((a, b) => a.name.localeCompare(b.name));
        const t2 = [selected[1], selected[2]].sort((a, b) => a.name.localeCompare(b.name));

        newMatches.push({
          id: idCounter++,
          type: 'Auto',
          court,
          timeStart: time,
          timeEnd: time + config.matchDuration,
          status: 'Scheduled',
          team1: { players: t1, score: null },
          team2: { players: t2, score: null }
        });
        anyCourtFilled = true;
      }

      if (!anyCourtFilled) break;
      time += config.matchDuration;
    }
    return newMatches;
  }

  const handleGenerateSchedule = () => {
    if (players.some(p => !p.name.trim())) {
      toast({ title: "Validation Error", description: "All player names must be filled.", variant: "destructive" });
      return;
    }
    const newSchedule = generateUpcomingMatches([], 0);
    setSchedule(newSchedule);
    setStep(3);
  };

  const rebalanceFutureMatches = (fromMatchIndex: number) => {
    const currentMatch = schedule[fromMatchIndex];
    const nextTime = currentMatch.timeEnd;
    const keptMatches = schedule.slice(0, fromMatchIndex + 1);
    const futureFixedMatches = schedule.slice(fromMatchIndex + 1).filter(m => m.type === 'Manual' || m.status === 'Completed');
    const baseSchedule = [...keptMatches, ...futureFixedMatches].sort((a, b) => Number(a.id) - Number(b.id));
    const newFutureMatches = generateUpcomingMatches(baseSchedule, nextTime);
    
    setSchedule([...baseSchedule, ...newFutureMatches].sort((a, b) => a.timeStart - b.timeStart || (Number(a.id) - Number(b.id))));
    toast({ title: "Future Rebalanced", description: "Schedule updated to maintain fairness." });
  };

  // --- ACTIONS ---
  const handleSaveScore = (matchId: number | string, s1: number, s2: number) => {
    if (isNaN(s1) || isNaN(s2) || s1 < 0 || s2 < 0) {
      toast({ title: "Invalid Score", variant: "destructive" });
      return;
    }
    setSchedule(prev => prev.map(m => 
      m.id === matchId ? { 
        ...m, 
        team1: { ...m.team1, score: s1 }, 
        team2: { ...m.team2, score: s2 }, 
        status: 'Completed' 
      } : m
    ));
  };

  const handleEditScore = (matchId: number | string) => {
    setSchedule(prev => prev.map(m => m.id === matchId ? { ...m, status: 'Scheduled' } : m));
  };

  const handleDeleteMatch = (matchId: number | string) => {
    setSchedule(prev => prev.filter(m => m.id !== matchId));
    toast({ title: "Match Deleted" });
  };

  const handleSwapPlayer = (matchId: number | string, team: 'team1' | 'team2', idx: number, newPlayerId: string) => {
    const matchIndex = schedule.findIndex(m => m.id === matchId);
    const match = schedule[matchIndex];
    const newPlayer = players.find(p => p.id === newPlayerId);
    if (!newPlayer) return;

    const newSchedule = [...schedule];
    newSchedule[matchIndex][team].players[idx] = newPlayer;
    setSchedule(newSchedule);

    if (match.type === 'Auto' && match.status === 'Scheduled') {
      rebalanceFutureMatches(matchIndex);
    }
  };

  const handleSaveCustomMatch = () => {
    const ids = [customMatch.p1, customMatch.p2, customMatch.p3, customMatch.p4];
    if (new Set(ids.filter(id => id)).size !== 4) {
      toast({ title: "Error", description: "Please select 4 unique players.", variant: "destructive" });
      return;
    }
    const sel = ids.map(id => players.find(p => p.id === id)!);
    const nid = schedule.length > 0 ? Math.max(...schedule.map(m => Number(m.id) || 0)) + 1 : 1;
    
    setSchedule(prev => [...prev, {
      id: nid,
      type: 'Manual',
      court: customMatch.court,
      timeStart: 0,
      timeEnd: 0,
      status: 'Scheduled',
      team1: { players: [sel[0], sel[1]], score: null },
      team2: { players: [sel[2], sel[3]], score: null }
    }]);
    setShowCustomMatchModal(false);
    setCustomMatch({ p1: '', p2: '', p3: '', p4: '', court: 1 });
  };

  // --- DATA PERSISTENCE ---
  const exportToExcel = () => {
    if (players.length === 0) return;
    const wb = XLSX.utils.book_new();
    const pWS = XLSX.utils.json_to_sheet(players);
    XLSX.utils.book_append_sheet(wb, pWS, "Players");
    
    const mData = schedule.map(m => ({
      ID: m.id, Type: m.type, Status: m.status,
      T1_P1: m.team1.players[0].name, T1_P2: m.team1.players[1].name,
      T1_Score: m.team1.score, T2_P1: m.team2.players[0].name, T2_P2: m.team2.players[1].name, T2_Score: m.team2.score
    }));
    const mWS = XLSX.utils.json_to_sheet(mData);
    XLSX.utils.book_append_sheet(wb, mWS, "Matches");
    
    XLSX.writeFile(wb, `Tennis_Tournament_${new Date().toISOString().slice(0,10)}.xlsx`);
  };

  const importFromExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = new Uint8Array(event.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        
        // Import Players
        const pSheet = workbook.Sheets["Players"];
        if (pSheet) {
          const pData = XLSX.utils.sheet_to_json(pSheet) as any[];
          setPlayers(pData.map(p => ({
            ...p,
            level: SKILL_CONFIG[p.skill as SkillLevel]?.level || 1
          })));
          setConfig(prev => ({ ...prev, numPlayers: pData.length }));
        }

        // Import Matches
        const mSheet = workbook.Sheets["Matches"];
        if (mSheet) {
          const mData = XLSX.utils.sheet_to_json(mSheet) as any[];
          const importedMatches: Match[] = mData.map(m => {
            const findP = (name: string) => players.find(p => p.name === name) || { id: name, name, skill: 'Newbie' as SkillLevel, level: 1 };
            return {
              id: m.ID, type: m.Type, status: m.Status, court: m.Court || 1, timeStart: 0, timeEnd: 0,
              team1: { players: [findP(m.T1_P1), findP(m.T1_P2)], score: m.T1_Score },
              team2: { players: [findP(m.T2_P1), findP(m.T2_P2)], score: m.T2_Score }
            };
          });
          setSchedule(importedMatches);
          setStep(3);
        }
        toast({ title: "Import Successful" });
      } catch (err) {
        toast({ title: "Import Failed", variant: "destructive" });
      }
    };
    reader.readAsArrayBuffer(file);
  };

  // --- LEADERBOARD LOGIC ---
  const leaderboardData = useMemo(() => {
    const stats: Record<string, { wins: number; losses: number; points: number }> = {};
    players.forEach(p => stats[p.id] = { wins: 0, losses: 0, points: 0 });

    schedule.filter(m => m.status === 'Completed').forEach(m => {
      const s1 = m.team1.score || 0;
      const s2 = m.team2.score || 0;
      const isT1Win = s1 > s2;
      const isDraw = s1 === s2;

      m.team1.players.forEach(p => {
        if (stats[p.id]) {
          if (isT1Win) { stats[p.id].wins++; stats[p.id].points += 3; }
          else if (!isDraw) { stats[p.id].losses++; }
          else { stats[p.id].points += 1; }
        }
      });

      m.team2.players.forEach(p => {
        if (stats[p.id]) {
          if (!isT1Win && !isDraw) { stats[p.id].wins++; stats[p.id].points += 3; }
          else if (isT1Win) { stats[p.id].losses++; }
          else { stats[p.id].points += 1; }
        }
      });
    });

    return players.map(p => ({ ...p, ...stats[p.id] }))
      .sort((a, b) => b.points - a.points || b.wins - a.wins || b.level - a.level);
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
        
        {/* UTILITY HEADER */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <Button variant="outline" size="sm" onClick={() => excelInputRef.current?.click()} className="text-[10px] font-black uppercase border-2">
            <Upload className="h-3 w-3 mr-1" /> Import
          </Button>
          <Button variant="outline" size="sm" onClick={exportToExcel} className="text-[10px] font-black uppercase border-2 text-emerald-600">
            <Download className="h-3 w-3 mr-1" /> Export
          </Button>
          <input type="file" ref={excelInputRef} onChange={importFromExcel} accept=".xlsx,.xls" className="hidden" />
        </div>
      </div>

      {/* PROGRESS WIZARD */}
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
              {s === 1 ? 'Config' : s === 2 ? 'Roster' : 'Dashboard'}
            </span>
            {s < 3 && <div className={`flex-1 h-0.5 mx-2 ${step > s ? 'bg-green-500' : 'bg-muted'}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <Card className="w-full max-w-xl shadow-xl border-2 rounded-[2.5rem] overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <CardHeader className="bg-primary p-8 text-white">
            <CardTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
              <Settings2 className="h-6 w-6 text-accent" /> Tournament Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase opacity-60">Total Duration (Mins)</Label>
                <Input type="number" value={config.durationMinutes} onChange={e => setConfig({...config, durationMinutes: Number(e.target.value)})} className="h-12 font-bold" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase opacity-60">Match Duration (Mins)</Label>
                <Input type="number" value={config.matchDuration} onChange={e => setConfig({...config, matchDuration: Number(e.target.value)})} className="h-12 font-bold" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase opacity-60">Player Count</Label>
                <Input type="number" min="4" value={config.numPlayers} onChange={e => setConfig({...config, numPlayers: Math.max(4, Number(e.target.value))})} className="h-12 font-bold" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase opacity-60">Number of Courts</Label>
                <Input type="number" min="1" max="10" value={config.courts} onChange={e => setConfig({...config, courts: Math.max(1, Math.min(10, Number(e.target.value)))})} className="h-12 font-bold" />
                <p className="text-[9px] text-muted-foreground">Min 4 pemain per lapangan. {config.courts} lapangan = min {config.courts * 4} pemain aktif.</p>
              </div>
            </div>
            <Button onClick={() => {
              const pCount = config.numPlayers;
              const newPlayers = Array.from({ length: pCount }).map((_, i) => players[i] || { id: `p-${Date.now()}-${i}`, name: '', skill: 'Newbie', level: 1 });
              setPlayers(newPlayers);
              setStep(2);
            }} className="w-full h-16 bg-accent text-white font-black uppercase tracking-widest rounded-2xl shadow-lg">
              Setup Roster <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="w-full max-w-4xl shadow-xl border-2 rounded-[2.5rem] overflow-hidden animate-in fade-in slide-in-from-right-4">
          <CardHeader className="bg-muted/30 p-8 border-b">
            <CardTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-primary">
              <UserPlus className="h-6 w-6" /> Player Roster
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
              {players.map((p, i) => (
                <div key={p.id} className="flex items-center gap-3 p-4 bg-muted/20 rounded-2xl border-2 hover:border-primary/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-black text-xs text-primary">{i+1}</div>
                  <Input 
                    placeholder="NAME" 
                    value={p.name} 
                    onChange={e => {
                      const updated = [...players];
                      updated[i].name = e.target.value.toUpperCase();
                      setPlayers(updated);
                    }}
                    className="flex-1 font-black h-10 border-none bg-transparent"
                  />
                  <Select value={p.skill} onValueChange={(val: SkillLevel) => {
                    const updated = [...players];
                    updated[i].skill = val;
                    updated[i].level = SKILL_CONFIG[val].level;
                    setPlayers(updated);
                  }}>
                    <SelectTrigger className="w-32 h-10 font-bold uppercase text-[10px]"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {Object.keys(SKILL_CONFIG).map(s => <SelectItem key={s} value={s} className="font-bold uppercase text-[10px]">{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="h-16 px-8 font-black uppercase rounded-2xl border-2">Back</Button>
              <Button onClick={handleGenerateSchedule} className="flex-1 h-16 bg-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-xl">
                Generate Schedule <Trophy className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in zoom-in-95">
          {/* DASHBOARD LEFT */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-card p-4 rounded-3xl border-2 shadow-sm flex flex-wrap gap-3 items-center justify-between">
              <div className="flex items-center gap-3 pl-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span className="font-black uppercase text-sm tracking-widest">Schedule: <b>{schedule.length}</b> Matches</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setShowRegenModal(true)} className="bg-orange-50 text-orange-700 hover:bg-orange-100 font-bold uppercase text-[10px] border-orange-200">
                  <RefreshCw className="h-3 w-3 mr-1" /> Acak Ulang
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowEditPlayersModal(true)} className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold uppercase text-[10px] border-indigo-200">
                  <Edit3 className="h-3 w-3 mr-1" /> Edit Pemain
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowCustomMatchModal(true)} className="bg-purple-50 text-purple-700 hover:bg-purple-100 font-bold uppercase text-[10px] border-purple-200">
                  <Plus className="h-3 w-3 mr-1" /> Custom Match
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {(() => {
                // Group matches by timeStart, preserve insertion order for manual (timeStart=0)
                const groups = new Map<string, Match[]>();
                schedule.forEach(m => {
                  const key = m.timeStart === 0 && m.type === 'Manual' ? `manual-${m.id}` : String(m.timeStart);
                  if (!groups.has(key)) groups.set(key, []);
                  groups.get(key)!.push(m);
                });
                let roundNum = 0;
                return Array.from(groups.entries()).map(([key, matches]) => {
                  const isTimedSlot = !key.startsWith('manual-');
                  if (isTimedSlot) roundNum++;
                  const tStart = matches[0].timeStart;
                  const tEnd = matches[0].timeEnd;
                  const fmtMin = (m: number) => `${Math.floor(m/60).toString().padStart(2,'0')}:${(m%60).toString().padStart(2,'0')}`;
                  return (
                    <div key={key} className="space-y-3">
                      {isTimedSlot && (
                        <div className="flex items-center gap-3 px-1">
                          <span className="text-[11px] font-black uppercase tracking-widest text-primary">Ronde {roundNum}</span>
                          <span className="text-[10px] text-muted-foreground font-bold">{fmtMin(tStart)} – {fmtMin(tEnd)}</span>
                          <div className="flex-1 h-px bg-border" />
                          <span className="text-[9px] text-muted-foreground">{matches.length} lapangan aktif</span>
                        </div>
                      )}
                      {matches.map(match => (
                        <MatchCard
                          key={match.id}
                          match={match}
                          players={players}
                          onSaveScore={handleSaveScore}
                          onEditScore={handleEditScore}
                          onDelete={handleDeleteMatch}
                          onSwapPlayer={handleSwapPlayer}
                          allPlayersInSlot={new Set(schedule.filter(m => m.timeStart === match.timeStart && !key.startsWith('manual-')).flatMap(m => [...m.team1.players, ...m.team2.players].map(p => p.id)))}
                        />
                      ))}
                    </div>
                  );
                });
              })()}
            </div>
          </div>

          {/* DASHBOARD RIGHT */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="shadow-2xl border-2 rounded-[2.5rem] sticky top-24 overflow-hidden">
              <CardHeader className="bg-primary p-6 text-white border-b">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <Medal className="h-5 w-5 text-accent" /> Standings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
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
                      <tr key={p.id} className={cn("hover:bg-muted/5", i < 3 && "bg-accent/5")}>
                        <td className="p-4 text-center font-black text-sm opacity-40">{i < 3 ? ['🥇','🥈','🥉'][i] : i + 1}</td>
                        <td className="p-4">
                          <div className="flex flex-col">
                            <span className="font-black uppercase text-xs truncate max-w-[120px]">{p.name}</span>
                            <Badge variant="outline" className={cn("mt-1 text-[8px] h-4 w-fit px-1.5 font-bold uppercase", SKILL_CONFIG[p.skill].color)}>
                              {p.skill}
                            </Badge>
                          </div>
                        </td>
                        <td className="p-4 text-center text-[10px] font-black tabular-nums">{p.wins}-{p.losses}</td>
                        <td className="p-4 text-center font-black text-primary text-lg tabular-nums bg-primary/5">{p.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="p-4 border-t flex justify-end">
                  <Button variant="ghost" onClick={() => { if(confirm("Reset all data?")) setStep(1); }} className="text-red-500 font-bold uppercase text-[9px] tracking-widest">Reset All Data</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* MODALS */}
      <Dialog open={showRegenModal} onOpenChange={setShowRegenModal}>
        <DialogContent className="rounded-3xl">
          <DialogHeader><DialogTitle className="text-orange-600 uppercase font-black">Acak Ulang Jadwal?</DialogTitle></DialogHeader>
          <DialogDescription>Semua skor yang sudah diisi akan dihapus dan jadwal baru akan dibuat secara otomatis.</DialogDescription>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setShowRegenModal(false)}>Batal</Button>
            <Button className="bg-orange-500 text-white" onClick={() => { handleGenerateSchedule(); setShowRegenModal(false); }}>Ya, Acak Ulang</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showEditPlayersModal} onOpenChange={setShowEditPlayersModal}>
        <DialogContent className="rounded-3xl max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle className="uppercase font-black">Edit Data Pemain</DialogTitle></DialogHeader>
          <div className="space-y-3 py-4">
            {players.map((p, i) => (
              <div key={p.id} className="flex items-center gap-2 border-b pb-2">
                <span className="text-[10px] font-bold w-6 text-muted-foreground">#{i+1}</span>
                <Input value={p.name} onChange={e => {
                  const updated = [...players];
                  updated[i].name = e.target.value.toUpperCase();
                  setPlayers(updated);
                }} className="h-9 font-bold" />
                <Select value={p.skill} onValueChange={(val: SkillLevel) => {
                  const updated = [...players];
                  updated[i].skill = val;
                  updated[i].level = SKILL_CONFIG[val].level;
                  setPlayers(updated);
                }}>
                  <SelectTrigger className="w-32 h-9 font-bold text-[10px] uppercase"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.keys(SKILL_CONFIG).map(s => <SelectItem key={s} value={s} className="font-bold uppercase text-[10px]">{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button className="w-full bg-primary" onClick={() => setShowEditPlayersModal(false)}>Simpan Perubahan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showCustomMatchModal} onOpenChange={setShowCustomMatchModal}>
        <DialogContent className="rounded-3xl max-w-lg">
          <DialogHeader><DialogTitle className="uppercase font-black">Tambah Match Manual</DialogTitle></DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase opacity-60">Lapangan</Label>
              <Select value={String(customMatch.court)} onValueChange={v => setCustomMatch({...customMatch, court: Number(v)})}>
                <SelectTrigger className="font-bold text-sm h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: config.courts }, (_, i) => i + 1).map(c => (
                    <SelectItem key={c} value={String(c)} className="font-bold">Lapangan {c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="bg-blue-50/50 p-4 rounded-2xl border-2 border-blue-100">
              <p className="font-black text-blue-800 text-[10px] mb-3 uppercase tracking-widest">TIM A</p>
              <div className="grid grid-cols-2 gap-2">
                <Select value={customMatch.p1} onValueChange={v => setCustomMatch({...customMatch, p1: v})}>
                  <SelectTrigger className="font-bold text-xs"><SelectValue placeholder="Pemain 1" /></SelectTrigger>
                  <SelectContent>{players.map(p => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}</SelectContent>
                </Select>
                <Select value={customMatch.p2} onValueChange={v => setCustomMatch({...customMatch, p2: v})}>
                  <SelectTrigger className="font-bold text-xs"><SelectValue placeholder="Pemain 2" /></SelectTrigger>
                  <SelectContent>{players.map(p => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <div className="text-center font-black text-muted-foreground/30">VS</div>
            <div className="bg-red-50/50 p-4 rounded-2xl border-2 border-red-100">
              <p className="font-black text-red-800 text-[10px] mb-3 uppercase tracking-widest">TIM B</p>
              <div className="grid grid-cols-2 gap-2">
                <Select value={customMatch.p3} onValueChange={v => setCustomMatch({...customMatch, p3: v})}>
                  <SelectTrigger className="font-bold text-xs"><SelectValue placeholder="Pemain 3" /></SelectTrigger>
                  <SelectContent>{players.map(p => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}</SelectContent>
                </Select>
                <Select value={customMatch.p4} onValueChange={v => setCustomMatch({...customMatch, p4: v})}>
                  <SelectTrigger className="font-bold text-xs"><SelectValue placeholder="Pemain 4" /></SelectTrigger>
                  <SelectContent>{players.map(p => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter><Button className="w-full bg-purple-600" onClick={handleSaveCustomMatch}>Buat Match</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <ArticleSection toolId="tennis" />
      <SmartAd />
      <SeoContent toolId="tennis" />
    </div>
  );
}

// --- SUB-COMPONENTS ---

function MatchCard({ 
  match, players, onSaveScore, onEditScore, onDelete, onSwapPlayer, allPlayersInSlot 
}: { 
  match: Match; 
  players: Player[]; 
  onSaveScore: (id: any, s1: number, s2: number) => void;
  onEditScore: (id: any) => void;
  onDelete: (id: any) => void;
  onSwapPlayer: (id: any, team: any, idx: number, pid: string) => void;
  allPlayersInSlot: Set<string>;
}) {
  const [s1, setS1] = useState<string>(match.team1.score?.toString() || '');
  const [s2, setS2] = useState<string>(match.team2.score?.toString() || '');
  const isDone = match.status === 'Completed';

  const benchPlayers = players.filter(p => !allPlayersInSlot.has(p.id) || [...match.team1.players, ...match.team2.players].some(mp => mp.id === p.id));

  const renderPlayer = (p: Player, team: 'team1' | 'team2', idx: number) => (
    <div className="flex items-center justify-between text-xs py-1.5 border-b border-muted-foreground/10 last:border-0 group">
      <div className="flex items-center gap-2 overflow-hidden">
        <span className="font-black uppercase truncate max-w-[100px]">{p.name}</span>
        <Badge variant="outline" className={cn("text-[7px] h-3.5 px-1 font-bold uppercase", SKILL_CONFIG[p.skill].color)}>{p.skill}</Badge>
      </div>
      {!isDone && (
        <Select value={p.id} onValueChange={val => onSwapPlayer(match.id, team, idx, val)}>
          <SelectTrigger className="w-8 h-8 p-0 border-none bg-transparent shadow-none"><ArrowLeftRight className="h-3 w-3 text-blue-500" /></SelectTrigger>
          <SelectContent>
            {benchPlayers.map(bp => <SelectItem key={p.id + bp.id} value={bp.id} className="text-[10px] font-bold uppercase">{bp.name}</SelectItem>)}
          </SelectContent>
        </Select>
      )}
    </div>
  );

  return (
    <Card className={cn("overflow-hidden border-2 rounded-[2rem] shadow-lg transition-all", isDone ? "border-emerald-500/20" : "border-primary/5")}>
      <div className="bg-muted/30 px-6 py-2 border-b flex justify-between items-center">
        <div className="flex items-center gap-2">
          {match.type === 'Manual'
            ? <Badge className="bg-purple-600 text-[8px] uppercase font-black">Manual</Badge>
            : <span className="text-[10px] font-black uppercase opacity-40">Match {match.id}</span>
          }
          <Badge variant="outline" className="text-[8px] font-black uppercase border-primary/30 text-primary">
            Lapangan {match.court}
          </Badge>
        </div>
        <Button variant="ghost" size="icon" onClick={() => onDelete(match.id)} className="h-6 w-6 text-muted-foreground hover:text-red-500"><Trash2 className="h-3.5 w-3.5" /></Button>
      </div>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 w-full bg-blue-50/30 rounded-2xl p-4 border border-blue-100">
            <p className="text-[8px] font-black text-blue-800 uppercase tracking-widest mb-2 opacity-50">TIM A</p>
            {renderPlayer(match.team1.players[0], 'team1', 0)}
            {renderPlayer(match.team1.players[1], 'team1', 1)}
          </div>

          <div className="flex flex-col items-center gap-2">
            {isDone ? (
              <div className="text-center group relative">
                <div className="text-3xl font-black">{match.team1.score} - {match.team2.score}</div>
                <Badge className="bg-emerald-100 text-emerald-700 text-[8px] uppercase">Selesai</Badge>
                <button onClick={() => onEditScore(match.id)} className="absolute -right-8 top-1 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary"><Edit3 className="h-4 w-4" /></button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Input type="number" value={s1} onChange={e => setS1(e.target.value)} className="w-12 h-12 text-center font-black text-xl border-2" placeholder="0" />
                  <span className="text-muted-foreground font-black opacity-30">-</span>
                  <Input type="number" value={s2} onChange={e => setS2(e.target.value)} className="w-12 h-12 text-center font-black text-xl border-2" placeholder="0" />
                </div>
                <Button onClick={() => onSaveScore(match.id, parseInt(s1), parseInt(s2))} className="bg-emerald-500 hover:bg-emerald-600 font-black uppercase text-[10px] h-12 px-4 shadow-lg">OK</Button>
              </div>
            )}
          </div>

          <div className="flex-1 w-full bg-red-50/30 rounded-2xl p-4 border border-red-100">
            <p className="text-[8px] font-black text-red-800 uppercase tracking-widest mb-2 opacity-50">TIM B</p>
            {renderPlayer(match.team2.players[0], 'team2', 0)}
            {renderPlayer(match.team2.players[1], 'team2', 1)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
