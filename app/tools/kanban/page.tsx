'use client';

import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Trash2, ChevronRight, ChevronLeft, LayoutGrid } from 'lucide-react';
import { DataControl } from '@/components/DataControl';
import { useLang } from '@/components/Providers';
import { SeoContent } from '@/components/SeoContent';
import { ArticleSection } from '@/components/ArticleSection';
import TrustBadges from '@/components/ui/TrustBadges';

const UI_TEXT: Record<string, any> = {
  en: {
    todo: "To Do",
    in_progress: "In Progress",
    done: "Done",
    add_card: "Add Card",
    delete: "Delete",
    placeholder: "Task description..."
  },
  id: {
    todo: "Akan Dikerjakan",
    in_progress: "Sedang Proses",
    done: "Selesai",
    add_card: "Tambah Kartu",
    delete: "Hapus",
    placeholder: "Deskripsi tugas..."
  },
  de: {
    todo: "Zu tun",
    in_progress: "In Bearbeitung",
    done: "Erledigt",
    add_card: "Karte hinzufügen",
    delete: "Löschen",
    placeholder: "Aufgabenbeschreibung..."
  },
  es: {
    todo: "Por hacer",
    in_progress: "En progreso",
    done: "Hecho",
    add_card: "Añadir tarjeta",
    delete: "Eliminar",
    placeholder: "Descripción de la tarea..."
  },
  pt: {
    todo: "A fazer",
    in_progress: "Em progresso",
    done: "Concluído",
    add_card: "Adicionar cartão",
    delete: "Excluir",
    placeholder: "Descrição da tarefa..."
  },
  fr: {
    todo: "À faire",
    in_progress: "En cours",
    done: "Terminé",
    add_card: "Ajouter une carte",
    delete: "Supprimer",
    placeholder: "Description de la tâche..."
  },
  it: {
    todo: "Da fare",
    in_progress: "In corso",
    done: "Fatto",
    add_card: "Aggiungi scheda",
    delete: "Elimina",
    placeholder: "Descrizione del compito..."
  }
};

type Status = 'todo' | 'progress' | 'done';

interface Task {
  id: number;
  text: string;
  status: Status;
}

export default function KanbanPage() {
  const { lang, t: globalT } = useLang();
  const t = (key: string) => UI_TEXT[lang]?.[key] || UI_TEXT['en'][key];
  const [tasks, setTasks] = useLocalStorage<Task[]>('versokit-kanban-tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const COLUMNS: { id: Status; label: string; color: string; hover: string }[] = [
    { id: 'todo', label: t('todo'), color: 'bg-slate-700', hover: 'hover:border-slate-500' },
    { id: 'progress', label: t('in_progress'), color: 'bg-primary', hover: 'hover:border-primary/50' },
    { id: 'done', label: t('done'), color: 'bg-green-700', hover: 'hover:border-green-500' },
  ];

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: newTaskText.trim(),
      status: 'todo',
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const moveTask = (id: number, direction: 1 | -1) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        const currentIndex = COLUMNS.findIndex(c => c.id === t.status);
        const nextIndex = currentIndex + direction;
        if (nextIndex >= 0 && nextIndex < COLUMNS.length) {
          return { ...t, status: COLUMNS[nextIndex].id };
        }
      }
      return t;
    }));
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full gap-10">
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-4xl font-black tracking-tighter text-foreground uppercase flex items-center justify-center md:justify-start gap-3">
            <LayoutGrid className="h-8 w-8 text-primary" />
            {globalT('kanban')}
          </h1>
          <TrustBadges />
        </div>
        <DataControl storageKey="versokit-kanban-tasks" type="array" />
      </div>

      <div className="w-full max-w-xl">
        <form onSubmit={addTask} className="flex gap-3 bg-card p-2 rounded-2xl shadow-xl border-2">
          <Input
            placeholder={t('placeholder')}
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            className="flex-1 border-none bg-transparent h-12 text-lg font-medium focus-visible:ring-0"
          />
          <Button type="submit" size="icon" className="h-12 w-12 rounded-xl bg-primary shadow-lg shadow-primary/30">
            <Plus className="h-6 w-6 text-primary-foreground" />
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {COLUMNS.map((column) => (
          <div key={column.id} className="flex flex-col gap-6">
            <div className={`p-5 rounded-2xl ${column.color} text-white font-black text-center shadow-lg uppercase tracking-[0.2em] text-sm`}>
              {column.label}
              <span className="ml-3 bg-white/20 px-3 py-1 rounded-full text-xs">
                {tasks.filter(t => t.status === column.id).length}
              </span>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-3xl min-h-[500px] space-y-4 border-2 border-dashed border-muted-foreground/10">
              {tasks.filter(t => t.status === column.id).map((task) => (
                <Card key={task.id} className={`shadow-sm border-2 border-transparent transition-all duration-300 rounded-2xl ${column.hover} group bg-card`}>
                  <CardContent className="p-6 space-y-6">
                    <p className="font-bold text-foreground leading-relaxed">{task.text}</p>
                    
                    <div className="flex items-center justify-between border-t pt-4">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-0"
                          disabled={column.id === 'todo'}
                          onClick={() => moveTask(task.id, -1)}
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-0"
                          disabled={column.id === 'done'}
                          onClick={() => moveTask(task.id, 1)}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl"
                        onClick={() => deleteTask(task.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ArticleSection toolId="kanban" />
      <SeoContent toolId="kanban" />
    </div>
  );
}
