'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { TRANSLATIONS, type Language } from '@/lib/translations';

// --- Language context ---

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within Providers');
  return context;
}

// --- Article nav context (for lang-aware navigation on article pages) ---

interface ArticleNavData {
  category: string;
  translations: Record<string, string>; // { id: 'id-slug', en: 'en-slug', ... }
}

interface ArticleNavContextType {
  articleNav: ArticleNavData | null;
  setArticleNav: (data: ArticleNavData | null) => void;
}

const ArticleNavContext = createContext<ArticleNavContextType | undefined>(undefined);

export function useArticleNav() {
  const context = useContext(ArticleNavContext);
  if (!context) throw new Error('useArticleNav must be used within Providers');
  return context;
}

// --- Root providers ---

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('id');
  const [articleNav, setArticleNav] = useState<ArticleNavData | null>(null);

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
        <ArticleNavContext.Provider value={{ articleNav, setArticleNav }}>
          {children}
        </ArticleNavContext.Provider>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}
