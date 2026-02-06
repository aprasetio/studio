
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Plus, 
  Trash2, 
  ChevronLeft, 
  ChevronRight, 
  PlusCircle, 
  ArrowUpCircle, 
  ArrowDownCircle,
  History,
  Receipt,
  Wallet,
  X
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
    new_group: "New Category Group",
    new_item: "New Item",
    transactions: "Transactions",
    add_tx: "Add Transaction",
    date: "Date",
    amount: "Amount",
    desc: "Description",
    save: "Save Transaction",
    cancel: "Cancel",
    payee: "Payee",
    inflow: "Income: Ready to Assign",
    history: "Recent Transactions",
    empty_trans: "No transactions yet",
    payee_placeholder: "Who did you pay?",
    amount_placeholder: "0.00"
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
    new_group: "Grup Kategori Baru",
    new_item: "Item Baru",
    transactions: "Transaksi",
    add_tx: "Tambah Transaksi",
    date: "Tanggal",
    amount: "Jumlah",
    desc: "Keterangan",
    save: "Simpan Transaksi",
    cancel: "Batal",
    payee: "Penerima",
    inflow: "Pendapatan: Siap Alokasi",
    history: "Riwayat Transaksi",
    empty_trans: "Belum ada transaksi",
    payee_placeholder: "Bayar ke siapa?",
    amount_placeholder: "0"
  },
  es: {
    to_be_budgeted: "Por Asignar",
    category: "Categoría",
    budgeted: "Presupuestado",
    activity: "Actividad",
    available: "Disponible",
    add_group: "Añadir Grupo",
    add_item: "Añadir Item",
    total_income: "Ingreso Total",
    all_done: "¡Todo el dinero tiene trabajo!",
    over_budget: "¡Has presupuestado de más!",
    new_group: "Nuevo Grupo de Categoría",
    new_item: "Nuevo Item",
    transactions: "Transacciones",
    add_tx: "Añadir Transacción",
    date: "Fecha",
    amount: "Monto",
    desc: "Descripción",
    save: "Guardar Transacción",
    cancel: "Cancelar",
    payee: "Beneficiario",
    inflow: "Ingreso: Listo para asignar",
    history: "Transacciones Recientes",
    empty_trans: "No hay transacciones aún",
    payee_placeholder: "¿A quién pagaste?",
    amount_placeholder: "0.00"
  },
  pt: {
    to_be_budgeted: "Para Atribuir",
    category: "Categoria",
    budgeted: "Orçado",
    activity: "Atividade",
    available: "Disponível",
    add_group: "Add Grupo",
    add_item: "Add Item",
    total_income: "Renda Total",
    all_done: "Todo o dinheiro tem destino!",
    over_budget: "Você orçou mais do que possui!",
    new_group: "Novo Grupo",
    new_item: "Novo Item",
    transactions: "Transações",
    add_tx: "Add Transação",
    date: "Data",
    amount: "Valor",
    desc: "Descrição",
    save: "Salvar Transação",
    cancel: "Cancelar",
    payee: "Favorecido",
    inflow: "Renda: Pronto para Atribuir",
    history: "Transações Recentes",
    empty_trans: "Sem transações",
    payee_placeholder: "Quem recebeu?",
    amount_placeholder: "0,00"
  },
  de: {
    to_be_budgeted: "Zu verplanen",
    category: "Kategorie",
    budgeted: "Geplant",
    activity: "Aktivität",
    available: "Verfügbar",
    add_group: "Gruppe adden",
    add_item: "Posten adden",
    total_income: "Gesamteinkommen",
    all_done: "Alles verplant!",
    over_budget: "Zu viel geplant!",
    new_group: "Neue Gruppe",
    new_item: "Neuer Posten",
    transactions: "Transaktionen",
    add_tx: "Transaktion adden",
    date: "Datum",
    amount: "Betrag",
    desc: "Beschreibung",
    save: "Speichern",
    cancel: "Abbrechen",
    payee: "Zahlungsempfänger",
    inflow: "Einkommen: Bereit",
    history: "Letzte Transaktionen",
    empty_trans: "Keine Transaktionen",
    payee_placeholder: "An wen?",
    amount_placeholder: "0,00"
  },
  fr: {
    to_be_budgeted: "À budgétiser",
    category: "Catégorie",
    budgeted: "Budgétisé",
    activity: "Activité",
    available: "Disponible",
    add_group: "Ajouter Groupe",
    add_item: "Ajouter Item",
    total_income: "Revenu Total",
    all_done: "Tout est planifié !",
    over_budget: "Dépassement du budget !",
    new_group: "Nouveau Groupe",
    new_item: "Nouvel Item",
    transactions: "Transactions",
    add_tx: "Ajouter Transaction",
    date: "Date",
    amount: "Montant",
    desc: "Description",
    save: "Enregistrer",
    cancel: "Annuler",
    payee: "Bénéficiaire",
    inflow: "Revenu : À assigner",
    history: "Transactions Récentes",
    empty_trans: "Aucune transaction",
    payee_placeholder: "Qui avez-vous payé ?",
    amount_placeholder: "0,00"
  },
  it: {
    to_be_budgeted: "Da Assegnare",
    category: "Categoria",
    budgeted: "Assegnato",
    activity: "Attività",
    available: "Disponibile",
    add_group: "Aggiungi Gruppo",
    add_item: "Aggiungi Voce",
    total_income: "Entrate Totali",
    all_done: "Tutto è assegnato!",
    over_budget: "Hai assegnato troppo!",
    new_group: "Nuovo Gruppo",
    new_item: "Nuova Voce",
    transactions: "Transazioni",
    add_tx: "Aggiungi Transazione",
    date: "Data",
    amount: "Importo",
    desc: "Descrizione",
    save: "Salva",
    cancel: "Annulla",
    payee: "Beneficiario",
    inflow: "Entrate: Da Assegnare",
    history: "Transazioni Recenti",
    empty_trans: "Nessuna transazione",
    payee_placeholder: "Chi hai pagato?",
    amount_placeholder: "0,00"
  }
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
  itemId: string; // "inflow" for income
  payee: string;
  description: string;
}

