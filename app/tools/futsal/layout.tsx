
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Futsal Scoreboard Online - Timer & Foul Counter (Free)",
  description: "Digital Futsal Scoreboard with timer, foul counter, and period tracker. Works offline on mobile and TV screens.",
};

export default function FutsalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
