'use client';

import React from 'react';
import { Search, ShieldCheck, WifiOff, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { UI_LABELS, BADGE_TEXT } from '@/lib/tools-data';

interface HeroSectionProps {
  lang: string;
  search: string;
  onSearch: (value: string) => void;
}

const getLabel = (key: string, lang: string) =>
  UI_LABELS[key]?.[lang] ?? UI_LABELS[key]?.['en'] ?? key;

export function HeroSection({ lang, search, onSearch }: HeroSectionProps) {
  return (
    <section className="bg-primary pt-20 pb-32 px-6 text-center text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-xl animate-in fade-in slide-in-from-top duration-700">
          {getLabel('hero_title', lang)}
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mt-6 mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          <FeaturePill icon={<ShieldCheck size={16} />} label={BADGE_TEXT.privacy[lang] ?? BADGE_TEXT.privacy.en} className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/50" />
          <FeaturePill icon={<WifiOff size={16} />} label={BADGE_TEXT.offline[lang] ?? BADGE_TEXT.offline.en} className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-800/50" />
          <FeaturePill icon={<Heart size={16} />} label={BADGE_TEXT.free[lang] ?? BADGE_TEXT.free.en} className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-purple-100 dark:border-blue-800/50" />
        </div>

        <div className="max-w-xl mx-auto relative group pt-4">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none mt-4">
            <Search className="h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
          </div>
          <Input
            type="text"
            placeholder={getLabel('search_placeholder', lang)}
            className="h-16 pl-14 pr-6 rounded-2xl text-lg font-bold shadow-2xl border-none bg-white text-black dark:bg-slate-900 dark:text-white focus-visible:ring-accent"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, label, className }: { icon: React.ReactNode; label: string; className: string }) {
  return (
    <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-transform hover:scale-105 cursor-default ${className}`}>
      {icon}
      <span className="text-sm font-bold uppercase tracking-tight">{label}</span>
    </div>
  );
}
