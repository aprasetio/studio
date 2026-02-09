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
  ArrowRightLeft,
  Upload
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
  // --- Page Title ---
  title: { 
    en: "Budget Planner", 
    id: "Perencana Anggaran", 
    de: "Budgetplaner", 
    es: "Planificador de Presupuesto", 
    pt: "Planejador de Orçamento", 
    fr: "Planificateur Budgétaire", 
    it: "Pianificatore di Budget" 
  },

  // --- Headers & Summary ---
  total_income: { en: "Total Income", id: "Total Pemasukan", de: "Gesamteinkommen", es: "Ingresos Totales", pt: "Renda Total", fr: "Revenu Total", it: "Reddito Totale" },
  to_budget: { en: "To be Budgeted", id: "Siap Dianggarkan", de: "Zu budgetieren", es: "Por presupuestar", pt: "A ser orçado", fr: "À budgétiser", it: "Da budgetare" },
  
  // --- Table Columns ---
  col_category: { en: "Category", id: "Kategori", de: "Kategorie", es: "Categoría", pt: "Categoria", fr: "Catégorie", it: "Categoria" },
  col_budgeted: { en: "Budgeted", id: "Dianggarkan", de: "Budgetiert", es: "Presupuestado", pt: "Orçado", fr: "Budgétisé", it: "Budget" },
  col_activity: { en: "Activity", id: "Aktivitas", de: "Aktivität", es: "Actividad", pt: "Atividade", fr: "Activité", it: "Attività" },
  col_available: { en: "Available", id: "Tersedia", de: "Verfügbar", es: "Disponible", pt: "Disponível", fr: "Disponible", it: "Disponibile" },

  // --- Buttons ---
  btn_add_category: { en: "Add Category", id: "Tambah Kategori", de: "Kategorie +", es: "Añadir Categoría", pt: "Adicionar Categoria", fr: "Ajouter Catégorie", it: "Aggiungi Categoria" },
  btn_add_transaction: { en: "Add Transaction", id: "Tambah Transaksi", de: "Transaktion +", es: "Añadir Transacción", pt: "Adicionar Transação", fr: "Ajouter Transaction", it: "Aggiungi Transazione" },
  btn_export_json: { en: "Export JSON", id: "Ekspor JSON", de: "JSON Exportieren", es: "Exportar JSON", pt: "Exportar JSON", fr: "Exporter JSON", it: "Esporta JSON" },
  btn_import_json: { en: "Import JSON", id: "Impor JSON", de: "JSON Importieren", es: "Importar JSON", pt: "Importar JSON", fr: "Importer JSON", it: "Importa JSON" },
  btn_export_csv: { en: "Export CSV", id: "Ekspor CSV", de: "CSV Exportieren", es: "Exportar CSV", pt: "Exportar CSV", fr: "Esporta CSV", it: "Esporta CSV" },
  
  // --- Transaction Modal / Form ---
  modal_title: { en: "New Transaction", id: "Transaksi Baru", de: "Neue Transaktion", es: "Nueva Transacción", pt: "Nova Transação", fr: "Nouvelle Transaction", it: "Nuova Transazione" },
  label_type: { en: "Type", id: "Tipe", de: "Tipe", es: "Tipo", pt: "Tipo", fr: "Type", it: "Tipo" },
  opt_expense: { en: "Expense", id: "Pengeluaran", de: "Ausgabe", es: "Gasto", pt: "Despesa", fr: "Dépense", it: "Spesa" },
  opt_income: { en: "Income", id: "Pemasukan", de: "Einnahme", es: "Ingreso", pt: "Renda", fr: "Revenu", it: "Reddito" },
  label_amount: { en: "Amount", id: "Nominal", de: "Betrag", es: "Cantidad", pt: "Valor", fr: "Montant", it: "Importo" },
  label_date: { en: "Date", id: "Tanggal", de: "Datum", es: "Fecha", pt: "Data", fr: "Date", it: "Data" },
  label_payee: { en: "Payee / Note", id: "Penerima / Catatan", de: "Empfänger / Notiz", es: "Beneficiario / Nota", pt: "Beneficiário / Nota", fr: "Bénéficiaire / Note", it: "Beneficiario / Nota" },
  ph_payee: { en: "e.g. Starbucks, Salary...", id: "contoh: Indomaret, Gaji...", de: "z.B. Supermarkt...", es: "ej. Supermercado...", pt: "ex. Supermercado...", fr: "ex. Supermarché...", it: "es. Supermercato..." },
  btn_save: { en: "Save", id: "Simpan", de: "Speichern", es: "Guardar", pt: "Salvar", fr: "Enregistrer", it: "Salva" },
  btn_cancel: { en: "Cancel", id: "Batal", de: "Abbrechen", es: "Cancelar", pt: "Cancelar", fr: "Annuler", it: "Annulla" },

  // --- Alerts ---
  confirm_delete: { en: "Are you sure you want to delete this category?", id: "Yakin ingin menghapus kategori ini?", de: "Möchten Sie diese Kategorie wirklich löschen?", es: "¿Seguro que quieres eliminar?", pt: "Tem certeza que deseja excluir?", fr: "Voulez-vous vraiment supprimer ?", it: "Sei sicuro di voler eliminare?" },
  no_transactions: { en: "No transactions yet.", id: "Belum ada transaksi.", de: "Noch keine Transaktionen.", es: "No hay transacciones.", pt: "Nenhuma transação.", fr: "Aucune transaction.", it: "Nessuna transazione." },

  // --- Miscellaneous ---
  all_done: { en: "All money has a job!", id: "Semua uang sudah dialokasikan!", de: "Alles Geld hat eine Aufgabe!", es: "¡Todo el dinero tiene trabajo!", pt: "Todo o dinheiro tem uma tarefa!", fr: "Tout l'argent a un job !", it: "Tutto il denaro ha un compito!" },
  over_budget: { en: "Over Budget!", id: "Anggaran Melebihi!", de: "Über Budget!", es: "¡Sobre el presupuesto!", pt: "Acima do orçamento!", fr: "Dépassement de budget !", it: "Oltre il budget!" },
  new_item_prompt: { en: "New Category Name", id: "Nama Kategori Baru", de: "Neuer Kategoriename", es: "Nuevo nombre de categoría", pt: "Nome da nova categoria", fr: "Nom de la nouvelle catégorie", it: "Nuovo nome kategori" },
  cover: { en: "Cover", id: "Tutup", de: "Decken", es: "Cubrir", pt: "Cobrir", fr: "Couvrir", it: "Coprire" },
  history: { en: "Recent History", id: "Riwayat Terkini", de: "Verlauf", es: "Historial", pt: "Histórico", fr: "Historique", it: "Cronologia" },
  system: { en: "System", id: "Sistem", de: "System", es: "Sistema", pt: "Sistema", fr: "Système", it: "Sistema" },
  reset_data: { en: "Reset Budget Data", id: "Reset Data Anggaran", de: "Budgetdaten zurücksetzen", es: "Reiniciar data", pt: "Redefinir dados", fr: "Réinitialiser les données", it: "Resetta i dati" },
  cover_title: { en: "Cover Overspending", id: "Tutup Overspending", de: "Mehrausgaben decken", es: "Cubrir sobregasto", pt: "Cobrir gastos excessivos", fr: "Couvrir les dépassements", it: "Copri spesa eccessiva" },
  move_from: { en: "Cover from:", id: "Ambil dana dari:", de: "Decken von:", es: "Cubrir desde:", pt: "Cobrir de:", fr: "Couvrir depuis :", it: "Copri da:" },
  move_btn: { en: "Move Money", id: "Pindahkan Dana", de: "Geld bewegen", es: "Mover dinero", pt: "Mover dinheiro", fr: "Déplacer l'argent", it: "Sposta denaro" },
  select_funding: { en: "Select funding source", id: "Pilih sumber dana", de: "Finanzierungsquelle wählen", es: "Seleccionar fuente", pt: "Selecionar fonte", fr: "Choisir la source", it: "Seleziona fonte" }
};

