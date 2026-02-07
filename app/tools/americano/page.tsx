'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { 
  Trophy, 
  Users, 
  Play, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Shuffle, 
  ChevronRight,
  Settings2,
  CalendarDays,
  Medal,
  Activity,
  CheckCircle2
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAmericanoStore, type SportMode } from './store';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';

const UI_TEXT: Record<string, any> = {
  title: { en: "Americano Generator", id: "Generator Americano", de: "Americano Generator", es: "Generador Americano", pt: "Gerador Americano", fr: "Générateur Americano", it: "Generatore Americano" },
  config: { en: "Tournament Setup", id: "Setup Turnamen", de: "Turnier-Setup", es: "Configuración de Torneo", pt: "Configuração do Torneio", fr: "Configuration du Tournoi", it: "Configurazione Torneo" },
  lbl_players: { en: "Player Names", id: "Nama Pemain", de: "Spielernamen", es: "Nombres de Jugadores", pt: "Nomes dos Jogadores", fr: "Noms des Joueurs", it: "Nomi dei Giocatori" },
  lbl_points: { en: "Target Points", id: "Target Poin", de: "Zielpunkte", es: "Puntos Objetivo", pt: "Pontos Alvo", fr: "Points Cibles", it: "Punti Obiettivo" },
  btn_start: { en: "Start Tournament", id: "Mulai Turnamen", de: "Turnier starten", es: "Iniciar Torneo", pt: "Iniciar Torneio", fr: "Démarrer Tournoi", it: "Inizia Torneo" },
  btn_next_round: { en: "Generate Next Round", id: "Buat Ronde Berikutnya", de: "Nächste Runde erstellen", es: "Generar Siguiente Ronda", pt: "Gerar Próxima Rodada", fr: "Générer Prochain Tour", it: "Genera Prossimo Turno" },
  btn_reset: { en: "Reset Tournament", id: "Reset Turnamen", de: "Turnier zurücksetzen", es: "Reiniciar Torneo", pt: "Reiniciar Torneio", fr: "Réinitialiser Tournoi", it: "Resetta Torneo" },
  round: { en: "Round", id: "Ronde", de: "Runde", es: "Ronda", pt: "Rodada", fr: "Tour", it: "Turno" },
  court: { en: "Court", id: "Lapangan", de: "Platz", es: "Pista", pt: "Quadra", fr: "Terrain", it: "Campo" },
  bench: { en: "Bench (Resting)", id: "Istirahat", de: "Pause", es: "Banquillo", pt: "Banco", fr: "Banc", it: "Panchina" },
  vs: { en: "vs", id: "vs", de: "gegen", es: "contra", pt: "vs", fr: "contre", it: "contro" },
  rank: { en: "#", id: "#", de: "#", es: "#", pt: "#", fr: "#", it: "#" },
  player: { en: "Player", id: "Pemain", de: "Spieler", es: "Jugador", pt: "Jogador", fr: "Joueur", it: "Giocatore" },
  points: { en: "Points", id: "Poin", de: "Punkte", es: "Puntos", pt: "Pontos", fr: "Points", it: "Punti" },
  diff: { en: "Diff", id: "Selisih", de: "Diff", es: "Dif", pt: "Dif", fr: "Diff", it: "Diff" },
  leaderboard: { en: "Individual Standings", id: "Klasemen Individu", de: "Rangliste", es: "Clasificación Individual", pt: "Classificação Individual", fr: "Classement Individuel", it: "Classifica Individuale" },
};

