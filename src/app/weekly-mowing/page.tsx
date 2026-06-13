'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
} from 'lucide-react';
import { Eyebrow, SectionHeading, whiteBtn, floatingCard } from '@/components/site-ui';

const ctaBtn =
  'bg-clay text-white hover:bg-clay/90 rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.16em]';

const mowIncludes = [
  {
    icon: Scissors,
    title: 'Professional Mowing',
    body: 'Cut at the optimal height for your grass type using commercial-grade equipment. Clean lines, even cut, every time.',
  },
  {
    icon: Sparkles,
    title: 'Precision Edging',
    body: "Crisp, defined edges along walkways, driveways, and garden beds. It's the detail that makes a lawn look finished.",
  },
  {
    icon: Leaf,
    title: 'String Trimming',
    body: "Around fences, trees, garden features, and anything the mower can't reach. No patches left behind.",
  },
  {
    icon: CheckCircle,
    title: 'Full Cleanup',
    body: 'Clippings blown off your driveway, walkways, and patio. We leave your property cleaner than we found it.',
  },
];

const threeWays = [
  {
    icon: DollarSign,
    title: '$25 Off Your First Mow',
    body: "See the difference a professional crew makes, without paying full price. Love it? We'll set you up weekly. Don't? No hard feelings.",
  },
  {
    icon: Zap,
    title: 'At Your Door in 48 Hours',
    body: "Sign up now and we'll be mowing your lawn within 48 hours, weather permitting. Expect a call within minutes of signing up to get you booked in.",
  },
  {
    icon: Users,
    title: 'Neighbourhood Savings',
    body: 'Get your neighbours on board and everyone saves, not just once, but every single week. More on this below.',
  },
];

const trustBadges = [
  { icon: Users, title: 'Locally Owned', body: "Born and raised in Niagara. We're your neighbours." },
  { icon: Star, title: '5-Star on Google', body: 'Perfect rating from real customers.' },
  { icon: Clock, title: 'Same Crew Weekly', body: 'Your dedicated team learns your property.' },
  { icon: Leaf, title: 'Niagara Experts', body: 'We know the local grass types and climate.' },
];

const testimonials = [
  {
    quote:
      'Carter and his team were flexible to my changing needs over the season and kept my yard in tip top shape. From garden prep and mulch to fall clean up they took care of all my summer chores with excellent care and attention to detail.',
    author: 'Jordan Duffy, St. Catharines',
    image: '/project-photos/IMG_3839.JPEG',
    imageAlt: 'Garden bed with tulips and fresh mulch',
  },
  {
    quote:
      'Highly recommend Green Sweep Niagara! As advertised. Punctual, professional and go above and beyond expectations. Already reserved our spring cleaning and weekly maintenance for next season!',
    author: 'Jason Talyor, St. Catharines',
    image: '/project-photos/IMG_4322.JPEG',
    imageAlt: 'Perfectly striped lawn with professional finish',
  },
  {
    quote:
      'The GreenSweep guys have done a number of jobs at our place and they have always turned out great.',
    author: 'Bruno Bartel, St. Catharines',
    image: '/project-photos/IMG_3838.JPEG',
    imageAlt: 'Cozy garden corner with bench and perennials',
  },
  {
    quote:
      'Fast prompt service, worked in the rain to get the job done, and the job was completed right!',
    author: 'Randy Arsenault, St. Catharines',
    image: '/project-photos/2707940586657463592.jpg',
    imageAlt: 'Garden with landscape lighting at dusk',
  },
];

const benefits = [
  {
    icon: Sun,
    title: 'Saturdays Are Yours',
    body: "BBQ with the family, hit the lake, or just do nothing. The lawn's handled.",
  },
  {
    icon: Sparkles,
    title: 'Pro-Level Finish',
    body: "Professional stripes, clean edges, and a finish your push mower can't match.",
  },
  {
    icon: Calendar,
    title: 'Never Falls Behind',
    body: 'Same day every week. No more overgrown lawn because life got busy.',
  },
  {
    icon: Home,
    title: 'Best Lawn on the Block',
    body: 'Consistent professional care means your property always looks its best.',
  },
  {
    icon: Wrench,
    title: 'Ditch the Gas Runs',
    body: 'No more fuel, oil changes, blade sharpening, or mower breakdowns to deal with.',
  },
  {
    icon: PhoneCall,
    title: 'One Less Thing to Think About',
    body: "Set it and forget it. We show up on schedule, so you don't even need to be home.",
  },
];

