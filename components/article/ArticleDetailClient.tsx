'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { CATEGORY_META, formatDate, type Article, type ArticleCategory } from '@/lib/articles-config';
import { CategoryBadge } from '@/components/article/CategoryBadge';
import { ToolCTA } from '@/components/article/ToolCTA';
import { CrossPromoWidget } from '@/components/article/CrossPromoWidget';
import { useLang } from '@/components/Providers';

export function ArticleDetailClient({ article }: { article: Article }) {
  const { lang, t } = useLang();
  const catMeta = CATEGORY_META[article.category as ArticleCategory];

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <nav className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-6 flex-wrap">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/article" className="hover:text-primary transition-colors">{t('articles')}</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href={`/article/${article.category}`} className="hover:text-primary transition-colors">
          {catMeta ? t(catMeta.labelKey) : article.category}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground line-clamp-1">{article.title}</span>
      </nav>

      <header className="mb-8 space-y-4">
        <CategoryBadge category={article.category as ArticleCategory} />
        <h1 className="text-2xl font-black uppercase tracking-tight leading-tight">
          {article.title}
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">{article.description}</p>
        <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground border-t pt-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(article.publishedAt, lang)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {article.readingTime}
          </span>
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {article.tags.map(tag => (
                <span key={tag} className="bg-muted px-2 py-0.5 rounded-full text-[9px] font-black uppercase">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <article
        className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-primary prose-strong:font-black"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {article.relatedTool && <ToolCTA toolId={article.relatedTool} />}
      {article.crossPromo && <CrossPromoWidget />}

      <div className="mt-10 pt-6 border-t">
        <Link
          href="/article"
          className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('articles_back')}
        </Link>
      </div>
    </div>
  );
}
