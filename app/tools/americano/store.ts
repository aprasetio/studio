'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type SportMode = 'padel' | 'pickleball';

export interface Player {
  id: string;
  name: string;
  totalPoints: number;
  matchesPlayed: number;
  pointsDiff: number;
  partnersHistory: string[];
}

export interface Match {
  id: string;
  round: number;
  court: number;
  team1: [string, string];
  team2: [string, string];
  score1: number;
  score2: number;
  isFinished: boolean;
}

interface AmericanoState {
  sportMode: SportMode;
  targetScore: number;
  players: Player[];
  matches: Match[];
  currentRound: number;
  status: 'setup' | 'active' | 'finished';
  benchHistory: string[];

  // Actions
  setSportMode: (mode: SportMode) => void;
  setTargetScore: (score: number) => void;
  setupTournament: (names: string[]) => void;
  generateNextRound: () => void;
  updateScore: (matchId: string, s1: number, s2?: number) => void;
  finishMatch: (matchId: string) => void;
  resetTournament: () => void;
}

export const useAmericanoStore = create<AmericanoState>()(
  persist(
    (set, get) => ({
      sportMode: 'padel',
      targetScore: 32,
      players: [],
      matches: [],
      currentRound: 0,
      status: 'setup',
      benchHistory: [],

      setSportMode: (mode) => set({ 
        sportMode: mode, 
        targetScore: mode === 'padel' ? 32 : 11 
      }),

      setTargetScore: (score) => set({ targetScore: score }),

      setupTournament: (names) => {
        const players: Player[] = names.map(name => ({
          id: `p-${Math.random().toString(36).substr(2, 9)}`,
          name: name.toUpperCase().trim(),
          totalPoints: 0,
          matchesPlayed: 0,
          pointsDiff: 0,
          partnersHistory: [],
        }));
        set({ 
          players, 
          status: 'active', 
          currentRound: 0, 
          matches: [], 
          benchHistory: [] 
        });
        get().generateNextRound();
      },

      generateNextRound: () => {
        const { players, currentRound } = get();
        const nextRound = currentRound + 1;
        
        // 1. Determine Bench (if N % 4 != 0)
        const sortedForBench = [...players].sort((a, b) => a.matchesPlayed - b.matchesPlayed);
        const sitOutCount = players.length % 4;
        const sittingOut = sortedForBench.slice(0, sitOutCount);
        const activePool = [...players].filter(p => !sittingOut.find(s => s.id === p.id));

        // 2. Pairing Algorithm: Anchor Shift
        const n = activePool.length;
        const shiftedIndices = [0];
        if (n > 1) {
          const indices = Array.from({ length: n - 1 }, (_, i) => i + 1);
          const rotation = (nextRound - 1) % (n - 1);
          const rotated = [...indices.slice(-rotation), ...indices.slice(0, -rotation)];
          shiftedIndices.push(...rotated);
        }

        const newMatches: Match[] = [];
        const numCourts = Math.floor(n / 4);

        for (let c = 0; c < numCourts; c++) {
          const base = c * 4;
          newMatches.push({
            id: `r${nextRound}-c${c + 1}-${Math.random().toString(36).substr(2, 5)}`,
            round: nextRound,
            court: c + 1,
            team1: [activePool[shiftedIndices[base]].id, activePool[shiftedIndices[base + 1]].id],
            team2: [activePool[shiftedIndices[base + 2]].id, activePool[shiftedIndices[base + 3]].id],
            score1: 0,
            score2: 0,
            isFinished: false,
          });
        }

        set(state => ({
          matches: [...state.matches, ...newMatches],
          currentRound: nextRound,
          benchHistory: [...state.benchHistory, ...sittingOut.map(p => p.id)]
        }));
      },

      updateScore: (matchId, s1, s2) => set((state) => {
        const isPickle = state.sportMode === 'pickleball';
        const finalS2 = isPickle ? (s2 ?? 0) : (state.targetScore - s1);
        
        return {
          matches: state.matches.map(m => 
            m.id === matchId ? { ...m, score1: s1, score2: finalS2 } : m
          )
        };
      }),

      finishMatch: (matchId) => set((state) => {
        const match = state.matches.find(m => m.id === matchId);
        if (!match || match.isFinished) return state;

        const updatedPlayers = state.players.map(p => {
          const isTeam1 = match.team1.includes(p.id);
          const isTeam2 = match.team2.includes(p.id);
          
          if (isTeam1 || isTeam2) {
            const myScore = isTeam1 ? match.score1 : match.score2;
            const oppScore = isTeam1 ? match.score2 : match.score1;
            const partnerId = isTeam1 
              ? match.team1.find(id => id !== p.id) 
              : match.team2.find(id => id !== p.id);

            return {
              ...p,
              totalPoints: p.totalPoints + myScore,
              pointsDiff: p.pointsDiff + (myScore - oppScore),
              matchesPlayed: p.matchesPlayed + 1,
              partnersHistory: partnerId ? [...p.partnersHistory, partnerId] : p.partnersHistory
            };
          }
          return p;
        });

        return {
          players: updatedPlayers,
          matches: state.matches.map(m => m.id === matchId ? { ...m, isFinished: true } : m)
        };
      }),

      resetTournament: () => set({ 
        status: 'setup', 
        players: [], 
        matches: [], 
        currentRound: 0,
        benchHistory: []
      }),
    }),
    {
      name: 'versokit-americano-v2',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
