"use client";
import React from 'react';
import Header from '@/components/header';

export default function LineupPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-foreground mb-6 uppercase tracking-tight">Penyusun Formasi</h1>
        
        <div className="mx-auto aspect-[3/4] w-full max-w-sm bg-green-600 border-4 border-white relative shadow-2xl rounded-lg overflow-hidden">
          {/* Lapangan */}
          <div className="absolute top-0 left-[20%] right-[20%] h-[15%] border-b-2 border-x-2 border-white/70"></div>
          <div className="absolute bottom-0 left-[20%] right-[20%] h-[15%] border-t-2 border-x-2 border-white/70"></div>
          <div className="absolute top-1/2 w-full h-0.5 bg-white/50 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white/50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Pemain Demo (4-4-2) */}
          <div className="absolute top-[15%] left-[35%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">9</div>
          <div className="absolute top-[15%] left-[65%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">10</div>
          <div className="absolute top-[40%] left-[20%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">11</div>
          <div className="absolute top-[42%] left-[40%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">8</div>
          <div className="absolute top-[42%] left-[60%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">4</div>
          <div className="absolute top-[40%] left-[80%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">7</div>
          <div className="absolute top-[70%] left-[15%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">3</div>
          <div className="absolute top-[72%] left-[38%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">5</div>
          <div className="absolute top-[72%] left-[62%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">6</div>
          <div className="absolute top-[70%] left-[85%] -translate-x-1/2 w-10 h-10 bg-red-600 rounded-full border-2 border-white text-white flex items-center justify-center font-bold shadow-lg">2</div>
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-10 h-10 bg-yellow-400 rounded-full border-2 border-white text-black flex items-center justify-center font-bold shadow-lg">1</div>
        </div>

        <div className="mt-8 text-muted-foreground text-sm italic bg-card p-4 rounded-lg border">
          Fitur drag-and-drop dan kustomisasi pemain segera hadir.
        </div>
      </main>
    </div>
  );
}
