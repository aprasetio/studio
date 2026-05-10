
'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Player {
  id: string;
  name: string;
  skill: SkillLevel;
}

export interface Match {
  id: string;
  round: number;
  court: number;
  team1: string[]; // Player IDs
  team2: string[]; // Player IDs
  score1: number | null;
  score2: number | null;
  type: 'auto' | 'manual';
  status: 'scheduled' | 'finished';
}

interface TennisState {
  config: {
    courts: number;
    matchDuration: number;
    totalDuration: number;
  };
  players: Player[];
  schedule: Match[];
  
  // Actions
  setConfig: (config: Partial<TennisState['config']>) => void;
  addPlayer: (name: string, skill: SkillLevel) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (id: string, data: Partial<Player>) => void;
  
  generateSchedule: () => void;
  updateScore: (matchId: string, s1: number | null, s2: number | null) => void;
  swapPlayer: (matchId: string, team: 1 | 2, index: number, newPlayerId: string) => void;
  addCustomMatch: (p1: string, p2: string, p3: string, p4: string, round: number, court: number) => void;
  deleteMatch: (matchId: string) => void;
  resetAll: () => void;
}

export const useTennisStore = create<TennisState>()(
  persist(
    (set, get) => ({
      config: {
        courts: 1,
        matchDuration: 30,
        totalDuration: 120
      },
      players: [],
      schedule: [],

      setConfig: (config) => set((state) => ({ config: { ...state.config, ...config } })),

      addPlayer: (name, skill) => set((state) => ({
        players: [...state.players, { id: `p-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, name, skill }]
      })),

      removePlayer: (id) => set((state) => ({
        players: state.players.filter(p => p.id !== id),
        schedule: state.schedule.filter(m => !m.team1.includes(id) && !m.team2.includes(id))
      })),

      updatePlayer: (id, data) => set((state) => ({
        players: state.players.map(p => p.id === id ? { ...p, ...data } : p)
      })),

      generateSchedule: () => {
        const { config, players } = get();
        if (players.length < 4) return;

        const totalRounds = Math.floor(config.totalDuration / config.matchDuration);
        const newSchedule: Match[] = [];
        
        // Internal tracking for fair play
        const playCounts: Record<string, number> = {};
        players.forEach(p => playCounts[p.id] = 0);

        for (let r = 1; r <= totalRounds; r++) {
          const available = [...players].sort((a, b) => {
            // Priority 1: Least play count
            if (playCounts[a.id] !== playCounts[b.id]) return playCounts[a.id] - playCounts[b.id];
            // Priority 2: Higher skill (to make sure top players don't wait too long)
            return b.skill - a.skill;
          });

          for (let c = 1; c <= config.courts; c++) {
            if (available.length < 4) break;

            const courtPlayers = available.splice(0, 4);
            // Balance: Best+Worst vs Middle two
            courtPlayers.sort((a, b) => b.skill - a.skill);
            
            const team1 = [courtPlayers[0].id, courtPlayers[3].id];
            const team2 = [courtPlayers[1].id, courtPlayers[2].id];

            team1.concat(team2).forEach(pid => playCounts[pid]++);

            newSchedule.push({
              id: `r${r}-c${c}-${Math.random().toString(36).substr(2, 5)}`,
              round: r,
              court: c,
              team1,
              team2,
              score1: null,
              score2: null,
              type: 'auto',
              status: 'scheduled'
            });
          }
        }

        set({ schedule: newSchedule });
      },

      updateScore: (matchId, s1, s2) => set((state) => ({
        schedule: state.schedule.map(m => 
          m.id === matchId 
            ? { ...m, score1: s1, score2: s2, status: (s1 !== null && s2 !== null) ? 'finished' : 'scheduled' } 
            : m
        )
      })),

      swapPlayer: (matchId, team, index, newPlayerId) => set((state) => {
        const match = state.schedule.find(m => m.id === matchId);
        if (!match) return state;

        const updatedSchedule = state.schedule.map(m => {
          if (m.id === matchId) {
            const team1 = [...m.team1];
            const team2 = [...m.team2];
            if (team === 1) team1[index] = newPlayerId;
            else team2[index] = newPlayerId;
            return { ...m, team1, team2 };
          }
          return m;
        });

        return { schedule: updatedSchedule };
      }),

      addCustomMatch: (p1, p2, p3, p4, round, court) => set((state) => ({
        schedule: [...state.schedule, {
          id: `custom-${Date.now()}`,
          round,
          court,
          team1: [p1, p2],
          team2: [p3, p4],
          score1: null,
          score2: null,
          type: 'manual' as const,
          status: 'scheduled' as const
        }].sort((a, b) => a.round - b.round || a.court - b.court)
      })),

      deleteMatch: (matchId) => set((state) => ({
        schedule: state.schedule.filter(m => m.id !== matchId)
      })),

      resetAll: () => set({ schedule: [], players: [] })
    }),
    {
      name: 'versokit-tennis-v2',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
