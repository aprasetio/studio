
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { 
  Plus, 
  Trash2, 
  Play, 
  RotateCcw, 
  Download, 
  Trophy, 
  Users, 
  CalendarDays,
  Settings2,
  UserPlus,
  SwapHorizontal,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { DataPersistence } from '@/components/DataPersistence';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Tennis Match Generator",
    subtitle: "Balanced doubles matchmaking for social clubs",
    config_title: "Match Configuration",
    roster_title: "Player Roster",
    court_count: "Number of Courts",
    match_dur: "Match Duration (mins)",
    total_dur: "Total Event Time (mins)",
    skill_level: "Skill Level",
    generate: "Generate Schedule",
    leaderboard: "Leaderboard",
    schedule: "Match Schedule",
    points: "Pts",
    win_loss: "W-L",
    swap: "Swap",
    reset: "Reset All",
    add_player: "Add Player",
    export_csv: "Export to Excel (.csv)",
    no_players: "Add players to begin",
    rank: "Rank",
    court: "Court",
    round: "Round",
    score: "Score",
    skills: {
      1: "Newbie",
      2: "Beginner",
      3: "Intermediate",
      4: "Advanced",
      5: "Pro"
    }
  },
  id: {
    title: "Pembuat Jadwal Tenis",
    subtitle: "Matchmaking ganda seimbang untuk klub sosial",
    config_title: "Konfigurasi Pertandingan",
    roster_title: "Daftar Pemain",
    court_count: "Jumlah Lapangan",
    match_dur: "Durasi Game (menit)",
    total_dur: "Total Waktu Event (menit)",
    skill_level: "Tingkat Skill",
    generate: "Buat Jadwal",
    leaderboard: "Klasemen",
    schedule: "Jadwal Main",
    points: "Poin",
    win_loss: "M-K",
    swap: "Tukar",
    reset: "Reset Semua",
    add_player: "Tambah Pemain",
    export_csv: "Ekspor ke Excel (.csv)",
    no_players: "Tambah pemain untuk memulai",
    rank: "Posisi",
    court: "Lap.",
    round: "Babak",
    score: "Skor",
    skills: {
      1: "Pemula",
      2: "Belajar",
      3: "Menengah",
      4: "Mahir",
      5: "Pro"
    }
  }
};

type SkillLevel = 1 | 2 | 3 | 4 | 5;

interface Player {
  id: string;
  name: string;
  skill: SkillLevel;
  playCount: number;
}

interface Match {
  id: string;
  round: number;
  court: number;
  time: string;
  team1: string[]; // Player IDs
  team2: string[]; // Player IDs
  score1: number | null;
  score2: number | null;
}

interface TennisState {
  config: {
    courts: number;
    matchDuration: number;
    totalDuration: number;
  };
  players: Player[];
  schedule: Match[];
}

const DEFAULT_STATE: TennisState = {
  config: {
    courts: 1,
    matchDuration: 30,
    totalDuration: 120
  },
  players: [],
  schedule: []
};

