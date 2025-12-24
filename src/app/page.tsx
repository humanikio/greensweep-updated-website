import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Wrench, Palette, Building2, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/images/generated/hero-backyard-patio-sunset.png"
            alt="Beautiful backyard patio at sunset"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Transform Your Outdoor Space Into a Natural Paradise
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Premium Landscaping Services Across the Niagara Region
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/portfolio">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Image Carousel Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/generated/pristine-lawn-garden-beds.png"
              alt="Pristine lawn with garden beds"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-border"></div>
            <div className="w-2 h-2 rounded-full bg-border"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Lawn Care Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/generated/service-lawn-mowing.png"
                  alt="Lawn Care & Maintenance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="mb-3 inline-block p-3 bg-accent/10 rounded-lg w-fit">
                  <Wrench className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Lawn Care & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Weekly mowing, fertilization, and aeration services to keep your lawn healthy and beautiful year-round.
                </CardDescription>
                <Button variant="link" className="p-0 text-accent h-auto" asChild>
                  <Link href="/services/lawn-care">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Landscape Design Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/generated/service-landscape-design.png"
                  alt="Landscape Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="mb-3 inline-block p-3 bg-accent/10 rounded-lg w-fit">
                  <Palette className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Landscape Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Custom designs that blend functionality with natural beauty, from concept to installation.
                </CardDescription>
                <Button variant="link" className="p-0 text-accent h-auto" asChild>
                  <Link href="/services/landscape-design">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Hardscaping Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/generated/service-hardscaping-patio.png"
                  alt="Hardscaping & Stonework"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="mb-3 inline-block p-3 bg-accent/10 rounded-lg w-fit">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Hardscaping & Stonework</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Patios, walkways, retaining walls, and outdoor living spaces built to last generations.
                </CardDescription>
                <Button variant="link" className="p-0 text-accent h-auto" asChild>
                  <Link href="/services/hardscaping">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* See The Difference Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See The Difference</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white shadow-xl">
              <div className="absolute inset-0 flex">
                <div className="relative w-[60%] overflow-hidden">
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold z-10">
                    BEFORE
                  </div>
                  <Image
                    src="/images/generated/pristine-lawn-garden-beds.png"
                    alt="Before landscaping"
                    fill
                    className="object-cover brightness-75 saturate-50"
                  />
                </div>
                <div className="relative flex-1 overflow-hidden">
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm font-semibold z-10">
                    AFTER
                  </div>
                  <Image
                    src="/images/generated/pristine-lawn-garden-beds.png"
                    alt="After landscaping"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-white rounded-full p-2 shadow-lg border-4 border-accent">
                  <div className="flex items-center gap-2">
                    <ChevronLeft className="h-5 w-5 text-accent" />
                    <div className="text-sm font-bold text-foreground">60%</div>
                    <ChevronRight className="h-5 w-5 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium italic mb-6 text-foreground">
              "Greensweep transformed our backyard into an outdoor oasis. Their attention to detail
              is incredible!"
            </blockquote>
            <cite className="not-italic text-muted-foreground">
              — Sarah & Mike Thompson, St. Catharines
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your landscaping project. We'll help bring your
            vision to life.
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
