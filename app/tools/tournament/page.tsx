'use client';

import React, { useState, useRef, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Trophy, 
  Plus, 
  Trash2, 
  Play, 
  RotateCcw, 
  Download, 
  LayoutDashboard, 
  CalendarDays,
  UserPlus
} from 'lucide-react';
import { useLang } from '@/components/Providers';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { SeoContent } from '@/components/seo-content';
import { SmartAd } from '@/components/smart-ad';

interface Match {
  id: string;
  round: number;
  home: string;
  away: string;
  scoreH: number | null;
  scoreA: number | null;
}

interface Standing {
  team: string;
  played: number;
  win: number;
  draw: number;
  loss: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
}

export default function TournamentManagerPage() {
  const { t } = useLang();
  const [teams, setTeams] = useLocalStorage<string[]>('versokit-tournament-teams', []);
  const [fixtures, setFixtures] = useLocalStorage<Match[]>('versokit-tournament-fixtures', []);
  const [view, setView] = useLocalStorage<'setup' | 'play'>('versokit-tournament-view', 'setup');
  const [newTeam, setNewTeam] = useState('');
  const standingsRef = useRef<HTMLDivElement>(null);

  const addTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTeam.trim()) return;
    if (teams.includes(newTeam.trim())) {
      toast({ title: "Nama tim sudah ada", variant: "destructive" });
      return;
    }
    setTeams([...teams, newTeam.trim()]);
    setNewTeam('');
  };

  const removeTeam = (index: number) => {
    setTeams(teams.filter((_, i) => i !== index));
  };

  const generateTournament = () => {
    if (teams.length < 2) {
      toast({ title: "Minimal butuh 2 tim", variant: "destructive" });
      return;
    }

    let schedule: Match[] = [];
    let tempTeams = [...teams];
    
    if (tempTeams.length % 2 !== 0) {
      tempTeams.push('BYE');
    }

    const numTeams = tempTeams.length;
    const numRounds = numTeams - 1;
    const matchesPerRound = numTeams / 2;

    for (let r = 0; r < numRounds; r++) {
      for (let m = 0; m < matchesPerRound; m++) {
        const home = tempTeams[m];
        const away = tempTeams[numTeams - 1 - m];

        if (home !== 'BYE' && away !== 'BYE') {
          schedule.push({
            id: `r${r+1}-m${m+1}`,
            round: r + 1,
            home,
            away,
            scoreH: null,
            scoreA: null
          });
        }
      }
      const last = tempTeams.pop()!;
      tempTeams.splice(1, 0, last);
    }

    setFixtures(schedule);
    setView('play');
    toast({ title: "Jadwal Berhasil Dibuat!" });
  };

  const resetTournament = () => {
    if (confirm("Hapus semua data turnamen dan mulai ulang?")) {
      setFixtures([]);
      setView('setup');
    }
  };

  const updateScore = (id: string, side: 'H' | 'A', value: string) => {
    const val = value === '' ? null : parseInt(value);
    setFixtures(prev => prev.map(m => 
      m.id === id ? { ...m, [side === 'H' ? 'scoreH' : 'scoreA']: val } : m
    ));
  };

  const standings = useMemo(() => {
    const stats: Record<string, Standing> = {};
    teams.forEach(team => {
      stats[team] = { team, played: 0, win: 0, draw: 0, loss: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
    });

    fixtures.forEach(m => {
      if (m.scoreH !== null && m.scoreA !== null) {
        const home = stats[m.home];
        const away = stats[m.away];

        if (home && away) {
          home.played++;
          away.played++;
          home.gf += m.scoreH;
          home.ga += m.scoreA;
          away.gf += m.scoreA;
          away.ga += m.scoreH;

          if (m.scoreH > m.scoreA) {
            home.win++;
            home.pts += 3;
            away.loss++;
          } else if (m.scoreH < m.scoreA) {
            away.win++;
            away.pts += 3;
            home.loss++;
          } else {
            home.draw++;
            away.draw++;
            home.pts += 1;
            away.pts += 1;
          }
        }
      }
    });

    return Object.values(stats)
      .map(s => ({ ...s, gd: s.gf - s.ga }))
      .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
  }, [teams, fixtures]);

  const downloadStandings = async () => {
    if (!standingsRef.current) return;
    const canvas = await html2canvas(standingsRef.current, { backgroundColor: '#ffffff' });
    const link = document.createElement('a');
    link.download = `klasemen-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const seoData = {
    title: "Tournament Manager Pro",
    description: "Organize and manage Round Robin tournaments for any sport with automatic fixtures and standings calculation.",
    steps: [
      "Enter the names of all participating teams or players.",
      "Click 'Generate' to create a fair Round Robin schedule.",
      "Enter match results in the 'Matches' tab as games are played.",
      "Switch to the 'Standings' tab to view auto-updated league rankings."
    ],
    article: "Organizing a **Round Robin Tournament** shouldn't be hard. This generator automatically creates fixtures for Padel, Pickleball, or Futsal. The best part? It calculates the **League Standings** automatically based on the scores you input, tracking points, goals, and goal difference. No login required, and it handles both even and odd team counts by automatically assigning 'BYE' rounds.",
    faq: [
      { q: "How many teams can I manage?", a: "The system can handle any number of teams. Large counts will generate more rounds as expected in a true round-robin format." },
      { q: "What happens if I have an odd number of teams?", a: "The tool automatically handles this by assigning one team a 'BYE' (rest) for each round, ensuring a fair schedule for everyone." },
      { q: "Can I share the league table?", a: "Yes, you can click the 'Download Gambar Klasemen' button to save a professional-looking image of the table to share on social media or chat groups." }
    ]
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">Manager Turnamen Pro</h1>
        <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Round Robin & Klasemen Otomatis</p>
      </div>

      {view === 'setup' ? (
        <Card className="w-full max-w-2xl shadow-xl border-2">
          <CardHeader className="bg-muted/30 border-b">
            <CardTitle className="text-lg font-black flex items-center gap-2 uppercase tracking-tight">
              <UserPlus className="h-5 w-5 text-primary" />
              Daftar Peserta
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <form onSubmit={addTeam} className="flex gap-3">
              <Input 
                placeholder="Masukkan Nama Tim..." 
                value={newTeam}
                onChange={(e) => setNewTeam(e.target.value.toUpperCase())}
                className="h-12 font-bold uppercase"
              />
              <Button type="submit" className="h-12 px-6 font-black uppercase tracking-widest">
                <Plus className="mr-2 h-4 w-4" /> {t('add')}
              </Button>
            </form>

            <div className="flex flex-wrap gap-3">
              {teams.map((p, i) => (
                <div key={i} className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl font-black text-xs border-2 border-primary/20 animate-in zoom-in duration-200">
                  {p}
                  <button onClick={() => removeTeam(i)} className="hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {teams.length === 0 && (
                <div className="w-full py-10 text-center opacity-30 border-2 border-dashed rounded-2xl">
                   <p className="font-bold uppercase text-xs tracking-[0.2em]">Belum Ada Peserta</p>
                </div>
              )}
            </div>

            <Button 
              className="w-full h-16 bg-accent text-white text-xl font-black uppercase tracking-[0.2em] shadow-xl rounded-2xl transition-transform active:scale-95"
              disabled={teams.length < 2}
              onClick={generateTournament}
            >
              <Play className="mr-2 h-6 w-6" /> {t('generate')}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="w-full space-y-8">
          <div className="flex justify-between items-center gap-4 bg-card p-6 rounded-2xl border-2 shadow-sm">
             <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl"><Trophy className="h-6 w-6 text-primary" /></div>
                <h2 className="font-black uppercase tracking-tight text-xl">Dashboard Turnamen</h2>
             </div>
             <Button variant="outline" onClick={resetTournament} className="font-bold border-2">
                <RotateCcw className="mr-2 h-4 w-4" /> Mulai Ulang
             </Button>
          </div>

          <Tabs defaultValue="matches" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-16 bg-muted p-2 rounded-2xl mb-8">
              <TabsTrigger value="matches" className="font-black uppercase tracking-widest rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-lg">
                <CalendarDays className="mr-2 h-4 w-4" /> Jadwal Pertandingan
              </TabsTrigger>
              <TabsTrigger value="standings" className="font-black uppercase tracking-widest rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-lg">
                <LayoutDashboard className="mr-2 h-4 w-4" /> Klasemen
              </TabsTrigger>
            </TabsList>

            <TabsContent value="matches" className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: Math.max(...fixtures.map(f => f.round)) }).map((_, rIdx) => (
                <Card key={rIdx} className="overflow-hidden border-2 shadow-lg">
                  <div className="bg-primary p-3 text-center text-white font-black uppercase tracking-[0.3em] text-xs">
                    BABAK {rIdx + 1}
                  </div>
                  <CardContent className="p-4 space-y-4">
                    {fixtures.filter(f => f.round === rIdx + 1).map((match) => (
                      <div key={match.id} className="flex flex-col gap-2 p-4 bg-muted/20 rounded-xl border">
                        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 mb-1">
                           <span>Match {match.id.split('-')[1]}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex-1 text-right font-black uppercase text-sm truncate">{match.home}</div>
                          <div className="flex items-center gap-1">
                            <Input 
                              type="number" 
                              className="w-10 h-10 p-0 text-center font-black text-lg bg-card border-2" 
                              value={match.scoreH ?? ''}
                              onChange={(e) => updateScore(match.id, 'H', e.target.value)}
                            />
                            <span className="opacity-30 font-black text-xs">VS</span>
                            <Input 
                              type="number" 
                              className="w-10 h-10 p-0 text-center font-black text-lg bg-card border-2" 
                              value={match.scoreA ?? ''}
                              onChange={(e) => updateScore(match.id, 'A', e.target.value)}
                            />
                          </div>
                          <div className="flex-1 text-left font-black uppercase text-sm truncate">{match.away}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="standings" className="space-y-6">
              <div ref={standingsRef} className="bg-card border-4 border-primary/20 rounded-[2.5rem] overflow-hidden shadow-2xl p-8">
                 <div className="text-center mb-10 space-y-2">
                    <Trophy className="h-10 w-10 text-primary mx-auto" />
                    <h3 className="text-3xl font-black uppercase tracking-tighter">KLASEMEN TURNAMEN</h3>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Update Otomatis • VersoKit Pro</p>
                 </div>
                 
                 <Table>
                   <TableHeader className="bg-muted/50">
                     <TableRow className="border-b-2 border-primary/20">
                       <TableHead className="font-black uppercase text-[10px] tracking-widest text-center w-12">#</TableHead>
                       <TableHead className="font-black uppercase text-[10px] tracking-widest">Tim</TableHead>
                       <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">P</TableHead>
                       <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">W</TableHead>
                       <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">D</TableHead>
                       <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">L</TableHead>
                       <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">GF</TableHead>
                       <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">GA</TableHead>
                       <TableHead className="font-black uppercase text-[10px] tracking-widest text-center">GD</TableHead>
                       <TableHead className="font-black uppercase text-[10px] tracking-widest text-center bg-primary/10 text-primary">PTS</TableHead>
                     </TableRow>
                   </TableHeader>
                   <TableBody>
                     {standings.map((s, i) => (
                       <TableRow key={s.team} className="border-b hover:bg-muted/10 transition-colors">
                         <TableCell className="text-center font-black text-lg text-primary">{i + 1}</TableCell>
                         <TableCell className="font-black uppercase text-sm tracking-tight">{s.team}</TableCell>
                         <TableCell className="text-center font-bold">{s.played}</TableCell>
                         <TableCell className="text-center font-bold">{s.win}</TableCell>
                         <TableCell className="text-center font-bold">{s.draw}</TableCell>
                         <TableCell className="text-center font-bold">{s.loss}</TableCell>
                         <TableCell className="text-center font-medium opacity-60">{s.gf}</TableCell>
                         <TableCell className="text-center font-medium opacity-60">{s.ga}</TableCell>
                         <TableCell className={cn("text-center font-black", s.gd > 0 ? "text-green-600" : s.gd < 0 ? "text-destructive" : "")}>
                           {s.gd > 0 ? `+${s.gd}` : s.gd}
                         </TableCell>
                         <TableCell className="text-center font-black text-xl bg-primary/5 text-primary tabular-nums">{s.pts}</TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
              </div>
              
              <Button onClick={downloadStandings} className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl">
                 <Download className="mr-2 h-5 w-5" /> Download Gambar Klasemen
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      )}
      
      <SmartAd />
      
      <SeoContent {...seoData} />
    </div>
  );
}
