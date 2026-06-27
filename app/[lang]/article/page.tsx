import React from 'react';
import { notFound } from 'next/navigation';
import { getAllArticles } from '@/lib/articles';
import { ARTICLE_LANGS } from '@/lib/articles-config';
import { ArticlesPageHeader } from '@/components/article/ArticlesPageHeader';
import { ArticlesClient } from '@/components/article/ArticlesClient';

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return ARTICLE_LANGS.map(lang => ({ lang }));
}

export default async function ArticleLangPage({ params }: Props) {
  const { lang } = await params;
  if (!ARTICLE_LANGS.includes(lang as any)) return notFound();

  const articles = getAllArticles(lang);

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <ArticlesPageHeader />
      <ArticlesClient articles={articles} />
    </div>
  );
}
