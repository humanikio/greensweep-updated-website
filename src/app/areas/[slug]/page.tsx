import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  MapPin,
  Phone,
  CheckCircle,
  Star,
  Leaf,
  Home,
  TreeDeciduous,
} from 'lucide-react';
import { locations, getLocationBySlug, getAllLocationSlugs } from '@/data/locations';

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

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Get other locations for the "Also Serving" section
  const otherLocations = locations.filter((loc) => loc.slug !== slug).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/generated/pristine-lawn-garden-beds.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary-foreground/80 mb-4">
              <MapPin className="h-5 w-5" />
              <span>Serving {location.name}, {location.region}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Landscaping Services in {location.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
              {location.tagline}
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {location.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-white/30 text-primary hover:bg-white/90"
                asChild
              >
                <a href="tel:9059318022">
                  <Phone className="mr-2 h-5 w-5" />
                  (905) 931-8022
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Area */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional Landscaping in {location.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">{location.description}</p>

              <h3 className="text-xl font-semibold mb-4">We Understand {location.name} Properties</h3>
              <ul className="space-y-3">
                {location.characteristics.map((characteristic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{characteristic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/generated/hero-backyard-patio-sunset.png"
                alt={`Landscaping in ${location.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services for This Area */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services in {location.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored landscaping solutions designed specifically for {location.name} properties
              and the unique needs of this community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {location.services.map((service, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <div className="mb-3 inline-block p-3 bg-accent/10 rounded-lg w-fit">
                    {index === 0 && <Leaf className="h-6 w-6 text-accent" />}
                    {index === 1 && <TreeDeciduous className="h-6 w-6 text-accent" />}
                    {index === 2 && <Home className="h-6 w-6 text-accent" />}
                    {index === 3 && <Leaf className="h-6 w-6 text-accent" />}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      {location.neighborhoods && location.neighborhoods.length > 0 && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Neighborhoods We Serve in {location.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide landscaping services throughout {location.name} and surrounding areas.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {location.neighborhoods.map((neighborhood, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>

              {location.propertyTypes && (
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Property Types We Service</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {location.propertyTypes.map((type, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 border border-accent/30 rounded-full text-sm font-medium text-accent"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {location.featuredTestimonial && (
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium mb-6">
                "{location.featuredTestimonial.quote}"
              </blockquote>
              <cite className="text-lg text-muted-foreground not-italic">
                — {location.featuredTestimonial.author}, {location.region}
              </cite>
            </div>
          </div>
        </section>
      )}

      {/* Also Serving */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Also Serving Nearby Areas</h2>
            <p className="text-lg text-muted-foreground">
              We provide landscaping services throughout the Niagara Region.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/areas/${loc.slug}`}
                className="p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold group-hover:text-accent transition-colors">
                    {loc.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{loc.region}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/areas">
                View All Service Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your {location.name} Property?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your landscaping project. We're proud to serve
            homeowners throughout {location.name} and the {location.region}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white border-white/30 text-primary hover:bg-white/90"
              asChild
            >
              <a href="tel:9059318022">
                <Phone className="mr-2 h-5 w-5" />
                Call (905) 931-8022
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
