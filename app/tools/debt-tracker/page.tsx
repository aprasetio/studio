
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  ArrowRight,
  Receipt,
  CircleDollarSign,
  ArrowUpRight,
  ArrowDownRight,
  BadgeAlert
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
import { useDebtTrackerStore, type Debt, type PayoffStrategy, type DebtCategory } from './store';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';
import TrustBadges from '@/components/ui/TrustBadges';
import { DataPersistence } from '@/components/DataPersistence';
import { addMonths, format } from 'date-fns';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CURRENCY_CONFIG: Record<string, { locale: string; currency: string }> = {
  id: { locale: 'id-ID', currency: 'IDR' },
  en: { locale: 'en-US', currency: 'USD' },
  pt: { locale: 'pt-BR', currency: 'BRL' },
  it: { locale: 'it-IT', currency: 'EUR' },
  fr: { locale: 'fr-FR', currency: 'EUR' },
  de: { locale: 'de-DE', currency: 'EUR' },
  es: { locale: 'es-ES', currency: 'EUR' }
};

const CATEGORY_COLORS: Record<DebtCategory, string> = {
  'Credit Card': '#ef4444',
  'Paylater': '#f59e0b',
  'Mortgage': '#3b82f6',
  'Vehicle': '#8b5cf6',
  'Personal Loan': '#ec4899',
  'Friends/Family': '#10b981',
  'Other': '#64748b'
};

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Debt Payoff Tracker Pro",
    tab_cashflow: "1. Cash Flow",
    tab_debts: "2. Liabilities",
    tab_simulation: "3. Simulation",
    income: "Monthly Income",
    side_hustle: "Side Hustle",
    needs: "Basic Needs",
    subscriptions: "Subscriptions",
    surplus: "Monthly Surplus",
    available_for_debt: "Total for Debt",
    accelerator: "Payoff Booster",
    add_debt: "New Liability",
    name: "Debt Name",
    balance: "Balance",
    interest: "APR (%)",
    min_payment: "Min Payment",
    due_date: "Due Date",
    category: "Category",
    strategy: "Strategy",
    snowball: "Snowball (Lowest Balance)",
    avalanche: "Avalanche (Highest Rate)",
    summary: "Financial Roadmap",
    payoff_date: "Freedom Date",
    total_interest: "Total Interest",
    total_paid: "Total Cost",
    schedule: "Payment Schedule",
    month: "Month",
    no_debts: "Add your liabilities to generate a visual roadmap.",
    hint: "Privacy Guaranteed: All calculations are processed locally. No financial data is sent to our servers.",
    chart_trend: "Payoff Trend",
    chart_breakdown: "Debt by Category"
  },
  id: {
    title: "Pelacak Pelunasan Hutang Pro",
    tab_cashflow: "1. Arus Kas",
    tab_debts: "2. Daftar Hutang",
    tab_simulation: "3. Simulasi",
    income: "Penghasilan Tetap",
    side_hustle: "Penghasilan Tambahan",
    needs: "Kebutuhan Pokok",
    subscriptions: "Langganan/Hiburan",
    surplus: "Sisa Saldo Bulanan",
    available_for_debt: "Total Alokasi Hutang",
    accelerator: "Booster Pelunasan",
    add_debt: "Hutang Baru",
    name: "Nama Hutang",
    balance: "Saldo",
    interest: "Bunga Tahunan (%)",
    min_payment: "Bayar Minimum",
    due_date: "Tgl Jatuh Tempo",
    category: "Kategori",
    strategy: "Strategi",
    snowball: "Snowball (Saldo Terkecil)",
    avalanche: "Avalanche (Bunga Tertinggi)",
    summary: "Peta Jalan Keuangan",
    payoff_date: "Tanggal Bebas Hutang",
    total_interest: "Total Bunga",
    total_paid: "Total Pengeluaran",
    schedule: "Jadwal Pembayaran",
    month: "Bulan",
    no_debts: "Tambah hutang Anda untuk melihat peta jalan pelunasan.",
    hint: "Privasi Terjamin: Semua perhitungan diproses secara lokal. Tidak ada data finansial yang dikirim ke server kami.",
    chart_trend: "Tren Penurunan",
    chart_breakdown: "Hutang per Kategori"
  }
};

const CATEGORIES: DebtCategory[] = ['Credit Card', 'Paylater', 'Mortgage', 'Vehicle', 'Personal Loan', 'Friends/Family', 'Other'];

