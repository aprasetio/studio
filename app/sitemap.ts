
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://versokit.idx.app';
  
  // List of all tools currently implemented in the app
  const tools = [
    'futsal',
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
  ];

  const toolEntries = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...toolEntries,
  ];
}
