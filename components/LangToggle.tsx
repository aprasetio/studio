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
    <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full border">
      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
      <select 
        value={lang} 
        onChange={(e) => setLang(e.target.value as any)}
        className="bg-transparent text-[11px] font-bold uppercase tracking-wider focus:outline-none cursor-pointer appearance-none pr-1"
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
