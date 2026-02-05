'use client';

import React from 'react';
import { FutsalScoreboard } from '@/components/futsal-scoreboard';
import { DataControl } from '@/components/DataControl';
import { useLang } from '@/components/Providers';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';

export default function FutsalPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground p-4 flex flex-col items-center pt-10">
      <div className="flex flex-col md:flex-row w-full max-w-4xl items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-black text-primary uppercase tracking-[0.2em]">{t('futsal')}</h1>
        <DataControl storageKey="futsal-scoreboard-state" type="object" />
      </div>
      
      <FutsalScoreboard />
      
      <SmartAd />
      
      <SeoContent toolId="futsal" />
    </div>
  );
}
