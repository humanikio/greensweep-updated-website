import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { locations } from '@/data/locations';
import { WorkGalleryMobile } from '@/components/work-gallery-mobile';
import {
  ArrowRight,
  Home as HomeIcon,
  Palette,
  Trees,
  Star,
  Phone,
  Mail,
  MapPin,
  Users,
  Leaf,
  Clock,
} from 'lucide-react';

// Shared button + link treatments for the elevated homepage (no global Button changes).
const primaryBtn =
  'bg-brand text-white hover:bg-brand/90 rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
const heroOutlineBtn =
  'border border-white/60 bg-transparent text-white hover:bg-white hover:text-brand rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
const outlineBtn =
  'border border-brand/30 bg-transparent text-brand hover:bg-brand hover:text-white rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
const lightOutlineBtn =
  'border border-white/50 bg-transparent text-white hover:bg-white hover:text-brand rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
const arrowLink =
  'inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] text-sage transition-colors hover:text-brand';
const arrowLinkLight =
  'inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] text-clay-soft transition-colors hover:text-white';

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

const valuePillars = [
  {
    eyebrow: 'Bespoke Design',
    title: 'Let’s design your perfect landscape, together',
    body: 'Every exceptional landscape begins as a conversation. We start by understanding how you want to live outdoors, then partner with you to shape a considered design where every proportion, plant, and material is chosen to elevate your home and the way your family lives in it.',
    image: '/project-photos/IMG_3838.JPEG',
    imageAlt: 'Designed private garden retreat with bench and natural stone',
    cta: { label: 'Explore Landscape Design', href: '/services/landscape-design' },
  },
  {
    eyebrow: 'A Lasting Investment',
    title: 'An investment that only grows more beautiful',
    body: 'The finest landscapes are built once and enjoyed for decades. We hold every patio, walkway, and planting bed to the standard we would want at our own homes: meticulous preparation, premium materials, and an obsessive eye for the details that set a landscape built to last apart from one that merely looks good on install day.',
    image: '/project-photos/IMG_3843.JPEG',
    imageAlt: 'Upscale craftsman home with a paver walkway, layered plantings, and a mature Japanese maple',
    cta: { label: 'View Our Work', href: '/portfolio' },
  },
  {
    eyebrow: 'Start To Finish',
    title: 'A seamless experience, from first call to final walk',
    body: 'Expect clear communication, careful project management, and respectful crews who treat your property as if it were their own. As a locally-owned Niagara company, our reputation is earned one home at a time, and you will feel the difference at every step of the process.',
    image: '/project-photos/IMG_4140.JPEG',
    imageAlt: 'Clean, freshly finished backyard with crisp mowing stripes and a privacy fence',
    cta: { label: 'About GreenSweep', href: '/about' },
  },
];

const processSteps = [
  {
    n: '01',
    title: 'Let’s Get Acquainted',
    desc: 'We start with a conversation and a visit to your property, getting to know how you live outdoors and what you want the space to become.',
  },
  {
    n: '02',
    title: 'We Plan & Design',
    desc: 'We translate your goals into a considered design, choosing the layout, plantings, and materials that bring your vision together.',
  },
  {
    n: '03',
    title: 'We Refine Together',
    desc: 'We walk you through the proposal and fine-tune every detail until the plan feels exactly right for your home and your budget.',
  },
  {
    n: '04',
    title: 'Enjoy The Transformation',
    desc: 'Our crew brings it to life with meticulous craftsmanship, then hands you a finished space to enjoy for years to come.',
  },
];

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
  {
    quote:
      'Fast prompt service, worked in the rain to get the job done, and the job was completed right!',
    author: 'Randy Arsenault, St. Catharines',
  },
];

const services = [
  {
    title: 'Front Yards',
    body: 'The first thing the neighbourhood sees. We craft front landscapes with sculpted beds, natural stone, and refined plantings that give your home a presence worthy of the street.',
    image: '/project-photos/IMG_3759.JPEG',
    icon: HomeIcon,
    href: '/services',
  },
  {
    title: 'Backyards',
    body: 'Your own private retreat. We design patios, decks, and outdoor living areas built around the way you relax, gather, and entertain.',
    image: '/project-photos/IMG_6085.JPEG',
    icon: Trees,
    href: '/services',
  },
  {
    title: 'Landscape Design',
    body: 'One cohesive vision for the entire property, with every plant, line, and material drawn together into a design we carry from first sketch to final planting.',
    image: '/project-photos/IMG_4043.JPEG',
    icon: Palette,
    href: '/services/landscape-design',
  },
];

