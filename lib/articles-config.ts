// Safe for client components — no fs/server-only imports

export const ARTICLE_CATEGORIES = [
  'olahraga',
  'keuangan',
  'produktivitas',
  'ibadah',
  'saham-syariah',
  'tips',
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export const CATEGORY_META: Record<ArticleCategory, { label: string; emoji: string; color: string }> = {
  olahraga:        { label: 'Olahraga',      emoji: '⚽', color: 'emerald' },
  keuangan:        { label: 'Keuangan',      emoji: '💰', color: 'blue' },
  produktivitas:   { label: 'Produktivitas', emoji: '🎯', color: 'purple' },
  ibadah:          { label: 'Ibadah',        emoji: '🕌', color: 'teal' },
  'saham-syariah': { label: 'Saham Syariah', emoji: '📈', color: 'amber' },
  tips:            { label: 'Tips & Trik',   emoji: '💡', color: 'rose' },
};

export interface ArticleFrontmatter {
  title: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  tags?: string[];
  relatedTool?: string;
  crossPromo?: boolean;
  lang?: string;
  author?: string;
}

export interface ArticleMeta extends ArticleFrontmatter {
  slug: string;
  readingTime: string;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
}
