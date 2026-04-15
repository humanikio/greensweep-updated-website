import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10% Off Spring Cleanup + Mulch Bundle — GreenSweep Niagara',
  description:
    'Save 10% when you bundle spring cleanup with mulch. Includes yard cleanup, trimming, edging, and fresh mulch — book before May 20 across the Niagara Region.',
  openGraph: {
    title: '10% Off Spring Cleanup + Mulch Bundle | GreenSweep Niagara',
    description:
      'Save 10% when you bundle spring cleanup with mulch. Includes yard cleanup, trimming, edging, and fresh mulch — book before May 20 across the Niagara Region.',
    url: 'https://greensweepniagara.com/spring-cleanup',
    images: [
      {
        url: '/project-photos/IMG_3843.JPEG',
        width: 1200,
        height: 630,
        alt: 'Spring cleanup and fresh mulch by GreenSweep Niagara',
      },
    ],
  },
};

export default function SpringCleanupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
