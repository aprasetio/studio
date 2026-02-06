'use client';

import React, { useState } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Printer, Receipt } from 'lucide-react';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';

const UI_TEXT: Record<string, any> = {
  en: {
    editor_title: "Invoice Editor",
    business_placeholder: "Your Business Name",
    client_placeholder: "Client Name",
    invoice_title: "INVOICE",
    from: "From",
    to: "BILL TO",
    date: "Date",
    item: "Item Description",
    qty: "Qty",
    rate: "Rate",
    amount: "Amount",
    add_item: "Add Line Item",
    subtotal: "Subtotal",
    tax: "Tax",
    total: "Total",
    download: "Print / Save PDF",
    footer_msg: "Thank you for your business",
    privacy_badge: "🔒 Securely generated on device by VersoKit. No data sent to server."
  },
  id: {
    editor_title: "Editor Invoice",
    business_placeholder: "Nama Bisnis Anda",
    client_placeholder: "Nama Klien",
    invoice_title: "FAKTUR",
    from: "Dari",
    to: "TAGIHAN UNTUK",
    date: "Tanggal",
    item: "Deskripsi Barang",
    qty: "Jml",
    rate: "Harga",
    amount: "Jumlah",
    add_item: "Tambah Baris",
    subtotal: "Subtotal",
    tax: "Pajak",
    total: "Total",
    download: "Cetak / Simpan PDF",
    footer_msg: "Terima kasih atas kerja sama Anda",
    privacy_badge: "🔒 Dibuat aman di perangkat oleh VersoKit. Tidak ada data dikirim ke server."
  },
  es: {
    editor_title: "Editor de Facturas",
    business_placeholder: "Nombre de su Empresa",
    client_placeholder: "Nombre del Cliente",
    invoice_title: "FACTURA",
    from: "De",
    to: "FACTURAR A",
    date: "Fecha",
    item: "Descripción",
    qty: "Cant",
    rate: "Precio",
    amount: "Total",
    add_item: "Añadir Artículo",
    subtotal: "Subtotal",
    tax: "Impuesto",
    total: "Total",
    download: "Imprimir / Guardar PDF",
    footer_msg: "Gracias por su preferencia",
    privacy_badge: "🔒 Generado de forma segura en el dispositivo por VersoKit. Sin envío de datos."
  },
  pt: {
    editor_title: "Editor de Faturas",
    business_placeholder: "Nome da sua Empresa",
    client_placeholder: "Nome do Cliente",
    invoice_title: "FATURA",
    from: "De",
    to: "FATURAR A",
    date: "Data",
    item: "Descrição",
    qty: "Qtd",
    rate: "Preço",
    amount: "Total",
    add_item: "Adicionar Item",
    subtotal: "Subtotal",
    tax: "Imposto",
    total: "Total",
    download: "Imprimir / Salvar PDF",
    footer_msg: "Obrigado pela sua preferência",
    privacy_badge: "🔒 Gerado com segurança no dispositivo por VersoKit. Nenhum dado enviado."
  },
  de: {
    editor_title: "Rechnungs-Editor",
    business_placeholder: "Ihr Firmenname",
    client_placeholder: "Kundenname",
    invoice_title: "RECHNUNG",
    from: "Von",
    to: "RECHNUNG AN",
    date: "Datum",
    item: "Beschreibung",
    qty: "Menge",
    rate: "Preis",
    amount: "Betrag",
    add_item: "Artikel hinzufügen",
    subtotal: "Zwischensumme",
    tax: "Steuer",
    total: "Gesamt",
    download: "Drucken / PDF speichern",
    footer_msg: "Vielen Dank für Ihren Auftrag",
    privacy_badge: "🔒 Sicher auf dem Gerät durch VersoKit generiert. Keine Datenübertragung."
  },
  fr: {
    editor_title: "Éditeur de Facture",
    business_placeholder: "Nom de votre Entreprise",
    client_placeholder: "Nom du Client",
    invoice_title: "FACTURE",
    from: "De",
    to: "FACTURER À",
    date: "Date",
    item: "Description",
    qty: "Qté",
    rate: "Prix",
    amount: "Montant",
    add_item: "Ajouter un Article",
    subtotal: "Sous-total",
    tax: "Taxe",
    total: "Total",
    download: "Imprimer / Sauvegarder PDF",
    footer_msg: "Merci pour votre confiance",
    privacy_badge: "🔒 Généré en toute sécurité par VersoKit. Aucune donnée envoyée au serveur."
  },
  it: {
    editor_title: "Editor Fattura",
    business_placeholder: "Nome della tua Azienda",
    client_placeholder: "Nome Cliente",
    invoice_title: "FATTURA",
    from: "Da",
    to: "FATTURARE A",
    date: "Data",
    item: "Descrizione",
    qty: "Qta",
    rate: "Prezzo",
    amount: "Importo",
    add_item: "Aggiungi Articolo",
    subtotal: "Totale parziale",
    tax: "Tassa",
    total: "Totale",
    download: "Stampa / Salva PDF",
    footer_msg: "Grazie per la vostra fiducia",
    privacy_badge: "🔒 Generato in sicurezza sul dispositivo da VersoKit. Nessun dato inviato."
  }
};

interface InvoiceItem {
  id: string;
  name: string;
  qty: number;
  price: number;
}