export default function TennisGeneratorPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];
  const skills = UI_TEXT[lang]?.skills || UI_TEXT['en'].skills;

  const [state, setState] = useLocalStorage<TennisState>('versokit-tennis-v1', DEFAULT_STATE);
  const [mounted, setMounted] = useState(false);
  const [newPlayerName, setNewName] = useState('');
  const [newPlayerSkill, setNewSkill] = useState<SkillLevel>(3);

  useEffect(() => { setMounted(true); }, []);

  const totalRounds = Math.floor(state.config.totalDuration / state.config.matchDuration);

  // Leaderboard Calculation
  const leaderboard = useMemo(() => {
    const stats: Record<string, { win: number, loss: number, pts: number }> = {};
    state.players.forEach(p => stats[p.id] = { win: 0, loss: 0, pts: 0 });

    state.schedule.forEach(m => {
      if (m.score1 !== null && m.score2 !== null) {
        const t1Win = m.score1 > m.score2;
        const t2Win = m.score2 > m.score1;

        m.team1.forEach(pid => {
          if (t1Win) { stats[pid].win++; stats[pid].pts += 3; }
          if (t2Win) { stats[pid].loss++; }
        });
        m.team2.forEach(pid => {
          if (t2Win) { stats[pid].win++; stats[pid].pts += 3; }
          if (t1Win) { stats[pid].loss++; }
        });
      }
    });

    return state.players
      .map(p => ({ ...p, ...stats[p.id] }))
      .sort((a, b) => b.pts - a.pts || b.win - a.win);
  }, [state.players, state.schedule]);

  const addPlayer = () => {
    if (!newPlayerName.trim()) return;
    const player: Player = {
      id: `p-${Date.now()}`,
      name: newPlayerName.trim().toUpperCase(),
      skill: newPlayerSkill,
      playCount: 0
    };
    setState(prev => ({ ...prev, players: [...prev.players, player] }));
    setNewName('');
  };

  const removePlayer = (id: string) => {
    setState(prev => ({ 
      ...prev, 
      players: prev.players.filter(p => p.id !== id),
      schedule: [] // Reset schedule if roster changes to prevent errors
    }));
  };

  const generateSchedule = () => {
    if (state.players.length < 4) {
      toast({ title: "Min 4 players", variant: "destructive" });
      return;
    }

    const newSchedule: Match[] = [];
    const tempPlayers = state.players.map(p => ({ ...p, currentPlayCount: 0 }));
    
    for (let r = 1; r <= totalRounds; r++) {
      // Prioritize players with least play count
      const available = [...tempPlayers].sort((a, b) => a.currentPlayCount - b.currentPlayCount);
      
      for (let c = 1; c <= state.config.courts; c++) {
        if (available.length < 4) break;

        // Take top 4 for this court
        const courtPlayers = available.splice(0, 4);
        // Sort by skill to balance: (1+4) vs (2+3)
        courtPlayers.sort((a, b) => b.skill - a.skill);

        const team1 = [courtPlayers[0].id, courtPlayers[3].id];
        const team2 = [courtPlayers[1].id, courtPlayers[2].id];

        // Increment play counts
        courtPlayers.forEach(p => {
          const idx = tempPlayers.findIndex(tp => tp.id === p.id);
          tempPlayers[idx].currentPlayCount++;
        });

        newSchedule.push({
          id: `r${r}-c${c}`,
          round: r,
          court: c,
          time: `${(r-1) * state.config.matchDuration}m`,
          team1,
          team2,
          score1: null,
          score2: null
        });
      }
    }

    setState(prev => ({ ...prev, schedule: newSchedule }));
    toast({ title: t('generate') });
  };

  const updateScore = (matchId: string, team: 1 | 2, val: string) => {
    const score = val === '' ? null : parseInt(val);
    setState(prev => ({
      ...prev,
      schedule: prev.schedule.map(m => m.id === matchId ? { ...m, [team === 1 ? 'score1' : 'score2']: score } : m)
    }));
  };

  const exportCSV = () => {
    const headers = ["Round", "Court", "Team 1", "Team 2", "Score"];
    const rows = state.schedule.map(m => {
      const t1 = m.team1.map(id => state.players.find(p => p.id === id)?.name).join(" & ");
      const t2 = m.team2.map(id => state.players.find(p => p.id === id)?.name).join(" & ");
      const score = m.score1 !== null ? `${m.score1}-${m.score2}` : "vs";
      return [m.round, m.court, `"${t1}"`, `"${t2}"`, score].join(",");
    });

    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tennis-schedule-${Date.now()}.csv`;
    link.click();
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <p className="text-muted-foreground font-medium">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* SETUP COLUMN */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="shadow-lg border-2 rounded-[2rem]">
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-primary">
                <Settings2 className="h-4 w-4" /> {t('config_title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase opacity-60">{t('court_count')}</Label>
                <Input type="number" value={state.config.courts} onChange={e => setState({...state, config: {...state.config, courts: parseInt(e.target.value) || 1}})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase opacity-60">{t('match_dur')}</Label>
                  <Input type="number" value={state.config.matchDuration} onChange={e => setState({...state, config: {...state.config, matchDuration: parseInt(e.target.value) || 30}})} />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase opacity-60">{t('total_dur')}</Label>
                  <Input type="number" value={state.config.totalDuration} onChange={e => setState({...state, config: {...state.config, totalDuration: parseInt(e.target.value) || 120}})} />
                </div>
              </div>
              <Button onClick={generateSchedule} className="w-full bg-primary font-black uppercase tracking-widest h-12 shadow-lg">
                <Play className="mr-2 h-4 w-4" /> {t('generate')}
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 rounded-[2rem]">
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-primary">
                <Users className="h-4 w-4" /> {t('roster_title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Input 
                    placeholder="NAME..." 
                    value={newPlayerName} 
                    onChange={e => setNewName(e.target.value.toUpperCase())} 
                    className="font-bold"
                  />
                  <Select value={newPlayerSkill.toString()} onValueChange={v => setNewSkill(parseInt(v) as SkillLevel)}>
                    <SelectTrigger className="font-bold">
                      <SelectValue placeholder="Skill" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5].map(s => <SelectItem key={s} value={s.toString()}>{skills[s]}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Button onClick={addPlayer} className="w-full bg-accent font-black uppercase tracking-widest">
                    <UserPlus className="mr-2 h-4 w-4" /> {t('add_player')}
                  </Button>
                </div>
              </div>

              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                {state.players.map(p => (
                  <div key={p.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-xl border group hover:border-primary/30 transition-all">
                    <div>
                      <p className="text-xs font-black uppercase tracking-tight">{p.name}</p>
                      <Badge variant="outline" className="text-[8px] uppercase font-bold py-0 h-4 mt-1 border-primary/20">
                        {skills[p.skill]}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removePlayer(p.id)} className="h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {state.players.length === 0 && <p className="text-center text-[10px] font-bold uppercase opacity-30 py-10">{t('no_players')}</p>}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MAIN SCHEDULE COLUMN */}
        <div className="lg:col-span-5 space-y-8">
          <Card className="shadow-2xl border-4 border-primary/10 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="bg-primary p-6 text-white">
              <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                <CalendarDays className="h-5 w-5" /> {t('schedule')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[800px] overflow-y-auto">
                {state.schedule.length > 0 ? (
                  <div className="divide-y-4 divide-muted/30">
                    {Array.from({ length: totalRounds }).map((_, rIdx) => (
                      <div key={rIdx} className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                            {t('round')} {rIdx + 1}
                          </span>
                          <span className="text-[10px] font-bold text-muted-foreground uppercase">{rIdx * state.config.matchDuration}m</span>
                        </div>
                        <div className="grid gap-4">
                          {state.schedule.filter(m => m.round === rIdx + 1).map(m => (
                            <div key={m.id} className="p-4 bg-muted/10 rounded-2xl border-2 space-y-4">
                              <div className="flex justify-between items-center text-[10px] font-black uppercase text-muted-foreground opacity-50">
                                <span>{t('court')} {m.court}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex-1 space-y-1 text-right">
                                  {m.team1.map(pid => (
                                    <p key={pid} className="text-xs font-black uppercase tracking-tighter truncate">
                                      {state.players.find(p => p.id === pid)?.name}
                                    </p>
                                  ))}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Input 
                                    type="number" 
                                    value={m.score1 ?? ''} 
                                    onChange={e => updateScore(m.id, 1, e.target.value)}
                                    className="w-10 h-10 p-0 text-center font-black text-lg bg-card border-2" 
                                  />
                                  <span className="font-black opacity-20 text-[10px]">VS</span>
                                  <Input 
                                    type="number" 
                                    value={m.score2 ?? ''} 
                                    onChange={e => updateScore(m.id, 2, e.target.value)}
                                    className="w-10 h-10 p-0 text-center font-black text-lg bg-card border-2" 
                                  />
                                </div>
                                <div className="flex-1 space-y-1 text-left">
                                  {m.team2.map(pid => (
                                    <p key={pid} className="text-xs font-black uppercase tracking-tighter truncate">
                                      {state.players.find(p => p.id === pid)?.name}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-24 text-center opacity-30 flex flex-col items-center gap-4">
                    <CalendarDays className="h-16 w-16" />
                    <p className="font-black uppercase tracking-widest">{t('generate')} First</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* LEADERBOARD COLUMN */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden sticky top-24">
            <CardHeader className="bg-accent p-6 text-white border-b">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                <Trophy className="h-4 w-4" /> {t('leaderboard')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-muted/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground border-b">
                  <tr>
                    <th className="p-4 text-center w-10">#</th>
                    <th className="p-4 text-left">PLAYER</th>
                    <th className="p-4 text-center w-12">{t('win_loss')}</th>
                    <th className="p-4 text-center w-12 text-primary">{t('points')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {leaderboard.map((p, i) => (
                    <tr key={p.id} className={cn("hover:bg-muted/10 transition-colors", i < 3 && "bg-accent/5")}>
                      <td className="p-4 text-center font-black text-sm opacity-40">{i + 1}</td>
                      <td className="p-4">
                        <p className="text-xs font-black uppercase truncate max-w-[80px]">{p.name}</p>
                        <span className="text-[8px] font-bold text-muted-foreground uppercase">{skills[p.skill]}</span>
                      </td>
                      <td className="p-4 text-center text-[10px] font-bold tabular-nums">{p.win}-{p.loss}</td>
                      <td className="p-4 text-center font-black text-accent tabular-nums">{p.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Button onClick={exportCSV} variant="outline" className="w-full border-2 font-black uppercase tracking-widest text-[10px] h-14 rounded-2xl hover:bg-green-50 hover:text-green-700 hover:border-green-200">
            <Download className="mr-2 h-4 w-4" /> {t('export_csv')}
          </Button>
        </div>
      </div>

      <div className="w-full mt-12 pt-12 border-t-4 border-dashed space-y-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <DataPersistence 
            data={state} 
            onRestore={(data) => setState(data)} 
            fileNamePrefix="versokit-tennis" 
          />
          <div className="bg-green-50 border-2 border-green-100 p-8 rounded-[2rem] flex-1 max-w-md">
            <div className="flex items-center gap-3 text-green-700 mb-4">
              <ShieldCheck className="h-6 w-6" />
              <h3 className="font-black uppercase tracking-tight">Privacy Logic</h3>
            </div>
            <p className="text-xs text-green-800/70 font-medium leading-relaxed uppercase tracking-wider">
              {lang === 'id' ? 'Algoritma Fair-Play berjalan 100% di browser Anda. Data tidak pernah dikirim ke server.' : 'The Fair-Play algorithm runs 100% in your browser. No data is ever sent to our servers.'}
            </p>
          </div>
        </div>
      </div>

      <SmartAd />
      <SeoContent toolId="tennis" />
    </div>
  );
}