export default function DebtTrackerPage() {
  const { lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];
  
  const { 
    debts, strategy, income, sideHustle, needs, subscriptions,
    addDebt, removeDebt, updateDebt, setStrategy, setCashFlow, resetAll, restoreData 
  } = useDebtTrackerStore();

  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('cashflow');
  const [newDebt, setNewDebt] = useState<Omit<Debt, 'id'>>({ 
    name: '', balance: 0, interestRate: 0, minPayment: 0, category: 'Credit Card', dueDate: 1 
  });

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

  const totalMinPayments = debts.reduce((sum, d) => sum + d.minPayment, 0);
  const totalCashFlow = (income + sideHustle) - (needs + subscriptions);
  const extraAvailableForDebt = Math.max(0, totalCashFlow - totalMinPayments);

  const payoffAnalysis = useMemo(() => {
    if (debts.length === 0) return { schedule: [], totalInterest: 0, totalPaid: 0, chartData: [], pieData: [] };

    let currentDebts = debts.map(d => ({ ...d, currentBalance: d.balance }));
    const schedule = [];
    const chartData = [];
    let totalInterest = 0;
    let totalPaid = 0;
    let monthCount = 0;
    const maxMonths = 600;

    // Initial state
    chartData.push({
      name: format(new Date(), 'MMM yy'),
      balance: currentDebts.reduce((sum, d) => sum + d.currentBalance, 0)
    });

    while (currentDebts.some(d => d.currentBalance > 0) && monthCount < maxMonths) {
      monthCount++;
      let monthlyAccelerator = extraAvailableForDebt;
      const monthDetails: any[] = [];

      // Sort by strategy
      const sortedDebts = [...currentDebts].sort((a, b) => {
        if (strategy === 'snowball') return a.currentBalance - b.currentBalance;
        return b.interestRate - a.interestRate;
      });

      // Apply interest and pay minimums
      currentDebts = currentDebts.map(d => {
        if (d.currentBalance <= 0) return d;

        const monthlyRate = (d.interestRate / 100) / 12;
        const interest = d.currentBalance * monthlyRate;
        let payment = Math.min(d.minPayment, d.currentBalance + interest);
        
        const principalPaid = payment - interest;
        const newBalance = Math.max(0, d.currentBalance - principalPaid);
        
        totalInterest += interest;
        totalPaid += payment;

        monthDetails.push({ name: d.name, interest, principalPaid, newBalance, category: d.category });
        return { ...d, currentBalance: newBalance };
      });

      // Apply accelerator budget
      const target = sortedDebts.find(d => d.currentBalance > 0);
      if (target && monthlyAccelerator > 0) {
        const actualDebt = currentDebts.find(d => d.id === target.id)!;
        const extraPayment = Math.min(monthlyAccelerator, actualDebt.currentBalance);
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

    // Pie Chart Data (Grouped by Category)
    const categoryTotals = debts.reduce((acc, d) => {
      acc[d.category] = (acc[d.category] || 0) + d.balance;
      return acc;
    }, {} as Record<string, number>);

    const pieData = Object.entries(categoryTotals).map(([cat, val]) => ({
      name: cat,
      value: val,
      color: CATEGORY_COLORS[cat as DebtCategory]
    }));

    return { schedule, totalInterest, totalPaid, chartData, pieData, monthCount };
  }, [debts, extraAvailableForDebt, strategy]);

  const handleAddDebt = () => {
    if (!newDebt.name || newDebt.balance <= 0) {
      toast({ title: "Validation Error", description: "Debt name and balance are required.", variant: "destructive" });
      return;
    }
    addDebt(newDebt);
    setNewDebt({ name: '', balance: 0, interestRate: 0, minPayment: 0, category: 'Credit Card', dueDate: 1 });
    toast({ title: "Debt added successfully" });
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8 bg-slate-50/50 dark:bg-transparent min-h-screen">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <TrendingDown className="h-10 w-10 text-emerald-600" />
          {t('title')}
        </h1>
        <TrustBadges />
      </div>

      {/* Refined Top Privacy Banner */}
      <div className="w-full max-w-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/50 rounded-2xl py-3 px-6 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
        <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-[10px] font-black uppercase text-emerald-800 dark:text-emerald-400 whitespace-nowrap">Local Privacy First</span>
          <span className="hidden sm:inline text-emerald-300">|</span>
          <p className="text-[10px] font-bold text-emerald-700/70 dark:text-emerald-500/70 uppercase leading-relaxed tracking-wider">
            {t('hint')}
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-16 bg-white dark:bg-slate-900 border-2 rounded-2xl p-2 shadow-sm">
          <TabsTrigger value="cashflow" className="font-black uppercase text-[10px] tracking-widest rounded-xl data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
            <Wallet className="h-4 w-4 mr-2 hidden sm:inline" /> {t('tab_cashflow')}
          </TabsTrigger>
          <TabsTrigger value="debts" className="font-black uppercase text-[10px] tracking-widest rounded-xl data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
            <Receipt className="h-4 w-4 mr-2 hidden sm:inline" /> {t('tab_debts')}
          </TabsTrigger>
          <TabsTrigger value="simulation" className="font-black uppercase text-[10px] tracking-widest rounded-xl data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
            <LineIcon className="h-4 w-4 mr-2 hidden sm:inline" /> {t('tab_simulation')}
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: CASH FLOW */}
        <TabsContent value="cashflow" className="mt-8 space-y-8 animate-in fade-in slide-in-from-left-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden">
              <CardHeader className="bg-emerald-600 p-6 text-white">
                <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                  <ArrowUpRight className="h-5 w-5" /> Income Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('income')}</Label>
                    <Input type="number" value={income || ''} onChange={e => setCashFlow({ income: parseFloat(e.target.value) || 0 })} className="h-12 font-bold border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('side_hustle')}</Label>
                    <Input type="number" value={sideHustle || ''} onChange={e => setCashFlow({ sideHustle: parseFloat(e.target.value) || 0 })} className="h-12 font-bold border-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden">
              <CardHeader className="bg-red-600 p-6 text-white">
                <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                  <ArrowDownRight className="h-5 w-5" /> Lifestyle Expenses
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('needs')}</Label>
                    <Input type="number" value={needs || ''} onChange={e => setCashFlow({ needs: parseFloat(e.target.value) || 0 })} className="h-12 font-bold border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60 ml-1">{t('subscriptions')}</Label>
                    <Input type="number" value={subscriptions || ''} onChange={e => setCashFlow({ subscriptions: parseFloat(e.target.value) || 0 })} className="h-12 font-bold border-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 border-2 rounded-[2.5rem] p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700/60">{t('surplus')}</p>
                <h3 className="text-4xl font-black text-emerald-700">{formatCurrency(totalCashFlow)}</h3>
              </div>
              <div className="h-12 w-px bg-emerald-200 hidden md:block" />
              <div className="text-center md:text-left space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700/60">Min Debt Obligations</p>
                <h3 className="text-4xl font-black text-blue-700">{formatCurrency(totalMinPayments)}</h3>
              </div>
              <Button onClick={() => setActiveTab('debts')} className="bg-emerald-600 h-16 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-105">
                Setup Debts <ArrowRight className="ml-2" />
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* TAB 2: DEBTS */}
        <TabsContent value="debts" className="mt-8 space-y-8 animate-in fade-in slide-in-from-right-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden sticky top-24">
                <CardHeader className="bg-primary p-6 text-white">
                  <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                    <Receipt className="h-5 w-5" /> {t('add_debt')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60">{t('name')}</Label>
                    <Input value={newDebt.name} onChange={e => setNewDebt({...newDebt, name: e.target.value.toUpperCase()})} placeholder="E.G. BANK BCA" className="font-bold border-2 h-12 rounded-xl" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase opacity-60">{t('category')}</Label>
                      <Select value={newDebt.category} onValueChange={(val: any) => setNewDebt({...newDebt, category: val})}>
                        <SelectTrigger className="h-12 font-bold"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase opacity-60">{t('due_date')}</Label>
                      <Input type="number" min="1" max="31" value={newDebt.dueDate} onChange={e => setNewDebt({...newDebt, dueDate: parseInt(e.target.value) || 1})} className="font-bold h-12" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase opacity-60">{t('balance')}</Label>
                      <Input type="number" value={newDebt.balance || ''} onChange={e => setNewDebt({...newDebt, balance: parseFloat(e.target.value) || 0})} className="font-bold h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase opacity-60">{t('interest')}</Label>
                      <Input type="number" value={newDebt.interestRate || ''} onChange={e => setNewDebt({...newDebt, interestRate: parseFloat(e.target.value) || 0})} className="font-bold h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase opacity-60">{t('min_payment')}</Label>
                    <Input type="number" value={newDebt.minPayment || ''} onChange={e => setNewDebt({...newDebt, minPayment: parseFloat(e.target.value) || 0})} className="font-bold h-12" />
                  </div>
                  <Button onClick={handleAddDebt} className="w-full h-14 font-black uppercase tracking-widest bg-emerald-600 hover:bg-emerald-700 shadow-lg rounded-xl">
                    <Plus className="mr-2 h-5 w-5" /> Add Liability
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {debts.length === 0 ? (
                <div className="h-64 border-4 border-dashed rounded-[3rem] flex flex-col items-center justify-center opacity-20">
                  <Receipt className="h-16 w-16 mb-4" />
                  <p className="font-black uppercase tracking-widest">{t('no_debts')}</p>
                </div>
              ) : (
                debts.map((debt) => (
                  <Card key={debt.id} className="border-2 rounded-3xl group hover:border-emerald-500/30 transition-all bg-card overflow-hidden">
                    <div className="h-1 w-full" style={{ backgroundColor: CATEGORY_COLORS[debt.category] }} />
                    <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[8px] font-black uppercase h-4" style={{ borderColor: CATEGORY_COLORS[debt.category], color: CATEGORY_COLORS[debt.category] }}>{debt.category}</Badge>
                          <h4 className="font-black uppercase text-sm tracking-tight">{debt.name}</h4>
                        </div>
                        <div className="flex gap-4 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                          <span>{formatCurrency(debt.balance)}</span>
                          <span className="opacity-30">•</span>
                          <span className="text-emerald-600">{debt.interestRate}% APR</span>
                          <span className="opacity-30">•</span>
                          <span>Due: Day {debt.dueDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-[8px] font-black text-muted-foreground uppercase">Monthly Min</p>
                          <p className="font-black text-xs">{formatCurrency(debt.minPayment)}</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => removeDebt(debt.id)} className="text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full h-10 w-10">
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
              {debts.length > 0 && (
                <Button onClick={() => setActiveTab('simulation')} className="w-full h-16 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-[2rem] shadow-xl mt-4">
                  Go to Simulation <ArrowRight className="ml-2" />
                </Button>
              )}
            </div>
          </div>
        </TabsContent>

        {/* TAB 3: SIMULATION */}
        <TabsContent value="simulation" className="mt-8 space-y-8 animate-in zoom-in-95 duration-500">
          {debts.length === 0 ? (
            <Card className="h-full border-4 border-dashed flex flex-col items-center justify-center py-32 text-center opacity-40 rounded-[3rem] bg-card">
              <TrendingDown className="h-20 w-20 mb-6 text-emerald-600 animate-pulse" />
              <p className="font-black uppercase tracking-widest text-lg max-w-xs">{t('no_debts')}</p>
            </Card>
          ) : (
            <>
              {/* ACCELERATOR WARNING */}
              {extraAvailableForDebt <= 0 && (
                <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-3xl flex items-center gap-4 text-orange-800">
                  <BadgeAlert className="h-8 w-8 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-black uppercase text-xs">Insufficient Cash Flow Surplus</p>
                    <p className="text-xs font-medium leading-relaxed opacity-80">You don't have enough surplus to accelerate payoff. Your schedule is based on minimum payments only. Consider increasing income or reducing expenses.</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* STRATEGY CARD */}
                <Card className="shadow-xl border-2 rounded-[2.5rem] bg-card overflow-hidden">
                  <CardHeader className="bg-slate-900 text-white p-6">
                    <CardTitle className="text-sm font-black uppercase tracking-widest">{t('strategy')}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-1 gap-2 p-1.5 bg-muted rounded-2xl">
                      <Button variant={strategy === 'snowball' ? 'default' : 'ghost'} onClick={() => setStrategy('snowball')} className={cn("text-[10px] font-black uppercase rounded-xl h-12 transition-all", strategy === 'snowball' && "bg-emerald-600 shadow-md")}>Snowball</Button>
                      <Button variant={strategy === 'avalanche' ? 'default' : 'ghost'} onClick={() => setStrategy('avalanche')} className={cn("text-[10px] font-black uppercase rounded-xl h-12 transition-all", strategy === 'avalanche' && "bg-emerald-600 shadow-md")}>Avalanche</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-100">
                      <div className="space-y-1">
                        <p className="text-[8px] font-black uppercase text-emerald-600">{t('accelerator')}</p>
                        <p className="text-xl font-black text-emerald-700">{formatCurrency(extraAvailableForDebt)}</p>
                      </div>
                      <PiggyBank className="h-8 w-8 text-emerald-600 opacity-40" />
                    </div>
                  </CardContent>
                </Card>

                {/* SUMMARY STATS */}
                <Card className="shadow-xl border-2 rounded-[2.5rem] bg-emerald-600 text-white p-8 flex flex-col justify-center items-center text-center gap-2">
                  <CalendarDays className="h-8 w-8 mb-2 opacity-40" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">{t('payoff_date')}</p>
                  <h3 className="text-5xl font-black tracking-tighter">
                    {payoffAnalysis.schedule.length > 0 ? format(payoffAnalysis.schedule[payoffAnalysis.schedule.length - 1].date, 'MMM yyyy').toUpperCase() : 'N/A'}
                  </h3>
                  <Badge className="bg-white/20 text-[10px] font-black uppercase mt-2">{payoffAnalysis.monthCount} Months to Freedom</Badge>
                </Card>

                <Card className="shadow-xl border-2 rounded-[2.5rem] bg-white p-8 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-[9px] font-black uppercase text-muted-foreground mb-1">{t('total_interest')}</p>
                      <p className="text-2xl font-black text-orange-600">{formatCurrency(payoffAnalysis.totalInterest)}</p>
                    </div>
                    <div className="h-px bg-muted" />
                    <div>
                      <p className="text-[9px] font-black uppercase text-muted-foreground mb-1">{t('total_paid')}</p>
                      <p className="text-2xl font-black text-slate-900">{formatCurrency(payoffAnalysis.totalPaid)}</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* CHARTS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="shadow-2xl border-2 rounded-[3rem] overflow-hidden bg-white">
                  <CardHeader className="p-8 border-b bg-muted/10">
                    <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                      <LineIcon className="h-4 w-4 text-emerald-600" /> {t('chart_trend')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={payoffAnalysis.chartData}>
                        <defs>
                          <linearGradient id="colorPremium" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                        <XAxis dataKey="name" fontSize={9} fontWeight="bold" axisLine={false} tickLine={false} dy={10} />
                        <YAxis hide />
                        <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', fontWeight: 'bold' }} />
                        <Area type="monotone" dataKey="balance" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorPremium)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl border-2 rounded-[3rem] overflow-hidden bg-white">
                  <CardHeader className="p-8 border-b bg-muted/10">
                    <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                      <PieIcon className="h-4 w-4 text-emerald-600" /> {t('chart_breakdown')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={payoffAnalysis.pieData} innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                          {payoffAnalysis.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '20px', fontWeight: 'bold' }} />
                        <Legend wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* AMORTIZATION */}
              <Card className="shadow-2xl border-2 rounded-[3rem] overflow-hidden bg-white">
                <CardHeader className="bg-slate-900 text-white p-8">
                  <CardTitle className="text-sm font-black uppercase tracking-widest">{t('schedule')}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-auto">
                    <table className="w-full text-left">
                      <thead className="bg-muted/50 sticky top-0 z-10 border-b">
                        <tr className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                          <th className="p-6">{t('month')}</th>
                          <th className="p-6">Allocation Breakdown</th>
                          <th className="p-6 text-right">Remaining Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {payoffAnalysis.schedule.slice(0, 100).map((m: any) => (
                          <tr key={m.month} className="hover:bg-slate-50 transition-colors">
                            <td className="p-6">
                              <span className="font-black text-sm block">{format(m.date, 'MMM yyyy').toUpperCase()}</span>
                              <p className="text-[9px] font-bold text-muted-foreground uppercase opacity-60">Month #{m.month}</p>
                            </td>
                            <td className="p-6">
                              <div className="space-y-2">
                                {m.details.map((d: any, i: number) => (
                                  <div key={i} className="flex items-center justify-between gap-8">
                                    <div className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[d.category as DebtCategory] }} />
                                      <span className="text-[10px] font-black text-muted-foreground uppercase truncate max-w-[120px]">{d.name}</span>
                                    </div>
                                    <span className="text-[10px] font-black text-emerald-600">+{formatCurrency(d.principalPaid)}</span>
                                  </div>
                                ))}
                              </div>
                            </td>
                            <td className="p-6 text-right">
                              <span className="font-black text-lg tabular-nums">{formatCurrency(m.totalRemaining)}</span>
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
        </TabsContent>
      </Tabs>

      <div className="w-full max-w-xl mx-auto mt-12">
        <DataPersistence 
          data={{ debts, income, sideHustle, needs, subscriptions, strategy }} 
          onRestore={restoreData} 
          fileNamePrefix="versokit-debt-pro" 
        />
      </div>

      <ArticleSection toolId="debt-tracker" />
      <SmartAd />
      <SeoContent toolId="debt-tracker" hidePrivacy={true} />
    </div>
  );
}
