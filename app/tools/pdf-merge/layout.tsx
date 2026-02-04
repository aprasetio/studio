
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free PDF Merger - Combine PDF Files Offline",
  description: "Merge multiple PDF documents into one single file easily. No server upload ensures 100% privacy and security.",
};

export default function PDFMergeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
