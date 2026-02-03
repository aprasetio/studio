"use client";

import React, { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Trash2, ChevronRight, ChevronLeft, ClipboardList } from 'lucide-react';

type Status = 'todo' | 'progress' | 'done';

interface Task {
  id: number;
  text: string;
  status: Status;
}

const COLUMNS: { id: Status; label: string; color: string; hover: string }[] = [
  { id: 'todo', label: 'Rencana', color: 'bg-slate-700', hover: 'hover:border-slate-500' },
  { id: 'progress', label: 'Proses', color: 'bg-blue-700', hover: 'hover:border-blue-500' },
  { id: 'done', label: 'Selesai', color: 'bg-green-700', hover: 'hover:border-green-500' },
];

export default function KanbanPage() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('versokit-kanban-tasks', []);
  const [newTaskText, setNewTaskText] = useState('');

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

  return (
    <div className="flex flex-col items-center p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full gap-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black tracking-tighter text-foreground uppercase">
          Kanban Board
        </h1>
        <p className="text-muted-foreground font-medium">Kelola strategi dan tugas tim dengan manajemen visual</p>
      </div>

      <div className="w-full max-w-xl">
        <form onSubmit={addTask} className="flex gap-3 bg-card p-2 rounded-2xl shadow-xl border-2">
          <Input
            placeholder="Tambah tugas atau rencana baru..."
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            className="flex-1 border-none bg-transparent h-12 text-lg font-medium focus-visible:ring-0"
          />
          <Button type="submit" size="icon" className="h-12 w-12 rounded-xl bg-primary shadow-lg shadow-primary/30">
            <Plus className="h-6 w-6" />
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
              {tasks.filter(t => t.status === column.id).length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 opacity-20 select-none">
                  <ClipboardList className="h-12 w-12 mb-3" />
                  <p className="text-xs font-black uppercase tracking-widest">Kosong</p>
                </div>
              ) : (
                tasks.filter(t => t.status === column.id).map((task) => (
                  <Card key={task.id} className={`shadow-sm border-2 border-transparent transition-all duration-300 rounded-2xl ${column.hover} group`}>
                    <CardContent className="p-6 space-y-6">
                      <p className="font-bold text-foreground leading-relaxed">{task.text}</p>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-xl border-2 hover:bg-primary hover:text-white transition-all disabled:opacity-0"
                            disabled={column.id === 'todo'}
                            onClick={() => moveTask(task.id, -1)}
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-xl border-2 hover:bg-primary hover:text-white transition-all disabled:opacity-0"
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
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