interface BudgetState {
  income: { [monthKey: string]: number }; // Manual base income
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
  
  // Transaction Modal State
  const [isTxOpen, setIsTxOpen] = useState(false);
  const [newTx, setNewTx] = useState<Partial<Transaction>>({
    date: format(new Date(), 'yyyy-MM-dd'),
    amount: 0,
    itemId: 'inflow',
    payee: '',
    description: ''
  });

  useEffect(() => { setMounted(true); }, []);

  const monthKey = format(currentMonth, 'yyyy-MM');

  // Calculations
  const monthTransactions = useMemo(() => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return state.transactions.filter(tx => {
      const d = new Date(tx.date);
      return isWithinInterval(d, { start, end });
    });
  }, [state.transactions, currentMonth]);

  // Total Income = Manual base income + Inflow transactions for this month
  const baseMonthlyIncome = state.income[monthKey] || 0;
  const inflowFromTransactions = monthTransactions
    .filter(tx => tx.itemId === 'inflow')
    .reduce((sum, tx) => sum + tx.amount, 0);
  
  const totalMonthlyIncome = baseMonthlyIncome + inflowFromTransactions;
  const monthlyBudgets = state.budgets[monthKey] || {};
  
  const totalBudgeted = Object.values(monthlyBudgets).reduce((sum, val) => sum + val, 0);
  const toBeBudgeted = totalMonthlyIncome - totalBudgeted;

  const getItemActivity = (itemId: string) => {
    return monthTransactions
      .filter(tx => tx.itemId === itemId)
      .reduce((sum, tx) => sum + tx.amount, 0);
  };

  // Handlers
  const updateBaseIncome = (val: string) => {
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

  const addTransaction = () => {
    if (!newTx.payee || !newTx.amount) return;
    
    const tx: Transaction = {
      id: Date.now().toString(),
      date: newTx.date!,
      amount: newTx.amount!,
      itemId: newTx.itemId!,
      payee: newTx.payee!,
      description: newTx.description || ''
    };

    setState(prev => ({
      ...prev,
      transactions: [tx, ...prev.transactions]
    }));

    setIsTxOpen(false);
    setNewTx({
      date: format(new Date(), 'yyyy-MM-dd'),
      amount: 0,
      itemId: 'inflow',
      payee: '',
      description: ''
    });
  };

  const deleteTransaction = (id: string) => {
    setState(prev => ({
      ...prev,
      transactions: prev.transactions.filter(t => t.id !== id)
    }));
  };

  if (!mounted) return null;

  const currencySymbol = lang === 'id' ? 'Rp' : '$';
  const locale = lang === 'id' ? 'id-ID' : 'en-US';

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
          "px-8 py-4 rounded-3xl border-4 flex flex-col items-center gap-1 transition-all duration-500 shadow-lg",
          toBeBudgeted === 0 ? "bg-green-500 border-green-600 text-white" : 
          toBeBudgeted > 0 ? "bg-primary text-white border-primary/20" : 
          "bg-destructive border-destructive text-white animate-pulse"
        )}>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{t('to_be_budgeted')}</span>
          <span className="text-4xl font-black tabular-nums">
            {toBeBudgeted.toLocaleString(locale, { style: 'currency', currency: lang === 'id' ? 'IDR' : 'USD', maximumFractionDigits: 0 })}
          </span>
          <p className="text-[9px] font-bold uppercase mt-1">
            {toBeBudgeted === 0 ? t('all_done') : toBeBudgeted < 0 ? t('over_budget') : ''}
          </p>
        </div>

        <div className="flex flex-col gap-3 items-end">
          <Dialog open={isTxOpen} onOpenChange={setIsTxOpen}>
            <DialogTrigger asChild>
              <Button className="h-12 px-6 bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl">
                <Plus className="mr-2 h-5 w-5" /> {t('add_tx')}
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[2rem] sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black uppercase tracking-tighter">{t('add_tx')}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>{t('date')}</Label>
                  <Input 
                    type="date" 
                    value={newTx.date} 
                    onChange={(e) => setNewTx({...newTx, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t('payee')}</Label>
                  <Input 
                    placeholder={t('payee_placeholder')}
                    value={newTx.payee}
                    onChange={(e) => setNewTx({...newTx, payee: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t('category')}</Label>
                  <Select 
                    value={newTx.itemId} 
                    onValueChange={(val) => setNewTx({...newTx, itemId: val})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inflow" className="font-bold text-green-600">{t('inflow')}</SelectItem>
                      {state.groups.map(group => (
                        <React.Fragment key={group.id}>
                          <div className="px-2 py-1.5 text-xs font-black uppercase text-muted-foreground opacity-50">{group.name}</div>
                          {state.items.filter(i => i.groupId === group.id).map(item => (
                            <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                          ))}
                        </React.Fragment>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>{t('amount')} ({currencySymbol})</Label>
                  <Input 
                    type="number" 
                    placeholder={t('amount_placeholder')}
                    value={newTx.amount || ''}
                    onChange={(e) => setNewTx({...newTx, amount: parseFloat(e.target.value) || 0})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t('desc')}</Label>
                  <Input 
                    value={newTx.description}
                    onChange={(e) => setNewTx({...newTx, description: e.target.value})}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={addTransaction} className="w-full h-12 font-black uppercase tracking-widest">{t('save')}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DataControl storageKey="versokit-budget-v1" type="object" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* Budget Table */}
        <div className="lg:col-span-2 space-y-8">
          {state.groups.map(group => (
            <Card key={group.id} className="overflow-hidden border-2 shadow-lg rounded-3xl">
              <CardHeader className="bg-muted/30 py-4 px-6 border-b flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-black uppercase tracking-widest text-primary">{group.name}</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => addItem(group.id)} className="h-8 text-[10px] font-bold uppercase">
                  <Plus className="h-3 w-3 mr-1" /> {t('add_item')}
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b bg-muted/10 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <th className="p-4 text-left">{t('category')}</th>
                        <th className="p-4 text-right w-28">{t('budgeted')}</th>
                        <th className="p-4 text-right w-28">{t('activity')}</th>
                        <th className="p-4 text-right w-28">{t('available')}</th>
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
                                className="h-9 text-right font-bold focus:ring-primary border-none bg-transparent hover:bg-muted/50"
                                placeholder="0"
                              />
                            </td>
                            <td className="p-4 text-right font-medium text-sm tabular-nums text-muted-foreground">
                              {activity > 0 ? `-${activity.toLocaleString()}` : '0'}
                            </td>
                            <td className="p-4 text-right">
                              <span className={cn(
                                "px-3 py-1 rounded-full text-xs font-black tabular-nums shadow-sm",
                                available > 0 ? "bg-green-100 text-green-700 border border-green-200" : 
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
                </div>
              </CardContent>
            </Card>
          ))}

          <Button onClick={addGroup} variant="outline" className="w-full h-16 border-2 border-dashed rounded-3xl font-black uppercase tracking-widest text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all">
            <PlusCircle className="mr-2 h-5 w-5" /> {t('add_group')}
          </Button>
        </div>

        {/* Transaction History */}
        <div className="space-y-6">
          <Card className="shadow-xl border-2 rounded-[2rem] overflow-hidden">
            <CardHeader className="bg-primary p-6 text-white">
              <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                <History className="h-5 w-5" />
                {t('history')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[600px] overflow-y-auto">
                {monthTransactions.length === 0 ? (
                  <div className="py-20 text-center flex flex-col items-center gap-3 opacity-30">
                    <Receipt className="h-12 w-12" />
                    <p className="font-bold uppercase text-xs tracking-widest">{t('empty_trans')}</p>
                  </div>
                ) : (
                  <div className="divide-y">
                    {monthTransactions.map(tx => {
                      const isIncome = tx.itemId === 'inflow';
                      const item = state.items.find(i => i.id === tx.itemId);
                      return (
                        <div key={tx.id} className="p-4 hover:bg-muted/30 transition-colors flex items-center justify-between group">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{format(new Date(tx.date), 'dd MMM')}</span>
                              <h4 className="font-black text-sm uppercase tracking-tight truncate max-w-[150px]">{tx.payee}</h4>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={cn(
                                "text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter",
                                isIncome ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                              )}>
                                {isIncome ? t('inflow').split(':')[0] : item?.name}
                              </span>
                              {tx.description && <p className="text-[10px] text-muted-foreground italic truncate max-w-[100px]">{tx.description}</p>}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={cn(
                              "text-sm font-black tabular-nums",
                              isIncome ? "text-green-600" : "text-foreground"
                            )}>
                              {isIncome ? '+' : '-'}{tx.amount.toLocaleString()}
                            </span>
                            <Button variant="ghost" size="icon" onClick={() => deleteTransaction(tx.id)} className="h-8 w-8 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 bg-primary/5 rounded-[2rem]">
            <CardHeader className="p-6 border-b">
              <CardTitle className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                {t('total_income')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-muted-foreground uppercase">{globalT('base')}</span>
                <Input 
                  type="number" 
                  value={baseMonthlyIncome || ''} 
                  onChange={(e) => updateBaseIncome(e.target.value)}
                  className="w-28 h-8 font-bold text-right border-none bg-transparent"
                  placeholder="0"
                />
              </div>
              <div className="flex items-center justify-between text-green-600">
                <span className="text-xs font-bold uppercase">{globalT('extra')}</span>
                <span className="font-black tabular-nums">+{inflowFromTransactions.toLocaleString()}</span>
              </div>
              <div className="pt-4 border-t-2 border-dashed flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest">TOTAL</span>
                <span className="text-xl font-black tabular-nums">{totalMonthlyIncome.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <SmartAd />
      <SeoContent toolId="budget-planner" />
    </div>
  );
}
