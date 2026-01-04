import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ProjectCarousel } from '@/components/project-carousel';
import {
  ArrowRight,
  Wrench,
  Palette,
  Building2,
  Star,
  Phone,
  Mail,
  MapPin,
  Users,
  Leaf,
  Clock,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_4322.JPEG"
            alt="Beautiful professionally maintained lawn"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Stunning Landscapes To Inspire Your Family
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Clean, low-maintenance, functional landscapes across the Niagara Region
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/portfolio">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link href="/quote">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About/Intro Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Local Landscaping Experts
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2024, Greensweep Niagara is a locally-owned landscaping company
                dedicated to transforming outdoor spaces across the Niagara Region.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We take a personalized approach to every project, focusing on creating clean,
                low-maintenance, and functional landscapes that your family will enjoy for years to come.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="inline-block p-3 bg-accent/10 rounded-lg mb-2">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-sm font-medium">Locally Owned</p>
                </div>
                <div className="text-center">
                  <div className="inline-block p-3 bg-accent/10 rounded-lg mb-2">
                    <Leaf className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-sm font-medium">Eco-Friendly</p>
                </div>
                <div className="text-center">
                  <div className="inline-block p-3 bg-accent/10 rounded-lg mb-2">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-sm font-medium">Reliable</p>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/project-photos/IMG_3843.JPEG"
                alt="Elegant front entry landscaping"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            From regular lawn maintenance to complete landscape transformations, we offer
            comprehensive services tailored to your needs.
          </p>
          <div className="grid gap-4 sm:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Lawn Care Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src="/project-photos/IMG_3760.JPEG"
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
                  src="/project-photos/IMG_4043.JPEG"
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
                  src="/project-photos/IMG_6586.JPEG"
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
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Recent Projects</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Take a look at some of our latest landscape transformations across the Niagara Region.
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 max-w-6xl mx-auto">
            <div className="relative h-48 sm:h-72 rounded-xl overflow-hidden group">
              <Image
                src="/project-photos/IMG_6614.JPEG"
                alt="Backyard deck and garden retreat"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white">
                <p className="text-xs sm:text-sm text-white/80">St. Catharines</p>
                <h3 className="font-semibold text-sm sm:text-base">Backyard Retreat</h3>
              </div>
            </div>
            <div className="relative h-48 sm:h-72 rounded-xl overflow-hidden group">
              <Image
                src="/project-photos/IMG_3839.JPEG"
                alt="Tulip garden bed installation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white">
                <p className="text-xs sm:text-sm text-white/80">Niagara Falls</p>
                <h3 className="font-semibold text-sm sm:text-base">Garden Beds</h3>
              </div>
            </div>
            <div className="relative h-48 sm:h-72 rounded-xl overflow-hidden group col-span-2 lg:col-span-1">
              <Image
                src="/project-photos/IMG_0866.jpeg"
                alt="Front entry paver walkway"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white">
                <p className="text-xs sm:text-sm text-white/80">Welland</p>
                <h3 className="font-semibold text-sm sm:text-base">Paver Walkway</h3>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Work In Action</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Real results from real Niagara homeowners. See the quality we deliver.
          </p>
          <div className="max-w-4xl mx-auto">
            <ProjectCarousel />
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Have questions? We have answers. Here are some of the most common questions we receive.
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What areas do you serve?
                </AccordionTrigger>
                <AccordionContent>
                  We proudly serve the entire Niagara Region, including St. Catharines, Niagara Falls,
                  Welland, Thorold, Niagara-on-the-Lake, Fort Erie, Port Colborne, and surrounding areas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Do you offer free estimates?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We offer free, no-obligation consultations and estimates for all our services.
                  Contact us to schedule a visit to your property.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How do I get started with a landscaping project?
                </AccordionTrigger>
                <AccordionContent>
                  Simply give us a call or fill out our online quote request form. We'll schedule
                  a consultation to discuss your vision, assess your property, and provide a detailed
                  proposal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What sets Greensweep apart from other landscapers?
                </AccordionTrigger>
                <AccordionContent>
                  We take a personalized approach to every project. As a locally-owned company, we
                  prioritize quality over shortcuts and focus on creating clean, low-maintenance,
                  functional landscapes that exceed expectations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/faq">
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what homeowners across the Niagara Region
            have to say about working with us.
          </p>
          <div className="grid gap-4 sm:gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
            <Card className="bg-secondary">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-lg mb-3 sm:mb-4">
                  "Carter and his team were flexible to my changing needs over the season and kept my yard in tip top shape. Excellent care and attention to detail."
                </blockquote>
                <cite className="not-italic text-muted-foreground text-sm">
                  — Jordan Duffy, St. Catharines
                </cite>
              </CardContent>
            </Card>

            <Card className="bg-secondary">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-lg mb-3 sm:mb-4">
                  "Highly recommend Green Sweep Niagara! Punctual, professional and go above and beyond expectations."
                </blockquote>
                <cite className="not-italic text-muted-foreground text-sm">
                  — Jason Talyor, St. Catharines
                </cite>
              </CardContent>
            </Card>

            <Card className="bg-secondary">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-lg mb-3 sm:mb-4">
                  "The Greensweep guys have done a number of jobs at our place and they have always turned out great."
                </blockquote>
                <cite className="not-italic text-muted-foreground text-sm">
                  — Bruno Bartel, St. Catharines
                </cite>
              </CardContent>
            </Card>

            <Card className="bg-secondary">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-lg mb-3 sm:mb-4">
                  "Fast prompt service, worked in the rain to get the job done, and the job was completed right!"
                </blockquote>
                <cite className="not-italic text-muted-foreground text-sm">
                  — Randy Arsenault, St. Catharines
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform your outdoor space? Contact us today for a free consultation.
                We're here to answer your questions and help bring your vision to life.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:9059318022"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold">(905) 931-8022</p>
                  </div>
                </a>
                <a
                  href="mailto:greensweepniagara@gmail.com"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-semibold">greensweepniagara@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Service Area</p>
                    <p className="font-semibold">Niagara Region, Ontario</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link href="/quote">
                  Request a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
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
