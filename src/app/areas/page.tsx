import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Service Areas | Landscaping Across Niagara Region | Greensweep Niagara',
  description:
    'Greensweep Niagara provides professional landscaping services throughout the Niagara Region including Niagara-on-the-Lake, St. Catharines, Grimsby, Fonthill, and more.',
};

export default function AreasPage() {
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
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Service Areas</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Proudly Serving the Niagara Region
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            From the historic streets of Niagara-on-the-Lake to the waterfront communities of
            Grimsby and Port Dalhousie, Greensweep Niagara brings professional landscaping
            services to homeowners across the region.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/quote">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any area to learn more about the landscaping services we offer in your
              community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {locations.map((location) => (
              <Link key={location.slug} href={`/areas/${location.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-accent transition-colors">
                          {location.name}
                        </CardTitle>
                        <CardDescription>{location.region}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{location.tagline}</p>
                    {location.neighborhoods && (
                      <div className="flex flex-wrap gap-2">
                        {location.neighborhoods.slice(0, 3).map((neighborhood, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-secondary rounded-full"
                          >
                            {neighborhood}
                          </span>
                        ))}
                        {location.neighborhoods.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-secondary rounded-full">
                            +{location.neighborhoods.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    <div className="mt-4 flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving the Entire Niagara Region</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team proudly serves homeowners from Grimsby to Niagara-on-the-Lake, and everywhere
              in between. Not sure if we service your area? Give us a call!
            </p>

            <div className="grid gap-4 md:grid-cols-3 text-left mb-8">
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">Niagara Region</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>St. Catharines</li>
                  <li>Niagara Falls</li>
                  <li>Niagara-on-the-Lake</li>
                  <li>Welland</li>
                  <li>Thorold</li>
                  <li>Fort Erie</li>
                </ul>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">West Niagara</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Grimsby</li>
                  <li>Beamsville</li>
                  <li>Lincoln</li>
                  <li>Vineland</li>
                  <li>Jordan</li>
                  <li>Smithville</li>
                </ul>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">Pelham & Area</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Fonthill</li>
                  <li>Fenwick</li>
                  <li>Ridgeville</li>
                  <li>Port Dalhousie</li>
                  <li>Port Weller</li>
                  <li>Port Colborne</li>
                </ul>
              </div>
            </div>

            <Button size="lg" asChild>
              <a href="tel:9059318022">
                <Phone className="mr-2 h-5 w-5" />
                Call to Confirm Service Area
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose a Local Landscaper?
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">We Know Niagara</h3>
                <p className="text-muted-foreground">
                  Born and raised in the Niagara Region, we understand the unique climate, soil
                  conditions, and landscaping challenges that local homeowners face. From the lake
                  effect weather to the clay-heavy soils, we know what works here.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Fast Response Times</h3>
                <p className="text-muted-foreground">
                  Being local means we're never far away. Whether you need emergency cleanup after
                  a storm or want to schedule a same-week consultation, we can be there quickly.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Community Investment</h3>
                <p className="text-muted-foreground">
                  When you hire Greensweep Niagara, you're supporting a local business that
                  reinvests in our community. We live here, work here, and take pride in making
                  our region more beautiful.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Reputation Matters</h3>
                <p className="text-muted-foreground">
                  In a tight-knit region like Niagara, our reputation is everything. We earn repeat
                  customers and referrals by delivering exceptional results and honest service,
                  every single time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            No matter where you are in the Niagara Region, we're ready to help you create the
            outdoor space of your dreams.
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
            name: 'Greensweep Niagara',
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
