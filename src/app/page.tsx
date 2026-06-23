import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeroSlideshow } from '@/components/hero-slideshow';
import { ArrowRight, Star, Phone, Mail, Users, Leaf, Clock } from 'lucide-react';

// Shared button + link treatments for the elevated homepage (no global Button changes).
const primaryBtn =
  'bg-brand text-white hover:bg-brand/90 rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
const heroOutlineBtn =
  'border border-white/60 bg-transparent text-white hover:bg-white hover:text-brand rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
const outlineBtn =
  'border border-brand/30 bg-transparent text-brand hover:bg-brand hover:text-white rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
const bannerBtn =
  'bg-white text-brand hover:bg-white/90 rounded-sm h-11 px-7 text-xs font-medium uppercase tracking-[0.18em]';

function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-medium uppercase tracking-[0.25em] text-sage ${className}`}>
      {children}
    </p>
  );
}

// Subtle film-grain overlay for depth on occasional sections. Drop inside a
// `relative` section; keep sibling content on a `relative` layer so it sits above.
function Grain({ className = 'opacity-[0.05]' }: { className?: string }) {
  return (
    <div aria-hidden className={`bg-noise pointer-events-none absolute inset-0 ${className}`} />
  );
}

// NOTE: section headings use Cormorant (font-display) at light weights for a finer, elegant feel.

const testimonials = [
  {
    quote:
      'Carter and his team were flexible to my changing needs over the season and kept my yard in tip top shape. Excellent care and attention to detail.',
    author: 'Jordan Duffy, St. Catharines',
  },
  {
    quote:
      'Highly recommend Green Sweep Niagara! Punctual, professional and go above and beyond expectations.',
    author: 'Jason Talyor, St. Catharines',
  },
  {
    quote:
      'The GreenSweep guys have done a number of jobs at our place and they have always turned out great.',
    author: 'Bruno Bartel, St. Catharines',
  },
];

const featuredProjects = [
  {
    title: 'A Pavilion In The Trees',
    location: 'St. Catharines',
    image: '/project-photos/newer-project-photos/IMG_5883.JPEG',
    imageAlt:
      'Timber pavilion with lounge seating on a flagstone patio in a wooded backyard garden',
  },
  {
    title: 'Patio, Pergola & Gardens',
    location: 'Niagara-on-the-Lake',
    image: '/project-photos/newer-project-photos/IMG_5891.JPEG',
    imageAlt:
      'Flagstone patio with a cedar pergola, dining set, and layered garden beds behind a home',
  },
  {
    title: 'A Private Garden Retreat',
    location: 'Niagara Falls',
    image: '/project-photos/IMG_3838.JPEG',
    imageAlt:
      'Secluded garden retreat with a bench, lattice trellis, natural stone, and layered plantings',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO (full-bleed photo, centered) ============ */}
      <section className="relative flex min-h-[68vh] items-center md:min-h-[74vh]">
        <HeroSlideshow />
        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <Eyebrow className="mb-6 text-white/80">Est. 2024 · Niagara Region</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Your Backyard, Your Escape
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              Resort-style outdoor living, designed around your lifestyle.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className={primaryBtn} asChild>
                <Link href="/quote">Get a Free Consultation</Link>
              </Button>
              <Button size="lg" className={heroOutlineBtn} asChild>
                <Link href="/portfolio">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTRO (warm linen, two-column — condensed) ============ */}
      <section className="relative overflow-hidden bg-cream py-16 md:py-24">
        <Grain />
        <div className="relative container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-5">Transforming Niagara Since 2024</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                A Local Company, Built On Pride
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                GreenSweep Niagara was founded by Carter on a simple belief: that the people who live
                here deserve outdoor spaces worthy of the region they call home. We treat every
                property as if it were our own, designing clean, lasting landscapes your family will
                enjoy for years to come.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-y border-brand/10 py-8 sm:gap-8">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-6 w-6 text-sage" strokeWidth={1.5} />
                  <p className="mt-3 text-sm font-medium tracking-wide">Locally Owned</p>
                </div>
                <div className="flex flex-col items-center border-x border-brand/10 text-center">
                  <Leaf className="h-6 w-6 text-sage" strokeWidth={1.5} />
                  <p className="mt-3 text-sm font-medium tracking-wide">Eco-Friendly</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-6 w-6 text-sage" strokeWidth={1.5} />
                  <p className="mt-3 text-sm font-medium tracking-wide">Reliable</p>
                </div>
              </div>
              <Button className={`${outlineBtn} mt-10`} asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[340px] overflow-hidden rounded-sm sm:h-[440px] lg:h-[480px]">
              <Image
                src="/project-photos/1.png"
                alt="Upscale Niagara home with timber-frame portico, stone facade, and sculpted garden beds"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS (warm tan, brief 3-up gallery) ============ */}
      <section className="bg-wheat py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Eyebrow className="mb-5">Find Your Inspiration</Eyebrow>
            <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              A glimpse of recent transformations across the region, and a little inspiration for
              what your own property could become.
            </p>
          </div>
          <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group relative h-[360px] overflow-hidden rounded-sm sm:h-[460px] lg:h-[520px]"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 p-7 md:p-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-clay-soft">
                      {project.location}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-light leading-[1.15] text-white md:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <Button className={bannerBtn} asChild>
                    <Link href="/portfolio">View Project</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button className={outlineBtn} asChild>
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS (deep green, over desaturated photo) ============ */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_6614.JPEG"
            alt=""
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Eyebrow className="mb-5">Client Stories</Eyebrow>
            <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
              Don&apos;t just take our word for it. Here&apos;s what homeowners across the Niagara
              Region have to say.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-12 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="border-t border-white/20 pt-8">
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="font-display text-xl font-light leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm uppercase tracking-wider text-white/50">
                  {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA (warm linen band, contact folded in) ============ */}
      <section className="relative overflow-hidden bg-cream py-24 text-center md:py-28">
        <Grain />
        <div className="relative mx-auto max-w-3xl px-4">
          <Eyebrow className="mb-6">Ready When You Are</Eyebrow>
          <h2 className="font-display text-4xl font-light leading-[1.1] md:text-5xl">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-foreground/70">
            Get a free, no-obligation quote for your landscaping project. We&apos;ll help bring your
            vision to life.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className={primaryBtn} asChild>
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" className={outlineBtn} asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-brand/15 pt-8 text-sm sm:flex-row sm:gap-10">
            <a
              href="tel:9059318022"
              className="flex items-center gap-2.5 text-foreground/70 transition-colors hover:text-brand"
            >
              <Phone className="h-4 w-4 text-sage" strokeWidth={1.5} />
              (905) 931-8022
            </a>
            <a
              href="mailto:greensweepniagara@gmail.com"
              className="flex items-center gap-2.5 text-foreground/70 transition-colors hover:text-brand"
            >
              <Mail className="h-4 w-4 text-sage" strokeWidth={1.5} />
              greensweepniagara@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
