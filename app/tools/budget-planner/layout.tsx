
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zero-Based Budget Planner - Envelope Budgeting Online",
  description: "Plan your finances with the zero-based budgeting method. Allocate every cent to categories and track your spending offline.",
};

export default function BudgetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
