'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, ListOrdered, Info, HelpCircle } from "lucide-react";

interface SeoContentProps {
  title: string;
  description?: string;
  steps?: string[];
  article?: string;
  faq: { q: string; a: string }[];
}

export function SeoContent({ title, description, steps, article, faq }: SeoContentProps) {
  return (
    <section className="w-full max-w-5xl mx-auto mt-20 mb-10 space-y-12">
      {/* Intro & Guide Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card p-8 rounded-[2.5rem] border-2 border-primary/5 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Info className="h-6 w-6" />
            <h2 className="text-2xl font-black uppercase tracking-tighter">About {title}</h2>
          </div>
          {description && (
            <p className="text-muted-foreground font-medium leading-relaxed">
              {description}
            </p>
          )}
          {article && (
            <div className="text-sm text-muted-foreground leading-relaxed space-y-4 pt-2">
              {article.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>

        <div className="bg-primary/5 p-8 rounded-[2.5rem] border-2 border-primary/10 space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <ListOrdered className="h-6 w-6" />
            <h2 className="text-2xl font-black uppercase tracking-tighter">How to Use</h2>
          </div>
          <ol className="space-y-4">
            {steps?.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-[10px] font-black">
                  {index + 1}
                </span>
                <span className="text-sm font-bold text-foreground/80 uppercase tracking-tight">
                  {step}
                </span>
              </li>
            ))}
            {!steps && (
              <li className="text-muted-foreground italic text-sm">
                Petunjuk penggunaan akan segera diperbarui.
              </li>
            )}
          </ol>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-muted/30 p-8 md:p-12 rounded-[3rem] border border-border/50">
        <div className="flex items-center justify-center gap-3 text-primary/60 mb-8">
          <HelpCircle className="h-6 w-6" />
          <h3 className="text-xl font-black uppercase tracking-[0.2em]">Pertanyaan Umum</h3>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-black uppercase tracking-tight text-sm py-5 hover:text-primary transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-medium text-sm leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
