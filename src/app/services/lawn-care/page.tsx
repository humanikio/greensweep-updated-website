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
  title: 'Lawn Care & Maintenance | GreenSweep Niagara',
  description:
    'Professional lawn care and maintenance across the Niagara Region: weekly mowing, fertilization, aeration, weed control, and seasonal cleanups, delivered to an exacting standard.',
};

const services = [
  {
    title: 'Weekly Mowing & Trimming',
    body: 'Professional mowing at the optimal height for your grass type, with precision edging and trimming around every obstacle.',
  },
  {
    title: 'Fertilization Programs',
    body: 'Customized fertilization schedules that promote healthy growth, deep roots, and a rich, even green colour.',
  },
  {
    title: 'Aeration Services',
    body: 'Core aeration that relieves soil compaction and improves water, nutrient, and oxygen flow to the roots.',
  },
  {
    title: 'Weed Control',
    body: 'Targeted treatments that clear dandelions, crabgrass, and other invasive weeds without harming your lawn.',
  },
  {
    title: 'Overseeding & Repair',
    body: 'Bare patches filled and thin lawns thickened with premium seed matched to your property conditions.',
  },
  {
    title: 'Seasonal Cleanup',
    body: 'Spring and fall cleanups, from leaf and debris removal to preparing the lawn for the season ahead.',
  },
];

const whyUs = [
  'Commercial-grade equipment for a consistently superior finish',
  'Reliable, same-crew service that keeps to your schedule',
  'Environmentally responsible practices and products',
  'Expert knowledge of Niagara grass types and climate',
  'Satisfaction guaranteed: we don’t rest until you’re happy',
];

const gallery = [
  {
    src: '/project-photos/newer-project-photos/project2-1-revised.jpg',
    alt: 'Pristine front lawn framed by sculpted shrubs and fresh mulch beds',
  },
  { src: '/project-photos/IMG_3980.JPEG', alt: 'Backyard lawn with fresh, even mowing stripes' },
  {
    src: '/project-photos/IMG_3843.JPEG',
    alt: 'Manicured front property with a paver walkway and maple',
  },
];

export default function LawnCarePage() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[60vh] items-center md:min-h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_4140.JPEG"
            alt="Pristine backyard lawn with crisp, even mowing stripes"
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <Eyebrow className="mb-6 text-white/80">Maintenance</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Lawn Care &amp; Maintenance
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              A pristine lawn sets the tone for the entire property. We keep yours healthy, even, and
              effortless through every season.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className={primaryBtn} asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button size="lg" className={heroOutlineBtn} asChild>
                <Link href="/services">
                  All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED (floating cards) ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="What's Included"
            title="Comprehensive, Year-Round Care"
            intro="A beautiful lawn is the foundation of any great landscape. We tailor every program to your property and the Niagara climate, so it stays healthy and vibrant from spring through fall."
          />
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className={`${floatingCard} p-8`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                  <Check className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-xl font-normal">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/70">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US (two-column) ============ */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[460px] overflow-hidden rounded-sm">
              <Image
                src="/project-photos/IMG_3759.JPEG"
                alt="Upscale craftsman home with an immaculate striped front lawn"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow className="mb-5">Why GreenSweep</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Held To A Higher Standard
              </h2>
              <ul className="mt-8 space-y-4">
                {whyUs.map((item) => (
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

      {/* ============ GALLERY ============ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Recent Lawns"
            title="The GreenSweep Finish"
            intro="A few of the lawns we keep looking their best across the Niagara Region."
          />
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            Ready For A Lawn You&apos;ll Love?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            Get a free quote for our lawn care services. We&apos;ll assess your property and build a
            maintenance plan around it.
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
