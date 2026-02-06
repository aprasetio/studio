'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, CalendarDays, UserPlus, Image as ImageIcon, Download, ShieldCheck, Shuffle } from 'lucide-react';
import { SeoContent } from '@/components/seo-content';
import { DataPersistence } from '@/components/DataPersistence';
import html2canvas from 'html2canvas';
import { toast } from '@/hooks/use-toast';

type ShiftType = 'OFF' | 'MOR' | 'AFT' | 'NIG';

const UI_TEXT: Record<string, any> = {
  en: {
    title: "Shift Scheduler Pro",
    subtitle: "Manage your team's weekly schedule with ease",
    month_year: "Month & Year",
    employees: "Employees",
    generate: "Generate Schedule",
    download: "Download Image",
    legend: "Shift Legend:",
    morning: "Morning",
    afternoon: "Afternoon",
    night: "Night",
    off: "Off / Rest",
    randomize: "Randomize Shifts",
    add_employee: "Add Employee",
    placeholder: "Employee name...",
    no_employees: "No employees added",
    success_msg: "Shift roster image downloaded.",
    fail_msg: "Failed to download image."
  },
  id: {
    title: "Jadwal Shift Pro",
    subtitle: "Kelola jadwal mingguan tim Anda dengan mudah",
    month_year: "Bulan & Tahun",
    employees: "Karyawan",
    generate: "Buat Jadwal",
    download: "Unduh Gambar",
    legend: "Legenda Shift:",
    morning: "Pagi",
    afternoon: "Siang",
    night: "Malam",
    off: "Libur / Istirahat",
    randomize: "Acak Otomatis",
    add_employee: "Tambah Karyawan",
    placeholder: "Nama karyawan...",
    no_employees: "Belum ada karyawan",
    success_msg: "Gambar jadwal telah diunduh.",
    fail_msg: "Gagal mengunduh gambar jadwal."
  },
  es: {
    title: "Programador de Turnos Pro",
    subtitle: "Gestiona el horario semanal de tu equipo con facilidad",
    month_year: "Mes y Año",
    employees: "Empleados",
    generate: "Generar Horario",
    download: "Descargar Imagen",
    legend: "Leyenda de Turnos:",
    morning: "Mañana",
    afternoon: "Tarde",
    night: "Noche",
    off: "Libre / Descanso",
    randomize: "Aleatorizar",
    add_employee: "Añadir Empleado",
    placeholder: "Nombre del empleado...",
    no_employees: "No hay empleados",
    success_msg: "Imagen del horario descargada.",
    fail_msg: "Error al descargar la imagen."
  },
  pt: {
    title: "Escala de Turnos Pro",
    subtitle: "Gerencie a escala semanal da sua equipe com facilidade",
    month_year: "Mês e Ano",
    employees: "Funcionários",
    generate: "Gerar Escala",
    download: "Baixar Imagem",
    legend: "Legenda de Turnos:",
    morning: "Manhã",
    afternoon: "Tarde",
    night: "Noite",
    off: "Folga / Descanso",
    randomize: "Aleatorizar",
    add_employee: "Adicionar Funcionário",
    placeholder: "Nome do funcionário...",
    no_employees: "Nenhum funcionário",
    success_msg: "Imagem da escala baixada.",
    fail_msg: "Falha ao baixar imagem."
  },
  de: {
    title: "Schichtplaner Pro",
    subtitle: "Verwalten Sie den Wochenplan Ihres Teams mühelos",
    month_year: "Monat & Jahr",
    employees: "Mitarbeiter",
    generate: "Plan erstellen",
    download: "Bild herunterladen",
    legend: "Schichtlegende:",
    morning: "Morgen",
    afternoon: "Nachmittag",
    night: "Nacht",
    off: "Frei / Pause",
    randomize: "Zufällig",
    add_employee: "Mitarbeiter hinzufügen",
    placeholder: "Name des Mitarbeiters...",
    no_employees: "Keine Mitarbeiter",
    success_msg: "Schichtplan-Bild heruntergeladen.",
    fail_msg: "Bild-Download fehlgeschlagen."
  },
  fr: {
    title: "Planning de Shifts Pro",
    subtitle: "Gérez facilement le planning hebdomadaire de votre équipe",
    month_year: "Mois & Année",
    employees: "Employés",
    generate: "Générer Planning",
    download: "Télécharger Image",
    legend: "Légende des Shifts :",
    morning: "Matin",
    afternoon: "Après-midi",
    night: "Nuit",
    off: "Repos",
    randomize: "Aléatoire",
    add_employee: "Ajouter Employé",
    placeholder: "Nom de l'employé...",
    no_employees: "Aucun employé",
    success_msg: "Image du planning téléchargée.",
    fail_msg: "Échec du téléchargement de l'image."
  },
  it: {
    title: "Pianificatore Turni Pro",
    subtitle: "Gestisci i turni settimanali del tuo team con facilità",
    month_year: "Mese e Anno",
    employees: "Dipendenti",
    generate: "Genera Piano",
    download: "Scarica Immagine",
    legend: "Legenda Turni:",
    morning: "Mattina",
    afternoon: "Pomeriggio",
    night: "Notte",
    off: "Libero",
    randomize: "Casuale",
    add_employee: "Aggiungi Dipendente",
    placeholder: "Nome dipendente...",
    no_employees: "Nessun dipendente",
    success_msg: "Immagine del piano scaricata.",
    fail_msg: "Errore nel download dell'immagine."
  }
};

