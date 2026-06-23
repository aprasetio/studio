import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles';
import { ARTICLE_LANGS } from '@/lib/articles-config';
import { ArticleDetailClient } from '@/components/article/ArticleDetailClient';

interface Props {
  params: Promise<{ lang: string; category: string; slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLE_LANGS.flatMap(lang =>
    getAllArticleSlugs(lang).map(({ category, slug }) => ({ lang, category, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, category, slug } = await params;
  const article = await getArticleBySlug(category, slug, lang);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticleSlugLangPage({ params }: Props) {
  const { lang, category, slug } = await params;
  if (!ARTICLE_LANGS.includes(lang as any)) return notFound();

  const article = await getArticleBySlug(category, slug, lang);
  if (!article) return notFound();

  return <ArticleDetailClient article={article} />;
}
