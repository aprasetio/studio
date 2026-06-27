'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  Upload,
  Settings,
  FileSpreadsheet,
  Sparkles,
  ChevronRight,
  Cloud,
  CloudUpload,
  CloudDownload,
  Copy,
  Check,
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
import { BUDGET_TEMPLATES } from './templates';
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
  income_label: { en: "Total Income", id: "Total Pemasukan", de: "Gesamteinkommen", es: "Ingresos Totales", pt: "Renda Total", fr: "Revenu Total", it: "Reddito Totale" },
  to_budget: { en: "To be Budgeted", id: "Siap Dianggarkan", de: "Zu budgetieren", es: "Por presupuestar", pt: "A ser orçado", fr: "À budgétiser", it: "Da budgetare" },
  
  // --- Table Columns ---
  col_category: { en: "Category", id: "Kategori", de: "Kategorie", es: "Categoría", pt: "Categoria", fr: "Catégorie", it: "Categoria" },
  col_budgeted: { en: "Budgeted", id: "Dianggarkan", de: "Budgetiert", es: "Presupuestado", pt: "Orçado", fr: "Budgétisé", it: "Budget" },
  col_activity: { en: "Activity", id: "Aktivitas", de: "Aktivität", es: "Actividad", pt: "Atividade", fr: "Activité", it: "Attività" },
  col_available: { en: "Available", id: "Tersedia", de: "Verfügbar", es: "Disponible", pt: "Disponível", fr: "Disponible", it: "Disponibile" },

  // --- Buttons ---
  btn_add_category: { en: "Add Category", id: "Tambah Kategori", de: "Kategorie +", es: "Añadir Categoría", pt: "Adicionar Categoria", fr: "Ajouter Catégorie", it: "Aggiungi Categoria" },
  btn_add_transaction: { en: "Add Transaction", id: "Tambah Transaksi", de: "Transaktion +", es: "Añadir Transacción", pt: "Adicionar Transação", fr: "Ajouter Transaction", it: "Aggiungi Transazione" },
  btn_backup: { 
    en: "Backup Data (JSON)", 
    id: "Cadangkan Data (JSON)", 
    de: "Daten sichern (JSON)", 
    es: "Copia de seguridad (JSON)", 
    pt: "Backup de Dados (JSON)", 
    fr: "Sauvegarde (JSON)", 
    it: "Backup Dati (JSON)" 
  },
  btn_restore: { 
    en: "Restore Data (JSON)", 
    id: "Pulihkan Data (JSON)", 
    de: "Daten wiederherstellen", 
    es: "Restaurar Datos (JSON)", 
    pt: "Restaurar Dados (JSON)", 
    fr: "Restaurer (JSON)", 
    it: "Ripristina Dati (JSON)" 
  },
  btn_data_mgmt: { 
    en: "Data Management", 
    id: "Manajemen Data", 
    de: "Datenverwaltung", 
    es: "Gestión de Datos", 
    pt: "Gestão de Dados", 
    fr: "Gestion des Données", 
    it: "Gestione Dati" 
  },
  btn_excel: { 
    en: "Export to Excel (.csv)", 
    id: "Ekspor ke Excel (.csv)", 
    de: "Export nach Excel (.csv)", 
    es: "Exportar a Excel (.csv)", 
    pt: "Exportar p/ Excel (.csv)", 
    fr: "Exporter vers Excel", 
    it: "Esporta in Excel (.csv)" 
  },
  
  // --- Transaction Modal / Form ---
  modal_title: { en: "New Transaction", id: "Transaksi Baru", de: "Neue Transaktion", es: "Nueva Transacción", pt: "Nova Transação", fr: "Nouvelle Transaction", it: "Nuova Transazione" },
  label_type: { en: "Type", id: "Tipe", de: "Tipe", es: "Tipo", pt: "Tipo", fr: "Type", it: "Tipo" },
  opt_expense: { en: "Expense", id: "Pengeluaran", de: "Ausgabe", es: "Gasto", pt: "Despesa", fr: "Dépense", it: "Spesa" },
  opt_income: { en: "Income", id: "Pemasukan", de: "Einnahme", es: "Ingreso", pt: "Renda", fr: "Revenu", it: "Reddito" },
  label_amount: { en: "Amount", id: "Nominal", de: "Betrag", es: "Cantidad", pt: "Valor", fr: "Montant", it: "Importo" },
  label_date: { en: "Date", id: "Tanggal", de: "Datum", es: "Fecha", pt: "Data", fr: "Date", it: "Data" },
  label_payee: { en: "Payee / Note", id: "Penerima / Catatan", de: "Empfänger / Notiz", es: "Beneficiario / Nota", pt: "Beneficiário / Nota", fr: "Bénéficiaire / Note", it: "Beneficiario / Nota" },
  ph_payee: { en: "e.g. Starbucks, Salary...", id: "contoh: Indomaret, Gaji...", de: "z.B. Supermarkt...", es: "ej. Supermercado...", pt: "ex. Supermercado...", fr: "ex. Supermarché...", it: "es. Supermercato..." },
  btn_save: { en: "Save", id: "Simpan", de: "Simpan", es: "Guardar", pt: "Salvar", fr: "Enregistrer", it: "Salva" },
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
  cover_title: { en: "Cover Overspending", id: "Tutup Overspending", de: "Mehrausgaben decken", es: "Cubrir sobregasto", pt: "Cubrir gastos excessivos", fr: "Couvrir les dépassements", it: "Copri spesa eccessiva" },
  move_from: { en: "Cover from:", id: "Ambil dana dari:", de: "Decken von:", es: "Cubrir desde:", pt: "Cubrir de:", fr: "Couvrir depuis :", it: "Copri da:" },
  move_btn: { en: "Move Money", id: "Pindahkan Dana", de: "Geld bewegen", es: "Mover dinero", pt: "Mover dinheiro", fr: "Déplacer l'argent", it: "Sposta denaro" },
  select_funding: { en: "Select funding source", id: "Pilih sumber dana", de: "Finanzierungsquelle wählen", es: "Seleccionar fuente", pt: "Seleccionar fonte", fr: "Choisir la source", it: "Seleziona fonte" },

  // --- Quick Start ---
  qs_btn: { en: "Quick Start", id: "Mulai Cepat", de: "Schnellstart", es: "Inicio Rápido", pt: "Início Rápido", fr: "Démarrage Rapide", it: "Avvio Rapido" },
  qs_title: { en: "Quick Start — Budget Templates", id: "Mulai Cepat — Template Anggaran", de: "Schnellstart — Budgetvorlagen", es: "Inicio Rápido — Plantillas", pt: "Início Rápido — Modelos", fr: "Démarrage — Modèles Budget", it: "Avvio Rapido — Modelli" },
  qs_subtitle: { en: "Choose a life-stage template and enter your income. Buckets are auto-filled using best practices.", id: "Pilih template sesuai tahap hidupmu dan masukkan pendapatan. Kantung diisi otomatis sesuai best practices.", de: "Wählen Sie eine Vorlage und geben Sie Ihr Einkommen ein.", es: "Elige una plantilla y escribe tus ingresos. Las categorías se rellenan automáticamente.", pt: "Escolha um modelo e insira sua renda. As categorias são preenchidas automaticamente.", fr: "Choisissez un modèle et entrez votre revenu. Les catégories sont remplies automatiquement.", it: "Scegli un modello e inserisci il tuo reddito. Le categorie vengono riempite automaticamente." },
  qs_income_label: { en: "Your Monthly Income", id: "Pendapatan Bulanan Anda", de: "Ihr monatliches Einkommen", es: "Tu Ingreso Mensual", pt: "Sua Renda Mensal", fr: "Votre Revenu Mensuel", it: "Il Tuo Reddito Mensile" },
  qs_preview: { en: "Budget Preview", id: "Pratinjau Anggaran", de: "Budget-Vorschau", es: "Vista Previa del Presupuesto", pt: "Prévia do Orçamento", fr: "Aperçu du Budget", it: "Anteprima Budget" },
  qs_apply: { en: "Apply Template", id: "Terapkan Template", de: "Vorlage anwenden", es: "Aplicar Plantilla", pt: "Aplicar Modelo", fr: "Appliquer le Modèle", it: "Applica Modello" },
  qs_skip: { en: "Start with blank slate", id: "Mulai dari nol", de: "Leere Vorlage starten", es: "Empezar desde cero", pt: "Começar do zero", fr: "Commencer vide", it: "Inizia da zero" },
  qs_applied: { en: "Template applied!", id: "Template diterapkan!", de: "Vorlage angewendet!", es: "¡Plantilla aplicada!", pt: "Modelo aplicado!", fr: "Modèle appliqué !", it: "Modello applicato!" },
  qs_needs: { en: "Needs", id: "Kebutuhan", de: "Bedürfnisse", es: "Necesidades", pt: "Necessidades", fr: "Besoins", it: "Bisogni" },
  qs_wants: { en: "Wants", id: "Keinginan", de: "Wünsche", es: "Deseos", pt: "Desejos", fr: "Envies", it: "Desideri" },
  qs_savings: { en: "Savings", id: "Tabungan", de: "Ersparnisse", es: "Ahorro", pt: "Poupança", fr: "Épargne", it: "Risparmio" },

  // --- Cloud Sync ---
  sync_btn: { en: "Cloud Sync", id: "Sinkron Cloud", de: "Cloud-Sync", es: "Sincronización", pt: "Sincronização", fr: "Sync Cloud", it: "Sync Cloud" },
  sync_title: { en: "Sync Across Devices", id: "Sinkron Antar Perangkat", de: "Geräteübergreifend synchronisieren", es: "Sincronizar entre dispositivos", pt: "Sincronizar entre dispositivos", fr: "Synchroniser les appareils", it: "Sincronizza i dispositivi" },
  sync_subtitle: { en: "Save your data to the cloud and load it on any device using a sync code. Code expires after 30 days of inactivity.", id: "Simpan data ke cloud dan muat di perangkat lain menggunakan kode sinkron. Kode kedaluwarsa setelah 30 hari tidak aktif.", de: "Daten in der Cloud speichern und auf jedem Gerät laden. Code läuft nach 30 Tagen ab.", es: "Guarda tus datos en la nube y cárgalos en cualquier dispositivo con un código. Caduca a los 30 días.", pt: "Salve seus dados na nuvem e carregue em qualquer dispositivo com um código. Expira após 30 dias.", fr: "Sauvegardez vos données dans le cloud et chargez-les sur n'importe quel appareil avec un code. Expire après 30 jours.", it: "Salva i dati nel cloud e caricali su qualsiasi dispositivo con un codice. Scade dopo 30 giorni." },
  sync_save: { en: "Save to Cloud", id: "Simpan ke Cloud", de: "In Cloud speichern", es: "Guardar en la nube", pt: "Salvar na nuvem", fr: "Sauvegarder", it: "Salva nel cloud" },
  sync_load: { en: "Load from Cloud", id: "Muat dari Cloud", de: "Aus Cloud laden", es: "Cargar desde la nube", pt: "Carregar da nuvem", fr: "Charger depuis le cloud", it: "Carica dal cloud" },
  sync_your_code: { en: "Your Sync Code", id: "Kode Sinkron Anda", de: "Ihr Sync-Code", es: "Tu código de sincronización", pt: "Seu código de sincronização", fr: "Votre code de synchronisation", it: "Il tuo codice di sincronizzazione" },
  sync_enter_code: { en: "Enter Sync Code", id: "Masukkan Kode Sinkron", de: "Sync-Code eingeben", es: "Ingresa el código de sincronización", pt: "Digite o código de sincronização", fr: "Entrez le code de synchronisation", it: "Inserisci il codice di sincronizzazione" },
  sync_copy: { en: "Copy", id: "Salin", de: "Kopieren", es: "Copiar", pt: "Copiar", fr: "Copier", it: "Copia" },
  sync_copied: { en: "Copied!", id: "Tersalin!", de: "Kopiert!", es: "¡Copiado!", pt: "Copiado!", fr: "Copié !", it: "Copiato!" },
  sync_saving: { en: "Saving…", id: "Menyimpan…", de: "Speichern…", es: "Guardando…", pt: "Salvando…", fr: "Sauvegarde…", it: "Salvataggio…" },
  sync_loading: { en: "Loading…", id: "Memuat…", de: "Laden…", es: "Cargando…", pt: "Carregando…", fr: "Chargement…", it: "Caricamento…" },
  sync_success_save: { en: "Data saved! Share the code below with your other device.", id: "Data tersimpan! Bagikan kode di bawah ke perangkat lain.", de: "Daten gespeichert! Teilen Sie den Code mit Ihrem anderen Gerät.", es: "¡Datos guardados! Comparte el código con tu otro dispositivo.", pt: "Dados salvos! Compartilhe o código com seu outro dispositivo.", fr: "Données sauvegardées ! Partagez le code avec votre autre appareil.", it: "Dati salvati! Condividi il codice con il tuo altro dispositivo." },
  sync_success_load: { en: "Data loaded successfully!", id: "Data berhasil dimuat!", de: "Daten erfolgreich geladen!", es: "¡Datos cargados correctamente!", pt: "Dados carregados com sucesso!", fr: "Données chargées avec succès !", it: "Dati caricati con successo!" },
  sync_err_not_found: { en: "Code not found or expired.", id: "Kode tidak ditemukan atau kedaluwarsa.", de: "Code nicht gefunden oder abgelaufen.", es: "Código no encontrado o expirado.", pt: "Código não encontrado ou expirado.", fr: "Code introuvable ou expiré.", it: "Codice non trovato o scaduto." },
  sync_err_generic: { en: "Sync failed. Try again.", id: "Sinkron gagal. Coba lagi.", de: "Synchronisierung fehlgeschlagen.", es: "Sincronización fallida. Intente de nuevo.", pt: "Falha na sincronização. Tente novamente.", fr: "Échec de la synchronisation.", it: "Sincronizzazione fallita." },
  sync_expires: { en: "Expires after 30 days of inactivity", id: "Kedaluwarsa setelah 30 hari tidak aktif", de: "Läuft nach 30 Tagen Inaktivität ab", es: "Caduca después de 30 días de inactividad", pt: "Expira após 30 dias sem atividade", fr: "Expire après 30 jours d'inactivité", it: "Scade dopo 30 giorni di inattività" },
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
    setIncome, addCategory, deleteCategory, updateCategoryAssignment, addTransaction, deleteTransaction, resetMonth, moveMoney, restoreData, loadTemplate
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

  const [isQuickStartOpen, setIsQuickStartOpen] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('');
  const [quickIncome, setQuickIncome] = useState<number>(0);
  const autoShownRef = useRef(false);

  const [isSyncOpen, setIsSyncOpen] = useState(false);
  const [syncCode, setSyncCode] = useState('');
  const [syncInputCode, setSyncInputCode] = useState('');
  const [syncStatus, setSyncStatus] = useState<'idle' | 'saving' | 'loading' | 'saved' | 'loaded' | 'error'>('idle');
  const [syncError, setSyncError] = useState('');
  const [syncCopied, setSyncCopied] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (mounted && !autoShownRef.current) {
      autoShownRef.current = true;
      if (income === 0 && transactions.length === 0) {
        setIsQuickStartOpen(true);
      }
    }
  }, [mounted]);

  const formatValue = (val: number) => {
    return new Intl.NumberFormat(LOCALES[lang] || 'en-US', {
      style: 'currency',
      currency: CURRENCIES[lang] || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  const getCurrencyCode = () => {
    return new Intl.NumberFormat(LOCALES[lang] || 'en-US', { 
      style: 'currency', 
      currency: CURRENCIES[lang] || 'USD' 
    }).formatToParts(0).find(p => p.type === 'currency')?.value || '$';
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

  const handleSaveToCloud = async () => {
    setSyncStatus('saving');
    setSyncError('');
    try {
      const res = await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ income, categories, transactions }),
      });
      if (!res.ok) throw new Error();
      const json = await res.json();
      setSyncCode(json.code);
      setSyncStatus('saved');
    } catch {
      setSyncStatus('error');
      setSyncError(t('sync_err_generic'));
    }
  };

  const handleLoadFromCloud = async () => {
    const code = syncInputCode.trim().toUpperCase();
    if (code.length < 8) return;
    setSyncStatus('loading');
    setSyncError('');
    try {
      const res = await fetch(`/api/sync?code=${code}`);
      if (res.status === 404) { setSyncStatus('error'); setSyncError(t('sync_err_not_found')); return; }
      if (!res.ok) throw new Error();
      const json = await res.json();
      restoreData(json.data);
      setSyncStatus('loaded');
      setIsSyncOpen(false);
      toast({ title: t('sync_success_load') });
    } catch {
      setSyncStatus('error');
      setSyncError(t('sync_err_generic'));
    }
  };

  const handleCopySyncCode = () => {
    navigator.clipboard.writeText(syncCode);
    setSyncCopied(true);
    setTimeout(() => setSyncCopied(false), 2000);
  };

  const handleApplyTemplate = () => {
    const template = BUDGET_TEMPLATES.find(t => t.id === selectedTemplateId);
    if (!template || quickIncome <= 0) return;
    loadTemplate(
      quickIncome,
      template.cats.map(cat => ({
        name: cat.name[lang] || cat.name['en'],
        type: cat.type,
        pct: cat.pct,
      }))
    );
    setIsQuickStartOpen(false);
    setSelectedTemplateId('');
    setQuickIncome(0);
    toast({ title: t('qs_applied') });
  };

  const selectedTemplate = BUDGET_TEMPLATES.find(t => t.id === selectedTemplateId);
  const previewGroups = selectedTemplate ? {
    needs: selectedTemplate.cats.filter(c => c.type === 'needs'),
    wants: selectedTemplate.cats.filter(c => c.type === 'wants'),
    savings: selectedTemplate.cats.filter(c => c.type === 'savings'),
  } : null;

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
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 bg-card p-6 rounded-[2.5rem] shadow-xl border-2">
        {/* Fixed Overlap Container */}
        <div className="flex items-center gap-4 bg-muted/30 p-5 rounded-3xl border-2 border-dashed w-full md:w-auto min-w-[300px]">
          <div className="p-4 bg-primary/10 rounded-2xl text-primary shrink-0">
            <Wallet className="h-7 w-7" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              {t('income_label')}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xl font-black text-muted-foreground/40 shrink-0">
                {getCurrencyCode()}
              </span>
              <input 
                type="number" 
                value={income === 0 ? '' : income} 
                onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
                className="text-3xl font-black bg-transparent border-none focus:ring-0 focus:outline-none w-full p-0 tabular-nums"
                placeholder="0"
              />
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

        <div className="flex gap-2 flex-wrap justify-center">
          <Button
            variant="outline"
            onClick={() => setIsQuickStartOpen(true)}
            className="h-14 px-6 font-black uppercase tracking-widest rounded-2xl border-2 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <Sparkles className="mr-2 h-4 w-4" /> {t('qs_btn')}
          </Button>
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

          {/* SECTION: SISTEM */}
          <Card className="bg-card border-2 rounded-[2rem] p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 border-b pb-4">
              <Settings className="h-5 w-5 text-primary" />
              <h3 className="font-black uppercase tracking-tight text-sm">{t('system')}</h3>
            </div>
            <div className="flex flex-col gap-2">
              {/* 0. Cloud Sync — featured */}
              <button
                onClick={() => { setSyncStatus('idle'); setSyncCode(''); setSyncInputCode(''); setSyncError(''); setIsSyncOpen(true); }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] hover:bg-primary/90 transition-colors"
              >
                <Cloud size={16} />
                {t('sync_btn')}
              </button>

              {/* 1. Export CSV */}
              <button
                onClick={handleExportCSV}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-muted/60 border border-border/60 text-foreground/70 font-bold uppercase tracking-widest text-[10px] hover:bg-muted transition-colors"
              >
                <FileSpreadsheet size={16} className="text-emerald-500" />
                {t('btn_excel')}
              </button>

              {/* 2. Data Management (JSON) */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-muted/60 border border-border/60 text-foreground/70 font-bold uppercase tracking-widest text-[10px] hover:bg-muted transition-colors">
                    <Database size={16} className="text-blue-500" />
                    {t('btn_data_mgmt')}
                  </button>
                </DialogTrigger>
                <DialogContent className="rounded-[2rem]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black uppercase tracking-tighter">
                      {t('btn_data_mgmt')}
                    </DialogTitle>
                  </DialogHeader>
                  <DataPersistence 
                    data={{ income, categories, transactions }} 
                    onRestore={(data) => restoreData(data)} 
                    fileNamePrefix="versokit-budget" 
                  />
                </DialogContent>
              </Dialog>

              {/* 3. Reset Data */}
              <button
                onClick={() => { if(confirm(globalT('reset') + '?')) resetMonth() }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 font-bold uppercase tracking-widest text-[10px] hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors"
              >
                <Trash2 size={16} />
                {t('reset_data')}
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Cloud Sync Dialog */}
      <Dialog open={isSyncOpen} onOpenChange={setIsSyncOpen}>
        <DialogContent className="rounded-[2rem] max-w-sm overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-lg font-black uppercase tracking-tighter leading-tight">
              <Cloud className="inline h-5 w-5 mr-1.5 text-primary align-middle" />
              {t('sync_title')}
            </DialogTitle>
            <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">{t('sync_subtitle')}</p>
          </DialogHeader>

          <div className="space-y-6 py-2">
            {/* SAVE SECTION */}
            <div className="space-y-3">
              <button
                onClick={handleSaveToCloud}
                disabled={syncStatus === 'saving'}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary text-white font-black uppercase tracking-widest text-[10px] hover:bg-primary/90 disabled:opacity-60 transition-colors"
              >
                <CloudUpload size={18} />
                {syncStatus === 'saving' ? t('sync_saving') : t('sync_save')}
              </button>

              {syncStatus === 'saved' && syncCode && (
                <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-4 space-y-2">
                  <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">{t('sync_your_code')}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-black tracking-[0.3em] text-primary flex-1 text-center">{syncCode}</span>
                    <button
                      onClick={handleCopySyncCode}
                      className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                      title={t('sync_copy')}
                    >
                      {syncCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-primary" />}
                    </button>
                  </div>
                  <p className="text-[9px] text-muted-foreground text-center">{t('sync_expires')}</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* LOAD SECTION */}
            <div className="space-y-3">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t('sync_enter_code')}</p>
              <div className="flex gap-2">
                <input
                  value={syncInputCode}
                  onChange={e => setSyncInputCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8))}
                  placeholder="XXXXXXXX"
                  className="min-w-0 flex-1 text-center text-xl font-black tracking-[0.2em] bg-muted/30 border-2 rounded-xl px-3 py-3 focus:outline-none focus:border-primary uppercase"
                />
                <button
                  onClick={handleLoadFromCloud}
                  disabled={syncInputCode.length < 8 || syncStatus === 'loading'}
                  className="px-4 rounded-xl bg-muted hover:bg-muted/70 disabled:opacity-40 transition-colors"
                >
                  {syncStatus === 'loading'
                    ? <Cloud size={20} className="animate-pulse text-primary" />
                    : <CloudDownload size={20} className="text-primary" />}
                </button>
              </div>
            </div>

            {syncStatus === 'error' && (
              <p className="text-[10px] font-bold text-destructive text-center">{syncError}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Quick Start Dialog */}
      <Dialog open={isQuickStartOpen} onOpenChange={setIsQuickStartOpen}>
        <DialogContent className="rounded-[2rem] max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              {t('qs_title')}
            </DialogTitle>
            <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">{t('qs_subtitle')}</p>
          </DialogHeader>

          {/* Template Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {BUDGET_TEMPLATES.map(template => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplateId(template.id)}
                className={cn(
                  'p-4 rounded-2xl border-2 text-left transition-all',
                  selectedTemplateId === template.id
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-muted hover:border-primary/40 hover:bg-muted/20'
                )}
              >
                <div className="text-3xl mb-2 leading-none">{template.emoji}</div>
                <div className="font-black text-sm uppercase tracking-tight leading-tight">
                  {template.name[lang] || template.name['en']}
                </div>
                <div className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded-full">
                  {template.method}
                </div>
                <div className="text-[10px] mt-2 text-muted-foreground leading-relaxed">
                  {template.desc[lang] || template.desc['en']}
                </div>
              </button>
            ))}
          </div>

          {/* Income Input */}
          {selectedTemplateId && (
            <div className="mt-4 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                {t('qs_income_label')}
              </label>
              <div className="flex items-center gap-2 bg-muted/30 rounded-2xl border-2 px-4 py-3">
                <span className="text-xl font-black text-muted-foreground/50">{getCurrencyCode()}</span>
                <input
                  type="number"
                  value={quickIncome || ''}
                  onChange={e => setQuickIncome(parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  className="flex-1 text-2xl font-black bg-transparent border-none focus:outline-none tabular-nums"
                />
              </div>
            </div>
          )}

          {/* Preview */}
          {previewGroups && quickIncome > 0 && (
            <div className="mt-4 rounded-2xl border-2 overflow-hidden">
              <div className="px-4 py-2 bg-muted/30 border-b">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t('qs_preview')}</span>
              </div>
              {(
                [
                  { key: 'needs', label: t('qs_needs'), cats: previewGroups.needs, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
                  { key: 'wants', label: t('qs_wants'), cats: previewGroups.wants, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/30' },
                  { key: 'savings', label: t('qs_savings'), cats: previewGroups.savings, color: 'text-violet-600', bg: 'bg-violet-50 dark:bg-violet-950/30' },
                ] as const
              ).map(group => {
                const groupPct = group.cats.reduce((s, c) => s + c.pct, 0);
                const groupTotal = Math.round(quickIncome * groupPct);
                return (
                  <div key={group.key}>
                    <div className={cn('flex justify-between items-center px-4 py-2', group.bg)}>
                      <span className={cn('text-[10px] font-black uppercase tracking-widest', group.color)}>
                        {group.label} — {Math.round(groupPct * 100)}%
                      </span>
                      <span className={cn('text-xs font-black tabular-nums', group.color)}>{formatValue(groupTotal)}</span>
                    </div>
                    {group.cats.map(cat => (
                      <div key={cat.name['en']} className="flex justify-between items-center px-6 py-1.5 border-t border-dashed border-muted">
                        <span className="text-[10px] font-bold text-muted-foreground">
                          {cat.name[lang] || cat.name['en']}
                        </span>
                        <span className="text-[10px] font-black tabular-nums">{formatValue(Math.round(quickIncome * cat.pct))}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          )}

          {/* Action Buttons */}
          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
            <button
              onClick={() => setIsQuickStartOpen(false)}
              className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {t('qs_skip')}
            </button>
            <Button
              onClick={handleApplyTemplate}
              disabled={!selectedTemplateId || quickIncome <= 0}
              className="flex-1 h-12 font-black uppercase tracking-widest rounded-xl"
            >
              <ChevronRight className="mr-1 h-4 w-4" />
              {t('qs_apply')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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

      <SmartAd />
      <SeoContent toolId="budget-planner" />
      <ArticleSection toolId="budget-planner" />
    </div>
  );
}
