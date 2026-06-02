import React from 'react';
import { getAllArticles } from '@/lib/articles';
import { ArticlesClient } from '@/components/article/ArticlesClient';

export default function ArticlePage() {
  const articles = getAllArticles();

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="mb-8">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
          VersoKit / Artikel
        </p>
        <h1 className="text-3xl font-black uppercase tracking-tighter">
          Artikel & Panduan
        </h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl">
          Tips, panduan, dan wawasan seputar produktivitas, keuangan, olahraga, ibadah, dan investasi syariah.
        </p>
      </div>

      <ArticlesClient articles={articles} />
    </div>
  );
}
