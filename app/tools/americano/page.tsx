'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Activity, 
  Users, 
  Play, 
  RotateCcw, 
  ChevronRight,
  Settings2,
  CalendarDays,
  Medal,
  CheckCircle2,
  Info
} from 'lucide-react';
import { useAmericanoStore } from './store';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import TrustBadges from '@/components/ui/TrustBadges';

const UI_TEXT: Record<string, any> = {
  title: { en: "Americano Generator", id: "Generator Americano", de: "Americano Generator", es: "Generador Americano", pt: "Gerador Americano", fr: "Générateur Americano", it: "Generatore Americano" },
  mode_select: { en: "Select Sport", id: "Pilih Olahraga", de: "Sportart wählen", es: "Seleccionar Deporte", pt: "Selecionar Esporte", fr: "Choisir Sport", it: "Seleziona Sport" },
  padel: { en: "Padel 🎾", id: "Padel 🎾", de: "Padel 🎾", es: "Pádel 🎾", pt: "Padel 🎾", fr: "Padel 🎾", it: "Padel 🎾" },
  pickleball: { en: "Pickleball 🥒", id: "Pickleball 🥒", de: "Pickleball 🥒", es: "Pickleball 🥒", pt: "Pickleball 🥒", fr: "Pickleball 🥒", it: "Pickleball 🥒" },
  lbl_players: { en: "Player Names (One per line)", id: "Nama Pemain (Satu per baris)", de: "Spielernamen (Einer pro Zeile)", es: "Nombres (Uno por línea)", pt: "Nomes (Um por linha)", fr: "Noms (Un par ligne)", it: "Nomi (Uno per riga)" },
  lbl_courts: { en: "Courts", id: "Lapangan", de: "Plätze", es: "Pistas", pt: "Quadras", fr: "Terrains", it: "Campi" },
  lbl_target_padel: { en: "Target Points (Sum)", id: "Target Poin (Total)", de: "Zielpunkte (Gesamt)", es: "Puntos Objetivo (Suma)", pt: "Pontos Alvo (Soma)", fr: "Points Cibles (Total)", it: "Punti Obiettivo (Somma)" },
  lbl_target_pickle: { en: "Winning Score (Race)", id: "Skor Menang (Race)", de: "Gewinnpunktzahl", es: "Puntuación Ganadora", pt: "Pontuação Vencedora", fr: "Score Gagnant", it: "Punteggio Vincente" },
  btn_start: { en: "Start Tournament", id: "Mulai Turnamen", de: "Turnier starten", es: "Iniciar Torneo", pt: "Iniciar Torneio", fr: "Démarrer Tournoi", it: "Inizia Torneo" },
  btn_next: { en: "Next Round", id: "Ronde Berikutnya", de: "Nächste Runde", es: "Siguiente Ronda", pt: "Próxima Rodada", fr: "Tour Suivant", it: "Prossimo Turno" },
  round: { en: "Round", id: "Ronde", de: "Runde", es: "Ronda", pt: "Rodada", fr: "Tour", it: "Turno" },
  bench: { en: "Bench / Bye", id: "Cadangan / Bye", de: "Pause", es: "Descanso", pt: "Descanso", fr: "Repos", it: "Riposo" },
  rank: { en: "#", id: "#", de: "#", es: "#", pt: "#", fr: "#", it: "#" },
  player: { en: "Player", id: "Pemain", de: "Spieler", es: "Jugador", pt: "Jogador", fr: "Joueur", it: "Giocatore" },
  stats: { en: "M / Diff", id: "Main / Selisih", de: "M / Diff", es: "P / Dif", pt: "J / Dif", fr: "M / Diff", it: "P / Diff" },
  points: { en: "Pts", id: "Poin", de: "Pkt", es: "Pts", pt: "Pts", fr: "Pts", it: "Pti" },
  confirm_score: { en: "Confirm Score", id: "Konfirmasi Skor", de: "Ergebnis bestätigen", es: "Confirmar Resultado", pt: "Confirmar Resultado", fr: "Confirmer Score", it: "Conferma Punteggio" },
  reset_confirm: { en: "Reset tournament? All scores will be lost.", id: "Reset turnamen? Semua skor akan hilang.", de: "Turnier zurücksetzen? Alle Ergebnisse gehen verloren.", es: "¿Reiniciar torneo? Se perderán todos los resultados.", pt: "Reiniciar torneio? Todos os resultados serão perdidos.", fr: "Réinitialiser le tournoi ? Tous les scores seront perdus.", it: "Resettare il torneo? Tutti i punteggi andranno persi." }
};

