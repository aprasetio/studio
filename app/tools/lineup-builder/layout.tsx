
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Football Lineup Builder - Create Formation & Download Image",
  description: "Drag and drop football lineup creator. Visualize 4-4-2, 4-3-3 tactics and download the image for social media.",
};

export default function LineupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
