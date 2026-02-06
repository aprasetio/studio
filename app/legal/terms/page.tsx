'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { useLang } from '@/components/Providers';

const TEXT: Record<string, any> = {
  en: {
    title: "Terms of Service",
    last_updated: "Last Updated: May 2024",
    s1_t: "1. Acceptance",
    s1_d: "By using VersoKit, you agree to these terms. If not, please do not use our service.",
    s2_t: "2. Service Description",
    s2_d: "VersoKit provides web-based tools. These tools are provided 'as is' and process data locally.",
    s3_t: "3. User Responsibility",
    s3_d: "You are responsible for your data. Since we do not store it, you must download your results before clearing cache.",
    s4_t: "4. Limitations",
    s4_d: "VersoKit is not liable for any damages or errors in calculations. Use for reference only."
  },
  id: {
    title: "Syarat dan Ketentuan",
    last_updated: "Terakhir Diperbarui: Mei 2024",
    s1_t: "1. Penerimaan",
    s1_d: "Dengan menggunakan VersoKit, Anda menyetujui persyaratan ini. Jika tidak, harap jangan gunakan layanan kami.",
    s2_t: "2. Deskripsi Layanan",
    s2_d: "VersoKit menyediakan alat berbasis web yang disediakan 'apa adanya' dan memproses data secara lokal.",
    s3_t: "3. Tanggung Jawab Pengguna",
    s3_d: "Anda bertanggung jawab atas data Anda. Karena kami tidak menyimpannya, Anda harus mengunduh hasil Anda sendiri.",
    s4_t: "4. Batasan Tanggung Jawab",
    s4_d: "VersoKit tidak bertanggung jawab atas kerusakan atau kesalahan dalam perhitungan. Gunakan hanya sebagai referensi."
  },
  es: {
    title: "Términos de Servicio",
    last_updated: "Mayo 2024",
    s1_t: "1. Aceptación",
    s1_d: "Al usar VersoKit, aceptas estos términos.",
    s2_t: "2. Descripción",
    s2_d: "Herramientas 'tal cual' con procesamiento local.",
    s3_t: "3. Responsabilidad",
    s3_d: "Debes descargar tus resultados, no guardamos nada.",
    s4_t: "4. Limitaciones",
    s4_d: "No somos responsables de errores de cálculo."
  },
  pt: {
    title: "Termos de Serviço",
    last_updated: "Maio 2024",
    s1_t: "1. Aceitação",
    s1_d: "Ao usar o VersoKit, você concorda com estes termos.",
    s2_t: "2. Descrição",
    s2_d: "Ferramentas fornecidas 'como estão' com processamento local.",
    s3_t: "3. Responsabilidade",
    s3_d: "Você deve baixar seus resultados, não salvamos dados.",
    s4_t: "4. Limitações",
    s4_d: "Não nos responsabilizamos por erros de cálculos."
  },
  de: {
    title: "Nutzungsbedingungen",
    last_updated: "Mai 2024",
    s1_t: "1. Annahme",
    s1_d: "Durch die Nutzung von VersoKit stimmen Sie diesen Bedingungen zu.",
    s2_t: "2. Beschreibung",
    s2_d: "Tools werden 'wie besehen' bereitgestellt.",
    s3_t: "3. Verantwortung",
    s3_d: "Sie müssen Ergebnisse selbst speichern.",
    s4_t: "4. Haftung",
    s4_d: "Keine Haftung für Berechnungsfehler."
  },
  fr: {
    title: "Conditions d'Utilisation",
    last_updated: "Mai 2024",
    s1_t: "1. Acceptation",
    s1_d: "En utilisant VersoKit, vous acceptez ces conditions.",
    s2_t: "2. Description",
    s2_d: "Outils fournis 'tels quels'.",
    s3_t: "3. Responsabilité",
    s3_d: "Téléchargez vos résultats car rien n'est stocké.",
    s4_t: "4. Limitations",
    s4_d: "Aucune responsabilité pour les erreurs de calcul."
  },
  it: {
    title: "Termini di Servizio",
    last_updated: "Maggio 2024",
    s1_t: "1. Accettazione",
    s1_d: "Usando VersoKit, accetti questi termini.",
    s2_t: "2. Descrizione",
    s2_d: "Strumenti forniti 'così come sono'.",
    s3_t: "3. Responsabilità",
    s3_d: "Scarica i tuoi risultati, i dati sono locali.",
    s4_t: "4. Limitazioni",
    s4_d: "Nessuna responsabilità per errori di calcolo."
  }
};

export default function TermsOfServicePage() {
  const { lang } = useLang();
  const t = TEXT[lang] || TEXT['en'];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="border-2 shadow-xl rounded-[2rem] overflow-hidden">
        <CardHeader className="bg-primary/5 p-8 border-b">
          <CardTitle className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            {t.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 md:p-12 space-y-8 text-muted-foreground">
          <p className="font-bold text-foreground">{t.last_updated}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{t.s1_t}</h2>
            <p>{t.s1_d}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{t.s2_t}</h2>
            <p>{t.s2_d}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{t.s3_t}</h2>
            <p>{t.s3_d}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">{t.s4_t}</h2>
            <p>{t.s4_d}</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
