'use client';

import React, { useState } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Printer, Receipt } from 'lucide-react';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import { DataPersistence } from '@/components/DataPersistence';
import { ArticleSection } from '@/components/ArticleSection';
import TrustBadges from '@/components/ui/TrustBadges';

const UI_TEXT: Record<string, any> = {
  title: { en: "Invoice Generator", id: "Pembuat Faktur", de: "Rechnungsgenerator", es: "Generador de Facturas", pt: "Gerador de Faturas", fr: "Générateur de Factures", it: "Generatore Fatture" },
  bill_to: { en: "Bill To", id: "Tagih Ke", de: "Rechnung an", es: "Facturar a", pt: "Faturar para", fr: "Facturer à", it: "Fatturare a" },
  ship_to: { en: "Ship To", id: "Kirim Ke", de: "Lieferung an", es: "Enviar a", pt: "Enviar para", fr: "Expédier à", it: "Spedire a" },
  item_desc: { en: "Item Description", id: "Deskripsi Barang", de: "Artikelbeschreibung", es: "Descripción del artículo", pt: "Descrição do Item", fr: "Description de l'article", it: "Descrizione Articolo" },
  qty: { en: "Qty", id: "Jml", de: "Menge", es: "Cant.", pt: "Qtd", fr: "Qté", it: "Qtà" },
  rate: { en: "Rate", id: "Harga", de: "Preis", es: "Precio", pt: "Preço", fr: "Prix", it: "Prezzo" },
  amount: { en: "Amount", id: "Jumlah", de: "Betrag", es: "Importe", pt: "Valor", fr: "Montant", it: "Importo" },
  subtotal: { en: "Subtotal", id: "Subtotal", de: "Zwischensumme", es: "Subtotal", pt: "Subtotal", fr: "Sous-total", it: "Subtotale" },
  tax: { en: "Tax", id: "Pajak", de: "Steuer", es: "Impuesto", pt: "Imposto", fr: "Taxe", it: "Tassa" },
  total: { en: "Total", id: "Total", de: "Gesamt", es: "Total", pt: "Total", fr: "Total", it: "Totale" },
  download: { en: "Download PDF", id: "Unduh PDF", de: "PDF herunterladen", es: "Descargar PDF", pt: "Baixar PDF", fr: "Télécharger PDF", it: "Scarica PDF" },
  add_item: { en: "+ Add Item", id: "+ Tambah Barang", de: "+ Artikel hinzufügen", es: "+ Añadir artículo", pt: "+ Adicionar Item", fr: "+ Ajouter un article", it: "+ Aggiungi Articolo" },
  from: { en: "From", id: "Dari", de: "Von", es: "De", pt: "De", fr: "De", it: "Da" },
  date: { en: "Date", id: "Tanggal", de: "Datum", es: "Fecha", pt: "Data", fr: "Date", it: "Data" },
  business_name: { en: "Your Business", id: "Bisnis Anda", de: "Ihr Unternehmen", es: "Su Negocio", pt: "Seu Negócio", fr: "Votre Entreprise", it: "Tua Azienda" },
  client_name: { en: "Client Name", id: "Nama Klien", de: "Kundenname", es: "Nombre del Cliente", pt: "Nome do Cliente", fr: "Nom du Client", it: "Nome Cliente" }
};

interface InvoiceItem {
  id: string;
  name: string;
  qty: number;
  price: number;
}

