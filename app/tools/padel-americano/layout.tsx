
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Padel Americano Generator - Fair Partner Rotation & Scoring",
  description: "Organize Padel Americano tournaments easily. Features fair partner rotation, smart scoring (32 points), and real-time leaderboards.",
};

export default function AmericanoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
