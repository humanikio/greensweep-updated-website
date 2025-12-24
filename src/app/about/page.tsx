import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Award, Users, Heart, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Greensweep Niagara',
  description: 'Learn about Greensweep Niagara, your trusted landscaping partner in the Niagara Region with years of experience and dedication to excellence.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/generated/hero-backyard-patio-sunset.png"
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
              Transforming Niagara Region properties into natural paradises since day one.
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
                Greensweep Niagara was founded with a simple mission: to create outdoor spaces that
                bring joy, beauty, and functionality to every property we touch. What started as a
                passion for landscaping has grown into a trusted name across the Niagara Region.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every property has potential—whether it's a small residential lawn or
                a sprawling commercial landscape. Our team combines horticultural expertise with
                artistic vision and practical craftsmanship to deliver results that exceed
                expectations.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to serve homeowners, property managers, and businesses throughout
                St. Catharines, Niagara Falls, Welland, and the surrounding areas. Each project we
                complete is a testament to our commitment to quality, sustainability, and customer
                satisfaction.
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Expert Craftsmanship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our team brings decades of combined experience in landscaping, horticulture, and
                    hardscaping to every project.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Customer First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our priority. We listen to your needs and work
                    collaboratively to bring your vision to life.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Sustainable Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We use environmentally responsible methods and native plants whenever possible to
                    support local ecosystems.
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
                    Count on us to show up on time, communicate clearly, and deliver on our promises
                    every single time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-5xl font-bold text-accent mb-2">500+</div>
                <div className="text-lg text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">100%</div>
                <div className="text-lg text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">10+</div>
                <div className="text-lg text-muted-foreground">Years Experience</div>
              </div>
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
                'Niagara-on-the-Lake',
                'Port Colborne',
                'Fort Erie',
                'Grimsby',
                'Lincoln',
                'Pelham',
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
