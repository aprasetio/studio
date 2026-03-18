'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type PayoffStrategy = 'snowball' | 'avalanche';
export type DebtCategory = 'Credit Card' | 'Paylater' | 'Mortgage' | 'Vehicle' | 'Personal Loan' | 'Friends/Family' | 'Other';

export interface Debt {
  id: string;
  name: string;
  balance: number;
  interestRate: number;
  minPayment: number;
  category: DebtCategory;
  dueDate: number; // 1-31
}

interface DebtTrackerState {
  // Cash Flow
  income: number;
  sideHustle: number;
  needs: number;
  subscriptions: number;
  
  // Debts
  debts: Debt[];
  strategy: PayoffStrategy;
  
  // Actions
  setCashFlow: (data: Partial<Pick<DebtTrackerState, 'income' | 'sideHustle' | 'needs' | 'subscriptions'>>) => void;
  addDebt: (debt: Omit<Debt, 'id'>) => void;
  removeDebt: (id: string) => void;
  updateDebt: (id: string, updates: Partial<Debt>) => void;
  setStrategy: (strategy: PayoffStrategy) => void;
  resetAll: () => void;
  restoreData: (data: any) => void;
}

export const useDebtTrackerStore = create<DebtTrackerState>()(
  persist(
    (set) => ({
      income: 0,
      sideHustle: 0,
      needs: 0,
      subscriptions: 0,
      debts: [],
      strategy: 'snowball',

      setCashFlow: (data) => set((state) => ({ ...state, ...data })),

      addDebt: (debt) => set((state) => ({
        debts: [...state.debts, { ...debt, id: typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2) }]
      })),

      removeDebt: (id) => set((state) => ({
        debts: state.debts.filter(d => d.id !== id)
      })),

      updateDebt: (id, updates) => set((state) => ({
        debts: state.debts.map(d => d.id === id ? { ...d, ...updates } : d)
      })),
      
      setStrategy: (strategy) => set({ strategy }),

      resetAll: () => set({ 
        debts: [], 
        income: 0, 
        sideHustle: 0, 
        needs: 0, 
        subscriptions: 0, 
        strategy: 'snowball' 
      }),

      restoreData: (data) => set({ 
        debts: data.debts || [], 
        income: data.income || 0,
        sideHustle: data.sideHustle || 0,
        needs: data.needs || 0,
        subscriptions: data.subscriptions || 0,
        strategy: data.strategy || 'snowball' 
      })
    }),
    {
      name: 'versokit-debt-premium-v1',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
