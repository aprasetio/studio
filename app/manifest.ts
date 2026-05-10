import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VersoKit - Daily Tools',
    short_name: 'VersoKit',
    description: 'Privacy-first, offline-ready tools for business, sports, and productivity.',
    start_url: '/?source=pwa',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3a8a', // Matches deep blue primary color
    orientation: 'portrait',
    icons: [
      {
        src: 'https://placehold.co/192x192/1e3a8a/ffffff/png?text=VK',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'https://placehold.co/192x192/1e3a8a/ffffff/png?text=VK',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'https://placehold.co/512x512/1e3a8a/ffffff/png?text=VersoKit',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'https://placehold.co/512x512/1e3a8a/ffffff/png?text=VersoKit',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
