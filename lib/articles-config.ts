// Safe for client components — no fs/server-only imports

import type { TranslationKey } from '@/lib/translations';

export const ARTICLE_CATEGORIES = [
  'olahraga',
  'keuangan',
  'produktivitas',
  'ibadah',
  'saham-syariah',
  'tips',
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export const CATEGORY_META: Record<ArticleCategory, { labelKey: TranslationKey; emoji: string; color: string }> = {
  olahraga:        { labelKey: 'cat_olahraga',      emoji: '⚽', color: 'emerald' },
  keuangan:        { labelKey: 'cat_keuangan',      emoji: '💰', color: 'blue' },
  produktivitas:   { labelKey: 'cat_produktivitas', emoji: '🎯', color: 'purple' },
  ibadah:          { labelKey: 'cat_ibadah',        emoji: '🕌', color: 'teal' },
  'saham-syariah': { labelKey: 'cat_saham_syariah', emoji: '📈', color: 'amber' },
  tips:            { labelKey: 'cat_tips',          emoji: '💡', color: 'rose' },
};

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  tags?: string[];
  relatedTool?: string;
  crossPromo?: boolean;
  author?: string;
  canonicalId?: string;                    // links translations of the same article
  translations?: Record<string, string>;   // { en: 'english-slug', es: 'spanish-slug' }
}

export interface ArticleMeta extends ArticleFrontmatter {
  slug: string;
  lang: string;
  readingTime: string;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

const DATE_LOCALES: Record<string, string> = {
  id: 'id-ID',
  en: 'en-US',
  es: 'es-ES',
  pt: 'pt-BR',
  de: 'de-DE',
  fr: 'fr-FR',
  it: 'it-IT',
};

export function formatDate(dateStr: string, lang = 'id'): string {
  const d = new Date(dateStr);
  const locale = DATE_LOCALES[lang] ?? 'en-US';
  return d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}
