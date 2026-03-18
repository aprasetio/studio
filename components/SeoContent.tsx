
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Info, ListOrdered, HelpCircle, ShieldCheck } from "lucide-react";
import { useLang } from '@/components/Providers';
import { SEO_DATA } from '@/lib/seo-content';

interface SeoContentProps {
  toolId: string;
  hidePrivacy?: boolean;
}

export function SeoContent({ toolId, hidePrivacy = false }: SeoContentProps) {
  const { lang } = useLang();
  
  const content = SEO_DATA[toolId]?.[lang] || SEO_DATA[toolId]?.['en'];

  if (!content) return null;

  const { title, description, steps, article, faq } = content;

  const PRIVACY_TEXT: Record<string, string> = {
    en: "🔒 **Privacy Guaranteed:** Your data is processed 100% locally on your device. No files are sent to our servers.",
    id: "🔒 **Jaminan Privasi:** Data Anda diproses 100% secara lokal di perangkat. Tidak ada file yang dikirim ke server.",
    es: "🔒 **Privacidad Garantizada:** Sus datos se procesan 100% localmente. No se envían archivos al servidor.",
    pt: "🔒 **Privacidade Garantida:** Seus datos são processados 100% localmente. Nenhum arquivo é enviado al servidor.",
    de: "🔒 **Privatsphäre Garantiert:** Ihre Daten werden zu 100% lokal verarbeitet. Keine Dateien werden an Server gesendet.",
    fr: "🔒 **Confidentialité Garantie:** Vos données sont traitées 100% localement. Aucun fichier envoyé au serveur.",
    it: "🔒 **Privacy Garantita:** I tuoi dati vengono elaborati al 100% localmente. Nessun file inviato al server."
  };

  const aboutTitle: Record<string, string> = {
    en: "About", id: "Tentang", es: "Acerca de", pt: "Sobre", de: "Über", fr: "À propos de", it: "Informazioni su"
  };

  const howToTitle: Record<string, string> = {
    en: "How to Use", id: "Cara Penggunaan", es: "Cómo usar", pt: "Como usar", de: "Anleitung", fr: "Comment utiliser", it: "Come usare"
  };

  const faqTitle: Record<string, string> = {
    en: "FAQ", id: "Pertanyaan Umum", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes", de: "Häufig gestellte Fragen", fr: "Questions Fréquentes", it: "Domande Frequenti"
  };

  const currentPrivacyText = PRIVACY_TEXT[lang] || PRIVACY_TEXT['en'];

  return (
    <section className="w-full max-w-5xl mx-auto mt-20 mb-10 space-y-12 animate-in fade-in duration-700">
      {/* Privacy Assurance Box */}
      {!hidePrivacy && (
        <div className="bg-green-50 border-2 border-green-200 p-6 rounded-[2rem] flex items-center gap-4 shadow-sm">
          <ShieldCheck className="h-8 w-8 text-green-600 shrink-0" />
          <div className="text-sm font-bold text-green-800">
            <p>{currentPrivacyText.replace(/🔒 \*\*|\*\*/g, '')}</p>
          </div>
        </div>
      )}

      {/* Intro & Guide Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card p-8 rounded-[2.5rem] border-2 border-primary/5 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Info className="h-6 w-6" />
            <h2 className="text-2xl font-black uppercase tracking-tighter">{(aboutTitle as any)[lang] || aboutTitle.en} {title}</h2>
          </div>
          {description && (
            <p className="text-muted-foreground font-medium leading-relaxed">
              {description}
            </p>
          )}
          {article && (
            <div className="text-sm text-muted-foreground leading-relaxed space-y-4 pt-2">
              {article.split('\n\n').map((paragraph, i) => (
                <p key={i} className="whitespace-pre-line">{paragraph}</p>
              ))}
            </div>
          )}
        </div>

        <div className="bg-primary/5 p-8 rounded-[2.5rem] border-2 border-primary/10 space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <ListOrdered className="h-6 w-6" />
            <h2 className="text-2xl font-black uppercase tracking-tighter">{(howToTitle as any)[lang] || howToTitle.en}</h2>
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
          </ol>
        </div>
      </div>

      {/* FAQ Section */}
      {faq && faq.length > 0 && (
        <div className="bg-muted/30 p-8 md:p-12 rounded-[3rem] border border-border/50">
          <div className="flex items-center justify-center gap-3 text-primary/60 mb-8">
            <HelpCircle className="h-6 w-6" />
            <h3 className="text-xl font-black uppercase tracking-[0.2em]">
              {(faqTitle as any)[lang] || faqTitle.en}
            </h3>
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
      )}
    </section>
  );
}
