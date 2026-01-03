import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Wrench, Palette, Building2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Greensweep Niagara',
  description: 'Comprehensive landscaping services in the Niagara Region including lawn care, landscape design, and hardscaping.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive landscaping solutions tailored to the Niagara Region. From routine
            maintenance to complete property transformations.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {/* Lawn Care */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/images/generated/service-lawn-mowing.png"
                  alt="Lawn Care & Maintenance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Lawn Care & Maintenance</h2>
                <p className="text-muted-foreground mb-6">
                  Keep your lawn healthy and beautiful year-round with our professional lawn care
                  services. We provide weekly mowing, fertilization, aeration, weed control, and
                  seasonal cleanup to ensure your lawn is the envy of the neighborhood.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/services/lawn-care">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Landscape Design */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Landscape Design</h2>
                <p className="text-muted-foreground mb-6">
                  Transform your outdoor space with custom landscape design that reflects your style
                  and enhances your property. Our design team works with you from concept to
                  installation, creating beautiful, functional landscapes that blend with nature.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/services/landscape-design">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/generated/service-landscape-design.png"
                  alt="Landscape Design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Hardscaping */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/images/generated/service-hardscaping-patio.png"
                  alt="Hardscaping & Stonework"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Hardscaping & Stonework</h2>
                <p className="text-muted-foreground mb-6">
                  Build lasting outdoor living spaces with professional hardscaping. From patios and
                  walkways to retaining walls and fire pits, we create durable, beautiful structures
                  that enhance your property and withstand the test of time.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/services/hardscaping">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
              <Card className="p-2 sm:p-4">
                <CardHeader className="p-2 sm:p-4 pb-0 sm:pb-0">
                  <CardTitle className="text-sm sm:text-base">Seasonal Cleanup</CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-4 pt-2">
                  <CardDescription className="text-xs sm:text-sm">
                    Spring and fall cleanup services to prepare your property.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-2 sm:p-4">
                <CardHeader className="p-2 sm:p-4 pb-0 sm:pb-0">
                  <CardTitle className="text-sm sm:text-base">Garden Beds</CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-4 pt-2">
                  <CardDescription className="text-xs sm:text-sm">
                    Beautiful planting beds with perennials and shrubs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-2 sm:p-4">
                <CardHeader className="p-2 sm:p-4 pb-0 sm:pb-0">
                  <CardTitle className="text-sm sm:text-base">Irrigation</CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-4 pt-2">
                  <CardDescription className="text-xs sm:text-sm">
                    Efficient watering systems for healthy landscapes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-2 sm:p-4">
                <CardHeader className="p-2 sm:p-4 pb-0 sm:pb-0">
                  <CardTitle className="text-sm sm:text-base">Snow Removal</CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-4 pt-2">
                  <CardDescription className="text-xs sm:text-sm">
                    Winter snow clearing to keep your property safe.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-2 sm:p-4">
                <CardHeader className="p-2 sm:p-4 pb-0 sm:pb-0">
                  <CardTitle className="text-sm sm:text-base">Tree & Shrub Care</CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-4 pt-2">
                  <CardDescription className="text-xs sm:text-sm">
                    Pruning and maintenance for trees and shrubs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-2 sm:p-4">
                <CardHeader className="p-2 sm:p-4 pb-0 sm:pb-0">
                  <CardTitle className="text-sm sm:text-base">Outdoor Lighting</CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-4 pt-2">
                  <CardDescription className="text-xs sm:text-sm">
                    Landscape lighting for beauty and security.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We'll discuss your needs and create
            a custom solution for your property.
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
