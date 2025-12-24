import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscape Design | Greensweep Niagara',
  description: 'Custom landscape design services in the Niagara Region. From concept to installation, we create beautiful outdoor spaces.',
};

export default function LandscapeDesignPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/generated/service-landscape-design.png"
            alt="Professional landscape design"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Landscape Design
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Custom designs that blend functionality with natural beauty, from concept to reality.
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Your outdoor space has incredible potential. Whether you're starting from scratch or
              reimagining an existing landscape, our design team creates customized solutions that
              reflect your style while enhancing your property's natural beauty. We consider every
              detail—from plant selection to hardscape integration—to create cohesive, stunning
              outdoor environments.
            </p>

            <h2 className="text-3xl font-bold mb-8">Our Design Process:</h2>

            <div className="grid gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold flex-shrink-0">
                      1
                    </div>
                    <span>Initial Consultation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We meet with you on-site to understand your vision, assess your property, discuss
                    budget, and identify any challenges or opportunities in your landscape.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold flex-shrink-0">
                      2
                    </div>
                    <span>Concept Development</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our designers create initial concepts including layout plans, plant palettes, and
                    hardscape ideas. We present mood boards and sketches to ensure we're aligned on
                    style.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold flex-shrink-0">
                      3
                    </div>
                    <span>Detailed Design & Approval</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We refine the design based on your feedback, creating detailed plans with
                    specifications for plants, materials, grading, and irrigation. You approve the
                    final design before we begin.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold flex-shrink-0">
                      4
                    </div>
                    <span>Installation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our experienced crew brings your design to life with meticulous attention to
                    detail. We manage every phase of installation, keeping you informed throughout the
                    process.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-8">Design Services Include:</h2>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Garden Bed Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Beautiful plantings with year-round interest and color
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Tree & Shrub Selection</h3>
                  <p className="text-sm text-muted-foreground">
                    Structural plants chosen for your climate and conditions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Perennial Gardens</h3>
                  <p className="text-sm text-muted-foreground">
                    Low-maintenance gardens that return year after year
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Outdoor Living Spaces</h3>
                  <p className="text-sm text-muted-foreground">
                    Integrate patios, fire pits, and seating areas seamlessly
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Privacy Screening</h3>
                  <p className="text-sm text-muted-foreground">
                    Natural barriers using hedges, trees, and strategic planting
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Water Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Fountains, ponds, and streams that add tranquility
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Lighting Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhance beauty and safety with strategic outdoor lighting
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Drainage Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Solve water issues while maintaining aesthetic appeal
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Why Our Designs Stand Out</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Designs tailored to Niagara's unique climate and growing conditions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Balance of aesthetics, functionality, and maintenance requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Sustainable practices and native plant integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Comprehensive plans that can be installed in phases if desired
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    One team from design through installation ensures vision becomes reality
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Design Your Dream Landscape
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Schedule a consultation to discuss your vision. We'll create a custom design that
            transforms your outdoor space.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/quote">
              Schedule a Design Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