export default function AmericanoPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[key]?.[lang] || UI_TEXT[key]?.['en'] || key;

  const { 
    status, players, matches, currentRound, sportMode, targetScore,
    setSportMode, setTargetScore, setupTournament, updateScore, finishMatch, generateNextRound, resetTournament 
  } = useAmericanoStore();

  const [names, setNames] = useState<string[]>(['', '', '', '']);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleStart = () => {
    const validNames = names.filter(n => n.trim() !== '');
    if (validNames.length < 4) {
      toast({ title: lang === 'id' ? "Minimal 4 pemain" : "Min 4 players required", variant: "destructive" });
      return;
    }
    setupTournament(validNames);
  };

  const handleNextRound = () => {
    const roundMatches = matches.filter(m => m.round === currentRound);
    if (roundMatches.some(m => !m.isFinished)) {
      toast({ title: lang === 'id' ? "Selesaikan semua skor dulu" : "Finish all scores first", variant: "destructive" });
      return;
    }
    generateNextRound();
    toast({ title: `${t('round')} ${currentRound + 1} Ready!` });
  };

  const sortedLeaderboard = useMemo(() => {
    return [...players].sort((a, b) => b.totalPoints - a.totalPoints || b.pointsDiff - a.pointsDiff);
  }, [players]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Activity className="h-8 w-8 text-primary" />
          {t('title')}
        </h1>
        <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Padel & Pickleball Format</p>
      </div>

      {status === 'setup' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
          <Card className="shadow-xl border-2 rounded-[2.5rem]">
            <CardHeader className="bg-muted/30 border-b">
              <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-primary">
                <Settings2 className="h-5 w-5" /> {t('config')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="space-y-4">
                <Label className="text-xs font-bold uppercase opacity-60">Sport Mode</Label>
                <Tabs value={sportMode} onValueChange={v => setSportMode(v as SportMode)}>
                  <TabsList className="grid w-full grid-cols-2 h-12">
                    <TabsTrigger value="padel" className="font-bold">PADEL</TabsTrigger>
                    <TabsTrigger value="pickleball" className="font-bold">PICKLEBALL</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase opacity-60">{t('lbl_points')}</Label>
                <Select value={targetScore.toString()} onValueChange={v => setTargetScore(parseInt(v))}>
                  <SelectTrigger className="h-12"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {[11, 15, 21, 24, 32, 40].map(p => <SelectItem key={p} value={p.toString()}>{p}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button onClick={handleStart} className="w-full h-16 bg-primary text-white font-black uppercase tracking-[0.2em] shadow-xl rounded-2xl">
                  <Play className="mr-2 h-6 w-6" /> {t('btn_start')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-2 rounded-[2.5rem]">
            <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-primary">
                <Users className="h-5 w-5" /> {t('lbl_players')} ({names.filter(n => n).length})
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setNames([...names].sort(() => Math.random() - 0.5))} className="font-bold text-xs uppercase">
                <Shuffle className="h-3 w-3 mr-1" /> Shuffle
              </Button>
            </CardHeader>
            <CardContent className="p-8 space-y-4 max-h-[500px] overflow-y-auto">
              {names.map((name, i) => (
                <div key={i} className="flex gap-2">
                  <Input 
                    value={name} 
                    onChange={e => {
                      const newNames = [...names]; 
                      newNames[i] = e.target.value.toUpperCase(); 
                      setNames(newNames);
                    }} 
                    placeholder="PLAYER NAME"
                    className="font-bold h-10"
                  />
                  <Button variant="ghost" size="icon" onClick={() => setNames(names.filter((_, idx) => idx !== i))} className="text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={() => setNames([...names, ''])} className="w-full border-dashed border-2 h-12">
                <Plus className="h-4 w-4 mr-2" /> {globalT('add')}
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* ACTIVE MATCHES */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex justify-between items-center bg-card p-6 rounded-[2rem] border-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary"><CalendarDays className="h-6 w-6" /></div>
                <div>
                  <h2 className="font-black uppercase tracking-tight text-xl">{t('round')} {currentRound}</h2>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{targetScore} {t('points')} Total</p>
                </div>
              </div>
              <Button variant="outline" onClick={resetTournament} className="text-destructive font-black uppercase text-[10px] border-2">
                <RotateCcw className="h-4 w-4 mr-2" /> {t('btn_reset')}
              </Button>
            </div>

            <div className="grid gap-6">
              {matches.filter(m => m.round === currentRound).map(m => (
                <Card key={m.id} className={cn("overflow-hidden border-4 rounded-[2rem] shadow-lg transition-all", m.isFinished ? "border-green-500/20 opacity-80" : "border-primary/5")}>
                  <div className="bg-muted/30 px-6 py-2 border-b flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50">{t('court')} {m.court}</span>
                    {m.isFinished && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="flex-1 space-y-2 text-right">
                        {m.team1.map(pid => (
                          <p key={pid} className="font-black uppercase truncate text-sm">
                            {players.find(p => p.id === pid)?.name || '?'}
                          </p>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Input 
                          type="number" 
                          disabled={m.isFinished}
                          value={m.score1 || ''} 
                          onChange={e => updateScore(m.id, parseInt(e.target.value) || 0)}
                          className="w-16 h-16 text-center font-black text-2xl border-4 rounded-2xl bg-card"
                        />
                        <span className="font-black opacity-20">{t('vs')}</span>
                        <div className="w-16 h-16 flex items-center justify-center font-black text-2xl border-4 rounded-2xl bg-muted/20 opacity-60">
                          {m.score2}
                        </div>
                      </div>

                      <div className="flex-1 space-y-2 text-left">
                        {m.team2.map(pid => (
                          <p key={pid} className="font-black uppercase truncate text-sm">
                            {players.find(p => p.id === pid)?.name || '?'}
                          </p>
                        ))}
                      </div>
                    </div>
                    {!m.isFinished && (
                      <div className="mt-6 flex justify-center">
                        <Button variant="secondary" onClick={() => finishMatch(m.id)} className="font-black uppercase text-xs tracking-widest">Confirm Score</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button onClick={handleNextRound} className="w-full h-20 bg-accent text-white font-black uppercase tracking-[0.2em] shadow-2xl rounded-[2rem] text-xl transform transition-transform hover:scale-[1.02] active:scale-95">
              {t('btn_next_round')} <ChevronRight className="ml-2 h-8 w-8" />
            </Button>
          </div>

          {/* LEADERBOARD */}
          <div className="lg:col-span-5 space-y-8">
            <Card className="shadow-2xl border-2 rounded-[2.5rem] overflow-hidden sticky top-24">
              <CardHeader className="bg-primary p-6 text-white border-b">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <Medal className="h-5 w-5 text-accent" /> {t('leaderboard')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50 text-[9px] font-black uppercase tracking-widest text-muted-foreground border-b">
                      <tr>
                        <th className="p-4 text-center w-10">{t('rank')}</th>
                        <th className="p-4 text-left">{t('player')}</th>
                        <th className="p-4 text-center">{t('diff')}</th>
                        <th className="p-4 text-center bg-primary/5 text-primary">PTS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {sortedLeaderboard.map((p, i) => (
                        <tr key={p.id} className={cn("hover:bg-muted/10 transition-colors", i < 3 && "bg-accent/5")}>
                          <td className="p-4 text-center font-black text-sm opacity-40">{i + 1}</td>
                          <td className="p-4">
                            <p className="font-black uppercase text-xs truncate max-w-[100px]">{p.name}</p>
                            <p className="text-[8px] font-bold text-muted-foreground uppercase">{p.matchesPlayed} Matches</p>
                          </td>
                          <td className={cn("p-4 text-center font-bold text-xs", p.pointsDiff > 0 ? "text-green-600" : "text-red-500")}>
                            {p.pointsDiff > 0 ? `+${p.pointsDiff}` : p.pointsDiff}
                          </td>
                          <td className="p-4 text-center font-black text-primary text-lg tabular-nums">{p.totalPoints}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Bench Info */}
            <div className="p-6 bg-muted/30 rounded-3xl border-2 border-dashed">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">{t('bench')}</h4>
              <div className="flex flex-wrap gap-2">
                {players.filter(p => !matches.filter(m => m.round === currentRound).some(m => m.team1.includes(p.id) || m.team2.includes(p.id))).map(p => (
                  <div key={p.id} className="bg-card px-3 py-1.5 rounded-xl border-2 font-black text-[10px] uppercase opacity-50">
                    {p.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <ArticleSection toolId="padel-americano" />
      <SmartAd />
      <SeoContent toolId="padel-americano" />
    </div>
  );
}