interface EmployeeShift {
  id: string;
  name: string;
  shifts: { [key: string]: ShiftType };
}

const SHIFT_CONFIG: { 
  [key in ShiftType]: { 
    label: { [lang: string]: string }; 
    full: { [lang: string]: string }; 
    color: string; 
    icon: string 
  } 
} = {
  OFF: { 
    label: { en: 'OFF', id: 'LBR', es: 'LIB', pt: 'FOL', de: 'FREI', fr: 'REP', it: 'LIB' }, 
    full: { en: 'Off / Rest', id: 'Libur', es: 'Libre', pt: 'Folga', de: 'Frei', fr: 'Repos', it: 'Libero' }, 
    color: 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400', 
    icon: '⚪' 
  },
  MOR: { 
    label: { en: 'MOR', id: 'PAGI', es: 'MAÑ', pt: 'MAN', de: 'MOR', fr: 'MAT', it: 'MAT' }, 
    full: { en: 'Morning', id: 'Pagi', es: 'Mañana', pt: 'Manhã', de: 'Morgen', fr: 'Matin', it: 'Mattina' }, 
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400', 
    icon: '🟡' 
  },
  AFT: { 
    label: { en: 'AFT', id: 'SIANG', es: 'TAR', pt: 'TAR', de: 'NAC', fr: 'APR', it: 'POM' }, 
    full: { en: 'Afternoon', id: 'Siang', es: 'Tarde', pt: 'Tarde', de: 'Nachmittag', fr: 'Après-midi', it: 'Pomeriggio' }, 
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400', 
    icon: '🔵' 
  },
  NIG: { 
    label: { en: 'NIG', id: 'MLM', es: 'NOC', pt: 'NOI', de: 'NAC', fr: 'NUI', it: 'NOT' }, 
    full: { en: 'Night', id: 'Malam', es: 'Noche', pt: 'Noite', de: 'Nacht', fr: 'Nuit', it: 'Notte' }, 
    color: 'bg-slate-800 text-slate-100 dark:bg-slate-100 dark:text-slate-900', 
    icon: '⚫' 
  }
};

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

