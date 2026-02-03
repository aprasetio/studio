
'use client';

import React from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang('id')} className={lang === 'id' ? 'bg-accent' : ''}>
          🇮🇩 Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang('en')} className={lang === 'en' ? 'bg-accent' : ''}>
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
