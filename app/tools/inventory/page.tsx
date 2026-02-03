"use client";

import React, { useState } from 'react';
import Header from '@/components/header';
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
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center p-4 md:p-8">
        <div className="w-full max-w-4xl space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl uppercase">
              Manajemen Inventaris
            </h1>
            <p className="text-muted-foreground">Pantau peralatan olahraga Anda dengan mudah.</p>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <PlusCircle className="h-5 w-5 text-primary" />
                Tambah Peralatan Baru
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={addItem} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="item-name" className="sr-only">Nama Barang</Label>
                  <Input
                    id="item-name"
                    placeholder="Contoh: Bola Futsal, Rompi, Cone..."
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Tambah ke Daftar
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 bg-muted/30 rounded-lg border-2 border-dashed">
                <Package className="h-12 w-12 text-muted-foreground mb-4 opacity-20" />
                <p className="text-muted-foreground font-medium">Belum ada barang di inventaris.</p>
                <p className="text-sm text-muted-foreground/60">Gunakan form di atas untuk memulai.</p>
              </div>
            ) : (
              items.map((item) => (
                <Card key={item.id} className="overflow-hidden border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Package className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground truncate">{item.name}</h3>
                      </div>

                      <div className="flex items-center gap-6 bg-muted/50 p-2 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-10 w-10 rounded-full border-destructive/30 hover:bg-destructive/10 text-destructive"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-5 w-5" />
                          </Button>
                          <div className="w-12 text-center">
                            <span className="text-3xl font-black tabular-nums">{item.quantity}</span>
                          </div>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-10 w-10 rounded-full border-green-500/30 hover:bg-green-500/10 text-green-600"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-5 w-5" />
                          </Button>
                        </div>
                        
                        <div className="h-8 w-px bg-border" />

                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                          onClick={() => deleteItem(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
