'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

interface SeoContentProps {
  title: string;
  features: string[];
  faq: { q: string; a: string }[];
}

export function SeoContent({ title, features, faq }: SeoContentProps) {
  return (
    <section className="w-full max-w-4xl mx-auto mt-20 mb-10 p-8 bg-muted/30 rounded-[2.5rem] border border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">
            {title}
          </h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-black uppercase tracking-widest text-primary/60">
            FAQ
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-bold uppercase tracking-tight text-sm py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-medium text-sm leading-relaxed">
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
