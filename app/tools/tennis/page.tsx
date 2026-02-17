'use client';

import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  Settings2, 
  ChevronRight, 
  UserPlus, 
  Trophy,
  Activity,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import TrustBadges from '@/components/ui/TrustBadges';
import { ArticleSection } from '@/components/ArticleSection';
import { SeoContent } from '@/components/SeoContent';
import { SmartAd } from '@/components/smart-ad';

// --- INTERFACES ---
type SkillLevel = 'Newbie' | 'Beginner' | 'Intermediate' | 'Advance' | 'Pro';

interface Player {
  id: string;
  name: string;
  skill: SkillLevel;
  level: number;
}

interface MatchTeam {
  players: string[]; // IDs
  score: number;
}

interface Match {
  id: string;
  type: 'Auto' | 'Manual';
  timeStart: string;
  timeEnd: string;
  team1: MatchTeam;
  team2: MatchTeam;
  status: 'Scheduled' | 'Completed';
}

interface Config {
  numPlayers: number;
  durationMinutes: number;
  matchDuration: number;
}

// --- CONSTANTS ---
const SKILL_CONFIG: Record<SkillLevel, { level: number; color: string }> = {
  'Newbie': { level: 1, color: 'bg-slate-100 text-slate-600 border-slate-200' },
  'Beginner': { level: 2, color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  'Intermediate': { level: 3, color: 'bg-blue-100 text-blue-700 border-blue-200' },
  'Advance': { level: 4, color: 'bg-orange-100 text-orange-700 border-orange-200' },
  'Pro': { level: 5, color: 'bg-purple-100 text-purple-700 border-purple-200' },
};

export default function TennisGeneratorRefactored() {
  const [step, setStep] = useState(1);
  
  // --- STATE MANAGEMENT ---
  const [config, setConfig] = useState<Config>({
    numPlayers: 4,
    durationMinutes: 120,
    matchDuration: 30,
  });

  const [players, setPlayers] = useState<Player[]>([]);
  const [schedule, setSchedule] = useState<Match[]>([]);

  // --- HANDLERS ---
  const handleConfigSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Initialize or resize players list based on count
    const updatedPlayers: Player[] = Array.from({ length: config.numPlayers }).map((_, i) => {
      // Preserve existing player data if count just increased
      if (players[i]) return players[i];
      
      return {
        id: `p-${i}-${Math.random().toString(36).substr(2, 5)}`,
        name: '',
        skill: 'Intermediate',
        level: 3
      };
    });
    
    setPlayers(updatedPlayers);
    setStep(2);
  };

  const updatePlayer = (index: number, updates: Partial<Player>) => {
    const newPlayers = [...players];
    newPlayers[index] = { ...newPlayers[index], ...updates };
    setPlayers(newPlayers);
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      {/* Page Heading */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground flex items-center justify-center gap-3">
          <Activity className="h-8 w-8 text-primary" />
          Tennis Match Generator
        </h1>
        <TrustBadges />
        <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Professional Tournament Management</p>
      </div>

      {/* Wizard Progress Stepper */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-4 px-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1 last:flex-none">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all ${
              step === s 
                ? 'bg-primary text-white shadow-lg ring-4 ring-primary/20' 
                : step > s 
                  ? 'bg-green-500 text-white' 
                  : 'bg-muted text-muted-foreground border-2'
            }`}>
              {s}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest hidden sm:block ${step === s ? 'text-primary' : 'text-muted-foreground'}`}>
              {s === 1 ? 'Config' : s === 2 ? 'Roster' : 'Schedule'}
            </span>
            {s < 3 && <div className={`flex-1 h-0.5 mx-2 ${step > s ? 'bg-green-500' : 'bg-muted'}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Configuration */}
      {step === 1 && (
        <Card className="w-full max-w-2xl shadow-xl border-2 rounded-[2.5rem] overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <CardHeader className="bg-primary p-8 text-white border-b">
            <CardTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
              <Settings2 className="h-6 w-6 text-accent" />
              Tournament Setup
            </CardTitle>
            <CardDescription className="text-primary-foreground/70 font-medium">
              Define your session duration and player count to start the pairing algorithm.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleConfigSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest opacity-60 flex items-center gap-2">
                    <Clock className="h-3 w-3" /> Total Duration (Mins)
                  </Label>
                  <Input 
                    type="number" 
                    value={config.durationMinutes}
                    onChange={(e) => setConfig({ ...config, durationMinutes: Math.max(1, parseInt(e.target.value) || 0) })}
                    className="h-14 text-xl font-black rounded-2xl border-2 focus-visible:ring-primary bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest opacity-60 flex items-center gap-2">
                    <Clock className="h-3 w-3" /> Match Duration (Mins)
                  </Label>
                  <Input 
                    type="number" 
                    value={config.matchDuration}
                    onChange={(e) => setConfig({ ...config, matchDuration: Math.max(1, parseInt(e.target.value) || 0) })}
                    className="h-14 text-xl font-black rounded-2xl border-2 focus-visible:ring-primary bg-card"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest opacity-60 flex items-center gap-2">
                  <Users className="h-3 w-3" /> Number of Players
                </Label>
                <Input 
                  type="number" 
                  min="4"
                  max="64"
                  value={config.numPlayers}
                  onChange={(e) => setConfig({ ...config, numPlayers: Math.max(4, parseInt(e.target.value) || 4) })}
                  className="h-14 text-xl font-black rounded-2xl border-2 focus-visible:ring-primary bg-card"
                />
                <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-xl border border-dashed">
                  <AlertCircle className="h-4 w-4 text-primary" />
                  <p className="text-[10px] font-bold text-muted-foreground uppercase leading-tight">
                    Algorithm requires at least 4 players for doubles matching.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full h-16 bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-[0.2em] shadow-xl rounded-2xl text-lg group transition-all active:scale-[0.98]">
                Setup Player Roster
                <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Player Roster Management */}
      {step === 2 && (
        <Card className="w-full max-w-4xl shadow-xl border-2 rounded-[2.5rem] overflow-hidden animate-in fade-in slide-in-from-right-4">
          <CardHeader className="bg-muted/30 p-8 border-b flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-primary">
                <UserPlus className="h-6 w-6" />
                Manage Player Roster
              </CardTitle>
              <CardDescription className="font-medium">
                Enter player names and skills to ensure balanced matches.
              </CardDescription>
            </div>
            <Badge variant="outline" className="h-8 px-4 font-black uppercase tracking-widest text-[10px] bg-white shadow-sm">
              {players.length} Registered
            </Badge>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-6">Player Name</div>
                <div className="col-span-5">Skill Level</div>
              </div>
              
              {players.map((player, index) => (
                <div key={player.id} className="grid grid-cols-12 gap-4 items-center p-4 bg-muted/20 rounded-2xl border-2 border-transparent hover:border-primary/20 transition-all hover:bg-white hover:shadow-md">
                  <div className="col-span-1 flex items-center justify-center font-black text-primary/40 text-lg tabular-nums">
                    {index + 1}
                  </div>
                  <div className="col-span-6">
                    <Input 
                      placeholder="ENTER NAME..."
                      value={player.name}
                      onChange={(e) => updatePlayer(index, { name: e.target.value.toUpperCase() })}
                      className="h-12 font-black uppercase tracking-widest border-2 focus-visible:ring-primary rounded-xl bg-card"
                    />
                  </div>
                  <div className="col-span-5 flex items-center gap-3">
                    <Select 
                      value={player.skill} 
                      onValueChange={(val: SkillLevel) => updatePlayer(index, { 
                        skill: val, 
                        level: SKILL_CONFIG[val].level 
                      })}
                    >
                      <SelectTrigger className="h-12 font-black uppercase text-[10px] tracking-widest border-2 rounded-xl bg-card">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(Object.keys(SKILL_CONFIG) as SkillLevel[]).map((sk) => (
                          <SelectItem key={sk} value={sk} className="font-bold uppercase text-[10px] tracking-widest">
                            {sk} (Lv.{SKILL_CONFIG[sk].level})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className={`w-4 h-4 rounded-full border-2 ${SKILL_CONFIG[player.skill].color.split(' ')[0]} shadow-sm shrink-0`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                onClick={() => setStep(1)}
                className="h-16 px-8 border-2 font-black uppercase tracking-widest text-xs rounded-2xl flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Setup
              </Button>
              <Button 
                className="flex-1 h-16 bg-primary text-white font-black uppercase tracking-[0.2em] shadow-xl rounded-2xl text-lg group transition-all active:scale-[0.98]"
                onClick={() => {
                  if (players.some(p => !p.name.trim())) {
                    alert("Please fill in all player names before generating the schedule.");
                    return;
                  }
                  setStep(3);
                }}
              >
                Generate Matches
                <Trophy className="ml-2 h-6 w-6 transition-transform group-hover:scale-110" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Components shared across all tools */}
      <ArticleSection toolId="tennis" />
      <SmartAd />
      <SeoContent toolId="tennis" />
    </div>
  );
}
