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
} from 'lucide-react';
import { Eyebrow, SectionHeading, whiteBtn, floatingCard } from '@/components/site-ui';

const ctaBtn =
  'bg-clay text-white hover:bg-clay/90 rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.16em]';

const bundleItems = [
  {
    icon: Leaf,
    title: 'Full Yard Cleanup',
    body: 'Removal of leaves, debris, and dead material from your entire property. Beds, lawn, and hard surfaces. Everything gets cleared out.',
  },
  {
    icon: Scissors,
    title: 'Shrub & Hedge Trimming',
    body: 'Overgrown shrubs and hedges shaped back into form. Clean cuts that promote healthy spring growth.',
  },
  {
    icon: Sparkles,
    title: 'Bed Edging',
    body: 'Crisp, defined edges cut along all garden beds, the detail that makes everything look intentional and polished.',
  },
  {
    icon: Shrub,
    title: 'Fresh Mulch Application',
    body: 'Premium mulch spread across all your beds. Locks in moisture, suppresses weeds, and gives your yard that fresh, finished look.',
  },
];

const whyBundle = [
  {
    icon: Percent,
    title: 'Save 10% on Everything',
    body: 'Cleanup and mulch booked separately costs more. Bundle them before May 20 and the whole job is 10% off.',
  },
  {
    icon: Clock,
    title: 'Done in One Visit',
    body: 'No juggling multiple appointments. Our crew handles the full cleanup and mulch in a single visit so your yard is ready fast.',
  },
  {
    icon: Sun,
    title: 'Start the Season Right',
    body: 'Mulch applied right after cleanup gives your beds maximum weed suppression and moisture retention all season long.',
  },
];

const trustBadges = [
  { icon: Users, title: 'Locally Owned', body: "Born and raised in Niagara. We're your neighbours." },
  { icon: Star, title: '5-Star on Google', body: 'Perfect rating from real customers.' },
  {
    icon: CheckCircle,
    title: 'Full-Service Crew',
    body: 'Cleanup, trimming, edging, and mulch, all handled.',
  },
  { icon: Leaf, title: 'Niagara Experts', body: 'We know the local plants, soil, and climate.' },
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
    image: '/project-photos/IMG_3843.JPEG',
    imageAlt: 'Front yard with fresh mulch and Japanese maple',
  },
  {
    quote:
      'The GreenSweep guys have done a number of jobs at our place and they have always turned out great.',
    author: 'Bruno Bartel, St. Catharines',
    image: '/project-photos/IMG_3838.JPEG',
    imageAlt: 'Cozy garden corner with bench and fresh mulch',
  },
  {
    quote:
      'Fast prompt service, worked in the rain to get the job done, and the job was completed right! With Carter and crew you will not be disappointed.',
    author: 'Randy Arsenault, St. Catharines',
    image: '/project-photos/IMG_4043.JPEG',
    imageAlt: 'Mulched garden bed with landscaping',
  },
];

const benefits = [
  {
    icon: Trash2,
    title: 'No More Winter Debris',
    body: 'Leaves, branches, and dead material cleared from every corner of your property.',
  },
  {
    icon: Sparkles,
    title: 'Clean, Sharp Edges',
    body: 'Defined bed lines that make your entire landscape look crisp and intentional.',
  },
  {
    icon: Scissors,
    title: 'Shrubs in Shape',
    body: 'Overgrown hedges and shrubs trimmed back to promote healthy, full growth.',
  },
  {
    icon: Shrub,
    title: 'Rich, Fresh Mulch',
    body: 'Premium mulch that keeps weeds down, locks moisture in, and looks incredible.',
  },
  {
    icon: Home,
    title: 'Instant Curb Appeal',
    body: 'Your property goes from winter-worn to the best-looking yard on the street.',
  },
  {
    icon: Leaf,
    title: 'Healthier Plants All Season',
    body: 'Proper cleanup and mulch sets your garden up for stronger growth through summer.',
  },
];

const galleryItems = [
  { src: '/project-photos/IMG_3843.JPEG', alt: 'Front yard with fresh mulch and trimmed beds', caption: 'Spring Cleanup + Mulch: Front Yard' },
  { src: '/project-photos/IMG_3839.JPEG', alt: 'Garden bed with tulips and fresh dark mulch', caption: 'Mulch Application with Spring Flowers' },
  { src: '/project-photos/IMG_3838.JPEG', alt: 'Garden corner with fresh mulch and perennials', caption: 'Garden Bed Cleanup & Mulch' },
  { src: '/project-photos/IMG_4042.JPEG', alt: 'Landscaped bed with mulch and trimmed shrubs', caption: 'Shrub Trimming & Mulch Installation' },
  { src: '/project-photos/IMG_4043.JPEG', alt: 'Mulched garden bed with shaped shrubs', caption: 'Complete Spring Transformation' },
  { src: '/project-photos/IMG_6586.JPEG', alt: 'Backyard landscaping with mulched beds', caption: 'Backyard Spring Cleanup' },
];

