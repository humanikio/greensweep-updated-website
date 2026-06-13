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
import { Eyebrow, SectionHeading, floatingCard } from '@/components/site-ui';

const ctaBtn =
  'bg-clay text-white hover:bg-clay/90 rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.16em]';

const steps = [
  { icon: FileText, n: '01', title: 'Request a Quote', body: 'Fill out our quick form with your details.' },
  { icon: Ticket, n: '02', title: 'Get Your Entry', body: 'Every quote request is an automatic entry.' },
  { icon: Trophy, n: '03', title: 'Win Big!', body: 'One lucky winner gets 50% off, a $715 saving!' },
];

const prizeFeatures = [
  'Season runs May 1 to October 31',
  'Weekly professional mowing',
  'Precision edging along walkways and beds',
  'Thorough cleanup after each visit',
];

const packageCards = [
  { icon: Calendar, title: 'Full Season', body: 'May 1 to October 31' },
  { icon: Scissors, title: 'Weekly Mowing', body: 'Professional cuts' },
  { icon: Sparkles, title: 'Precision Edging', body: 'Clean lines' },
  { icon: Clock, title: 'Same Day', body: 'Same crew weekly' },
];

const trustBadges = [
  { icon: Users, title: 'Locally Owned', body: 'We live and work in Niagara.' },
  { icon: Leaf, title: 'Quality First', body: 'Every lawn gets full attention.' },
  { icon: Clock, title: 'Reliable Service', body: 'Same day, same crew, every week.' },
  { icon: Star, title: '5-Star Rated', body: 'See what customers say below.' },
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
      'Fast prompt service, worked in the rain to get the job done, and the job was completed right! With Carter and crew you will not be disappointed.',
    author: 'Randy Arsenault, St. Catharines',
    image: '/project-photos/2707940586657463592.jpg',
    imageAlt: 'Garden with landscape lighting at dusk',
  },
];

const benefits = [
  { icon: Sun, title: 'Weekends Back', body: 'No more mowing. Enjoy family time.' },
  { icon: Sparkles, title: 'Pro Results', body: 'Commercial-grade equipment.' },
  { icon: Calendar, title: 'Consistent', body: 'Same day every week.' },
  { icon: Home, title: 'Curb Appeal', body: "Increase your home's value." },
  { icon: Wrench, title: 'No Hassle', body: 'No equipment to maintain.' },
  { icon: CheckCircle, title: 'Peace of Mind', body: 'We handle it all.' },
];

const galleryItems = [
  { src: '/project-photos/IMG_4322.JPEG', alt: 'Professional lawn with perfect stripes', caption: 'Weekly Lawn Care' },
  { src: '/project-photos/IMG_3760.JPEG', alt: 'Manicured front lawn', caption: 'Residential Lawn Maintenance' },
  { src: '/project-photos/2707940586657463592.jpg', alt: 'Garden with landscape lighting at dusk', caption: 'Landscape Lighting' },
  { src: '/project-photos/IMG_4043.JPEG', alt: 'Curved garden bed with shrubs', caption: 'Garden Bed Installation' },
  { src: '/project-photos/IMG_3838.JPEG', alt: 'Private garden sanctuary with bench and boulder', caption: 'Private Garden Sanctuary' },
];

const faqs = [
  {
    q: 'How do I enter the draw?',
    a: 'Simply request a free quote through our website before February 28, 2025. Every quote request is an automatic entry into the draw, no purchase necessary!',
  },
  {
    q: 'When will the winner be announced?',
    a: 'The draw will take place shortly after February 28, 2025. The winner will be contacted directly via email and phone, and announced on our social media.',
  },
  {
    q: 'Do I have to buy anything to enter?',
    a: "No! There's no purchase necessary. Just request a free quote and you're automatically entered. The quote itself is also completely free and comes with no obligation.",
  },
  {
    q: "What if I don't win?",
    a: "Even if you don't win the draw, you'll still receive a personalized quote for our services. Many of our customers find our regular pricing very competitive, and we'd love the opportunity to earn your business.",
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire Niagara Region, including St. Catharines, Niagara Falls, Welland, Thorold, Niagara-on-the-Lake, Fort Erie, Fonthill, Grimsby, Beamsville, and surrounding areas.',
  },
  {
    q: 'How does the seasonal lawn care package work?',
    a: 'Our Full-Season Lawn Care Package runs from May 1 to October 31 (26 weeks). We visit your property weekly on the same day to mow, edge, and clean up. The winner receives 50% off the full package price of $1,430, a saving of $715!',
  },
];

