'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import { useLang } from '@/components/Providers';

const TEXT: Record<string, any> = {
  en: {
    title: "Privacy Policy",
    last_updated: "Last Updated: May 2024",
    intro_t: "1. Introduction",
    intro_d: "VersoKit is committed to protecting your privacy. This policy explains how we collect and safeguard your information.",
    local_t: "2. Local Data Processing (Privacy First)",
    local_d: "Core Principle: Most of our tools process your data 100% locally in your browser. We do not transmit your documents, images, or scores to our servers.",
    collect_t: "3. Information We Collect",
    collect_d: "We use Vercel Analytics to collect anonymous usage data (page views, browser type). Cookies are used to save your language and theme preferences.",
    ads_t: "4. Third-Party Advertising (Google AdSense)",
    ads_d: "We use third-party advertising companies to serve ads. Google use cookies to serve ads based on your prior visits to this or other websites.",
    contact_t: "5. Contact",
    contact_d: "For questions, contact us at: support@versokit.com"
  },
  id: {
    title: "Kebijakan Privasi",
    last_updated: "Terakhir Diperbarui: Mei 2024",
    intro_t: "1. Pendahuluan",
    intro_d: "VersoKit berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan dan menjaga informasi Anda.",
    local_t: "2. Pemrosesan Data Lokal (Privasi Utama)",
    local_d: "Prinsip Utama: Sebagian besar alat kami memproses data Anda 100% secara lokal di browser Anda. Kami tidak mengirimkan dokumen, gambar, atau skor Anda ke server kami.",
    collect_t: "3. Informasi yang Kami Kumpulkan",
    collect_d: "Kami menggunakan Vercel Analytics untuk mengumpulkan data penggunaan anonim. Cookie digunakan untuk menyimpan preferensi bahasa dan tema Anda.",
    ads_t: "4. Iklan Pihak Ketiga (Google AdSense)",
    ads_d: "Kami menggunakan perusahaan iklan pihak ketiga. Google menggunakan cookie untuk menayangkan iklan berdasarkan kunjungan Anda sebelumnya ke situs ini.",
    contact_t: "5. Kontak",
    contact_d: "Untuk pertanyaan, hubungi kami di: support@versokit.com"
  },
  es: {
    title: "Política de Privacidad",
    last_updated: "Última actualización: Mayo 2024",
    intro_t: "1. Introducción",
    intro_d: "VersoKit se compromete a proteger su privacidad.",
    local_t: "2. Procesamiento Local",
    local_d: "Sus datos se procesan 100% localmente en su navegador.",
    collect_t: "3. Información recolectada",
    collect_d: "Usamos Vercel Analytics para datos anónimos y cookies para preferencias.",
    ads_t: "4. Publicidad (Google AdSense)",
    ads_d: "Google utiliza cookies para mostrar anuncios basados en visitas anteriores.",
    contact_t: "5. Contacto",
    contact_d: "support@versokit.com"
  },
  pt: {
    title: "Política de Privacidade",
    last_updated: "Última atualização: Maio 2024",
    intro_t: "1. Introdução",
    intro_d: "O VersoKit está comprometido em proteger sua privacidade.",
    local_t: "2. Processamento Local",
    local_d: "Seus dados são processados 100% localmente no seu navegador.",
    collect_t: "3. Informações Coletadas",
    collect_d: "Usamos Vercel Analytics e cookies para preferências.",
    ads_t: "4. Publicidade (Google AdSense)",
    ads_d: "O Google usa cookies para exibir anúncios com base em visitas anteriores.",
    contact_t: "5. Contato",
    contact_d: "support@versokit.com"
  },
  de: {
    title: "Datenschutzerklärung",
    last_updated: "Zuletzt aktualisiert: Mai 2024",
    intro_t: "1. Einleitung",
    intro_d: "VersoKit verpflichtet sich zum Schutz Ihrer Privatsphäre.",
    local_t: "2. Lokale Datenverarbeitung",
    local_d: "Ihre Daten werden zu 100% lokal in Ihrem Browser verarbeitet.",
    collect_t: "3. Gesammelte Informationen",
    collect_d: "Wir nutzen Vercel Analytics und Cookies für Einstellungen.",
    ads_t: "4. Werbung (Google AdSense)",
    ads_d: "Google verwendet Cookies für Werbeanzeigen.",
    contact_t: "5. Kontakt",
    contact_d: "support@versokit.com"
  },
  fr: {
    title: "Politique de Confidentialité",
    last_updated: "Dernière mise à jour : Mai 2024",
    intro_t: "1. Introduction",
    intro_d: "VersoKit s'engage à protéger votre vie privée.",
    local_t: "2. Traitement local des données",
    local_d: "Vos données sont traitées à 100% localement dans votre navigateur.",
    collect_t: "3. Informations collectées",
    collect_d: "Nous utilisons Vercel Analytics et des cookies pour vos préférences.",
    ads_t: "4. Publicité (Google AdSense)",
    ads_d: "Google utilise des cookies pour diffuser des annonces.",
    contact_t: "5. Contact",
    contact_d: "support@versokit.com"
  },
  it: {
    title: "Informativa sulla Privacy",
    last_updated: "Ultimo aggiornamento: Maggio 2024",
    intro_t: "1. Introduzione",
    intro_d: "VersoKit si impegna a proteggere la tua privacy.",
    local_t: "2. Elaborazione dati locale",
    local_d: "I tuoi dati vengono elaborati al 100% localmente nel browser.",
    collect_t: "3. Informazioni raccolte",
    collect_d: "Utilizziamo Vercel Analytics e cookie per le preferenze.",
    ads_t: "4. Pubblicità (Google AdSense)",
    ads_d: "Google utilizza i cookie per pubblicare annunci.",
    contact_t: "5. Contatto",
    contact_d: "support@versokit.com"
  }
};

export default function PrivacyPolicyPage() {
  const { lang } = useLang();
  const t = TEXT[lang] || TEXT['en'];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="border-2 shadow-xl rounded-[2rem] overflow-hidden">
        <CardHeader className="bg-primary/5 p-8 border-b">
          <CardTitle className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            {t.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12 space-y-8 text-muted-foreground">
          <p className="font-bold text-foreground">{t.last_updated}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{t.intro_t}</h2>
            <p>{t.intro_d}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{t.local_t}</h2>
            <div className="bg-green-50 border-2 border-green-100 p-6 rounded-2xl text-green-800 font-medium">
              {t.local_d}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{t.collect_t}</h2>
            <p>{t.collect_d}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{t.ads_t}</h2>
            <p>{t.ads_d}</p>
          </section>

          <section className="space-y-4 pt-4 border-t">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{t.contact_t}</h2>
            <p>{t.contact_d}</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
