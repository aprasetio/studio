"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/components/header';

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
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="min-h-[500px] w-full max-w-2xl bg-gray-900 text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-8 text-yellow-400">PAPAN SKOR FUTSAL</h1>
          
          <div className="bg-black border-4 border-gray-700 p-10 rounded-xl mb-10 w-full text-center">
            <div className="text-8xl font-mono font-black text-red-500 tracking-widest tabular-nums">{fmt(time)}</div>
            <button 
              onClick={() => setRun(!run)} 
              className="mt-6 px-10 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-colors uppercase tracking-wider"
            >
              {run ? 'JEDA' : 'MULAI PERTANDINGAN'}
            </button>
          </div>

          <div className="flex justify-between w-full gap-6">
            <div className="bg-gray-800 p-8 rounded-xl flex-1 border border-gray-600 text-center">
              <h2 className="text-xl font-bold text-blue-300 mb-4 uppercase">Kandang</h2>
              <div className="text-7xl font-bold mb-6 tabular-nums">{scoreH}</div>
              <button 
                onClick={() => setScoreH(scoreH + 1)} 
                className="w-full py-4 bg-green-600 rounded-lg font-bold text-2xl hover:bg-green-500 transition-colors"
              >+</button>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl flex-1 border border-gray-600 text-center">
              <h2 className="text-xl font-bold text-red-300 mb-4 uppercase">Tandang</h2>
              <div className="text-7xl font-bold mb-6 tabular-nums">{scoreA}</div>
              <button 
                onClick={() => setScoreA(scoreA + 1)} 
                className="w-full py-4 bg-green-600 rounded-lg font-bold text-2xl hover:bg-green-500 transition-colors"
              >+</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