export default function EarlyBirdDrawPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="flex flex-col">
      <EarlyBirdFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />

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
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-clay px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
              <Calendar className="h-4 w-4" />
              Early Bird Draw: Ends February 28, 2025
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.1] md:text-5xl lg:text-6xl">
              Win <span className="text-clay-soft">50% Off</span> Your Full-Season Lawn Care
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/85 md:text-xl">
              Save $715 on 26 weeks of professional lawn maintenance. Just request a free quote to
              enter.
            </p>
            <div className="mt-9">
              <Button size="lg" onClick={openModal} className={ctaBtn}>
                Request a Quote to Enter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-4 text-sm text-white/70">
                No purchase necessary. Free quote, no strings attached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: How to Enter */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="How To Enter"
            title="Three Simple Steps"
            intro="It takes less than two minutes to enter."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, n, title, body }) => (
              <div key={n} className={`${floatingCard} p-8`}>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-3xl font-light text-clay">{n}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-normal">{title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/70">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Enter Now, It&apos;s Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: Prize Details */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-5 flex items-center justify-center gap-2">
              <Gift className="h-4 w-4" /> The Prize
            </Eyebrow>
            <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
              Full-Season Lawn Care Package
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              26 weeks of professional lawn maintenance, from May through October.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-sm border border-brand/10 bg-white p-5 shadow-sm">
                  <div className="font-display text-3xl font-light text-foreground">$1,430</div>
                  <div className="text-foreground/70">Package Value</div>
                </div>
                <div className="flex items-center gap-4 rounded-sm border border-clay/40 bg-clay/5 p-5">
                  <div className="font-display text-3xl font-light text-clay">$715</div>
                  <div className="font-medium text-foreground">Your Savings (50% Off)</div>
                </div>
              </div>
              <ul className="mt-8 space-y-4">
                {prizeFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-sage" strokeWidth={1.75} />
                    <span className="text-foreground/75">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-sm">
              <Image
                src="/project-photos/IMG_3760.JPEG"
                alt="Professional lawn mowing service results"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
            {packageCards.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-sm border border-brand/10 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-sage/10 text-sage">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-base font-normal">{title}</h3>
                <p className="mt-1 text-sm text-foreground/70">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              I Want to Save $715
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Trust + Testimonials */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Why Trust Us"
              title="Why Niagara Homeowners Trust Us"
              intro="We're not just another lawn care company. We're your neighbours, committed to making the Niagara Region more beautiful, one lawn at a time."
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

      {/* SECTION 5: Benefits */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The Upside"
            title="Imagine Your Weekends Back"
            intro="Professional lawn care isn't just about a nice lawn. It's about freeing up your time for what matters most."
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

      {/* SECTION 6: Project Gallery */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="In The Field"
            title="Our Recent Work"
            intro="Real results from real Niagara homeowners. See the quality we deliver."
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

      {/* SECTION 7: FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Good To Know"
            title="Frequently Asked Questions"
            intro="Got questions about the Early Bird Draw? We've got answers."
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
                Ready to Enter? Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA */}
      <section className="bg-brand py-24 text-white md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-clay px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
            <Calendar className="h-4 w-4" />
            Draw Closes February 28, 2025
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-light leading-[1.2] md:text-4xl lg:text-5xl">
            Don&apos;t Miss Your Chance to Win
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-white/80">
            Request your free quote today and you could save $715 on a full season of professional
            lawn care.
          </p>
          <div className="mt-9">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Enter the Draw Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/65">
            No purchase necessary. Open to Niagara Region residents. One entry per household.
          </p>
        </div>
      </section>
    </div>
  );
}
