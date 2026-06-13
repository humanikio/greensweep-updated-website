import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Heart, Clock, Leaf, Handshake } from 'lucide-react';
import {
  Eyebrow,
  SectionHeading,
  outlineBtn,
  lightOutlineBtn,
  whiteBtn,
  floatingCard,
  Grain,
} from '@/components/site-ui';
import { locations } from '@/data/locations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | GreenSweep Niagara',
  description:
    'GreenSweep Niagara is a locally-owned landscaping company founded in 2024, transforming the finest properties across the Niagara Region with a personal, quality-first approach.',
};

const values = [
  {
    icon: Users,
    title: 'Locally Owned',
    body: 'As a local Niagara business, we are invested in our community and take pride in helping our neighbours create beautiful outdoor spaces.',
  },
  {
    icon: Handshake,
    title: 'Personalized Approach',
    body: 'Every property is unique. We listen, understand your vision, and tailor our work to fit your goals and your budget.',
  },
  {
    icon: Award,
    title: 'Quality First',
    body: 'We never cut corners. From materials to craftsmanship, we deliver work that exceeds expectations and stands the test of time.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    body: 'We use environmentally responsible methods and recommend native plants for landscapes that are beautiful and eco-friendly.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    body: 'We show up on time, communicate clearly, and do what we say we will do. Reliability is the foundation of our business.',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    body: 'Your happiness is our success. We are not done until you are completely satisfied with the results.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[60vh] items-center md:min-h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_6586.JPEG"
            alt="Lush deck garden framed by mature plantings"
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <Eyebrow className="mb-6 text-white/80">Our Story</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              About GreenSweep
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              Your locally-owned landscaping partner, dedicated to the finest properties across the
              Niagara Region.
            </p>
          </div>
        </div>
      </section>

      {/* ============ OUR STORY (two-column) ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-5">Transforming Niagara Since 2024</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                A Local Company, Built On Pride
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                GreenSweep Niagara was founded in 2024 by Carter, on a simple belief: that the people
                who live here deserve outdoor spaces worthy of the region they call home. What began
                as one truck and an obsession with doing things right has grown into a trusted local
                team.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/70">
                We take a personal, hands-on approach to every project. Whether it&apos;s regular
                lawn maintenance, a complete landscape design, or hardscaping, we work closely with
                you to understand your vision and bring it to life. No shortcuts, just quality work
                that speaks for itself.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/70">
                Our focus is clean, lasting, low-maintenance landscapes your family will enjoy for
                years. Every outdoor space has potential, and we&apos;re here to unlock it.
              </p>
            </div>
            <div className="relative h-[520px] overflow-hidden rounded-sm">
              <Image
                src="/project-photos/1.png"
                alt="Upscale Niagara home with a timber-frame portico and sculpted landscaping"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUES (floating cards) ============ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="What Sets Us Apart"
            title="The Standards We Work By"
            intro="A few principles guide everything we do, on every property we touch."
          />
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className={`${floatingCard} p-8`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-normal">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/70">{value.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ OUR PROMISE (deep green band) ============ */}
      <section className="bg-brand py-24 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-6 text-clay-soft">Our Promise</Eyebrow>
            <blockquote className="font-display text-2xl font-light leading-[1.4] md:text-3xl">
              &ldquo;We promise to treat your property as if it were our own, delivering honest work,
              fair pricing, and results that make you proud to come home.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/55">
              — The GreenSweep Niagara Team
            </p>
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREA (map + community list) ============ */}
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

      {/* ============ CTA (deep green band) ============ */}
      <section className="bg-brand py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Eyebrow className="mb-5 text-clay-soft">Let's Work Together</Eyebrow>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-[1.2] md:text-4xl">
            Ready To Transform Your Property?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            Get in touch for a free consultation and discover what GreenSweep can do for your
            outdoor space.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className={whiteBtn} asChild>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button size="lg" className={lightOutlineBtn} asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
