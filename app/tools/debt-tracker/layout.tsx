import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Debt Payoff Calculator & Tracker - Snowball vs Avalanche",
  description: "Calculate your debt-free date using Snowball or Avalanche methods. Track credit cards, loans, and mortgages with 100% local privacy.",
};

export default function DebtTrackerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
