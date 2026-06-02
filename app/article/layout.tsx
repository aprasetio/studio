import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Artikel VersoKit',
    default: 'Artikel & Panduan | VersoKit',
  },
  description: 'Panduan, tips, dan artikel seputar produktivitas, keuangan, olahraga, ibadah, dan saham syariah dari VersoKit.',
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
