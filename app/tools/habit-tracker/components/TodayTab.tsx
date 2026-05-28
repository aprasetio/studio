'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Sparkles, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { HabitCard } from './HabitCard';
import { useHabitStore, getLevelInfo, logKey, today, LEVEL_THRESHOLDS } from '../store/useHabitStore';

interface TodayTabProps {
  t: (k: string) => string;
  onAddHabit: () => void;
}

const UNDO_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

export function TodayTab({ t, onAddHabit }: TodayTabProps) {
  const { habits, logs, xp, logHabit, undoLog } = useHabitStore();
  const [now, setNow] = useState(Date.now());

  // Refresh every minute to update undo window
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  const todayStr = today();
  const active = habits.filter(h => h.isActive);
  const doneToday = active.filter(h => logs[logKey(h.id, todayStr)]?.status === 'done').length;
  const loggedToday = active.filter(h => {
    const l = logs[logKey(h.id, todayStr)];
    return l && l.status !== 'missed';
  }).length;

  const progressPct = active.length > 0 ? Math.round((doneToday / active.length) * 100) : 0;
  const allDone = active.length > 0 && loggedToday === active.length;

  const { level, pct: xpPct, next } = getLevelInfo(xp);

  const canUndo = (habitId: string) => {
    const log = logs[logKey(habitId, todayStr)];
    if (!log || log.status === 'missed') return false;
    return (now - new Date(log.loggedAt).getTime()) < UNDO_WINDOW_MS;
  };

  return (
    <div className="space-y-6">
      {/* Date + progress header */}
      <div className="bg-card border-2 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              {format(new Date(), 'EEEE, d MMMM yyyy')}
            </p>
            <p className="text-2xl font-black tracking-tighter mt-0.5">
              {doneToday}/{active.length} {t('completed')}
            </p>
          </div>
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted/30" />
              <circle
                cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeDasharray={`${progressPct} ${100 - progressPct}`}
                strokeLinecap="round"
                className="text-primary transition-all duration-500"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[13px] font-black">
              {progressPct}%
            </span>
          </div>
        </div>

        {/* XP bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            <span>Lv {level}</span>
            <span>{xp} / {next} XP</span>
          </div>
          <Progress value={xpPct} className="h-2" />
        </div>
      </div>

      {/* All done celebration */}
      {allDone && (
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-300 dark:border-emerald-700 rounded-2xl p-5 text-center">
          <Sparkles className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
          <p className="font-black uppercase tracking-tight text-emerald-800 dark:text-emerald-300">
            {t('all_done_title')}
          </p>
          <p className="text-sm text-emerald-600 mt-1">{t('all_done_msg')}</p>
        </div>
      )}

      {/* Habit list */}
      {active.length === 0 ? (
        <div className="text-center py-12 space-y-4">
          <p className="text-4xl">🎯</p>
          <p className="font-black uppercase tracking-tight text-muted-foreground">{t('no_habits')}</p>
          <Button onClick={onAddHabit} className="font-black uppercase text-xs gap-2">
            <Plus className="h-4 w-4" />
            {t('add_first_habit')}
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {active.map(habit => (
            <HabitCard
              key={habit.id}
              habit={habit}
              logs={logs}
              lang="en"
              onDone={() => logHabit(habit.id, todayStr, 'done')}
              onSkip={() => logHabit(habit.id, todayStr, 'skip')}
              onUndo={() => undoLog(habit.id, todayStr)}
              canUndo={canUndo(habit.id)}
              t={t}
            />
          ))}
        </div>
      )}
    </div>
  );
}
