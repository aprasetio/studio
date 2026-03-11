import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PDF Watermark Generator - Add Text to PDF Privately",
  description: "Protect your PDF documents with custom text watermarks. Supports tiled patterns and diagonal placement. 100% client-side and secure.",
};

export default function PDFWatermarkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
