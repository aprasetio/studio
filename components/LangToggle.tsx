'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLang, useArticleNav } from '@/components/Providers';
import { Globe } from 'lucide-react';
import type { Language } from '@/lib/translations';

export function LangToggle() {
  const { lang, setLang } = useLang();
  const { articleNav } = useArticleNav();
  const router = useRouter();

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  const handleChange = (newLang: Language) => {
    setLang(newLang);

    if (articleNav) {
      const targetSlug = articleNav.translations[newLang];
      if (targetSlug) {
        // Navigate to the translated article
        router.push(`/${newLang}/article/${articleNav.category}/${targetSlug}`);
      } else {
        // No translation for this lang yet — go to article listing
        router.push(`/${newLang}/article`);
      }
    }
  };

  return (
    <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full border min-h-[44px]">
      <Globe className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      <select
        value={lang}
        onChange={(e) => handleChange(e.target.value as Language)}
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
