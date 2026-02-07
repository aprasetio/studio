import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Americano Generator - Padel & Pickleball Fair Rotation",
  description: "Organize Padel and Pickleball Americano tournaments easily. Features fair partner rotation, Anchor Shift algorithm, and real-time leaderboards.",
};

export default function AmericanoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
