'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Types
export type TransactionType = 'income' | 'expense';
export type CategoryType = 'needs' | 'wants' | 'savings';

export interface Transaction {
  id: string;
  categoryId: string;
  amount: number;
  date: string;
  payee: string;
  note: string;
  type: TransactionType;
}

export interface Category {
  id: string;
  name: string;
  type: CategoryType;
  assigned: number;
  activity: number;
}

interface BudgetState {
  income: number; // Total Income (Base + Income Transactions)
  toBeBudgeted: number; // Money waiting for a job (Income - Total Assigned)
  categories: Category[];
  transactions: Transaction[];
  
  // Actions
  setIncome: (amount: number) => void;
  addCategory: (name: string, type: CategoryType) => void;
  deleteCategory: (id: string) => void;
  updateCategoryAssignment: (id: string, amount: number) => void;
  addTransaction: (tx: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
  moveMoney: (fromId: string, toId: string, amount: number) => void;
  resetMonth: () => void;
  restoreData: (data: Partial<BudgetState>) => void;
  loadTemplate: (income: number, templateCats: Array<{ name: string; type: CategoryType; pct: number }>) => void;
}

export const useBudgetStore = create<BudgetState>()(
  persist(
    (set, get) => ({
      income: 0,
      toBeBudgeted: 0,
      categories: [
        { id: '1', name: 'Makan & Minum', type: 'needs', assigned: 0, activity: 0 },
        { id: '2', name: 'Transportasi', type: 'needs', assigned: 0, activity: 0 },
        { id: '3', name: 'Belanja Bulanan', type: 'needs', assigned: 0, activity: 0 },
      ],
      transactions: [],

      setIncome: (amount) => {
        const { categories } = get();
        const totalAssigned = categories.reduce((acc, c) => acc + c.assigned, 0);
        set({ income: amount, toBeBudgeted: amount - totalAssigned });
      },

      addCategory: (name, type) => set((state) => ({
        categories: [...state.categories, { 
          id: typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2), 
          name, 
          type, 
          assigned: 0, 
          activity: 0 
        }]
      })),

      deleteCategory: (id) => set((state) => {
        const categoryToDelete = state.categories.find(c => c.id === id);
        const newCategories = state.categories.filter(c => c.id !== id);
        const totalAssigned = newCategories.reduce((acc, c) => acc + c.assigned, 0);
        return {
          categories: newCategories,
          toBeBudgeted: state.income - totalAssigned
        };
      }),

      updateCategoryAssignment: (id, amount) => {
        set((state) => {
          const newCategories = state.categories.map((c) => 
            c.id === id ? { ...c, assigned: amount } : c
          );
          const totalAssigned = newCategories.reduce((acc, c) => acc + c.assigned, 0);
          return {
            categories: newCategories,
            toBeBudgeted: state.income - totalAssigned
          };
        });
      },

      moveMoney: (fromId, toId, amount) => set((state) => {
        const newCategories = state.categories.map(c => {
          if (c.id === fromId) return { ...c, assigned: c.assigned - amount };
          if (c.id === toId) return { ...c, assigned: c.assigned + amount };
          return c;
        });
        const totalAssigned = newCategories.reduce((acc, c) => acc + c.assigned, 0);
        return {
          categories: newCategories,
          toBeBudgeted: state.income - totalAssigned
        };
      }),

      addTransaction: (tx) => {
        set((state) => {
          const newTxId = typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2);
          const newTx = { ...tx, id: newTxId };
          
          let newCategories = [...state.categories];
          let newIncome = state.income;

          if (tx.type === 'expense') {
            newCategories = state.categories.map((c) => 
              c.id === tx.categoryId ? { ...c, activity: c.activity - tx.amount } : c
            );
          } else {
            newIncome += tx.amount;
          }

          const totalAssigned = newCategories.reduce((acc, c) => acc + c.assigned, 0);
          
          return {
            transactions: [newTx, ...state.transactions],
            categories: newCategories,
            income: newIncome,
            toBeBudgeted: newIncome - totalAssigned
          };
        });
      },

      deleteTransaction: (id) => {
        set((state) => {
          const tx = state.transactions.find(t => t.id === id);
          if (!tx) return state;

          let newCategories = [...state.categories];
          let newIncome = state.income;

          if (tx.type === 'expense') {
            newCategories = state.categories.map(c => 
              c.id === tx.categoryId ? { ...c, activity: c.activity + tx.amount } : c
            );
          } else {
            newIncome -= tx.amount;
          }

          const totalAssigned = newCategories.reduce((acc, c) => acc + c.assigned, 0);

          return {
            transactions: state.transactions.filter(t => t.id !== id),
            categories: newCategories,
            income: newIncome,
            toBeBudgeted: newIncome - totalAssigned
          };
        });
      },

      resetMonth: () => set({ 
        income: 0, 
        toBeBudgeted: 0, 
        categories: [
          { id: '1', name: 'Makan & Minum', type: 'needs', assigned: 0, activity: 0 },
          { id: '2', name: 'Transportasi', type: 'needs', assigned: 0, activity: 0 },
          { id: '3', name: 'Belanja Bulanan', type: 'needs', assigned: 0, activity: 0 },
        ], 
        transactions: [] 
      }),

      loadTemplate: (income, templateCats) => {
        const cats = templateCats.map(cat => ({
          id: typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2),
          name: cat.name,
          type: cat.type,
          assigned: Math.round(income * cat.pct),
          activity: 0,
        }));
        const totalAssigned = cats.reduce((acc, c) => acc + c.assigned, 0);
        set({ income, categories: cats, transactions: [], toBeBudgeted: income - totalAssigned });
      },

      restoreData: (data) => {
        const income = data.income ?? 0;
        const categories = data.categories ?? [];
        const transactions = data.transactions ?? [];
        const totalAssigned = categories.reduce((acc, c) => acc + (c.assigned || 0), 0);
        set({
          income,
          categories,
          transactions,
          toBeBudgeted: income - totalAssigned
        });
      }
    }),
    { 
      name: 'versokit-budget-storage-v3',
      storage: createJSONStorage(() => localStorage)
    }
  )
);