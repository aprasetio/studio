
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Universal Scoreboard - Volleyball, Badminton & Ping Pong",
  description: "Simple online scoreboard for Volleyball, Badminton, and Table Tennis. Track sets and points easily.",
};

export default function ScoreboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
