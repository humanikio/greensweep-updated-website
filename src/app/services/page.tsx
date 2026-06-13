import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Flower2,
  Droplets,
  Snowflake,
  Trees,
  Lightbulb,
} from 'lucide-react';
import {
  Eyebrow,
  SectionHeading,
  primaryBtn,
  heroOutlineBtn,
  outlineBtn,
  whiteBtn,
  arrowLink,
  arrowLinkLight,
  floatingCard,
} from '@/components/site-ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | GreenSweep Niagara',
  description:
    'Full-service landscaping for the finest properties in the Niagara Region: lawn care, landscape design, and hardscaping, delivered to an exacting standard.',
};

const coreServices = [
  {
    eyebrow: 'Maintenance',
    title: 'Lawn Care & Maintenance',
    body: 'Manicured lawns, kept effortless. Weekly mowing, precise edging, fertilization, aeration, and seasonal cleanups keep your property looking its best from spring through fall, with nothing for you to manage.',
    image: '/project-photos/IMG_3759.JPEG',
    imageAlt: 'Upscale craftsman home with an immaculate striped front lawn',
    href: '/services/lawn-care',
  },
  {
    eyebrow: 'Design',
    title: 'Landscape Design',
    body: 'A considered vision for your whole property. We design gardens, plantings, and outdoor spaces that suit how you live and elevate your home, carried from first concept through to the final planting.',
    image: '/project-photos/IMG_3838.JPEG',
    imageAlt: 'Designed private garden retreat with bench and natural stone',
    href: '/services/landscape-design',
  },
  {
    eyebrow: 'Hardscaping',
    title: 'Hardscaping & Stonework',
    body: 'Patios, walkways, and walls built to last. Interlocking stone, natural stone, and outdoor living features installed with meticulous preparation and premium materials, so they stay beautiful for decades.',
    image: '/project-photos/2.png',
    imageAlt: 'Interlocking-stone patio framed by tall privacy cedars',
    href: '/services/hardscaping',
  },
];

const additionalServices = [
  {
    icon: Sparkles,
    title: 'Seasonal Cleanup',
    body: 'Spring and fall cleanups that reset your property for the season ahead.',
  },
  {
    icon: Flower2,
    title: 'Garden Beds',
    body: 'Layered planting beds with perennials, shrubs, and fresh mulch.',
  },
  {
    icon: Droplets,
    title: 'Irrigation',
    body: 'Efficient watering systems that keep your landscape healthy with less waste.',
  },
  {
    icon: Snowflake,
    title: 'Snow Removal',
    body: 'Reliable winter clearing that keeps your property safe and accessible.',
  },
  {
    icon: Trees,
    title: 'Tree & Shrub Care',
    body: 'Expert pruning and care that keeps trees and shrubs healthy and shapely.',
  },
  {
    icon: Lightbulb,
    title: 'Outdoor Lighting',
    body: 'Landscape lighting that extends the evening and adds presence after dark.',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[70vh] items-center">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_6615.JPEG"
            alt="Refined backyard deck and stonework set into a wooded ravine garden"
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <Eyebrow className="mb-6 text-white/80">What We Do</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Services Built For Standout Properties
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              From weekly care to full transformations, every service is delivered to the standard
              the finest homes in Niagara deserve.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className={primaryBtn} asChild>
                <Link href="/quote">Get a Free Consultation</Link>
              </Button>
              <Button size="lg" className={heroOutlineBtn} asChild>
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE SERVICES (alternating; middle one dark) ============ */}
      {coreServices.map((service, i) => {
        const dark = i === 1;
        const bg = ['bg-wheat', 'bg-brand', 'bg-moss'][i];
        return (
          <section
            key={service.title}
            className={`${bg} ${dark ? 'text-white' : ''} py-16 md:py-32`}
          >
            <div className="container mx-auto px-4">
              <div className="mx-auto grid max-w-6xl items-center gap-10 lg:gap-16 lg:grid-cols-2">
                <div
                  className={`relative h-[300px] overflow-hidden rounded-sm sm:h-[400px] lg:h-[460px] ${
                    i % 2 === 1 ? 'lg:order-last' : ''
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <Eyebrow className={`mb-5 ${dark ? 'text-clay-soft' : ''}`}>
                    {service.eyebrow}
                  </Eyebrow>
                  <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                    {service.title}
                  </h2>
                  <p
                    className={`mt-6 text-lg leading-relaxed ${
                      dark ? 'text-white/75' : 'text-foreground/70'
                    }`}
                  >
                    {service.body}
                  </p>
                  <Link
                    href={service.href}
                    className={`${dark ? arrowLinkLight : arrowLink} mt-8`}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============ ADDITIONAL SERVICES (warm taupe, floating cards) ============ */}
      <section className="bg-stone py-16 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="And More"
            title="Everything Your Property Needs"
            intro="Beyond our core work, we handle the details that keep a property polished all year long."
          />
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className={`${floatingCard} p-8`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-normal">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/70">{service.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-14 text-center">
            <Button className={outlineBtn} asChild>
              <Link href="/portfolio">
                See These In Our Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============ CTA (deep green band) ============ */}
      <section className="bg-brand py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Eyebrow className="mb-5 text-clay-soft">Ready When You Are</Eyebrow>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-[1.2] md:text-4xl">
            Let&apos;s Plan Your Project
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            Tell us about your property and what you have in mind. We&apos;ll set up a free,
            no-obligation consultation and a clear proposal.
          </p>
          <div className="mt-9">
            <Button size="lg" className={whiteBtn} asChild>
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
