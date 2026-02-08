'use client';

import React, { useState, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Plus, 
  Trash2, 
  History,
  Receipt,
  Wallet,
  X,
  Database,
  Calculator,
  PieChart as PieChartIcon,
  Download,
  AlertCircle,
  ArrowRightLeft
} from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArticleSection } from '@/components/ArticleSection';
import { SmartAd } from '@/components/smart-ad';
import { SeoContent } from '@/components/SeoContent';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useBudgetStore, type TransactionType, type Category } from './store';
import TrustBadges from '@/components/ui/TrustBadges';
import { DataPersistence } from '@/components/DataPersistence';
import Papa from 'papaparse';
import { toast } from '@/hooks/use-toast';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Budget Planner",
    to_be_budgeted: "Ready to Budget",
    category: "Category",
    budgeted: "Assigned",
    activity: "Activity",
    available: "Available",
    add_item: "Add Item",
    total_income: "Income Summary",
    all_done: "All money has a job!",
    over_budget: "You've assigned more than you have!",
    new_item: "New Item Name",
    transactions: "Transactions",
    add_tx: "Record Transaction",
    date: "Date",
    amount: "Amount",
    desc: "Note",
    save: "Save",
    payee: "Payee",
    history: "Recent History",
    empty_trans: "No transactions yet",
    base_income: "Manual Base Income",
    inflow: "Inflow Transactions",
    cover: "Cover",
    cover_title: "Cover Overspending",
    move_from: "Cover from:",
    move_btn: "Move Money",
    export_csv: "Export CSV"
  },
  id: {
    title: "Perencana Anggaran",
    to_be_budgeted: "Siap Dianggarkan",
    category: "Kategori",
    budgeted: "Anggaran",
    activity: "Aktivitas",
    available: "Tersedia",
    add_item: "Tambah Item",
    total_income: "Ringkasan Pendapatan",
    all_done: "Semua uang sudah dialokasikan!",
    over_budget: "Anggaran melebihi pendapatan!",
    new_item: "Nama Item Baru",
    transactions: "Transaksi",
    add_tx: "Catat Transaksi",
    date: "Tanggal",
    amount: "Jumlah",
    desc: "Catatan",
    save: "Simpan",
    payee: "Penerima",
    history: "Riwayat Terkini",
    empty_trans: "Belum ada transaksi",
    base_income: "Pendapatan Dasar",
    inflow: "Transaksi Masuk",
    cover: "Tutup",
    cover_title: "Tutup Overspending",
    move_from: "Ambil dana dari:",
    move_btn: "Pindahkan Dana",
    export_csv: "Ekspor CSV"
  }
};

const LOCALES: Record<string, string> = { 
  en: 'en-US', id: 'id-ID', de: 'de-DE', es: 'es-ES', pt: 'pt-BR', fr: 'fr-FR', it: 'it-IT' 
};
const CURRENCIES: Record<string, string> = { 
  en: 'USD', id: 'IDR', de: 'EUR', es: 'EUR', pt: 'BRL', fr: 'EUR', it: 'EUR' 
};

