"use client";

import React, { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Minus, Trash2, Package, PlusCircle } from 'lucide-react';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
}

export default function InventoryPage() {
  const [items, setItems] = useLocalStorage<InventoryItem[]>('versokit-inventory', []);
  const [newItemName, setNewItemName] = useState('');

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: InventoryItem = {
      id: Date.now(),
      name: newItemName.trim(),
      quantity: 0,
    };

    setItems([...items, newItem]);
    setNewItemName('');
  };

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ));
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-12 lg:p-16 max-w-5xl mx-auto w-full gap-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black tracking-tighter text-foreground uppercase">
          Manajemen Inventaris
        </h1>
        <p className="text-muted-foreground font-medium">Pantau peralatan olahraga Anda dengan sistem stok digital</p>
      </div>

      <Card className="w-full shadow-xl rounded-3xl overflow-hidden border-2">
        <CardHeader className="bg-muted/30 p-8 border-b">
          <CardTitle className="text-xl font-black flex items-center gap-3 uppercase tracking-wider">
            <PlusCircle className="h-6 w-6 text-primary" />
            Tambah Peralatan Baru
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={addItem} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Nama Barang (Contoh: Bola Mikasa, Rompi Biru...)"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="h-14 text-lg font-medium px-6 rounded-xl focus-visible:ring-primary"
              />
            </div>
            <Button type="submit" className="h-14 px-10 bg-primary font-black uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Tambah ke Daftar
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="w-full grid gap-6">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 bg-muted/20 rounded-[2.5rem] border-4 border-dashed border-muted">
            <Package className="h-16 w-16 text-muted-foreground mb-6 opacity-30" />
            <p className="text-xl font-black text-muted-foreground uppercase tracking-widest">Belum ada barang</p>
            <p className="text-sm text-muted-foreground/60 mt-2 font-medium">Gunakan form di atas untuk memulai stok Anda.</p>
          </div>
        ) : (
          items.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex items-center gap-6 p-8 w-full sm:w-auto">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <Package className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">{item.name}</h3>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Status: Tersedia</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 bg-muted/30 w-full sm:w-auto p-8 justify-center">
                    <div className="flex items-center gap-5">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-12 w-12 rounded-full border-2 border-destructive/20 hover:bg-destructive hover:text-white transition-all shadow-sm"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-6 w-6" />
                      </Button>
                      <div className="w-16 text-center">
                        <span className="text-5xl font-black tabular-nums text-foreground">{item.quantity}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-12 w-12 rounded-full border-2 border-green-500/20 hover:bg-green-600 hover:text-white transition-all shadow-sm"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-6 w-6" />
                      </Button>
                    </div>
                    
                    <div className="h-12 w-px bg-muted-foreground/20 hidden sm:block" />

                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-12 w-12 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl transition-colors"
                      onClick={() => deleteItem(item.id)}
                    >
                      <Trash2 className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
