'use client';

import { useEffect, useRef } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, Play, Pause, RotateCcw, Timer, History } from 'lucide-react';
import { useLang } from '@/components/Providers';
import { cn } from '@/lib/utils';

const PRESETS = [
  { label: '20:00', seconds: 20 * 60 },
  { label: '15:00', seconds: 15 * 60 },
  { label: '10:00', seconds: 10 * 60 },
];

type ScoreState = {
  homeScore: number;
  awayScore: number;
  homeFouls: number;
  awayFouls: number;
  period: number;
  time: number;
  isRunning: boolean;
};

export function FutsalScoreboard() {
  const { t } = useLang();
  const [state, setState] = useLocalStorage<ScoreState>('futsal-scoreboard-state', {
    homeScore: 0,
    awayScore: 0,
    homeFouls: 0,
    awayFouls: 0,
    period: 1,
    time: 20 * 60,
    isRunning: false,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (state.isRunning && state.time > 0) {
      intervalRef.current = setInterval(() => {
        setState((prev) => ({ ...prev, time: prev.time > 0 ? prev.time - 1 : 0 }));
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state.isRunning, state.time, setState]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };
  
  const handleToggleTimer = () => {
    if (state.time > 0) {
        setState(prev => ({ ...prev, isRunning: !prev.isRunning }));
    }
  };

  const handleReset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setState({
      homeScore: 0,
      awayScore: 0,
      homeFouls: 0,
      awayFouls: 0,
      period: 1,
      time: 20 * 60,
      isRunning: false,
    });
  };

  const updateValue = (key: keyof ScoreState, delta: number) => {
    setState(prev => ({
        ...prev,
        [key as any]: Math.max(0, (prev[key as keyof ScoreState] as number) + delta)
    }));
  };

  const setPreset = (seconds: number) => {
    setState(prev => ({ ...prev, time: seconds, isRunning: false }));
  };

  const nextPeriod = () => {
    setState(prev => ({
      ...prev,
      period: prev.period === 1 ? 2 : 1,
      homeFouls: 0, // Reset fouls for next half
      awayFouls: 0,
      isRunning: false
    }));
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Card className="w-full shadow-2xl bg-card border-4 border-primary/10 overflow-hidden">
        <CardHeader className="bg-primary/5 pb-6 border-b">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <CardTitle className="text-2xl font-black uppercase tracking-widest text-primary flex items-center gap-3">
              <History className="h-6 w-6" />
              {t('futsal')} PRO
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button 
                variant={state.period === 1 ? "default" : "outline"} 
                onClick={nextPeriod}
                className="font-bold uppercase text-xs"
              >
                {state.period === 1 ? "BABAK 1" : "BABAK 2"}
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Main Timer Display */}
          <div className="flex flex-col items-center justify-center bg-black/5 py-10 border-b relative">
            <h3 className="text-xs font-black text-muted-foreground uppercase tracking-[0.5em] mb-2">{t('time')}</h3>
            <p className={cn(
              "text-[8rem] md:text-[12rem] font-mono font-black leading-none tabular-nums tracking-tighter drop-shadow-md",
              state.isRunning ? "text-primary" : "text-muted-foreground"
            )}>
              {formatTime(state.time)}
            </p>
            
            {/* Timer Controls */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <div className="flex gap-2 mr-4 border-r pr-4 border-muted-foreground/20">
                {PRESETS.map((p) => (
                  <Button 
                    key={p.label} 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setPreset(p.seconds)}
                    className="text-[10px] font-bold"
                  >
                    {p.label}
                  </Button>
                ))}
              </div>
              <Button onClick={handleToggleTimer} size="lg" className="h-16 w-40 bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest rounded-2xl shadow-xl">
                {state.isRunning ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                {state.isRunning ? t('pause') : t('start')}
              </Button>
              <Button onClick={handleReset} size="icon" variant="outline" className="h-16 w-16 rounded-2xl border-2 hover:bg-destructive hover:text-destructive-foreground">
                <RotateCcw className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b">
            <TeamPanel 
              side={t('home')} 
              score={state.homeScore} 
              fouls={state.homeFouls} 
              colorClass="text-blue-700"
              bgClass="bg-blue-50/30"
              onUpdateScore={(d) => updateValue('homeScore', d)} 
              onUpdateFouls={(d) => updateValue('homeFouls', d)} 
            />
            <TeamPanel 
              side={t('away')} 
              score={state.awayScore} 
              fouls={state.awayFouls} 
              colorClass="text-orange-600"
              bgClass="bg-orange-50/30"
              onUpdateScore={(d) => updateValue('awayScore', d)} 
              onUpdateFouls={(d) => updateValue('awayFouls', d)} 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface TeamPanelProps {
  side: string;
  score: number;
  fouls: number;
  colorClass: string;
  bgClass: string;
  onUpdateScore: (d: number) => void;
  onUpdateFouls: (d: number) => void;
}

const TeamPanel = ({ side, score, fouls, colorClass, bgClass, onUpdateScore, onUpdateFouls }: TeamPanelProps) => {
  const { t } = useLang();
  const isFoulDanger = fouls >= 5;

  return (
    <div className={cn("p-10 space-y-10 text-center", bgClass)}>
        <h2 className={cn("text-4xl font-black tracking-widest uppercase", colorClass)}>{side}</h2>
        
        {/* Score Section */}
        <div className="space-y-4">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">{t('score')}</h3>
            <div className="flex items-center justify-center gap-8">
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-2" onClick={() => onUpdateScore(-1)}><Minus /></Button>
                <p className="text-9xl font-black w-32 tabular-nums text-foreground drop-shadow-sm">{score}</p>
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-2" onClick={() => onUpdateScore(1)}><Plus /></Button>
            </div>
        </div>

        {/* Fouls Section */}
        <div className="pt-8 border-t border-muted-foreground/10 space-y-4">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">{t('fouls')}</h3>
            <div className="flex items-center justify-center gap-6">
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full" onClick={() => onUpdateFouls(-1)}><Minus /></Button>
                <div className="flex flex-col items-center">
                  <p className={cn(
                    "text-6xl font-black w-24 tabular-nums transition-colors duration-300",
                    isFoulDanger ? "text-destructive animate-pulse" : "text-muted-foreground"
                  )}>
                    {fouls}
                  </p>
                  {isFoulDanger && (
                    <span className="text-[10px] font-black text-destructive uppercase tracking-tighter mt-1">PENALTI KEDUA!</span>
                  )}
                </div>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full" onClick={() => onUpdateFouls(1)}><Plus /></Button>
            </div>
        </div>
    </div>
  );
};
