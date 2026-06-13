import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import {
  Eyebrow,
  SectionHeading,
  primaryBtn,
  heroOutlineBtn,
  whiteBtn,
  floatingCard,
} from '@/components/site-ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardscaping & Stonework | GreenSweep Niagara',
  description:
    'Hardscaping and stonework across the Niagara Region: patios, walkways, retaining walls, driveways, fire features, and outdoor kitchens, built to last generations.',
};

const services = [
  {
    title: 'Patios & Outdoor Living Areas',
    body: 'Custom patios in natural stone, interlocking pavers, or stamped concrete, built for entertaining.',
    items: [
      'Interlocking stone patios',
      'Natural flagstone installations',
      'Stamped concrete designs',
      'Outdoor kitchen foundations',
    ],
  },
  {
    title: 'Walkways & Pathways',
    body: 'Beautiful, functional walkways that guide guests and complement your home’s architecture.',
    items: [
      'Front entrance pathways',
      'Garden pathways',
      'Stepping-stone installations',
      'Curved or geometric designs',
    ],
  },
  {
    title: 'Retaining Walls',
    body: 'Structurally sound, beautifully crafted walls that solve grading challenges and add interest.',
    items: [
      'Engineered block systems',
      'Natural stone walls',
      'Tiered wall systems',
      'Integrated drainage solutions',
    ],
  },
  {
    title: 'Driveways',
    body: 'A strong first impression in a durable, attractive driveway designed for Canadian winters.',
    items: [
      'Interlocking paver driveways',
      'Stamped concrete options',
      'Decorative borders',
      'Proper drainage integration',
    ],
  },
  {
    title: 'Fire Pits & Fire Features',
    body: 'Custom fire features that extend the outdoor season and create a warm gathering space.',
    items: [
      'Stone fire pit installations',
      'Built-in seating walls',
      'Gas or wood-burning options',
      'Custom shapes and sizes',
    ],
  },
  {
    title: 'Outdoor Kitchens',
    body: 'A fully equipped outdoor kitchen that turns the backyard into an entertainer’s space.',
    items: [
      'Built-in grill stations',
      'Stone countertops',
      'Bar seating areas',
      'Storage and prep spaces',
    ],
  },
];

const advantage = [
  'Premium materials sourced from trusted suppliers',
  'Proper base preparation for long-lasting results',
  'Engineered drainage that prevents settling and water damage',
  'Skilled masons with decades of combined experience',
  'Workmanship warranty, so you know we stand behind our installations',
];

const materials = [
  {
    title: 'Natural Stone',
    body: 'Flagstone, limestone, granite, and bluestone, each with timeless beauty and character.',
  },
  {
    title: 'Interlocking Pavers',
    body: 'Durable and versatile, available in countless colours and patterns.',
  },
  {
    title: 'Retaining Wall Blocks',
    body: 'Engineered systems designed for both strength and visual appeal.',
  },
  {
    title: 'Decorative Concrete',
    body: 'Stamped, stained, or polished for a custom look at great value.',
  },
];

const gallery = [
  { src: '/project-photos/IMG_0866.jpeg', alt: 'Bespoke stone entry walkway' },
  { src: '/project-photos/IMG_5663.JPEG', alt: 'Interlocking paver entry and walkway' },
  { src: '/project-photos/IMG_6614.JPEG', alt: 'Composite deck and stone steps set into a wooded ravine' },
  { src: '/project-photos/IMG_5660.JPEG', alt: 'Hand-laid grey paver patio with garden beds' },
];

export default function HardscapingPage() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[60vh] items-center md:min-h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/2.png"
            alt="Interlocking-stone patio framed by tall privacy cedars"
            fill
            className="object-cover object-[50%_60%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <Eyebrow className="mb-6 text-white/80">Hardscaping</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Hardscaping &amp; Stonework
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              Patios, walkways, and outdoor living features, engineered to withstand the Niagara
              climate and built to look beautiful for decades.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className={primaryBtn} asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button size="lg" className={heroOutlineBtn} asChild>
                <Link href="/portfolio">
                  See Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES (floating cards with detail bullets) ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="What We Build"
            title="Outdoor Structures, Done Right"
            intro="Hardscaping turns your property into a functional, beautiful extension of your home. We pair technical precision with design, so every structure adds lasting value."
          />
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className={`${floatingCard} p-8`}>
                <h3 className="font-display text-xl font-normal">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/70">{service.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" strokeWidth={1.75} />
                      <span className="text-sm text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ADVANTAGE (two-column) ============ */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[460px] overflow-hidden rounded-sm">
              <Image
                src="/project-photos/IMG_5661.JPEG"
                alt="Precision-laid interlocking paver patio with clean borders"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow className="mb-5">Our Advantage</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Built To Outlast The Seasons
              </h2>
              <ul className="mt-8 space-y-4">
                {advantage.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-sage" strokeWidth={1.75} />
                    <span className="text-lg leading-relaxed text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MATERIAL OPTIONS ============ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Materials"
            title="Finishes For Every Style & Budget"
            intro="We work with a wide range of materials and help you choose the right one for your home."
          />
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <div key={material.title} className={`${floatingCard} p-7`}>
                <h3 className="font-display text-lg font-normal">{material.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{material.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="bg-moss py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Recent Builds"
            title="Stonework We're Proud Of"
            intro="Patios, walkways, steps, and decks built across the Niagara Region."
          />
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((img) => (
              <div key={img.src} className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA (deep green band) ============ */}
      <section className="bg-brand py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Eyebrow className="mb-5 text-clay-soft">Ready When You Are</Eyebrow>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-[1.2] md:text-4xl">
            Build Your Outdoor Living Space
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            Get a free quote for your hardscaping project. We&apos;ll bring expert craftsmanship and
            lasting quality to your property.
          </p>
          <div className="mt-9">
            <Button size="lg" className={whiteBtn} asChild>
              <Link href="/quote">Request Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
