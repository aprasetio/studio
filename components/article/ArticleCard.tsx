'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';
import { formatDate, type ArticleMeta } from '@/lib/articles-config';
import { useLang } from '@/components/Providers';

export function ArticleCard({ article }: { article: ArticleMeta }) {
  const { lang } = useLang();
  const href = `/${lang}/article/${article.category}/${article.slug}`;

  return (
    <Link href={href} className="group block">
      <article className="h-full rounded-2xl border-2 border-border bg-card p-5 transition-all group-hover:border-primary/40 group-hover:shadow-lg">
        <div className="flex flex-col h-full gap-3">
          <CategoryBadge category={article.category} />

          <div className="flex-1 space-y-2">
            <h2 className="font-black text-sm uppercase tracking-tight leading-snug line-clamp-3 group-hover:text-primary transition-colors">
              {article.title}
            </h2>
            <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
              {article.description}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-border/50 text-[10px] font-bold text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readingTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formatDate(article.publishedAt, lang)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
