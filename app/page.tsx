'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Star, Sparkles } from 'lucide-react';
import { useLocalStorage } from 'usehooks-ts';
import { useLang } from '@/components/Providers';
import { cn } from '@/lib/utils';
import { HeroSection } from '@/components/home/HeroSection';
import { ToolCard } from '@/components/home/ToolCard';
import { TOOLS_DATA, CATEGORY_ORDER, UI_LABELS, type Category, type Tool } from '@/lib/tools-data';

const getLabel = (key: string, lang: string) =>
  UI_LABELS[key]?.[lang] ?? UI_LABELS[key]?.['en'] ?? key;

export default function ToolPortalPage() {
  const { lang } = useLang();
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useLocalStorage<string[]>('versokit-favorites', []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
  };

  const filteredTools = useMemo(() => TOOLS_DATA.filter(tool => {
    const name = tool.name[lang] ?? tool.name['en'] ?? '';
    const desc = tool.desc[lang] ?? tool.desc['en'] ?? '';
    const query = search.toLowerCase();
    return name.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
  }), [search, lang]);

  const categorized = useMemo(() => {
    const groups: Record<Category, Tool[]> = {
      favorites: [], new: [], religious: [], sports: [], business: [], finance: [], productivity: [],
    };
    filteredTools.forEach(tool => {
      groups[tool.category].push(tool);
      if (tool.isNew) groups.new.push(tool);
      if (favorites.includes(tool.id)) groups.favorites.push(tool);
    });
    return groups;
  }, [filteredTools, favorites]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroSection lang={lang} search={search} onSearch={setSearch} />

      <section className="container mx-auto px-4 -mt-16 pb-20 relative z-20">
        <div className="space-y-16">
          {CATEGORY_ORDER.map(catKey => {
            const items = categorized[catKey];
            if (items.length === 0) return null;

            return (
              <div key={catKey} className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
                <div className="flex items-center gap-4">
                  <h2 className={cn(
                    'text-2xl font-black uppercase tracking-tighter text-foreground bg-card dark:bg-slate-950 pr-6 py-2 rounded-full shadow-sm border px-6 flex items-center gap-3',
                    catKey === 'favorites' && 'border-rose-200 dark:border-rose-900/30 text-rose-600',
                    catKey === 'new' && 'border-amber-200 dark:border-amber-900/30 text-amber-600',
                  )}>
                    {catKey === 'favorites' ? <Star className="h-6 w-6 fill-current" /> :
                     catKey === 'new' ? <Sparkles className="h-6 w-6" /> :
                     <span className="w-2 h-8 bg-accent rounded-full" />}
                    {getLabel(`cat_${catKey}`, lang)}
                  </h2>
                  <div className="h-px bg-border flex-1" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map(tool => (
                    <ToolCard
                      key={`${catKey}-${tool.id}`}
                      tool={tool}
                      lang={lang}
                      catKey={catKey}
                      isFavorite={favorites.includes(tool.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="py-32 text-center space-y-4 opacity-40">
            <Search className="h-16 w-16 mx-auto mb-4" />
            <p className="text-xl font-black uppercase tracking-widest">
              {getLabel('no_results', lang)} &ldquo;{search}&rdquo;
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
