
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Construction Material Calculator - Paint & Tiles Estimator",
  description: "Calculate paint liters and floor tiles needed for renovation. Essential tool for contractors and DIY.",
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
