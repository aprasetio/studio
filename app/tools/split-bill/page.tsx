'use client';

import React, { useState } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Receipt, Send, Banknote, Percent, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { SeoContent } from '@/components/SeoContent';
import { DataPersistence } from '@/components/DataPersistence';
import { ArticleSection } from '@/components/ArticleSection';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Split Bill",
    bill_details: "Bill Details",
    total_bill: "Total Bill Amount",
    tax: "Tax (%)",
    service: "Service Charge (%)",
    add_person: "Participants",
    calculate: "Calculate Split",
    reset: "Reset",
    per_person: "Per Person",
    name_placeholder: "Budi, Ani, Joko...",
    copy_wa: "Copy to WhatsApp",
    copied: "Copied!",
    share_intro: "Here is the bill detail:",
    pay_to: "Pay to:",
    transfer_msg: "Please transfer soon!",
    subtotal_tax: "Subtotal + Fees",
    participants_count: "Count"
  },
  id: {
    title: "Bagi Tagihan",
    bill_details: "Rincian Tagihan",
    total_bill: "Total Nominal Tagihan",
    tax: "Pajak (%)",
    service: "Layanan (%)",
    add_person: "Peserta",
    calculate: "Hitung Pembagian",
    reset: "Reset",
    per_person: "Per Orang",
    name_placeholder: "Budi, Ani, Joko...",
    copy_wa: "Salin ke WA",
    copied: "Tersalin!",
    share_intro: "Berikut detail tagihan:",
    pay_to: "Bayar ke:",
    transfer_msg: "Silakan transfer segera ya!",
    subtotal_tax: "Subtotal + Biaya",
    participants_count: "Jumlah"
  },
  de: {
    title: "Rechnung teilen",
    bill_details: "Rechnungsdetails",
    total_bill: "Gesamtrechnungsbetrag",
    tax: "Steuer (%)",
    service: "Servicegebühr (%)",
    add_person: "Person hinzufügen",
    calculate: "Aufteilung berechnen",
    reset: "Zurücksetzen",
    per_person: "Pro Person",
    name_placeholder: "Hans, Peter, Lisa...",
    copy_wa: "In WhatsApp kopieren",
    copied: "Kopiert!",
    share_intro: "Hier sind die Rechnungsdetails:",
    pay_to: "Zahlen an:",
    transfer_msg: "Bitte bald überweisen!",
    subtotal_tax: "Zwischensumme + Gebühren",
    participants_count: "Anzahl"
  },
  es: {
    title: "Dividir Cuenta",
    bill_details: "Detalles de la Cuenta",
    total_bill: "Monto Total",
    tax: "Impuesto (%)",
    service: "Servicio (%)",
    add_person: "Añadir Persona",
    calculate: "Calcular División",
    reset: "Reiniciar",
    per_person: "Por Persona",
    name_placeholder: "Juan, Maria, Carlos...",
    copy_wa: "Copiar a WhatsApp",
    copied: "¡Copiado!",
    share_intro: "Aquí están los detalles de la cuenta:",
    pay_to: "Pagar a:",
    transfer_msg: "¡Por favor transfiera pronto!",
    subtotal_tax: "Subtotal + Tasas",
    participants_count: "Total"
  },
  pt: {
    title: "Dividir Conta",
    bill_details: "Detalhes da Conta",
    total_bill: "Valor Total",
    tax: "Imposto (%)",
    service: "Taxa de Serviço (%)",
    add_person: "Adicionar Pessoa",
    calculate: "Calcular Divisão",
    reset: "Reiniciar",
    per_person: "Por Pessoa",
    name_placeholder: "João, Maria, Pedro...",
    copy_wa: "Copiar para WhatsApp",
    copied: "Copiado!",
    share_intro: "Aqui estão os detalhes da conta:",
    pay_to: "Pagar para:",
    transfer_msg: "Por favor, transfira em breve!",
    subtotal_tax: "Subtotal + Taxas",
    participants_count: "Total"
  },
  fr: {
    title: "Partager l'Addition",
    bill_details: "Détails de la Facture",
    total_bill: "Montant Total",
    tax: "Taxe (%)",
    service: "Service (%)",
    add_person: "Ajouter Personne",
    calculate: "Calculer Partage",
    reset: "Réinitialiser",
    per_person: "Par Personne",
    name_placeholder: "Jean, Marie, Paul...",
    copy_wa: "Copier vers WhatsApp",
    copied: "Copié !",
    share_intro: "Voici les détails de l'addition :",
    pay_to: "Payer à :",
    transfer_msg: "Merci de transférer rapidement !",
    subtotal_tax: "Sous-total + Frais",
    participants_count: "Nombre"
  },
  it: {
    title: "Dividi Conto",
    bill_details: "Dettagli Conto",
    total_bill: "Importo Totale",
    tax: "Tasse (%)",
    service: "Servizio (%)",
    add_person: "Aggiungi Persona",
    calculate: "Calcola Divisione",
    reset: "Reset",
    per_person: "A Persona",
    name_placeholder: "Mario, Anna, Luca...",
    copy_wa: "Copia su WhatsApp",
    copied: "Copiato!",
    share_intro: "Ecco i dettagli del conto:",
    pay_to: "Paga a:",
    transfer_msg: "Si prega di trasferire presto!",
    subtotal_tax: "Subtotale + Oneri",
    participants_count: "Totale"
  }
};

