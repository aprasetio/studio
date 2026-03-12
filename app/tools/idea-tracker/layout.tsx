import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Secure Local Idea Tracker - Private Brainstorming Tool",
  description: "Capture and manage your ideas locally. Features voice dictation, priority tracking, and 100% privacy with zero server uploads.",
};

export default function IdeaTrackerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
