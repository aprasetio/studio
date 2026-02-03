
'use client';

import React, { useState } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Receipt, Send, Banknote, Percent } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function SplitBillPage() {
  const { t } = useLang();
  const [totalBill, setTotalBill] = useState<string>('0');
  const [taxPercent, setTaxPercent] = useState<string>('0');
  const [names, setNames] = useState<string>('');
  const [bankInfo, setBankInfo] = useState<string>('');

  const billValue = parseFloat(totalBill) || 0;
  const taxValue = parseFloat(taxPercent) || 0;
  const totalWithTax = billValue + (billValue * (taxValue / 100));
  
  const participants = names.split(',').map(n => n.trim()).filter(n => n !== '');
  const amountPerPerson = participants.length > 0 ? Math.ceil(totalWithTax / participants.length) : 0;

  const copyForWA = () => {
    if (participants.length === 0) {
      toast({ title: "Masukkan nama peserta", variant: "destructive" });
      return;
    }
    
    const message = `*PATUNGAN VERSOKIT* 💸\n` +
      `--------------------------\n` +
      `Total: *Rp ${totalWithTax.toLocaleString('id-ID')}*\n` +
      `Per Orang: *Rp ${amountPerPerson.toLocaleString('id-ID')}*\n\n` +
      `*Peserta (${participants.length}):*\n` +
      `${participants.map(p => `• ${p}`).join('\n')}\n\n` +
      (bankInfo ? `*Bayar ke:*\n${bankInfo}` : `Silakan transfer segera ya!`);

    navigator.clipboard.writeText(message);
    toast({ title: "Berhasil Disalin!", description: "Tempel di WhatsApp sekarang." });
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-4xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">{t('split_bill')}</h1>
        <p className="text-muted-foreground font-medium italic">Hitung patungan makan atau futsal jadi lebih adil dan cepat</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <Card className="shadow-lg border-2">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Receipt className="h-5 w-5 text-primary" />
              Detail Tagihan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="total">Total Tagihan (Rp)</Label>
              <div className="relative">
                <Banknote className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="total" type="number" value={totalBill} onChange={(e) => setTotalBill(e.target.value)} className="pl-10 h-12 text-lg font-bold" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tax">Pajak / Layanan (%)</Label>
              <div className="relative">
                <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="tax" type="number" value={taxPercent} onChange={(e) => setTaxPercent(e.target.value)} className="pl-10 h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="names">Nama Peserta (Pisahkan dengan koma)</Label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <textarea 
                  id="names" 
                  value={names} 
                  onChange={(e) => setNames(e.target.value)} 
                  placeholder="Budi, Ani, Joko..." 
                  className="w-full min-h-[100px] pl-10 pt-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t">
              <Label htmlFor="bank">Informasi Pembayaran (Opsional)</Label>
              <Input id="bank" value={bankInfo} onChange={(e) => setBankInfo(e.target.value)} placeholder="BCA 123456789 a/n Budi" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-2xl border-2 bg-primary/5 flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
              <Banknote className="h-5 w-5 text-primary" />
              Ringkasan Patungan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 flex-1 flex flex-col">
            <div className="flex flex-col items-center justify-center p-8 bg-primary text-primary-foreground rounded-[2rem] shadow-xl gap-2 transform transition-transform hover:scale-105">
              <span className="font-bold uppercase tracking-[0.2em] text-[10px] opacity-70">Per Orang Harus Bayar:</span>
              <div className="text-4xl md:text-5xl font-black tabular-nums">
                Rp {amountPerPerson.toLocaleString('id-ID')}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-card rounded-2xl border border-primary/10">
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Subtotal + Pajak</span>
                <span className="font-bold">Rp {totalWithTax.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-2xl border border-primary/10">
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Jumlah Peserta</span>
                <span className="font-bold">{participants.length} Orang</span>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <Button 
                onClick={copyForWA} 
                className="w-full h-16 bg-green-600 hover:bg-green-700 text-lg font-black uppercase tracking-[0.1em] shadow-xl text-white rounded-2xl transition-all active:scale-95"
              >
                <Send className="mr-2 h-6 w-6" />
                Salin Rincian untuk WA
              </Button>
              <p className="text-[10px] text-center mt-3 text-muted-foreground font-bold uppercase tracking-widest">Klik untuk menyalin teks format rapi</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
