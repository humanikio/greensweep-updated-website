import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Greensweep Niagara',
  description: 'View our completed landscaping projects across the Niagara Region. See the quality and craftsmanship that sets us apart.',
};

// Mock portfolio data - in production this would come from a CMS or API
const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Backyard Transformation',
    category: 'Complete Landscape',
    location: 'St. Catharines',
    description: 'A complete backyard overhaul featuring custom stonework patio, professional landscaping, and outdoor living spaces.',
    image: '/images/generated/hero-backyard-patio-sunset.png',
  },
  {
    id: 2,
    title: 'Pristine Lawn & Garden Beds',
    category: 'Lawn Care & Design',
    location: 'Niagara Falls',
    description: 'Weekly maintenance program with custom garden bed design featuring colorful perennials and ornamental grasses.',
    image: '/images/generated/pristine-lawn-garden-beds.png',
  },
  {
    id: 3,
    title: 'Premium Hardscape Patio',
    category: 'Hardscaping',
    location: 'Welland',
    description: 'Interlocking stone patio with built-in outdoor kitchen and fire pit area for entertaining.',
    image: '/images/generated/service-hardscaping-patio.png',
  },
  {
    id: 4,
    title: 'Custom Landscape Design',
    category: 'Landscape Design',
    location: 'Niagara-on-the-Lake',
    description: 'Artistic landscape design with curved garden beds, ornamental grasses, and layered plantings.',
    image: '/images/generated/service-landscape-design.png',
  },
  {
    id: 5,
    title: 'Professional Lawn Care',
    category: 'Lawn Maintenance',
    location: 'Lincoln',
    description: 'Year-round lawn care program resulting in a healthy, vibrant lawn with perfect striping.',
    image: '/images/generated/service-lawn-mowing.png',
  },
  {
    id: 6,
    title: 'Elegant Garden Retreat',
    category: 'Complete Landscape',
    location: 'Grimsby',
    description: 'Peaceful garden oasis with natural stone pathways, perennial beds, and privacy screening.',
    image: '/images/generated/pristine-lawn-garden-beds.png',
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Explore our completed projects and see the transformations we've created across the
            Niagara Region.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm font-semibold">
                    {item.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See The Transformation</h2>
            <p className="text-lg text-muted-foreground">
              Our work speaks for itself. Browse through our before and after photos to see the
              dramatic transformations we create.
            </p>
          </div>

          {/* Example Before/After */}
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[300px] md:h-[400px]">
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold z-10">
                      BEFORE
                    </div>
                    <Image
                      src="/images/generated/pristine-lawn-garden-beds.png"
                      alt="Before transformation"
                      fill
                      className="object-cover brightness-75 saturate-50"
                    />
                  </div>
                  <div className="relative h-[300px] md:h-[400px]">
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm font-semibold z-10">
                      AFTER
                    </div>
                    <Image
                      src="/images/generated/pristine-lawn-garden-beds.png"
                      alt="After transformation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardDescription className="text-base italic">
                    "Greensweep completely transformed our backyard into an outdoor oasis. The
                    attention to detail and craftsmanship is outstanding. We couldn't be happier!"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">— Sarah & Mike Thompson</p>
                  <p className="text-sm text-muted-foreground">St. Catharines</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription className="text-base italic">
                    "Professional, reliable, and the results exceeded our expectations. Our new patio
                    is the centerpiece of our backyard and perfect for entertaining."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">— Jennifer Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Niagara Falls</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription className="text-base italic">
                    "The weekly lawn care service keeps our property looking pristine. The team is
                    always on time and does exceptional work."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">— David Chen</p>
                  <p className="text-sm text-muted-foreground">Welland</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription className="text-base italic">
                    "From design to installation, the entire process was seamless. Our new landscape
                    design has increased our home's curb appeal tremendously."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">— Amanda Wilson</p>
                  <p className="text-sm text-muted-foreground">Niagara-on-the-Lake</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us for a free consultation and see
            what we can do for your property.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/quote">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
