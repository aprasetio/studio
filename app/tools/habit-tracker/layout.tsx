import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Habit Tracker – Build Streaks & Earn Rewards | VersoKit',
  description:
    'Free local-first habit tracker with XP, streaks, coins, and badges. No account needed. Track daily habits, view stats, and stay motivated.',
  keywords: ['habit tracker', 'streak tracker', 'daily habits', 'habit builder', 'gamification', 'offline', 'privacy'],
  openGraph: {
    title: 'Habit Tracker | VersoKit',
    description: 'Track daily habits with streaks, XP, coins, and achievements. Fully offline, no data uploaded.',
    type: 'website',
  },
};

export default function HabitTrackerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
