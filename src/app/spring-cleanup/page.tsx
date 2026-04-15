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
import { SpringCleanupFormModal } from '@/components/spring-cleanup-form-modal';
import {
  ArrowRight,
  Percent,
  Leaf,
  CheckCircle,
  Star,
  Calendar,
  Scissors,
  Sparkles,
  Clock,
  Users,
  Sun,
  Home,
  Shrub,
  Trash2,
  MapPin,
} from 'lucide-react';

export default function SpringCleanupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Modal */}
      <SpringCleanupFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* SECTION 1: Hero */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 scale-175 md:scale-100">
          <Image
            src="/project-photos/IMG_3843.JPEG"
            alt="Beautiful spring cleanup with fresh mulch and trimmed beds"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
              <Calendar className="inline h-4 w-4 mr-2" />
              BUNDLE OFFER ENDS MAY 20, 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Your Yard Survived Winter. Now Let's Make It Shine.
            </h1>
            <p className="text-xl md:text-2xl mb-6 md:mb-8 text-white/90">
              Save 10% when you bundle your spring cleanup with mulch. Cleanup, trimming, edging,
              and fresh mulch — all in one visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-lg px-8"
                onClick={() => setIsModalOpen(true)}
              >
                Claim 10% Off the Spring Bundle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Limited time offer. Expect a call within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: What's Included in the Bundle */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's in the Spring Cleanup Bundle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything your yard needs to go from winter-worn to show-ready — bundled together
                and 10% off.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0 mt-0.5">
                      <Leaf className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Full Yard Cleanup</h3>
                      <p className="text-sm text-muted-foreground">
                        Removal of leaves, debris, and dead material from your entire property.
                        Beds, lawn, and hard surfaces — everything gets cleared out.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0 mt-0.5">
                      <Scissors className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Shrub & Hedge Trimming</h3>
                      <p className="text-sm text-muted-foreground">
                        Overgrown shrubs and hedges shaped back into form. Clean cuts that promote
                        healthy spring growth.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0 mt-0.5">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Bed Edging</h3>
                      <p className="text-sm text-muted-foreground">
                        Crisp, defined edges cut along all garden beds — the detail that makes
                        everything look intentional and polished.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0 mt-0.5">
                      <Shrub className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Fresh Mulch Application</h3>
                      <p className="text-sm text-muted-foreground">
                        Premium mulch spread across all your beds. Locks in moisture, suppresses
                        weeds, and gives your yard that fresh, finished look.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/project-photos/IMG_3839.JPEG"
                  alt="Garden bed with fresh mulch and spring flowers"
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
                Get the Bundle for 10% Off
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Bundle - Value Props */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Bundle Your Spring Cleanup + Mulch?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            One crew, one visit, one price — and you save 10%.
          </p>
          <div className="grid gap-4 md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Percent className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Save 10% on Everything</h3>
                <p className="text-sm text-muted-foreground">
                  Cleanup and mulch booked separately costs more. Bundle them before May 20 and
                  the whole job is 10% off.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Done in One Visit</h3>
                <p className="text-sm text-muted-foreground">
                  No juggling multiple appointments. Our crew handles the full cleanup and mulch in
                  a single visit so your yard is ready fast.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Sun className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Start the Season Right</h3>
                <p className="text-sm text-muted-foreground">
                  Mulch applied right after cleanup gives your beds maximum weed suppression and
                  moisture retention all season long.
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
              Lock In 10% Off Before May 20
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Urgency / Deadline */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Calendar className="inline h-4 w-4 mr-2" />
                  LIMITED TIME — ENDS MAY 20
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Spring Fills Up Fast. Don't Get Stuck on the Waitlist.
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Every year, homeowners wait too long and end up scrambling for a crew in May. Book
                  your spring cleanup bundle now and you'll be the first yard on the street that
                  looks ready for summer.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>10% off</strong> when you bundle cleanup + mulch before May 20
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Limited spots available — we book on a first-come, first-served basis
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      Expect a call within minutes to lock in your date
                    </span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Your Spring Bundle Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/project-photos/IMG_4042.JPEG"
                  alt="Freshly mulched garden bed with trimmed shrubs"
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
              Here's what Niagara homeowners are saying after working with GreenSweep.
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
                  <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  Full-Service Crew
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Cleanup, trimming, edging, and mulch — all handled.
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
                  We know the local plants, soil, and climate.
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
                    src="/project-photos/IMG_3843.JPEG"
                    alt="Front yard with fresh mulch and Japanese maple"
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
                    alt="Cozy garden corner with bench and fresh mulch"
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
                    src="/project-photos/IMG_4043.JPEG"
                    alt="Mulched garden bed with landscaping"
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

      {/* SECTION 6: Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Your Yard Looks Like After a GreenSweep Spring Cleanup
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Winter's mess is gone. Your property looks like it belongs in a magazine.
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Trash2 className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      No More Winter Debris
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Leaves, branches, and dead material cleared from every corner of your
                      property.
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
                      Clean, Sharp Edges
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Defined bed lines that make your entire landscape look crisp and intentional.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Scissors className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      Shrubs in Shape
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Overgrown hedges and shrubs trimmed back to promote healthy, full growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Shrub className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      Rich, Fresh Mulch
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Premium mulch that keeps weeds down, locks moisture in, and looks incredible.
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
                      Instant Curb Appeal
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Your property goes from winter-worn to the best-looking yard on the street.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Leaf className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                      Healthier Plants All Season
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Proper cleanup and mulch sets your garden up for stronger growth through
                      summer.
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
              Get My Yard Spring-Ready
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7: Project Gallery */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            See the GreenSweep Difference
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Real yards. Real Niagara homes. This is what a professional spring cleanup looks like.
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
                    src: '/project-photos/IMG_3843.JPEG',
                    alt: 'Front yard with fresh mulch and trimmed beds',
                    caption: 'Spring Cleanup + Mulch — Front Yard',
                  },
                  {
                    src: '/project-photos/IMG_3839.JPEG',
                    alt: 'Garden bed with tulips and fresh dark mulch',
                    caption: 'Mulch Application with Spring Flowers',
                  },
                  {
                    src: '/project-photos/IMG_3838.JPEG',
                    alt: 'Garden corner with fresh mulch and perennials',
                    caption: 'Garden Bed Cleanup & Mulch',
                  },
                  {
                    src: '/project-photos/IMG_4042.JPEG',
                    alt: 'Landscaped bed with mulch and trimmed shrubs',
                    caption: 'Shrub Trimming & Mulch Installation',
                  },
                  {
                    src: '/project-photos/IMG_4043.JPEG',
                    alt: 'Mulched garden bed with shaped shrubs',
                    caption: 'Complete Spring Transformation',
                  },
                  {
                    src: '/project-photos/IMG_6586.JPEG',
                    alt: 'Backyard landscaping with mulched beds',
                    caption: 'Backyard Spring Cleanup',
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

      {/* SECTION 8: FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Everything you need to know about the spring cleanup bundle.
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What exactly is included in the spring cleanup bundle?
                </AccordionTrigger>
                <AccordionContent>
                  The bundle includes a complete yard cleanup (leaves, debris, dead material),
                  shrub and hedge trimming, bed edging along all garden beds, and fresh premium
                  mulch applied to all your beds. Everything your property needs to look its best
                  for spring — done in one visit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How much do I save with the bundle?
                </AccordionTrigger>
                <AccordionContent>
                  You save 10% off the total when you book spring cleanup and mulch together before
                  May 20, 2026. The exact dollar amount depends on your property size — we'll
                  give you a quote when we call you back.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How fast will I hear back after signing up?
                </AccordionTrigger>
                <AccordionContent>
                  Fast. Expect a phone call within minutes of submitting the form. We'll confirm
                  your details, give you a quote, and get your service scheduled.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Can I get just the cleanup without mulch?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely — we offer spring cleanup as a standalone service too. But the 10%
                  bundle discount only applies when you combine cleanup with mulch before May 20.
                  It's the best value and the best results for your yard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  What type of mulch do you use?
                </AccordionTrigger>
                <AccordionContent>
                  We use premium-quality mulch that's ideal for Niagara's climate. We can discuss
                  colour and type options when we call you to confirm your booking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  What areas do you serve?
                </AccordionTrigger>
                <AccordionContent>
                  We serve the entire Niagara Region, including St. Catharines, Niagara Falls,
                  Welland, Thorold, Niagara-on-the-Lake, Fort Erie, Fonthill, Grimsby, Beamsville,
                  and surrounding areas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  When does this offer expire?
                </AccordionTrigger>
                <AccordionContent>
                  The 10% spring cleanup bundle offer expires May 20, 2026. Sign up before then
                  to lock in the discount. After that, cleanup and mulch are still available but
                  priced separately.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => setIsModalOpen(true)}
              >
                I'm Ready — Book My Spring Bundle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calendar className="inline h-4 w-4 mr-2" />
            BUNDLE OFFER ENDS MAY 20, 2026
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Yard Deserves a Fresh Start. So Do You.
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            30 seconds to sign up. A phone call within minutes. Your entire yard cleaned up,
            trimmed, edged, and mulched — with 10% off the whole thing.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setIsModalOpen(true)}
          >
            Claim 10% Off Before May 20
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Serving the entire Niagara Region. Limited spots available.
          </p>
        </div>
      </section>
    </div>
  );
}
