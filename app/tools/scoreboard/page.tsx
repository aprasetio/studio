"use client";

import React, { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { 
  Plus, 
  Minus, 
  RotateCcw, 
  Trash2, 
  Trophy, 
  Edit3,
  Dribbble,
  ArrowLeftRight
} from 'lucide-react';
import { SmartAd } from '@/components/smart-ad';
import { DataControl } from '@/components/DataControl';
import { useLang } from '@/components/Providers';
import { SeoContent } from '@/components/seo-content';
import { DataPersistence } from '@/components/DataPersistence';

const UI_TEXT: Record<string, any> = {
  en: {
    set: "SET",
    target: "TARGET SCORE",
    reset_all: "RESET ALL",
    reset_points: "RESET POINTS",
    winner: "WINNER",
    swap: "SWAP SIDES",
    match_name: "MATCH NAME",
    sport_type: "SPORT TYPE",
    home: "HOME",
    away: "AWAY",
    sets_won: "SETS WON",
    victory_target: "VICTORY TARGET",
    match: "MATCH",
    type: "SPORT",
    default_match: "Friendly Match",
    default_sport: "Volleyball"
  },
  id: {
    set: "SET",
    target: "TARGET POIN",
    reset_all: "RESET SEMUA",
    reset_points: "RESET POIN",
    winner: "PEMENANG",
    swap: "TUKAR POSISI",
    match_name: "NAMA PERTANDINGAN",
    sport_type: "JENIS OLAHRAGA",
    home: "KANDANG",
    away: "TANDANG",
    sets_won: "SET MENANG",
    victory_target: "TARGET KEMENANGAN",
    match: "PERTANDINGAN",
    type: "OLAHRAGA",
    default_match: "Pertandingan Persahabatan",
    default_sport: "Voli"
  },
  es: {
    set: "SET",
    target: "PUNTOS OBJETIVO",
    reset_all: "REINICIAR TODO",
    reset_points: "REINICIAR PUNTOS",
    winner: "GANADOR",
    swap: "CAMBIAR LADOS",
    match_name: "NOMBRE PARTIDO",
    sport_type: "TIPO DE DEPORTE",
    home: "LOCAL",
    away: "VISITANTE",
    sets_won: "SETS GANADOS",
    victory_target: "OBJETIVO DE VICTORIA",
    match: "PARTIDO",
    type: "DEPORTE",
    default_match: "Partido Amistoso",
    default_sport: "Voleibol"
  },
  pt: {
    set: "SET",
    target: "META DE PONTOS",
    reset_all: "RESETAR TUDO",
    reset_points: "RESETAR PONTOS",
    winner: "VENCEDOR",
    swap: "TROCAR LADOS",
    match_name: "NOME DA PARTIDA",
    sport_type: "TIPO DE ESPORTE",
    home: "MANDANTE",
    away: "VISITANTE",
    sets_won: "SETS GANHOS",
    victory_target: "META DE VITÓRIA",
    match: "PARTIDA",
    type: "ESPORTE",
    default_match: "Partida Amistosa",
    default_sport: "Voleibol"
  },
  de: {
    set: "SATZ",
    target: "ZIELPUNKTE",
    reset_all: "ALLES ZURÜCKSETZEN",
    reset_points: "PUNKTE ZURÜCKSETZEN",
    winner: "SIEGER",
    swap: "SEITEN WECHSELN",
    match_name: "SPIELNAME",
    sport_type: "SPORTART",
    home: "HEIM",
    away: "GAST",
    sets_won: "SÄTZE GEWONNEN",
    victory_target: "SIEGZIEL",
    match: "SPIEL",
    type: "SPORT",
    default_match: "Freundschaftsspiel",
    default_sport: "Volleyball"
  },
  fr: {
    set: "SET",
    target: "SCORE CIBLE",
    reset_all: "TOUT RÉINITIALISER",
    reset_points: "RESET POINTS",
    winner: "VAINQUEUR",
    swap: "CHANGER DE CÔTÉ",
    match_name: "NOM DU MATCH",
    sport_type: "TYPE DE SPORT",
    home: "DOMICILE",
    away: "EXTÉRIEUR",
    sets_won: "SETS GAGNÉS",
    victory_target: "OBJECTIF DE VICTOIRE",
    match: "MATCH",
    type: "SPORT",
    default_match: "Match Amical",
    default_sport: "Volleyball"
  },
  it: {
    set: "SET",
    target: "TARGET PUNTEGGIO",
    reset_all: "RESET TUTTO",
    reset_points: "RESET PUNTI",
    winner: "VINCITORE",
    swap: "SCAMBIA CAMPO",
    match_name: "NOME PARTITA",
    sport_type: "TIPO DI SPORT",
    home: "CASA",
    away: "TRASFERTA",
    sets_won: "SET VINTI",
    victory_target: "TARGET VITTORIA",
    match: "PARTITA",
    type: "SPORT",
    default_match: "Partita Amichevole",
    default_sport: "Pallavolo"
  }
};

interface ScoreboardState {
  matchName: string;
  sportType: string;
  homeTeam: string;
  awayTeam: string;
  scoreHome: number;
  scoreAway: number;
  setsHome: number;
  setsAway: number;
  targetScore: number;
}

export default function UniversalScoreboardPage() {
  const { lang, t: globalT } = useLang();
  
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [state, setState] = useLocalStorage<ScoreboardState>('versokit-universal-scoreboard', {
    matchName: t('default_match'),
    sportType: t('default_sport'),
    homeTeam: t('home'),
    awayTeam: t('away'),
    scoreHome: 0,
    scoreAway: 0,
    setsHome: 0,
    setsAway: 0,
    targetScore: 25,
  });

  const updateState = (updates: Partial<ScoreboardState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const resetPoints = () => {
    updateState({ scoreHome: 0, scoreAway: 0 });
  };

  const fullReset = () => {
    if (confirm(t('reset_all') + "?")) {
      updateState({
        scoreHome: 0,
        scoreAway: 0,
        setsHome: 0,
        setsAway: 0,
      });
    }
  };

  const swapSides = () => {
    updateState({
      homeTeam: state.awayTeam,
      awayTeam: state.homeTeam,
      scoreHome: state.scoreAway,
      scoreAway: state.scoreHome,
      setsHome: state.setsAway,
      setsAway: state.setsHome,
    });
  };

  const handleRestore = (data: any) => {
    if (data) {
      setState(data);
    }
  };

  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="flex flex-col gap-6 bg-card p-6 md:p-8 rounded-[2.5rem] shadow-xl border-2">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 w-full md:w-auto">
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
              <Dribbble className="h-4 w-4" />
              {globalT('scoreboard')} PRO
            </div>
            <div className="flex flex-col gap-1">
              <Input 
                value={state.matchName} 
                onChange={(e) => updateState({ matchName: e.target.value })}
                className="text-2xl md:text-3xl font-black uppercase tracking-tighter border-none bg-transparent p-0 h-auto focus-visible:ring-0"
                placeholder={t('match_name') + "..."}
              />
              <Input 
                value={state.sportType} 
                onChange={(e) => updateState({ sportType: e.target.value })}
                className="text-sm font-bold text-muted-foreground border-none bg-transparent p-0 h-auto focus-visible:ring-0 uppercase tracking-widest"
                placeholder={t('sport_type') + "..."}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={swapSides} className="font-bold uppercase tracking-widest text-[10px]">
               <ArrowLeftRight className="h-4 w-4 mr-2" /> {t('swap')}
            </Button>
            <DataControl storageKey="versokit-universal-scoreboard" type="object" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-dashed">
          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">{t('target')}</Label>
            <Input 
              type="number" 
              value={state.targetScore} 
              onChange={(e) => updateState({ targetScore: parseInt(e.target.value) || 0 })}
              className="font-black text-lg rounded-xl border-2"
            />
          </div>
          <div className="flex items-end gap-2 md:col-span-2">
            <Button variant="outline" onClick={resetPoints} className="flex-1 h-12 font-bold border-2 rounded-xl">
              <RotateCcw className="mr-2 h-4 w-4" /> {t('reset_points')}
            </Button>
            <Button variant="destructive" onClick={fullReset} className="flex-1 h-12 font-bold rounded-xl shadow-lg shadow-destructive/20">
              <Trash2 className="mr-2 h-4 w-4" /> {t('reset_all')}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="flex flex-col overflow-hidden border-none shadow-2xl rounded-[3rem] bg-card group">
          <div className="bg-primary p-6 text-center text-primary-foreground relative">
            <Input 
              value={state.homeTeam}
              onChange={(e) => updateState({ homeTeam: e.target.value.toUpperCase() })}
              className="text-3xl md:text-4xl font-black tracking-[0.1em] text-center border-none bg-transparent h-auto focus-visible:ring-0 uppercase"
            />
            <Edit3 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-20 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center p-8 md:p-12 space-y-8">
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-60">{t('sets_won')}</span>
              <div className="flex items-center gap-6">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => updateState({ setsHome: Math.max(0, state.setsHome - 1) })} 
                  className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-white"
                >
                  <Minus className="h-5 w-5" />
                </Button>
                <span className="text-7xl font-black text-primary tabular-nums drop-shadow-sm">{state.setsHome}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => updateState({ setsHome: state.setsHome + 1 })} 
                  className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-white"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="text-[14rem] md:text-[18rem] font-black leading-none text-foreground tabular-nums tracking-tighter drop-shadow-2xl">
              {state.scoreHome}
            </div>

            <div className="flex w-full gap-4">
              <Button 
                variant="outline" 
                className="h-20 flex-1 text-3xl font-black border-4 rounded-2xl hover:bg-muted" 
                onClick={() => updateState({ scoreHome: Math.max(0, state.scoreHome - 1) })}
              >
                -1
              </Button>
              <Button 
                className="h-20 flex-1 bg-primary text-primary-foreground text-4xl font-black hover:bg-primary/90 shadow-2xl rounded-2xl" 
                onClick={() => updateState({ scoreHome: state.scoreHome + 1 })}
              >
                +1
              </Button>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col overflow-hidden border-none shadow-2xl rounded-[3rem] bg-card group">
          <div className="bg-accent p-6 text-center text-accent-foreground relative">
            <Input 
              value={state.awayTeam}
              onChange={(e) => updateState({ awayTeam: e.target.value.toUpperCase() })}
              className="text-3xl md:text-4xl font-black tracking-[0.1em] text-center border-none bg-transparent h-auto focus-visible:ring-0 uppercase"
            />
            <Edit3 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-20 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center p-8 md:p-12 space-y-8">
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent opacity-60">{t('sets_won')}</span>
              <div className="flex items-center gap-6">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => updateState({ setsAway: Math.max(0, state.setsAway - 1) })} 
                  className="h-12 w-12 rounded-full border-2 hover:bg-accent hover:text-white"
                >
                  <Minus className="h-5 w-5" />
                </Button>
                <span className="text-7xl font-black text-accent tabular-nums drop-shadow-sm">{state.setsAway}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => updateState({ setsAway: state.setsAway + 1 })} 
                  className="h-12 w-12 rounded-full border-2 hover:bg-accent hover:text-white"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="text-[14rem] md:text-[18rem] font-black leading-none text-foreground tabular-nums tracking-tighter drop-shadow-2xl">
              {state.scoreAway}
            </div>

            <div className="flex w-full gap-4">
              <Button 
                variant="outline" 
                className="h-20 flex-1 text-3xl font-black border-4 rounded-2xl hover:bg-muted" 
                onClick={() => updateState({ scoreAway: Math.max(0, state.scoreAway - 1) })}
              >
                -1
              </Button>
              <Button 
                className="h-20 flex-1 bg-accent text-accent-foreground text-4xl font-black hover:bg-accent/90 shadow-2xl rounded-2xl" 
                onClick={() => updateState({ scoreAway: state.scoreAway + 1 })}
              >
                +1
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-4 rounded-3xl bg-muted p-6 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground border-2 w-full shadow-inner">
          <Trophy className="h-6 w-6 text-primary animate-bounce" /> 
          {t('victory_target')}: {state.targetScore} {globalT('score')}
        </div>
        
        <DataPersistence 
          data={state} 
          onRestore={handleRestore} 
          fileNamePrefix="versokit-scoreboard" 
        />

        <SmartAd />
        
        <SeoContent toolId="scoreboard" />
      </div>
    </div>
  );
}
