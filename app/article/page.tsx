import React from 'react';
import { getAllArticles } from '@/lib/articles';
import { ArticlesPageHeader } from '@/components/article/ArticlesPageHeader';
import { ArticlesClient } from '@/components/article/ArticlesClient';

export default function ArticlePage() {
  const articles = getAllArticles();

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <ArticlesPageHeader />
      <ArticlesClient articles={articles} />
    </div>
  );
}
