import type { Metadata, Viewport } from 'next';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/Providers';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: "VersoKit - Free Online Tools for Sports, Construction & Business",
  description: "A collection of free, offline-ready tools: Futsal Scoreboard, Tournament Bracket, Construction Calculator, Invoice Maker, and more. No login required.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VersoKit',
  },
};

export const viewport: Viewport = {
  themeColor: '#111827',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex min-h-screen flex-col bg-background text-foreground">
        <Providers>
          <Header />

          <main className="flex-1 w-full">
            {children}
          </main>

          <footer className="border-t bg-card py-10 mt-auto">
            <div className="container mx-auto px-4 text-center space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                © 2024 <span className="font-bold text-foreground">VersoKit</span> | Built with <span className="text-primary font-bold">Project IDX</span>
              </p>
            </div>
          </footer>
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
