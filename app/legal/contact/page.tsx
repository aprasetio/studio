'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle } from 'lucide-react';
import { useLang } from '@/components/Providers';

const TEXT: Record<string, any> = {
  en: {
    title: "Get in Touch",
    subtitle: "Have a question or feedback? We'd love to hear from you.",
    email_label: "Email Address",
    connect: "Connect with us",
    desc: "We typically respond within 24-48 business hours."
  },
  id: {
    title: "Hubungi Kami",
    subtitle: "Punya pertanyaan atau masukan? Kami senang mendengar dari Anda.",
    email_label: "Alamat Email",
    connect: "Terhubung dengan kami",
    desc: "Kami biasanya merespons dalam 24-48 jam kerja."
  },
  es: {
    title: "Contacto",
    subtitle: "¿Preguntas? Nos encantaría escucharte.",
    email_label: "Correo Electrónico",
    connect: "Conéctate con nosotros",
    desc: "Respondemos en 24-48 horas hábiles."
  },
  pt: {
    title: "Contato",
    subtitle: "Dúvidas ou feedback? Adoraríamos ouvir você.",
    email_label: "Endereço de E-mail",
    connect: "Conecte-se conosco",
    desc: "Respondemos em 24-48 horas úteis."
  },
  de: {
    title: "Kontakt",
    subtitle: "Fragen oder Feedback? Wir freuen uns auf Sie.",
    email_label: "E-Mail Adresse",
    connect: "Verbinden Sie sich mit uns",
    desc: "Wir antworten in der Regel innerhalb von 24-48 Stunden."
  },
  fr: {
    title: "Contact",
    subtitle: "Des questions ? Nous serions ravis de vous lire.",
    email_label: "Adresse E-mail",
    connect: "Suivez-nous",
    desc: "Réponse sous 24-48 heures."
  },
  it: {
    title: "Contatti",
    subtitle: "Domande o feedback? Scrivici.",
    email_label: "Indirizzo Email",
    connect: "Connettiti con noi",
    desc: "Rispondiamo entro 24-48 ore lavorative."
  }
};

export default function ContactPage() {
  const { lang } = useLang();
  const t = TEXT[lang] || TEXT['en'];

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Card className="border-2 shadow-2xl rounded-[3rem] overflow-hidden">
        <CardHeader className="bg-primary p-10 text-primary-foreground text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Mail className="h-10 w-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-4xl font-black uppercase tracking-tighter">{t.title}</CardTitle>
          <p className="text-primary-foreground/70 font-medium mt-2">{t.subtitle}</p>
        </CardHeader>
        <CardContent className="p-10 md:p-16 text-center space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">{t.email_label}</p>
            <a 
              href="mailto:support@versokit.com" 
              className="text-2xl md:text-3xl font-black text-primary hover:underline transition-all"
            >
              support@versokit.com
            </a>
          </div>

          <div className="pt-8 border-t border-dashed">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MessageCircle className="h-5 w-5" />
              <span className="font-bold uppercase tracking-widest text-sm text-foreground">{t.connect}</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
              {t.desc}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
