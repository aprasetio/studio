'use client';

import Link from 'next/link';
import { useLang } from '@/components/Providers';

const TEXT: Record<string, any> = {
  en: { about: "About Us", privacy: "Privacy Policy", terms: "Terms", contact: "Contact" },
  id: { about: "Tentang Kami", privacy: "Kebijakan Privasi", terms: "Ketentuan", contact: "Kontak" },
  es: { about: "Nosotros", privacy: "Privacidad", terms: "Términos", contact: "Contacto" },
  pt: { about: "Sobre", privacy: "Privacidade", terms: "Termos", contact: "Contato" },
  de: { about: "Über uns", privacy: "Datenschutz", terms: "AGB", contact: "Kontakt" },
  fr: { about: "À propos", privacy: "Confidentialité", terms: "Conditions", contact: "Contact" },
  it: { about: "Chi siamo", privacy: "Privacy", terms: "Termini", contact: "Contatti" }
};

export default function FooterLinks() {
  const { lang } = useLang();
  const t = TEXT[lang] || TEXT['en'];

  return (
    <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
      <Link href="/legal/about" className="hover:text-primary transition-colors">{t.about}</Link>
      <Link href="/legal/privacy" className="hover:text-primary transition-colors">{t.privacy}</Link>
      <Link href="/legal/terms" className="hover:text-primary transition-colors">{t.terms}</Link>
      <Link href="/legal/contact" className="hover:text-primary transition-colors">{t.contact}</Link>
    </nav>
  );
}
