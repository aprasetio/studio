import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Image Resizer Online - Change Photo Dimensions Privately",
  description: "Resize images to specific width and height in pixels. Maintain aspect ratio and quality. 100% offline and secure.",
};

export default function ImageResizerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}