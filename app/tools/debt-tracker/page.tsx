'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Plus, 
  Trash2, 
  TrendingDown, 
  CalendarDays, 
  PiggyBank, 
  ShieldCheck,
  RotateCcw,
  LayoutDashboard,
  Wallet,
  PieChart as PieIcon,
  LineChart as LineIcon,
  Info,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { useDebtTrackerStore, type Debt, type PayoffStrategy } from './store';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import TrustBadges from '@/components/ui/TrustBadges';
import { DataPersistence } from '@/components/DataPersistence';
import { addMonths, format } from 'date-fns';
import { Progress } from '@/components/ui/progress';

const CURRENCY_CONFIG: Record<string, { locale: string; currency: string }> = {
  id: { locale: 'id-ID', currency: 'IDR' },
  en: { locale: 'en-US', currency: 'USD' },
  pt: { locale: 'pt-BR', currency: 'BRL' },
  it: { locale: 'it-IT', currency: 'EUR' },
  fr: { locale: 'fr-FR', currency: 'EUR' },
  de: { locale: 'de-DE', currency: 'EUR' },
  es: { locale: 'es-ES', currency: 'EUR' }
};

const CHART_COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Debt Payoff Dashboard",
    add_debt: "New Liability",
    name: "Debt Name",
    balance: "Balance",
    interest: "APR (%)",
    min_payment: "Min Payment",
    extra_budget: "Extra Monthly",
    strategy: "Strategy",
    snowball: "Snowball (Lowest Balance)",
    avalanche: "Avalanche (Highest Rate)",
    summary: "Financial Summary",
    payoff_date: "Debt-Free Date",
    total_interest: "Total Interest",
    total_paid: "Total Outlay",
    schedule: "Payoff Projection",
    month: "Month",
    principal: "Principal",
    remaining: "Balance",
    no_debts: "Add your liabilities to generate a visual roadmap.",
    hint: "100% Private: All financial calculations are processed locally in your browser.",
    chart_trend: "Payoff Progress Trend",
    chart_breakdown: "Debt Composition",
    current_progress: "Total Paid Progress",
    strategy_info: "Snowball provides psychological wins. Avalanche saves the most money."
  },
  id: {
    title: "Dasbor Pelunasan Hutang",
    add_debt: "Hutang Baru",
    name: "Nama Hutang",
    balance: "Saldo",
    interest: "Bunga Pertahun (%)",
    min_payment: "Bayar Minimum",
    extra_budget: "Tambahan Bulanan",
    strategy: "Strategi",
    snowball: "Snowball (Saldo Terendah)",
    avalanche: "Avalanche (Bunga Tertinggi)",
    summary: "Ringkasan Keuangan",
    payoff_date: "Tanggal Bebas Hutang",
    total_interest: "Total Bunga",
    total_paid: "Total Pengeluaran",
    schedule: "Proyeksi Pelunasan",
    month: "Bulan",
    principal: "Pokok",
    remaining: "Sisa Saldo",
    no_debts: "Tambah hutang Anda untuk melihat peta jalan pelunasan.",
    hint: "100% Privat: Semua perhitungan diproses secara lokal di browser Anda.",
    chart_trend: "Tren Penurunan Hutang",
    chart_breakdown: "Komposisi Hutang",
    current_progress: "Progress Pelunasan Total",
    strategy_info: "Snowball memberi motivasi cepat. Avalanche paling hemat bunga."
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

  const payoffAnalysis = useMemo(() => {
    if (debts.length === 0) return { schedule: [], totalInterest: 0, totalPaid: 0, chartData: [], pieData: [] };

    let currentDebts = debts.map(d => ({ ...d, currentBalance: d.balance, originalBalance: d.balance }));
    const schedule = [];
    const chartData = [];
    let totalInterest = 0;
    let totalPaid = 0;
    let monthCount = 0;
    const maxMonths = 600;

    // Pie Chart Data
    const pieData = debts.map((d, i) => ({
      name: d.name,
      value: d.balance,
      color: CHART_COLORS[i % CHART_COLORS.length]
    }));

    // Initial state for chart
    chartData.push({
      name: format(new Date(), 'MMM yy'),
      balance: currentDebts.reduce((sum, d) => sum + d.currentBalance, 0)
    });

    while (currentDebts.some(d => d.currentBalance > 0) && monthCount < maxMonths) {
      monthCount++;
      let monthlyAvailable = extraBudget;
      const monthDetails: any[] = [];

      // 1. Sort based on strategy
      const sortedDebts = [...currentDebts].sort((a, b) => {
        if (strategy === 'snowball') return a.currentBalance - b.currentBalance;
        return b.interestRate - a.interestRate;
      });

      // 2. Pay minimums and calculate interest
      currentDebts = currentDebts.map(d => {
        if (d.currentBalance <= 0) return d;

        const monthlyInterestRate = (d.interestRate / 100) / 12;
        const interest = d.currentBalance * monthlyInterestRate;
        let payment = Math.min(d.minPayment, d.currentBalance + interest);
        
        const principalPaid = payment - interest;
        const newBalance = Math.max(0, d.currentBalance - principalPaid);
        
        totalInterest += interest;
        totalPaid += payment;

        monthDetails.push({ name: d.name, interest, principalPaid, newBalance });
        return { ...d, currentBalance: newBalance };
      });

      // 3. Apply extra budget + any leftover minimums from paid off debts
      const target = sortedDebts.find(d => d.currentBalance > 0);
      if (target && monthlyAvailable > 0) {
        const actualDebt = currentDebts.find(d => d.id === target.id)!;
        const extraPayment = Math.min(monthlyAvailable, actualDebt.currentBalance);
        actualDebt.currentBalance -= extraPayment;
        totalPaid += extraPayment;
        
        const detail = monthDetails.find(m => m.name === actualDebt.name);
        if (detail) {
          detail.principalPaid += extraPayment;
          detail.newBalance = actualDebt.currentBalance;
        }
      }

      const totalRemaining = currentDebts.reduce((sum, d) => sum + d.currentBalance, 0);
      
      schedule.push({
        month: monthCount,
        date: addMonths(new Date(), monthCount),
        details: monthDetails,
        totalRemaining
      });

      if (monthCount % 3 === 0 || totalRemaining === 0) {
        chartData.push({
          name: format(addMonths(new Date(), monthCount), 'MMM yy'),
          balance: totalRemaining
        });
      }
    }

    return { schedule, totalInterest, totalPaid, chartData, pieData, monthCount };
  }, [debts, extraBudget, strategy]);

  const handleAdd = () => {
    if (!newDebt.name || newDebt.balance <= 0) {
      toast({ title: "Input Required", description: "Please enter a name and balance.", variant: "destructive" });
      return;
    }
    addDebt(newDebt);
    setNewDebt({ name: '', balance: 0, interestRate: 0, minPayment: 0 });
    toast({ title: "Liability Added" });
  };

  if (!mounted) return null;

  const totalStartingBalance = debts.reduce((sum, d) => sum + d.balance, 0);
  const totalRemainingBalance = payoffAnalysis.schedule.length > 0 ? payoffAnalysis.schedule[0].totalRemaining : totalStartingBalance;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-12 bg-slate-50/50 dark:bg-transparent min-h-screen">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <TrendingDown className="h-10 w-10 text-emerald-600" />
          {t('title')}
        </h1>
        <TrustBadges />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* SIDEBAR: DATA ENTRY */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Card className="shadow-2xl border-2 rounded-[2.5rem] overflow-hidden bg-card">
            <CardHeader className="bg-emerald-600 p-6 text-white">
              <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                <Wallet className="h-5 w-5" /> {t('add_debt')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('name')}</Label>
                  <Input 
                    value={newDebt.name} 
                    onChange={e => setNewDebt({...newDebt, name: e.target.value.toUpperCase()})}
                    placeholder="E.G. PLATINUM CARD"
                    className="font-bold border-2 focus-visible:ring-emerald-500 h-12 rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('balance')}</Label>
                    <Input 
                      type="number" 
                      value={newDebt.balance || ''} 
                      onChange={e => setNewDebt({...newDebt, balance: parseFloat(e.target.value) || 0})}
                      className="font-bold border-2 h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('interest')}</Label>
                    <Input 
                      type="number" 
                      value={newDebt.interestRate || ''} 
                      onChange={e => setNewDebt({...newDebt, interestRate: parseFloat(e.target.value) || 0})}
                      className="font-bold border-2 h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('min_payment')}</Label>
                  <Input 
                    type="number" 
                    value={newDebt.minPayment || ''} 
                    onChange={e => setNewDebt({...newDebt, minPayment: parseFloat(e.target.value) || 0})}
                    className="font-bold border-2 h-12 rounded-xl"
                  />
                </div>
                <Button onClick={handleAdd} className="w-full h-14 font-black uppercase tracking-widest bg-emerald-600 hover:bg-emerald-700 shadow-lg rounded-xl">
                  <Plus className="mr-2 h-5 w-5" /> {t('add_debt')}
                </Button>
              </div>

              <div className="pt-6 border-t border-dashed space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <Label className="text-[10px] font-black uppercase text-emerald-600">{t('extra_budget')}</Label>
                    <span className="text-[10px] font-bold text-muted-foreground">{formatCurrency(extraBudget)}</span>
                  </div>
                  <Input 
                    type="number" 
                    value={extraBudget || ''} 
                    onChange={e => setExtraBudget(parseFloat(e.target.value) || 0)}
                    className="h-14 text-2xl font-black border-2 border-emerald-100 focus-visible:ring-emerald-500 rounded-xl"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('strategy')}</Label>
                  <div className="grid grid-cols-2 gap-2 p-1.5 bg-muted rounded-2xl">
                    <Button 
                      variant={strategy === 'snowball' ? 'default' : 'ghost'} 
                      onClick={() => setStrategy('snowball')}
                      className={cn("text-[10px] font-black uppercase rounded-xl h-10 transition-all", strategy === 'snowball' && "bg-emerald-600 shadow-md")}
                    >
                      Snowball
                    </Button>
                    <Button 
                      variant={strategy === 'avalanche' ? 'default' : 'ghost'} 
                      onClick={() => setStrategy('avalanche')}
                      className={cn("text-[10px] font-black uppercase rounded-xl h-10 transition-all", strategy === 'avalanche' && "bg-emerald-600 shadow-md")}
                    >
                      Avalanche
                    </Button>
                  </div>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase leading-relaxed text-center px-2">
                    {t('strategy_info')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            {debts.map((debt, idx) => (
              <Card key={debt.id} className="border-2 rounded-2xl group hover:border-emerald-500/30 transition-all bg-card overflow-hidden">
                <div className="h-1 w-full" style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }} />
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex-1 overflow-hidden">
                    <h4 className="font-black uppercase text-sm truncate tracking-tight">{debt.name}</h4>
                    <div className="flex gap-3 text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">
                      <span>{formatCurrency(debt.balance)}</span>
                      <span className="opacity-30">•</span>
                      <span className="text-emerald-600">{debt.interestRate}% APR</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-[8px] font-black text-muted-foreground uppercase">Monthly</p>
                      <p className="font-black text-xs">{formatCurrency(debt.minPayment)}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeDebt(debt.id)} className="text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <DataPersistence data={{ debts, extraBudget, strategy }} onRestore={restoreData} fileNamePrefix="versokit-debt-advanced" />
        </div>

        {/* MAIN DASHBOARD: VISUALS */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {debts.length === 0 ? (
            <Card className="h-full border-4 border-dashed flex flex-col items-center justify-center py-32 text-center opacity-40 rounded-[3rem] bg-card">
              <TrendingDown className="h-20 w-20 mb-6 text-emerald-600 animate-pulse" />
              <p className="font-black uppercase tracking-widest text-lg max-w-xs">{t('no_debts')}</p>
            </Card>
          ) : (
            <>
              {/* TOP SUMMARY */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 rounded-[2.5rem] bg-emerald-50 dark:bg-emerald-950/20 text-center p-6 shadow-sm border-emerald-100">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl w-fit mx-auto mb-3 shadow-sm border border-emerald-100">
                    <CalendarDays className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700/60 mb-1">{t('payoff_date')}</p>
                  <p className="text-2xl font-black text-emerald-700 tracking-tighter">
                    {payoffAnalysis.schedule.length > 0 ? format(payoffAnalysis.schedule[payoffAnalysis.schedule.length - 1].date, 'MMM yyyy').toUpperCase() : 'N/A'}
                  </p>
                </Card>

                <Card className="border-2 rounded-[2.5rem] bg-orange-50 dark:bg-orange-950/20 text-center p-6 shadow-sm border-orange-100">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl w-fit mx-auto mb-3 shadow-sm border border-orange-100">
                    <TrendingDown className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-700/60 mb-1">{t('total_interest')}</p>
                  <p className="text-2xl font-black text-orange-700 tracking-tighter">{formatCurrency(payoffAnalysis.totalInterest)}</p>
                </Card>

                <Card className="border-2 rounded-[2.5rem] bg-blue-50 dark:bg-blue-950/20 text-center p-6 shadow-sm border-blue-100">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl w-fit mx-auto mb-3 shadow-sm border border-blue-100">
                    <PiggyBank className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700/60 mb-1">{t('total_paid')}</p>
                  <p className="text-2xl font-black text-blue-700 tracking-tighter">{formatCurrency(payoffAnalysis.totalPaid)}</p>
                </Card>
              </div>

              {/* CHARTS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 rounded-[2.5rem] shadow-xl bg-card overflow-hidden">
                  <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                      <LineIcon className="h-4 w-4 text-emerald-600" /> {t('chart_trend')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={payoffAnalysis.chartData}>
                        <defs>
                          <linearGradient id="colorBal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                        <XAxis dataKey="name" fontSize={9} fontWeight="bold" axisLine={false} tickLine={false} dy={10} />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                          formatter={(val: number) => [formatCurrency(val), 'Remaining']}
                        />
                        <Area type="monotone" dataKey="balance" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorBal)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-2 rounded-[2.5rem] shadow-xl bg-card overflow-hidden">
                  <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                      <PieIcon className="h-4 w-4 text-emerald-600" /> {t('chart_breakdown')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={payoffAnalysis.pieData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {payoffAnalysis.pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '16px', fontWeight: 'bold' }} />
                        <Legend wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* AMORTIZATION TABLE */}
              <Card className="border-2 rounded-[3rem] overflow-hidden shadow-2xl bg-card">
                <CardHeader className="bg-muted/30 border-b flex flex-row items-center justify-between p-8">
                  <div className="space-y-1">
                    <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-emerald-700">
                      <LayoutDashboard className="h-4 w-4" /> {t('schedule')}
                    </CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase tracking-widest">Month-by-month projection</CardDescription>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <Badge className="bg-emerald-600 text-[10px] font-black uppercase">{payoffAnalysis.monthCount} Months Total</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[500px] overflow-auto">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-muted/50 sticky top-0 z-10 border-b">
                        <tr className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                          <th className="p-6">{t('month')}</th>
                          <th className="p-6">Breakdown</th>
                          <th className="p-6 text-right">{t('remaining')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {payoffAnalysis.schedule.map((m: any) => (
                          <tr key={m.month} className="hover:bg-emerald-50/30 transition-colors group">
                            <td className="p-6">
                              <span className="font-black text-sm block group-hover:text-emerald-600">{format(m.date, 'MMM yyyy').toUpperCase()}</span>
                              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">Month #{m.month}</p>
                            </td>
                            <td className="p-6">
                              <div className="space-y-2">
                                {m.details.map((d: any, i: number) => (
                                  <div key={i} className="flex items-center justify-between gap-8">
                                    <div className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }} />
                                      <span className="text-[10px] font-black text-muted-foreground uppercase truncate max-w-[120px]">{d.name}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <span className="text-[10px] font-black text-emerald-600">+{formatCurrency(d.principalPaid)}</span>
                                      <span className="text-[9px] font-medium text-orange-400 opacity-60">-{formatCurrency(d.interest)}i</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="p-6 text-right">
                              <span className="font-black text-lg tracking-tighter tabular-nums">{formatCurrency(m.totalRemaining)}</span>
                              <div className="w-full h-1 bg-muted rounded-full mt-2 overflow-hidden">
                                 <div 
                                  className="h-full bg-emerald-500" 
                                  style={{ width: `${Math.max(0, 100 - (m.totalRemaining / (totalStartingBalance || 1) * 100))}%` }} 
                                 />
                              </div>
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

          {/* FOOTER HINT */}
          <Card className="shadow-md border-2 bg-emerald-50 dark:bg-emerald-950/20 p-8 rounded-[3rem] border-emerald-100">
            <div className="flex gap-4">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm h-fit">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-black uppercase tracking-tight text-sm text-emerald-800 dark:text-emerald-400 mb-1">Local Privacy First</h4>
                <p className="text-[10px] font-bold text-emerald-700/60 dark:text-emerald-500/60 uppercase leading-relaxed tracking-wider">
                  {t('hint')} No financial data is sent to our servers. Your balance history remains entirely on your device.
                </p>
              </div>
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
