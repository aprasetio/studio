
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tennis AI Pose Analyzer - Rule-Based Biomechanical Analysis",
  description: "Analyze your tennis swing with AI biomechanical scoring. Upload a video and get feedback on stance, body rotation, contact point, and follow-through. 100% private, no upload to server.",
};

export default function TennisAILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
