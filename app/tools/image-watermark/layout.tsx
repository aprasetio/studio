import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Image Watermark Generator - Bulk Tiled & Pattern Watermarks",
  description: "Protect your photos with custom text or logo watermarks. Support for single placement or repeated tiled patterns. 100% private and offline.",
};

export default function WatermarkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