export default function SplitBillPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [totalBill, setTotalBill] = useState<string>('0');
  const [taxPercent, setTaxPercent] = useState<string>('0');
  const [servicePercent, setServicePercent] = useState<string>('0');
  const [names, setNames] = useState<string>('');
  const [bankInfo, setBankInfo] = useState<string>('');

  const billValue = parseFloat(totalBill) || 0;
  const taxValue = parseFloat(taxPercent) || 0;
  const serviceValue = parseFloat(servicePercent) || 0;
  
  const totalWithFees = billValue + (billValue * (taxValue / 100)) + (billValue * (serviceValue / 100));
  
  const participants = names.split(',').map(n => n.trim()).filter(n => n !== '');
  const amountPerPerson = participants.length > 0 ? Math.ceil(totalWithFees / participants.length) : 0;

  const handleReset = () => {
    setTotalBill('0');
    setTaxPercent('0');
    setServicePercent('0');
    setNames('');
    setBankInfo('');
  };

  const copyForWA = () => {
    if (participants.length === 0) {
      toast({ title: lang === 'id' ? "Masukkan nama peserta" : "Please enter participants", variant: "destructive" });
      return;
    }
    
    const message = `*${t('title').toUpperCase()}* 💸\n` +
      `--------------------------\n` +
      `${t('share_intro')}\n\n` +
      `Total: *Rp ${totalWithFees.toLocaleString('id-ID')}*\n` +
      `${t('per_person')}: *Rp ${amountPerPerson.toLocaleString('id-ID')}*\n\n` +
      `*${t('add_person')} (${participants.length}):*\n` +
      `${participants.map(p => `• ${p}`).join('\n')}\n\n` +
      (bankInfo ? `*${t('pay_to')}*\n${bankInfo}` : `*${t('transfer_msg')}*`);

    navigator.clipboard.writeText(message);
    toast({ title: t('copied'), description: lang === 'id' ? "Tempel di WhatsApp sekarang." : "Paste in WhatsApp now." });
  };

  const splitBillState = { totalBill, taxPercent, servicePercent, names, bankInfo };

  const handleRestore = (data: any) => {
    if (data.totalBill !== undefined) setTotalBill(data.totalBill);
    if (data.taxPercent !== undefined) setTaxPercent(data.taxPercent);
    if (data.servicePercent !== undefined) setServicePercent(data.servicePercent);
    if (data.names !== undefined) setNames(data.names);
    if (data.bankInfo !== undefined) setBankInfo(data.bankInfo);
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-4xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <p className="text-muted-foreground font-medium italic">
          {lang === 'id' ? 'Bagi biaya bersama teman secara adil dan cepat' : 'Divide shared costs fairly and quickly'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <Card className="shadow-lg border-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Receipt className="h-5 w-5 text-primary" />
              {t('bill_details')}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground hover:text-destructive">
              <RotateCcw className="h-4 w-4 mr-1" /> {t('reset')}
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="total">{t('total_bill')} (Rp)</Label>
              <div className="relative">
                <Banknote className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="total" type="number" value={totalBill} onChange={(e) => setTotalBill(e.target.value)} className="pl-10 h-12 text-lg font-bold" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tax">{t('tax')}</Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="tax" type="number" value={taxPercent} onChange={(e) => setTaxPercent(e.target.value)} className="pl-10 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">{t('service')}</Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="service" type="number" value={servicePercent} onChange={(e) => setServicePercent(e.target.value)} className="pl-10 h-12" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="names">{t('add_person')} ({lang === 'id' ? 'Pisahkan dengan koma' : 'Separate with comma'})</Label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <textarea 
                  id="names" 
                  value={names} 
                  onChange={(e) => setNames(e.target.value)} 
                  placeholder={t('name_placeholder')} 
                  className="w-full min-h-[100px] pl-10 pt-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <Label htmlFor="bank">{t('pay_to')} ({lang === 'id' ? 'Opsional' : 'Optional'})</Label>
              <Input id="bank" value={bankInfo} onChange={(e) => setBankInfo(e.target.value)} placeholder="BCA 123456789 a/n Budi" />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8 flex flex-col">
          <Card className="shadow-2xl border-2 bg-primary/5 flex flex-col flex-1">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
                <Banknote className="h-5 w-5 text-primary" />
                {t('calculate')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 flex-1 flex flex-col">
              <div className="flex flex-col items-center justify-center p-8 bg-primary text-primary-foreground rounded-[2rem] shadow-xl gap-2 transform transition-transform hover:scale-105">
                <span className="font-bold uppercase tracking-[0.2em] text-[10px] opacity-70">{t('per_person')}:</span>
                <div className="text-4xl md:text-5xl font-black tabular-nums">
                  Rp {amountPerPerson.toLocaleString('id-ID')}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-card rounded-2xl border border-primary/10">
                  <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t('subtotal_tax')}</span>
                  <span className="font-bold">Rp {totalWithFees.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-card rounded-2xl border border-primary/10">
                  <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{t('participants_count')}</span>
                  <span className="font-bold">{participants.length}</span>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <Button 
                  onClick={copyForWA} 
                  className="w-full h-16 bg-green-600 hover:bg-green-700 text-lg font-black uppercase tracking-[0.1em] shadow-xl text-white rounded-2xl transition-all active:scale-95"
                >
                  <Send className="mr-2 h-6 w-6" />
                  {t('copy_wa')}
                </Button>
                <p className="text-[10px] text-center mt-3 text-muted-foreground font-bold uppercase tracking-widest">
                  {lang === 'id' ? 'Klik untuk menyalin teks format rapi' : 'Click to copy neatly formatted text'}
                </p>
              </div>
            </CardContent>
          </Card>

          <DataPersistence 
            data={splitBillState} 
            onRestore={handleRestore} 
            fileNamePrefix="versokit-splitbill" 
          />
        </div>
      </div>

      <ArticleSection toolId="split-bill" />

      <SeoContent toolId="split-bill" />
    </div>
  );
}
