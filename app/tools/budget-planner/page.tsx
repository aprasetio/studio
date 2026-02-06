
'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
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
  History,
  Receipt,
  Wallet,
  X,
  PieChart as PieChartIcon,
  Download,
  Upload,
  Settings2,
  CalendarClock,
  BellRing,
  CheckCircle2
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
import { format, addMonths, addWeeks, subMonths, startOfMonth, endOfMonth, isWithinInterval, isBefore, parseISO } from 'date-fns';
import { cn } from '@/lib/utils';
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { toast } from '@/hooks/use-toast';

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
    amount_placeholder: "0.00",
    analysis_title: "Spending Analysis",
    export_json: "Backup JSON",
    import_json: "Restore JSON",
    import_warn: "This will overwrite all budget data. Continue?",
    no_data: "No spending data this month",
    recurring_btn: "Recurring Bills",
    frequency: "Frequency",
    monthly: "Monthly",
    weekly: "Weekly",
    next_due: "Next Due",
    pending_alert: "You have pending recurring bills.",
    process_all: "Process All",
    rule_added: "Recurring rule added",
    manage_recurring: "Manage Recurring",
    add_rule: "Add Rule"
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
    amount_placeholder: "0",
    analysis_title: "Analisa Pengeluaran",
    export_json: "Simpan Backup",
    import_json: "Buka Backup",
    import_warn: "Ini akan menimpa seluruh data anggaran. Lanjutkan?",
    no_data: "Belum ada data pengeluaran bulan ini",
    recurring_btn: "Tagihan Rutin",
    frequency: "Frekuensi",
    monthly: "Bulanan",
    weekly: "Mingguan",
    next_due: "Jadwal Berikutnya",
    pending_alert: "Ada tagihan rutin jatuh tempo.",
    process_all: "Proses Semua",
    rule_added: "Jadwal rutin ditambahkan",
    manage_recurring: "Kelola Rutin",
    add_rule: "Tambah Jadwal"
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
    new_group: "Nuevo Grupo",
    new_item: "Nuevo Item",
    transactions: "Transacciones",
    add_tx: "Añadir Transacción",
    date: "Fecha",
    amount: "Monto",
    desc: "Descripción",
    save: "Guardar",
    cancel: "Cancelar",
    payee: "Beneficiario",
    inflow: "Ingreso: Listo para asignar",
    history: "Recientes",
    empty_trans: "Sin transacciones",
    payee_placeholder: "¿A quién pagaste?",
    amount_placeholder: "0.00",
    analysis_title: "Análisis de Gastos",
    export_json: "Respaldar JSON",
    import_json: "Restaurar JSON",
    import_warn: "Esto sobrescribirá todos los datos. ¿Continuar?",
    no_data: "Sin datos este mes",
    recurring_btn: "Facturas Recurrentes",
    frequency: "Frecuencia",
    monthly: "Mensual",
    weekly: "Semanal",
    next_due: "Próximo Vencimiento",
    pending_alert: "Tienes facturas recurrentes pendientes.",
    process_all: "Procesar Todo",
    rule_added: "Regla recurrente añadida",
    manage_recurring: "Gestionar Recurrentes",
    add_rule: "Añadir Regla"
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
    save: "Salvar",
    cancel: "Cancelar",
    payee: "Favorecido",
    inflow: "Renda: Pronto para Atribuir",
    history: "Recentes",
    empty_trans: "Sem transações",
    payee_placeholder: "Quem recebeu?",
    amount_placeholder: "0,00",
    analysis_title: "Análise de Gastos",
    export_json: "Exportar JSON",
    import_json: "Importar JSON",
    import_warn: "Isso irá sobrescrever todos os dados. Continuar?",
    no_data: "Sem gastos este mês",
    recurring_btn: "Contas Recorrentes",
    frequency: "Frequência",
    monthly: "Mensal",
    weekly: "Semanal",
    next_due: "Próximo Vencimento",
    pending_alert: "Você tem contas recorrentes pendentes.",
    process_all: "Processar Tudo",
    rule_added: "Regra recorrente adicionada",
    manage_recurring: "Gerenciar Recorrentes",
    add_rule: "Add Regra"
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
    history: "Verlauf",
    empty_trans: "Keine Transaktionen",
    payee_placeholder: "An wen?",
    amount_placeholder: "0,00",
    analysis_title: "Ausgaben-Analyse",
    export_json: "JSON Backup",
    import_json: "JSON Restore",
    import_warn: "Dies wird alle Daten überschreiben. Fortfahren?",
    no_data: "Keine Daten diesen Monat",
    recurring_btn: "Wiederkehrende Rechnungen",
    frequency: "Häufigkeit",
    monthly: "Monatlich",
    weekly: "Wöchentlich",
    next_due: "Nächste Fälligkeit",
    pending_alert: "Sie haben ausstehende wiederkehrende Rechnungen.",
    process_all: "Alle verarbeiten",
    rule_added: "Wiederkehrende Regel hinzugefügt",
    manage_recurring: "Wiederkehrende verwalten",
    add_rule: "Regel hinzufügen"
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
    history: "Récent",
    empty_trans: "Aucune transaction",
    payee_placeholder: "Qui avez-vous payé ?",
    amount_placeholder: "0,00",
    analysis_title: "Analyse des Dépenses",
    export_json: "Sauvegarde JSON",
    import_json: "Restaurer JSON",
    import_warn: "Cela écrasera toutes les données. Continuer ?",
    no_data: "Aucune dépense ce mois",
    recurring_btn: "Factures Récurrentes",
    frequency: "Fréquence",
    monthly: "Mensuel",
    weekly: "Hebdomadaire",
    next_due: "Prochaine Échéance",
    pending_alert: "Vous avez des factures récurrentes en attente.",
    process_all: "Tout traiter",
    rule_added: "Règle récurrente ajoutée",
    manage_recurring: "Gérer Récurrents",
    add_rule: "Ajouter Règle"
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
    history: "Recenti",
    empty_trans: "Nessuna transazione",
    payee_placeholder: "Chi hai pagato?",
    amount_placeholder: "0,00",
    analysis_title: "Analisi Spese",
    export_json: "Backup JSON",
    import_json: "Ripristina JSON",
    import_warn: "Questo sovrascriverà tutti i dati. Continuare?",
    no_data: "Nessuna spesa questo mese",
    recurring_btn: "Spese Ricorrenti",
    frequency: "Frequenza",
    monthly: "Mensile",
    weekly: "Settimanale",
    next_due: "Prossima Scadenza",
    pending_alert: "Hai spese ricorrenti in sospeso.",
    process_all: "Elabora Tutto",
    rule_added: "Regola ricorrente aggiunta",
    manage_recurring: "Gestisci Ricorrenti",
    add_rule: "Aggiungi Regola"
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

