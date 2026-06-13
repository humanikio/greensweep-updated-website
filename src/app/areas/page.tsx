import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { locations } from '@/data/locations';
import {
  Eyebrow,
  SectionHeading,
  primaryBtn,
  heroOutlineBtn,
  whiteBtn,
  lightOutlineBtn,
  arrowLink,
  floatingCard,
} from '@/components/site-ui';

export const metadata: Metadata = {
  title: 'Service Areas | Landscaping Across Niagara Region | GreenSweep Niagara',
  description:
    'GreenSweep Niagara provides professional landscaping throughout the Niagara Region including Niagara-on-the-Lake, St. Catharines, Grimsby, Fonthill, and more.',
};

const regionGroups = [
  {
    title: 'Niagara Region',
    cities: [
      'St. Catharines',
      'Niagara Falls',
      'Niagara-on-the-Lake',
      'Welland',
      'Thorold',
      'Fort Erie',
    ],
  },
  {
    title: 'West Niagara',
    cities: ['Grimsby', 'Beamsville', 'Lincoln', 'Vineland', 'Jordan', 'Smithville'],
  },
  {
    title: 'Pelham & Area',
    cities: ['Fonthill', 'Fenwick', 'Ridgeville', 'Port Dalhousie', 'Port Weller', 'Port Colborne'],
  },
];

const whyLocal = [
  {
    title: 'We Know Niagara',
    body: 'Born and raised here, we understand the local climate, soil, and landscaping challenges, from lake-effect weather to clay-heavy soils. We know what works.',
  },
  {
    title: 'Fast Response Times',
    body: 'Being local means we are never far away. Whether it is storm cleanup or a same-week consultation, we can be there quickly.',
  },
  {
    title: 'Community Investment',
    body: 'Hiring GreenSweep supports a local business that reinvests in our community. We live here, work here, and take pride in our region.',
  },
  {
    title: 'Reputation Matters',
    body: 'In a tight-knit region like Niagara, reputation is everything. We earn repeat customers and referrals through exceptional, honest work.',
  },
];

export default function AreasPage() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[55vh] items-center md:min-h-[65vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_3759.JPEG"
            alt="Upscale Niagara home with an immaculate striped front lawn"
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl text-white">
            <Eyebrow className="mb-6 text-white/80">Service Areas</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Proudly Serving The Niagara Region
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-light text-white/85 md:text-xl">
              From the historic streets of Niagara-on-the-Lake to the waterfront communities of
              Grimsby and Port Dalhousie, we bring our work to homeowners across the region.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className={primaryBtn} asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button size="lg" className={heroOutlineBtn} asChild>
                <a href="tel:9059318022">
                  <Phone className="mr-2 h-4 w-4" />
                  (905) 931-8022
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AREAS GRID ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Explore By Community"
            title="Our Service Areas"
            intro="Select your community to learn more about the landscaping services we offer there."
          />
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link key={location.slug} href={`/areas/${location.slug}`} className={`${floatingCard} block p-8`}>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-normal transition-colors group-hover:text-brand">
                      {location.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {location.region}
                    </p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-foreground/70">{location.tagline}</p>
                {location.neighborhoods && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {location.neighborhoods.slice(0, 3).map((neighborhood, index) => (
                      <span
                        key={index}
                        className="rounded-sm bg-cream px-2.5 py-1 text-xs text-foreground/70"
                      >
                        {neighborhood}
                      </span>
                    ))}
                    {location.neighborhoods.length > 3 && (
                      <span className="rounded-sm bg-cream px-2.5 py-1 text-xs text-foreground/70">
                        +{location.neighborhoods.length - 3} more
                      </span>
                    )}
                  </div>
                )}
                <span className={`${arrowLink} mt-6`}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FULL COVERAGE (region columns) ============ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Full Coverage"
            title="Serving The Entire Niagara Region"
            intro="From Grimsby to Niagara-on-the-Lake and everywhere in between. Not sure if we cover your area? Just give us a call."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {regionGroups.map((group) => (
              <div key={group.title} className="rounded-sm border border-brand/10 bg-white p-8 shadow-sm">
                <h3 className="font-display text-xl font-normal">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.cities.map((city) => (
                    <li key={city} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-clay" />
                      <span className="text-foreground/75">{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className={primaryBtn} asChild>
              <a href="tel:9059318022">
                <Phone className="mr-2 h-4 w-4" />
                Call to Confirm Your Area
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ============ WHY LOCAL ============ */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why Local Matters"
            title="The Advantage Of A Local Landscaper"
            intro="Choosing a Niagara company means more than convenience."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {whyLocal.map((item) => (
              <div key={item.title} className="rounded-sm border border-brand/10 bg-white p-8 shadow-sm">
                <h3 className="font-display text-xl font-normal">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/70">{item.body}</p>
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
            Ready To Transform Your Outdoor Space?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            No matter where you are in the Niagara Region, we&apos;re ready to help you create the
            outdoor space of your dreams.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className={whiteBtn} asChild>
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" className={lightOutlineBtn} asChild>
              <a href="tel:9059318022">
                <Phone className="mr-2 h-4 w-4" />
                (905) 931-8022
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'GreenSweep Niagara',
            description:
              'Professional landscaping services throughout the Niagara Region including lawn care, landscape design, and hardscaping.',
            image: '/images/greensweep-logo.png',
            telephone: '905-931-8022',
            email: 'greensweepniagara@gmail.com',
            areaServed: locations.map((loc) => ({
              '@type': 'City',
              name: loc.name,
            })),
            serviceType: [
              'Lawn Care',
              'Landscaping',
              'Garden Maintenance',
              'Hardscaping',
              'Landscape Design',
            ],
            priceRange: '$$',
          }),
        }}
      />
    </div>
  );
}