export default function AmericanoPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[key]?.[lang] || UI_TEXT[key]?.['en'] || key;

  const { 
    status, players, matches, currentRound, sportMode, targetScore,
    setSportMode, setTargetScore, setupTournament, updateScore, finishMatch, generateNextRound, resetTournament 
  } = useAmericanoStore();

  const [namesText, setNamesText] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleStart = () => {
    const names = namesText.split('\n').filter(n => n.trim() !== '');
    if (names.length < 4) {
      toast({ title: lang === 'id' ? "Minimal 4 pemain" : "Minimum 4 players required", variant: "destructive" });
      return;
    }
    setupTournament(names);
  };

  const handleReset = () => {
    if (window.confirm(t('reset_confirm'))) {
      resetTournament();
      toast({ title: "Tournament Reset" });
    }
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
    return [...players].sort((a, b) => b.totalPoints - a.totalPoints || b.pointsDiff - a.pointsDiff || a.matchesPlayed - b.matchesPlayed);
  }, [players]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Activity className="h-8 w-8 text-primary" />
          {t('title')}
        </h1>
        <TrustBadges />
        <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Professional Tournament Management</p>
      </div>

      {status === 'setup' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
          <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="bg-primary p-6 text-white border-b">
              <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
                <Settings2 className="h-5 w-5 text-accent" /> {t('mode_select')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant={sportMode === 'padel' ? 'default' : 'outline'} 
                  onClick={() => setSportMode('padel')}
                  className={cn("h-16 font-black uppercase text-xs", sportMode === 'padel' && "bg-primary")}
                >
                  {t('padel')}
                </Button>
                <Button 
                  variant={sportMode === 'pickleball' ? 'default' : 'outline'} 
                  onClick={() => setSportMode('pickleball')}
                  className={cn("h-16 font-black uppercase text-xs", sportMode === 'pickleball' && "bg-primary")}
                >
                  {t('pickleball')}
                </Button>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase opacity-60">
                  {sportMode === 'padel' ? t('lbl_target_padel') : t('lbl_target_pickle')}
                </Label>
                <Input 
                  type="number" 
                  value={targetScore} 
                  onChange={e => setTargetScore(parseInt(e.target.value) || 0)}
                  className="h-12 font-black text-lg"
                />
              </div>

              <div className="bg-muted/30 p-4 rounded-2xl border-2 border-dashed flex gap-3">
                <Info className="h-5 w-5 text-primary shrink-0" />
                <p className="text-[10px] font-bold text-muted-foreground uppercase leading-relaxed">
                  {sportMode === 'padel' 
                    ? "Padel Americano usually plays to 32 points. Teams share the 32 points total (e.g. 20-12)." 
                    : "Pickleball Americano usually plays to a fixed winning score like 11 or 15 points per match."}
                </p>
              </div>

              <Button onClick={handleStart} className="w-full h-16 bg-accent text-white font-black uppercase tracking-[0.2em] shadow-xl rounded-2xl">
                <Play className="mr-2 h-6 w-6" /> {t('btn_start')}
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="bg-muted/30 p-6 border-b">
              <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-primary">
                <Users className="h-5 w-5" /> {t('lbl_players')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Textarea 
                placeholder="PLAYER ONE\nPLAYER TWO\nPLAYER THREE..."
                value={namesText}
                onChange={e => setNamesText(e.target.value)}
                className="min-h-[300px] font-bold uppercase p-4 text-sm tracking-widest leading-relaxed"
              />
              <p className="text-[9px] font-bold text-muted-foreground uppercase mt-4 text-center">
                Enter at least 4 players. One name per line.
              </p>
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
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    {sportMode === 'padel' ? `${targetScore} Total Points` : `Race to ${targetScore}`}
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                onClick={handleReset} 
                className="text-destructive font-black uppercase text-[10px] border-2"
              >
                <RotateCcw className="h-4 w-4 mr-2" /> {globalT('reset')}
              </Button>
            </div>

            <div className="grid gap-6">
              {matches.filter(m => m.round === currentRound).map(m => (
                <Card key={m.id} className={cn("overflow-hidden border-4 rounded-[2rem] shadow-lg transition-all", m.isFinished ? "border-green-500/20 opacity-80" : "border-primary/5")}>
                  <div className="bg-muted/30 px-6 py-2 border-b flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Court {m.court}</span>
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
                          onChange={e => updateScore(m.id, parseInt(e.target.value) || 0, m.score2)}
                          className="w-16 h-16 text-center font-black text-2xl border-4 rounded-2xl bg-card"
                        />
                        <span className="font-black opacity-20 text-xs uppercase tracking-widest">vs</span>
                        {sportMode === 'padel' ? (
                          <div className="w-16 h-16 flex items-center justify-center font-black text-2xl border-4 rounded-2xl bg-muted/20 opacity-60">
                            {m.score2}
                          </div>
                        ) : (
                          <Input 
                            type="number" 
                            disabled={m.isFinished}
                            value={m.score2 || ''} 
                            onChange={e => updateScore(m.id, m.score1, parseInt(e.target.value) || 0)}
                            className="w-16 h-16 text-center font-black text-2xl border-4 rounded-2xl bg-card"
                          />
                        )}
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
                        <Button 
                          onClick={() => finishMatch(m.id)} 
                          className="bg-primary text-white font-black uppercase text-xs tracking-widest px-8 rounded-xl h-10"
                        >
                          {t('confirm_score')}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button onClick={handleNextRound} className="w-full h-20 bg-accent text-white font-black uppercase tracking-[0.2em] shadow-2xl rounded-[2rem] text-xl transform transition-transform hover:scale-[1.02] active:scale-95">
              {t('btn_next')} <ChevronRight className="ml-2 h-8 w-8" />
            </Button>
          </div>

          {/* LEADERBOARD */}
          <div className="lg:col-span-5 space-y-8">
            <Card className="shadow-2xl border-2 rounded-[2.5rem] overflow-hidden sticky top-24">
              <CardHeader className="bg-primary p-6 text-white border-b">
                <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                  <Medal className="h-5 w-5 text-accent" /> Standings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50 text-[9px] font-black uppercase tracking-widest text-muted-foreground border-b">
                      <tr>
                        <th className="p-4 text-center w-10">{t('rank')}</th>
                        <th className="p-4 text-left">{t('player')}</th>
                        <th className="p-4 text-center">{t('stats')}</th>
                        <th className="p-4 text-center bg-primary/5 text-primary">{t('points')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {sortedLeaderboard.map((p, i) => (
                        <tr key={p.id} className={cn("hover:bg-muted/10 transition-colors", i < 3 && "bg-accent/5")}>
                          <td className="p-4 text-center font-black text-sm opacity-40">{i + 1}</td>
                          <td className="p-4 font-black uppercase text-xs truncate max-w-[120px]">{p.name}</td>
                          <td className="p-4 text-center">
                            <div className="flex flex-col">
                              <span className="text-[10px] font-black">{p.matchesPlayed}M</span>
                              <span className={cn("text-[8px] font-bold", p.pointsDiff > 0 ? "text-green-600" : "text-red-500")}>
                                {p.pointsDiff > 0 ? `+${p.pointsDiff}` : p.pointsDiff}
                              </span>
                            </div>
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

      <ArticleSection toolId="americano" />
      <SmartAd />
      <SeoContent toolId="americano" />
    </div>
  );
}
