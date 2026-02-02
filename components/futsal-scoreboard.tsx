'use client';

import { useEffect, useRef } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, Play, Pause, RotateCcw } from 'lucide-react';

const TOTAL_MINUTES = 20;
const TOTAL_SECONDS = TOTAL_MINUTES * 60;

type ScoreState = {
  homeScore: number;
  awayScore: number;
  homeFouls: number;
  awayFouls: number;
  time: number;
  isRunning: boolean;
};

export function FutsalScoreboard() {
  const t = useTranslations('FutsalScoreboard');
  const [state, setState] = useLocalStorage<ScoreState>('futsal-scoreboard-state', {
    homeScore: 0,
    awayScore: 0,
    homeFouls: 0,
    awayFouls: 0,
    time: TOTAL_SECONDS,
    isRunning: false,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (state.isRunning && state.time > 0) {
      intervalRef.current = setInterval(() => {
        setState((prev) => ({ ...prev, time: prev.time > 0 ? prev.time - 1 : 0 }));
      }, 1000);
    } else if (!state.isRunning || state.time === 0) {
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
      time: TOTAL_SECONDS,
      isRunning: false,
    });
  };

  const updateValue = (key: 'homeScore' | 'awayScore' | 'homeFouls' | 'awayFouls', delta: number) => {
    setState(prev => ({
        ...prev,
        [key]: Math.max(0, prev[key] + delta)
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto shadow-2xl bg-card">
        <CardHeader className="text-center pb-4">
          <CardTitle className="font-headline text-3xl md:text-4xl font-bold">{t('title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <TeamPanel side={t('home')} score={state.homeScore} fouls={state.homeFouls} onUpdateScore={(d) => updateValue('homeScore', d)} onUpdateFouls={(d) => updateValue('homeFouls', d)} t={t} />
            <TeamPanel side={t('away')} score={state.awayScore} fouls={state.awayFouls} onUpdateScore={(d) => updateValue('awayScore', d)} onUpdateFouls={(d) => updateValue('awayFouls', d)} t={t} />
          </div>

          <div className="mt-8 text-center bg-card-foreground/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-muted-foreground">{t('timer')}</h3>
            <p className="text-7xl md:text-9xl font-mono font-bold text-foreground my-4 tabular-nums">
              {formatTime(state.time)}
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button onClick={handleToggleTimer} size="lg" className="w-32 bg-accent hover:bg-accent/90 text-accent-foreground">
                {state.isRunning ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                {state.isRunning ? t('pause') : t('start')}
              </Button>
              <Button onClick={handleReset} size="lg" variant="outline" className="w-32">
                <RotateCcw className="mr-2" />
                {t('reset')}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const TeamPanel = ({ side, score, fouls, onUpdateScore, onUpdateFouls, t }: { side: string, score: number, fouls: number, onUpdateScore: (d: number) => void, onUpdateFouls: (d: number) => void, t: any }) => (
    <div className="p-4 bg-card-foreground/5 rounded-lg space-y-6">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-wider text-primary font-headline">{side}</h2>
        <div>
            <h3 className="text-lg font-semibold text-muted-foreground">{t('score')}</h3>
            <div className="flex items-center justify-center gap-4 mt-2">
                <Button variant="outline" size="icon" onClick={() => onUpdateScore(-1)}><Minus /></Button>
                <p className="text-6xl md:text-8xl font-bold w-24 tabular-nums transition-all duration-200">{score}</p>
                <Button variant="outline" size="icon" onClick={() => onUpdateScore(1)}><Plus /></Button>
            </div>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-muted-foreground">{t('fouls')}</h3>
            <div className="flex items-center justify-center gap-4 mt-2">
                <Button variant="outline" size="icon" onClick={() => onUpdateFouls(-1)}><Minus /></Button>
                <p className="text-6xl md:text-8xl font-bold w-24 tabular-nums transition-all duration-200">{fouls}</p>
                <Button variant="outline" size="icon" onClick={() => onUpdateFouls(1)}><Plus /></Button>
            </div>
        </div>
    </div>
);
