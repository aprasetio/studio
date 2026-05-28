'use client';

import React from 'react';
import { format, parseISO } from 'date-fns';
import { Lock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useIbadahStore, ACHIEVEMENT_DEFS } from '../store/useIbadahStore';

const BADGE_ICONS: Record<string, string> = {
  langkah_pertama: '👣',
  fardhu_5:        '🕌',
  istiqomah_7:     '🔥',
  istiqomah_30:    '⚡',
  istiqomah_100:   '🏆',
  tahajud_perdana: '🌟',
  quran_7:         '📖',
  dzikir_7:        '🤲',
  jamaah_10:       '👥',
  sedekah_10:      '💝',
  puasa_4:         '🌙',
  hari_sempurna:   '✨',
};

const BADGE_COLORS: Record<string, string> = {
  langkah_pertama: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800',
  fardhu_5:        'bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800',
  istiqomah_7:     'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800',
  istiqomah_30:    'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800',
  istiqomah_100:   'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800',
  tahajud_perdana: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800',
  quran_7:         'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800',
  dzikir_7:        'bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800',
  jamaah_10:       'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
  sedekah_10:      'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800',
  puasa_4:         'bg-slate-50 dark:bg-slate-950/30 border-slate-200 dark:border-slate-800',
  hari_sempurna:   'bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-amber-950/30 dark:to-emerald-950/30 border-amber-200',
};

interface AchievementsTabProps {
  t: (k: string) => string;
}

export function AchievementsTab({ t }: AchievementsTabProps) {
  const { achievements } = useIbadahStore();
  const unlockedCount = achievements.length;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl p-6 text-white text-center">
        <p className="text-4xl mb-1">🏆</p>
        <p className="text-4xl font-black">
          {unlockedCount}<span className="text-2xl opacity-70">/{ACHIEVEMENT_DEFS.length}</span>
        </p>
        <p className="text-[11px] font-black uppercase tracking-[0.2em] opacity-80 mt-1">{t('achievements_earned')}</p>
      </div>

      {/* Badge grid */}
      <div className="grid grid-cols-1 gap-3">
        {ACHIEVEMENT_DEFS.map((def) => {
          const unlocked = achievements.find(a => a.id === def.id);
          const emoji = BADGE_ICONS[def.id] ?? '⭐';
          const colorClass = unlocked
            ? (BADGE_COLORS[def.id] ?? 'bg-card border-border')
            : 'bg-muted/20 border-muted opacity-50';

          return (
            <div key={def.id} className={`rounded-2xl border-2 p-4 flex items-center gap-4 transition-all ${colorClass}`}>
              <div className="text-3xl w-12 text-center flex-shrink-0">{unlocked ? emoji : '🔒'}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-black text-sm uppercase tracking-tight">{def.label}</p>
                  {unlocked && (
                    <Badge variant="secondary" className="text-[9px] font-black uppercase">✓ {t('unlocked')}</Badge>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5">{def.desc}</p>
                {unlocked && (
                  <p className="text-[10px] font-bold text-muted-foreground mt-1">
                    {format(parseISO(unlocked.unlockedAt), 'd MMM yyyy')}
                  </p>
                )}
              </div>
              {!unlocked && <Lock className="h-4 w-4 text-muted-foreground/30 flex-shrink-0" />}
            </div>
          );
        })}
      </div>

      {/* Dua footer */}
      <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-2xl p-5 text-white text-center space-y-2">
        <Star className="h-6 w-6 mx-auto opacity-70" />
        <p className="text-[11px] font-black uppercase tracking-[0.15em] opacity-70">{t('closing_dua_label')}</p>
        <p className="text-sm font-bold italic opacity-90">"{t('closing_dua')}"</p>
      </div>
    </div>
  );
}
