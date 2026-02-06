
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tennis Double Match Generator - Balanced Round Robin",
  description: "Generate balanced tennis double matches based on skill and play time. Perfect for social clubs and tournaments.",
};

export default function TennisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
