'use client';

import Link from 'next/link';
import { useLang } from '@/components/Providers';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LangToggle } from '@/components/LangToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Trophy, 
  Briefcase, 
  Wrench, 
  ChevronDown,
  LayoutGrid
} from 'lucide-react';

export default function Header() {
  const { t } = useLang();

  const categories = [
    {
      label: t('cat_sports'),
      icon: <Trophy className="h-4 w-4 mr-2" />,
      items: [
        { href: '/tools/futsal', label: t('futsal') },
        { href: '/tools/tennis', label: 'Tennis Match Generator' },
        { href: '/tools/lineup-builder', label: t('lineup') },
        { href: '/tools/tournament', label: t('tournament') },
        { href: '/tools/scoreboard', label: t('scoreboard') },
      ]
    },
    {
      label: t('cat_business'),
      icon: <Briefcase className="h-4 w-4 mr-2" />,
      items: [
        { href: '/tools/budget-planner', label: t('budget_planner') },
        { href: '/tools/invoice', label: t('invoice') },
        { href: '/tools/shift', label: t('shift') },
        { href: '/tools/inventory', label: t('inventory') },
        { href: '/tools/kanban', label: t('kanban') },
      ]
    },
    {
      label: t('cat_utilities'),
      icon: <Wrench className="h-4 w-4 mr-2" />,
      items: [
        { href: '/tools/image-resizer', label: t('image_resizer') },
        { href: '/tools/image-cropper', label: t('image_cropper') },
        { href: '/tools/image-compressor', label: t('image_compressor') },
        { href: '/tools/pdf-merge', label: t('pdf_merge') },
        { href: '/tools/image-to-pdf', label: t('image_to_pdf') },
        { href: '/tools/calculator', label: t('calculator') },
        { href: '/tools/csv-helper', label: t('csv_helper') },
        { href: '/tools/split-bill', label: t('split_bill') },
      ]
    }
  ];

  return (
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
        
        <nav className="hidden lg:flex items-center space-x-4">
          {categories.map((cat, idx) => (
            <DropdownMenu key={idx}>
              <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors outline-none">
                {cat.icon}
                {cat.label}
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 rounded-xl shadow-xl border-2">
                <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{cat.label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {cat.items.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full cursor-pointer font-bold uppercase text-[11px] py-3 hover:bg-primary/5">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger className="lg:hidden p-2 hover:bg-muted rounded-full outline-none">
              <LayoutGrid className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 rounded-2xl shadow-2xl border-2">
              {categories.map((cat, idx) => (
                <div key={idx}>
                  <DropdownMenuLabel className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] px-4 py-3 bg-muted/30">
                    {cat.icon}
                    {cat.label}
                  </DropdownMenuLabel>
                  {cat.items.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="w-full px-8 py-3 font-bold uppercase text-[10px]">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  {idx < categories.length - 1 && <DropdownMenuSeparator />}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}