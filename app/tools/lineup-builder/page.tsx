"use client";
import React from 'react';

export default function LineupPage() {
  return (
    <div className="flex flex-1 flex-col items-center p-8 md:p-12 lg:p-16">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-4xl font-black text-foreground uppercase tracking-tighter">Penyusun Formasi</h1>
        <p className="text-muted-foreground font-medium">Visualisasikan strategi tim Anda di lapangan</p>
      </div>
      
      <div className="mx-auto aspect-[3/4] w-full max-w-sm bg-green-700 border-[8px] border-white relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden">
        {/* Pitch Texture Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>
        
        {/* Lapangan Markings */}
        <div className="absolute top-0 left-[15%] right-[15%] h-[18%] border-b-4 border-x-4 border-white/60"></div>
        <div className="absolute bottom-0 left-[15%] right-[15%] h-[18%] border-t-4 border-x-4 border-white/60"></div>
        <div className="absolute top-1/2 w-full h-1 bg-white/40 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 border-4 border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/60 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Pemain Demo (4-4-2) */}
        {/* Forwards */}
        <PlayerBadge top="18%" left="35%" num="9" />
        <PlayerBadge top="18%" left="65%" num="10" />
        {/* Midfield */}
        <PlayerBadge top="45%" left="15%" num="11" />
        <PlayerBadge top="48%" left="40%" num="8" />
        <PlayerBadge top="48%" left="60%" num="4" />
        <PlayerBadge top="45%" left="85%" num="7" />
        {/* Defenders */}
        <PlayerBadge top="75%" left="15%" num="3" />
        <PlayerBadge top="78%" left="38%" num="5" />
        <PlayerBadge top="78%" left="62%" num="6" />
        <PlayerBadge top="75%" left="85%" num="2" />
        {/* Goalkeeper */}
        <PlayerBadge top="90%" left="50%" num="1" color="bg-yellow-400 text-black" />
      </div>

      <div className="mt-12 bg-card border-2 border-dashed p-8 rounded-2xl max-w-md text-center">
        <p className="text-muted-foreground font-semibold italic">
          "Fitur drag-and-drop, pemilihan formasi, dan kustomisasi nama pemain sedang dalam tahap pengembangan."
        </p>
      </div>
    </div>
  );
}

function PlayerBadge({ top, left, num, color = "bg-primary text-primary-foreground" }: { top: string, left: string, num: string, color?: string }) {
  return (
    <div 
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${color} w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-black shadow-2xl transition-transform hover:scale-110 cursor-default`}
      style={{ top, left }}
    >
      {num}
    </div>
  );
}
