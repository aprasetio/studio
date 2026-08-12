
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PDF Compressor - Kompres PDF Online Gratis, 100% Privat",
  description: "Kompres file PDF langsung di browser tanpa upload ke server. Pilih kualitas, lihat perbandingan ukuran, unduh hasilnya. Gratis dan tanpa batas.",
};

export default function PdfCompressorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
