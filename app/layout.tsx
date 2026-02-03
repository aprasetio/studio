
import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/Providers';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LangToggle } from '@/components/LangToggle';
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
  const navLinks = [
    { href: '/tools/futsal', label: 'Futsal' },
    { href: '/tools/lineup-builder', label: 'Lineup' },
    { href: '/tools/tournament', label: 'Turnamen' },
    { href: '/tools/scoreboard', label: 'Scoreboard' },
    { href: '/tools/inventory', label: 'Inventory' },
    { href: '/tools/kanban', label: 'Kanban' },
  ];

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex min-h-screen flex-col bg-background text-foreground">
        <Providers>
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-8 w-8 text-primary">
                  <rect width="256" height="256" fill="none" />
                  <path d="M32,96v64a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <path d="M168,168V64a40,40,0,0,0-80,0v96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                </svg>
                <span className="text-xl font-black tracking-tighter uppercase">VersoKit</span>
              </Link>
              
              <nav className="hidden lg:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LangToggle />
                <div className="lg:hidden text-xs font-bold text-muted-foreground ml-2">
                  MENU &rarr;
                </div>
              </div>
            </div>
            
            <div className="lg:hidden border-t bg-muted/10">
              <div className="flex space-x-8 px-4 py-3 overflow-x-auto no-scrollbar scroll-smooth">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-xs font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </header>

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
        </Providers>
      </body>
    </html>
  );
}