const faqs = [
  {
    q: 'What exactly is included in the spring cleanup bundle?',
    a: 'The bundle includes a complete yard cleanup (leaves, debris, dead material), shrub and hedge trimming, bed edging along all garden beds, and fresh premium mulch applied to all your beds. Everything your property needs to look its best for spring, done in one visit.',
  },
  {
    q: 'How much do I save with the bundle?',
    a: "You save 10% off the total when you book spring cleanup and mulch together before May 20, 2026. The exact dollar amount depends on your property size, and we'll give you a quote when we call you back.",
  },
  {
    q: 'How fast will I hear back after signing up?',
    a: "Fast. Expect a phone call within minutes of submitting the form. We'll confirm your details, give you a quote, and get your service scheduled.",
  },
  {
    q: 'Can I get just the cleanup without mulch?',
    a: "Absolutely. We offer spring cleanup as a standalone service too. But the 10% bundle discount only applies when you combine cleanup with mulch before May 20. It's the best value and the best results for your yard.",
  },
  {
    q: 'What type of mulch do you use?',
    a: "We use premium-quality mulch that's ideal for Niagara's climate. We can discuss colour and type options when we call you to confirm your booking.",
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the entire Niagara Region, including St. Catharines, Niagara Falls, Welland, Thorold, Niagara-on-the-Lake, Fort Erie, Fonthill, Grimsby, Beamsville, and surrounding areas.',
  },
  {
    q: 'When does this offer expire?',
    a: 'The 10% spring cleanup bundle offer expires May 20, 2026. Sign up before then to lock in the discount. After that, cleanup and mulch are still available but priced separately.',
  },
];

export default function SpringCleanupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="flex flex-col">
      <SpringCleanupFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* SECTION 1: Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_3843.JPEG"
            alt="Beautiful spring cleanup with fresh mulch and trimmed beds"
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
              Bundle Offer Ends May 20, 2026
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.1] md:text-5xl lg:text-6xl">
              Your Yard Survived Winter. Now Let&apos;s Make It Shine.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/85 md:text-xl">
              Save 10% when you bundle your spring cleanup with mulch. Cleanup, trimming, edging, and
              fresh mulch, all in one visit.
            </p>
            <div className="mt-9">
              <Button size="lg" onClick={openModal} className={ctaBtn}>
                Claim 10% Off the Spring Bundle
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-4 text-sm text-white/70">
                Limited time offer. Expect a call within minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What's in the Bundle */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The Bundle"
            title="What's in the Spring Cleanup Bundle"
            intro="Everything your yard needs to go from winter-worn to show-ready, bundled together and 10% off."
          />
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <ul className="space-y-5">
              {bundleItems.map(({ icon: Icon, title, body }) => (
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
                src="/project-photos/IMG_3839.JPEG"
                alt="Garden bed with fresh mulch and spring flowers"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-14 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Get the Bundle for 10% Off
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Bundle */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why Bundle"
            title="Why Bundle Cleanup + Mulch?"
            intro="One crew, one visit, one price, and you save 10%."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {whyBundle.map(({ icon: Icon, title, body }) => (
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
              Lock In 10% Off Before May 20
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: Urgency / Deadline */}
      <section className="bg-brand py-24 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
            <div>
              <Eyebrow className="mb-5 text-clay-soft">Limited Time: Ends May 20</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Spring Fills Up Fast. Don&apos;t Get Stuck on the Waitlist.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-white/80">
                Every year, homeowners wait too long and end up scrambling for a crew in May. Book
                your spring cleanup bundle now and you&apos;ll be the first yard on the street that
                looks ready for summer.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  '10% off when you bundle cleanup + mulch before May 20',
                  'Limited spots available, and we book on a first-come, first-served basis',
                  'Expect a call within minutes to lock in your date',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-clay-soft" />
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Button size="lg" onClick={openModal} className={whiteBtn}>
                  Book Your Spring Bundle Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-sm">
              <Image
                src="/project-photos/IMG_4042.JPEG"
                alt="Freshly mulched garden bed with trimmed shrubs"
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
              intro="Here's what Niagara homeowners are saying after working with GreenSweep."
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
            eyebrow="The Result"
            title="What Your Yard Looks Like After"
            intro="Winter's mess is gone. Your property looks like it belongs in a magazine."
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
              Get My Yard Spring-Ready
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
            intro="Real yards. Real Niagara homes. This is what a professional spring cleanup looks like."
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
            intro="Everything you need to know about the spring cleanup bundle."
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
                I&apos;m Ready, Book My Spring Bundle
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
            Bundle Offer Ends May 20, 2026
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-light leading-[1.2] md:text-4xl lg:text-5xl">
            Your Yard Deserves a Fresh Start. So Do You.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-white/80">
            30 seconds to sign up. A phone call within minutes. Your entire yard cleaned up, trimmed,
            edged, and mulched, with 10% off the whole thing.
          </p>
          <div className="mt-9">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Claim 10% Off Before May 20
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/65">
            Serving the entire Niagara Region. Limited spots available.
          </p>
        </div>
      </section>
    </div>
  );
}
