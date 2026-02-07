
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
import { ArticleSection } from '@/components/ArticleSection';
import html2canvas from 'html2canvas';
import { toast } from '@/hooks/use-toast';

type ShiftType = 'OFF' | 'MOR' | 'AFT' | 'NIG';

const UI_TEXT: Record<string, any> = {
  title: { en: "Shift Scheduler", id: "Jadwal Shift", de: "Schichtplaner", es: "Planificador de Turnos", pt: "Escala de Trabalho", fr: "Planning d'Équipe", it: "Pianificatore Turni" },
  add_employee: { en: "Add Employee", id: "Tambah Karyawan", de: "Mitarbeiter hinzufügen", es: "Añadir Empleado", pt: "Adicionar Funcionário", fr: "Ajouter Employé", it: "Aggiungi Dipendente" },
  morning: { en: "Morning", id: "Pagi", de: "Morgen", es: "Mañana", pt: "Manhã", fr: "Matin", it: "Mattina" },
  afternoon: { en: "Afternoon", id: "Siang/Sore", de: "Nachmittag", es: "Tarde", pt: "Tarde", fr: "Après-midi", it: "Pomeriggio" },
  night: { en: "Night", id: "Malam", de: "Nacht", es: "Noche", pt: "Noite", fr: "Nuit", it: "Notte" },
  download: { en: "Download Schedule", id: "Unduh Jadwal", de: "Plan herunterladen", es: "Descargar Horario", pt: "Baixar Escala", fr: "Télécharger Planning", it: "Scarica Programma" },
  subtitle: { en: "Manage your team's weekly schedule with ease", id: "Kelola jadwal mingguan tim Anda dengan mudah", de: "Verwalten Sie den Wochenplan Ihres Teams mühelos", es: "Gestiona el horario semanal de tu equipo con facilidad", pt: "Gerencie a escala semanal da sua equipe com facilidade", fr: "Gérez facilement le planning hebdomadaire de votre équipe", it: "Gestisci i turni settimanali del tuo team con facilità" },
  randomize: { en: "Randomize", id: "Acak", de: "Zufällig", es: "Aleatorio", pt: "Aleatorizar", fr: "Aléatoire", it: "Casuale" },
  employees: { en: "Employees", id: "Karyawan", de: "Mitarbeiter", es: "Empleados", pt: "Funcionários", fr: "Employés", it: "Dipendenti" },
  legend: { en: "Shift Legend", id: "Legenda Shift", de: "Schichtlegende", es: "Leyenda de Turnos", pt: "Legenda de Turnos", fr: "Légende des Shifts", it: "Legenda Turni" },
  off: { en: "Off", id: "Libur", de: "Frei", es: "Libre", pt: "Folga", fr: "Repos", it: "Libero" }
};

interface EmployeeShift {
  id: string;
  name: string;
  shifts: { [key: string]: ShiftType };
}

const SHIFT_CONFIG: { 
  [key in ShiftType]: { 
    labelKey: string; 
    color: string; 
    icon: string 
  } 
} = {
  OFF: { labelKey: 'off', color: 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400', icon: '⚪' },
  MOR: { labelKey: 'morning', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400', icon: '🟡' },
  AFT: { labelKey: 'afternoon', color: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400', icon: '🔵' },
  NIG: { labelKey: 'night', color: 'bg-slate-800 text-slate-100 dark:bg-slate-100 dark:text-slate-900', icon: '⚫' }
};

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

export default function ShiftRosterPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[key]?.[lang] || UI_TEXT[key]?.['en'] || key;
  
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
      
      toast({ title: "Success!", description: "Schedule image downloaded." });
    } catch (error) {
      toast({ title: "Error!", description: "Failed to download image.", variant: "destructive" });
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
                  placeholder={t('employees')} 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)} 
                />
                <Button type="submit" className="w-full font-black uppercase tracking-widest h-12">
                  {t('add_employee')}
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
                        <span className="text-[10px] font-black uppercase">{t(config.labelKey)}</span>
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
                        <p className="font-black uppercase tracking-widest">{t('subtitle')}</p>
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
                                {t(config.labelKey).substring(0, 3).toUpperCase()}
                              </button>
                            </td>
                          );
                        })}
                        <td className="p-2 text-center print:hidden">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeEmployee(emp.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
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

      <ArticleSection toolId="shift" />

      <SeoContent toolId="shift" />
    </div>
  );
}
