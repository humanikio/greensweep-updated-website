import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Award, Users, Heart, Clock, Leaf, Handshake } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Greensweep Niagara',
  description: 'Learn about Greensweep Niagara, a locally-owned landscaping company founded in 2024, serving the Niagara Region with personalized, quality landscaping services.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_3843.JPEG"
            alt="About Greensweep Niagara"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-white/90">
              Your locally-owned landscaping partner in the Niagara Region.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2024, Greensweep Niagara is a locally-owned landscaping company born from
                a passion for creating beautiful outdoor spaces. We started with a simple goal: to
                provide the Niagara Region with high-quality, personalized landscaping services that
                prioritize both aesthetics and functionality.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We take a personalized approach to every project. Whether you need regular lawn
                maintenance, a complete landscape design, or hardscaping services, we work closely
                with you to understand your vision and bring it to life. No shortcuts—just quality
                work that speaks for itself.
              </p>
              <p className="text-lg text-muted-foreground">
                Our focus is on creating clean, low-maintenance, and functional landscapes that your
                family will enjoy for years to come. We believe every outdoor space has potential,
                and we're here to help you unlock it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Sets Us Apart</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Locally Owned</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    As a local Niagara business, we're invested in our community. We take pride in
                    helping our neighbors create beautiful outdoor spaces.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Handshake className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Personalized Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every project is unique. We listen to your needs, understand your vision, and
                    tailor our services to fit your specific goals and budget.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Quality First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We never cut corners. From materials to craftsmanship, we deliver work that
                    exceeds expectations and stands the test of time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Leaf className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Sustainable Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We use environmentally responsible methods and recommend native plants to create
                    landscapes that are beautiful and eco-friendly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Reliable Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We show up on time, communicate clearly, and do what we say we'll do. Reliability
                    is the foundation of our business.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Customer Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your happiness is our success. We're not done until you're completely satisfied
                    with the results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Promise</h2>
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-foreground italic mb-6">
                "We promise to treat your property as if it were our own, delivering honest work,
                fair pricing, and results that make you proud to come home."
              </p>
              <p className="text-muted-foreground">
                — The Greensweep Niagara Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Serving the Niagara Region</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're proud to bring our expertise to communities throughout the Niagara Region,
              including:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-left">
              {[
                'St. Catharines',
                'Niagara Falls',
                'Welland',
                'Thorold',
                'Niagara-on-the-Lake',
                'Port Colborne',
                'Fort Erie',
                'Grimsby',
                'Lincoln',
                'Pelham',
                'Fonthill',
                'Vineland',
              ].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to transform your outdoor space? Get in touch for a free consultation and
            discover what Greensweep Niagara can do for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
