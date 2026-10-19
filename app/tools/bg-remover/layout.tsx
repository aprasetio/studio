import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Background Remover – 100% Private, Runs in Browser',
  description:
    'Remove image background instantly. Powered by AI entirely in your browser — your photo never leaves your device.',
};

export default function BgRemoverLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
