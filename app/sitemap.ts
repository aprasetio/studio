import { MetadataRoute } from 'next';
import { SEO_DATA } from '@/lib/seo-content';
import { getAllArticleSlugs } from '@/lib/articles';
import { ARTICLE_LANGS, ARTICLE_CATEGORIES } from '@/lib/articles-config';

const BASE = 'https://versokit.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // --- Static pages ---
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    ...['about', 'privacy', 'terms', 'contact'].map(page => ({
      url: `${BASE}/legal/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    })),
  ];

  // --- Tool pages ---
  const toolPages: MetadataRoute.Sitemap = Object.keys(SEO_DATA).map(tool => ({
    url: `${BASE}/tools/${tool === 'lineup' ? 'lineup-builder' : tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // --- Article listing pages (per lang) ---
  const articleListPages: MetadataRoute.Sitemap = ARTICLE_LANGS
    .filter(lang => getAllArticleSlugs(lang).length > 0)
    .flatMap(lang => [
      {
        url: `${BASE}/${lang}/article`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: lang === 'id' ? 0.9 : 0.8,
      },
      ...ARTICLE_CATEGORIES.map(category => ({
        url: `${BASE}/${lang}/article/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: lang === 'id' ? 0.7 : 0.6,
      })),
    ]);

  // --- Article detail pages (per lang) ---
  const articlePages: MetadataRoute.Sitemap = ARTICLE_LANGS.flatMap(lang => {
    const slugs = getAllArticleSlugs(lang);
    return slugs.map(({ category, slug }) => ({
      url: `${BASE}/${lang}/article/${category}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: lang === 'id' ? 0.8 : 0.7,
    }));
  });

  return [...staticPages, ...toolPages, ...articleListPages, ...articlePages];
}
