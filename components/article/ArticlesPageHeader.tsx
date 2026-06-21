'use client';

import React from 'react';
import { useLang } from '@/components/Providers';

export function ArticlesPageHeader() {
  const { t } = useLang();
  return (
    <div className="mb-8">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
        VersoKit / {t('articles')}
      </p>
      <h1 className="text-3xl font-black uppercase tracking-tighter">
        {t('articles_title')}
      </h1>
      <p className="text-sm text-muted-foreground mt-2 max-w-xl">
        {t('articles_subtitle')}
      </p>
    </div>
  );
}
