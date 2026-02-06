
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Wallet, 
  Plus, 
  Trash2, 
  ChevronLeft, 
  ChevronRight, 
  PlusCircle, 
  ArrowUpCircle, 
  ArrowDownCircle,
  Info,
  TrendingDown
} from 'lucide-react';
import { DataControl } from '@/components/DataControl';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';
import { cn } from '@/lib/utils';

const UI_TEXT: Record<string, any> = {
  en: {
    to_be_budgeted: "To be Budgeted",
    category: "Category",
    budgeted: "Budgeted",
    activity: "Activity",
    available: "Available",
    add_group: "Add Group",
    add_item: "Add Item",
    total_income: "Total Income",
    all_done: "All money has a job!",
    over_budget: "You've budgeted more than you have!",
    income_placeholder: "Enter monthly income...",
    new_group: "New Category Group",
    new_item: "New Item",
    transactions: "Transactions",
    add_tx: "Add Transaction",
    date: "Date",
    amount: "Amount",
    desc: "Description",
    save: "Save",
    cancel: "Cancel"
  },
  id: {
    to_be_budgeted: "Siap Dianggarkan",
    category: "Kategori",
    budgeted: "Anggaran",
    activity: "Aktivitas",
    available: "Tersedia",
    add_group: "Tambah Grup",
    add_item: "Tambah Item",
    total_income: "Total Pendapatan",
    all_done: "Semua uang sudah dialokasikan!",
    over_budget: "Anggaran melebihi pendapatan!",
    income_placeholder: "Masukkan pendapatan...",
    new_group: "Grup Kategori Baru",
    new_item: "Item Baru",
    transactions: "Transaksi",
    add_tx: "Tambah Transaksi",
    date: "Tanggal",
    amount: "Jumlah",
    desc: "Keterangan",
    save: "Simpan",
    cancel: "Batal"
  }
  // Simplified for brevity, standard fallback to EN for other languages in this MVP
};

interface CategoryGroup {
  id: string;
  name: string;
}

interface BudgetItem {
  id: string;
  groupId: string;
  name: string;
}

interface MonthlyBudget {
  [monthKey: string]: {
    [itemId: string]: number; // Budgeted amount
  };
}

interface Transaction {
  id: string;
  date: string;
  amount: number;
  itemId: string;
  description: string;
}

interface BudgetState {
  income: { [monthKey: string]: number };
  groups: CategoryGroup[];
  items: BudgetItem[];
  budgets: MonthlyBudget;
  transactions: Transaction[];
}

const DEFAULT_STATE: BudgetState = {
  income: {},
  groups: [
    { id: 'g1', name: 'Monthly Bills' },
    { id: 'g2', name: 'Variable Expenses' }
  ],
  items: [
    { id: 'i1', groupId: 'g1', name: 'Rent/Mortgage' },
    { id: 'i2', groupId: 'g1', name: 'Internet' },
    { id: 'i3', groupId: 'g2', name: 'Groceries' },
    { id: 'i4', groupId: 'g2', name: 'Transport' }
  ],
  budgets: {},
  transactions: []
};

