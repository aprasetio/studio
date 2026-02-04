
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Image to PDF Converter - Convert JPG/PNG to PDF",
  description: "Create PDF documents from your images instantly. 100% client-side conversion for maximum privacy. No login required.",
};

export default function ImageToPDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
