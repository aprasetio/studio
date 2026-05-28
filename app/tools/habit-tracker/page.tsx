'use client';

import React, { useState, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarCheck, Settings, BarChart2, ShoppingBag, Trophy } from 'lucide-react';
import { SeoContent } from '@/components/SeoContent';
import { TodayTab } from './components/TodayTab';
import { HabitsTab } from './components/HabitsTab';
import { StatsTab } from './components/StatsTab';
import { ShopTab } from './components/ShopTab';
import { AchievementsTab } from './components/AchievementsTab';
import { useHabitStore } from './store/useHabitStore';

// ─── i18n ────────────────────────────────────────────────────────────────────

const UI_TEXT: Record<string, Record<string, string>> = {
  tab_today:        { en: 'Today', id: 'Hari Ini', de: 'Heute', es: 'Hoy', pt: 'Hoje', fr: "Aujourd'hui", it: 'Oggi' },
  tab_habits:       { en: 'Habits', id: 'Habit', de: 'Gewohnheiten', es: 'Hábitos', pt: 'Hábitos', fr: 'Habitudes', it: 'Abitudini' },
  tab_stats:        { en: 'Stats', id: 'Statistik', de: 'Statistik', es: 'Estadísticas', pt: 'Estatísticas', fr: 'Statistiques', it: 'Statistiche' },
  tab_shop:         { en: 'Shop', id: 'Toko', de: 'Shop', es: 'Tienda', pt: 'Loja', fr: 'Boutique', it: 'Negozio' },
  tab_achieve:      { en: 'Badges', id: 'Lencana', de: 'Abzeichen', es: 'Logros', pt: 'Conquistas', fr: 'Badges', it: 'Obiettivi' },

  completed:        { en: 'done', id: 'selesai', de: 'erledigt', es: 'hechas', pt: 'feitas', fr: 'faites', it: 'fatte' },
  no_habits:        { en: 'No habits yet', id: 'Belum ada habit', de: 'Noch keine Gewohnheiten', es: 'Sin hábitos aún', pt: 'Sem hábitos ainda', fr: 'Aucune habitude', it: 'Nessuna abitudine' },
  add_first_habit:  { en: 'Add your first habit', id: 'Tambah habit pertama', de: 'Erste Gewohnheit hinzufügen', es: 'Añadir primer hábito', pt: 'Adicionar primeiro hábito', fr: 'Ajouter première habitude', it: 'Aggiungi prima abitudine' },
  all_done_title:   { en: 'All done for today!', id: 'Semua selesai hari ini!', de: 'Alles erledigt!', es: '¡Todo listo hoy!', pt: 'Tudo feito hoje!', fr: 'Tout est fait!', it: 'Tutto fatto oggi!' },
  all_done_msg:     { en: 'Amazing work. Keep the streak going!', id: 'Luar biasa! Pertahankan streak-mu!', de: 'Tolle Arbeit. Streak beibehalten!', es: '¡Trabajo increíble! ¡Mantén la racha!', pt: 'Trabalho incrível! Mantenha a sequência!', fr: 'Excellent travail. Continuez!', it: 'Lavoro fantastico. Mantieni la serie!' },

  done:             { en: 'Done', id: 'Selesai', de: 'Erledigt', es: 'Hecho', pt: 'Feito', fr: 'Fait', it: 'Fatto' },
  skipped:          { en: 'Skipped', id: 'Dilewati', de: 'Übersprungen', es: 'Omitido', pt: 'Pulado', fr: 'Ignoré', it: 'Saltato' },
  missed:           { en: 'Missed', id: 'Terlewat', de: 'Verpasst', es: 'Perdido', pt: 'Perdido', fr: 'Manqué', it: 'Mancato' },
  undo:             { en: 'Undo', id: 'Batalkan', de: 'Rückgängig', es: 'Deshacer', pt: 'Desfazer', fr: 'Annuler', it: 'Annulla' },
  skip:             { en: 'Skip', id: 'Lewati', de: 'Überspringen', es: 'Omitir', pt: 'Pular', fr: 'Passer', it: 'Salta' },

  add_habit:        { en: 'Add Habit', id: 'Tambah Habit', de: 'Gewohnheit hinzufügen', es: 'Añadir Hábito', pt: 'Adicionar Hábito', fr: 'Ajouter Habitude', it: 'Aggiungi Abitudine' },
  edit_habit:       { en: 'Edit Habit', id: 'Edit Habit', de: 'Gewohnheit bearbeiten', es: 'Editar Hábito', pt: 'Editar Hábito', fr: 'Modifier Habitude', it: 'Modifica Abitudine' },
  habit_added:      { en: 'Habit added!', id: 'Habit ditambahkan!', de: 'Gewohnheit hinzugefügt!', es: '¡Hábito añadido!', pt: 'Hábito adicionado!', fr: 'Habitude ajoutée!', it: 'Abitudine aggiunta!' },
  habit_updated:    { en: 'Habit updated!', id: 'Habit diperbarui!', de: 'Gewohnheit aktualisiert!', es: '¡Hábito actualizado!', pt: 'Hábito atualizado!', fr: 'Habitude mise à jour!', it: 'Abitudine aggiornata!' },
  confirm_delete:   { en: 'Delete this habit and all its logs?', id: 'Hapus habit ini dan semua log-nya?', de: 'Diese Gewohnheit und alle Protokolle löschen?', es: '¿Eliminar este hábito y todos sus registros?', pt: 'Excluir este hábito e todos os registros?', fr: 'Supprimer cette habitude et tous ses journaux?', it: 'Eliminare questa abitudine e tutti i log?' },
  toggle_active:    { en: 'Toggle active', id: 'Aktif/nonaktif', de: 'Aktiv umschalten', es: 'Activar/desactivar', pt: 'Ativar/desativar', fr: 'Activer/désactiver', it: 'Attiva/disattiva' },
  active:           { en: 'Active', id: 'Aktif', de: 'Aktiv', es: 'Activo', pt: 'Ativo', fr: 'Actif', it: 'Attivo' },
  inactive:         { en: 'Inactive', id: 'Nonaktif', de: 'Inaktiv', es: 'Inactivo', pt: 'Inativo', fr: 'Inactif', it: 'Inattivo' },
  reminders:        { en: 'Reminders', id: 'Pengingat', de: 'Erinnerungen', es: 'Recordatorios', pt: 'Lembretes', fr: 'Rappels', it: 'Promemoria' },
  notification_denied: { en: 'Notification permission denied', id: 'Izin notifikasi ditolak', de: 'Benachrichtigungsberechtigung verweigert', es: 'Permiso de notificación denegado', pt: 'Permissão de notificação negada', fr: 'Permission de notification refusée', it: 'Permesso notifica negato' },

  emoji:            { en: 'Emoji', id: 'Emoji', de: 'Emoji', es: 'Emoji', pt: 'Emoji', fr: 'Emoji', it: 'Emoji' },
  habit_name:       { en: 'Habit Name', id: 'Nama Habit', de: 'Gewohnheitsname', es: 'Nombre del Hábito', pt: 'Nome do Hábito', fr: "Nom de l'Habitude", it: 'Nome Abitudine' },
  habit_name_placeholder: { en: 'e.g. Morning Run', id: 'mis. Lari Pagi', de: 'z.B. Morgenlauf', es: 'ej. Correr mañana', pt: 'ex. Corrida matinal', fr: 'ex. Course matinale', it: 'es. Corsa mattutina' },
  color:            { en: 'Color', id: 'Warna', de: 'Farbe', es: 'Color', pt: 'Cor', fr: 'Couleur', it: 'Colore' },
  category:         { en: 'Category', id: 'Kategori', de: 'Kategorie', es: 'Categoría', pt: 'Categoria', fr: 'Catégorie', it: 'Categoria' },
  stack_after:      { en: 'Stack After', id: 'Sambungkan Setelah', de: 'Nach stapeln', es: 'Apilar después', pt: 'Empilhar após', fr: 'Empiler après', it: 'Impila dopo' },
  none:             { en: 'None', id: 'Tidak ada', de: 'Keine', es: 'Ninguno', pt: 'Nenhum', fr: 'Aucun', it: 'Nessuno' },
  reminder_time:    { en: 'Reminder Time', id: 'Waktu Pengingat', de: 'Erinnerungszeit', es: 'Hora de recordatorio', pt: 'Hora do lembrete', fr: 'Heure du rappel', it: 'Ora promemoria' },
  reminder_hint:    { en: 'Browser notification (only when app is open)', id: 'Notifikasi browser (hanya saat app terbuka)', de: 'Browser-Benachrichtigung (nur wenn App offen)', es: 'Notificación del navegador (solo cuando la app está abierta)', pt: 'Notificação do navegador (somente quando o app estiver aberto)', fr: "Notification navigateur (uniquement quand l'app est ouverte)", it: "Notifica browser (solo quando l'app è aperta)" },
  save:             { en: 'Save', id: 'Simpan', de: 'Speichern', es: 'Guardar', pt: 'Salvar', fr: 'Enregistrer', it: 'Salva' },
  cancel:           { en: 'Cancel', id: 'Batal', de: 'Abbrechen', es: 'Cancelar', pt: 'Cancelar', fr: 'Annuler', it: 'Annulla' },

  cat_health:       { en: 'Health', id: 'Kesehatan', de: 'Gesundheit', es: 'Salud', pt: 'Saúde', fr: 'Santé', it: 'Salute' },
  cat_fitness:      { en: 'Fitness', id: 'Olahraga', de: 'Fitness', es: 'Ejercicio', pt: 'Academia', fr: 'Sport', it: 'Fitness' },
  cat_learning:     { en: 'Learning', id: 'Belajar', de: 'Lernen', es: 'Aprender', pt: 'Aprendizado', fr: 'Apprentissage', it: 'Apprendimento' },
  cat_mindfulness:  { en: 'Mindfulness', id: 'Mindfulness', de: 'Achtsamkeit', es: 'Mindfulness', pt: 'Mindfulness', fr: 'Pleine conscience', it: 'Mindfulness' },
  cat_productivity: { en: 'Productivity', id: 'Produktivitas', de: 'Produktivität', es: 'Productividad', pt: 'Produtividade', fr: 'Productivité', it: 'Produttività' },
  cat_custom:       { en: 'Custom', id: 'Kustom', de: 'Benutzerdefiniert', es: 'Personalizado', pt: 'Personalizado', fr: 'Personnalisé', it: 'Personalizzato' },

  your_coins:       { en: 'Your Coins', id: 'Koin Kamu', de: 'Deine Münzen', es: 'Tus Monedas', pt: 'Suas Moedas', fr: 'Tes Pièces', it: 'Le tue Monete' },
  streak_shield:    { en: 'Streak Shield', id: 'Pelindung Streak', de: 'Streak-Schild', es: 'Escudo de Racha', pt: 'Escudo de Sequência', fr: 'Bouclier de Série', it: 'Scudo Sequenza' },
  shield_desc:      { en: 'Protects your streak from a missed day. Auto-activates when needed.', id: 'Melindungi streak dari hari yang terlewat. Aktif otomatis saat dibutuhkan.', de: 'Schützt deine Serie vor einem verpassten Tag.', es: 'Protege tu racha de un día perdido.', pt: 'Protege sua sequência de um dia perdido.', fr: "Protège ta série d'un jour manqué.", it: 'Protegge la tua sequenza da un giorno mancato.' },
  buy_shield:       { en: 'Buy Shield', id: 'Beli Pelindung', de: 'Schild kaufen', es: 'Comprar Escudo', pt: 'Comprar Escudo', fr: 'Acheter Bouclier', it: 'Acquista Scudo' },
  not_enough_coins: { en: 'Not enough coins!', id: 'Koin tidak cukup!', de: 'Nicht genug Münzen!', es: '¡No hay suficientes monedas!', pt: 'Moedas insuficientes!', fr: 'Pas assez de pièces!', it: 'Monete insufficienti!' },
  max_shields:      { en: 'Already at max shields!', id: 'Sudah maksimal!', de: 'Bereits maximale Schilde!', es: '¡Ya tienes el máximo de escudos!', pt: 'Já está no máximo de escudos!', fr: 'Déjà au maximum de boucliers!', it: 'Già al massimo di scudi!' },
  max_shields_owned:{ en: 'Max Shields Owned', id: 'Pelindung Penuh', de: 'Max. Schilde vorhanden', es: 'Escudos Máximos', pt: 'Escudos Máximos', fr: 'Boucliers Max', it: 'Scudi Massimi' },
  shield_bought:    { en: 'Shield purchased!', id: 'Pelindung dibeli!', de: 'Schild gekauft!', es: '¡Escudo comprado!', pt: 'Escudo comprado!', fr: 'Bouclier acheté!', it: 'Scudo acquistato!' },
  how_to_earn:      { en: 'How to Earn', id: 'Cara Mendapatkan', de: 'Wie verdienen', es: 'Cómo Ganar', pt: 'Como Ganhar', fr: 'Comment Gagner', it: 'Come Guadagnare' },
  earn_done:        { en: 'Complete a habit', id: 'Selesaikan habit', de: 'Gewohnheit abschließen', es: 'Completar un hábito', pt: 'Completar um hábito', fr: 'Compléter une habitude', it: "Completare un'abitudine" },
  earn_skip:        { en: 'Skip a habit', id: 'Lewati habit', de: 'Gewohnheit überspringen', es: 'Omitir un hábito', pt: 'Pular um hábito', fr: 'Passer une habitude', it: "Saltare un'abitudine" },
  earn_chest:       { en: 'Open Mystery Chest', id: 'Buka Peti Misteri', de: 'Mysteriöse Truhe öffnen', es: 'Abrir Cofre Misterioso', pt: 'Abrir Baú Misterioso', fr: 'Ouvrir Coffre Mystère', it: 'Aprire Forziere Misterioso' },
  coin_rate_note:   { en: '1 coin earned per 10 XP', id: '1 koin per 10 XP', de: '1 Münze pro 10 XP', es: '1 moneda por 10 XP', pt: '1 moeda por 10 XP', fr: '1 pièce par 10 XP', it: '1 moneta per 10 XP' },
  coming_soon:      { en: 'Coming Soon', id: 'Segera Hadir', de: 'Demnächst', es: 'Próximamente', pt: 'Em Breve', fr: 'Bientôt', it: 'Presto' },
  custom_themes:    { en: 'Custom Themes', id: 'Tema Kustom', de: 'Benutzerdefinierte Designs', es: 'Temas Personalizados', pt: 'Temas Personalizados', fr: 'Thèmes Personnalisés', it: 'Temi Personalizzati' },
  snooze_reminder:  { en: 'Snooze Reminder', id: 'Tunda Pengingat', de: 'Erinnerung schlummern', es: 'Posponer Recordatorio', pt: 'Soneca do Lembrete', fr: 'Reporter Rappel', it: 'Posponi Promemoria' },
  habit_insights:   { en: 'Habit Insights', id: 'Insight Habit', de: 'Gewohnheits-Einblicke', es: 'Perspectivas de Hábitos', pt: 'Insights de Hábitos', fr: 'Aperçus des Habitudes', it: 'Approfondimenti Abitudini' },

  total_done:       { en: 'Total Done', id: 'Total Selesai', de: 'Gesamt erledigt', es: 'Total Hechos', pt: 'Total Feito', fr: 'Total Fait', it: 'Totale Fatto' },
  best_streak:      { en: 'Best Streak', id: 'Streak Terbaik', de: 'Beste Serie', es: 'Mejor Racha', pt: 'Melhor Sequência', fr: 'Meilleure Série', it: 'Miglior Sequenza' },
  avg_completion:   { en: 'Avg (7d)', id: 'Rata-rata (7h)', de: 'Ø (7T)', es: 'Promedio (7d)', pt: 'Média (7d)', fr: 'Moy. (7j)', it: 'Media (7g)' },
  total_xp:         { en: 'Total XP', id: 'Total XP', de: 'Gesamt XP', es: 'XP Total', pt: 'XP Total', fr: 'XP Total', it: 'XP Totale' },
  weekly_completion:{ en: 'Weekly Completion', id: 'Penyelesaian Mingguan', de: 'Wöchentlicher Abschluss', es: 'Completado Semanal', pt: 'Conclusão Semanal', fr: 'Achèvement Hebdo', it: 'Completamento Settimanale' },
  daily_xp:         { en: 'Daily XP', id: 'XP Harian', de: 'Tägliche XP', es: 'XP Diario', pt: 'XP Diário', fr: 'XP Quotidien', it: 'XP Giornaliero' },
  days:             { en: 'days', id: 'hari', de: 'Tage', es: 'días', pt: 'dias', fr: 'jours', it: 'giorni' },
  all_time_distribution: { en: 'All-Time Distribution', id: 'Distribusi Sepanjang Waktu', de: 'Gesamtverteilung', es: 'Distribución Total', pt: 'Distribuição Total', fr: 'Distribution Totale', it: 'Distribuzione Totale' },
  no_data:          { en: 'Add habits to see statistics', id: 'Tambah habit untuk melihat statistik', de: 'Gewohnheiten hinzufügen für Statistiken', es: 'Añade hábitos para ver estadísticas', pt: 'Adicione hábitos para ver estatísticas', fr: 'Ajoutez des habitudes pour voir les statistiques', it: 'Aggiungi abitudini per vedere le statistiche' },

  achievements_unlocked: { en: 'Achievements Unlocked', id: 'Lencana Terbuka', de: 'Erfolge freigeschaltet', es: 'Logros Desbloqueados', pt: 'Conquistas Desbloqueadas', fr: 'Succès Débloqués', it: 'Obiettivi Sbloccati' },
  unlocked:         { en: 'Unlocked', id: 'Terbuka', de: 'Freigeschaltet', es: 'Desbloqueado', pt: 'Desbloqueado', fr: 'Débloqué', it: 'Sbloccato' },
  chest_available:  { en: 'Mystery Chest Available!', id: 'Peti Misteri Tersedia!', de: 'Mysteriöse Truhe verfügbar!', es: '¡Cofre Misterioso Disponible!', pt: 'Baú Misterioso Disponível!', fr: 'Coffre Mystère Disponible!', it: 'Forziere Misterioso Disponibile!' },
  chest_desc:       { en: 'You completed 80%+ of habits this week. Open for bonus XP & coins!', id: 'Kamu menyelesaikan 80%+ habit minggu ini. Buka untuk bonus XP & koin!', de: 'Du hast diese Woche 80%+ erledigt. Öffne für Bonus XP & Münzen!', es: 'Completaste 80%+ de hábitos esta semana. ¡Abre para XP y monedas extra!', pt: 'Você completou 80%+ dos hábitos esta semana. Abra para XP e moedas bônus!', fr: 'Tu as complété 80%+ des habitudes cette semaine. Ouvre pour XP & pièces bonus!', it: 'Hai completato 80%+ delle abitudini questa settimana. Apri per XP e monete bonus!' },
  open_chest:       { en: 'Open Chest', id: 'Buka Peti', de: 'Truhe öffnen', es: 'Abrir Cofre', pt: 'Abrir Baú', fr: 'Ouvrir le Coffre', it: 'Apri Forziere' },
  chest_opened:     { en: 'Chest opened! Bonus XP & coins awarded!', id: 'Peti dibuka! Bonus XP & koin diterima!', de: 'Truhe geöffnet! Bonus XP & Münzen erhalten!', es: '¡Cofre abierto! ¡XP y monedas extra otorgadas!', pt: 'Baú aberto! XP e moedas bônus concedidas!', fr: 'Coffre ouvert! XP & pièces bonus accordées!', it: 'Forziere aperto! XP e monete bonus assegnate!' },
  chest_locked:     { en: 'Mystery Chest Locked', id: 'Peti Misteri Terkunci', de: 'Mysteriöse Truhe gesperrt', es: 'Cofre Misterioso Bloqueado', pt: 'Baú Misterioso Bloqueado', fr: 'Coffre Mystère Verrouillé', it: 'Forziere Misterioso Bloccato' },
  chest_locked_desc:{ en: 'Complete 80% of habits this week to unlock. Current: {rate}%', id: 'Selesaikan 80% habit minggu ini untuk membuka. Saat ini: {rate}%', de: 'Erledige 80% dieser Woche. Aktuell: {rate}%', es: 'Completa 80% esta semana. Actual: {rate}%', pt: 'Complete 80% esta semana. Atual: {rate}%', fr: 'Completez 80% cette semaine. Actuel: {rate}%', it: 'Completa 80% questa settimana. Attuale: {rate}%' },
  next_chest:       { en: 'Next chest', id: 'Peti berikutnya', de: 'Nächste Truhe', es: 'Próximo cofre', pt: 'Próximo baú', fr: 'Prochain coffre', it: 'Prossimo forziere' },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function HabitTrackerPage() {
  const { lang } = useLang();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('today');
  const { habits, notificationsEnabled } = useHabitStore();

  useEffect(() => { setMounted(true); }, []);

  // Schedule browser notifications for today
  useEffect(() => {
    if (!mounted || !notificationsEnabled || Notification.permission !== 'granted') return;
    const now = new Date();
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    habits.forEach(h => {
      if (!h.isActive || !h.reminderTime) return;
      const [hh, mm] = h.reminderTime.split(':').map(Number);
      const target = new Date(now);
      target.setHours(hh, mm, 0, 0);
      if (target <= now) target.setDate(target.getDate() + 1); // tomorrow
      const ms = target.getTime() - now.getTime();
      const tid = setTimeout(() => {
        new Notification(`${h.emoji} ${h.name}`, { body: t('habit_reminder_body') ?? 'Time to log your habit!' });
      }, ms);
      timeouts.push(tid);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [mounted, notificationsEnabled, habits]);

  const t = (key: string): string => {
    const entry = UI_TEXT[key];
    if (!entry) return key;
    return entry[lang] ?? entry['en'] ?? key;
  };

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-black uppercase tracking-tighter">
          🔥 {lang === 'id' ? 'Pelacak Habit' : 'Habit Tracker'}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {lang === 'id'
            ? 'Bangun kebiasaan baik, satu hari dalam satu waktu.'
            : 'Build good habits, one day at a time.'}
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-5 h-auto p-1 rounded-2xl bg-muted/60">
          {[
            { value: 'today',   icon: CalendarCheck, label: t('tab_today') },
            { value: 'habits',  icon: Settings,      label: t('tab_habits') },
            { value: 'stats',   icon: BarChart2,     label: t('tab_stats') },
            { value: 'shop',    icon: ShoppingBag,   label: t('tab_shop') },
            { value: 'achieve', icon: Trophy,        label: t('tab_achieve') },
          ].map(({ value, icon: Icon, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex flex-col gap-1 py-2.5 px-1 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Icon className="h-4 w-4" />
              <span className="text-[9px] font-black uppercase tracking-wider leading-none">{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="today" className="mt-4 focus-visible:outline-none">
          <TodayTab t={t} onAddHabit={() => setActiveTab('habits')} />
        </TabsContent>

        <TabsContent value="habits" className="mt-4 focus-visible:outline-none">
          <HabitsTab t={t} />
        </TabsContent>

        <TabsContent value="stats" className="mt-4 focus-visible:outline-none">
          <StatsTab t={t} />
        </TabsContent>

        <TabsContent value="shop" className="mt-4 focus-visible:outline-none">
          <ShopTab t={t} />
        </TabsContent>

        <TabsContent value="achieve" className="mt-4 focus-visible:outline-none">
          <AchievementsTab t={t} />
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <SeoContent toolId="habit-tracker" />
      </div>
    </div>
  );
}
