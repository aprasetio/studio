
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Simple Inventory Manager - Track Stock Offline",
  description: "Free inventory management tool for small teams and warehouses. Export/Import data to CSV securely.",
};

export default function InventoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
