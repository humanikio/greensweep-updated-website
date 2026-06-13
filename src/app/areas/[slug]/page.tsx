import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone, Check, Star, Leaf, Home, TreeDeciduous } from 'lucide-react';
import { locations, getLocationBySlug, getAllLocationSlugs } from '@/data/locations';
import {
  Eyebrow,
  SectionHeading,
  primaryBtn,
  heroOutlineBtn,
  whiteBtn,
  lightOutlineBtn,
  outlineBtn,
  floatingCard,
} from '@/components/site-ui';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: 'Location Not Found | GreenSweep Niagara',
    };
  }

  return {
    title: location.seoTitle,
    description: location.seoDescription,
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      type: 'website',
    },
  };
}

const serviceIcons = [Leaf, TreeDeciduous, Home, Leaf];

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const otherLocations = locations.filter((loc) => loc.slug !== slug).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[60vh] items-center md:min-h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_3843.JPEG"
            alt={`Landscaping in ${location.name}`}
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <Eyebrow className="mb-6 flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4" /> Serving {location.name}, {location.region}
            </Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Landscaping in {location.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light text-white/85 md:text-xl">
              {location.tagline}
            </p>
            <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-white/75">
              {location.heroDescription}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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

      {/* ============ ABOUT THE AREA ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-5">In Your Community</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Professional Landscaping in {location.name}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                {location.description}
              </p>
              <h3 className="mt-8 font-display text-xl font-normal">
                We Understand {location.name} Properties
              </h3>
              <ul className="mt-5 space-y-4">
                {location.characteristics.map((characteristic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-sage" strokeWidth={1.75} />
                    <span className="leading-relaxed text-foreground/70">{characteristic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[460px] overflow-hidden rounded-sm lg:order-last">
              <Image
                src="/project-photos/IMG_6586.JPEG"
                alt={`A landscaped property in ${location.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="What We Offer"
            title={`Our Services in ${location.name}`}
            intro={`Tailored landscaping solutions designed for ${location.name} properties and the unique needs of this community.`}
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {location.services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div key={index} className={`${floatingCard} p-8`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-normal">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/70">{service.description}</p>
                </div>
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

      {/* ============ NEIGHBORHOODS ============ */}
      {location.neighborhoods && location.neighborhoods.length > 0 && (
        <section className="bg-wheat py-24 md:py-32">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Coverage"
              title={`Neighbourhoods We Serve in ${location.name}`}
              intro={`We provide landscaping services throughout ${location.name} and the surrounding areas.`}
            />
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
              {location.neighborhoods.map((neighborhood, index) => (
                <span
                  key={index}
                  className="rounded-sm border border-brand/10 bg-white px-4 py-2 text-sm font-medium text-foreground/75"
                >
                  {neighborhood}
                </span>
              ))}
            </div>

            {location.propertyTypes && (
              <div className="mt-12 text-center">
                <h3 className="font-display text-xl font-normal">Property Types We Service</h3>
                <div className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-3">
                  {location.propertyTypes.map((type, index) => (
                    <span
                      key={index}
                      className="rounded-sm border border-clay/40 px-4 py-2 text-sm font-medium text-clay"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ============ TESTIMONIAL (deep green band) ============ */}
      {location.featuredTestimonial && (
        <section className="bg-brand py-24 text-white md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="font-display text-2xl font-light leading-[1.4] md:text-3xl">
                &ldquo;{location.featuredTestimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/55">
                — {location.featuredTestimonial.author}, {location.region}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ============ ALSO SERVING ============ */}
      <section className="bg-moss py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Nearby"
            title="Also Serving Nearby Areas"
            intro="We provide landscaping services throughout the Niagara Region."
          />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherLocations.map((loc) => (
              <Link key={loc.slug} href={`/areas/${loc.slug}`} className={`${floatingCard} block p-6`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-lg font-normal transition-colors group-hover:text-brand">
                  {loc.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {loc.region}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className={outlineBtn} asChild>
              <Link href="/areas">
                View All Service Areas
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
            Ready To Transform Your {location.name} Property?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            Get a free, no-obligation quote for your project. We&apos;re proud to serve homeowners
            throughout {location.name} and the {location.region}.
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

      {/* Local SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'GreenSweep Niagara',
            description: location.seoDescription,
            image: '/images/greensweep-logo.png',
            telephone: '905-931-8022',
            email: 'greensweepniagara@gmail.com',
            areaServed: {
              '@type': 'City',
              name: location.name,
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: location.region,
              },
            },
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
