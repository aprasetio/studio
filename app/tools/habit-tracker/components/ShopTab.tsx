'use client';

import React from 'react';
import { Shield, Coins, Lock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useHabitStore, SHIELD_COST, MAX_SHIELDS } from '../store/useHabitStore';
import { toast } from '@/hooks/use-toast';

interface ShopTabProps {
  t: (k: string) => string;
}

export function ShopTab({ t }: ShopTabProps) {
  const { coins, streakShields, buyShield } = useHabitStore();

  const handleBuyShield = () => {
    if (coins < SHIELD_COST) {
      toast({ title: t('not_enough_coins'), variant: 'destructive' });
      return;
    }
    if (streakShields >= MAX_SHIELDS) {
      toast({ title: t('max_shields'), variant: 'destructive' });
      return;
    }
    buyShield();
    toast({ title: t('shield_bought') });
  };

  const earningWays = [
    { icon: '✅', text: t('earn_done'), xp: '+10 XP', coins: '+1 🪙' },
    { icon: '⏭️', text: t('earn_skip'), xp: '+3 XP', coins: '' },
    { icon: '🎁', text: t('earn_chest'), xp: '+10–50 XP', coins: '+5–20 🪙' },
  ];

  const lockedItems = [
    { emoji: '🎨', label: t('custom_themes'), price: '200 🪙' },
    { emoji: '⏰', label: t('snooze_reminder'), price: '30 🪙' },
    { emoji: '📊', label: t('habit_insights'), price: '100 🪙' },
  ];

  return (
    <div className="space-y-6">
      {/* Coin balance */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white text-center">
        <Coins className="h-8 w-8 mx-auto mb-2 opacity-90" />
        <p className="text-4xl font-black">{coins}</p>
        <p className="text-[11px] font-black uppercase tracking-[0.2em] opacity-80 mt-1">{t('your_coins')}</p>
      </div>

      {/* Streak Shield */}
      <div className="bg-card border-2 rounded-2xl p-5 space-y-4">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-950/40 rounded-xl text-blue-600">
            <Shield className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-black uppercase tracking-tight">{t('streak_shield')}</p>
              <Badge variant="outline" className="font-black text-[10px]">{SHIELD_COST} 🪙</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{t('shield_desc')}</p>
            <div className="flex gap-1.5 mt-3">
              {Array.from({ length: MAX_SHIELDS }, (_, i) => (
                <div
                  key={i}
                  className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                    i < streakShields
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'border-muted-foreground/30 text-muted-foreground/20'
                  }`}
                >
                  <Shield className="h-3.5 w-3.5" />
                </div>
              ))}
              <span className="text-[10px] font-bold text-muted-foreground self-center ml-1">
                {streakShields}/{MAX_SHIELDS}
              </span>
            </div>
          </div>
        </div>
        <Button
          onClick={handleBuyShield}
          disabled={coins < SHIELD_COST || streakShields >= MAX_SHIELDS}
          className="w-full font-black uppercase text-xs h-11"
        >
          {streakShields >= MAX_SHIELDS ? (
            <><CheckCircle2 className="h-4 w-4 mr-2" />{t('max_shields_owned')}</>
          ) : (
            <><Shield className="h-4 w-4 mr-2" />{t('buy_shield')} ({SHIELD_COST} 🪙)</>
          )}
        </Button>
      </div>

      {/* How to earn coins */}
      <div className="bg-card border-2 rounded-2xl p-5 space-y-3">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">{t('how_to_earn')}</p>
        {earningWays.map(({ icon, text, xp, coins: c }) => (
          <div key={text} className="flex items-center gap-3">
            <span className="text-xl w-8 text-center">{icon}</span>
            <span className="text-sm font-bold flex-1">{text}</span>
            <span className="text-[11px] font-black text-purple-600">{xp}</span>
            {c && <span className="text-[11px] font-black text-amber-600">{c}</span>}
          </div>
        ))}
        <p className="text-[10px] text-muted-foreground">{t('coin_rate_note')}</p>
      </div>

      {/* Coming soon */}
      <div className="bg-card border-2 rounded-2xl p-5 space-y-3">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">{t('coming_soon')}</p>
        {lockedItems.map(({ emoji, label, price }) => (
          <div key={label} className="flex items-center gap-3 opacity-60">
            <span className="text-xl w-8 text-center">{emoji}</span>
            <span className="text-sm font-bold flex-1">{label}</span>
            <Lock className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-[11px] font-black text-muted-foreground">{price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
