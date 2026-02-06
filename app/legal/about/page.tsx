'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, ShieldCheck, WifiOff } from 'lucide-react';
import { useLang } from '@/components/Providers';

const TEXT: Record<string, any> = {
  en: {
    title: "About VersoKit",
    subtitle: "Simple, powerful, and privacy-first web tools built for everyone.",
    mission_title: "Our Mission",
    mission_desc: "In a world where every website wants your data, VersoKit stands for something different. Our mission is to provide professional-grade tools that run entirely in your browser. No login, no tracking, just pure utility.",
    feat1_t: "Ultra Fast",
    feat1_d: "Optimized for instant loading, even on slow connections.",
    feat2_t: "Privacy First",
    feat2_d: "Your data never leaves your device. Everything happens locally.",
    feat3_t: "Offline Ready",
    feat3_d: "Works perfectly without an internet connection once loaded.",
    built_for: "Built for Everyone",
    built_desc: "Whether you're a futsal referee, a small business owner, or a developer, VersoKit is here to help you get things done faster."
  },
  id: {
    title: "Tentang VersoKit",
    subtitle: "Alat bantu web yang sederhana, kuat, dan mengutamakan privasi untuk semua orang.",
    mission_title: "Misi Kami",
    mission_desc: "Di dunia di mana setiap situs web menginginkan data Anda, VersoKit hadir dengan konsep berbeda. Misi kami adalah menyediakan alat profesional yang berjalan sepenuhnya di browser Anda. Tanpa login, tanpa pelacakan, hanya kegunaan murni.",
    feat1_t: "Sangat Cepat",
    feat1_d: "Dioptimalkan untuk pemuatan instan, bahkan pada koneksi lambat.",
    feat2_t: "Privasi Utama",
    feat2_d: "Data Anda tidak pernah meninggalkan perangkat Anda. Semuanya terjadi secara lokal.",
    feat3_t: "Siap Offline",
    feat3_d: "Bekerja sempurna tanpa koneksi internet setelah dimuat.",
    built_for: "Dibuat untuk Semua",
    built_desc: "Baik Anda seorang wasit futsal, pemilik bisnis kecil, atau pengembang, VersoKit hadir untuk membantu Anda bekerja lebih cepat."
  },
  es: {
    title: "Acerca de VersoKit",
    subtitle: "Herramientas web sencillas, potentes y privadas para todos.",
    mission_title: "Nuestra Misión",
    mission_desc: "En un mundo donde cada sitio quiere tus datos, VersoKit ofrece algo diferente. Nuestra misión es proporcionar herramientas profesionales que se ejecutan totalmente en tu navegador. Sin registros, sin rastreo.",
    feat1_t: "Ultra Rápido",
    feat1_d: "Optimizado para carga instantánea.",
    feat2_t: "Privacidad Primero",
    feat2_d: "Tus datos nunca salen de tu dispositivo.",
    feat3_t: "Listo Offline",
    feat3_d: "Funciona sin internet una vez cargado.",
    built_for: "Para Todos",
    built_desc: "Ya seas árbitro, dueño de negocio o estudiante, VersoKit te ayuda a ser más productivo."
  },
  pt: {
    title: "Sobre o VersoKit",
    subtitle: "Ferramentas web simples, poderosas e privadas para todos.",
    mission_title: "Nossa Missão",
    mission_desc: "Nossa missão é fornecer ferramentas profissionais que rodam inteiramente no seu navegador. Sem login, sem rastreamento, apenas utilidade pura.",
    feat1_t: "Ultra Rápido",
    feat1_d: "Otimizado para carregamento instantâneo.",
    feat2_t: "Privacidade Total",
    feat2_d: "Seus dados nunca saem do seu dispositivo.",
    feat3_t: "Pronto Offline",
    feat3_d: "Funciona sem internet após o carregamento.",
    built_for: "Para Todos",
    built_desc: "Seja você um árbitro de futsal ou dono de empresa, o VersoKit ajuda você a produzir mais."
  },
  de: {
    title: "Über VersoKit",
    subtitle: "Einfache, leistungsstarke Tools mit Fokus auf Privatsphäre.",
    mission_title: "Unsere Mission",
    mission_desc: "Wir bieten professionelle Tools an, die komplett in Ihrem Browser laufen. Kein Login, kein Tracking, reine Produktivität.",
    feat1_t: "Ultra Schnell",
    feat1_d: "Optimiert für sofortiges Laden.",
    feat2_t: "Privat",
    feat2_d: "Ihre Daten verlassen niemals Ihr Gerät.",
    feat3_t: "Offline-Bereit",
    feat3_d: "Funktioniert auch ohne Internetverbindung.",
    built_for: "Für Jeden",
    built_desc: "Vom Schiedsrichter bis zum Geschäftsinhaber – VersoKit hilft jedem."
  },
  fr: {
    title: "À propos de VersoKit",
    subtitle: "Des outils web simples, puissants et respectueux de la vie privée.",
    mission_title: "Notre Mission",
    mission_desc: "Fournir des outils professionnels qui s'exécutent entièrement dans votre navigateur. Pas de connexion, pas de suivi.",
    feat1_t: "Ultra Rapide",
    feat1_d: "Optimisé pour un chargement instantané.",
    feat2_t: "Vie Privée",
    feat2_d: "Vos données ne quittent jamais votre appareil.",
    feat3_t: "Hors ligne",
    feat3_d: "Fonctionne sans connexion une fois chargé.",
    built_for: "Pour Tous",
    built_desc: "Que vous soyez arbitre ou entrepreneur, VersoKit vous aide au quotidien."
  },
  it: {
    title: "Informazioni su VersoKit",
    subtitle: "Strumenti web semplici, potenti e orientati alla privacy.",
    mission_title: "La Nostra Missione",
    mission_desc: "Fornire strumenti professionali che funzionano interamente nel browser. Niente login, niente tracciamento.",
    feat1_t: "Ultra Veloce",
    feat1_d: "Ottimizzato per caricamenti istantanei.",
    feat2_t: "Privacy Prima",
    feat2_d: "I tuoi dati non lasciano mai il dispositivo.",
    feat3_t: "Sempre Pronto",
    feat3_d: "Funziona offline una volta caricato.",
    built_for: "Per Tutti",
    built_desc: "Dagli arbitri agli imprenditori, VersoKit semplifica il tuo lavoro."
  }
};

export default function AboutPage() {
  const { lang } = useLang();
  const t = TEXT[lang] || TEXT['en'];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
          {t.title}
        </h1>
        <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card className="border-2 shadow-xl rounded-[2.5rem] p-8 md:p-12">
          <CardContent className="space-y-8 p-0">
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-primary">{t.mission_title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.mission_desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t">
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-bold uppercase text-sm tracking-widest">{t.feat1_t}</h3>
                <p className="text-sm text-muted-foreground">{t.feat1_d}</p>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-green-100 rounded-2xl w-fit text-green-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold uppercase text-sm tracking-widest">{t.feat2_t}</h3>
                <p className="text-sm text-muted-foreground">{t.feat2_d}</p>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-orange-100 rounded-2xl w-fit text-orange-600">
                  <WifiOff className="h-6 w-6" />
                </div>
                <h3 className="font-bold uppercase text-sm tracking-widest">{t.feat3_t}</h3>
                <p className="text-sm text-muted-foreground">{t.feat3_d}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted/30 p-10 rounded-[3rem] text-center border-2 border-dashed">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-4">{t.built_for}</h2>
          <p className="text-muted-foreground font-medium max-w-xl mx-auto">
            {t.built_desc}
          </p>
        </div>
      </div>
    </div>
  );
}