export default function InvoiceMakerPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [businessName, setBusinessName] = useState('');
  const [clientName, setClientName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', name: '', qty: 1, price: 0 }
  ]);

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), name: '', qty: 1, price: 0 }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const grandTotal = items.reduce((sum, item) => sum + (item.qty * item.price), 0);

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8 print:p-0">
      <div className="text-center space-y-2 print:hidden">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{globalT('invoice')}</h1>
        <p className="text-muted-foreground font-medium">{lang === 'id' ? 'Buat invoice profesional dalam hitungan detik' : 'Create professional invoices in seconds'}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start">
        {/* EDIT FORM */}
        <Card className="shadow-lg border-2 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Receipt className="h-5 w-5 text-primary" />
              {t('editor_title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{globalT('business_name')}</Label>
                <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder={t('business_placeholder')} />
              </div>
              <div className="space-y-2">
                <Label>{globalT('client_name')}</Label>
                <Input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder={t('client_placeholder')} />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>{globalT('date')}</Label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="space-y-4 pt-4 border-t">
              <Label className="text-lg font-bold uppercase tracking-widest">{globalT('item_name')}</Label>
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-end">
                  <div className="col-span-6">
                    <Input 
                      placeholder={t('item')} 
                      value={item.name} 
                      onChange={(e) => updateItem(item.id, 'name', e.target.value)} 
                    />
                  </div>
                  <div className="col-span-2">
                    <Input 
                      type="number" 
                      placeholder={t('qty')} 
                      value={item.qty} 
                      onChange={(e) => updateItem(item.id, 'qty', parseInt(e.target.value) || 0)} 
                    />
                  </div>
                  <div className="col-span-3">
                    <Input 
                      type="number" 
                      placeholder={t('rate')} 
                      value={item.price} 
                      onChange={(e) => updateItem(item.id, 'price', parseInt(e.target.value) || 0)} 
                    />
                  </div>
                  <div className="col-span-1">
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button onClick={addItem} variant="outline" className="w-full border-dashed border-2">
                <Plus className="h-4 w-4 mr-2" /> {globalT('add')}
              </Button>
            </div>

            <Button onClick={() => window.print()} className="w-full h-14 bg-primary text-xl font-black uppercase tracking-[0.2em] shadow-xl">
              <Printer className="mr-2 h-6 w-6" /> {t('download')}
            </Button>
          </CardContent>
        </Card>

        {/* PREVIEW */}
        <div className="w-full flex justify-center sticky top-24 print:static print:w-full">
          <div className="bg-white text-black w-full max-w-[210mm] min-h-[297mm] shadow-2xl p-12 border border-gray-100 flex flex-col font-serif print:shadow-none print:border-none print:p-0">
            {/* Header Invoice */}
            <div className="flex justify-between items-start border-b-4 border-black pb-8 mb-12">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">{t('invoice_title')}</h2>
                <p className="text-gray-500 font-sans font-bold uppercase tracking-widest text-xs">VersoKit Billing</p>
              </div>
              <div className="text-right">
                <p className="font-black text-xl uppercase">{businessName || (lang === 'id' ? 'NAMA BISNIS' : 'BUSINESS NAME')}</p>
                <p className="font-sans font-bold text-xs text-gray-500">{t('date')}: {date}</p>
              </div>
            </div>

            {/* Client Info */}
            <div className="mb-12">
              <p className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest mb-1">{t('to')}:</p>
              <p className="text-2xl font-black uppercase">{clientName || (lang === 'id' ? 'NAMA KLIEN' : 'CLIENT NAME')}</p>
            </div>

            {/* Table */}
            <table className="w-full text-left mb-auto">
              <thead>
                <tr className="border-b-2 border-black font-sans text-[10px] font-black uppercase tracking-widest">
                  <th className="py-4">{globalT('item_name')}</th>
                  <th className="py-4 text-center">{t('qty')}</th>
                  <th className="py-4 text-right">{globalT('price')}</th>
                  <th className="py-4 text-right">{globalT('total')}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-4 font-bold uppercase tracking-tight">{item.name || '---'}</td>
                    <td className="py-4 text-center font-bold">{item.qty}</td>
                    <td className="py-4 text-right">Rp {item.price.toLocaleString('id-ID')}</td>
                    <td className="py-4 text-right font-black">Rp {(item.qty * item.price).toLocaleString('id-ID')}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Summary */}
            <div className="mt-12 pt-8 border-t-4 border-black flex justify-end">
              <div className="text-right space-y-1">
                <p className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">{globalT('grand_total')}</p>
                <p className="text-5xl font-black">Rp {grandTotal.toLocaleString('id-ID')}</p>
              </div>
            </div>

            {/* Privacy Footer for PDF */}
            <div className="mt-8 pt-4 border-t text-center text-[8px] text-gray-400 print:block hidden uppercase tracking-widest font-sans font-bold">
              {t('privacy_badge')}
            </div>

            {/* Footer Invoice */}
            <div className="mt-20 pt-8 border-t text-center">
              <p className="text-[10px] font-sans font-bold text-gray-300 uppercase tracking-[0.4em]">{t('footer_msg')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="print:hidden w-full">
        <SmartAd />
        <SeoContent toolId="invoice" />
      </div>
    </div>
  );
}