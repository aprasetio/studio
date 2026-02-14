'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type SportMode = 'padel' | 'pickleball' | 'tennis';

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
        targetScore: mode === 'pickleball' ? 11 : 32 
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
        const totalPlayers = players.length;
        
        // --- NEW ALGORITHM: CIRCLE METHOD (Fixed Rotation) ---
        // 1. Create a working array of indices [0, 1, 2, 3...]
        let indices = players.map((_, i) => i);
        
        // 2. Add 'Ghost' index (-1) if players are not divisible by 4
        // Americano needs groups of 4. If we have 5 players, we need 3 ghosts to make 8 spots?
        // Actually, for Americano 2v2, the standard logic is simpler:
        // We just need to ensure everyone plays with everyone.
        
        // But to fix your specific "Odd Player Bench" issue quickly without complex schedules:
        // We will use a simple "Shift" logic on the full player list.
        
        // Calculate shift based on round number
        // Shift array: [0, 1, 2, 3, 4] -> Round 1
        // Shift array: [4, 0, 1, 2, 3] -> Round 2 (Shift right by 1)
        const rotationStep = (nextRound - 1) % totalPlayers;
        const rotatedPlayers = [
          ...players.slice(totalPlayers - rotationStep),
          ...players.slice(0, totalPlayers - rotationStep)
        ];

        // 3. Take groups of 4 from the rotated array
        const newMatches: Match[] = [];
        const sittingOutIds: string[] = [];
        
        let playerIndex = 0;
        let courtIndex = 1;

        while (playerIndex + 3 < totalPlayers) {
            // We have enough for a match (4 players)
            const p1 = rotatedPlayers[playerIndex];
            const p2 = rotatedPlayers[playerIndex + 1];
            const p3 = rotatedPlayers[playerIndex + 2];
            const p4 = rotatedPlayers[playerIndex + 3];

            // Pairing Logic (1&2 vs 3&4) - You can rotate this internally too if needed
            // To make it more "Americano" (partner swap), we can swap internal positions based on round parity
            // Even round: 1&2 vs 3&4
            // Odd round: 1&3 vs 2&4 (Simple swap)
            let team1 = [p1.id, p2.id];
            let team2 = [p3.id, p4.id];

            if (nextRound % 2 === 0) {
               team1 = [p1.id, p3.id];
               team2 = [p2.id, p4.id];
            } 
            
            newMatches.push({
                id: `r${nextRound}-c${courtIndex}-${Math.random().toString(36).substr(2, 5)}`,
                round: nextRound,
                court: courtIndex,
                team1: team1 as [string, string],
                team2: team2 as [string, string],
                score1: 0,
                score2: 0,
                isFinished: false,
            });

            playerIndex += 4;
            courtIndex++;
        }

        // 4. Remaining players are Bench
        for (let i = playerIndex; i < totalPlayers; i++) {
            sittingOutIds.push(rotatedPlayers[i].id);
        }

        set(state => ({
          matches: [...state.matches, ...newMatches],
          currentRound: nextRound,
          benchHistory: [...state.benchHistory, ...sittingOutIds]
        }));
      },

      updateScore: (matchId, s1, s2) => set((state) => {
        const match = state.matches.find(m => m.id === matchId);
        if (!match) return state;

        const isPickle = state.sportMode === 'pickleball';
        
        // Auto-calculate s2 for Padel/Tennis (Target - s1)
        // For Pickleball, allow manual s2 input
        let finalS2 = s2;
        if (!isPickle) {
             finalS2 = state.targetScore - s1;
        }

        return {
          matches: state.matches.map(m => 
            m.id === matchId ? { ...m, score1: s1, score2: finalS2 ?? 0 } : m
          )
        };
      }),

      finishMatch: (matchId) => set((state) => {
        const match = state.matches.find(m => m.id === matchId);
        if (!match || match.isFinished) return state;

        // Update stats for players in this match
        const updatedPlayers = state.players.map(p => {
          const isTeam1 = match.team1.includes(p.id);
          const isTeam2 = match.team2.includes(p.id);
          
          if (!isTeam1 && !isTeam2) return p; // Player not in this match

          const myScore = isTeam1 ? match.score1 : match.score2;
          const oppScore = isTeam1 ? match.score2 : match.score1;
          
          // Find partner ID
          let partnerId = "";
          if (isTeam1) partnerId = match.team1.find(id => id !== p.id) || "";
          else partnerId = match.team2.find(id => id !== p.id) || "";

          return {
            ...p,
            totalPoints: p.totalPoints + myScore,
            pointsDiff: p.pointsDiff + (myScore - oppScore),
            matchesPlayed: p.matchesPlayed + 1,
            partnersHistory: partnerId ? [...p.partnersHistory, partnerId] : p.partnersHistory
          };
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
      name: 'versokit-americano-v4', // Incremented version to clear old cache
      storage: createJSONStorage(() => localStorage),
    }
  )
);