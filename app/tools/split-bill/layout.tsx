
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Split Bill Calculator - Hitung Patungan Tim",
  description: "Calculate shared costs quickly. Copy the bill summary to WhatsApp for sports or team lunches.",
};

export default function SplitBillLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
