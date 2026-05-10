'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { type Tool, UI_LABELS } from '@/lib/tools-data';

interface ToolCardProps {
  tool: Tool;
  lang: string;
  catKey: string;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
}

const getLabel = (key: string, lang: string) =>
  UI_LABELS[key]?.[lang] ?? UI_LABELS[key]?.['en'] ?? key;

export function ToolCard({ tool, lang, catKey, isFavorite, onToggleFavorite }: ToolCardProps) {
  return (
    <Card className={cn(
      'group border-2 hover:border-accent hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden flex flex-col bg-card relative',
      isFavorite && 'border-rose-100 dark:border-rose-900/20',
    )}>
      <button
        onClick={(e) => onToggleFavorite(e, tool.id)}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        className={cn(
          'absolute top-6 right-6 p-2 rounded-full transition-all z-10',
          isFavorite
            ? 'bg-rose-50 text-rose-500 scale-110 shadow-md'
            : 'bg-muted/50 text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-rose-50 hover:text-rose-400',
        )}
      >
        <Heart className={cn('h-5 w-5', isFavorite && 'fill-current')} />
      </button>

      <CardHeader className="p-8 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className={cn(
            'p-4 rounded-2xl transition-all duration-500 transform group-hover:rotate-6',
            isFavorite
              ? 'bg-rose-500 text-white'
              : 'bg-primary/5 text-foreground group-hover:bg-primary group-hover:text-primary-foreground',
          )}>
            <tool.icon className="h-6 w-6" />
          </div>
          {tool.isNew && catKey !== 'new' && (
            <Badge className="bg-accent text-white uppercase font-black text-[9px] tracking-widest animate-pulse mr-8">
              {getLabel('badge_new', lang)}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">
          {tool.name[lang] ?? tool.name['en']}
        </CardTitle>
        <CardDescription className="text-sm font-medium leading-relaxed line-clamp-2 pt-2 text-muted-foreground dark:text-slate-400">
          {tool.desc[lang] ?? tool.desc['en']}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8 pt-0 mt-auto">
        <Button asChild variant="ghost" className="w-full justify-between h-12 bg-muted/30 dark:bg-slate-800/50 group-hover:bg-accent group-hover:text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
          <Link href={tool.href} className="flex items-center w-full">
            {getLabel('open_btn', lang)}
            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