export default function InvoiceMakerPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[key]?.[lang] || UI_TEXT[key]?.['en'] || key;

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

  const handleRestore = (data: any) => {
    if (data.businessName !== undefined) setBusinessName(data.businessName);
    if (data.clientName !== undefined) setClientName(data.clientName);
    if (data.date !== undefined) setDate(data.date);
    if (data.items !== undefined) setItems(data.items);
  };

  const invoiceState = { businessName, clientName, date, items };
  const grandTotal = items.reduce((sum, item) => sum + (item.qty * item.price), 0);

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8 print:p-0">
      <div className="text-center space-y-2 print:hidden">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
        <TrustBadges />
        <p className="text-muted-foreground font-medium">{lang === 'id' ? 'Buat invoice profesional dalam hitungan detik' : 'Create professional invoices in seconds'}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start">
        {/* EDIT FORM */}
        <div className="space-y-8 print:hidden">
          <Card className="shadow-lg border-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
                <Receipt className="h-5 w-5 text-primary" />
                {t('title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{t('business_name')}</Label>
                  <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder={t('business_name')} />
                </div>
                <div className="space-y-2">
                  <Label>{t('client_name')}</Label>
                  <Input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder={t('client_name')} />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>{t('date')}</Label>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>

              <div className="space-y-4 pt-4 border-t">
                <Label className="text-lg font-bold uppercase tracking-widest">{t('item_desc')}</Label>
                {items.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-2 items-end">
                    <div className="col-span-6">
                      <Input 
                        placeholder={t('item_desc')} 
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
                  <Plus className="h-4 w-4 mr-2" /> {t('add_item')}
                </Button>
              </div>

              <Button onClick={() => window.print()} className="w-full h-14 bg-primary text-xl font-black uppercase tracking-[0.2em] shadow-xl">
                <Printer className="mr-2 h-6 w-6" /> {t('download')}
              </Button>
            </CardContent>
          </Card>

          <DataPersistence 
            data={invoiceState} 
            onRestore={handleRestore} 
            fileNamePrefix="versokit-invoice" 
          />
        </div>

        {/* PREVIEW */}
        <div className="w-full flex justify-center sticky top-24 print:static print:w-full">
          <div className="bg-white text-black w-full max-w-[210mm] min-h-[297mm] shadow-2xl p-12 border border-gray-100 flex flex-col font-serif print:shadow-none print:border-none print:p-0">
            {/* Header Invoice */}
            <div className="flex justify-between items-start border-b-4 border-black pb-8 mb-12">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">{t('title')}</h2>
                <p className="text-gray-500 font-sans font-bold uppercase tracking-widest text-xs">VersoKit Billing</p>
              </div>
              <div className="text-right">
                <p className="font-black text-xl uppercase">{businessName || (lang === 'id' ? 'NAMA BISNIS' : 'BUSINESS NAME')}</p>
                <p className="font-sans font-bold text-xs text-gray-500">{t('date')}: {date}</p>
              </div>
            </div>

            {/* Client Info */}
            <div className="mb-12">
              <p className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest mb-1">{t('bill_to')}:</p>
              <p className="text-2xl font-black uppercase">{clientName || (lang === 'id' ? 'NAMA KLIEN' : 'CLIENT NAME')}</p>
            </div>

            {/* Table */}
            <table className="w-full text-left mb-auto">
              <thead>
                <tr className="border-b-2 border-black font-sans text-[10px] font-black uppercase tracking-widest">
                  <th className="py-4">{t('item_desc')}</th>
                  <th className="py-4 text-center">{t('qty')}</th>
                  <th className="py-4 text-right">{t('rate')}</th>
                  <th className="py-4 text-right">{t('amount')}</th>
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
                <p className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">{t('total')}</p>
                <p className="text-5xl font-black">Rp {grandTotal.toLocaleString('id-ID')}</p>
              </div>
            </div>

            {/* Privacy Footer for PDF */}
            <div className="mt-8 pt-4 border-t text-center text-[8px] text-gray-400 print:block hidden uppercase tracking-widest font-sans font-bold">
              🔒 Securely generated on device by VersoKit. No data sent to server.
            </div>

            {/* Footer Invoice */}
            <div className="mt-20 pt-8 border-t text-center">
              <p className="text-[10px] font-sans font-bold text-gray-300 uppercase tracking-[0.4em]">Thank you for your business</p>
            </div>
          </div>
        </div>
      </div>

      <ArticleSection toolId="invoice" />

      <div className="print:hidden w-full">
        <SmartAd />
        <SeoContent toolId="invoice" />
      </div>
    </div>
  );
}
