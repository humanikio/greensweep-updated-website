import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Outdoor Living Package, Up to $1,500 Off | GreenSweep Niagara',
  description:
    'Custom paver patio, garden beds, and full plant install, designed and built by one local Niagara crew. Get up to $1,500 off the complete Outdoor Living Package. Limited summer 2026 build slots.',
  openGraph: {
    title: 'The Outdoor Living Package, Up to $1,500 Off | GreenSweep Niagara',
    description:
      'Custom paver patio, garden beds, and full plant install by one local crew, one complete build. Up to $1,500 off. Limited summer 2026 build slots.',
    url: 'https://greensweepniagara.com/outdoor-living',
    images: [
      {
        url: '/project-photos/IMG_5663.JPEG',
        width: 1200,
        height: 630,
        alt: 'Finished paver patio and garden beds by GreenSweep Niagara',
      },
    ],
  },
};

export default function OutdoorLivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
