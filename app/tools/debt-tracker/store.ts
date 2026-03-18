'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type PayoffStrategy = 'snowball' | 'avalanche';

export interface Debt {
  id: string;
  name: string;
  balance: number;
  interestRate: number;
  minPayment: number;
}

interface DebtTrackerState {
  debts: Debt[];
  extraBudget: number;
  strategy: PayoffStrategy;
  
  // Actions
  addDebt: (debt: Omit<Debt, 'id'>) => void;
  removeDebt: (id: string) => void;
  updateDebt: (id: string, updates: Partial<Debt>) => void;
  setExtraBudget: (amount: number) => void;
  setStrategy: (strategy: PayoffStrategy) => void;
  resetAll: () => void;
  restoreData: (data: any) => void;
}

export const useDebtTrackerStore = create<DebtTrackerState>()(
  persist(
    (set) => ({
      debts: [],
      extraBudget: 0,
      strategy: 'snowball',

      addDebt: (debt) => set((state) => ({
        debts: [...state.debts, { ...debt, id: typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2) }]
      })),

      removeDebt: (id) => set((state) => ({
        debts: state.debts.filter(d => d.id !== id)
      })),

      updateDebt: (id, updates) => set((state) => ({
        debts: state.debts.map(d => d.id === id ? { ...d, ...updates } : d)
      })),

      setExtraBudget: (amount) => set({ extraBudget: amount }),
      
      setStrategy: (strategy) => set({ strategy }),

      resetAll: () => set({ debts: [], extraBudget: 0, strategy: 'snowball' }),

      restoreData: (data) => set({ 
        debts: data.debts || [], 
        extraBudget: data.extraBudget || 0, 
        strategy: data.strategy || 'snowball' 
      })
    }),
    {
      name: 'versokit-debt-tracker-v2', // Incremented version
      storage: createJSONStorage(() => localStorage),
    }
  )
);
