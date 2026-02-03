
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Invoice Generator - Create PDF Receipt Online",
  description: "Create and print professional invoices or receipts instantly. Download as PDF. Ideal for freelancers and MSMEs.",
};

export default function InvoiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
