'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

// Mobile-only swipeable gallery for "Our Work In Action": one large image at a
// time, the next one peeking to signal swipe, with position dots + a hint.
export function WorkGalleryMobile({ items }: { items: GalleryItem[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} opts={{ loop: true, align: 'center' }} className="w-full">
        <CarouselContent className="-ml-3">
          {items.map((item) => (
            <CarouselItem key={item.src} className="basis-[85%] pl-3">
              <Link
                href="/portfolio"
                className="relative block aspect-[4/3] overflow-hidden rounded-sm"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="85vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <p className="absolute bottom-0 left-0 p-4 text-sm font-medium tracking-wide text-white">
                  {item.caption}
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Position dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selected ? 'w-6 bg-brand' : 'w-1.5 bg-brand/30'
            }`}
          />
        ))}
      </div>
      <p className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-foreground/50">
        Swipe to explore
      </p>
    </div>
  );
}
