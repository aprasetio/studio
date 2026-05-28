'use client';

import React from 'react';
import { format, subDays } from 'date-fns';
import { CheckCircle2, SkipForward, RotateCcw, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Habit, HabitLog, LogStatus, getStreak, logKey, today } from '../store/useHabitStore';

interface HabitCardProps {
  habit: Habit;
  logs: Record<string, HabitLog>;
  lang: string;
  onDone: () => void;
  onSkip: () => void;
  onUndo: () => void;
  canUndo: boolean;
  t: (k: string) => string;
}

const DOT_COLORS: Record<LogStatus | 'none', string> = {
  done:   'bg-emerald-500',
  skip:   'bg-amber-400',
  missed: 'bg-red-400/60',
  none:   'bg-muted-foreground/20',
};

export function HabitCard({ habit, logs, onDone, onSkip, onUndo, canUndo, t }: HabitCardProps) {
  const todayStr = today();
  const todayLog = logs[logKey(habit.id, todayStr)];
  const isDone = todayLog?.status === 'done';
  const isSkipped = todayLog?.status === 'skip';
  const isLogged = isDone || isSkipped;
  const streak = getStreak(logs, habit.id);

  // Last 7 days dots (today leftmost)
  const dots = Array.from({ length: 7 }, (_, i) => {
    const d = format(subDays(new Date(), i), 'yyyy-MM-dd');
    const log = logs[logKey(habit.id, d)];
    return log ? log.status : 'none';
  }).reverse();

  return (
    <div
      className={`rounded-2xl border-2 p-4 transition-all duration-200 ${
        isDone ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800' :
        isSkipped ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800' :
        'bg-card border-border hover:border-primary/30'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Emoji + color bar */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{ backgroundColor: habit.color + '22', border: `2px solid ${habit.color}44` }}
        >
          {habit.emoji}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-black text-sm uppercase tracking-tight truncate">{habit.name}</span>
            {streak > 0 && (
              <Badge variant="secondary" className="text-[10px] font-black gap-1 py-0">
                <Flame className="h-3 w-3 text-orange-500" />
                {streak}
              </Badge>
            )}
          </div>

          {/* 7-day dots */}
          <div className="flex gap-1 mt-2">
            {dots.map((status, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${DOT_COLORS[status as LogStatus | 'none']} ${i === 6 ? 'ring-1 ring-offset-1 ring-primary/40' : ''}`}
                title={status}
              />
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 flex-shrink-0">
          {isLogged ? (
            canUndo ? (
              <Button
                size="sm"
                variant="ghost"
                onClick={onUndo}
                className="h-9 px-2 text-[10px] font-black uppercase text-muted-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5 mr-1" />
                {t('undo')}
              </Button>
            ) : (
              <span className={`text-[11px] font-black uppercase px-3 py-1 rounded-full ${
                isDone ? 'text-emerald-700 bg-emerald-100 dark:bg-emerald-900/40' :
                'text-amber-700 bg-amber-100 dark:bg-amber-900/40'
              }`}>
                {isDone ? t('done') : t('skipped')}
              </span>
            )
          ) : (
            <>
              <Button
                size="sm"
                onClick={onDone}
                className="h-10 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[11px] uppercase min-w-[44px]"
              >
                <CheckCircle2 className="h-4 w-4 mr-1" />
                {t('done')}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={onSkip}
                className="h-10 px-3 border-amber-400 text-amber-700 hover:bg-amber-50 font-black text-[11px] uppercase min-w-[44px]"
              >
                <SkipForward className="h-4 w-4 mr-1" />
                {t('skip')}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