const galleryItems = [
  { src: '/project-photos/IMG_4322.JPEG', alt: 'Professional striped front lawn', caption: 'Weekly Lawn Care: Front Yard' },
  { src: '/project-photos/IMG_3760.JPEG', alt: 'Freshly mowed lawn with clean stripes', caption: 'Residential Lawn Maintenance' },
  { src: '/project-photos/IMG_3759.JPEG', alt: 'Striped lawn from street view', caption: 'Professional Mowing Results' },
  { src: '/project-photos/IMG_4140.JPEG', alt: 'Backyard lawn with clean mowing stripes', caption: 'Backyard Lawn Care' },
  { src: '/project-photos/IMG_5616.JPEG', alt: 'Crew on site with freshly striped lawn', caption: 'Our Crew at Work' },
];

const faqs = [
  {
    q: 'What exactly is included in every mow?',
    a: 'Every visit includes a full professional mow at the right height for your grass type, precision edging along walkways, driveways, and garden beds, string trimming around fences, trees, and obstacles, and a complete cleanup, with clippings blown off all hard surfaces. Your first mow gets $25 off the regular price.',
  },
  {
    q: 'How fast will I hear back after signing up?',
    a: "Fast. Expect a phone call within minutes of submitting the form. We'll confirm your details, answer any questions, and get your first mow scheduled, typically within 48 hours, weather permitting.",
  },
  {
    q: 'Is there a contract or commitment?',
    a: 'No contracts and no commitments. The $25 off is a one-time introductory offer to let you try us out. If you love the results (and we think you will), we can set you up on a regular weekly schedule at competitive rates. If not, no hard feelings.',
  },
  {
    q: 'How does the Neighbourhood Street Special work?',
    a: 'When multiple homes on the same street sign up for weekly mowing, everyone gets a discount, and it applies every single week as long as all neighbours stay on their packages. The more neighbours that join, the bigger the savings for everyone. Get your street together and ask us for the group pricing details.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire Niagara Region, including St. Catharines, Niagara Falls, Welland, Thorold, Niagara-on-the-Lake, Fort Erie, Fonthill, Grimsby, Beamsville, and surrounding areas.',
  },
  {
    q: 'What if the weather is bad on my scheduled day?',
    a: "If we can't mow on your scheduled day due to rain or storms, we'll reschedule for the next available day and let you know in advance. Your lawn never goes more than a few extra days between cuts.",
  },
  {
    q: 'When does this offer expire?',
    a: 'The $25 off first mow offer runs until May 1, 2026. Sign up before then to lock in the introductory discount.',
  },
];

