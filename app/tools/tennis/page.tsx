'use client';

import React, { useState, useMemo, useEffect } from 'react';
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
  ChevronRight,
  ShieldCheck,
  RefreshCw,
  PlusCircle,
  Pencil,
  X,
  Clock,
  Activity
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { DataPersistence } from '@/components/DataPersistence';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { ArticleSection } from '@/components/ArticleSection';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useTennisStore, type SkillLevel, type Player, type Match } from './store/useTennisStore';
import TrustBadges from '@/components/ui/TrustBadges';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Tennis Match Generator Pro",
    subtitle: "Professional matchmaking & tournament management",
    config_title: "Configuration",
    roster_title: "Players",
    generate: "Generate Schedule",
    leaderboard: "Leaderboard",
    schedule: "Matches",
    points: "Pts",
    win_loss: "W-L",
    swap: "Swap Player",
    reset: "Reset All",
    add_player: "Add Player",
    export_csv: "Export CSV",
    custom_match: "Custom Match",
    edit_roster: "Manage Roster",
    round: "Round",
    court: "Court",
    duration_total: "Total Duration",
    duration_match: "Match Duration",
    mins: "mins",
    status_scheduled: "Scheduled",
    status_finished: "Finished",
    alert_regen: "Regenerate Schedule?",
    msg_regen: "Current scores will be lost.",
    skills: { 1: "Newbie", 2: "Beginner", 3: "Intermediate", 4: "Advanced", 5: "Pro" }
  },
  id: {
    title: "Tennis Match Generator Pro",
    subtitle: "Manajemen turnamen & matchmaking profesional",
    config_title: "Konfigurasi",
    roster_title: "Pemain",
    generate: "Buat Jadwal",
    leaderboard: "Klasemen",
    schedule: "Pertandingan",
    points: "Poin",
    win_loss: "M-K",
    swap: "Tukar Pemain",
    reset: "Reset Semua",
    add_player: "Tambah Pemain",
    export_csv: "Ekspor CSV",
    custom_match: "Match Manual",
    edit_roster: "Kelola Roster",
    round: "Babak",
    court: "Lap.",
    duration_total: "Durasi Sewa",
    duration_match: "Durasi Match",
    mins: "menit",
    status_scheduled: "Terjadwal",
    status_finished: "Selesai",
    alert_regen: "Acak Ulang Jadwal?",
    msg_regen: "Skor saat ini akan hilang.",
    skills: { 1: "Pemula", 2: "Belajar", 3: "Menengah", 4: "Mahir", 5: "Pro" }
  },
  es: {
    title: "Generador de Partidos de Tenis Pro",
    subtitle: "Gestión profesional de torneos y emparejamientos",
    config_title: "Configuración",
    roster_title: "Jugadores",
    generate: "Generar Horario",
    leaderboard: "Clasificación",
    schedule: "Partidos",
    points: "Pts",
    win_loss: "G-P",
    swap: "Cambiar Jugador",
    reset: "Reiniciar Todo",
    add_player: "Añadir Jugador",
    export_csv: "Exportar CSV",
    custom_match: "Partido Manual",
    edit_roster: "Gestionar Lista",
    round: "Ronda",
    court: "Pista",
    duration_total: "Duración Total",
    duration_match: "Duración Partido",
    mins: "min",
    status_scheduled: "Programado",
    status_finished: "Terminado",
    alert_regen: "¿Regenerar Horario?",
    msg_regen: "Las puntuaciones se perderán.",
    skills: { 1: "Novato", 2: "Principiante", 3: "Intermedio", 4: "Avanzado", 5: "Pro" }
  },
  pt: {
    title: "Gerador de Partidas de Tênis Pro",
    subtitle: "Gestão profissional de torneios e matchmaking",
    config_title: "Configuração",
    roster_title: "Jogadores",
    generate: "Gerar Horário",
    leaderboard: "Classificação",
    schedule: "Partidas",
    points: "Pts",
    win_loss: "V-D",
    swap: "Trocar Jogador",
    reset: "Reiniciar Tudo",
    add_player: "Adicionar Jogador",
    export_csv: "Exportar CSV",
    custom_match: "Partida Manual",
    edit_roster: "Gerir Lista",
    round: "Rodada",
    court: "Quadra",
    duration_total: "Duração Total",
    duration_match: "Duração Partida",
    mins: "min",
    status_scheduled: "Agendado",
    status_finished: "Finalizado",
    alert_regen: "Regenerar Horário?",
    msg_regen: "As pontuações serão perdidas.",
    skills: { 1: "Novato", 2: "Iniciante", 3: "Intermediário", 4: "Avançado", 5: "Pro" }
  },
  de: {
    title: "Tennis-Match-Generator Pro",
    subtitle: "Professionelles Matchmaking & Turnierverwaltung",
    config_title: "Konfiguration",
    roster_title: "Spieler",
    generate: "Zeitplan erstellen",
    leaderboard: "Rangliste",
    schedule: "Spiele",
    points: "Pkt",
    win_loss: "S-N",
    swap: "Spieler tauschen",
    reset: "Alles zurücksetzen",
    add_player: "Spieler hinzufügen",
    export_csv: "CSV Exportieren",
    custom_match: "Benutzerdefiniertes Match",
    edit_roster: "Kader verwalten",
    round: "Runde",
    court: "Platz",
    duration_total: "Gesamtdauer",
    duration_match: "Matchdauer",
    mins: "min",
    status_scheduled: "Geplant",
    status_finished: "Beendet",
    alert_regen: "Zeitplan neu erstellen?",
    msg_regen: "Aktuelle Spielstände gehen verloren.",
    skills: { 1: "Neuling", 2: "Anfänger", 3: "Fortgeschritten", 4: "Profi", 5: "Meister" }
  },
  fr: {
    title: "Générateur de Matchs Pro",
    subtitle: "Gestion professionnelle de tournois",
    config_title: "Configuration",
    roster_title: "Joueurs",
    generate: "Générer Planning",
    leaderboard: "Classement",
    schedule: "Matchs",
    points: "Pts",
    win_loss: "V-D",
    swap: "Echanger",
    reset: "Tout réinitialiser",
    add_player: "Ajouter Joueur",
    export_csv: "Exporter CSV",
    custom_match: "Match Personnalisé",
    edit_roster: "Gérer la Liste",
    round: "Tour",
    court: "Court",
    duration_total: "Durée Totale",
    duration_match: "Durée Match",
    mins: "min",
    status_scheduled: "Prévu",
    status_finished: "Terminé",
    alert_regen: "Régénérer le planning ?",
    msg_regen: "Les scores actuels seront perdus.",
    skills: { 1: "Débutant", 2: "Apprenti", 3: "Intermédiaire", 4: "Avancé", 5: "Pro" }
  },
  it: {
    title: "Generatore Partite Pro",
    subtitle: "Gestione tornei e matchmaking",
    config_title: "Configurazione",
    roster_title: "Giocatori",
    generate: "Genera Programma",
    leaderboard: "Classifica",
    schedule: "Partite",
    points: "Pti",
    win_loss: "V-S",
    swap: "Scambia",
    reset: "Resetta Tutto",
    add_player: "Aggiungi Giocatore",
    export_csv: "Esporta CSV",
    custom_match: "Partita Manuale",
    edit_roster: "Gestisci Lista",
    round: "Turno",
    court: "Campo",
    duration_total: "Durata Totale",
    duration_match: "Durata Partita",
    mins: "min",
    status_scheduled: "Programmato",
    status_finished: "Finito",
    alert_regen: "Rigenerare Programma?",
    msg_regen: "I punteggi attuali andranno persi.",
    skills: { 1: "Novizio", 2: "Principiante", 3: "Intermedio", 4: "Avanzato", 5: "Pro" }
  }
};

