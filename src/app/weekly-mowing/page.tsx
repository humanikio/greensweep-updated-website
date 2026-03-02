'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { WeeklyMowingFormModal } from '@/components/weekly-mowing-form-modal';
import {
  ArrowRight,
  DollarSign,
  Zap,
  Users,
  CheckCircle,
  Star,
  Calendar,
  Scissors,
  Sparkles,
  Clock,
  Leaf,
  Sun,
  Home,
  Wrench,
  PhoneCall,
  MapPin,
} from 'lucide-react';

export default function WeeklyMowingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Modal */}
      <WeeklyMowingFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* SECTION 1: Hero - Pain point lead, offer as supporting hook */}
      <section className="relative h-[600px] lg:h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_4322.JPEG"
            alt="Beautiful professionally maintained lawn with perfect stripes"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-3xl text-white">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="inline h-4 w-4 mr-2" />
              OFFER ENDS MAY 1, 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tired of Spending Your Weekends Behind a Mower?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Get $25 off your first professional mow. We'll be at your door within 48 hours — and
              your weekends are yours again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-lg px-8"
                onClick={() => setIsModalOpen(true)}
              >
                Claim $25 Off Your First Mow
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/70">
              No contracts. No commitment. Expect a call within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Every Mow Includes - Service specifics */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Every Mow Includes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This isn't a quick pass with a push mower. Every visit is a full-service treatment
                for your lawn.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0 mt-0.5">
                      <Scissors className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Professional Mowing</h3>
                      <p className="text-sm text-muted-foreground">
                        Cut at the optimal height for your grass type using commercial-grade
                        equipment. Clean lines, even cut, every time.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0 mt-0.5">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Precision Edging</h3>
                      <p className="text-sm text-muted-foreground">
                        Crisp, defined edges along walkways, driveways, and garden beds. It's the
                        detail that makes a lawn look finished.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0 mt-0.5">
                      <Leaf className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">String Trimming</h3>
                      <p className="text-sm text-muted-foreground">
                        Around fences, trees, garden features, and anything the mower can't reach.
                        No patches left behind.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Full Cleanup</h3>
                      <p className="text-sm text-muted-foreground">
                        Clippings blown off your driveway, walkways, and patio. We leave your
                        property cleaner than we found it.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/project-photos/IMG_3760.JPEG"
                  alt="Freshly mowed lawn with clean stripes and edging"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => setIsModalOpen(true)}
              >
                Try It for $25 Off
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Three Key Offerings - Value Props */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Three Ways We Make It Easy to Switch
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We removed every excuse not to try professional lawn care.
          </p>
          <div className="grid gap-4 md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">$25 Off Your First Mow</h3>
                <p className="text-sm text-muted-foreground">
                  See the difference a professional crew makes — without paying full price. Love
                  it? We'll set you up weekly. Don't? No hard feelings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">At Your Door in 48 Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Sign up now and we'll be mowing your lawn within 48 hours, weather permitting.
                  Expect a call within minutes of signing up to get you booked in.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Neighbourhood Savings</h3>
                <p className="text-sm text-muted-foreground">
                  Get your neighbours on board and everyone saves — not just once, but every single
                  week. More on this below.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Neighbourhood Street Special - Dedicated section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <MapPin className="inline h-4 w-4 mr-2" />
                  NEIGHBOURHOOD STREET SPECIAL
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The More Neighbours That Join, the More Everyone Saves
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Here's how it works: when multiple homes on the same street sign up for weekly
                  mowing, we pass the efficiency savings on to everyone. Less drive time between
                  jobs means lower costs for your whole block.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      The discount applies <strong>every week</strong>, not just the first mow
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Savings grow as more neighbours join — the whole street benefits
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Everyone stays on the same schedule — your block always looks sharp
                    </span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setIsModalOpen(true)}
                >
                  Sign Up and Rally Your Street
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/project-photos/IMG_3759.JPEG"
                  alt="Professionally mowed lawn on a residential street"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Trust + Testimonials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Don't Take Our Word for It
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Here's what Niagara homeowners are saying after switching to GreenSweep.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4 mb-12">
              <div className="text-center">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Locally Owned</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Born and raised in Niagara. We're your neighbours.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Star className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  5-Star on Google
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Perfect rating from real customers.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  Same Crew Weekly
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Your dedicated team learns your property.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Leaf className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  Niagara Experts
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  We know the local grass types and climate.
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              <Card className="bg-background overflow-hidden pb-0 flex flex-col">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg mb-4">
                    "Carter and his team were flexible to my changing needs over the season and kept
                    my yard in tip top shape. From garden prep and mulch to fall clean up they took
                    care of all my summer chores with excellent care and attention to detail."
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">
                    — Jordan Duffy, St. Catharines
                  </cite>
                </CardContent>
                <div className="relative min-h-52 flex-1 w-full hidden md:block">
                  <Image
                    src="/project-photos/IMG_3839.JPEG"
                    alt="Garden bed with tulips and fresh mulch"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>

              <Card className="bg-background overflow-hidden pb-0 flex flex-col">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg mb-4">
                    "Highly recommend Green Sweep Niagara! As advertised. Punctual, professional and
                    go above and beyond expectations. Already reserved our spring cleaning and weekly
                    maintenance for next season!"
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">
                    — Jason Talyor, St. Catharines
                  </cite>
                </CardContent>
                <div className="relative min-h-52 flex-1 w-full hidden md:block">
                  <Image
                    src="/project-photos/IMG_4322.JPEG"
                    alt="Perfectly striped lawn with professional finish"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>

              <Card className="bg-background overflow-hidden pb-0 flex flex-col">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg mb-4">
                    "The GreenSweep guys have done a number of jobs at our place and they have
                    always turned out great."
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">
                    — Bruno Bartel, St. Catharines
                  </cite>
                </CardContent>
                <div className="relative min-h-52 flex-1 w-full hidden md:block">
                  <Image
                    src="/project-photos/IMG_3838.JPEG"
                    alt="Cozy garden corner with bench and perennials"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>

              <Card className="bg-background overflow-hidden pb-0 flex flex-col">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg mb-4">
                    "Fast prompt service, worked in the rain to get the job done, and the job was
                    completed right! With Carter and crew you will not be disappointed."
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">
                    — Randy Arsenault, St. Catharines
                  </cite>
                </CardContent>
                <div className="relative min-h-52 flex-1 w-full hidden md:block">
                  <Image
                    src="/project-photos/2707940586657463592.jpg"
                    alt="Front yard landscaping with Japanese maple"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => setIsModalOpen(true)}
              >
                Join Our Happy Customers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Benefits - Specific to GreenSweep */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Your Weekends Look Like After You Switch
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            No more dragging the mower out of the garage. No more sunburns. No more "I'll get to
            it tomorrow."
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Sun className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      Saturdays Are Yours
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      BBQ with the family, hit the lake, or just do nothing. The lawn's handled.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Sparkles className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      Pro-Level Finish
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Professional stripes, clean edges, and a finish your push mower can't match.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Calendar className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      Never Falls Behind
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Same day every week. No more overgrown lawn because life got busy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Home className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      Best Lawn on the Block
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Consistent professional care means your property always looks its best.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Wrench className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      Ditch the Gas Runs
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      No more fuel, oil changes, blade sharpening, or mower breakdowns to deal
                      with.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <PhoneCall className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      One Less Thing to Think About
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Set it and forget it. We show up on schedule — you don't even need to be
                      home.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90"
              onClick={() => setIsModalOpen(true)}
            >
              Yes, I Want My Weekends Back
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7: Project Gallery - Visual proof */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            See the GreenSweep Difference
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Real lawns. Real Niagara homes. This is what weekly professional mowing looks like.
          </p>
          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {[
                  {
                    src: '/project-photos/IMG_4322.JPEG',
                    alt: 'Professional striped front lawn',
                    caption: 'Weekly Lawn Care — Front Yard',
                  },
                  {
                    src: '/project-photos/IMG_3760.JPEG',
                    alt: 'Freshly mowed lawn with clean stripes',
                    caption: 'Residential Lawn Maintenance',
                  },
                  {
                    src: '/project-photos/IMG_3759.JPEG',
                    alt: 'Striped lawn from street view',
                    caption: 'Professional Mowing Results',
                  },
                  {
                    src: '/project-photos/IMG_4140.JPEG',
                    alt: 'Backyard lawn with clean mowing stripes',
                    caption: 'Backyard Lawn Care',
                  },
                  {
                    src: '/project-photos/IMG_5616.JPEG',
                    alt: 'Crew on site with freshly striped lawn',
                    caption: 'Our Crew at Work',
                  },
                ].map((project, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p className="text-white font-semibold text-lg">{project.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => setIsModalOpen(true)}
              >
                Get Results Like These
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ - Handle objections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Everything you need to know before signing up.
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What exactly is included in every mow?
                </AccordionTrigger>
                <AccordionContent>
                  Every visit includes a full professional mow at the right height for your grass
                  type, precision edging along walkways, driveways, and garden beds, string trimming
                  around fences, trees, and obstacles, and a complete cleanup — clippings blown off
                  all hard surfaces. Your first mow gets $25 off the regular price.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How fast will I hear back after signing up?
                </AccordionTrigger>
                <AccordionContent>
                  Fast. Expect a phone call within minutes of submitting the form. We'll confirm
                  your details, answer any questions, and get your first mow scheduled — typically
                  within 48 hours, weather permitting.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Is there a contract or commitment?
                </AccordionTrigger>
                <AccordionContent>
                  No contracts and no commitments. The $25 off is a one-time introductory offer to
                  let you try us out. If you love the results (and we think you will), we can set you
                  up on a regular weekly schedule at competitive rates. If not, no hard feelings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How does the Neighbourhood Street Special work?
                </AccordionTrigger>
                <AccordionContent>
                  When multiple homes on the same street sign up for weekly mowing, everyone gets a
                  discount — and it applies every single week as long as all neighbours stay on their
                  packages. The more neighbours that join, the bigger the savings for everyone. Get
                  your street together and ask us for the group pricing details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  What areas do you serve?
                </AccordionTrigger>
                <AccordionContent>
                  We serve the entire Niagara Region, including St. Catharines, Niagara Falls,
                  Welland, Thorold, Niagara-on-the-Lake, Fort Erie, Fonthill, Grimsby, Beamsville,
                  and surrounding areas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  What if the weather is bad on my scheduled day?
                </AccordionTrigger>
                <AccordionContent>
                  If we can't mow on your scheduled day due to rain or storms, we'll reschedule for
                  the next available day and let you know in advance. Your lawn never goes more than
                  a few extra days between cuts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  When does this offer expire?
                </AccordionTrigger>
                <AccordionContent>
                  The $25 off first mow offer runs until May 1, 2026. Sign up before then to lock in
                  the introductory discount.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => setIsModalOpen(true)}
              >
                I'm Ready — Let's Do This
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Final CTA - Close with real deadline */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calendar className="inline h-4 w-4 mr-2" />
            OFFER ENDS MAY 1, 2026
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Lawn Deserves Better. So Do Your Weekends.
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            30 seconds to sign up. A phone call within minutes. Your first mow within 48 hours —
            with $25 off. What are you waiting for?
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setIsModalOpen(true)}
          >
            Claim Your $25 Off Before May 1
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Serving the entire Niagara Region. No contracts, no commitment.
          </p>
        </div>
      </section>
    </div>
  );
}