export default function WeeklyMowingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="flex flex-col">
      <WeeklyMowingFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* SECTION 1: Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_4322.JPEG"
            alt="Beautiful professionally maintained lawn with perfect stripes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand/80" />
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-clay px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
              <Calendar className="h-4 w-4" />
              Offer Ends May 1, 2026
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.1] md:text-5xl lg:text-6xl">
              Tired of Spending Your Weekends Behind a Mower?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/85 md:text-xl">
              Get $25 off your first professional mow. We&apos;ll be at your door within 48 hours,
              and your weekends are yours again.
            </p>
            <div className="mt-9">
              <Button size="lg" onClick={openModal} className={ctaBtn}>
                Claim $25 Off Your First Mow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-4 text-sm text-white/70">
                No contracts. No commitment. Expect a call within minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Every Mow Includes */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Every Visit"
            title="What Every Mow Includes"
            intro="This isn't a quick pass with a push mower. Every visit is a full-service treatment for your lawn."
          />
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <ul className="space-y-5">
              {mowIncludes.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex items-start gap-5">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-normal">{title}</h3>
                    <p className="mt-1 leading-relaxed text-foreground/70">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="relative h-[420px] overflow-hidden rounded-sm">
              <Image
                src="/project-photos/IMG_3760.JPEG"
                alt="Freshly mowed lawn with clean stripes and edging"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-14 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Try It for $25 Off
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: Three Ways */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Easy To Switch"
            title="Three Ways We Make It Easy"
            intro="We removed every excuse not to try professional lawn care."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {threeWays.map(({ icon: Icon, title, body }) => (
              <div key={title} className={`${floatingCard} p-8`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-xl font-normal">{title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/70">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Neighbourhood Street Special */}
      <section className="bg-brand py-24 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-5 text-clay-soft">Neighbourhood Street Special</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                The More Neighbours That Join, The More Everyone Saves
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-white/80">
                Here&apos;s how it works: when multiple homes on the same street sign up for weekly
                mowing, we pass the efficiency savings on to everyone. Less drive time between jobs
                means lower costs for your whole block.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'The discount applies every week, not just the first mow',
                  'Savings grow as more neighbours join, and the whole street benefits',
                  'Everyone stays on the same schedule, so your block always looks sharp',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay-soft" />
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Button size="lg" onClick={openModal} className={whiteBtn}>
                  Sign Up and Rally Your Street
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-sm">
              <Image
                src="/project-photos/IMG_3759.JPEG"
                alt="Professionally mowed lawn on a residential street"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Trust + Testimonials */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Client Stories"
              title="Don't Take Our Word for It"
              intro="Here's what Niagara homeowners are saying after switching to GreenSweep."
            />

            <div className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {trustBadges.map(({ icon: Icon, title, body }) => (
                <div key={title} className="text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-sage/10 text-sage">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-base font-normal">{title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{body}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="flex flex-col overflow-hidden rounded-sm border border-brand/10 bg-white shadow-sm"
                >
                  <div className="p-8">
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <blockquote className="font-display text-lg font-light leading-relaxed text-foreground/80">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <cite className="mt-5 block text-sm uppercase tracking-wider text-muted-foreground">
                      — {t.author}
                    </cite>
                  </div>
                  <div className="relative hidden min-h-52 w-full flex-1 md:block">
                    <Image src={t.image} alt={t.imageAlt} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Button size="lg" onClick={openModal} className={ctaBtn}>
                Join Our Happy Customers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Benefits */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Life After Switching"
            title="What Your Weekends Look Like"
            intro="No more dragging the mower out of the garage. No more sunburns. No more 'I'll get to it tomorrow.'"
          />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className={`${floatingCard} p-7`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-lg font-normal">{title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/70">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Yes, I Want My Weekends Back
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7: Project Gallery */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="In The Field"
            title="See the GreenSweep Difference"
            intro="Real lawns. Real Niagara homes. This is what weekly professional mowing looks like."
          />
          <div className="mx-auto max-w-4xl">
            <Carousel
              opts={{ loop: true }}
              plugins={[
                Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {galleryItems.map((project) => (
                  <CarouselItem key={project.src}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                      <Image src={project.src} alt={project.alt} fill className="object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p className="font-display text-lg text-white">{project.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Get Results Like These
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Good To Know"
            title="Frequently Asked Questions"
            intro="Everything you need to know before signing up."
          />
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-sm border border-brand/10 bg-white px-6 shadow-sm transition-colors data-[state=open]:border-brand/25"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-normal hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-10 text-center">
              <Button size="lg" onClick={openModal} className={ctaBtn}>
                I&apos;m Ready, Let&apos;s Do This
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Final CTA */}
      <section className="bg-brand py-24 text-white md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-clay px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
            <Calendar className="h-4 w-4" />
            Offer Ends May 1, 2026
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-light leading-[1.2] md:text-4xl lg:text-5xl">
            Your Lawn Deserves Better. So Do Your Weekends.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-white/80">
            30 seconds to sign up. A phone call within minutes. Your first mow within 48 hours, with
            $25 off. What are you waiting for?
          </p>
          <div className="mt-9">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Claim Your $25 Off Before May 1
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/65">
            Serving the entire Niagara Region. No contracts, no commitment.
          </p>
        </div>
      </section>
    </div>
  );
}
