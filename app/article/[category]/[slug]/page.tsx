import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles';
import { ArticleDetailClient } from '@/components/article/ArticleDetailClient';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);
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

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const article = await getArticleBySlug(category, slug);
  if (!article) return notFound();

  return <ArticleDetailClient article={article} />;
}