interface RecurringRule {
  id: string;
  payee: string;
  itemId: string;
  amount: number;
  description: string;
  frequency: 'weekly' | 'monthly';
  nextDueDate: string; // YYYY-MM-DD
}

interface BudgetState {
  income: { [monthKey: string]: number }; // Manual base income
  groups: CategoryGroup[];
  items: BudgetItem[];
  budgets: MonthlyBudget;
  transactions: Transaction[];
  recurringRules: RecurringRule[];
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
  transactions: [],
  recurringRules: []
};

const CHART_COLORS = ['#1E3A8A', '#EA580C', '#10B981', '#F59E0B', '#6366F1', '#EC4899', '#14B8A6'];

export default function BudgetPlannerPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];

  const [mounted, setMounted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [state, setState] = useLocalStorage<BudgetState>('versokit-budget-v1', DEFAULT_STATE);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Transaction Modal State
  const [isTxOpen, setIsTxOpen] = useState(false);
  const [newTx, setNewTx] = useState<Partial<Transaction>>({
    date: format(new Date(), 'yyyy-MM-dd'),
    amount: 0,
    itemId: 'inflow',
    payee: '',
    description: ''
  });

  // Recurring Modal State
  const [isRecurringOpen, setIsRecurringOpen] = useState(false);
  const [newRule, setNewRule] = useState<Partial<RecurringRule>>({
    payee: '',
    itemId: 'i1',
    amount: 0,
    description: '',
    frequency: 'monthly',
    nextDueDate: format(new Date(), 'yyyy-MM-dd')
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

  const pendingRules = useMemo(() => {
    const today = format(new Date(), 'yyyy-MM-dd');
    return state.recurringRules.filter(rule => !isBefore(parseISO(today), parseISO(rule.nextDueDate)));
  }, [state.recurringRules]);

  // Chart Data
  const chartData = useMemo(() => {
    const expenses = monthTransactions.filter(tx => tx.itemId !== 'inflow');
    if (expenses.length === 0) return [];

    const groupTotals: Record<string, number> = {};
    expenses.forEach(tx => {
      const item = state.items.find(i => i.id === tx.itemId);
      const group = state.groups.find(g => g.id === item?.groupId);
      const groupName = group?.name || 'Other';
      groupTotals[groupName] = (groupTotals[groupName] || 0) + tx.amount;
    });

    return Object.entries(groupTotals).map(([name, value]) => ({ name, value }));
  }, [monthTransactions, state.items, state.groups]);

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

  // Recurring Handlers
  const addRecurringRule = () => {
    if (!newRule.payee || !newRule.amount) return;
    const rule: RecurringRule = {
      id: Date.now().toString(),
      payee: newRule.payee!,
      itemId: newRule.itemId!,
      amount: newRule.amount!,
      description: newRule.description || '',
      frequency: newRule.frequency as any,
      nextDueDate: newRule.nextDueDate!
    };
    setState(prev => ({ ...prev, recurringRules: [...prev.recurringRules, rule] }));
    setIsRecurringOpen(false);
    toast({ title: t('rule_added') });
  };

  const deleteRecurringRule = (id: string) => {
    setState(prev => ({ ...prev, recurringRules: prev.recurringRules.filter(r => r.id !== id) }));
  };

  const processPendingRecurring = () => {
    if (pendingRules.length === 0) return;

    let updatedRules = [...state.recurringRules];
    let newTransactions: Transaction[] = [];

    pendingRules.forEach(rule => {
      // 1. Create Transaction
      newTransactions.push({
        id: `rec-${rule.id}-${Date.now()}`,
        date: rule.nextDueDate,
        amount: rule.amount,
        itemId: rule.itemId,
        payee: rule.payee,
        description: rule.description
      });

      // 2. Update Rule Date
      const idx = updatedRules.findIndex(r => r.id === rule.id);
      if (idx !== -1) {
        const nextDate = rule.frequency === 'monthly' 
          ? addMonths(parseISO(rule.nextDueDate), 1)
          : addWeeks(parseISO(rule.nextDueDate), 1);
        updatedRules[idx] = { ...updatedRules[idx], nextDueDate: format(nextDate, 'yyyy-MM-dd') };
      }
    });

    setState(prev => ({
      ...prev,
      transactions: [...newTransactions, ...prev.transactions],
      recurringRules: updatedRules
    }));

    toast({ title: t('all_done'), description: `${pendingRules.length} bills processed.` });
  };

  // Data Management
  const exportJSON = () => {
    const dataStr = JSON.stringify(state, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `versokit-budget-backup-${format(new Date(), 'yyyy-MM-dd')}.json`);
    linkElement.click();
  };

  const importJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!confirm(t('import_warn'))) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        setState(json);
        window.location.reload();
      } catch (error) {
        alert('Invalid JSON file.');
      }
    };
    reader.readAsText(file);
  };

  if (!mounted) return null;

  const currencySymbol = lang === 'id' ? 'Rp' : '$';
  const locale = lang === 'id' ? 'id-ID' : 'en-US';

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      {/* Recurring Alert Banner */}
      {pendingRules.length > 0 && (
        <div className="w-full bg-orange-50 border-2 border-orange-200 p-4 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-top duration-500 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500 text-white rounded-xl shadow-lg">
              <BellRing className="h-5 w-5 animate-bounce" />
            </div>
            <div>
              <p className="font-black uppercase tracking-tight text-orange-900 text-sm">{t('pending_alert')}</p>
              <p className="text-[10px] font-bold text-orange-700/70 uppercase tracking-widest">{pendingRules.length} items waiting</p>
            </div>
          </div>
          <Button onClick={processPendingRecurring} className="bg-orange-600 hover:bg-orange-700 text-white font-black uppercase tracking-widest text-xs h-10 px-6 rounded-xl shadow-lg shadow-orange-200">
            <CheckCircle2 className="mr-2 h-4 w-4" /> {t('process_all')}
          </Button>
        </div>
      )}

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
          <div className="flex gap-2">
            <Dialog open={isRecurringOpen} onOpenChange={setIsRecurringOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-12 border-2 font-black uppercase tracking-widest text-[10px] rounded-2xl">
                  <CalendarClock className="mr-2 h-4 w-4" /> {t('recurring_btn')}
                </Button>
              </DialogTrigger>
              <DialogContent className="rounded-[2rem] sm:max-w-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black uppercase tracking-tighter">{t('manage_recurring')}</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6 py-4">
                  <div className="space-y-4 p-4 bg-muted/30 rounded-2xl border-2 border-dashed">
                    <h4 className="font-black uppercase tracking-widest text-[10px] opacity-50">{t('add_rule')}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label className="text-xs font-bold uppercase">{t('payee')}</Label>
                        <Input value={newRule.payee} onChange={e => setNewRule({...newRule, payee: e.target.value})} placeholder="Netflix, Rent..." />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs font-bold uppercase">{t('amount')}</Label>
                        <Input type="number" value={newRule.amount || ''} onChange={e => setNewRule({...newRule, amount: parseFloat(e.target.value) || 0})} />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs font-bold uppercase">{t('frequency')}</Label>
                        <Select value={newRule.frequency} onValueChange={v => setNewRule({...newRule, frequency: v as any})}>
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">{t('monthly')}</SelectItem>
                            <SelectItem value="weekly">{t('weekly')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs font-bold uppercase">{t('next_due')}</Label>
                        <Input type="date" value={newRule.nextDueDate} onChange={e => setNewRule({...newRule, nextDueDate: e.target.value})} />
                      </div>
                    </div>
                    <Button onClick={addRecurringRule} className="w-full bg-primary font-black uppercase tracking-widest mt-2">{t('add')}</Button>
                  </div>

                  <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2">
                    {state.recurringRules.map(rule => (
                      <div key={rule.id} className="p-4 bg-card border-2 rounded-2xl flex items-center justify-between group">
                        <div className="space-y-1">
                          <h5 className="font-black uppercase tracking-tight text-sm">{rule.payee}</h5>
                          <div className="flex gap-2 items-center">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-full uppercase tracking-widest">
                              {rule.frequency === 'monthly' ? t('monthly') : t('weekly')}
                            </span>
                            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                              {t('next_due')}: {rule.nextDueDate}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-black tabular-nums">{rule.amount.toLocaleString()}</span>
                          <Button variant="ghost" size="icon" onClick={() => deleteRecurringRule(rule.id)} className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

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
                    <Input type="date" value={newTx.date} onChange={(e) => setNewTx({...newTx, date: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>{t('payee')}</Label>
                    <Input placeholder={t('payee_placeholder')} value={newTx.payee} onChange={(e) => setNewTx({...newTx, payee: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <Label>{t('category')}</Label>
                    <Select value={newTx.itemId} onValueChange={(val) => setNewTx({...newTx, itemId: val})}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
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
                    <Input type="number" placeholder={t('amount_placeholder')} value={newTx.amount || ''} onChange={(e) => setNewTx({...newTx, amount: parseFloat(e.target.value) || 0})} />
                  </div>
                  <div className="space-y-2">
                    <Label>{t('desc')}</Label>
                    <Input value={newTx.description} onChange={(e) => setNewTx({...newTx, description: e.target.value})} />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={addTransaction} className="w-full h-12 font-black uppercase tracking-widest">{t('save')}</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <div className="flex gap-1">
               <Button variant="outline" size="icon" onClick={exportJSON} title={t('export_json')} className="h-12 w-12 rounded-2xl border-2">
                 <Download className="h-5 w-5" />
               </Button>
               <Button variant="outline" size="icon" onClick={() => fileInputRef.current?.click()} title={t('import_json')} className="h-12 w-12 rounded-2xl border-2">
                 <Upload className="h-5 w-5" />
               </Button>
               <input type="file" ref={fileInputRef} onChange={importJSON} className="hidden" accept=".json" />
            </div>
          </div>
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

        {/* Right Column */}
        <div className="space-y-8">
          <Card className="shadow-xl border-2 rounded-[2.5rem] overflow-hidden bg-card">
            <CardHeader className="bg-primary/5 p-6 border-b">
              <CardTitle className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                <PieChartIcon className="h-4 w-4" />
                {t('analysis_title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[250px] w-full flex flex-col items-center justify-center">
                {chartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} stroke="none" />
                        ))}
                      </Pie>
                      <RechartsTooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }} />
                      <Legend verticalAlign="bottom" iconType="circle" formatter={(value) => <span className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground">{value}</span>} />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground opacity-40">
                    <PieChartIcon className="h-12 w-12" />
                    <p className="text-[10px] font-black uppercase tracking-widest">{t('no_data')}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-2 rounded-[2rem] overflow-hidden">
            <CardHeader className="bg-primary p-6 text-white">
              <CardTitle className="text-lg font-black uppercase tracking-widest flex items-center gap-2">
                <History className="h-5 w-5" />
                {t('history')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[400px] overflow-y-auto">
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
                              <h4 className="font-black text-sm uppercase tracking-tight truncate max-w-[120px]">{tx.payee}</h4>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={cn("text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter", isIncome ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground")}>
                                {isIncome ? t('inflow').split(':')[0] : item?.name}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={cn("text-sm font-black tabular-nums", isIncome ? "text-green-600" : "text-foreground")}>
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
                <Input type="number" value={baseMonthlyIncome || ''} onChange={(e) => updateBaseIncome(e.target.value)} className="w-28 h-8 font-bold text-right border-none bg-transparent" placeholder="0" />
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
