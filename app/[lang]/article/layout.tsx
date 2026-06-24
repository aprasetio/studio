import type { Metadata } from 'next';
import React from 'react';
import { TRANSLATIONS, type Language } from '@/lib/translations';
import { ARTICLE_LANGS } from '@/lib/articles-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = TRANSLATIONS[(lang as Language)] ?? TRANSLATIONS['en'];

  const languages: Record<string, string> = { 'x-default': '/id/article' };
  for (const l of ARTICLE_LANGS) {
    languages[l] = `/${l}/article`;
  }

  return {
    title: { template: `%s | VersoKit`, default: t.articles_title },
    description: t.articles_subtitle,
    alternates: {
      canonical: `/${lang}/article`,
      languages,
    },
  };
}

export default function ArticleLangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
