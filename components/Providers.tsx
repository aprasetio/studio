'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { TRANSLATIONS, type Language } from '@/lib/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('id');

  useEffect(() => {
    const savedLang = localStorage.getItem('versokit-lang') as Language;
    if (savedLang && savedLang in TRANSLATIONS) setLang(savedLang);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('versokit-lang', newLang);
  };

  const t = (key: string): string =>
    TRANSLATIONS[lang]?.[key as keyof (typeof TRANSLATIONS)[Language]] ??
    TRANSLATIONS['en']?.[key as keyof (typeof TRANSLATIONS)[Language]] ??
    key;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
        {children}
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}
