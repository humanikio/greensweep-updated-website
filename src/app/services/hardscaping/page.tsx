import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardscaping & Stonework | Greensweep Niagara',
  description: 'Professional hardscaping services in the Niagara Region. Patios, walkways, retaining walls, and outdoor living spaces built to last.',
};

export default function HardscapingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/generated/service-hardscaping-patio.png"
            alt="Professional hardscaping and stonework"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hardscaping & Stonework
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Outdoor living spaces built to last generations with expert craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Hardscaping transforms your outdoor space into a functional, beautiful extension of
              your home. From elegant patios to sturdy retaining walls, our expert craftsmen combine
              technical precision with aesthetic vision to create structures that enhance your
              property's value and your quality of life. Every project is built to withstand the
              Niagara climate and look beautiful for decades to come.
            </p>

            <h2 className="text-3xl font-bold mb-8">Our Hardscaping Services:</h2>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Patios & Outdoor Living Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Create the perfect outdoor entertaining space with custom patio designs using
                    natural stone, pavers, or stamped concrete.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Interlocking stone patios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Natural flagstone installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Stamped concrete designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Outdoor kitchen foundations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Walkways & Pathways</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Guide visitors through your landscape with beautiful, functional walkways that
                    complement your home's architecture.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Front entrance pathways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Garden pathways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Stepping stone installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Curved or geometric designs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Retaining Walls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Solve grading challenges while adding visual interest with structurally sound,
                    beautifully crafted retaining walls.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Engineered block systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Natural stone walls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Tiered wall systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Integrated drainage solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Driveways</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Make a strong first impression with a durable, attractive driveway designed to
                    handle Canadian winters.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Interlocking paver driveways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Stamped concrete options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Decorative borders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Proper drainage integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fire Pits & Fire Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Extend your outdoor season with custom fire features that create a warm,
                    inviting gathering space.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Stone fire pit installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Built-in seating walls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Gas or wood-burning options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Custom shapes and sizes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Outdoor Kitchens</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Transform your backyard into an entertainer's paradise with a fully equipped
                    outdoor kitchen.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Built-in grill stations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Stone countertops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Bar seating areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Storage and prep spaces</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-bold mb-4">Our Hardscaping Advantage</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Premium materials sourced from trusted suppliers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Proper base preparation for long-lasting results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Engineered drainage to prevent settling and water damage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Skilled masons with decades of combined experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Warranty on workmanship—we stand behind our installations
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Material Options</h3>
              <p className="text-muted-foreground mb-6">
                We work with a wide variety of materials to match your style and budget:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Natural Stone</h4>
                  <p className="text-sm text-muted-foreground">
                    Flagstone, limestone, granite, bluestone—timeless beauty with unique character
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Interlocking Pavers</h4>
                  <p className="text-sm text-muted-foreground">
                    Durable, versatile, available in countless colors and patterns
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Retaining Wall Blocks</h4>
                  <p className="text-sm text-muted-foreground">
                    Engineered systems designed for strength and visual appeal
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Decorative Concrete</h4>
                  <p className="text-sm text-muted-foreground">
                    Stamped, stained, or polished for a custom look at great value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Your Outdoor Living Space
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get a free quote for your hardscaping project. We'll bring expert craftsmanship and
            lasting quality to your property.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/quote">
              Request Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
