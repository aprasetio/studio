'use client';

import { useLang } from '@/components/Providers';
import { ShieldCheck, WifiOff, Heart } from 'lucide-react';

const BADGE_TEXT: Record<string, Record<string, string>> = {
  privacy: { en: "Privacy-first", id: "Privasi Utama", de: "Datenschutz", es: "Privacidad", pt: "Privacidade", fr: "Confidentialité", it: "Privacy" },
  offline: { en: "Offline-ready", id: "Bisa Offline", de: "Offline-bereit", es: "Modo Offline", pt: "Modo Offline", fr: "Hors ligne", it: "Offline" },
  free: { en: "Free", id: "Gratis", de: "Kostenlos", es: "Gratis", pt: "Grátis", fr: "Gratuit", it: "Gratis" }
};

export default function TrustBadges() {
  const { lang } = useLang();

  return (
    <div className="flex flex-wrap gap-3 mt-3 mb-6 items-center justify-center text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-transform hover:scale-105 cursor-default">
        <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
        <span>{BADGE_TEXT.privacy[lang] || BADGE_TEXT.privacy.en}</span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-transform hover:scale-105 cursor-default">
        <WifiOff size={14} className="text-blue-600 dark:text-blue-400" />
        <span>{BADGE_TEXT.offline[lang] || BADGE_TEXT.offline.en}</span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-transform hover:scale-105 cursor-default">
        <Heart size={14} className="text-rose-600 dark:text-rose-400" />
        <span>{BADGE_TEXT.free[lang] || BADGE_TEXT.free.en}</span>
      </div>
    </div>
  );
}
