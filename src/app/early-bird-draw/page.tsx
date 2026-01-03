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
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { EarlyBirdFormModal } from '@/components/early-bird-form-modal';
import {
  ArrowRight,
  Gift,
  Calendar,
  CheckCircle,
  Star,
  FileText,
  Ticket,
  Trophy,
  Scissors,
  Sparkles,
  Clock,
  Users,
  Leaf,
  Sun,
  Home,
  Wrench,
} from 'lucide-react';

export default function EarlyBirdDrawPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Modal */}
      <EarlyBirdFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* SECTION 1: Hero - Hook + Primary CTA */}
      <section className="relative h-[600px] lg:h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/images/generated/pristine-lawn-garden-beds.png"
            alt="Beautiful professionally maintained lawn"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-3xl text-white">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="inline h-4 w-4 mr-2" />
              EARLY BIRD DRAW — Ends February 28, 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Win 50% Off Your Full-Season Lawn Care
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Save $715 on 26 weeks of professional lawn maintenance. Just request a free quote to enter!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-lg px-8"
                onClick={() => setIsModalOpen(true)}
              >
                Request a Quote to Enter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/70">
              No purchase necessary. Free quote, no strings attached.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: How It Works - Reduce friction immediately */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How to Enter</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Three simple steps — takes less than 2 minutes!
          </p>
          <div className="grid gap-4 md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <FileText className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Request a Quote</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out our quick form with your details.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Ticket className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Get Your Entry</h3>
                <p className="text-sm text-muted-foreground">
                  Every quote request is an automatic entry.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Trophy className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Win Big!</h3>
                <p className="text-sm text-muted-foreground">
                  One lucky winner gets 50% off — $715 in savings!
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
              Enter Now — It's Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: Prize Details - Combined (what they win + package details) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Gift className="inline h-4 w-4 mr-2" />
                THE PRIZE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Full-Season Lawn Care Package
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                26 weeks of professional lawn maintenance from May through October
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center mb-12">
              <div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold text-primary">$1,430</div>
                    <div className="text-muted-foreground">Package Value</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg border-2 border-accent">
                    <div className="text-3xl font-bold text-accent">$715</div>
                    <div className="text-foreground font-medium">Your Savings (50% OFF!)</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Season runs May 1 – October 31</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Weekly professional mowing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Precision edging along walkways and beds</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Thorough cleanup after each visit</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/generated/service-lawn-mowing.png"
                  alt="Professional lawn mowing service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Package breakdown cards */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              <Card className="text-center p-4 md:p-6">
                <CardContent className="pt-4 md:pt-6">
                  <div className="inline-block p-2 md:p-3 bg-accent/10 rounded-lg mb-3 md:mb-4">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Full Season</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">May 1 – October 31</p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 md:p-6">
                <CardContent className="pt-4 md:pt-6">
                  <div className="inline-block p-2 md:p-3 bg-accent/10 rounded-lg mb-3 md:mb-4">
                    <Scissors className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Weekly Mowing</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Professional cuts</p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 md:p-6">
                <CardContent className="pt-4 md:pt-6">
                  <div className="inline-block p-2 md:p-3 bg-accent/10 rounded-lg mb-3 md:mb-4">
                    <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Precision Edging</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Clean lines</p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 md:p-6">
                <CardContent className="pt-4 md:pt-6">
                  <div className="inline-block p-2 md:p-3 bg-accent/10 rounded-lg mb-3 md:mb-4">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Same Day</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Same crew weekly</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => setIsModalOpen(true)}
              >
                I Want to Save $715
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Trust + Testimonials - Combined */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Niagara Homeowners Trust Us
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We're not just another lawn care company. We're your neighbors, committed to making
              the Niagara Region more beautiful, one lawn at a time.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4 mb-16">
              <div className="text-center">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Locally Owned</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  We live and work in Niagara.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Leaf className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Quality First</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Every lawn gets full attention.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Reliable Service</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Same day, same crew, every week.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-3 md:p-4 bg-accent/10 rounded-full mb-3 md:mb-4">
                  <Star className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">5-Star Rated</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  See what customers say below.
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg mb-4">
                    "Carter and his team were flexible to my changing needs over the season and kept my
                    yard in tip top shape. From garden prep and mulch to fall clean up they took care
                    of all my summer chores with excellent care and attention to detail."
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">— Jordan Duffy, St. Catharines</cite>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg mb-4">
                    "Highly recommend Green Sweep Niagara! As advertised. Punctual, professional and go
                    above and beyond expectations. Already reserved our spring cleaning and weekly
                    maintenance for next season!"
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">— Jason Talyor, St. Catharines</cite>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg mb-4">
                    "The Greensweep guys have done a number of jobs at our place and they have always
                    turned out great."
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">— Bruno Bartel, St. Catharines</cite>
                </CardContent>
              </Card>

              <Card className="bg-background">
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
                  <cite className="not-italic text-muted-foreground">— Randy Arsenault, St. Catharines</cite>
                </CardContent>
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

      {/* SECTION 5: Pain Points / Benefits - Emotional connection */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Imagine Your Weekends Back
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional lawn care isn't just about a nice lawn — it's about freeing up your time
            for what matters most.
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <Sun className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Weekends Back</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      No more mowing. Enjoy family time.
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
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Pro Results</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Commercial-grade equipment.
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
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Consistent</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Same day every week.
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
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Curb Appeal</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Increase your home's value.
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
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">No Hassle</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      No equipment to maintain.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-3 md:p-6">
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0 w-fit">
                    <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Peace of Mind</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      We handle it all.
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

      {/* SECTION 6: Before/After Gallery - Visual proof */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">See The Difference</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our work speaks for itself. Here's what professional lawn care looks like.
          </p>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/generated/pristine-lawn-garden-beds.png"
              afterImage="/images/generated/pristine-lawn-garden-beds.png"
              beforeAlt="Before professional lawn care"
              afterAlt="After professional lawn care"
            />
            <p className="text-center text-muted-foreground mt-6">
              Drag the slider to compare. Professional results that make your neighbors jealous.
            </p>
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => setIsModalOpen(true)}
              >
                Transform My Lawn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ - Handle objections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Got questions about the Early Bird Draw? We've got answers.
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How do I enter the draw?
                </AccordionTrigger>
                <AccordionContent>
                  Simply request a free quote through our website before February 28, 2025. Every
                  quote request is an automatic entry into the draw — no purchase necessary!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  When will the winner be announced?
                </AccordionTrigger>
                <AccordionContent>
                  The draw will take place shortly after February 28, 2025. The winner will be
                  contacted directly via email and phone, and announced on our social media.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Do I have to buy anything to enter?
                </AccordionTrigger>
                <AccordionContent>
                  No! There's no purchase necessary. Just request a free quote and you're
                  automatically entered. The quote itself is also completely free and comes with no
                  obligation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What if I don't win?
                </AccordionTrigger>
                <AccordionContent>
                  Even if you don't win the draw, you'll still receive a personalized quote for our
                  services. Many of our customers find our regular pricing very competitive, and
                  we'd love the opportunity to earn your business.
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
                  How does the seasonal lawn care package work?
                </AccordionTrigger>
                <AccordionContent>
                  Our Full-Season Lawn Care Package runs from May 1 to October 31 (26 weeks). We
                  visit your property weekly on the same day to mow, edge, and clean up. The winner
                  receives 50% off the full package price of $1,430 — a savings of $715!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => setIsModalOpen(true)}
              >
                Ready to Enter? Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA - Close with urgency */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calendar className="inline h-4 w-4 mr-2" />
            Draw Closes February 28, 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss Your Chance to Win!</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Request your free quote today and you could save $715 on a full season of professional
            lawn care.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setIsModalOpen(true)}
          >
            Enter the Draw Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-6 text-sm text-primary-foreground/70">
            No purchase necessary. Open to Niagara Region residents. One entry per household.
          </p>
        </div>
      </section>
    </div>
  );
}
