'use client';

import { useRef, useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { FootballPitch, type Player } from '@/components/football-pitch';
import { Download, Loader2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formations: Record<string, Player[]> = {
  '4-4-2': [
    { id: 1, position: { top: '88%', left: '50%' }, number: 1, role: 'GK' },
    { id: 2, position: { top: '70%', left: '15%' }, number: 2, role: 'LB' },
    { id: 3, position: { top: '72%', left: '35%' }, number: 5, role: 'LCB' },
    { id: 4, position: { top: '72%', left: '65%' }, number: 6, role: 'RCB' },
    { id: 5, position: { top: '70%', left: '85%' }, number: 3, role: 'RB' },
    { id: 6, position: { top: '48%', left: '18%' }, number: 11, role: 'LM' },
    { id: 7, position: { top: '50%', left: '40%' }, number: 4, role: 'LCM' },
    { id: 8, position: { top: '50%', left: '60%' }, number: 8, role: 'RCM' },
    { id: 9, position: { top: '48%', left: '82%' }, number: 7, role: 'RM' },
    { id: 10, position: { top: '25%', left: '40%' }, number: 10, role: 'LS' },
    { id: 11, position: { top: '25%', left: '60%' }, number: 9, role: 'RS' },
  ],
  '4-3-3': [
    { id: 1, position: { top: '88%', left: '50%' }, number: 1, role: 'GK' },
    { id: 2, position: { top: '70%', left: '15%' }, number: 2, role: 'LB' },
    { id: 3, position: { top: '72%', left: '35%' }, number: 5, role: 'LCB' },
    { id: 4, position: { top: '72%', left: '65%' }, number: 6, role: 'RCB' },
    { id: 5, position: { top: '70%', left: '85%' }, number: 3, role: 'RB' },
    { id: 6, position: { top: '50%', left: '50%' }, number: 4, role: 'CM' },
    { id: 7, position: { top: '45%', left: '25%' }, number: 8, role: 'LCM' },
    { id: 8, position: { top: '45%', left: '75%' }, number: 10, role: 'RCM' },
    { id: 9, position: { top: '20%', left: '18%' }, number: 11, role: 'LW' },
    { id: 10, position: { top: '18%', left: '50%' }, number: 9, role: 'ST' },
    { id: 11, position: { top: '20%', left: '82%' }, number: 7, role: 'RW' },
  ],
   '3-5-2': [
    { id: 1, position: { top: '88%', left: '50%' }, number: 1, role: 'GK' },
    { id: 2, position: { top: '72%', left: '25%' }, number: 4, role: 'LCB' },
    { id: 3, position: { top: '75%', left: '50%' }, number: 5, role: 'CB' },
    { id: 4, position: { top: '72%', left: '75%' }, number: 6, role: 'RCB' },
    { id: 5, position: { top: '48%', left: '10%' }, number: 3, role: 'LWB' },
    { id: 6, position: { top: '48%', left: '90%' }, number: 2, role: 'RWB' },
    { id: 7, position: { top: '55%', left: '50%' }, number: 8, role: 'CDM' },
    { id: 8, position: { top: '35%', left: '35%' }, number: 10, role: 'LCM' },
    { id: 9, position: { top: '35%', left: '65%' }, number: 7, role: 'RCM' },
    { id: 10, position: { top: '20%', left: '40%' }, number: 9, role: 'LS' },
    { id: 11, position: { top: '20%', left: '60%' }, number: 11, role: 'RS' },
  ],
};


export function LineupBuilder() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [formation, setFormation] = useState('4-4-2');
  const [players, setPlayers] = useState<Player[]>(formations[formation]);
  const [isExporting, setIsExporting] = useState(false);

  const handleFormationChange = (newFormation: string) => {
    setFormation(newFormation);
    setPlayers(formations[newFormation]);
  };

  const handlePlayerMove = useCallback((playerId: number, newPosition: { top: string; left: string }) => {
    setPlayers(prevPlayers => 
      prevPlayers.map(p => 
        p.id === playerId ? { ...p, position: newPosition } : p
      )
    );
  }, []);

  const downloadImage = async () => {
    if (!canvasRef.current) return;
    const pitchElement = canvasRef.current.querySelector<HTMLElement>('[data-pitch="true"]');
    if (!pitchElement) return;

    setIsExporting(true);
    try {
      const canvas = await html2canvas(pitchElement, {
        backgroundColor: null,
        useCORS: true,
        onclone: (document) => {
          const labels = document.querySelectorAll('[data-player-role]');
          labels.forEach(label => ((label as HTMLElement).style.visibility = 'hidden'));
        },
      });
      const link = document.createElement('a');
      link.download = `lineup-${formation}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch {
      // silent — nothing to show without a toast dependency here
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center gap-6">
       <div className="w-full max-w-lg flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-card rounded-lg shadow-md">
        <div className='flex items-center gap-2'>
            <label htmlFor="formation-select" className="text-sm font-medium">Formasi:</label>
            <Select value={formation} onValueChange={handleFormationChange}>
                <SelectTrigger id="formation-select" className="w-[180px]">
                    <SelectValue placeholder="Pilih formasi" />
                </SelectTrigger>
                <SelectContent>
                    {Object.keys(formations).map(key => (
                        <SelectItem key={key} value={key}>{key}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <Button onClick={downloadImage} disabled={isExporting} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          {isExporting
            ? <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            : <Download className="mr-2 h-4 w-4" />}
          {isExporting ? 'Mengunduh...' : 'Unduh sebagai Gambar'}
        </Button>
      </div>

      <div ref={canvasRef} className="w-full max-w-lg lg:max-w-xl">
        <FootballPitch players={players} onPlayerMove={handlePlayerMove} />
      </div>
    </div>
  );
}
