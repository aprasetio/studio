'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';
import { TOOLS_DATA } from '@/lib/tools-data';
import { useLang } from '@/components/Providers';

export function ToolCTA({ toolId }: { toolId: string }) {
  const { lang } = useLang();
  const tool = TOOLS_DATA.find(t => t.id === toolId);
  if (!tool) return null;

  const name = tool.name[lang] ?? tool.name['en'] ?? tool.name['id'];
  const desc = tool.desc[lang] ?? tool.desc['en'] ?? tool.desc['id'];

  return (
    <div className="my-8 rounded-2xl border-2 border-primary/30 bg-primary/5 p-5 not-prose">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Wrench className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-primary mb-1">
            Tool Terkait
          </p>
          <p className="font-black text-sm uppercase tracking-tight">{name}</p>
          <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed line-clamp-2">{desc}</p>
        </div>
      </div>
      <Link
        href={tool.href}
        className="mt-4 flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-4 py-2.5 text-xs font-black uppercase tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Coba Tool Ini <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
