'use client';

import React from 'react';
import { FutsalScoreboard } from '@/components/futsal-scoreboard';
import { DataControl } from '@/components/DataControl';
import { useLang } from '@/components/Providers';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';

export default function FutsalPage() {
  const { t } = useLang();

  const seoData = {
    title: "Futsal Scoreboard Pro",
    description: "A professional-grade digital scoreboard for Futsal matches featuring a timer, foul counters, and period management.",
    steps: [
      "Set the timer duration (presets available for 10, 15, and 20 minutes).",
      "Click Start to begin the match countdown.",
      "Use the + and - buttons to update home and away goals.",
      "Click 'Foul' to track penalties (the counter turns red and flashes at 5 fouls)."
    ],
    article: "Managing a futsal match requires precision. This **Free Online Futsal Scoreboard** replaces expensive physical boards. It includes a dedicated **Foul Counter** compliant with FIFA futsal rules and a specialized timer. Perfect for local leagues, official tournaments, and sparring matches. The interface is designed for high visibility on both mobile devices and large TV screens.",
    faq: [
      { q: "Is this futsal scoreboard free?", a: "Yes, VersoKit tools are completely free to use without any subscription." },
      { q: "Does it need internet to work?", a: "No, this tool works entirely offline once loaded in your browser, making it reliable for sports halls with poor reception." },
      { q: "What happens when a team reaches 5 fouls?", a: "In Futsal rules, the 6th foul results in a second-penalty. Our board highlights the 5th foul in red as a warning to referees and teams." }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 flex flex-col items-center pt-10">
      <div className="flex flex-col md:flex-row w-full max-w-4xl items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-black text-primary uppercase tracking-[0.2em]">{t('futsal')}</h1>
        <DataControl storageKey="futsal-scoreboard-state" type="object" />
      </div>
      
      <FutsalScoreboard />
      
      <SmartAd />
      
      <SeoContent {...seoData} />
    </div>
  );
}
