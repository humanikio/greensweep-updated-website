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
  title: 'Landscape Design | GreenSweep Niagara',
  description:
    'Custom landscape design across the Niagara Region. From first concept to final planting, we design and build cohesive outdoor spaces for the finest properties.',
};

const processSteps = [
  {
    n: '01',
    title: 'Initial Consultation',
    body: 'We meet on-site to understand your vision, assess the property, talk budget, and spot the opportunities and challenges in your landscape.',
  },
  {
    n: '02',
    title: 'Concept Development',
    body: 'Our designers shape the first concepts: layout plans, plant palettes, and hardscape ideas, presented so we know we are aligned on style.',
  },
  {
    n: '03',
    title: 'Detailed Design & Approval',
    body: 'We refine the design to your feedback, with detailed plans for plants, materials, grading, and irrigation, then finalize everything with you before work begins.',
  },
  {
    n: '04',
    title: 'Installation',
    body: 'Our crew brings the design to life with meticulous attention to detail, managing every phase and keeping you informed throughout.',
  },
];

const designServices = [
  { title: 'Garden Bed Design', body: 'Beautiful plantings with year-round interest and colour.' },
  {
    title: 'Tree & Shrub Selection',
    body: 'Structural plants chosen for your climate and conditions.',
  },
  { title: 'Perennial Gardens', body: 'Low-maintenance gardens that return year after year.' },
  {
    title: 'Outdoor Living Spaces',
    body: 'Patios, fire pits, and seating areas integrated seamlessly.',
  },
  { title: 'Privacy Screening', body: 'Natural barriers using hedges, trees, and strategic planting.' },
  { title: 'Water Features', body: 'Fountains, ponds, and streams that add a sense of calm.' },
  { title: 'Lighting Design', body: 'Strategic outdoor lighting for beauty and safety after dark.' },
  { title: 'Drainage Solutions', body: 'Water issues solved while keeping the design beautiful.' },
];

const whyStandOut = [
  'Designs tailored to Niagara’s climate and growing conditions',
  'A balance of beauty, function, and easy upkeep',
  'Sustainable practices and native plant integration',
  'Comprehensive plans that can be installed in phases',
  'One team from design through installation, so the vision is realized',
];

const gallery = [
  { src: '/project-photos/IMG_3838.JPEG', alt: 'Private garden retreat with a bench and natural stone' },
  { src: '/project-photos/IMG_3839.JPEG', alt: 'Layered garden beds in full seasonal bloom' },
  { src: '/project-photos/IMG_4042.JPEG', alt: 'Established garden border with layered shrubs and trees' },
  { src: '/project-photos/IMG_6587.JPEG', alt: 'Natural stone steps and a river-rock path through a woodland garden' },
];

export default function LandscapeDesignPage() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[60vh] items-center md:min-h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_6614.JPEG"
            alt="Designed composite deck and stone steps set into a wooded ravine garden"
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <Eyebrow className="mb-6 text-white/80">Design</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Landscape Design
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              Your property has remarkable potential. We design and build cohesive outdoor spaces
              that reflect how you live and elevate your home.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className={primaryBtn} asChild>
                <Link href="/quote">Book a Design Consultation</Link>
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

      {/* ============ PROCESS ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="How We Work"
            title="From First Sketch To Final Planting"
            intro="Whether you are starting from scratch or reimagining an existing landscape, we guide you through a clear, considered process from concept to completion."
          />
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.n} className={`${floatingCard} p-8`}>
                <span className="font-display text-4xl font-light text-clay">{step.n}</span>
                <h3 className="mt-4 font-display text-xl font-normal">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DESIGN ============ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="What We Design"
            title="Considered Down To The Last Detail"
            intro="Every element is chosen to work as one, from plant selection to hardscape integration."
          />
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {designServices.map((service) => (
              <div key={service.title} className={`${floatingCard} p-6`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                  <Check className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-normal">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY OUR DESIGNS STAND OUT (two-column) ============ */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[460px] overflow-hidden rounded-sm lg:order-last">
              <Image
                src="/project-photos/IMG_4043.JPEG"
                alt="Custom designed planting bed with layered shrubs and mature trees"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow className="mb-5">Why Our Designs Stand Out</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Beautiful, And Built To Live In
              </h2>
              <ul className="mt-8 space-y-4">
                {whyStandOut.map((item) => (
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
      <section className="bg-moss py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Design Gallery"
            title="A Few Of Our Designs"
            intro="From private garden retreats to natural stonework, every space is designed as a whole."
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
            Let&apos;s Design Your Dream Landscape
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            Book a consultation to talk through your vision. We&apos;ll create a custom design that
            transforms your outdoor space.
          </p>
          <div className="mt-9">
            <Button size="lg" className={whiteBtn} asChild>
              <Link href="/quote">Schedule a Design Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
