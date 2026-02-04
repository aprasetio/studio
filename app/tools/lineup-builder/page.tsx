'use client';

import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Download, 
  Plus, 
  Trash2, 
  UserPlus, 
  Settings2, 
  Palette,
  Maximize2
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface Player {
  id: string;
  name: string;
  number: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  color: string;
}

const COLORS = [
  { name: 'Red', value: '#ef4444' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Black', value: '#171717' },
  { name: 'White', value: '#ffffff' },
  { name: 'Orange', value: '#f97316' },
];

export default function LineupBuilderPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const [players, setPlayers] = useLocalStorage<Player[]>('versokit-lineup-players', [
    { id: '1', name: 'Player 1', number: '1', x: 50, y: 90, color: '#eab308' },
    { id: '2', name: 'Player 2', number: '4', x: 50, y: 70, color: '#3b82f6' },
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const pitchRef = useRef<HTMLDivElement>(null);
  const dragInfo = useRef<{ playerId: string; startX: number; startY: number } | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const selectedPlayer = players.find(p => p.id === selectedId);

  const addPlayer = () => {
    const newPlayer: Player = {
      id: Date.now().toString(),
      name: `Player ${players.length + 1}`,
      number: (players.length + 1).toString(),
      x: 50,
      y: 50,
      color: '#3b82f6',
    };
    setPlayers([...players, newPlayer]);
    setSelectedId(newPlayer.id);
  };

  const removePlayer = (id: string) => {
    setPlayers(players.filter(p => p.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const updatePlayer = (id: string, updates: Partial<Player>) => {
    setPlayers(players.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const handlePointerDown = (e: React.PointerEvent, playerId: string) => {
    e.stopPropagation();
    setSelectedId(playerId);
    setIsDragging(true);
    
    if (pitchRef.current) {
      const rect = pitchRef.current.getBoundingClientRect();
      dragInfo.current = {
        playerId,
        startX: e.clientX - rect.left,
        startY: e.clientY - rect.top,
      };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !dragInfo.current || !pitchRef.current) return;

    const rect = pitchRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert to percentage
    const xPct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    const yPct = Math.max(5, Math.min(95, (y / rect.height) * 100));

    updatePlayer(dragInfo.current.playerId, { x: xPct, y: yPct });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    dragInfo.current = null;
  };

  const downloadLineup = async () => {
    if (!pitchRef.current) return;
    
    try {
      const canvas = await html2canvas(pitchRef.current, {
        backgroundColor: '#15803d', // Match pitch color
        scale: 2, // High quality
      });
      
      const link = document.createElement('a');
      link.download = `versokit-lineup-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      toast({ title: "Berhasil!", description: "Gambar formasi telah diunduh." });
    } catch (err) {
      toast({ title: "Gagal!", description: "Tidak dapat mengunduh gambar.", variant: "destructive" });
    }
  };

  if (!hasMounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-foreground">Lineup Builder Pro</h1>
        <p className="text-muted-foreground font-medium">Geser pemain dan atur strategi kemenangan Anda</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* Pitch Area */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div 
            ref={pitchRef}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative aspect-[3/4] w-full bg-green-700 border-[6px] border-white/80 rounded-2xl overflow-hidden shadow-2xl select-none touch-none"
          >
            {/* Pitch Markings */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"></div>
            <div className="absolute top-0 left-[15%] right-[15%] h-[15%] border-b-2 border-x-2 border-white/40"></div>
            <div className="absolute bottom-0 left-[15%] right-[15%] h-[15%] border-t-2 border-x-2 border-white/40"></div>
            <div className="absolute top-1/2 w-full h-0.5 bg-white/20 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

            {/* Players */}
            {players.map((player) => (
              <div
                key={player.id}
                onPointerDown={(e) => handlePointerDown(e, player.id)}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-grab active:cursor-grabbing group transition-transform hover:scale-110",
                  selectedId === player.id && "z-10"
                )}
                style={{ left: `${player.x}%`, top: `${player.y}%` }}
              >
                <div 
                  className={cn(
                    "w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-black shadow-lg text-lg",
                    selectedId === player.id ? "ring-4 ring-white ring-offset-2 ring-offset-green-700" : ""
                  )}
                  style={{ backgroundColor: player.color, color: player.color === '#ffffff' ? '#000' : '#fff' }}
                >
                  {player.number}
                </div>
                <div className="mt-1 bg-black/60 px-2 py-0.5 rounded text-[10px] font-black text-white uppercase tracking-tighter shadow-md backdrop-blur-sm">
                  {player.name}
                </div>
              </div>
            ))}

            {/* Logo/Watermark for Export */}
            <div className="absolute bottom-4 right-4 opacity-20 flex items-center gap-1 pointer-events-none">
               <span className="text-white font-black text-xs uppercase tracking-widest">VersoKit</span>
            </div>
          </div>

          <Button onClick={downloadLineup} className="w-full h-14 bg-accent hover:bg-accent/90 text-xl font-black uppercase tracking-widest shadow-xl">
            <Download className="mr-2 h-6 w-6" />
            Download Formasi
          </Button>
        </div>

        {/* Controls Area */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="shadow-lg border-2">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="text-lg font-black flex items-center gap-2 uppercase">
                <Settings2 className="h-5 w-5 text-primary" />
                Pengaturan Tim
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex gap-2">
                <Button onClick={addPlayer} className="flex-1 font-bold uppercase tracking-wider">
                  <UserPlus className="mr-2 h-4 w-4" /> Tambah Pemain
                </Button>
              </div>

              {selectedPlayer ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="flex items-center justify-between border-b pb-2">
                     <h3 className="font-black uppercase tracking-widest text-sm text-primary">Edit Pemain</h3>
                     <Button variant="ghost" size="sm" onClick={() => removePlayer(selectedPlayer.id)} className="text-destructive font-bold h-8 px-2">
                       <Trash2 className="h-4 w-4 mr-1" /> Hapus
                     </Button>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3 space-y-2">
                      <Label className="text-xs font-bold uppercase opacity-60">Nama Punggung</Label>
                      <Input 
                        value={selectedPlayer.name} 
                        onChange={(e) => updatePlayer(selectedPlayer.id, { name: e.target.value.toUpperCase() })} 
                        className="font-bold uppercase h-12"
                      />
                    </div>
                    <div className="col-span-1 space-y-2">
                      <Label className="text-xs font-bold uppercase opacity-60">No</Label>
                      <Input 
                        type="number"
                        value={selectedPlayer.number} 
                        onChange={(e) => updatePlayer(selectedPlayer.id, { number: e.target.value })} 
                        className="font-bold text-center h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase opacity-60 flex items-center gap-2">
                      <Palette className="h-3 w-3" /> Warna Jersey
                    </Label>
                    <div className="grid grid-cols-6 gap-2">
                      {COLORS.map(color => (
                        <button
                          key={color.value}
                          onClick={() => updatePlayer(selectedPlayer.id, { color: color.value })}
                          className={cn(
                            "h-10 rounded-xl border-2 transition-transform active:scale-90",
                            selectedPlayer.color === color.value ? "border-primary scale-110 shadow-md" : "border-transparent"
                          )}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center bg-muted/20 rounded-2xl border-2 border-dashed flex flex-col items-center gap-3 opacity-50">
                   <Maximize2 className="h-10 w-10 text-muted-foreground" />
                   <p className="text-xs font-bold uppercase tracking-widest">Klik pemain di lapangan untuk mengedit</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 bg-primary/5">
             <CardContent className="p-6">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-white rounded-xl shadow-sm border">
                      <Settings2 className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                      <h4 className="font-black uppercase text-xs tracking-widest">Info Tips</h4>
                      <p className="text-[10px] font-medium text-muted-foreground leading-relaxed">Pemain akan tersimpan otomatis di perangkat Anda. Gunakan tombol download untuk menyimpan sebagai gambar PNG.</p>
                   </div>
                </div>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
