'use client';

import React, { useState } from 'react';
import { ArticleCard } from './ArticleCard';
import { CATEGORY_META, ARTICLE_CATEGORIES, type ArticleMeta, type ArticleCategory } from '@/lib/articles';

interface Props {
  articles: ArticleMeta[];
  activeCategory?: ArticleCategory | 'all';
}

export function ArticlesClient({ articles, activeCategory: initialCategory = 'all' }: Props) {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'all'>(initialCategory);

  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wide border-2 transition-all ${
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
          }`}
        >
          🗂 Semua ({articles.length})
        </button>
        {ARTICLE_CATEGORIES.map(cat => {
          const meta = CATEGORY_META[cat];
          const count = articles.filter(a => a.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wide border-2 transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
              }`}
            >
              {meta.emoji} {meta.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Articles grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-4xl mb-3">📄</p>
          <p className="font-black uppercase tracking-tight">Belum ada artikel di kategori ini</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(article => (
            <ArticleCard key={`${article.category}-${article.slug}`} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
