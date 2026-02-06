import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://versokit.com';
  
  // List of all tools currently implemented in the app
  const tools = [
    'futsal',
    'tennis',
    'lineup-builder',
    'scoreboard',
    'tournament',
    'inventory',
    'kanban',
    'calculator',
    'invoice',
    'shift',
    'image-compressor',
    'split-bill',
    'csv-helper',
    'pdf-merge',
    'image-to-pdf',
    'budget-planner'
  ];

  const toolEntries = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
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
