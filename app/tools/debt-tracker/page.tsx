'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Trash2, 
  TrendingDown, 
  CalendarDays, 
  PiggyBank, 
  ArrowRight, 
  Info, 
  Calculator,
  ShieldCheck,
  RotateCcw,
  LayoutDashboard,
  Wallet,
  ArrowUpRight
} from 'lucide-react';
import { useDebtTrackerStore, type Debt, type PayoffStrategy } from './store';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import TrustBadges from '@/components/ui/TrustBadges';
import { DataPersistence } from '@/components/DataPersistence';
import { addMonths, format } from 'date-fns';

const CURRENCY_CONFIG: Record<string, { locale: string; currency: string }> = {
  id: { locale: 'id-ID', currency: 'IDR' },
  en: { locale: 'en-US', currency: 'USD' },
  pt: { locale: 'pt-BR', currency: 'BRL' },
  it: { locale: 'it-IT', currency: 'EUR' },
  fr: { locale: 'fr-FR', currency: 'EUR' },
  de: { locale: 'de-DE', currency: 'EUR' },
  es: { locale: 'es-ES', currency: 'EUR' }
};

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Debt Payoff Tracker",
    add_debt: "Add Debt",
    name: "Debt Name",
    balance: "Balance",
    interest: "Interest Rate (%)",
    min_payment: "Min Payment",
    extra_budget: "Extra Monthly Payment",
    strategy: "Payoff Strategy",
    snowball: "Snowball (Lowest Balance First)",
    avalanche: "Avalanche (Highest Interest First)",
    summary: "Payoff Summary",
    payoff_date: "Debt Free Date",
    total_interest: "Total Interest",
    total_paid: "Total Paid",
    schedule: "Payoff Schedule",
    month: "Month",
    principal: "Principal",
    remaining: "Remaining",
    no_debts: "Start by adding your debts below.",
    hint: "All calculations are done locally. Your financial data never leaves this device."
  },
  id: {
    title: "Pelacak Pelunasan Hutang",
    add_debt: "Tambah Hutang",
    name: "Nama Hutang",
    balance: "Saldo",
    interest: "Bunga (%)",
    min_payment: "Bayar Minimum",
    extra_budget: "Anggaran Tambahan Bulanan",
    strategy: "Strategi Pelunasan",
    snowball: "Snowball (Saldo Terendah Dulu)",
    avalanche: "Avalanche (Bunga Tertinggi Dulu)",
    summary: "Ringkasan Pelunasan",
    payoff_date: "Tanggal Lunas",
    total_interest: "Total Bunga",
    total_paid: "Total Dibayar",
    schedule: "Jadwal Pelunasan",
    month: "Bulan",
    principal: "Pokok",
    remaining: "Sisa",
    no_debts: "Mulai dengan menambahkan hutang Anda di bawah.",
    hint: "Semua perhitungan dilakukan secara lokal. Data keuangan Anda tidak pernah keluar dari perangkat ini."
  }
};

