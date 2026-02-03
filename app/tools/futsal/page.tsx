"use client";
import React, { useState, useEffect } from 'react';
import { SmartAd } from '@/components/smart-ad';

export default function FutsalPage() {
  const [time, setTime] = useState(1200);
  const [run, setRun] = useState(false);
  const [h, setH] = useState(0);
  const [a, setA] = useState(0);

  useEffect(() => {
    let i: NodeJS.Timeout;
    if (run && time > 0) i = setInterval(() => setTime(p => p - 1), 1000);
    return () => clearInterval(i);
  }, [run, time]);

  const fmt = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center pt-10">
      <h1 className="text-2xl font-black mb-6 text-yellow-400 uppercase tracking-[0.2em]">PAPAN SKOR FUTSAL</h1>
      
      <div className="bg-black border-4 border-gray-800 p-8 rounded-3xl w-full max-w-md text-center mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <div className="text-8xl font-mono font-black text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.4)] tracking-tighter tabular-nums">
          {fmt(time)}
        </div>
        <button 
          onClick={() => setRun(!run)} 
          className={`mt-8 px-10 py-4 rounded-2xl font-black text-xl w-full transition-all active:scale-95 uppercase tracking-widest shadow-lg ${
            run ? 'bg-orange-600 hover:bg-orange-500' : 'bg-primary hover:bg-primary/90'
          }`}
        >
          {run ? 'JEDA' : 'MULAI'}
        </button>
      </div>

      <div className="flex gap-6 w-full max-w-md mb-8">
        <div className="bg-gray-800/50 p-6 rounded-3xl flex-1 text-center border-2 border-gray-700 shadow-xl group">
          <h2 className="text-blue-400 font-black text-sm uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">Kandang</h2>
          <div className="text-7xl font-black my-4 tabular-nums">{h}</div>
          <button onClick={() => setH(h + 1)} className="bg-green-600 hover:bg-green-500 w-full py-4 rounded-2xl font-black text-3xl shadow-lg active:translate-y-1 transition-all">+</button>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-3xl flex-1 text-center border-2 border-gray-700 shadow-xl group">
          <h2 className="text-red-400 font-black text-sm uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">Tandang</h2>
          <div className="text-7xl font-black my-4 tabular-nums">{a}</div>
          <button onClick={() => setA(a + 1)} className="bg-green-600 hover:bg-green-500 w-full py-4 rounded-2xl font-black text-3xl shadow-lg active:translate-y-1 transition-all">+</button>
        </div>
      </div>

      <button 
        onClick={() => { setTime(1200); setH(0); setA(0); setRun(false); }}
        className="text-xs font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors mb-10"
      >
        Reset Papan Skor
      </button>

      {/* Ad Integration */}
      <SmartAd />
    </div>
  );
}
