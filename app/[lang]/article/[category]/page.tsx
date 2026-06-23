import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticlesByCategory, ARTICLE_CATEGORIES, CATEGORY_META, type ArticleCategory } from '@/lib/articles';
import { ARTICLE_LANGS } from '@/lib/articles-config';
import { TRANSLATIONS, type Language } from '@/lib/translations';
import { CategoryPageContent } from '@/components/article/CategoryPageContent';

interface Props {
  params: Promise<{ lang: string; category: string }>;
}

export async function generateStaticParams() {
  return ARTICLE_LANGS.flatMap(lang =>
    ARTICLE_CATEGORIES.map(category => ({ lang, category }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, category } = await params;
  const meta = CATEGORY_META[category as ArticleCategory];
  if (!meta) return {};
  const t = TRANSLATIONS[(lang as Language)] ?? TRANSLATIONS['en'];
  const label = t[meta.labelKey];
  return {
    title: `${meta.emoji} ${label}`,
    description: t.articles_subtitle,
  };
}

export default async function CategoryLangPage({ params }: Props) {
  const { lang, category } = await params;
  if (!ARTICLE_LANGS.includes(lang as any)) return notFound();
  if (!ARTICLE_CATEGORIES.includes(category as ArticleCategory)) return notFound();

  const cat = category as ArticleCategory;
  const articles = getArticlesByCategory(cat, lang);

  return <CategoryPageContent cat={cat} articles={articles} />;
}