export default function ShiftRosterPage() {
  const { t: globalT, lang } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];
  
  const [employees, setEmployees] = useLocalStorage<EmployeeShift[]>('versokit-shift-data', []);
  const [newName, setNewName] = useState('');
  const [mounted, setMounted] = useState(false);
  const scheduleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newEmp: EmployeeShift = {
      id: Date.now().toString(),
      name: newName.trim(),
      shifts: DAYS.reduce((acc, day) => ({ ...acc, [day]: 'OFF' as ShiftType }), {})
    };

    setEmployees([...employees, newEmp]);
    setNewName('');
  };

  const removeEmployee = (id: string) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const cycleShift = (empId: string, day: string) => {
    const shiftOrder: ShiftType[] = ['OFF', 'MOR', 'AFT', 'NIG'];
    setEmployees(employees.map(emp => {
      if (emp.id === empId) {
        const rawShift = emp.shifts[day] || 'OFF';
        const currentShift = (shiftOrder.includes(rawShift) ? rawShift : 'OFF') as ShiftType;
        const nextIndex = (shiftOrder.indexOf(currentShift) + 1) % shiftOrder.length;
        return {
          ...emp,
          shifts: { ...emp.shifts, [day]: shiftOrder[nextIndex] }
        };
      }
      return emp;
    }));
  };

  const randomizeAll = () => {
    const shiftOrder: ShiftType[] = ['OFF', 'MOR', 'AFT', 'NIG'];
    setEmployees(employees.map(emp => {
      const randomShifts = DAYS.reduce((acc, day) => {
        const randomShift = shiftOrder[Math.floor(Math.random() * shiftOrder.length)];
        return { ...acc, [day]: randomShift };
      }, {});
      return { ...emp, shifts: randomShifts };
    }));
    toast({ title: t('randomize') });
  };

  const handleRestore = (data: any) => {
    if (Array.isArray(data)) {
      setEmployees(data);
    }
  };

  const handleDownloadImage = async () => {
    if (!scheduleRef.current) return;

    try {
      const canvas = await html2canvas(scheduleRef.current, {
        scale: 2,
        backgroundColor: '#F9FAFB',
        logging: false,
        useCORS: true,
      });

      const data = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `versokit-shift-roster-${new Date().toISOString().split('T')[0]}.png`;
      link.href = data;
      link.click();
      
      toast({ title: "Success!", description: t('success_msg') });
    } catch (error) {
      toast({ title: "Error!", description: t('fail_msg'), variant: "destructive" });
    }
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('title')}</h1>
          <p className="text-muted-foreground font-medium">{t('subtitle')}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" onClick={randomizeAll} className="font-bold border-2">
            <Shuffle className="mr-2 h-4 w-4" /> {t('randomize')}
          </Button>
          <Button variant="outline" onClick={handleDownloadImage} className="font-bold border-2">
            <ImageIcon className="mr-2 h-4 w-4" /> {t('download')}
          </Button>
          <DataPersistence data={employees} onRestore={handleRestore} fileNamePrefix="versokit-shift" />
        </div>
      </div>

      <div ref={scheduleRef} className="w-full space-y-8 p-2">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Card className="lg:col-span-1 shadow-lg border-2 h-fit">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2 uppercase">
                <UserPlus className="h-5 w-5 text-primary" />
                {t('add_employee')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={addEmployee} className="space-y-4 print:hidden">
                <Input 
                  placeholder={t('placeholder')} 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)} 
                />
                <Button type="submit" className="w-full font-black uppercase tracking-widest h-12">
                  {globalT('add')}
                </Button>
              </form>

              <div className="mt-8 p-4 bg-muted/50 rounded-2xl space-y-3">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{t('legend')}</p>
                {(Object.keys(SHIFT_CONFIG) as ShiftType[]).map((key) => {
                   const config = SHIFT_CONFIG[key];
                   return (
                    <div key={key} className="flex items-center gap-3">
                      <span className="text-sm">{config.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase">{config.label[lang] || config.label['en']}</span>
                        <span className="text-[9px] font-medium opacity-60 uppercase">{config.full[lang] || config.full['en']}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 shadow-2xl border-2 overflow-hidden bg-card">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left font-black uppercase tracking-widest text-xs border-r border-primary-foreground/20">{t('employees')}</th>
                    {DAYS.map(day => (
                      <th key={day} className="p-4 text-center font-black uppercase tracking-widest text-xs border-r border-primary-foreground/20">{globalT(day)}</th>
                    ))}
                    <th className="p-4 w-16 print:hidden"></th>
                  </tr>
                </thead>
                <tbody>
                  {!mounted || employees.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="py-24 text-center opacity-30">
                        <CalendarDays className="h-12 w-12 mx-auto mb-4" />
                        <p className="font-black uppercase tracking-widest">{t('no_employees')}</p>
                      </td>
                    </tr>
                  ) : (
                    employees.map(emp => (
                      <tr key={emp.id} className="border-b group hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-bold uppercase tracking-tight text-sm border-r">{emp.name}</td>
                        {DAYS.map(day => {
                          const shiftKey = emp.shifts[day] || 'OFF';
                          const config = SHIFT_CONFIG[shiftKey] || SHIFT_CONFIG['OFF'];
                          return (
                            <td key={day} className="p-2 border-r">
                              <button
                                onClick={() => cycleShift(emp.id, day)}
                                className={`w-full h-12 rounded-xl flex items-center justify-center font-black text-[10px] transition-all transform active:scale-95 shadow-sm border ${config.color}`}
                              >
                                {config.label[lang] || config.label['en']}
                              </button>
                            </td>
                          );
                        })}
                        <td className="p-2 text-center print:hidden">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeEmployee(emp.id)}
                            className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        
        <div className="flex flex-col gap-1 items-end mt-4">
          <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <ShieldCheck className="h-3 w-3" />
            <span>🔒 Private & Offline • Generated by VersoKit.com</span>
          </div>
          <div className="text-[8px] text-gray-300 font-medium tracking-[0.4em] uppercase">
            versokit.com
          </div>
        </div>
      </div>

      <SeoContent toolId="shift" />
    </div>
  );
}