const LOCALES: Record<string, string> = { 
  en: 'en-US', id: 'id-ID', de: 'de-DE', es: 'es-ES', pt: 'pt-BR', fr: 'fr-FR', it: 'it-IT' 
};
const CURRENCIES: Record<string, string> = { 
  en: 'USD', id: 'IDR', de: 'EUR', es: 'EUR', pt: 'BRL', fr: 'EUR', it: 'EUR' 
};

export default function BudgetPlannerPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[key]?.[lang] || UI_TEXT[key]?.['en'] || key;

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

  const handleExportCSV = () => {
    const csvData = categories.map(c => ({
      [t('col_category')]: c.name,
      [t('col_budgeted')]: c.assigned,
      [t('col_activity')]: c.activity,
      [t('col_available')]: c.assigned + c.activity
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
    if (coveringCategory && sourceCategoryId) {
      const overspentAmount = Math.abs(coveringCategory.assigned + coveringCategory.activity);
      moveMoney(sourceCategoryId, coveringCategory.id, overspentAmount);
      setCoveringCategory(null);
      setSourceCategoryId('');
      toast({ title: t('all_done') });
    }
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

      {/* Utility Toolbar */}
      <div className="w-full flex flex-wrap gap-2 justify-end mb-[-1rem]">
        <Button variant="outline" size="sm" onClick={handleExportCSV} className="text-[10px] font-black uppercase border-2 h-8">
          <Download className="h-3 w-3 mr-1" /> {t('btn_export_csv')}
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="text-[10px] font-black uppercase border-2 h-8">
              <Upload className="h-3 w-3 mr-1" /> {t('btn_import_json')}
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-[2rem]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black uppercase tracking-tighter">
                {t('btn_import_json')}
              </DialogTitle>
            </DialogHeader>
            <DataPersistence 
              data={{ income, categories, transactions }} 
              onRestore={(data) => restoreData(data)} 
              fileNamePrefix="versokit-budget" 
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Header Summary */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 bg-card p-6 rounded-[2.5rem] shadow-xl border-2">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{t('total_income')}</span>
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            <div className="relative">
              <input 
                type="number" 
                value={income === 0 ? '' : income} 
                onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
                className="text-2xl font-black bg-transparent border-b-2 border-dashed border-primary/20 focus:border-primary focus:outline-none w-40"
                placeholder="0"
              />
              <span className="absolute -left-6 top-1 text-sm font-bold opacity-40">{CURRENCIES[lang]}</span>
            </div>
          </div>
        </div>

        <div className={cn(
          "px-10 py-6 rounded-3xl border-4 flex flex-col items-center gap-1 transition-all duration-500 shadow-lg min-w-[280px]",
          toBeBudgeted === 0 ? "bg-green-500 border-green-600 text-white" : 
          toBeBudgeted > 0 ? "bg-primary text-white border-primary/20" : 
          "bg-destructive border-destructive text-white animate-pulse"
        )}>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{t('to_budget')}</span>
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
                <Plus className="mr-2 h-5 w-5" /> {t('btn_add_transaction')}
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[2rem] sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black uppercase tracking-tighter">{t('modal_title')}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-2 p-1 bg-muted rounded-xl">
                  <Button 
                    variant={newTx.type === 'expense' ? 'default' : 'ghost'} 
                    onClick={() => setNewTx({...newTx, type: 'expense'})}
                    className="rounded-lg font-bold"
                  >
                    {t('opt_expense')}
                  </Button>
                  <Button 
                    variant={newTx.type === 'income' ? 'default' : 'ghost'} 
                    onClick={() => setNewTx({...newTx, type: 'income'})}
                    className="rounded-lg font-bold"
                  >
                    {t('opt_income')}
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>{t('label_date')}</Label>
                  <Input type="date" value={newTx.date} onChange={(e) => setNewTx({...newTx, date: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>{t('label_payee')}</Label>
                  <Input value={newTx.payee} onChange={(e) => setNewTx({...newTx, payee: e.target.value})} placeholder={t('ph_payee')} />
                </div>
                {newTx.type === 'expense' && (
                  <div className="space-y-2">
                    <Label>{t('col_category')}</Label>
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
                  <Label>{t('label_amount')}</Label>
                  <Input type="number" value={newTx.amount || ''} onChange={(e) => setNewTx({...newTx, amount: parseFloat(e.target.value) || 0})} placeholder={t('label_amount')} />
                </div>
              </div>
              <DialogFooter className="flex flex-col sm:flex-row gap-2">
                <Button variant="ghost" onClick={() => setIsTxOpen(false)} className="font-bold uppercase tracking-widest">{t('btn_cancel')}</Button>
                <Button onClick={() => {
                  if (newTx.type === 'expense' && !newTx.categoryId) {
                    toast({ title: "Select a category", variant: "destructive" });
                    return;
                  }
                  addTransaction(newTx);
                  setIsTxOpen(false);
                  setNewTx({ ...newTx, payee: '', amount: 0, note: '', categoryId: '' });
                }} className="flex-1 h-12 font-black uppercase tracking-widest">{t('btn_save')}</Button>
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
              <CardTitle className="text-xs font-black uppercase tracking-widest text-primary">{t('col_category')}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => {
                const name = window.prompt(t('new_item_prompt'));
                if (name) addCategory(name, 'needs');
              }} className="h-8 text-[10px] font-bold uppercase">
                <Plus className="h-3 w-3 mr-1" /> {t('btn_add_category')}
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto pb-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-muted/10 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      <th className="p-6 text-left min-w-[200px] sticky left-0 bg-card z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">{t('col_category')}</th>
                      <th className="p-6 text-right min-w-[150px]">{t('col_budgeted')}</th>
                      <th className="p-6 text-right min-w-[120px]">{t('col_activity')}</th>
                      <th className="p-6 text-right min-w-[120px]">{t('col_available')}</th>
                      <th className="p-6 w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {categories.map(category => {
                      const available = category.assigned + category.activity;
                      return (
                        <tr key={category.id} className="hover:bg-muted/5 transition-colors group">
                          <td className="p-6 sticky left-0 bg-card z-10 border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                            <p className="font-black text-sm uppercase tracking-tight truncate max-w-[150px]">{category.name}</p>
                            <span className="text-[9px] font-bold text-muted-foreground uppercase opacity-60">{category.type}</span>
                          </td>
                          <td className="p-4 align-middle">
                            <div className="relative flex justify-end">
                              <input 
                                type="number"
                                value={category.assigned === 0 ? '' : category.assigned}
                                onChange={(e) => updateCategoryAssignment(category.id, parseFloat(e.target.value) || 0)}
                                className="w-full h-10 bg-transparent border-b border-gray-300 focus:border-emerald-500 text-right font-mono font-black px-3 focus:outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-sm"
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
                              onClick={() => { if(confirm(t('confirm_delete'))) deleteCategory(category.id) }}
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
                  <span className="font-bold text-muted-foreground uppercase">{t('total_income')}</span>
                  <span className="font-black">{formatValue(income)}</span>
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
                    <p className="font-bold uppercase text-xs tracking-widest">{t('no_transactions')}</p>
                  </div>
                ) : (
                  <div className="divide-y">
                    {transactions.map(tx => (
                      <div key={tx.id} className="p-4 hover:bg-muted/30 transition-colors flex items-center justify-between group">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                              {new Date(tx.date).toLocaleDateString(LOCALES[lang] || 'en-US', { day: 'numeric', month: 'short' })}
                            </span>
                            <h4 className="font-black text-sm uppercase tracking-tight truncate max-w-[120px]">{tx.payee}</h4>
                          </div>
                          <div className="flex gap-2">
                            {tx.type === 'income' ? (
                              <Badge className="bg-green-100 text-green-700 text-[8px] uppercase h-4">{t('opt_income')}</Badge>
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

          <Card className="bg-card border-2 rounded-[2rem] p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 border-b pb-4">
              <Database className="h-5 w-5 text-primary" />
              <h3 className="font-black uppercase tracking-tight text-sm">{t('system')}</h3>
            </div>
            <Button 
              variant="outline" 
              onClick={() => { if(confirm(globalT('reset') + '?')) resetMonth() }}
              className="w-full h-12 font-black uppercase tracking-widest text-[10px] text-destructive hover:bg-red-50 border-2"
            >
              <X className="mr-2 h-4 w-4" /> {t('reset_data')}
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
                  <SelectValue placeholder={t('select_funding')} />
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
