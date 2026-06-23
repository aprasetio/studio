import type { Metadata } from 'next';
import React from 'react';
import { TRANSLATIONS, type Language } from '@/lib/translations';
import { CATEGORY_META } from '@/lib/articles-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = TRANSLATIONS[(lang as Language)] ?? TRANSLATIONS['en'];
  return {
    title: { template: `%s | VersoKit`, default: t.articles_title },
    description: t.articles_subtitle,
  };
}

export default function ArticleLangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