const SKILL_COLORS: Record<number, string> = {
  1: "bg-slate-100 text-slate-600 border-slate-200",
  2: "bg-green-100 text-green-700 border-green-200",
  3: "bg-blue-100 text-blue-700 border-blue-200",
  4: "bg-orange-100 text-orange-700 border-orange-200",
  5: "bg-purple-100 text-purple-700 border-purple-200"
};

export default function TennisGeneratorPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];
  const skills = UI_TEXT[lang]?.skills || UI_TEXT['en'].skills;

  const { 
    config, setConfig, players, addPlayer, removePlayer, updatePlayer,
    schedule, generateSchedule, updateScore, swapPlayer, addCustomMatch, deleteMatch, resetAll 
  } = useTennisStore();

  const [mounted, setMounted] = useState(false);
  const [newPlayerName, setNewName] = useState('');
  const [newPlayerSkill, setNewSkill] = useState<SkillLevel>(3);
  
  // Modal States
  const [isCustomMatchOpen, setIsCustomMatchOpen] = useState(false);
  const [customPlayers, setCustomPlayers] = useState<string[]>(['', '', '', '']);
  const [customRound, setCustomRound] = useState(1);
  const [customCourt, setCustomCourt] = useState(1);

  const [swapData, setSwapData] = useState<{ matchId: string, team: 1|2, index: number } | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const totalRounds = Math.max(1, Math.floor(config.totalDuration / config.matchDuration), ...schedule.map(m => m.round));

  const leaderboard = useMemo(() => {
    const stats: Record<string, { win: number, loss: number, pts: number }> = {};
    players.forEach(p => stats[p.id] = { win: 0, loss: 0, pts: 0 });

    schedule.forEach(m => {
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

    return players
      .map(p => ({ ...p, ...stats[p.id] }))
      .sort((a, b) => b.pts - a.pts || b.win - a.win);
  }, [players, schedule]);

  const handleAddPlayer = () => {
    if (!newPlayerName.trim()) return;
    addPlayer(newPlayerName.toUpperCase(), newPlayerSkill);
    setNewName('');
  };

  const handleGenerate = () => {
    if (players.length < 4) {
      toast({ title: lang === 'id' ? "Min 4 pemain dibutuhkan" : "Min 4 players required", variant: "destructive" });
      return;
    }
    if (schedule.length > 0 && !confirm(t('msg_regen'))) return;
    generateSchedule();
    toast({ title: lang === 'id' ? "Jadwal Berhasil Dibuat!" : "Schedule Generated!" });
  };

  const handleAddCustom = () => {
    if (customPlayers.some(p => !p)) return;
    addCustomMatch(customPlayers[0], customPlayers[1], customPlayers[2], customPlayers[3], customRound, customCourt);
    setIsCustomMatchOpen(false);
    setCustomPlayers(['', '', '', '']);
    toast({ title: t('custom_match') });
  };

  const exportCSV = () => {
    const headers = ["Round", "Court", "Team 1", "Team 2", "Score"];
    const rows = schedule.map(m => {
      const t1 = m.team1.map(id => players.find(p => p.id === id)?.name || '?').join(" & ");
      const t2 = m.team2.map(id => players.find(p => p.id === id)?.name || '?').join(" & ");
      return [m.round, m.court, `"${t1}"`, `"${t2}"`, m.score1 !== null ? `${m.score1}-${m.score2}` : "vs"].join(",");
    });
    const blob = new Blob([[headers.join(","), ...rows].join("\n")], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tennis-tournament-${Date.now()}.csv`;
    link.click();
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Activity className="h-8 w-8 text-primary" />
          {t('title')}
        </h1>
        <TrustBadges />
        <p className="text-muted-foreground font-medium">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* SETUP & ROSTER */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="shadow-lg border-2 rounded-[2rem]">
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-primary">
                <Settings2 className="h-4 w-4" /> {t('config_title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-[10px] font-black uppercase opacity-60">{t('court')}</Label>
                  <Input type="number" value={config.courts} onChange={e => setConfig({ courts: parseInt(e.target.value) || 1 })} />
                </div>
                <div className="space-y-1">
                  <Label className="text-[10px] font-black uppercase opacity-60">{t('duration_match')} ({t('mins')})</Label>
                  <Input type="number" value={config.matchDuration} onChange={e => setConfig({ matchDuration: parseInt(e.target.value) || 30 })} />
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-[10px] font-black uppercase opacity-60">{t('duration_total')} ({t('mins')})</Label>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={config.totalDuration} onChange={e => setConfig({ totalDuration: parseInt(e.target.value) || 120 })} />
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                <p className="text-[10px] font-black uppercase text-primary/60 tracking-widest mb-1">{lang === 'id' ? 'Ringkasan Sesi' : 'Session Summary'}</p>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-black text-primary">{Math.floor(config.totalDuration / config.matchDuration)}</span>
                  <span className="text-xs font-bold text-muted-foreground uppercase">{lang === 'id' ? 'Total Babak' : 'Total Rounds Possible'}</span>
                </div>
              </div>

              <Button onClick={handleGenerate} className="w-full bg-primary text-primary-foreground font-black uppercase tracking-widest h-12 shadow-lg hover:bg-primary/90">
                <Play className="mr-2 h-4 w-4" /> {t('generate')}
              </Button>
              
              <div className="flex gap-2">
                <Dialog open={isCustomMatchOpen} onOpenChange={setIsCustomMatchOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex-1 font-black uppercase tracking-widest text-[10px] h-10 border-2">
                      <PlusCircle className="mr-2 h-4 w-4" /> {t('custom_match')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-3xl max-w-md">
                    <DialogHeader><DialogTitle className="font-black uppercase">{t('custom_match')}</DialogTitle></DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label className="text-xs font-bold uppercase">{t('round')}</Label>
                          <Input type="number" value={customRound} onChange={e => setCustomRound(parseInt(e.target.value) || 1)} />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs font-bold uppercase">{t('court')}</Label>
                          <Input type="number" value={customCourt} onChange={e => setCustomCourt(parseInt(e.target.value) || 1)} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase">{lang === 'id' ? 'Tim A' : 'Team A'}</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {[0, 1].map(i => (
                            <Select key={i} value={customPlayers[i]} onValueChange={v => {
                              const cp = [...customPlayers]; cp[i] = v; setCustomPlayers(cp);
                            }}>
                              <SelectTrigger className="font-bold"><SelectValue placeholder={globalT('col_player')} /></SelectTrigger>
                              <SelectContent>{players.map(p => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}</SelectContent>
                            </Select>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase">{lang === 'id' ? 'Tim B' : 'Team B'}</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {[2, 3].map(i => (
                            <Select key={i} value={customPlayers[i]} onValueChange={v => {
                              const cp = [...customPlayers]; cp[i] = v; setCustomPlayers(cp);
                            }}>
                              <SelectTrigger className="font-bold"><SelectValue placeholder={globalT('col_player')} /></SelectTrigger>
                              <SelectContent>{players.map(p => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}</SelectContent>
                            </Select>
                          ))}
                        </div>
                      </div>
                    </div>
                    <DialogFooter><Button onClick={handleAddCustom} className="w-full font-black uppercase tracking-widest">{globalT('add')}</Button></DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Button variant="ghost" onClick={resetAll} className="h-10 text-destructive hover:bg-destructive/5 font-black uppercase text-[10px]">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 rounded-[2rem]">
            <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-primary">
                <Users className="h-4 w-4" /> {t('roster_title')} ({players.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex flex-col gap-2">
                <Input placeholder="NAME..." value={newPlayerName} onChange={e => setNewName(e.target.value.toUpperCase())} className="font-bold uppercase" />
                <div className="flex gap-2">
                  <Select value={newPlayerSkill.toString()} onValueChange={v => setNewSkill(parseInt(v) as SkillLevel)}>
                    <SelectTrigger className="font-bold flex-1"><SelectValue /></SelectTrigger>
                    <SelectContent>{[1,2,3,4,5].map(s => <SelectItem key={s} value={s.toString()}>{skills[s]}</SelectItem>)}</SelectContent>
                  </Select>
                  <Button onClick={handleAddPlayer} className="bg-accent text-accent-foreground font-black uppercase tracking-widest h-10 px-6 hover:bg-accent/90">
                    <UserPlus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {players.map(p => (
                  <div key={p.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-xl border group hover:border-primary/30 transition-all">
                    <div>
                      <p className="text-xs font-black uppercase tracking-tight">{p.name}</p>
                      <Badge variant="outline" className={cn("text-[8px] uppercase font-bold h-4 mt-1", SKILL_COLORS[p.skill])}>
                        {skills[p.skill]}
                      </Badge>
                    </div>
                    <div className="flex gap-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-colors">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="rounded-3xl max-w-sm">
                          <DialogHeader><DialogTitle className="font-black uppercase">{lang === 'id' ? 'Edit' : 'Edit'} {p.name}</DialogTitle></DialogHeader>
                          <div className="space-y-4 py-4">
                            <Input value={p.name} onChange={e => updatePlayer(p.id, { name: e.target.value.toUpperCase() })} className="font-bold uppercase" />
                            <Select value={p.skill.toString()} onValueChange={v => updatePlayer(p.id, { skill: parseInt(v) as SkillLevel })}>
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>{[1,2,3,4,5].map(s => <SelectItem key={s} value={s.toString()}>{skills[s]}</SelectItem>)}</SelectContent>
                            </Select>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="icon" onClick={() => removePlayer(p.id)} className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SCHEDULE */}
        <div className="lg:col-span-5 space-y-8">
          <Card className="shadow-2xl border-4 border-primary/10 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="bg-primary p-6 text-white flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                <CalendarDays className="h-5 w-5" /> {t('schedule')}
              </CardTitle>
              {schedule.length > 0 && <Button variant="ghost" onClick={exportCSV} className="text-white hover:bg-white/10 font-bold uppercase text-[10px]"><Download className="h-4 w-4 mr-2" /> CSV</Button>}
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[800px] overflow-y-auto divide-y-4 divide-muted/30">
                {Array.from({ length: totalRounds }).map((_, rIdx) => {
                  const roundMatches = schedule.filter(m => m.round === rIdx + 1);
                  if (roundMatches.length === 0) return null;
                  return (
                    <div key={rIdx} className="p-6 space-y-4">
                      <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {t('round')} {rIdx + 1}
                      </span>
                      <div className="grid gap-4">
                        {roundMatches.map(m => (
                          <div key={m.id} className="p-4 bg-muted/10 rounded-2xl border-2 space-y-4 group relative">
                            <div className="flex justify-between items-center text-[9px] font-black uppercase text-muted-foreground opacity-50">
                              <span>{t('court')} {m.court} {m.type === 'manual' && '• MANUAL'}</span>
                              <Button variant="ghost" size="icon" onClick={() => deleteMatch(m.id)} className="h-5 w-5"><X className="h-3 w-3" /></Button>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex-1 space-y-2">
                                {m.team1.map((pid, idx) => {
                                  const p = players.find(x => x.id === pid);
                                  return (
                                    <div key={pid} className="flex items-center justify-end gap-2">
                                      <p className="text-xs font-black uppercase truncate">{p?.name || '?'}</p>
                                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setSwapData({ matchId: m.id, team: 1, index: idx })}><RefreshCw className="h-3 w-3" /></Button>
                                    </div>
                                  );
                                })}
                              </div>
                              <div className="flex items-center gap-1">
                                <Input type="number" value={m.score1 ?? ''} onChange={e => updateScore(m.id, e.target.value === '' ? null : parseInt(e.target.value), m.score2)} className="w-10 h-10 p-0 text-center font-black text-lg bg-card border-2" />
                                <span className="font-black opacity-20 text-[10px]">VS</span>
                                <Input type="number" value={m.score2 ?? ''} onChange={e => updateScore(m.id, m.score1, e.target.value === '' ? null : parseInt(e.target.value))} className="w-10 h-10 p-0 text-center font-black text-lg bg-card border-2" />
                              </div>
                              <div className="flex-1 space-y-2">
                                {m.team2.map((pid, idx) => {
                                  const p = players.find(x => x.id === pid);
                                  return (
                                    <div key={pid} className="flex items-center gap-2">
                                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setSwapData({ matchId: m.id, team: 2, index: idx })}><RefreshCw className="h-3 w-3" /></Button>
                                      <p className="text-xs font-black uppercase truncate">{p?.name || '?'}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
                {schedule.length === 0 && <div className="py-24 text-center opacity-30 flex flex-col items-center gap-4"><CalendarDays className="h-16 w-16" /><p className="font-black uppercase tracking-widest">{t('generate')} First</p></div>}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* LEADERBOARD */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden sticky top-24">
            <CardHeader className="bg-accent p-6 text-accent-foreground border-b">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2"><Trophy className="h-4 w-4" /> {t('leaderboard')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground border-b">
                    <tr><th className="p-4 text-center w-10">#</th><th className="p-4 text-left">{globalT('col_player')}</th><th className="p-4 text-center w-12 text-primary">{t('points')}</th></tr>
                  </thead>
                  <tbody className="divide-y">
                    {leaderboard.map((p, i) => (
                      <tr key={p.id} className={cn("hover:bg-muted/10 transition-colors", i < 3 && "bg-accent/5")}>
                        <td className="p-4 text-center font-black text-sm opacity-40">{i + 1}</td>
                        <td className="p-4">
                          <p className="text-xs font-black uppercase truncate max-w-[80px]">{p.name}</p>
                          <span className="text-[8px] font-bold text-muted-foreground uppercase">{skills[p.skill]}</span>
                        </td>
                        <td className="p-4 text-center font-black text-accent tabular-nums">{p.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* SWAP DIALOG */}
      <Dialog open={!!swapData} onOpenChange={o => !o && setSwapData(null)}>
        <DialogContent className="rounded-3xl max-w-sm">
          <DialogHeader><DialogTitle className="font-black uppercase">{t('swap')}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-4">
            <Select onValueChange={v => {
              if (swapData) swapPlayer(swapData.matchId, swapData.team, swapData.index, v);
              setSwapData(null);
              toast({ title: lang === 'id' ? "Pemain Ditukar" : "Player Swapped" });
            }}>
              <SelectTrigger className="font-bold"><SelectValue placeholder={lang === 'id' ? "Pilih Pemain Baru" : "Select New Player"} /></SelectTrigger>
              <SelectContent>
                {players.map(p => {
                  const schedCount = schedule.filter(m => m.status === 'scheduled' && (m.team1.includes(p.id) || m.team2.includes(p.id))).length;
                  return <SelectItem key={p.id} value={p.id}>{p.name} ({lang === 'id' ? 'Sisa' : 'Left'}: {schedCount})</SelectItem>;
                })}
              </SelectContent>
            </Select>
          </div>
        </DialogContent>
      </Dialog>

      <ArticleSection toolId="tennis" />

      <div className="w-full mt-12 pt-12 border-t-4 border-dashed">
        <DataPersistence data={{ config, players, schedule }} onRestore={(data) => {
          if (data.config) useTennisStore.setState({ config: data.config, players: data.players || [], schedule: data.schedule || [] });
        }} fileNamePrefix="versokit-tennis-pro" />
      </div>

      <SmartAd />
      <SeoContent toolId="tennis" />
    </div>
  );
}
