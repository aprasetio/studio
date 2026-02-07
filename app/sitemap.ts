import { MetadataRoute } from 'next';
import { SEO_DATA } from '@/lib/seo-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://versokit.com';
  
  const toolKeys = Object.keys(SEO_DATA);

  const toolEntries = toolKeys.map((tool) => ({
    url: `${baseUrl}/tools/${tool === 'lineup' ? 'lineup-builder' : tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const legalPages = ['about', 'privacy', 'terms', 'contact'].map((page) => ({
    url: `${baseUrl}/legal/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...toolEntries,
    ...legalPages,
  ];
}