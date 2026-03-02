import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '$25 Off Your First Mow — Weekly Lawn Care in Niagara',
  description:
    'Get $25 off your first professional mow. Fast 48-hour service, neighbourhood savings, and reliable weekly lawn care across the Niagara Region.',
  openGraph: {
    title: '$25 Off Your First Mow — Weekly Lawn Care | GreenSweep Niagara',
    description:
      'Get $25 off your first professional mow. Fast 48-hour service, neighbourhood savings, and reliable weekly lawn care across the Niagara Region.',
    url: 'https://greensweepniagara.com/weekly-mowing',
    images: [
      {
        url: '/project-photos/IMG_4322.JPEG',
        width: 1200,
        height: 630,
        alt: 'Professional lawn mowing by GreenSweep Niagara',
      },
    ],
  },
};

export default function WeeklyMowingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
