'use client';

import { useRef } from 'react';

export type Player = {
  id: number;
  position: { top: string; left: string };
  number: number;
  role: string;
};

type FootballPitchProps = {
  players: Player[];
  onPlayerMove: (playerId: number, newPosition: { top: string; left: string }) => void;
};

export function FootballPitch({ players, onPlayerMove }: FootballPitchProps) {
  const pitchRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, playerId: number) => {
    e.dataTransfer.setData('playerId', playerId.toString());
    e.currentTarget.style.cursor = 'grabbing';
  };
  
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.cursor = 'grab';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const playerId = parseInt(e.dataTransfer.getData('playerId'), 10);
    const pitch = pitchRef.current;

    if (!pitch || !playerId) return;

    const rect = pitch.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const left = Math.max(0, Math.min(rect.width, x));
    const top = Math.max(0, Math.min(rect.height, y));

    const newPosition = {
      top: `${(top / rect.height) * 100}%`,
      left: `${(left / rect.width) * 100}%`,
    };

    onPlayerMove(playerId, newPosition);
  };

  return (
    <div 
      ref={pitchRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data-pitch="true"
      className="relative aspect-[7/10] w-full bg-[#34A853] rounded-lg border-4 border-white/80 overflow-hidden shadow-2xl"
    >
      {/* Pitch Markings */}
      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20%] w-[26%] rounded-full border-2 border-white/80"></div>
      {/* Center Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white/80"></div>
      {/* Halfway Line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/80"></div>
      {/* Home Penalty Area */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-[18%] border-x-2 border-t-2 border-white/80 rounded-t-lg"></div>
      {/* Home 6-yard Box */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[35%] h-[8%] border-x-2 border-t-2 border-white/80 rounded-t-lg"></div>
      {/* Home Penalty Spot */}
      <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white/80"></div>
      {/* Home Penalty Arc */}
      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 h-[10%] w-[20%] rounded-full border-b-2 border-transparent border-t-2 border-x-2 border-t-white/80 border-x-white/80" style={{clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'}}></div>
      
      {/* Away Penalty Area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[65%] h-[18%] border-x-2 border-b-2 border-white/80 rounded-b-lg"></div>
      {/* Away 6-yard Box */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-[8%] border-x-2 border-b-2 border-white/80 rounded-b-lg"></div>
      {/* Away Penalty Spot */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white/80"></div>
      {/* Away Penalty Arc */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 h-[10%] w-[20%] rounded-full border-t-2 border-transparent border-b-2 border-x-2 border-b-white/80 border-x-white/80" style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 50%, 0 50%)'}}></div>

      {/* Players */}
      {players.map((player) => (
        <div
          key={player.id}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, player.id)}
          onDragEnd={handleDragEnd}
          className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
          style={{ top: player.position.top, left: player.position.left, cursor: 'grab', touchAction: 'none' }}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg border-2 border-white select-none">
            <span className="font-bold text-sm pointer-events-none">{player.number}</span>
            <span data-player-role className="absolute -bottom-5 text-xs font-semibold text-white bg-black/50 px-1 rounded pointer-events-none">{player.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
