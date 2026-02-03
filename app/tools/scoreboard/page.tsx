"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Plus, Minus, RotateCcw, Trash2, Trophy } from 'lucide-react';
import { SmartAd } from '@/components/smart-ad';

export default function UniversalScoreboardPage() {
  const [scoreHome, setScoreHome] = useState(0);
  const [scoreAway, setScoreAway] = useState(0);
  const [setsHome, setSetsHome] = useState(0);
  const [setsAway, setSetsAway] = useState(0);
  const [targetScore, setTargetScore] = useState(25);

  const resetPoints = () => {
    setScoreHome(0);
    setScoreAway(0);
  };

  const fullReset = () => {
    setScoreHome(0);
    setScoreAway(0);
    setSetsHome(0);
    setSetsAway(0);
  };

  return (
    <div className="flex flex-col p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full gap-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card p-8 rounded-3xl shadow-xl border">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">
            Papan Skor Universal
          </h1>
          <p className="text-muted-foreground font-medium">Sempurna untuk Voli, Bulu Tangkis, dan Tenis Meja</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-muted/50 p-2 rounded-xl">
            <Label htmlFor="target" className="whitespace-nowrap font-bold text-xs uppercase tracking-widest pl-2">Target Skor:</Label>
            <Input 
              id="target"
              type="number" 
              value={targetScore} 
              onChange={(e) => setTargetScore(parseInt(e.target.value) || 0)}
              className="w-20 text-center font-black text-xl border-none bg-transparent"
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={resetPoints} className="font-bold border-2">
              <RotateCcw className="mr-2 h-4 w-4" /> Reset Poin
            </Button>
            <Button variant="destructive" onClick={fullReset} className="font-bold">
              <Trash2 className="mr-2 h-4 w-4" /> Reset Total
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Home Section */}
        <Card className="flex flex-col overflow-hidden border-none shadow-2xl rounded-[2rem]">
          <div className="bg-primary p-6 text-center text-primary-foreground">
            <h2 className="text-4xl font-black tracking-[0.2em]">KANDANG</h2>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center bg-blue-50/50 p-10 dark:bg-blue-950/10">
            <div className="mb-10 flex flex-col items-center">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/60 mb-4">Set Menang</span>
              <div className="flex items-center gap-6">
                <Button variant="outline" size="icon" onClick={() => setSetsHome(Math.max(0, setsHome - 1))} className="h-10 w-10 rounded-full border-2">
                  <Minus className="h-5 w-5" />
                </Button>
                <span className="text-6xl font-black text-primary tabular-nums">{setsHome}</span>
                <Button variant="outline" size="icon" onClick={() => setSetsHome(setsHome + 1)} className="h-10 w-10 rounded-full border-2">
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="my-10 text-[12rem] md:text-[18rem] font-black leading-none text-primary tabular-nums tracking-tighter drop-shadow-2xl">
              {scoreHome}
            </div>

            <div className="flex w-full gap-6">
              <Button 
                variant="outline" 
                className="h-24 flex-1 text-3xl font-black border-4" 
                onClick={() => setScoreHome(Math.max(0, scoreHome - 1))}
              >
                -1
              </Button>
              <Button 
                className="h-24 flex-1 bg-primary text-4xl font-black hover:bg-primary/90 shadow-xl" 
                onClick={() => setScoreHome(scoreHome + 1)}
              >
                +1
              </Button>
            </div>
          </div>
        </Card>

        {/* Away Section */}
        <Card className="flex flex-col overflow-hidden border-none shadow-2xl rounded-[2rem]">
          <div className="bg-orange-600 p-6 text-center text-white">
            <h2 className="text-4xl font-black tracking-[0.2em]">TANDANG</h2>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center bg-orange-50/50 p-10 dark:bg-orange-950/10">
            <div className="mb-10 flex flex-col items-center">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-600/60 mb-4">Set Menang</span>
              <div className="flex items-center gap-6">
                <Button variant="outline" size="icon" onClick={() => setSetsAway(Math.max(0, setsAway - 1))} className="h-10 w-10 rounded-full border-2">
                  <Minus className="h-5 w-5" />
                </Button>
                <span className="text-6xl font-black text-orange-600 tabular-nums">{setsAway}</span>
                <Button variant="outline" size="icon" onClick={() => setSetsAway(setsAway + 1)} className="h-10 w-10 rounded-full border-2">
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="my-10 text-[12rem] md:text-[18rem] font-black leading-none text-orange-600 tabular-nums tracking-tighter drop-shadow-2xl">
              {scoreAway}
            </div>

            <div className="flex w-full gap-6">
              <Button 
                variant="outline" 
                className="h-24 flex-1 text-3xl font-black border-4" 
                onClick={() => setScoreAway(Math.max(0, scoreAway - 1))}
              >
                -1
              </Button>
              <Button 
                className="h-24 flex-1 bg-orange-600 text-4xl font-black hover:bg-orange-500 shadow-xl" 
                onClick={() => setScoreAway(scoreAway + 1)}
              >
                +1
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-4 rounded-2xl bg-muted p-6 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground border w-full">
          <Trophy className="h-5 w-5 text-primary" /> Target Set: {targetScore} Poin
        </div>
        
        {/* Ad Integration */}
        <SmartAd />
      </div>
    </div>
  );
}
