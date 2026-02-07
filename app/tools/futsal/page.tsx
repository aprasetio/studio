'use client';

import React from 'react';
import { FutsalScoreboard } from '@/components/futsal-scoreboard';
import { useLang } from '@/components/Providers';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';
import { ArticleSection } from '@/components/ArticleSection';

const UI_TEXT = {
  title_futsal: { 
    en: "Futsal Scoreboard", 
    id: "Papan Skor Futsal", 
    de: "Futsal-Anzeigetafel", 
    es: "Marcador de Fútbol Sala", 
    pt: "Placar de Futsal", 
    fr: "Tableau de Score Futsal", 
    it: "Tabellone Calcio a 5" 
  }
};

export default function FutsalPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground p-4 flex flex-col items-center pt-10">
      <div className="flex flex-col md:flex-row w-full max-w-4xl items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-black text-primary uppercase tracking-[0.2em]">
          {UI_TEXT.title_futsal[lang] || UI_TEXT.title_futsal['en']}
        </h1>
      </div>
      
      <FutsalScoreboard />

      <ArticleSection toolId="futsal" />
      
      <SmartAd />
      
      <SeoContent toolId="futsal" />
    </div>
  );
}
