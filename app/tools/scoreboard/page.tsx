
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
  Settings2, 
  Edit3,
  Dribbble
} from 'lucide-react';
import { SmartAd } from '@/components/smart-ad';
import { DataControl } from '@/components/DataControl';
import { useLang } from '@/components/Providers';

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
  const { t } = useLang();
  const [state, setState] = useLocalStorage<ScoreboardState>('versokit-universal-scoreboard', {
    matchName: 'Pertandingan Persahabatan',
    sportType: 'Voli',
    homeTeam: 'KANDANG',
    awayTeam: 'TANDANG',
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
    if (confirm("Reset seluruh papan skor?")) {
      updateState({
        scoreHome: 0,
        scoreAway: 0,
        setsHome: 0,
        setsAway: 0,
      });
    }
  };

  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      {/* Header Controls */}
      <div className="flex flex-col gap-6 bg-card p-6 md:p-8 rounded-[2.5rem] shadow-xl border-2">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 w-full md:w-auto">
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
              <Dribbble className="h-4 w-4" />
              {t('scoreboard')} Pro
            </div>
            <div className="flex flex-col gap-1">
              <Input 
                value={state.matchName} 
                onChange={(e) => updateState({ matchName: e.target.value })}
                className="text-2xl md:text-3xl font-black uppercase tracking-tighter border-none bg-transparent p-0 h-auto focus-visible:ring-0"
                placeholder="Nama Pertandingan..."
              />
              <Input 
                value={state.sportType} 
                onChange={(e) => updateState({ sportType: e.target.value })}
                className="text-sm font-bold text-muted-foreground border-none bg-transparent p-0 h-auto focus-visible:ring-0 uppercase tracking-widest"
                placeholder="Jenis Olahraga (Voli, Badminton, dll)..."
              />
            </div>
          </div>
          
          <DataControl storageKey="versokit-universal-scoreboard" type="object" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-dashed">
          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Target Skor Per Set</Label>
            <Input 
              type="number" 
              value={state.targetScore} 
              onChange={(e) => updateState({ targetScore: parseInt(e.target.value) || 0 })}
              className="font-black text-lg rounded-xl border-2"
            />
          </div>
          <div className="flex items-end gap-2 md:col-span-2">
            <Button variant="outline" onClick={resetPoints} className="flex-1 h-12 font-bold border-2 rounded-xl">
              <RotateCcw className="mr-2 h-4 w-4" /> Reset Poin
            </Button>
            <Button variant="destructive" onClick={fullReset} className="flex-1 h-12 font-bold rounded-xl shadow-lg shadow-destructive/20">
              <Trash2 className="mr-2 h-4 w-4" /> Reset Semua
            </Button>
          </div>
        </div>
      </div>

      {/* Main Scoreboard Display */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Home Team */}
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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-60">Set Menang</span>
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

        {/* Away Team */}
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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent opacity-60">Set Menang</span>
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
          Target Kemenangan: {state.targetScore} Poin
        </div>
        
        <SmartAd />
      </div>
    </div>
  );
}
