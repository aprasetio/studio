import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticlesByCategory, ARTICLE_CATEGORIES, CATEGORY_META, type ArticleCategory } from '@/lib/articles';
import { TRANSLATIONS } from '@/lib/translations';
import { CategoryPageContent } from '@/components/article/CategoryPageContent';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return ARTICLE_CATEGORIES.map(category => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_META[category as ArticleCategory];
  if (!meta) return {};
  const label = TRANSLATIONS['en'][meta.labelKey];
  return {
    title: `${meta.emoji} ${label}`,
    description: `Articles and guides about ${label.toLowerCase()} from VersoKit.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!ARTICLE_CATEGORIES.includes(category as ArticleCategory)) notFound();

  const cat = category as ArticleCategory;
  const articles = getArticlesByCategory(cat);

  return <CategoryPageContent cat={cat} articles={articles} />;
}
