'use client';

import React from 'react';
import { useLang } from '@/components/Providers';
import { Globe } from 'lucide-react';

export function LangToggle() {
  const { lang, setLang } = useLang();

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full border min-h-[44px]">
      <Globe className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as any)}
        aria-label="Select language"
        className="bg-transparent text-[11px] font-bold uppercase tracking-wider focus-visible:outline-2 focus-visible:outline-primary cursor-pointer appearance-none pr-1"
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} className="text-foreground bg-background">
            {l.flag} {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
