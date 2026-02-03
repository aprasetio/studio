"use client";
import React, { useState, useEffect } from 'react';

export default function FutsalPage() {
  const [time, setTime] = useState(1200); // 20 mins
  const [run, setRun] = useState(false);
  const [scoreH, setScoreH] = useState(0);
  const [scoreA, setScoreA] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (run && time > 0) {
      interval = setInterval(() => setTime(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [run, time]);

  const fmt = (s: number) => {
    const mins = Math.floor(s / 60).toString().padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-12 min-h-[calc(100vh-12rem)]">
      <div className="w-full max-w-2xl bg-slate-950 text-white p-10 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col items-center border border-white/10">
        <h1 className="text-3xl font-black mb-10 text-primary uppercase tracking-[0.3em]">
          Papan Skor Futsal
        </h1>
        
        <div className="bg-black border-4 border-slate-800 p-12 rounded-2xl mb-12 w-full text-center shadow-inner">
          <div className="text-9xl font-mono font-black text-red-600 tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            {fmt(time)}
          </div>
          <button 
            onClick={() => setRun(!run)} 
            className={`mt-10 px-12 py-4 rounded-full font-black text-lg transition-all active:scale-95 uppercase tracking-widest ${
              run ? 'bg-orange-600 hover:bg-orange-500' : 'bg-primary hover:bg-primary/90'
            }`}
          >
            {run ? 'Jeda' : 'Mulai Pertandingan'}
          </button>
        </div>

        <div className="flex justify-between w-full gap-8">
          <div className="bg-slate-900 p-10 rounded-2xl flex-1 border border-white/5 text-center shadow-lg group">
            <h2 className="text-sm font-black text-blue-400 mb-6 uppercase tracking-widest opacity-80 group-hover:opacity-100">Kandang</h2>
            <div className="text-8xl font-black mb-8 tabular-nums text-white">{scoreH}</div>
            <button 
              onClick={() => setScoreH(scoreH + 1)} 
              className="w-full py-5 bg-green-600 rounded-xl font-black text-3xl hover:bg-green-500 transition-all shadow-lg active:translate-y-1"
            >+</button>
          </div>
          <div className="bg-slate-900 p-10 rounded-2xl flex-1 border border-white/5 text-center shadow-lg group">
            <h2 className="text-sm font-black text-red-400 mb-6 uppercase tracking-widest opacity-80 group-hover:opacity-100">Tandang</h2>
            <div className="text-8xl font-black mb-8 tabular-nums text-white">{scoreA}</div>
            <button 
              onClick={() => setScoreA(scoreA + 1)} 
              className="w-full py-5 bg-green-600 rounded-xl font-black text-3xl hover:bg-green-500 transition-all shadow-lg active:translate-y-1"
            >+</button>
          </div>
        </div>
        
        <button 
          onClick={() => { setTime(1200); setScoreH(0); setScoreA(0); setRun(false); }}
          className="mt-12 text-xs font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
        >
          Reset Semua
        </button>
      </div>
    </div>
  );
}