export default function BudgetPlannerPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [mounted, setMounted] = useState(false);
  const { 
    income, toBeBudgeted, categories, transactions, 
    setIncome, addCategory, deleteCategory, updateCategoryAssignment, addTransaction, deleteTransaction, resetMonth, moveMoney, restoreData
  } = useBudgetStore();

  const [isTxOpen, setIsTxOpen] = useState(false);
  const [newTx, setNewTx] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    amount: 0,
    categoryId: '',
    payee: '',
    note: '',
    type: 'expense' as TransactionType
  });

  const [coveringCategory, setCoveringCategory] = useState<Category | null>(null);
  const [sourceCategoryId, setSourceCategoryId] = useState<string>('');

  useEffect(() => { setMounted(true); }, []);

  const formatValue = (val: number) => {
    return new Intl.NumberFormat(LOCALES[lang] || 'en-US', {
      style: 'currency',
      currency: CURRENCIES[lang] || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  const inflowTotal = transactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const baseIncomeValue = income - inflowTotal;

  const handleExportCSV = () => {
    const csvData = categories.map(c => ({
      [t('category')]: c.name,
      [t('budgeted')]: c.assigned,
      [t('activity')]: c.activity,
      [t('available')]: c.assigned + c.activity
    }));
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `budget-export-${format(new Date(), 'yyyy-MM-dd')}.csv`);
    link.click();
  };

  const handleCoverOverspending = () => {
    if (!coveringCategory || !sourceCategoryId) return;
    const amountToCover = Math.abs(coveringCategory.assigned + coveringCategory.activity);
    moveMoney(sourceCategoryId, coveringCategory.id, amountToCover);
    setCoveringCategory(null);
    setSourceCategoryId('');
    toast({ title: lang === 'id' ? "Dana berhasil dipindahkan" : "Money moved successfully" });
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Calculator className="h-8 w-8 text-primary" />
          {t('title')}
        </h1>
        <TrustBadges />
      </div>

      {/* Header Summary */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 bg-card p-6 rounded-[2.5rem] shadow-xl border-2">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{t('total_income')}</span>
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            <span className="text-2xl font-black">{formatValue(income)}</span>
          </div>
        </div>

        <div className={cn(
          "px-10 py-6 rounded-3xl border-4 flex flex-col items-center gap-1 transition-all duration-500 shadow-lg",
          toBeBudgeted === 0 ? "bg-green-500 border-green-600 text-white" : 
          toBeBudgeted > 0 ? "bg-primary text-white border-primary/20" : 
          "bg-destructive border-destructive text-white animate-pulse"
        )}>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{t('to_be_budgeted')}</span>
          <span className="text-4xl font-black tabular-nums">
            {formatValue(toBeBudgeted)}
          </span>
          <p className="text-[9px] font-bold uppercase mt-1">
            {toBeBudgeted === 0 ? t('all_done') : toBeBudgeted < 0 ? t('over_budget') : ''}
          </p>
        </div>

        <div className="flex gap-2">
          <Dialog open={isTxOpen} onOpenChange={setIsTxOpen}>
            <DialogTrigger asChild>
              <Button className="h-14 px-8 bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl">
                <Plus className="mr-2 h-5 w-5" /> {t('add_tx')}
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[2rem] sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black uppercase tracking-tighter">{t('add_tx')}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-2 p-1 bg-muted rounded-xl">
                  <Button 
                    variant={newTx.type === 'expense' ? 'default' : 'ghost'} 
                    onClick={() => setNewTx({...newTx, type: 'expense'})}
                    className="rounded-lg font-bold"
                  >
                    Expense
                  </Button>
                  <Button 
                    variant={newTx.type === 'income' ? 'default' : 'ghost'} 
                    onClick={() => setNewTx({...newTx, type: 'income'})}
                    className="rounded-lg font-bold"
                  >
                    Inflow
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>{t('date')}</Label>
                  <Input type="date" value={newTx.date} onChange={(e) => setNewTx({...newTx, date: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>{t('payee')}</Label>
                  <Input value={newTx.payee} onChange={(e) => setNewTx({...newTx, payee: e.target.value})} placeholder="Netflix, McD, etc..." />
                </div>
                {newTx.type === 'expense' && (
                  <div className="space-y-2">
                    <Label>{t('category')}</Label>
                    <Select value={newTx.categoryId} onValueChange={(val) => setNewTx({...newTx, categoryId: val})}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {categories.map(c => (
                          <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <div className="space-y-2">
                  <Label>{t('amount')}</Label>
                  <Input type="number" value={newTx.amount || ''} onChange={(e) => setNewTx({...newTx, amount: parseFloat(e.target.value) || 0})} />
                </div>
                <div className="space-y-2">
                  <Label>{t('desc')}</Label>
                  <Input value={newTx.note} onChange={(e) => setNewTx({...newTx, note: e.target.value})} />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => {
                  if (newTx.type === 'expense' && !newTx.categoryId) {
                    toast({ title: "Select a category", variant: "destructive" });
                    return;
                  }
                  addTransaction(newTx);
                  setIsTxOpen(false);
                  setNewTx({ ...newTx, payee: '', amount: 0, note: '', categoryId: '' });
                }} className="w-full h-12 font-black uppercase tracking-widest">{t('save')}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* Category Groups */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="overflow-hidden border-2 shadow-lg rounded-[2.5rem]">
            <CardHeader className="bg-muted/30 py-4 px-8 border-b flex flex-col sm:flex-row items-center justify-between gap-4">
              <CardTitle className="text-sm font-black uppercase tracking-widest text-primary">Budget Categories</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleExportCSV} className="h-8 text-[10px] font-bold uppercase border-2">
                  <Download className="h-3 w-3 mr-1" /> {t('export_csv')}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => {
                  const name = window.prompt(t('new_item'));
                  if (name) addCategory(name, 'needs');
                }} className="h-8 text-[10px] font-bold uppercase">
                  <Plus className="h-3 w-3 mr-1" /> {t('add_item')}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-muted/10 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      <th className="p-6 text-left min-w-[180px] sticky left-0 bg-card z-10">{t('category')}</th>
                      <th className="p-6 text-right min-w-[160px]">{t('budgeted')}</th>
                      <th className="p-6 text-right min-w-[140px]">{t('activity')}</th>
                      <th className="p-6 text-right min-w-[140px]">{t('available')}</th>
                      <th className="p-6 w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {categories.map(category => {
                      const available = category.assigned + category.activity;
                      return (
                        <tr key={category.id} className="hover:bg-muted/5 transition-colors group">
                          <td className="p-6 sticky left-0 bg-card z-10 border-r md:border-r-0">
                            <p className="font-black text-sm uppercase tracking-tight truncate max-w-[150px] md:max-w-none">{category.name}</p>
                            <span className="text-[9px] font-bold text-muted-foreground uppercase opacity-60">{category.type}</span>
                          </td>
                          <td className="p-4 align-middle">
                            <div className="relative group/input flex justify-end">
                              <input 
                                type="number"
                                value={category.assigned === 0 ? '' : category.assigned}
                                onChange={(e) => updateCategoryAssignment(category.id, parseFloat(e.target.value) || 0)}
                                className="w-full h-10 bg-muted/20 border-b-2 border-transparent hover:border-muted-foreground/30 focus:border-primary rounded-lg text-right font-mono font-black px-3 focus:outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                placeholder="0"
                              />
                            </div>
                          </td>
                          <td className="p-6 text-right font-bold text-sm tabular-nums text-muted-foreground/60">
                            {category.activity !== 0 ? formatValue(category.activity) : '—'}
                          </td>
                          <td className="p-6 text-right">
                            <div className="flex flex-col items-end gap-1">
                              <span className={cn(
                                "text-sm font-black tabular-nums transition-colors",
                                available > 0 ? "text-emerald-600" : 
                                available < 0 ? "text-red-500 animate-pulse" : 
                                "text-gray-400"
                              )}>
                                {formatValue(available)}
                              </span>
                              {available < 0 && (
                                <Button 
                                  size="sm" 
                                  variant="destructive" 
                                  className="h-5 px-2 text-[8px] font-black uppercase tracking-tighter"
                                  onClick={() => setCoveringCategory(category)}
                                >
                                  {t('cover')}
                                </Button>
                              )}
                            </div>
                          </td>
                          <td className="p-2 text-center">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => { if(confirm(globalT('delete') + '?')) deleteCategory(category.id) }}
                              className="h-8 w-8 text-red-400 hover:text-red-600 transition-all"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-2 bg-primary/5 rounded-[2rem] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-xl text-primary"><Wallet className="h-5 w-5" /></div>
                <h3 className="font-black uppercase text-sm tracking-widest">{t('total_income')}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-muted-foreground uppercase">{t('base_income')}</span>
                  <div className="relative w-32">
                    <input 
                      type="number" 
                      value={baseIncomeValue || ''} 
                      onChange={(e) => setIncome((parseFloat(e.target.value) || 0) + inflowTotal)}
                      className="w-full h-8 bg-transparent text-right font-black border-b border-dashed focus:outline-none focus:border-primary"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-green-600 uppercase">{t('inflow')}</span>
                  <span className="font-black text-green-600">+{formatValue(inflowTotal)}</span>
                </div>
                <div className="pt-3 border-t border-dashed flex justify-between items-center">
                  <span className="text-xs font-black uppercase">TOTAL</span>
                  <span className="text-xl font-black">{formatValue(income)}</span>
                </div>
              </div>
            </Card>

            <Card className="shadow-lg border-2 rounded-[2rem] p-6 flex flex-col justify-center items-center gap-4 text-center">
              <PieChartIcon className="h-10 w-10 text-muted-foreground opacity-20" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Budget Method</p>
                <h4 className="text-lg font-black uppercase tracking-tight">Zero-Based Envelope</h4>
              </div>
              <p className="text-[9px] font-medium text-muted-foreground uppercase leading-relaxed">
                Give every money a job. If "Ready to Budget" is green, assign it! If red, move money between categories.
              </p>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden">
            <CardHeader className="bg-primary p-6 text-white">
              <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                <History className="h-5 w-5" />
                {t('history')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[500px] overflow-y-auto">
                {transactions.length === 0 ? (
                  <div className="py-20 text-center flex flex-col items-center gap-3 opacity-30">
                    <Receipt className="h-12 w-12" />
                    <p className="font-bold uppercase text-xs tracking-widest">{t('empty_trans')}</p>
                  </div>
                ) : (
                  <div className="divide-y">
                    {transactions.map(tx => (
                      <div key={tx.id} className="p-4 hover:bg-muted/30 transition-colors flex items-center justify-between group">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{format(new Date(tx.date), 'dd MMM')}</span>
                            <h4 className="font-black text-sm uppercase tracking-tight truncate max-w-[120px]">{tx.payee}</h4>
                          </div>
                          <div className="flex gap-2">
                            {tx.type === 'income' ? (
                              <Badge className="bg-green-100 text-green-700 text-[8px] uppercase h-4">Inflow</Badge>
                            ) : (
                              <Badge variant="outline" className="text-[8px] uppercase h-4 opacity-60">
                                {categories.find(c => c.id === tx.categoryId)?.name}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={cn(
                            "text-sm font-black tabular-nums",
                            tx.type === 'income' ? "text-green-600" : "text-foreground"
                          )}>
                            {tx.type === 'income' ? '+' : '-'}{formatValue(tx.amount)}
                          </span>
                          <Button variant="ghost" size="icon" onClick={() => deleteTransaction(tx.id)} className="h-8 w-8 text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <DataPersistence 
            data={{ income, categories, transactions }} 
            onRestore={(data) => restoreData(data)} 
            fileNamePrefix="versokit-budget" 
          />

          <Card className="bg-card border-2 rounded-[2rem] p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 border-b pb-4">
              <Database className="h-5 w-5 text-primary" />
              <h3 className="font-black uppercase tracking-tight text-sm">System</h3>
            </div>
            <Button 
              variant="outline" 
              onClick={() => { if(confirm(globalT('reset') + '?')) resetMonth() }}
              className="w-full h-12 font-black uppercase tracking-widest text-[10px] text-destructive hover:bg-red-50 border-2"
            >
              <X className="mr-2 h-4 w-4" /> Reset Budget Data
            </Button>
          </Card>
        </div>
      </div>

      {/* Cover Overspending Dialog */}
      <Dialog open={!!coveringCategory} onOpenChange={(open) => !open && setCoveringCategory(null)}>
        <DialogContent className="rounded-3xl max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 uppercase font-black tracking-tight">
              <AlertCircle className="h-5 w-5 text-red-500" />
              {t('cover_title')}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-6">
            <div className="p-4 bg-red-50 rounded-2xl border-2 border-red-100 text-center">
              <p className="text-[10px] font-black uppercase text-red-400 tracking-widest mb-1">{coveringCategory?.name}</p>
              <p className="text-2xl font-black text-red-600">
                {coveringCategory ? formatValue(Math.abs(coveringCategory.assigned + coveringCategory.activity)) : ''}
              </p>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase opacity-60">{t('move_from')}</Label>
              <Select value={sourceCategoryId} onValueChange={setSourceCategoryId}>
                <SelectTrigger className="h-12 font-bold rounded-xl border-2">
                  <SelectValue placeholder={lang === 'id' ? 'Pilih sumber dana' : 'Select funding source'} />
                </SelectTrigger>
                <SelectContent>
                  {categories
                    .filter(c => c.id !== coveringCategory?.id && (c.assigned + c.activity) > 0)
                    .map(c => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.name} ({formatValue(c.assigned + c.activity)})
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full h-14 bg-primary text-primary-foreground font-black uppercase tracking-widest rounded-2xl shadow-xl disabled:opacity-50"
              disabled={!sourceCategoryId}
              onClick={handleCoverOverspending}
            >
              <ArrowRightLeft className="mr-2 h-5 w-5" />
              {t('move_btn')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <ArticleSection toolId="budget-planner" />
      <SmartAd />
      <SeoContent toolId="budget-planner" />
    </div>
  );
}
