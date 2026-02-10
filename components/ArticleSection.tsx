'use client';

import React from 'react';
import { useLang } from '@/components/Providers';
import { TOOL_ARTICLES } from '@/lib/tool-articles';
import { ChevronDown, BookOpen } from 'lucide-react';

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
    <section className="w-full max-w-5xl mx-auto my-12 px-4 animate-in fade-in duration-700">
      {/* Collapsible Article Container */}
      <details className="group bg-card border-2 rounded-[2.5rem] overflow-hidden transition-all duration-300 shadow-sm">
        
        {/* Header / Trigger */}
        <summary className="flex items-center justify-between p-6 cursor-pointer list-none bg-muted/30 hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
              <BookOpen size={20} />
            </div>
            <h2 className="text-sm md:text-base font-black uppercase tracking-widest text-foreground">
              {article.title} {lang === 'id' ? '(Panduan & Tips)' : '(Guide & Tips)'}
            </h2>
          </div>
          <span className="transform group-open:rotate-180 transition-transform duration-300 text-muted-foreground">
            <ChevronDown size={24} />
          </span>
        </summary>
        
        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-12 bg-card border-t-2 border-dashed">
          <div className="max-w-4xl mx-auto space-y-12">
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
      </details>
    </section>
  );
}
