import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Image Cropper Online - Crop Photos to Custom Ratios",
  description: "Crop your photos for social media or profile pictures. Presets for 1:1, 16:9, and 4:5. Private and works offline.",
};

export default function ImageCropperLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}