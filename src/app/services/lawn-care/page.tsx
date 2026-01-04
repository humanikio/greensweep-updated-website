import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lawn Care & Maintenance | Greensweep Niagara',
  description: 'Professional lawn care and maintenance services in the Niagara Region. Weekly mowing, fertilization, aeration, and more.',
};

export default function LawnCarePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_4322.JPEG"
            alt="Professional lawn care services"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Lawn Care & Maintenance
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Keep your lawn healthy, green, and beautiful year-round with our expert care.
            </p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              A beautiful lawn is the foundation of any great landscape. At Greensweep Niagara, we
              provide comprehensive lawn care services tailored to the unique needs of your property
              and the Niagara climate. From regular maintenance to specialized treatments, we ensure
              your lawn stays healthy and vibrant throughout the seasons.
            </p>

            <h2 className="text-3xl font-bold mb-8">Our Lawn Care Services Include:</h2>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Weekly Mowing & Trimming</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional mowing at the optimal height for your grass type, plus precision
                    edging and trimming around obstacles.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Fertilization Programs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Customized fertilization schedules to promote healthy growth, deep root
                    development, and rich green color.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Aeration Services</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Core aeration to reduce soil compaction and improve water, nutrient, and oxygen
                    flow to grass roots.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Weed Control</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Targeted treatments to eliminate dandelions, crabgrass, and other invasive weeds
                    without harming your lawn.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Overseeding & Repair</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fill in bare patches and thicken your lawn with premium grass seed suited to your
                    property conditions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span>Seasonal Cleanup</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Spring and fall cleanup services including leaf removal, debris clearing, and lawn
                    preparation for the season ahead.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Lawn Care Service?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Professional, commercial-grade equipment for superior results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Consistent, reliable service on your schedule
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Environmentally responsible practices and products
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Expert knowledge of Niagara Region grass types and climate
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Satisfaction guaranteed - we don't rest until you're happy
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
            Ready for a Lawn You'll Love?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get a free quote for our lawn care services. We'll assess your property and create a
            custom maintenance plan.
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
