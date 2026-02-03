"use client";

import React, { useState } from 'react';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Plus, Minus, RotateCcw, Trash2, Trophy } from 'lucide-react';

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
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col p-4 md:p-8">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-card p-6 shadow-md md:flex-row">
            <h1 className="text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
              Universal Scoreboard
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Label htmlFor="target" className="whitespace-nowrap font-semibold">Target Skor:</Label>
                <Input 
                  id="target"
                  type="number" 
                  value={targetScore} 
                  onChange={(e) => setTargetScore(parseInt(e.target.value) || 0)}
                  className="w-20 text-center font-bold"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={resetPoints} className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" /> Atur Ulang Poin
                </Button>
                <Button variant="destructive" onClick={fullReset} className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" /> Reset Total
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Home Section */}
            <Card className="flex flex-col overflow-hidden border-0 shadow-2xl">
              <div className="bg-primary p-4 text-center text-primary-foreground">
                <h2 className="text-3xl font-black tracking-widest">HOME</h2>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center bg-blue-50 p-8 dark:bg-blue-950/20">
                <div className="mb-4 flex flex-col items-center">
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Sets Won</span>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" onClick={() => setSetsHome(Math.max(0, setsHome - 1))} className="h-8 w-8 rounded-full">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-4xl font-black text-blue-700 dark:text-blue-300">{setsHome}</span>
                    <Button variant="outline" size="icon" onClick={() => setSetsHome(setsHome + 1)} className="h-8 w-8 rounded-full">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="my-8 text-[12rem] font-black leading-none text-primary tabular-nums drop-shadow-lg md:text-[18rem]">
                  {scoreHome}
                </div>

                <div className="flex w-full gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex-1 text-2xl" 
                    onClick={() => setScoreHome(Math.max(0, scoreHome - 1))}
                  >
                    <Minus className="mr-2 h-8 w-8" /> 1
                  </Button>
                  <Button 
                    className="h-20 flex-1 bg-primary text-2xl hover:bg-primary/90" 
                    onClick={() => setScoreHome(scoreHome + 1)}
                  >
                    <Plus className="mr-2 h-8 w-8" /> 1
                  </Button>
                </div>
              </div>
            </Card>

            {/* Away Section */}
            <Card className="flex flex-col overflow-hidden border-0 shadow-2xl">
              <div className="bg-accent p-4 text-center text-accent-foreground">
                <h2 className="text-3xl font-black tracking-widest">AWAY</h2>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center bg-orange-50 p-8 dark:bg-orange-950/20">
                <div className="mb-4 flex flex-col items-center">
                  <span className="text-sm font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">Sets Won</span>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" onClick={() => setSetsAway(Math.max(0, setsAway - 1))} className="h-8 w-8 rounded-full">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-4xl font-black text-orange-700 dark:text-orange-300">{setsAway}</span>
                    <Button variant="outline" size="icon" onClick={() => setSetsAway(setsAway + 1)} className="h-8 w-8 rounded-full">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="my-8 text-[12rem] font-black leading-none text-accent tabular-nums drop-shadow-lg md:text-[18rem]">
                  {scoreAway}
                </div>

                <div className="flex w-full gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex-1 text-2xl" 
                    onClick={() => setScoreAway(Math.max(0, scoreAway - 1))}
                  >
                    <Minus className="mr-2 h-8 w-8" /> 1
                  </Button>
                  <Button 
                    className="h-20 flex-1 bg-accent text-2xl hover:bg-accent/90" 
                    onClick={() => setScoreAway(scoreAway + 1)}
                  >
                    <Plus className="mr-2 h-8 w-8" /> 1
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg bg-muted p-4 text-sm font-medium text-muted-foreground">
            <Trophy className="h-4 w-4" /> Target Set: {targetScore} Poin
          </div>
        </div>
      </main>
    </div>
  );
}
