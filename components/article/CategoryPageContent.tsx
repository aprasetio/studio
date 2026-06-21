'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { CATEGORY_META, type ArticleMeta, type ArticleCategory } from '@/lib/articles-config';
import { ArticlesClient } from '@/components/article/ArticlesClient';
import { useLang } from '@/components/Providers';

interface Props {
  cat: ArticleCategory;
  articles: ArticleMeta[];
}

export function CategoryPageContent({ cat, articles }: Props) {
  const { t } = useLang();
  const meta = CATEGORY_META[cat];

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <nav className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/article" className="hover:text-primary transition-colors">{t('articles')}</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{t(meta.labelKey)}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-black uppercase tracking-tighter">
          {meta.emoji} {t(meta.labelKey)}
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          {articles.length} {t('articles').toLowerCase()}
        </p>
      </div>

      <ArticlesClient articles={articles} activeCategory={cat} />
    </div>
  );
}
