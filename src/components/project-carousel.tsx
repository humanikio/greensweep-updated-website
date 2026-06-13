'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Project {
  src: string;
  alt: string;
  caption: string;
}

interface ProjectCarouselProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  { src: '/project-photos/IMG_6615.JPEG', alt: 'Composite deck and stone steps in a wooded ravine garden', caption: 'Backyard Deck & Stonework' },
  { src: '/project-photos/2.png', alt: 'Interlocking-stone patio framed by privacy cedars', caption: 'Interlock Patio & Outdoor Living' },
  { src: '/project-photos/IMG_3843.JPEG', alt: 'Upscale front entry with paver walkway and Japanese maple', caption: 'Front Entry Landscaping' },
  { src: '/project-photos/2707940586657463592.jpg', alt: 'Garden illuminated with landscape lighting at dusk', caption: 'Landscape Lighting' },
  { src: '/project-photos/IMG_0866.jpeg', alt: 'Bespoke stone entry walkway', caption: 'Stone Walkway & Entrance' },
  { src: '/project-photos/IMG_3839.JPEG', alt: 'Layered garden beds in full seasonal bloom', caption: 'Seasonal Garden Beds' },
  { src: '/project-photos/IMG_4322.JPEG', alt: 'Grand home with an immaculate striped front lawn', caption: 'Lawn Care & Maintenance' },
  { src: '/project-photos/IMG_6586.JPEG', alt: 'Lush deck garden framed by mature plantings', caption: 'Deck & Outdoor Living' },
  { src: '/project-photos/IMG_3838.JPEG', alt: 'Private garden retreat with bench and natural boulder', caption: 'Private Garden Retreat' },
];

export function ProjectCarousel({ projects = defaultProjects }: ProjectCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold text-lg">{project.caption}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
