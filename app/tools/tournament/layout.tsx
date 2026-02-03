
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Round Robin Tournament Generator - Padel & Futsal Scheduler",
  description: "Generate tournament fixtures instantly. Perfect for Padel, Pickleball, and Futsal social leagues. No login needed.",
};

export default function TournamentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