export default function DebtTrackerPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];
  
  const { 
    debts, extraBudget, strategy, 
    addDebt, removeDebt, updateDebt, setExtraBudget, setStrategy, resetAll, restoreData 
  } = useDebtTrackerStore();

  const [mounted, setMounted] = useState(false);
  const [newDebt, setNewDebt] = useState({ name: '', balance: 0, interestRate: 0, minPayment: 0 });

  useEffect(() => { setMounted(true); }, []);

  const formatCurrency = (amount: number) => {
    const config = CURRENCY_CONFIG[lang] || CURRENCY_CONFIG['en'];
    return new Intl.NumberFormat(config.locale, {
      style: 'currency',
      currency: config.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const payoffSchedule = useMemo(() => {
    if (debts.length === 0) return [];

    let currentDebts = debts.map(d => ({ ...d, currentBalance: d.balance }));
    const schedule = [];
    let totalInterest = 0;
    let totalPaid = 0;
    let monthCount = 0;
    const maxMonths = 600; // 50 years safety cap

    while (currentDebts.some(d => d.currentBalance > 0) && monthCount < maxMonths) {
      monthCount++;
      let monthlyExtra = extraBudget;
      const monthDetails: any[] = [];

      // 1. Sort based on strategy
      const sortedDebts = [...currentDebts].sort((a, b) => {
        if (strategy === 'snowball') return a.currentBalance - b.currentBalance;
        return b.interestRate - a.interestRate;
      });

      // 2. Pay minimums and calculate interest
      currentDebts = currentDebts.map(d => {
        if (d.currentBalance <= 0) return d;

        const interest = (d.currentBalance * (d.interestRate / 100)) / 12;
        let payment = Math.min(d.minPayment, d.currentBalance + interest);
        
        // If payment is less than interest, debt grows (negative amortization)
        const principalPaid = payment - interest;
        const newBalance = Math.max(0, d.currentBalance - principalPaid);
        
        totalInterest += interest;
        totalPaid += payment;

        monthDetails.push({ name: d.name, interest, principalPaid, newBalance });
        return { ...d, currentBalance: newBalance };
      });

      // 3. Apply extra budget to the target debt (first non-zero in sorted list)
      const target = sortedDebts.find(d => d.currentBalance > 0);
      if (target && monthlyExtra > 0) {
        const actualDebt = currentDebts.find(d => d.id === target.id)!;
        const extraPayment = Math.min(monthlyExtra, actualDebt.currentBalance);
        actualDebt.currentBalance -= extraPayment;
        totalPaid += extraPayment;
        
        // Update the detail record
        const detail = monthDetails.find(m => m.name === actualDebt.name);
        if (detail) {
          detail.principalPaid += extraPayment;
          detail.newBalance = actualDebt.currentBalance;
        }
      }

      schedule.push({
        month: monthCount,
        date: addMonths(new Date(), monthCount),
        details: monthDetails,
        totalRemaining: currentDebts.reduce((sum, d) => sum + d.currentBalance, 0)
      });
    }

    return { schedule, totalInterest, totalPaid, monthCount };
  }, [debts, extraBudget, strategy]);

  const handleAdd = () => {
    if (!newDebt.name || newDebt.balance <= 0) {
      toast({ title: "Invalid Input", variant: "destructive" });
      return;
    }
    addDebt(newDebt);
    setNewDebt({ name: '', balance: 0, interestRate: 0, minPayment: 0 });
    toast({ title: "Debt Added" });
  };

  if (!mounted) return null;

  const summary = payoffSchedule as any;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <TrendingDown className="h-8 w-8 text-primary" />
          {t('title')}
        </h1>
        <TrustBadges />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* Left: Inputs & Configuration */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="bg-primary p-6 text-white">
              <CardTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
                <Wallet className="h-5 w-5 text-accent" /> {t('add_debt')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase opacity-60">{t('name')}</Label>
                  <Input 
                    value={newDebt.name} 
                    onChange={e => setNewDebt({...newDebt, name: e.target.value.toUpperCase()})}
                    placeholder="E.G. CREDIT CARD"
                    className="font-bold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60">{t('balance')}</Label>
                    <Input 
                      type="number" 
                      value={newDebt.balance || ''} 
                      onChange={e => setNewDebt({...newDebt, balance: parseFloat(e.target.value) || 0})}
                      className="font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60">{t('interest')}</Label>
                    <Input 
                      type="number" 
                      value={newDebt.interestRate || ''} 
                      onChange={e => setNewDebt({...newDebt, interestRate: parseFloat(e.target.value) || 0})}
                      className="font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase opacity-60">{t('min_payment')}</Label>
                  <Input 
                    type="number" 
                    value={newDebt.minPayment || ''} 
                    onChange={e => setNewDebt({...newDebt, minPayment: parseFloat(e.target.value) || 0})}
                    className="font-bold"
                  />
                </div>
                <Button onClick={handleAdd} className="w-full h-12 font-black uppercase tracking-widest bg-accent">
                  <Plus className="mr-2 h-4 w-4" /> {t('add_debt')}
                </Button>
              </div>

              <div className="pt-6 border-t border-dashed space-y-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-primary">{t('extra_budget')}</Label>
                  <Input 
                    type="number" 
                    value={extraBudget || ''} 
                    onChange={e => setExtraBudget(parseFloat(e.target.value) || 0)}
                    className="h-14 text-2xl font-black border-2 border-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase opacity-60">{t('strategy')}</Label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-muted rounded-xl">
                    <Button 
                      variant={strategy === 'snowball' ? 'default' : 'ghost'} 
                      onClick={() => setStrategy('snowball')}
                      className="text-[10px] font-bold uppercase rounded-lg h-10"
                    >
                      Snowball
                    </Button>
                    <Button 
                      variant={strategy === 'avalanche' ? 'default' : 'ghost'} 
                      onClick={() => setStrategy('avalanche')}
                      className="text-[10px] font-bold uppercase rounded-lg h-10"
                    >
                      Avalanche
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Debt List */}
          <div className="space-y-3">
            {debts.map(debt => (
              <Card key={debt.id} className="border-2 rounded-2xl group hover:border-primary/30 transition-all">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex-1 overflow-hidden">
                    <h4 className="font-black uppercase text-sm truncate">{debt.name}</h4>
                    <div className="flex gap-3 text-[10px] font-bold text-muted-foreground uppercase">
                      <span>{formatCurrency(debt.balance)}</span>
                      <span>•</span>
                      <span>{debt.interestRate}% APR</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[9px] font-bold text-muted-foreground uppercase">Min</p>
                      <p className="font-black text-sm">{formatCurrency(debt.minPayment)}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeDebt(debt.id)} className="text-destructive opacity-0 group-hover:opacity-100">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <DataPersistence data={{ debts, extraBudget, strategy }} onRestore={restoreData} fileNamePrefix="versokit-debt" />
        </div>

        {/* Right: Results & Dashboard */}
        <div className="lg:col-span-7 space-y-6">
          {debts.length === 0 ? (
            <Card className="h-full border-2 border-dashed flex flex-col items-center justify-center py-24 text-center opacity-40 rounded-[3rem]">
              <Calculator className="h-16 w-16 mb-4" />
              <p className="font-black uppercase tracking-widest">{t('no_debts')}</p>
            </Card>
          ) : (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 rounded-[2rem] bg-emerald-50 dark:bg-emerald-950/20 text-center p-6 shadow-sm">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl w-fit mx-auto mb-3 shadow-sm border">
                    <CalendarDays className="h-5 w-5 text-emerald-600" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700/60 mb-1">{t('payoff_date')}</p>
                  <p className="text-xl font-black text-emerald-700">
                    {summary.schedule.length > 0 ? format(summary.schedule[summary.schedule.length - 1].date, 'MMM yyyy').toUpperCase() : 'N/A'}
                  </p>
                </Card>

                <Card className="border-2 rounded-[2rem] bg-orange-50 dark:bg-orange-950/20 text-center p-6 shadow-sm">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl w-fit mx-auto mb-3 shadow-sm border">
                    <TrendingDown className="h-5 w-5 text-orange-600" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-700/60 mb-1">{t('total_interest')}</p>
                  <p className="text-xl font-black text-orange-700">{formatCurrency(summary.totalInterest)}</p>
                </Card>

                <Card className="border-2 rounded-[2rem] bg-primary/5 text-center p-6 shadow-sm">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl w-fit mx-auto mb-3 shadow-sm border">
                    <PiggyBank className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-1">{t('total_paid')}</p>
                  <p className="text-xl font-black text-primary">{formatCurrency(summary.totalPaid)}</p>
                </Card>
              </div>

              {/* Schedule Table */}
              <Card className="border-2 rounded-[2.5rem] overflow-hidden shadow-2xl bg-card">
                <CardHeader className="bg-muted/30 border-b">
                  <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4 text-primary" /> {t('schedule')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-auto">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-muted/50 sticky top-0 z-10 border-b">
                        <tr className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                          <th className="p-4">{t('month')}</th>
                          <th className="p-4">Payment Breakdown</th>
                          <th className="p-4 text-right">{t('remaining')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {summary.schedule.map((m: any) => (
                          <tr key={m.month} className="hover:bg-muted/10 transition-colors">
                            <td className="p-4">
                              <span className="font-black text-xs">{format(m.date, 'MMM yy').toUpperCase()}</span>
                              <p className="text-[8px] font-bold text-muted-foreground uppercase">M#{m.month}</p>
                            </td>
                            <td className="p-4">
                              <div className="space-y-1">
                                {m.details.map((d: any, i: number) => (
                                  <div key={i} className="flex items-center justify-between gap-4">
                                    <span className="text-[10px] font-bold text-muted-foreground truncate max-w-[100px]">{d.name}</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[9px] font-black text-emerald-600">+{formatCurrency(d.principalPaid)}</span>
                                      <span className="text-[9px] font-medium text-orange-500">-{formatCurrency(d.interest)}i</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="p-4 text-right">
                              <span className="font-black text-sm tabular-nums">{formatCurrency(m.totalRemaining)}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <Card className="shadow-md border-2 bg-emerald-50 dark:bg-emerald-950/20 p-6 rounded-[2rem]">
            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
              <p className="text-[10px] font-bold text-emerald-800 dark:text-emerald-400 uppercase leading-relaxed">
                {t('hint')}
              </p>
            </div>
          </Card>
        </div>
      </div>

      <ArticleSection toolId="debt-tracker" />
      <SmartAd />
      <SeoContent toolId="debt-tracker" />
    </div>
  );
}
