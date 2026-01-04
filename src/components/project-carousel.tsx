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
  { src: '/project-photos/IMG_4322.JPEG', alt: 'Professional lawn with perfect stripes', caption: 'Weekly Lawn Care' },
  { src: '/project-photos/IMG_3760.JPEG', alt: 'Manicured front lawn', caption: 'Residential Lawn Maintenance' },
  { src: '/project-photos/IMG_3843.JPEG', alt: 'Elegant front entry landscaping', caption: 'Landscape Design' },
  { src: '/project-photos/IMG_4043.JPEG', alt: 'Curved garden bed with shrubs', caption: 'Garden Bed Installation' },
  { src: '/project-photos/IMG_6614.JPEG', alt: 'Backyard deck and garden retreat', caption: 'Complete Backyard Transformation' },
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
