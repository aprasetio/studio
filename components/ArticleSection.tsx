'use client';

import React from 'react';
import { useLang } from '@/components/Providers';
import { TOOL_ARTICLES } from '@/lib/tool-articles';

interface ArticleSectionProps {
  toolId: string;
}

export function ArticleSection({ toolId }: ArticleSectionProps) {
  const { lang } = useLang();
  
  const toolData = TOOL_ARTICLES[toolId];
  if (!toolData) return null;

  const article = toolData[lang] || toolData['en'];
  if (!article) return null;

  return (
    <section className="w-full max-w-5xl mx-auto my-16 p-8 md:p-12 lg:p-20 bg-card rounded-[3rem] border-2 shadow-sm animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground leading-tight">
          {article.title}
        </h2>
        
        <div className="space-y-12">
          {article.sections.map((section, index) => (
            <div key={index} className="space-y-4 group">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-primary transition-colors">
                {section.title}
              </h3>
              <div 
                className="text-muted-foreground leading-relaxed font-medium text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: section.content }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
