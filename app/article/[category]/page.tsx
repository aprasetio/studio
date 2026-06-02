import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getArticlesByCategory, ARTICLE_CATEGORIES, CATEGORY_META, type ArticleCategory } from '@/lib/articles';
import { ArticlesClient } from '@/components/article/ArticlesClient';

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
  return {
    title: `${meta.emoji} ${meta.label}`,
    description: `Artikel dan panduan seputar ${meta.label.toLowerCase()} dari VersoKit.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!ARTICLE_CATEGORIES.includes(category as ArticleCategory)) notFound();

  const cat = category as ArticleCategory;
  const meta = CATEGORY_META[cat];
  const articles = getArticlesByCategory(cat);

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/article" className="hover:text-primary transition-colors">Artikel</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{meta.label}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-black uppercase tracking-tighter">
          {meta.emoji} {meta.label}
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          {articles.length} artikel tersedia
        </p>
      </div>

      <ArticlesClient articles={articles} activeCategory={cat} />
    </div>
  );
}