export default function BudgetPlannerPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [mounted, setMounted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [state, setState] = useLocalStorage<BudgetState>('versokit-budget-v1', DEFAULT_STATE);

  useEffect(() => { setMounted(true); }, []);

  const monthKey = format(currentMonth, 'yyyy-MM');

  // Calculations
  const monthlyIncome = state.income[monthKey] || 0;
  const monthlyBudgets = state.budgets[monthKey] || {};
  
  const totalBudgeted = Object.values(monthlyBudgets).reduce((sum, val) => sum + val, 0);
  const toBeBudgeted = monthlyIncome - totalBudgeted;

  const monthTransactions = useMemo(() => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return state.transactions.filter(tx => {
      const d = new Date(tx.date);
      return isWithinInterval(d, { start, end });
    });
  }, [state.transactions, currentMonth]);

  const getItemActivity = (itemId: string) => {
    return monthTransactions
      .filter(tx => tx.itemId === itemId)
      .reduce((sum, tx) => sum + tx.amount, 0);
  };

  // Handlers
  const updateIncome = (val: string) => {
    const amount = parseFloat(val) || 0;
    setState(prev => ({
      ...prev,
      income: { ...prev.income, [monthKey]: amount }
    }));
  };

  const updateBudget = (itemId: string, val: string) => {
    const amount = parseFloat(val) || 0;
    setState(prev => ({
      ...prev,
      budgets: {
        ...prev.budgets,
        [monthKey]: { ...prev.budgets[monthKey], [itemId]: amount }
      }
    }));
  };

  const addGroup = () => {
    const name = prompt(t('new_group'));
    if (!name) return;
    setState(prev => ({
      ...prev,
      groups: [...prev.groups, { id: Date.now().toString(), name }]
    }));
  };

  const addItem = (groupId: string) => {
    const name = prompt(t('new_item'));
    if (!name) return;
    setState(prev => ({
      ...prev,
      items: [...prev.items, { id: Date.now().toString(), groupId, name }]
    }));
  };

  const deleteItem = (itemId: string) => {
    if (!confirm('Delete item?')) return;
    setState(prev => ({
      ...prev,
      items: prev.items.filter(i => i.id !== itemId)
    }));
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-6xl mx-auto w-full gap-8">
      {/* Header & Month Selector */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 bg-card p-6 rounded-[2.5rem] shadow-xl border-2">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="text-center min-w-[150px]">
            <h2 className="text-2xl font-black uppercase tracking-tighter">{format(currentMonth, 'MMMM yyyy')}</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className={cn(
          "px-8 py-4 rounded-3xl border-4 flex flex-col items-center gap-1 transition-all duration-500",
          toBeBudgeted === 0 ? "bg-green-500 border-green-600 text-white" : 
          toBeBudgeted > 0 ? "bg-primary text-white border-primary/20" : 
          "bg-destructive border-destructive text-white animate-pulse"
        )}>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{t('to_be_budgeted')}</span>
          <span className="text-4xl font-black tabular-nums">
            {toBeBudgeted.toLocaleString(lang === 'id' ? 'id-ID' : 'en-US', { style: 'currency', currency: lang === 'id' ? 'IDR' : 'USD', maximumFractionDigits: 0 })}
          </span>
          <p className="text-[9px] font-bold uppercase mt-1">
            {toBeBudgeted === 0 ? t('all_done') : toBeBudgeted < 0 ? t('over_budget') : ''}
          </p>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-black uppercase text-muted-foreground">{t('total_income')}</label>
            <Input 
              type="number" 
              value={monthlyIncome || ''} 
              onChange={(e) => updateIncome(e.target.value)}
              className="w-32 h-8 font-bold text-right"
              placeholder="0"
            />
          </div>
          <DataControl storageKey="versokit-budget-v1" type="object" />
        </div>
      </div>

      {/* Budget Table */}
      <div className="w-full space-y-8">
        {state.groups.map(group => (
          <Card key={group.id} className="overflow-hidden border-2 shadow-lg rounded-3xl">
            <CardHeader className="bg-muted/30 py-4 px-6 border-b flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-black uppercase tracking-widest text-primary">{group.name}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => addItem(group.id)} className="h-8 text-[10px] font-bold uppercase">
                <Plus className="h-3 w-3 mr-1" /> {t('add_item')}
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/10 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <th className="p-4 text-left">{t('category')}</th>
                    <th className="p-4 text-right w-32">{t('budgeted')}</th>
                    <th className="p-4 text-right w-32">{t('activity')}</th>
                    <th className="p-4 text-right w-32">{t('available')}</th>
                    <th className="p-4 w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  {state.items.filter(i => i.groupId === group.id).map(item => {
                    const budgeted = monthlyBudgets[item.id] || 0;
                    const activity = getItemActivity(item.id);
                    const available = budgeted - activity;

                    return (
                      <tr key={item.id} className="border-b hover:bg-muted/5 transition-colors group">
                        <td className="p-4 font-bold text-sm uppercase tracking-tight">{item.name}</td>
                        <td className="p-2">
                          <Input 
                            type="number"
                            value={budgeted || ''}
                            onChange={(e) => updateBudget(item.id, e.target.value)}
                            className="h-9 text-right font-bold focus:ring-primary"
                            placeholder="0"
                          />
                        </td>
                        <td className="p-4 text-right font-medium text-sm tabular-nums">
                          {activity > 0 ? `-${activity.toLocaleString()}` : '0'}
                        </td>
                        <td className="p-4 text-right">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-black tabular-nums",
                            available > 0 ? "bg-green-100 text-green-700" : 
                            available < 0 ? "bg-destructive text-destructive-foreground" : 
                            "bg-slate-100 text-slate-400"
                          )}>
                            {available.toLocaleString()}
                          </span>
                        </td>
                        <td className="p-2 text-center">
                          <Button variant="ghost" size="icon" onClick={() => deleteItem(item.id)} className="h-8 w-8 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardContent>
          </Card>
        ))}

        <Button onClick={addGroup} variant="outline" className="w-full h-16 border-2 border-dashed rounded-3xl font-black uppercase tracking-widest text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all">
          <PlusCircle className="mr-2 h-5 w-5" /> {t('add_group')}
        </Button>
      </div>

      <SmartAd />
      <SeoContent toolId="budget-planner" />
    </div>
  );
}
