'use client';

import React, { useState, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarCheck, BarChart2, BookOpen, Trophy } from 'lucide-react';
import { SeoContent } from '@/components/SeoContent';
import { TodayTab } from './components/TodayTab';
import { StatsTab } from './components/StatsTab';
import { MuhasabahTab } from './components/MuhasabahTab';
import { AchievementsTab } from './components/AchievementsTab';

// ─── i18n ────────────────────────────────────────────────────────────────────

const UI_TEXT: Record<string, Record<string, string>> = {
  // Tabs
  tab_today:      { en: 'Today', id: 'Hari Ini', de: 'Heute', es: 'Hoy', pt: 'Hoje', fr: "Auj.", it: 'Oggi' },
  tab_stats:      { en: 'Stats', id: 'Statistik', de: 'Statistik', es: 'Stats', pt: 'Stats', fr: 'Stats', it: 'Stats' },
  tab_muhasabah:  { en: 'Muhasabah', id: 'Muhasabah', de: 'Muhasabah', es: 'Muhasabah', pt: 'Muhasabah', fr: 'Muhasabah', it: 'Muhasabah' },
  tab_achieve:    { en: 'Badges', id: 'Lencana', de: 'Abzeichen', es: 'Logros', pt: 'Conquistas', fr: 'Badges', it: 'Badge' },

  // Today tab
  fardhu_done:          { en: 'obligatory prayers done', id: 'sholat fardhu selesai', de: 'Pflichtgebete erledigt', es: 'oraciones obligatorias', pt: 'orações obrigatórias', fr: 'prières obligatoires', it: 'preghiere obbligatorie' },
  earned_today:         { en: 'earned today', id: 'didapatkan hari ini', de: 'heute verdient', es: 'ganados hoy', pt: 'ganhos hoje', fr: "gagnés aujourd'hui", it: 'guadagnati oggi' },
  fardhu_complete_title:{ en: 'All 5 Prayers Complete!', id: 'Alhamdulillah! Sholat 5 Waktu Lengkap!', de: 'Alle 5 Gebete vollständig!', es: '¡5 oraciones completadas!', pt: '5 orações completadas!', fr: '5 prières accomplies!', it: '5 preghiere completate!' },
  fardhu_complete_hadith: { en: 'The five daily prayers are among the greatest acts of worship.', id: 'Sholat lima waktu adalah tiang agama. Barangsiapa menegakkannya, ia telah menegakkan agama.', de: 'Die fünf Gebete sind unter den größten Gottesdienstakten.', es: 'Las cinco oraciones son los actos de adoración más importantes.', pt: 'As cinco orações diárias estão entre os maiores atos de adoração.', fr: 'Les cinq prières quotidiennes sont parmi les plus grands actes d\'adoration.', it: 'Le cinque preghiere quotidiane sono tra i più grandi atti di adorazione.' },
  ibadah_settings:      { en: 'Ibadah Settings', id: 'Pengaturan Ibadah', de: 'Gottesdienst-Einstellungen', es: 'Ajustes de Adoración', pt: 'Configurações de Adoração', fr: 'Paramètres d\'Adoration', it: 'Impostazioni Adorazione' },
  ibadah_settings_desc: { en: 'Enable or disable optional acts of worship to track', id: 'Aktifkan atau nonaktifkan ibadah sunnah yang ingin dilacak', de: 'Optionale Gottesdienstakte aktivieren oder deaktivieren', es: 'Activa o desactiva actos de adoración opcionales', pt: 'Ativar ou desativar atos de adoração opcionais', fr: 'Activer ou désactiver les actes de culte optionnels', it: 'Attiva o disattiva atti di adorazione opzionali' },

  // IbadahCard
  done:           { en: 'Done', id: 'Selesai', de: 'Erledigt', es: 'Hecho', pt: 'Feito', fr: 'Fait', it: 'Fatto' },
  jamaah:         { en: 'Jamaah', id: 'Jamaah', de: 'Gemeinsam', es: 'Congregación', pt: 'Congregação', fr: 'Jamaah', it: 'Jamaah' },
  mark_missed:    { en: 'Mark Missed', id: 'Tandai Terlewat', de: 'Als verpasst markieren', es: 'Marcar Perdido', pt: 'Marcar Perdido', fr: 'Marquer Manqué', it: 'Segna Mancato' },
  undo:           { en: 'Undo', id: 'Batalkan', de: 'Rückgängig', es: 'Deshacer', pt: 'Desfazer', fr: 'Annuler', it: 'Annulla' },
  missed_fardhu_note: { en: 'This obligatory prayer was missed. Please make qadha as soon as possible.', id: 'Sholat fardhu ini terlewat. Segera lakukan qadha dan bertaubat kepada Allah.', de: 'Dieses Pflichtgebet wurde verpasst. Bitte bald nachholen und Tawba machen.', es: 'Esta oración obligatoria fue omitida. Por favor realiza qadha lo antes posible.', pt: 'Esta oração obrigatória foi perdida. Por favor, realize qadha o mais breve possível.', fr: 'Cette prière obligatoire a été manquée. Veuillez faire qadha dès que possible.', it: 'Questa preghiera obbligatoria è stata mancata. Si prega di fare qadha il prima possibile.' },
  missed_note:    { en: 'Marked as missed.', id: 'Ditandai sebagai terlewat.', de: 'Als verpasst markiert.', es: 'Marcado como perdido.', pt: 'Marcado como perdido.', fr: 'Marqué comme manqué.', it: 'Segnato come mancato.' },

  // Stats tab
  fardhu_streak:       { en: 'Fardhu Streak', id: 'Streak Fardhu', de: 'Pflicht-Serie', es: 'Racha Fardhu', pt: 'Sequência Fardhu', fr: 'Série Fardhu', it: 'Serie Fardhu' },
  total_ibadah:        { en: 'Total Done', id: 'Total Ibadah', de: 'Gesamt erledigt', es: 'Total Ibadah', pt: 'Total Ibadah', fr: 'Total Ibadah', it: 'Totale Ibadah' },
  total_ap:            { en: 'Amal Points', id: 'Total AP', de: 'Amal-Punkte', es: 'Puntos Amal', pt: 'Pontos Amal', fr: 'Points Amal', it: 'Punti Amal' },
  total_jamaah:        { en: 'Congregation', id: 'Sholat Jamaah', de: 'Gemeinschaftsgebet', es: 'Congregación', pt: 'Congregação', fr: 'Prière Commune', it: 'Preghiera Comune' },
  weekly_fardhu_chart: { en: 'Weekly Fardhu Completion', id: 'Sholat Fardhu 7 Hari', de: 'Wöchentliches Pflichtgebet', es: 'Oración Semanal', pt: 'Oração Semanal', fr: 'Prière Hebdomadaire', it: 'Preghiera Settimanale' },
  max_5_per_day:       { en: 'Max 5 per day (green = done, blue = jamaah)', id: 'Maks. 5 per hari (hijau = selesai, biru = jamaah)', de: 'Max. 5 pro Tag', es: 'Máx. 5 por día', pt: 'Máx. 5 por dia', fr: 'Max. 5 par jour', it: 'Max. 5 al giorno' },
  daily_ap:            { en: 'Daily Amal Points', id: 'AP Harian', de: 'Tägliche AP', es: 'AP Diario', pt: 'AP Diário', fr: 'AP Quotidien', it: 'AP Giornaliero' },
  days:                { en: 'days', id: 'hari', de: 'Tage', es: 'días', pt: 'dias', fr: 'jours', it: 'giorni' },
  ibadah_breakdown:    { en: 'Ibadah Breakdown', id: 'Komposisi Ibadah', de: 'Gottesdienst-Aufschlüsselung', es: 'Desglose de Adoración', pt: 'Composição Adoração', fr: 'Répartition Adoration', it: 'Suddivisione Adorazione' },
  no_data_yet:         { en: 'Start logging ibadah to see stats', id: 'Mulai catat ibadah untuk melihat statistik', de: 'Beginne Gottesdienste zu protokollieren', es: 'Empieza a registrar adoraciones', pt: 'Comece a registrar adorações', fr: 'Commencez à enregistrer vos adorations', it: 'Inizia a registrare adorazioni' },

  // Muhasabah tab
  weekly_muhasabah:  { en: 'Weekly Muhasabah', id: 'Muhasabah Mingguan', de: 'Wöchentliche Muhasabah', es: 'Muhasabah Semanal', pt: 'Muhasabah Semanal', fr: 'Muhasabah Hebdomadaire', it: 'Muhasabah Settimanale' },
  last_7_days:       { en: 'Last 7 days', id: '7 hari terakhir', de: 'Letzte 7 Tage', es: 'Últimos 7 días', pt: 'Últimos 7 dias', fr: '7 derniers jours', it: 'Ultimi 7 giorni' },
  fardhu_rate:       { en: 'Fardhu Rate', id: 'Tingkat Fardhu', de: 'Pflichtgebetsrate', es: 'Tasa Fardhu', pt: 'Taxa Fardhu', fr: 'Taux Fardhu', it: 'Tasso Fardhu' },
  fardhu_streak_days:{ en: 'Day Streak', id: 'Hari Beruntun', de: 'Tage-Serie', es: 'Racha de Días', pt: 'Dias Seguidos', fr: 'Jours de Suite', it: 'Giorni Consecutivi' },
  weekly_ap:         { en: 'Weekly AP', id: 'AP Minggu Ini', de: 'Wöchentliche AP', es: 'AP Semanal', pt: 'AP Semanal', fr: 'AP Hebdomadaire', it: 'AP Settimanale' },
  daily_fardhu_7:    { en: '7-Day Fardhu Map', id: 'Peta Fardhu 7 Hari', de: '7-Tage-Karte', es: 'Mapa 7 Días', pt: 'Mapa 7 Dias', fr: 'Carte 7 Jours', it: 'Mappa 7 Giorni' },
  pending:           { en: 'Pending', id: 'Belum', de: 'Ausstehend', es: 'Pendiente', pt: 'Pendente', fr: 'En attente', it: 'In attesa' },
  missed:            { en: 'Missed', id: 'Terlewat', de: 'Verpasst', es: 'Perdido', pt: 'Perdido', fr: 'Manqué', it: 'Mancato' },
  sunnah_done_week:  { en: 'sunnah ibadah this week', id: 'ibadah sunnah minggu ini', de: 'sunnah Gottesdienste diese Woche', es: 'adoraciones sunnah esta semana', pt: 'adorações sunnah esta semana', fr: 'adorations sunnah cette semaine', it: 'adorazioni sunnah questa settimana' },
  sunnah_week_note:  { en: 'Every sunnah act is a step closer to Allah', id: 'Setiap amalan sunnah mendekatkan diri kepada Allah', de: 'Jeder Sunnah-Akt bringt dich Allah näher', es: 'Cada acto sunnah es un paso hacia Allah', pt: 'Cada ato sunnah é um passo em direção a Allah', fr: 'Chaque acte sunnah est un pas vers Allah', it: 'Ogni atto sunnah è un passo verso Allah' },
  qadha_reminder:    { en: 'Qadha Reminder', id: 'Pengingat Qadha', de: 'Qadha-Erinnerung', es: 'Recordatorio Qadha', pt: 'Lembrete Qadha', fr: 'Rappel Qadha', it: 'Promemoria Qadha' },
  qadha_desc:        { en: 'These obligatory prayers were missed. Make them up (qadha) as soon as possible.', id: 'Sholat-sholat fardhu berikut terlewat. Segera laksanakan qadha.', de: 'Diese Pflichtgebete wurden verpasst. Bitte so bald wie möglich nachholen.', es: 'Estas oraciones obligatorias fueron omitidas. Compénsalas lo antes posible.', pt: 'Estas orações obrigatórias foram perdidas. Faça-as o mais breve possível.', fr: 'Ces prières obligatoires ont été manquées. Compensez-les dès que possible.', it: 'Queste preghiere obbligatorie sono state mancate. Recuperale il prima possibile.' },
  taubat_reminder:   { en: '"And seek the forgiveness of your Lord and turn to Him in repentance." — QS. Hud: 90', id: '"Dan mohonlah ampun kepada Tuhanmu dan bertobatlah kepada-Nya." — QS. Hud: 90', de: '"Bittet euren Herrn um Vergebung und wendet euch reuevoll an Ihn." — QS. Hud: 90', es: '"Pide perdón a tu Señor y vuélvete a Él en arrepentimiento." — QS. Hud: 90', pt: '"Pede perdão ao teu Senhor e volta-te a Ele em arrependimento." — QS. Hud: 90', fr: '"Demandez pardon à votre Seigneur et revenez-Lui repentants." — QS. Hud: 90', it: '"Chiedi perdono al tuo Signore e ritorna a Lui pentito." — QS. Hud: 90' },
  perfect_week:      { en: 'Perfect Week — Alhamdulillah!', id: 'Pekan Sempurna — Alhamdulillah!', de: 'Perfekte Woche — Alhamdulillah!', es: 'Semana Perfecta — ¡Alhamdulillah!', pt: 'Semana Perfeita — Alhamdulillah!', fr: 'Semaine Parfaite — Alhamdulillah!', it: 'Settimana Perfetta — Alhamdulillah!' },
  perfect_week_msg:  { en: 'All 5 obligatory prayers were completed every day this week.', id: 'Seluruh sholat 5 waktu terlaksana setiap hari dalam seminggu ini.', de: 'Alle 5 Pflichtgebete wurden diese Woche täglich verrichtet.', es: 'Las 5 oraciones obligatorias fueron completadas todos los días de esta semana.', pt: 'As 5 orações obrigatórias foram completadas todos os dias desta semana.', fr: 'Les 5 prières obligatoires ont été accomplies chaque jour de cette semaine.', it: 'Le 5 preghiere obbligatorie sono state completate ogni giorno di questa settimana.' },
  daily_reminder:    { en: 'Daily Reminder', id: 'Pengingat Harian', de: 'Tägliche Erinnerung', es: 'Recordatorio Diario', pt: 'Lembrete Diário', fr: 'Rappel Quotidien', it: 'Promemoria Quotidiano' },

  // Achievements tab
  achievements_earned: { en: 'Achievements Earned', id: 'Lencana Diraih', de: 'Errungenschaften', es: 'Logros Obtenidos', pt: 'Conquistas Obtidas', fr: 'Succès Obtenus', it: 'Obiettivi Ottenuti' },
  unlocked:            { en: 'Unlocked', id: 'Terbuka', de: 'Freigeschaltet', es: 'Desbloqueado', pt: 'Desbloqueado', fr: 'Débloqué', it: 'Sbloccato' },
  closing_dua_label:   { en: 'Daily Dua', id: "Doa Harian", de: 'Tägliches Dua', es: 'Dua Diaria', pt: 'Dua Diária', fr: 'Dua Quotidien', it: 'Dua Quotidiana' },
  closing_dua:         { en: 'O Allah, help us to remember You, be grateful to You, and to worship You in the best manner.', id: 'Ya Allah, bantulah kami untuk mengingat-Mu, bersyukur kepada-Mu, dan beribadah kepada-Mu dengan sebaik-baiknya.', de: 'O Allah, hilf uns, an Dich zu denken, Dir dankbar zu sein und Dir in der besten Weise zu dienen.', es: 'Oh Allah, ayúdanos a recordarte, agradecerte y adorarte de la mejor manera.', pt: 'Ó Allah, ajuda-nos a Te lembrar, ser grato a Ti e adorar-Te da melhor maneira.', fr: 'Ô Allah, aide-nous à Te souvenir, à T\'être reconnaissants et à T\'adorer de la meilleure façon.', it: 'O Allah, aiutaci a ricordarTi, esserti grati e adorarTi nel modo migliore.' },

  // Category labels for pie chart
  cat_sholat_fardhu: { en: 'Obligatory Prayer', id: 'Sholat Fardhu', de: 'Pflichtgebet', es: 'Oración Fardhu', pt: 'Oração Fardhu', fr: 'Prière Fardhu', it: 'Preghiera Fardhu' },
  cat_sholat_sunnah: { en: 'Sunnah Prayer', id: 'Sholat Sunnah', de: 'Sunnah-Gebet', es: 'Oración Sunnah', pt: 'Oração Sunnah', fr: 'Prière Sunnah', it: 'Preghiera Sunnah' },
  cat_quran:         { en: 'Quran', id: 'Al-Quran', de: 'Koran', es: 'Quran', pt: 'Quran', fr: 'Coran', it: 'Corano' },
  cat_dzikir:        { en: 'Dzikir & Dua', id: 'Dzikir & Doa', de: 'Dhikr & Dua', es: 'Dzikir & Dua', pt: 'Dzikir & Dua', fr: 'Dhikr & Dua', it: 'Dhikr & Dua' },
  cat_puasa:         { en: 'Fasting', id: 'Puasa Sunnah', de: 'Fasten', es: 'Ayuno', pt: 'Jejum', fr: 'Jeûne', it: 'Digiuno' },
  cat_sedekah:       { en: 'Charity', id: 'Sedekah', de: 'Almosen', es: 'Caridad', pt: 'Caridade', fr: 'Charité', it: 'Carità' },
  cat_amal:          { en: 'Good Deeds', id: 'Amal Sholeh', de: 'Gute Taten', es: 'Buenas Obras', pt: 'Boas Ações', fr: 'Bonnes Œuvres', it: 'Buone Opere' },
  cat_insidental:    { en: 'Occasional Deeds', id: 'Ibadah Insidental', de: 'Gelegenheitswerke', es: 'Actos Ocasionales', pt: 'Atos Ocasionais', fr: 'Actes Occasionnels', it: 'Atti Occasionali' },

  // Quantity picker (Tahajud rakaat)
  pick_rakaat: { en: 'Select rakaat count', id: 'Pilih jumlah rakaat', de: 'Rakaat-Anzahl wählen', es: 'Seleccionar rakaat', pt: 'Selecionar rakaat', fr: 'Choisir rakaat', it: 'Seleziona rakaat' },

  // Stats tab — sunnah AP card & level
  sunnah_ap:           { en: 'Sunnah Points', id: 'Poin Sunnah', de: 'Sunnah-Punkte', es: 'Puntos Sunnah', pt: 'Pontos Sunnah', fr: 'Points Sunnah', it: 'Punti Sunnah' },
  current_level:       { en: 'Current Level', id: 'Level Saat Ini', de: 'Aktuelles Level', es: 'Nivel Actual', pt: 'Nível Atual', fr: 'Niveau Actuel', it: 'Livello Attuale' },
  add_sunnah_to_advance: { en: 'Do sunnah to level up', id: 'Tambah sunnah untuk naik level', de: 'Sunnah für Level-Aufstieg', es: 'Añade sunnah para subir', pt: 'Adicione sunnah para avançar', fr: 'Ajoutez sunnah pour progresser', it: 'Aggiungi sunnah per avanzare' },

  // Muhasabah — sunnah level panel
  sunnah_level_title:      { en: 'Level Progression', id: 'Syarat Naik Level', de: 'Level-Aufstieg', es: 'Progresión de Nivel', pt: 'Progressão de Nível', fr: 'Progression de Niveau', it: 'Progressione Livello' },
  sunnah_needed:           { en: 'Sunnah needed', id: 'Sunnah dibutuhkan', de: 'Sunnah benötigt', es: 'Sunnah necesario', pt: 'Sunnah necessário', fr: 'Sunnah requis', it: 'Sunnah necessario' },
  limited_by_sunnah:       { en: 'Sunnah gate', id: 'Syarat sunnah', de: 'Sunnah-Bedingung', es: 'Requisito sunnah', pt: 'Requisito sunnah', fr: 'Condition sunnah', it: 'Requisito sunnah' },
  limited_by_sunnah_desc:  { en: 'Your total AP is enough to advance, but you need more sunnah worship to unlock the next level.', id: 'AP kamu sudah cukup untuk naik level, namun kamu butuh lebih banyak ibadah sunnah untuk membuka level berikutnya.', de: 'Dein Gesamt-AP reicht für den Aufstieg, aber du benötigst mehr Sunnah-Gottesdienste.', es: 'Tu AP total es suficiente, pero necesitas más adoración sunnah para el siguiente nivel.', pt: 'Seu AP total é suficiente, mas precisa de mais adoração sunnah para o próximo nível.', fr: "Votre AP total suffit, mais vous avez besoin de plus d'adoration sunnah pour le niveau suivant.", it: 'Il tuo AP totale è sufficiente, ma hai bisogno di più adorazione sunnah per il prossimo livello.' },
  sunnah_gate_hint:        { en: 'Keep doing sunnah ibadah to unlock the next level!', id: 'Tambah ibadah sunnah untuk membuka level berikutnya!', de: 'Mehr Sunnah für den nächsten Level!', es: '¡Haz más sunnah para desbloquear el siguiente nivel!', pt: 'Faça mais sunnah para desbloquear o próximo nível!', fr: 'Faites plus de sunnah pour débloquer le niveau suivant!', it: 'Fai più sunnah per sbloccare il livello successivo!' },
  max_level_reached:       { en: 'Maximum level reached — may Allah keep you steadfast!', id: 'Level tertinggi tercapai — semoga Allah istiqomahkan!', de: 'Höchstes Level erreicht!', es: '¡Nivel máximo alcanzado!', pt: 'Nível máximo atingido!', fr: 'Niveau maximum atteint!', it: 'Livello massimo raggiunto!' },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function IbadahTrackerPage() {
  const { lang } = useLang();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('today');

  useEffect(() => { setMounted(true); }, []);

  const t = (key: string): string => {
    const entry = UI_TEXT[key];
    if (!entry) return key;
    return entry[lang] ?? entry['en'] ?? key;
  };

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-black uppercase tracking-tighter">🕌 Ibadah Tracker</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {lang === 'id'
            ? 'Lacak ibadah harian & sunnah. Muhasabah setiap saat.'
            : 'Track daily obligatory & sunnah worship. Muhasabah anytime.'}
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 h-auto p-1 rounded-2xl bg-muted/60">
          {[
            { value: 'today',    icon: CalendarCheck, label: t('tab_today') },
            { value: 'stats',    icon: BarChart2,     label: t('tab_stats') },
            { value: 'muhasabah',icon: BookOpen,      label: t('tab_muhasabah') },
            { value: 'achieve',  icon: Trophy,        label: t('tab_achieve') },
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

        <TabsContent value="today"     className="mt-4 focus-visible:outline-none"><TodayTab     t={t} /></TabsContent>
        <TabsContent value="stats"     className="mt-4 focus-visible:outline-none"><StatsTab     t={t} /></TabsContent>
        <TabsContent value="muhasabah" className="mt-4 focus-visible:outline-none"><MuhasabahTab t={t} /></TabsContent>
        <TabsContent value="achieve"   className="mt-4 focus-visible:outline-none"><AchievementsTab t={t} /></TabsContent>
      </Tabs>

      <div className="mt-8">
        <SeoContent toolId="ibadah-tracker" />
      </div>
    </div>
  );
}
