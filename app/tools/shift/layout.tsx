
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Weekly Shift Roster Scheduler for Retail & Security",
  description: "Manage employee shifts (Morning/Afternoon/Night) easily. Simple weekly roster planner.",
};

export default function ShiftLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
