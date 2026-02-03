"use client";

import React, { useState, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Trophy, Users, Play, RotateCcw, Trash2, Plus } from 'lucide-react';

interface Match {
  id: string;
  home: string;
  away: string;
  scoreHome: number;
  scoreAway: number;
  played: boolean;
}

interface Round {
  number: number;
  matches: Match[];
}

interface TournamentData {
  teams: string[];
  rounds: Round[];
}

export default function TournamentPage() {
  const [tournament, setTournament] = useLocalStorage<TournamentData | null>('versokit-tournament', null);
  const [newTeam, setNewTeam] = useState('');
  const [tempTeams, setTempTeams] = useState<string[]>([]);

  const generateRoundRobin = (teams: string[]) => {
    let pool = [...teams];
    if (pool.length % 2 !== 0) pool.push('BYE');
    
    const n = pool.length;
    const rounds: Round[] = [];
    const totalRounds = n - 1;
    const matchesPerRound = n / 2;

    for (let r = 0; r < totalRounds; r++) {
      const matches: Match[] = [];
      for (let m = 0; m < matchesPerRound; m++) {
        const home = pool[m];
        const away = pool[n - 1 - m];
        
        if (home !== 'BYE' && away !== 'BYE') {
          matches.push({
            id: `r${r}-m${m}`,
            home,
            away,
            scoreHome: 0,
            scoreAway: 0,
            played: false
          });
        }
      }
      rounds.push({ number: r + 1, matches });
      // Rotate pool: keep index 0 fixed, rotate others
      pool.splice(1, 0, pool.pop()!);
    }
    
    setTournament({ teams, rounds });
  };

  const handleAddTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTeam.trim() && !tempTeams.includes(newTeam.trim())) {
      setTempTeams([...tempTeams, newTeam.trim()]);
      setNewTeam('');
    }
  };

  const updateMatch = (roundIdx: number, matchIdx: number, updates: Partial<Match>) => {
    if (!tournament) return;
    const newRounds = [...tournament.rounds];
    newRounds[roundIdx].matches[matchIdx] = { ...newRounds[roundIdx].matches[matchIdx], ...updates };
    setTournament({ ...tournament, rounds: newRounds });
  };

  const standings = useMemo(() => {
    if (!tournament) return [];
    const stats: Record<string, { p: number, w: number, d: number, l: number, pts: number }> = {};
    
    tournament.teams.forEach(t => stats[t] = { p: 0, w: 0, d: 0, l: 0, pts: 0 });

    tournament.rounds.forEach(round => {
      round.matches.forEach(m => {
        if (m.played) {
          stats[m.home].p += 1;
          stats[m.away].p += 1;
          if (m.scoreHome > m.scoreAway) {
            stats[m.home].w += 1;
            stats[m.home].pts += 3;
            stats[m.away].l += 1;
          } else if (m.scoreHome < m.scoreAway) {
            stats[m.away].w += 1;
            stats[m.away].pts += 3;
            stats[m.home].l += 1;
          } else {
            stats[m.home].d += 1;
            stats[m.home].pts += 1;
            stats[m.away].d += 1;
            stats[m.away].pts += 1;
          }
        }
      });
    });

    return Object.entries(stats)
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.pts - a.pts || (b.w - a.w));
  }, [tournament]);

  if (!tournament) {
    return (
      <div className="flex flex-col items-center p-6 md:p-12 lg:p-16 max-w-4xl mx-auto w-full gap-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-black tracking-tighter text-foreground uppercase">Generator Turnamen</h1>
          <p className="text-muted-foreground font-medium">Buat jadwal Round Robin instan untuk tim Anda</p>
        </div>

        <Card className="w-full shadow-xl rounded-3xl overflow-hidden border-2">
          <CardHeader className="bg-muted/30 p-8 border-b">
            <CardTitle className="text-xl font-black flex items-center gap-3 uppercase tracking-wider">
              <Users className="h-6 w-6 text-primary" />
              Daftar Peserta
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <form onSubmit={handleAddTeam} className="flex gap-3">
              <Input 
                placeholder="Nama Tim / Pemain..." 
                value={newTeam}
                onChange={(e) => setNewTeam(e.target.value)}
                className="h-12 rounded-xl"
              />
              <Button type="submit" className="h-12 px-6 rounded-xl bg-primary">
                <Plus className="h-5 w-5 mr-2" /> Tambah
              </Button>
            </form>

            <div className="flex flex-wrap gap-2">
              {tempTeams.map((t, i) => (
                <div key={i} className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold flex items-center gap-2">
                  {t}
                  <button onClick={() => setTempTeams(tempTeams.filter((_, idx) => idx !== i))}>
                    <Trash2 className="h-4 w-4 hover:text-destructive transition-colors" />
                  </button>
                </div>
              ))}
            </div>

            <Button 
              className="w-full h-14 bg-accent font-black uppercase tracking-widest rounded-xl mt-4"
              disabled={tempTeams.length < 2}
              onClick={() => generateRoundRobin(tempTeams)}
            >
              <Play className="h-5 w-5 mr-2" /> Buat Turnamen
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-6 md:p-12 lg:p-16 max-w-7xl mx-auto w-full gap-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card p-8 rounded-3xl shadow-xl border">
        <div className="space-y-1 text-center md:text-left">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground flex items-center gap-3">
            <Trophy className="h-8 w-8 text-accent" /> Turnamen Aktif
          </h1>
          <p className="text-muted-foreground font-medium">{tournament.teams.length} Peserta • Round Robin</p>
        </div>
        <Button variant="destructive" onClick={() => { setTournament(null); setTempTeams([]); }} className="font-bold rounded-xl">
          <RotateCcw className="mr-2 h-4 w-4" /> Reset Turnamen
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {tournament.rounds.map((round, rIdx) => (
            <Card key={round.number} className="rounded-3xl shadow-lg border-none overflow-hidden">
              <div className="bg-primary p-4 text-center">
                <h3 className="text-white font-black uppercase tracking-widest text-sm">Babak {round.number}</h3>
              </div>
              <CardContent className="p-6 space-y-4">
                {round.matches.map((match, mIdx) => (
                  <div key={match.id} className="flex items-center gap-4 bg-muted/20 p-4 rounded-2xl border transition-all hover:border-primary/30">
                    <div className="flex-1 text-right font-black uppercase truncate">{match.home}</div>
                    <div className="flex items-center gap-2">
                      <Input 
                        type="number" 
                        value={match.scoreHome} 
                        onChange={(e) => updateMatch(rIdx, mIdx, { scoreHome: parseInt(e.target.value) || 0 })}
                        className="w-14 h-10 text-center font-black rounded-lg p-0"
                      />
                      <span className="font-black opacity-20">-</span>
                      <Input 
                        type="number" 
                        value={match.scoreAway} 
                        onChange={(e) => updateMatch(rIdx, mIdx, { scoreAway: parseInt(e.target.value) || 0 })}
                        className="w-14 h-10 text-center font-black rounded-lg p-0"
                      />
                    </div>
                    <div className="flex-1 text-left font-black uppercase truncate">{match.away}</div>
                    <div className="flex items-center gap-2 ml-4">
                      <Checkbox 
                        checked={match.played} 
                        onCheckedChange={(checked) => updateMatch(rIdx, mIdx, { played: checked === true })}
                        className="h-6 w-6 rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <Card className="rounded-3xl shadow-xl border-2 border-accent/20 overflow-hidden sticky top-24">
            <div className="bg-accent p-4 text-center">
              <h3 className="text-white font-black uppercase tracking-widest text-sm">Klasemen Sementara</h3>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-black text-xs uppercase pl-6">Tim</TableHead>
                  <TableHead className="text-center font-black text-xs uppercase">M</TableHead>
                  <TableHead className="text-center font-black text-xs uppercase pr-6">PTS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {standings.map((team, i) => (
                  <TableRow key={team.name} className={i === 0 ? "bg-accent/5" : ""}>
                    <TableCell className="font-bold pl-6">
                      <span className="opacity-30 mr-2 text-xs">#{i+1}</span>
                      {team.name}
                    </TableCell>
                    <TableCell className="text-center font-medium">{team.p}</TableCell>
                    <TableCell className="text-center font-black pr-6 text-accent">{team.pts}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
}
