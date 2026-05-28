'use client';

import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Bell, BellOff, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { DataPersistence } from '@/components/DataPersistence';
import { HabitForm } from './HabitForm';
import { useHabitStore, getStreak, Habit } from '../store/useHabitStore';
import { toast } from '@/hooks/use-toast';

interface HabitsTabProps {
  t: (k: string) => string;
}

export function HabitsTab({ t }: HabitsTabProps) {
  const { habits, logs, addHabit, editHabit, deleteHabit, toggleActive, notificationsEnabled, setNotificationsEnabled } = useHabitStore();
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Habit | null>(null);

  const handleSave = (data: Omit<Habit, 'id' | 'createdAt'>) => {
    if (editing) {
      editHabit(editing.id, data);
      toast({ title: t('habit_updated') });
    } else {
      addHabit(data);
      toast({ title: t('habit_added') });
    }
    setEditing(null);
  };

  const handleEdit = (h: Habit) => { setEditing(h); setFormOpen(true); };
  const handleDelete = (id: string) => {
    if (confirm(t('confirm_delete'))) deleteHabit(id);
  };

  const handleNotificationToggle = async (v: boolean) => {
    if (v && 'Notification' in window) {
      const perm = await Notification.requestPermission();
      if (perm !== 'granted') {
        toast({ title: t('notification_denied'), variant: 'destructive' });
        return;
      }
    }
    setNotificationsEnabled(v);
  };

  // Restore handler — replace all habits
  const handleRestore = (data: any) => {
    if (data?.habits) {
      data.habits.forEach((h: Habit) => addHabit({ ...h, isActive: h.isActive ?? true }));
    }
  };

  const active = habits.filter(h => h.isActive);
  const inactive = habits.filter(h => !h.isActive);

  const renderHabit = (h: Habit) => {
    const streak = getStreak(logs, h.id);
    const stacked = h.stackAfter ? habits.find(x => x.id === h.stackAfter) : null;
    return (
      <div key={h.id} className={`rounded-2xl border-2 p-4 ${h.isActive ? 'bg-card' : 'bg-muted/30 opacity-60'}`}>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ backgroundColor: h.color + '22', border: `2px solid ${h.color}44` }}
          >
            {h.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-black text-sm uppercase tracking-tight">{h.name}</span>
              {streak > 0 && (
                <Badge variant="secondary" className="text-[10px] font-black">🔥 {streak}</Badge>
              )}
              {stacked && (
                <Badge variant="outline" className="text-[10px] font-bold gap-1">
                  <Layers className="h-2.5 w-2.5" />
                  {stacked.emoji} {stacked.name}
                </Badge>
              )}
              {h.reminderTime && (
                <Badge variant="outline" className="text-[10px] font-bold gap-1">
                  <Bell className="h-2.5 w-2.5" />
                  {h.reminderTime}
                </Badge>
              )}
            </div>
            <p className="text-[10px] font-bold uppercase text-muted-foreground mt-0.5">{t(`cat_${h.category}`)}</p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Switch
              checked={h.isActive}
              onCheckedChange={() => toggleActive(h.id)}
              aria-label={t('toggle_active')}
            />
            <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => handleEdit(h)}>
              <Pencil className="h-3.5 w-3.5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => handleDelete(h.id)}>
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Add + Notification row */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <Button onClick={() => { setEditing(null); setFormOpen(true); }} className="font-black uppercase text-xs gap-2">
          <Plus className="h-4 w-4" />
          {t('add_habit')}
        </Button>
        <div className="flex items-center gap-2">
          {notificationsEnabled ? <Bell className="h-4 w-4 text-primary" /> : <BellOff className="h-4 w-4 text-muted-foreground" />}
          <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{t('reminders')}</span>
          <Switch checked={notificationsEnabled} onCheckedChange={handleNotificationToggle} />
        </div>
      </div>

      {/* Active habits */}
      {active.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{t('active')} ({active.length})</p>
          {active.map(renderHabit)}
        </div>
      )}

      {/* Inactive habits */}
      {inactive.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{t('inactive')} ({inactive.length})</p>
          {inactive.map(renderHabit)}
        </div>
      )}

      {habits.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-4xl mb-3">📋</p>
          <p className="font-black uppercase tracking-tight">{t('no_habits')}</p>
        </div>
      )}

      {/* Backup */}
      <DataPersistence
        data={{ habits, logs: {} }}
        onRestore={handleRestore}
        fileNamePrefix="versokit-habits"
      />

      <HabitForm
        open={formOpen}
        onClose={() => { setFormOpen(false); setEditing(null); }}
        onSave={handleSave}
        initial={editing}
        habits={habits}
        t={t}
      />
    </div>
  );
}
