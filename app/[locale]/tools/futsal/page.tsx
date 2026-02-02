"use client";
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function FutsalPage() {
  // Fallback if translation is missing to prevent crash
  let t;
  try { t = useTranslations('futsal'); } catch { t = (key) => key; }

  const [time, setTime] = useState(1200); // 20 mins
  const [run, setRun] = useState(false);
  const [scoreH, setScoreH] = useState(0);
  const [scoreA, setScoreA] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (run && time > 0) interval = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [run, time]);

  const fmt = (s: number) => new Date(s * 1000).toISOString().substr(14, 5);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 text-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">FUTSAL SCOREBOARD</h1>
      
      <div className="bg-black border-4 border-gray-700 p-8 rounded-xl mb-8 w-full max-w-lg">
        <div className="text-8xl font-mono font-black text-red-500 tracking-widest">{fmt(time)}</div>
        <button onClick={() => setRun(!run)} className="mt-4 px-8 py-2 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition">
          {run ? 'PAUSE' : 'START MATCH'}
        </button>
      </div>

      <div className="flex justify-between w-full max-w-lg gap-4">
        <div className="bg-gray-800 p-6 rounded-xl flex-1 border border-gray-600">
          <h2 className="text-xl font-bold text-blue-300 mb-2">HOME</h2>
          <div className="text-7xl font-bold mb-4">{scoreH}</div>
          <button onClick={() => setScoreH(scoreH + 1)} className="w-full py-3 bg-green-600 rounded-lg font-bold text-xl">+</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl flex-1 border border-gray-600">
          <h2 className="text-xl font-bold text-red-300 mb-2">AWAY</h2>
          <div className="text-7xl font-bold mb-4">{scoreA}</div>
          <button onClick={() => setScoreA(scoreA + 1)} className="w-full py-3 bg-green-600 rounded-lg font-bold text-xl">+</button>
        </div>
      </div>
    </div>
  );
}