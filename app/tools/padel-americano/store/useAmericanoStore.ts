
'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Player = {
  id: string;
  name: string;
  totalPoints: number;
  matchesPlayed: number;
  pointsDiff: number;
  partnersHistory: string[];
};

export type Match = {
  id: string;
  round: number;
  court: number;
  team1: [string, string];
  team2: [string, string];
  score1: number;
  score2: number;
  isFinished: boolean;
};

export type AmericanoConfig = {
  targetPoints: number;
  totalCourts: number;
};

interface AmericanoState {
  config: AmericanoConfig;
  players: Player[];
  matches: Match[];
  currentRound: number;
  status: 'setup' | 'active' | 'finished';

  // Actions
  setupTournament: (names: string[], config: AmericanoConfig) => void;
  updateMatchScore: (matchId: string, score1: number) => void;
  finishRound: (nextMatches: Match[]) => void;
  resetTournament: () => void;
}

export const useAmericanoStore = create<AmericanoState>()(
  persist(
    (set) => ({
      config: { targetPoints: 32, totalCourts: 1 },
      players: [],
      matches: [],
      currentRound: 1,
      status: 'setup',

      setupTournament: (names, config) => {
        const players: Player[] = names.map(name => ({
          id: `p-${Math.random().toString(36).substr(2, 9)}`,
          name: name.toUpperCase(),
          totalPoints: 0,
          matchesPlayed: 0,
          pointsDiff: 0,
          partnersHistory: [],
        }));
        set({ players, config, status: 'active', currentRound: 1, matches: [] });
      },

      updateMatchScore: (matchId, score1) => set((state) => {
        const score2 = state.config.targetPoints - score1;
        return {
          matches: state.matches.map(m => 
            m.id === matchId ? { ...m, score1, score2, isFinished: true } : m
          )
        };
      }),

      finishRound: (nextMatches) => set((state) => {
        // Update player stats based on finished matches in the current round
        const currentRoundMatches = state.matches.filter(m => m.round === state.currentRound);
        const updatedPlayers = [...state.players];

        currentRoundMatches.forEach(m => {
          const allPlayersInMatch = [...m.team1, ...m.team2];
          allPlayersInMatch.forEach(pid => {
            const p = updatedPlayers.find(x => x.id === pid);
            if (!p) return;
            
            p.matchesPlayed += 1;
            const isTeam1 = m.team1.includes(pid);
            const myScore = isTeam1 ? m.score1 : m.score2;
            const oppScore = isTeam1 ? m.score2 : m.score1;
            
            p.totalPoints += myScore;
            p.pointsDiff += (myScore - oppScore);

            // Record partner
            const partnerId = isTeam1 
              ? m.team1.find(id => id !== pid) 
              : m.team2.find(id => id !== pid);
            if (partnerId) p.partnersHistory.push(partnerId);
          });
        });

        return {
          players: updatedPlayers,
          matches: [...state.matches, ...nextMatches],
          currentRound: state.currentRound + 1
        };
      }),

      resetTournament: () => set({ 
        status: 'setup', 
        players: [], 
        matches: [], 
        currentRound: 1 
      }),
    }),
    {
      name: 'versokit-padel-americano',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
