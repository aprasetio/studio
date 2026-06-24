import type { Metadata, Viewport } from 'next';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/Providers';
import { Analytics } from '@vercel/analytics/next';
import FooterLinks from '@/components/footer-links';
import FooterTagline from '@/components/footer-tagline';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ExitIntentModal } from '@/components/ExitIntentModal';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://versokit.com'),
  title: {
    template: '%s | VersoKit',
    default: 'VersoKit - Free Online Tools for Sports, Business & Productivity',
  },
  description: "A collection of free, privacy-first, and offline-ready tools: Futsal Scoreboard, Budget Planner, Invoice Maker, and more. No login required.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VersoKit',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Providers>
          <Header />

          <main id="main-content" className="flex-1 w-full">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>

          <footer className="border-t bg-card py-12 mt-auto">
            <div className="container mx-auto px-4 space-y-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 text-primary">
                    <rect width="256" height="256" fill="none" />
                    <path d="M32,96v64a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                    <path d="M168,168V64a40,40,0,0,0-80,0v96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  </svg>
                  <span className="text-lg font-black tracking-tighter uppercase">VersoKit</span>
                </div>
                
                <FooterLinks />
              </div>

              <FooterTagline />
            </div>
          </footer>
          <ExitIntentModal />
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
