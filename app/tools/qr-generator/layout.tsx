import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "QR Code Generator - VersoKit",
  description: "Free QR code generator for URLs, WiFi credentials, and contacts. Customize colors and download as PNG or SVG. 100% offline.",
};

export default function QrGeneratorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
