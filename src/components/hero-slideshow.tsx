'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// One image per project (no repeated properties), curated for the homepage hero.
// These do not overlap with the Featured Projects section further down the page.
const slides = [
  {
    src: '/project-photos/newer-project-photos/IMG_8635.JPG',
    alt: 'Modern home with a freeform inground pool and travertine paver patio',
  },
  {
    src: '/project-photos/newer-project-photos/IMG_5601.JPEG',
    alt: 'Lakefront fire-pit lounge with Adirondack chairs overlooking the water',
  },
  {
    src: '/project-photos/newer-project-photos/IMG_8633.JPG',
    alt: 'Backyard with a curved pool, wide paver patio, and wicker lounge seating',
  },
  {
    src: '/project-photos/newer-project-photos/IMG_8630.JPG',
    alt: 'Overhead view of a rectangular pool framed by a stone deck and lounge area',
  },
  {
    src: '/project-photos/1.png',
    alt: 'Craftsman-style home with a timber-frame portico, stone facade, and sculpted garden beds',
  },
];

const INTERVAL_MS = 6000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Respect users who prefer reduced motion: hold on the first image.
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[2000ms] ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/60" />
    </div>
  );
}
