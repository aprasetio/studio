"use client";

import React, { useState } from 'react';
import Header from '@/components/header';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, ChevronRight, ChevronLeft, ClipboardList } from 'lucide-react';

type Status = 'todo' | 'progress' | 'done';

interface Task {
  id: number;
  text: string;
  status: Status;
}

const COLUMNS: { id: Status; label: string; color: string }[] = [
  { id: 'todo', label: 'To Do', color: 'bg-slate-500' },
  { id: 'progress', label: 'In Progress', color: 'bg-blue-600' },
  { id: 'done', label: 'Done', color: 'bg-green-600' },
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
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center p-4 md:p-8">
        <div className="w-full max-w-6xl space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl uppercase">
              Kanban Board
            </h1>
            <p className="text-muted-foreground">Kelola tugas tim olahraga Anda dengan mudah.</p>
          </div>

          <Card className="max-w-md mx-auto shadow-md">
            <CardContent className="p-4">
              <form onSubmit={addTask} className="flex gap-2">
                <Input
                  placeholder="Tambah tugas baru..."
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Plus className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COLUMNS.map((column) => (
              <div key={column.id} className="flex flex-col gap-4">
                <div className={`p-3 rounded-t-lg ${column.color} text-white font-bold text-center shadow-sm`}>
                  {column.label.toUpperCase()}
                </div>
                <div className="bg-muted/30 p-4 rounded-b-lg min-h-[400px] space-y-4 border-x border-b border-dashed">
                  {tasks.filter(t => t.status === column.id).length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 opacity-20">
                      <ClipboardList className="h-10 w-10 mb-2" />
                      <p className="text-xs font-medium">Kosong</p>
                    </div>
                  ) : (
                    tasks.filter(t => t.status === column.id).map((task) => (
                      <Card key={task.id} className="shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-4 space-y-4">
                          <p className="font-medium text-foreground">{task.text}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                disabled={column.id === 'todo'}
                                onClick={() => moveTask(task.id, -1)}
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                disabled={column.id === 'done'}
                                onClick={() => moveTask(task.id, 1)}
                              >
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => deleteTask(task.id)}
                            >
                              <Trash2 className="h-4 w-4" />
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
      </main>
    </div>
  );
}
