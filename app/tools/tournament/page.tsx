'use client';

import React, { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useLang } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Plus, Trash2, Play } from 'lucide-react';

interface Match {
  home: string;
  away: string;
}

interface Round {
  matches: Match[];
}

export default function TournamentMakerPage() {
  const { t } = useLang();
  const [participants, setParticipants] = useLocalStorage<string[]>('versokit-tournament-participants', []);
  const [newParticipant, setNewParticipant] = useState('');
  const [rounds, setRounds] = useState<Round[]>([]);

  const addParticipant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newParticipant.trim()) return;
    setParticipants([...participants, newParticipant.trim()]);
    setNewParticipant('');
  };

  const removeParticipant = (index: number) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const generateRoundRobin = () => {
    if (participants.length < 2) return;

    let tempParticipants = [...participants];
    if (tempParticipants.length % 2 !== 0) {
      tempParticipants.push('BYE');
    }

    const n = tempParticipants.length;
    const totalRounds = n - 1;
    const matchesPerRound = n / 2;
    const generatedRounds: Round[] = [];

    for (let r = 0; r < totalRounds; r++) {
      const matches: Match[] = [];
      for (let m = 0; m < matchesPerRound; m++) {
        const home = tempParticipants[m];
        const away = tempParticipants[n - 1 - m];
        if (home !== 'BYE' && away !== 'BYE') {
          matches.push({ home, away });
        }
      }
      generatedRounds.push({ matches });
      // Rotate participants
      const last = tempParticipants.pop()!;
      tempParticipants.splice(1, 0, last);
    }
    setRounds(generatedRounds);
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 max-w-4xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">{t('tournament')}</h1>
        <p className="text-muted-foreground font-medium">Buat jadwal pertandingan round robin untuk tim Anda</p>
      </div>

      <Card className="w-full shadow-lg border-2">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2 uppercase">
            <Trophy className="h-5 w-5 text-primary" />
            {t('add_player')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={addParticipant} className="flex gap-2">
            <Input 
              placeholder={t('team_name')} 
              value={newParticipant}
              onChange={(e) => setNewParticipant(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Plus className="h-4 w-4 mr-2" /> {t('add')}
            </Button>
          </form>

          <div className="flex flex-wrap gap-2">
            {participants.map((p, i) => (
              <div key={i} className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full font-bold text-sm border-2 border-transparent hover:border-primary/20 transition-all">
                {p}
                <button onClick={() => removeParticipant(i)}>
                  <Trash2 className="h-3 w-3 text-muted-foreground hover:text-destructive" />
                </button>
              </div>
            ))}
          </div>

          <Button 
            className="w-full h-12 bg-accent font-black uppercase tracking-widest text-white shadow-lg"
            disabled={participants.length < 2}
            onClick={generateRoundRobin}
          >
            <Play className="h-4 w-4 mr-2" /> {t('generate')}
          </Button>
        </CardContent>
      </Card>

      {rounds.length > 0 && (
        <div className="w-full space-y-6">
          {rounds.map((round, rIndex) => (
            <Card key={rIndex} className="overflow-hidden border-2">
              <div className="bg-primary p-3 text-center text-white font-black uppercase tracking-widest text-xs">
                BABAK {rIndex + 1}
              </div>
              <CardContent className="p-4 grid gap-3">
                {round.matches.map((match, mIndex) => (
                  <div key={mIndex} className="flex items-center justify-between bg-muted/30 p-4 rounded-xl border font-bold">
                    <span className="flex-1 text-right">{match.home}</span>
                    <span className="px-4 opacity-30 text-xs">VS</span>
                    <span className="flex-1 text-left">{match.away}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