const featuredProjects = [
  {
    title: 'A Retreat Carved Into The Hillside',
    location: 'St. Catharines',
    body: 'A steep, wooded lot reimagined as a private escape, with a low-maintenance composite deck, natural stone steps, and a river-rock border that settle the whole space into the ravine behind it.',
    image: '/project-photos/IMG_6615.JPEG',
    imageAlt: 'Composite deck with stone steps and integrated lighting set into a wooded ravine garden',
  },
  {
    title: 'An Outdoor Room For Entertaining',
    location: 'Niagara-on-the-Lake',
    body: 'An interlocking-stone patio framed by tall privacy cedars, a defined outdoor living space made for long evenings with family and friends.',
    image: '/project-photos/2.png',
    imageAlt: 'Interlocking-stone patio framed by privacy cedars',
  },
  {
    title: 'Designed To Glow After Dark',
    location: 'Niagara Falls',
    body: 'Considered landscape lighting that extends the evening, drawing the eye through the garden and letting the property live well past sunset.',
    image: '/project-photos/2707940586657463592.jpg',
    imageAlt: 'Garden illuminated with landscape lighting at dusk',
  },
];

// "Our Work In Action" gallery photos. On desktop these render as a row of narrow
// panels that expand on hover; on mobile they fall back to a simple 2-column grid.
const galleryProjects = [
  {
    src: '/project-photos/IMG_3843.JPEG',
    alt: 'Upscale front entry with paver walkway and Japanese maple',
    caption: 'Front Entry Landscaping',
  },
  {
    src: '/project-photos/IMG_6615.JPEG',
    alt: 'Composite deck and stone steps in a wooded ravine garden',
    caption: 'Backyard Deck & Stonework',
  },
  {
    src: '/project-photos/IMG_3839.JPEG',
    alt: 'Layered garden beds in full seasonal bloom',
    caption: 'Seasonal Garden Beds',
  },
  {
    src: '/project-photos/2.png',
    alt: 'Interlocking-stone patio framed by privacy cedars',
    caption: 'Interlock Patio',
  },
  {
    src: '/project-photos/IMG_0866.jpeg',
    alt: 'Bespoke stone entry walkway',
    caption: 'Stone Walkway',
  },
  {
    src: '/project-photos/newer-project-photos/IMG_5891.JPEG',
    alt: 'Flagstone patio with a pergola arbor and dining set',
    caption: 'Patio & Pergola',
  },
  {
    src: '/project-photos/2707940586657463592.jpg',
    alt: 'Garden illuminated with landscape lighting at dusk',
    caption: 'Landscape Lighting',
  },
  {
    src: '/project-photos/newer-project-photos/IMG_5883.JPEG',
    alt: 'Timber pavilion and flagstone patio set in a wooded garden',
    caption: 'Pavilion & Patio',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO (full-bleed photo, centered) ============ */}
      <section className="relative flex min-h-[68vh] items-center md:min-h-[74vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/newer-project-photos/IMG_5601.JPEG"
            alt="Lakefront fire-pit lounge with Adirondack chairs overlooking the water"
            fill
            className="object-cover object-[50%_45%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/60" />
        </div>
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

      {/* ============ WELCOME / INTRO (warm linen, two-column) ============ */}
      <section className="relative overflow-hidden bg-cream py-16 md:py-32">
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
                here deserve outdoor spaces worthy of the region they call home. What began as one
                truck and an obsession with doing things right has grown into a trusted local team.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/70">
                We treat every property as if it were our own, taking a personal, hands-on approach
                to design clean, lasting, and effortless landscapes your family will enjoy for years
                to come.
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

      {/* ============ VALUE PILLARS (alternating two-column; middle one dark) ============ */}
      {valuePillars.map((pillar, i) => {
        const dark = i === 1;
        const bg = ['bg-wheat', 'bg-brand', 'bg-moss'][i];
        return (
          <section key={pillar.title} className={`${bg} ${dark ? 'text-white' : ''} py-16 md:py-32`}>
            <div className="container mx-auto px-4">
              <div className="mx-auto grid max-w-6xl items-center gap-10 lg:gap-16 lg:grid-cols-2">
                <div
                  className={`relative h-[320px] overflow-hidden rounded-sm sm:h-[420px] lg:h-[460px] ${
                    i % 2 === 1 ? 'lg:order-last' : ''
                  }`}
                >
                  <Image src={pillar.image} alt={pillar.imageAlt} fill className="object-cover" />
                </div>
                <div>
                  <Eyebrow className={`mb-5 ${dark ? 'text-clay-soft' : ''}`}>
                    {pillar.eyebrow}
                  </Eyebrow>
                  <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                    {pillar.title}
                  </h2>
                  <p
                    className={`mt-6 text-lg leading-relaxed ${
                      dark ? 'text-white/75' : 'text-foreground/70'
                    }`}
                  >
                    {pillar.body}
                  </p>
                  <Link
                    href={pillar.cta.href}
                    className={`${dark ? arrowLinkLight : arrowLink} mt-8`}
                  >
                    {pillar.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ============ SERVICES (warm taupe, card grid) ============ */}
      <section className="bg-stone py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <Eyebrow className="mb-5">Explore The Possibilities</Eyebrow>
            <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
              Every Space, Considered
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              From the first impression at the curb to your own private corner out back, we bring the
              same considered design and craftsmanship to every space on your property.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group overflow-hidden rounded-sm border-0 bg-white p-0 shadow-md ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <Icon className="mb-4 h-5 w-5 text-sage" strokeWidth={1.5} />
                    <CardTitle className="font-display text-xl font-normal">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-5 hidden leading-relaxed text-foreground/70 sm:block">
                      {service.body}
                    </p>
                    <Link href={service.href} className={arrowLink}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-14 text-center">
            <Button className={outlineBtn} asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============ PROPERTY CARE (warm linen, two-column) ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[260px] overflow-hidden rounded-sm sm:h-[380px] lg:h-[460px]">
              <Image
                src="/project-photos/IMG_3979.JPEG"
                alt="Backyard lawn freshly mowed with clean mowing stripes"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow className="mb-5">Keep It Beautiful</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Year-round property care
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                Beautiful landscapes deserve to stay that way. From weekly mowing and crisp edging
                to spring and fall cleanups, our maintenance keeps your property pristine through
                every season, with nothing for you to think about.
              </p>
              <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <Button className={primaryBtn} asChild>
                  <Link href="/services/lawn-care">Explore Lawn Care</Link>
                </Button>
                <Link href="/spring-cleanup" className={arrowLink}>
                  View Seasonal Offers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PHOTO STATEMENT BAND (full-bleed) ============ */}
      <section className="relative flex min-h-[60vh] items-center justify-center py-24 text-center">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_6586.JPEG"
            alt="Lush deck garden framed by mature plantings"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-white">
          <Eyebrow className="mb-6 text-white/75">Crafted With Intention</Eyebrow>
          <h2 className="font-display text-4xl font-light leading-[1.1] md:text-5xl">
            Outdoor spaces designed for the finest homes in Niagara
          </h2>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS (warm tan, grid) ============ */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow className="mb-5">Find Your Inspiration</Eyebrow>
            <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              A glimpse of recent transformations across the region, and a little inspiration for
              what your own property could become.
            </p>
          </div>
          <div className="mx-auto max-w-6xl space-y-10 md:space-y-12">
            {featuredProjects.map((project, i) => (
              <article
                key={project.title}
                className="group grid overflow-hidden rounded-sm bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl lg:grid-cols-12"
              >
                <Link
                  href="/portfolio"
                  className={`relative block h-[300px] overflow-hidden sm:h-[400px] lg:col-span-7 lg:h-[480px] ${
                    i % 2 === 1 ? 'lg:order-last' : ''
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </Link>
                <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
                  <p className="text-xs uppercase tracking-[0.25em] text-sage">{project.location}</p>
                  <h3 className="mt-3 font-display text-3xl font-light leading-[1.15] md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-foreground/70">{project.body}</p>
                  <Link href="/portfolio" className={`${arrowLink} mt-7`}>
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
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

      {/* ============ DARK BLOCK: PROCESS + TESTIMONIALS (deep green) ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand via-brand to-forest text-white">
        <Grain className="opacity-[0.08]" />
        {/* Process */}
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow className="mb-5">How It Works</Eyebrow>
            <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
              Four Steps To Your Own Retreat
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
              From the first conversation to the finished landscape, we keep every step clear,
              considered, and effortless for you.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.04] p-8 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                {/* Step number, ghosted into the card background */}
                <span
                  className="pointer-events-none absolute -right-3 -top-5 select-none font-display text-[7rem] font-light leading-none text-white/[0.07]"
                  aria-hidden
                >
                  {step.n}
                </span>
                <div className="relative">
                  <h3 className="font-display text-xl font-normal">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials (continues the dark passage, over a desaturated photo) */}
        <div className="relative overflow-hidden border-t border-white/10">
          {/* Desaturated background photo */}
          <div className="absolute inset-0">
            <Image
              src="/project-photos/IMG_6614.JPEG"
              alt=""
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <Eyebrow className="mb-5">Client Stories</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
                Don&apos;t just take our word for it. Here&apos;s what homeowners across the Niagara
                Region have to say.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-12 sm:grid-cols-2">
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
        </div>
      </section>

      {/* ============ WORK IN ACTION (soft sage, expanding panel strip) ============ */}
      <section className="bg-moss py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Eyebrow className="mb-5">In The Field</Eyebrow>
            <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
              Our Work In Action
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Real results from real Niagara homeowners across the region.
            </p>
          </div>

          {/* Desktop: clustered panels that expand on hover */}
          <div className="mx-auto hidden h-[480px] max-w-6xl gap-3 md:flex">
            {galleryProjects.map((p) => (
              <Link
                key={p.src}
                href="/portfolio"
                className="group relative flex-1 overflow-hidden rounded-sm transition-[flex-grow] duration-500 ease-out hover:flex-[3.5]"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover brightness-90 saturate-[0.85] transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/25" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-clay-soft">Featured Work</p>
                  <p className="mt-1 font-display text-2xl font-light text-white">{p.caption}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile: swipeable carousel with position dots */}
          <div className="md:hidden">
            <WorkGalleryMobile items={galleryProjects} />
          </div>

          <div className="mt-14 text-center">
            <Button className={outlineBtn} asChild>
              <Link href="/portfolio">
                Explore The Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREA (warm cream, map + area list) ============ */}
      <section className="relative overflow-hidden bg-cream py-24 md:py-32">
        <Grain />
        <div className="relative container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            {/* Region map — white background dropped out via multiply blend */}
            <div className="relative mx-auto w-full max-w-lg">
              <Image
                src="/niagara-region.jpg"
                alt="Map of the Niagara Region showing the communities GreenSweep serves"
                width={1000}
                height={1000}
                className="h-auto w-full mix-blend-multiply"
              />
            </div>

            {/* Areas list */}
            <div>
              <Eyebrow className="mb-5">Proudly Serving</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Rooted In The Niagara Region
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                From the lakeshore of Niagara-on-the-Lake to the vineyards of Lincoln, we care for
                properties right across the region. Don&apos;t see your community? Reach out.
                Chances are, we&apos;re right around the corner.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-x-8">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/areas/${loc.slug}`}
                    className="group flex items-center gap-3 border-b border-brand/10 py-4 transition-colors hover:text-brand"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-clay transition-colors group-hover:bg-brand" />
                    <span className="font-display text-lg font-normal text-foreground transition-colors group-hover:text-brand">
                      {loc.name}
                    </span>
                  </Link>
                ))}
              </div>
              <Button className={`${outlineBtn} mt-10`} asChild>
                <Link href="/areas">
                  View All Service Areas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ (warm taupe, two-column card accordion) ============ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-x-16 lg:gap-y-12">
            {/* Intro (col 1, row 1) */}
            <div className="lg:col-start-1 lg:row-start-1">
              <Eyebrow className="mb-5">Good To Know</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                Everything you need to know before getting started. Can&apos;t find your answer
                below? We&apos;re always happy to help.
              </p>
            </div>

            {/* Accordion (col 2, spans both rows) */}
            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="rounded-sm border border-brand/10 bg-white px-6 shadow-sm transition-colors data-[state=open]:border-brand/25"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-normal hover:no-underline">
                    What areas do you serve?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/70">
                    We proudly serve the entire Niagara Region, including St. Catharines, Niagara
                    Falls, Welland, Thorold, Niagara-on-the-Lake, Fort Erie, Port Colborne, and
                    surrounding areas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="rounded-sm border border-brand/10 bg-white px-6 shadow-sm transition-colors data-[state=open]:border-brand/25"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-normal hover:no-underline">
                    Do you offer free estimates?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/70">
                    Yes! We offer free, no-obligation consultations and estimates for all our
                    services. Contact us to schedule a visit to your property.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="rounded-sm border border-brand/10 bg-white px-6 shadow-sm transition-colors data-[state=open]:border-brand/25"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-normal hover:no-underline">
                    How do I get started with a landscaping project?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/70">
                    Simply give us a call or fill out our online quote request form. We&apos;ll
                    schedule a consultation to discuss your vision, assess your property, and provide
                    a detailed proposal.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="rounded-sm border border-brand/10 bg-white px-6 shadow-sm transition-colors data-[state=open]:border-brand/25"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-normal hover:no-underline">
                    What sets GreenSweep apart from other landscapers?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/70">
                    We take a personalized approach to every project. As a locally-owned company, we
                    prioritize quality over shortcuts and focus on creating clean, low-maintenance,
                    functional landscapes that exceed expectations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-8">
                <Button className={outlineBtn} asChild>
                  <Link href="/faq">
                    View All FAQs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Still have questions card (col 1, row 2 — stacks after the questions on mobile) */}
            <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
              <div className="rounded-sm border border-brand/10 bg-white/70 p-7">
                <p className="font-display text-xl font-normal">Still have questions?</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Give us a call or send a message and we&apos;ll get right back to you.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <Button className={primaryBtn} asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <a href="tel:9059318022" className={arrowLink}>
                    (905) 931-8022
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT (warm tan, two-column) ============ */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-5">Get In Touch</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Let&apos;s Bring Your Vision To Life
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                Ready to transform your outdoor space? Contact us today for a free consultation.
                We&apos;re here to answer your questions and help bring your vision to life.
              </p>
              <div className="mt-10 space-y-4">
                <a
                  href="tel:9059318022"
                  className="group flex items-center gap-5 rounded-sm border border-brand/10 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Call Us</p>
                    <p className="mt-0.5 font-medium">(905) 931-8022</p>
                  </div>
                </a>
                <a
                  href="mailto:greensweepniagara@gmail.com"
                  className="group flex items-center gap-5 rounded-sm border border-brand/10 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Email Us
                    </p>
                    <p className="mt-0.5 font-medium">greensweepniagara@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-5 rounded-sm border border-brand/10 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Service Area
                    </p>
                    <p className="mt-0.5 font-medium">Niagara Region, Ontario</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-sm bg-brand p-8 text-white shadow-xl md:p-10">
              <Eyebrow className="mb-5 text-clay-soft">Free Consultation</Eyebrow>
              <h3 className="font-display text-2xl font-light leading-[1.2] md:text-3xl">
                Request your free quote
              </h3>
              <p className="mt-5 leading-relaxed text-white/75">
                Tell us about your property and what you have in mind. We&apos;ll follow up quickly
                to set up your no-obligation consultation, no pressure and no strings attached.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <Button
                  size="lg"
                  className="h-12 rounded-sm bg-white px-8 text-xs font-medium uppercase tracking-[0.18em] text-brand hover:bg-white/90"
                  asChild
                >
                  <Link href="/quote">
                    Request a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" className={lightOutlineBtn} asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CAREERS / JOIN (deep green band) ============ */}
      <section className="bg-brand py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Eyebrow className="mb-5 text-sage">Join The Team</Eyebrow>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-[1.2] md:text-4xl">
            Grow With GreenSweep
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            We&apos;re always looking for dependable, detail-oriented people who take pride in their
            work. If that sounds like you, we&apos;d love to hear from you.
          </p>
          <div className="mt-9">
            <Button
              size="lg"
              className="h-12 rounded-sm bg-white px-8 text-xs font-medium uppercase tracking-[0.18em] text-brand hover:bg-white/90"
              asChild
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA (full-bleed photo overlay) ============ */}
      <section className="relative flex min-h-[70vh] items-center justify-center py-24 text-center">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/2707940586657463592.jpg"
            alt="Landscaped Niagara garden glowing with landscape lighting at dusk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/40" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-white">
          <Eyebrow className="mb-6 text-white/75">Ready When You Are</Eyebrow>
          <h2 className="font-display text-4xl font-light leading-[1.1] md:text-5xl">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/85">
            Get a free, no-obligation quote for your landscaping project. We&apos;ll help bring your
            vision to life.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className={primaryBtn} asChild>
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" className={lightOutlineBtn} asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
