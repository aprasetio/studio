"use client";
import React from 'react';

export default function LineupPage() {
  return (
    <div className="min-h-screen bg-green-800 p-4 text-center">
      <h1 className="text-3xl font-bold text-white mb-6 uppercase drop-shadow-md">Lineup Builder</h1>
      
      <div className="mx-auto aspect-[3/4] max-w-sm bg-green-600 border-4 border-white relative shadow-2xl rounded-lg overflow-hidden">
        {/* Pitch Lines */}
        <div className="absolute top-0 left-[25%] right-[25%] h-[15%] border-b-4 border-x-4 border-white/80"></div>
        <div className="absolute bottom-0 left-[25%] right-[25%] h-[15%] border-t-4 border-x-4 border-white/80"></div>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/50 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        {/* Players (Demo 4-4-2) */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-lg">9</div>
        <div className="absolute top-[10%] left-[30%] bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-lg">11</div>
        <div className="absolute top-[10%] right-[30%] bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-lg">7</div>
        
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-lg">1</div>
      </div>

      <div className="mt-8 text-white/70 text-sm">
        *Full drag-and-drop features coming soon.
      </div>
    </div>
  );
}