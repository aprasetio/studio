
/**
 * Padel Americano Pairing Algorithm
 * Prioritizes unique partners and fair playtime.
 */

import { Player, Match, AmericanoConfig } from '../store/useAmericanoStore';

export function generateNextRound(
  players: Player[],
  roundNumber: number,
  config: AmericanoConfig
): Match[] {
  // 1. Determine who plays this round
  // Sort by matches played (asc) to ensure everyone plays equally
  const sortedPlayers = [...players].sort((a, b) => {
    if (a.matchesPlayed !== b.matchesPlayed) {
      return a.matchesPlayed - b.matchesPlayed;
    }
    return Math.random() - 0.5; // Randomize ties
  });

  const maxPlayersThisRound = config.totalCourts * 4;
  const activePlayers = sortedPlayers.slice(0, maxPlayersThisRound);
  
  // 2. Greedy Pairing
  // Try to find pairs that haven't played together
  const matches: Match[] = [];
  const pool = [...activePlayers];
  
  for (let c = 1; c <= config.totalCourts; c++) {
    if (pool.length < 4) break;

    // Pick a player
    const p1 = pool.shift()!;
    
    // Find best partner for p1 (least played with)
    pool.sort((a, b) => {
      const countA = p1.partnersHistory.filter(id => id === a.id).length;
      const countB = p1.partnersHistory.filter(id => id === b.id).length;
      return countA - countB;
    });
    const p2 = pool.shift()!;

    // Pick next player for team 2
    const p3 = pool.shift()!;
    
    // Find best partner for p3
    pool.sort((a, b) => {
      const countA = p3.partnersHistory.filter(id => id === a.id).length;
      const countB = p3.partnersHistory.filter(id => id === b.id).length;
      return countA - countB;
    });
    const p4 = pool.shift()!;

    matches.push({
      id: `r${roundNumber}-c${c}-${Math.random().toString(36).substr(2, 5)}`,
      round: roundNumber,
      court: c,
      team1: [p1.id, p2.id],
      team2: [p3.id, p4.id],
      score1: 0,
      score2: 0,
      isFinished: false,
    });
  }

  return matches;
}
