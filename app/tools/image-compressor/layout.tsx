
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Image Compressor - Reduce File Size Offline",
  description: "Compress JPG/PNG images directly in your browser. No server upload ensures 100% privacy.",
};

export default function ImageCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
