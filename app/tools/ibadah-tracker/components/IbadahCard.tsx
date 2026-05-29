'use client';

import React from 'react';
import { Check, Users, RotateCcw, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { IbadahDef, DailyLog } from '../store/useIbadahStore';

interface IbadahCardProps {
  def: IbadahDef;
  log: DailyLog | undefined;
  onDone: (isJamaah: boolean, detail?: string, overrideAP?: number) => void;
  onMissed?: () => void;
  onUndo: () => void;
  canUndo: boolean;
  isMissedPast?: boolean;
  t: (k: string) => string;
}

export function IbadahCard({ def, log, onDone, onMissed, onUndo, canUndo, isMissedPast, t }: IbadahCardProps) {
  const isDone = log?.status === 'done';
  const isMissed = log?.status === 'missed' || (isMissedPast && !log);
  const hasQuantityPicker = !!def.quantityOptions && !isDone && !isMissed;

  return (
    <div
      className={`rounded-2xl border-2 p-4 transition-all ${
        isDone
          ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800'
          : isMissed
          ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900'
          : 'bg-card border-border'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Emoji + status dot */}
        <div className="relative flex-shrink-0">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl border-2 ${
              isDone
                ? 'border-emerald-400 dark:border-emerald-600 bg-emerald-100 dark:bg-emerald-900/40'
                : isMissed
                ? 'border-red-400 dark:border-red-700 bg-red-100 dark:bg-red-900/30'
                : 'border-muted bg-muted/40'
            }`}
          >
            {def.emoji}
          </div>
          {isDone && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
          )}
          {isMissed && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
              <AlertTriangle className="h-2.5 w-2.5 text-white" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`font-black text-sm uppercase tracking-tight ${isMissed ? 'text-red-700 dark:text-red-400' : ''}`}>
              {def.name}
            </span>
            {def.isFardhu && (
              <Badge variant="destructive" className="text-[9px] font-black uppercase px-1.5 py-0">
                FARDHU
              </Badge>
            )}
            {isDone && log?.isJamaah && (
              <Badge className="text-[9px] font-black uppercase px-1.5 py-0 bg-blue-600 hover:bg-blue-600">
                <Users className="h-2.5 w-2.5 mr-1" />JAMAAH +{def.jamaahBonusAP}
              </Badge>
            )}
            {isDone && log?.detail && (
              <Badge variant="outline" className="text-[9px] font-black uppercase px-1.5 py-0">
                {log.detail}
              </Badge>
            )}
            {isDone && (
              <Badge variant="secondary" className="text-[9px] font-black uppercase px-1.5 py-0">
                +{log.ap} AP
              </Badge>
            )}
          </div>
          <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{def.desc}</p>

          {isMissed && (
            <p className="text-[10px] font-bold text-red-600 dark:text-red-400 mt-1">
              ⚠ {def.isFardhu ? t('missed_fardhu_note') : t('missed_note')}
            </p>
          )}
        </div>

        {/* Actions — Done button hidden when quantity picker is active */}
        <div className="flex flex-col gap-1.5 flex-shrink-0">
          {!isDone && !isMissed && (
            <>
              {!def.quantityOptions && (
                <Button
                  size="sm"
                  onClick={() => onDone(false)}
                  className="h-9 px-3 text-xs font-black uppercase bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Check className="h-3.5 w-3.5 mr-1" />
                  {t('done')}
                </Button>
              )}
              {def.isFardhu && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onDone(true)}
                  className="h-9 px-3 text-xs font-black uppercase border-blue-400 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40"
                >
                  <Users className="h-3.5 w-3.5 mr-1" />
                  {t('jamaah')}
                </Button>
              )}
              {def.isFardhu && onMissed && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={onMissed}
                  className="h-8 px-3 text-[10px] font-black uppercase text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40"
                >
                  {t('mark_missed')}
                </Button>
              )}
            </>
          )}
          {isDone && canUndo && (
            <Button
              size="sm"
              variant="ghost"
              onClick={onUndo}
              className="h-8 px-3 text-[10px] font-black uppercase text-muted-foreground"
            >
              <RotateCcw className="h-3 w-3 mr-1" />{t('undo')}
            </Button>
          )}
        </div>
      </div>

      {/* Rakaat quantity picker — shown below the main row */}
      {hasQuantityPicker && (
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-2">
            {t('pick_rakaat')}
          </p>
          <div className="flex flex-wrap gap-2">
            {def.quantityOptions!.map(opt => (
              <button
                key={opt.detail}
                onClick={() => onDone(false, opt.detail, opt.ap)}
                className="px-3 py-1.5 text-[11px] font-black uppercase rounded-xl border-2 border-primary/30 bg-primary/5 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
              >
                {opt.label} <span className="opacity-70">+{opt.ap}AP</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
