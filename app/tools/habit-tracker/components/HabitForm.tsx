'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Habit, HabitCategory } from '../store/useHabitStore';

const EMOJIS = ['💪', '🏃', '📚', '🧘', '🥗', '💧', '😴', '🎯', '✍️', '🎨', '🎵', '🌿', '🧠', '🏋️', '🚴', '🤸', '🍎', '☕', '📝', '🌅', '🧹', '💰', '🌙', '❤️', '🔥', '⚡', '🎓', '🌟', '🏊', '🧪'];

const COLORS = [
  '#6366f1', '#8b5cf6', '#ec4899', '#f97316',
  '#eab308', '#22c55e', '#14b8a6', '#3b82f6',
  '#ef4444', '#f59e0b',
];

interface HabitFormProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: Omit<Habit, 'id' | 'createdAt'>) => void;
  initial?: Habit | null;
  habits: Habit[];
  t: (k: string) => string;
}

const defaultForm = (): Omit<Habit, 'id' | 'createdAt'> => ({
  name: '',
  emoji: '🎯',
  color: '#6366f1',
  category: 'custom',
  stackAfter: undefined,
  reminderTime: undefined,
  isActive: true,
});

export function HabitForm({ open, onClose, onSave, initial, habits, t }: HabitFormProps) {
  const [form, setForm] = useState(defaultForm());

  useEffect(() => {
    setForm(initial ? {
      name: initial.name,
      emoji: initial.emoji,
      color: initial.color,
      category: initial.category,
      stackAfter: initial.stackAfter,
      reminderTime: initial.reminderTime,
      isActive: initial.isActive,
    } : defaultForm());
  }, [initial, open]);

  const handleSave = () => {
    if (!form.name.trim()) return;
    onSave({ ...form, name: form.name.trim() });
    onClose();
  };

  const categories: HabitCategory[] = ['health', 'fitness', 'learning', 'mindfulness', 'productivity', 'custom'];

  return (
    <Dialog open={open} onOpenChange={v => !v && onClose()}>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-black uppercase tracking-tight">
            {initial ? t('edit_habit') : t('add_habit')}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Emoji picker */}
          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase tracking-widest">{t('emoji')}</Label>
            <div className="grid grid-cols-10 gap-1.5">
              {EMOJIS.map(em => (
                <button
                  key={em}
                  onClick={() => setForm(f => ({ ...f, emoji: em }))}
                  className={`h-8 w-8 rounded-lg text-base flex items-center justify-center transition-all ${
                    form.emoji === em ? 'ring-2 ring-primary scale-110 bg-primary/10' : 'hover:bg-muted'
                  }`}
                >
                  {em}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase tracking-widest">{t('habit_name')}</Label>
            <Input
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder={t('habit_name_placeholder')}
              className="rounded-xl border-2"
              maxLength={50}
            />
          </div>

          {/* Color */}
          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase tracking-widest">{t('color')}</Label>
            <div className="flex gap-2 flex-wrap">
              {COLORS.map(c => (
                <button
                  key={c}
                  onClick={() => setForm(f => ({ ...f, color: c }))}
                  className={`h-7 w-7 rounded-full transition-all ${form.color === c ? 'ring-2 ring-offset-2 ring-foreground scale-110' : ''}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase tracking-widest">{t('category')}</Label>
            <Select value={form.category} onValueChange={v => setForm(f => ({ ...f, category: v as HabitCategory }))}>
              <SelectTrigger className="rounded-xl border-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(c => (
                  <SelectItem key={c} value={c} className="font-bold uppercase text-[11px]">
                    {t(`cat_${c}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Stack after */}
          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase tracking-widest">{t('stack_after')}</Label>
            <Select
              value={form.stackAfter ?? 'none'}
              onValueChange={v => setForm(f => ({ ...f, stackAfter: v === 'none' ? undefined : v }))}
            >
              <SelectTrigger className="rounded-xl border-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none" className="font-bold text-[11px]">{t('none')}</SelectItem>
                {habits.filter(h => !initial || h.id !== initial.id).map(h => (
                  <SelectItem key={h.id} value={h.id} className="font-bold text-[11px]">
                    {h.emoji} {h.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Reminder time */}
          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase tracking-widest">{t('reminder_time')}</Label>
            <Input
              type="time"
              value={form.reminderTime ?? ''}
              onChange={e => setForm(f => ({ ...f, reminderTime: e.target.value || undefined }))}
              className="rounded-xl border-2 w-36"
            />
            <p className="text-[10px] text-muted-foreground">{t('reminder_hint')}</p>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose} className="font-black uppercase text-xs">
            {t('cancel')}
          </Button>
          <Button onClick={handleSave} disabled={!form.name.trim()} className="font-black uppercase text-xs">
            {t('save')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
