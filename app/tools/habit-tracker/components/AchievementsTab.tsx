'use client';

import React from 'react';
import {
  CheckCircle2, Flame, Zap, Shield, Trophy, Star,
  Target, Award, Sparkles, TrendingUp, Lock, Gift,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useHabitStore, ACHIEVEMENT_DEFS, getWeeklyCompletionRate } from '../store/useHabitStore';
import { toast } from '@/hooks/use-toast';
import { differenceInDays, parseISO, format } from 'date-fns';

interface AchievementsTabProps {
  t: (k: string) => string;
}

const ACHIEVEMENT_ICONS: Record<string, React.ElementType> = {
  first_log:   CheckCircle2,
  streak_3:    Flame,
  streak_7:    Zap,
  streak_21:   Shield,
  streak_30:   Trophy,
  streak_100:  Star,
  habits_5:    Target,
  total_50:    Award,
  total_100:   Sparkles,
  level_5:     TrendingUp,
  shield_user: Lock,
  collector:   Gift,
};

const ACHIEVEMENT_COLORS: Record<string, string> = {
  first_log:   'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30',
  streak_3:    'text-orange-500 bg-orange-50 dark:bg-orange-950/30',
  streak_7:    'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/30',
  streak_21:   'text-blue-600 bg-blue-50 dark:bg-blue-950/30',
  streak_30:   'text-purple-600 bg-purple-50 dark:bg-purple-950/30',
  streak_100:  'text-amber-500 bg-amber-50 dark:bg-amber-950/30',
  habits_5:    'text-rose-600 bg-rose-50 dark:bg-rose-950/30',
  total_50:    'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30',
  total_100:   'text-pink-600 bg-pink-50 dark:bg-pink-950/30',
  level_5:     'text-teal-600 bg-teal-50 dark:bg-teal-950/30',
  shield_user: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/30',
  collector:   'text-violet-600 bg-violet-50 dark:bg-violet-950/30',
};

export function AchievementsTab({ t }: AchievementsTabProps) {
  const { habits, logs, achievements, chestOpenedAt, openMysteryChest } = useHabitStore();

  const weeklyRate = getWeeklyCompletionRate(logs, habits);
  const canOpenChest = weeklyRate >= 80 && (
    !chestOpenedAt || differenceInDays(new Date(), parseISO(chestOpenedAt)) >= 7
  );
  const unlockedCount = achievements.length;

  const handleOpenChest = () => {
    openMysteryChest();
    toast({ title: t('chest_opened') });
  };

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-6 text-white text-center">
        <Sparkles className="h-8 w-8 mx-auto mb-2 opacity-90" />
        <p className="text-4xl font-black">{unlockedCount}<span className="text-2xl opacity-70">/{ACHIEVEMENT_DEFS.length}</span></p>
        <p className="text-[11px] font-black uppercase tracking-[0.2em] opacity-80 mt-1">{t('achievements_unlocked')}</p>
      </div>

      {/* Mystery Chest */}
      {canOpenChest && (
        <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700 rounded-2xl p-5 text-center space-y-3">
          <p className="text-3xl">🎁</p>
          <p className="font-black uppercase tracking-tight">{t('chest_available')}</p>
          <p className="text-xs text-muted-foreground">{t('chest_desc')}</p>
          <Button onClick={handleOpenChest} className="font-black uppercase text-xs h-11 bg-amber-500 hover:bg-amber-600 text-white border-0">
            <Gift className="h-4 w-4 mr-2" />
            {t('open_chest')}
          </Button>
        </div>
      )}

      {!canOpenChest && weeklyRate < 80 && habits.filter(h => h.isActive).length > 0 && (
        <div className="bg-card border-2 rounded-2xl p-5 text-center space-y-2">
          <p className="text-2xl">🔒</p>
          <p className="font-black uppercase tracking-tight text-sm">{t('chest_locked')}</p>
          <p className="text-xs text-muted-foreground">{t('chest_locked_desc').replace('{rate}', String(weeklyRate))}</p>
          <div className="bg-muted rounded-full h-2 overflow-hidden mt-2">
            <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${weeklyRate}%` }} />
          </div>
          <p className="text-[10px] font-bold text-muted-foreground">{weeklyRate}% / 80%</p>
        </div>
      )}

      {chestOpenedAt && !canOpenChest && differenceInDays(new Date(), parseISO(chestOpenedAt)) < 7 && (
        <div className="bg-card border-2 rounded-2xl p-4 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.15em] text-muted-foreground">
            {t('next_chest')}: {format(new Date(new Date(chestOpenedAt).getTime() + 7 * 86400000), 'MMM d')}
          </p>
        </div>
      )}

      {/* Achievement grid */}
      <div className="grid grid-cols-1 gap-3">
        {ACHIEVEMENT_DEFS.map((def) => {
          const unlocked = achievements.find(a => a.id === def.id);
          const Icon = ACHIEVEMENT_ICONS[def.id] ?? Star;
          const colorClass = unlocked ? (ACHIEVEMENT_COLORS[def.id] ?? 'text-primary bg-primary/10') : 'text-muted-foreground/40 bg-muted/40';

          return (
            <div
              key={def.id}
              className={`rounded-2xl border-2 p-4 flex items-center gap-4 transition-all ${
                unlocked ? 'bg-card' : 'bg-muted/20 opacity-60'
              }`}
            >
              <div className={`p-3 rounded-xl flex-shrink-0 ${colorClass}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-black text-sm uppercase tracking-tight">{def.label}</p>
                  {unlocked && (
                    <Badge variant="secondary" className="text-[9px] font-black uppercase">
                      ✓ {t('unlocked')}
                    </Badge>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5">{def.desc}</p>
                {unlocked && (
                  <p className="text-[10px] font-bold text-muted-foreground mt-1">
                    {format(parseISO(unlocked.unlockedAt), 'MMM d, yyyy')}
                  </p>
                )}
              </div>
              {!unlocked && <Lock className="h-4 w-4 text-muted-foreground/30 flex-shrink-0" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
