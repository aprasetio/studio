'use client';

import React, { useState } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Printer, Receipt } from 'lucide-react';

interface InvoiceItem {
  id: string;
  name: string;
  qty: number;
  price: number;
}

export default function InvoiceMakerPage() {
  const { t } = useLang();
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
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('invoice')}</h1>
        <p className="text-muted-foreground font-medium">Buat invoice profesional dalam hitungan detik</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-start">
        {/* EDIT FORM */}
        <Card className="shadow-lg border-2 print:hidden">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Receipt className="h-5 w-5 text-primary" />
              Editor Invoice
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t('business_name')}</Label>
                <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Toko Olahraga Jaya" />
              </div>
              <div className="space-y-2">
                <Label>{t('client_name')}</Label>
                <Input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Bpk. Budi Santoso" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>{t('date')}</Label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="space-y-4 pt-4 border-t">
              <Label className="text-lg font-bold uppercase tracking-widest">{t('item_name')}</Label>
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-end">
                  <div className="col-span-6">
                    <Input 
                      placeholder="Nama Barang/Jasa" 
                      value={item.name} 
                      onChange={(e) => updateItem(item.id, 'name', e.target.value)} 
                    />
                  </div>
                  <div className="col-span-2">
                    <Input 
                      type="number" 
                      placeholder="Qty" 
                      value={item.qty} 
                      onChange={(e) => updateItem(item.id, 'qty', parseInt(e.target.value) || 0)} 
                    />
                  </div>
                  <div className="col-span-3">
                    <Input 
                      type="number" 
                      placeholder="Harga" 
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
                <Plus className="h-4 w-4 mr-2" /> {t('add')}
              </Button>
            </div>

            <Button onClick={() => window.print()} className="w-full h-14 bg-primary text-xl font-black uppercase tracking-[0.2em] shadow-xl">
              <Printer className="mr-2 h-6 w-6" /> {t('print')}
            </Button>
          </CardContent>
        </Card>

        {/* PREVIEW */}
        <div className="w-full flex justify-center sticky top-24 print:static print:w-full">
          <div className="bg-white text-black w-full max-w-[210mm] min-h-[297mm] shadow-2xl p-12 border border-gray-100 flex flex-col font-serif print:shadow-none print:border-none print:p-0">
            {/* Header Invoice */}
            <div className="flex justify-between items-start border-b-4 border-black pb-8 mb-12">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">INVOICE</h2>
                <p className="text-gray-500 font-sans font-bold uppercase tracking-widest text-xs">VersoKit Billing System</p>
              </div>
              <div className="text-right">
                <p className="font-black text-xl uppercase">{businessName || 'NAMA BISNIS ANDA'}</p>
                <p className="font-sans font-bold text-xs text-gray-500">Tanggal: {date}</p>
              </div>
            </div>

            {/* Client Info */}
            <div className="mb-12">
              <p className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest mb-1">DITAGIHKAN KEPADA:</p>
              <p className="text-2xl font-black uppercase">{clientName || 'NAMA KLIEN'}</p>
            </div>

            {/* Table */}
            <table className="w-full text-left mb-auto">
              <thead>
                <tr className="border-b-2 border-black font-sans text-[10px] font-black uppercase tracking-widest">
                  <th className="py-4">{t('item_name')}</th>
                  <th className="py-4 text-center">{t('qty')}</th>
                  <th className="py-4 text-right">{t('price')}</th>
                  <th className="py-4 text-right">{t('total')}</th>
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
                <p className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest">{t('grand_total')}</p>
                <p className="text-5xl font-black">Rp {grandTotal.toLocaleString('id-ID')}</p>
              </div>
            </div>

            {/* Footer Invoice */}
            <div className="mt-20 pt-8 border-t text-center">
              <p className="text-[10px] font-sans font-bold text-gray-300 uppercase tracking-[0.4em]">Terima kasih atas kerja sama Anda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
