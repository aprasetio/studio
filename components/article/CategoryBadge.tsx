'use client';

import React from 'react';
import { CATEGORY_META, type ArticleCategory } from '@/lib/articles-config';
import { useLang } from '@/components/Providers';

const COLOR_MAP: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400',
  blue:    'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400',
  purple:  'bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400',
  teal:    'bg-teal-100 text-teal-700 dark:bg-teal-950/40 dark:text-teal-400',
  amber:   'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400',
  rose:    'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400',
};

export function CategoryBadge({ category }: { category: ArticleCategory }) {
  const { t } = useLang();
  const meta = CATEGORY_META[category];
  if (!meta) return null;
  const colorClass = COLOR_MAP[meta.color] ?? COLOR_MAP['blue'];
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-[0.1em] ${colorClass}`}>
      {meta.emoji} {t(meta.labelKey)}
    </span>
  );
}
