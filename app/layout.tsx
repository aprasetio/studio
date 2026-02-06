import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/Providers';
import { Analytics } from '@vercel/analytics/next';
import FooterLinks from '@/components/footer-links';
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

              <div className="pt-8 border-t border-muted text-center space-y-2">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  © 2024 <span className="text-foreground">VersoKit</span> | All-in-One Toolkit
                </p>
                <p className="text-[9px] text-muted-foreground/50 font-medium uppercase tracking-[0.2em]">
                  Built with <span className="text-primary font-bold">Project IDX</span>
                </p>
              </div>
            </div>
          </footer>
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
