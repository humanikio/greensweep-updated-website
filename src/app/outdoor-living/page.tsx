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
import { OutdoorLivingFormModal } from '@/components/outdoor-living-form-modal';
import {
  ArrowRight,
  CalendarClock,
  ClipboardList,
  PencilRuler,
  Hammer,
  Layers,
  Flower2,
  Users,
  MapPin,
  CheckCircle,
  Star,
  Leaf,
  Sun,
  Tag,
  Package,
  PiggyBank,
} from 'lucide-react';
import { Eyebrow, SectionHeading, floatingCard } from '@/components/site-ui';

// Brass CTA used across this conversion page so the offer reads premium, not loud.
const ctaBtn =
  'bg-clay text-white hover:bg-clay/90 rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.16em]';

const PACKAGE_PARTS = [
  {
    icon: Layers,
    image: '/project-photos/IMG_5660.JPEG',
    alt: 'Hand-laid grey paver patio with planted garden beds',
    title: 'Custom Paver Patio',
    body: 'A patio designed to your yard and laid by hand. It is the durable, finished foundation of your whole outdoor space.',
  },
  {
    icon: Flower2,
    image: '/project-photos/IMG_4042.JPEG',
    alt: 'Freshly planted garden beds with shrubs and mulch',
    title: 'Garden Beds + Full Plant Install',
    body: 'Shaped garden beds and a complete plant install that frame the patio and bring the space to life from day one.',
  },
  {
    icon: Users,
    image: '/project-photos/IMG_5800.JPEG',
    alt: 'Finished patio with fire pit and gazebo built by one crew',
    title: 'Designed & Built by One Crew',
    body: 'One local Niagara crew handles the design and the build from start to finish. One project, not separate jobs to coordinate.',
  },
];

const GALLERY = [
  {
    src: '/project-photos/newer-project-photos/IMG_6613.JPEG',
    alt: 'Composite deck with a river-rock channel, dining set, and hot tub',
    caption: 'Composite deck & outdoor living',
  },
  {
    src: '/project-photos/newer-project-photos/IMG_5883.JPEG',
    alt: 'Timber pavilion and flagstone patio set in a wooded garden',
    caption: 'Timber pavilion & flagstone patio',
  },
  {
    src: '/project-photos/newer-project-photos/IMG_5891.JPEG',
    alt: 'Flagstone patio path with a pergola arbor and dining set',
    caption: 'Flagstone patio & pergola',
  },
  {
    src: '/project-photos/newer-project-photos/IMG_5601.JPEG',
    alt: 'Lakefront fire-pit lounge with Adirondack chairs overlooking the water',
    caption: 'Lakeside fire-pit lounge',
  },
  {
    src: '/project-photos/IMG_5661.JPEG',
    alt: 'Custom grey paver patio with fresh garden beds and river rock',
    caption: 'Custom paver patio & garden beds',
  },
  {
    src: '/project-photos/IMG_6614.JPEG',
    alt: 'Composite deck with a river-rock channel, hosta beds, and seating',
    caption: 'Outdoor living deck & river rock',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'We couldn’t be happier with the work they did. From start to finish, they were professional, reliable, and paid close attention to every detail. The final result completely transformed our outdoor space. It looks clean, polished, and exactly what we envisioned.',
    name: 'Karen Britton',
  },
  {
    quote: 'Carter was great and helped us step by step to turn our dream back yard into reality.',
    name: 'Owen Meloche',
  },
  {
    quote:
      'I hired Carter and his team for a landscaping project, and I’m beyond impressed. They were professional, efficient, and transformed my yard into something beautiful. Great attention to detail and left everything clean. Highly recommend!',
    name: 'Melanie Bartel',
  },
  {
    quote:
      'We are extremely pleased with the work that Carter and his team did to fix up our backyard gardens. They did a variety of steps including weeding, planting, mulching, stone border and laying ground cover. Communication was excellent and the team was very respectful and professional.',
    name: 'Cheryl Rosts',
  },
  {
    quote:
      'Great experience working with this landscaping company. Super professional, easy to communicate with, and the quality of work was top-notch. They really transformed the space. Highly recommend!',
    name: 'Kai Bartel',
  },
  {
    quote:
      'Really happy with the work Carter and his crew did. They worked long hours to get the job done. Communication is excellent and you can tell this is a business that thrives off ensuring the customer is happy. Looking forward to having GreenSweep Niagara take care of our gardens this summer!',
    name: 'Sam',
  },
  {
    quote:
      'We had a great experience with GreenSweep Niagara for our spring cleanup. Carter and his team did an excellent job edging the front yard, applying fresh mulch, and trimming a couple of our large evergreen trees. Our front yard has never looked better. Highly recommend.',
    name: 'Eva Lintott',
  },
  {
    quote:
      'Carter and his team were flexible to my changing needs over the season and kept my yard in tip top shape. From garden prep and mulch to fall clean up they took care of all my summer chores with excellent care and attention to detail.',
    name: 'Jordan Duffy',
  },
];

export default function OutdoorLivingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="flex flex-col">
      <OutdoorLivingFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* SECTION 1: Hero */}
      <section className="relative overflow-hidden lg:flex lg:min-h-[calc(100dvh-4rem)] lg:items-center">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_5663.JPEG"
            alt="Finished paver patio and garden beds in Niagara"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand/80" />
        </div>

        <div className="relative container mx-auto w-full px-4 py-20 text-center md:py-28 lg:py-12">
          <div className="mx-auto max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-clay px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
              <CalendarClock className="h-4 w-4" />
              Limited Summer 2026 Build Slots
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.1] sm:text-5xl lg:text-6xl">
              The Outdoor Living Package
              <span className="mt-3 block text-clay-soft">Up to $1,500 Off</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/85 sm:text-xl">
              A custom paver patio, garden beds, and a full plant install, designed and built as one
              complete project by one local Niagara crew. We sell the finished summer, not the stone.
            </p>

            <ul className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {[
                'Custom paver patio',
                'Garden beds + plant install',
                'One local crew',
                'A tidy-up of the whole yard',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-clay-soft" />
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button size="lg" onClick={openModal} className={ctaBtn}>
                Get Up to $1,500 Off
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-4 text-sm text-white/70">
                Free, no-obligation quote. We&apos;ll reach out within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What's included */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The Package"
            title="One Package. One Crew. The Whole Build."
            intro="The Outdoor Living Package isn't a patio deal plus a separate landscaping job. It's a single complete build, where the patio and plantings are designed and installed together so the finished space works as one."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {PACKAGE_PARTS.map(({ icon: Icon, image, alt, title, body }) => (
              <div key={title} className={floatingCard}>
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-normal">{title}</h3>
                  <p className="mt-2 leading-relaxed text-foreground/70">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-5 rounded-sm border border-brand/10 bg-white p-6 text-left shadow-sm">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage">
              <Leaf className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <div>
              <Eyebrow className="mb-1">Included With Every Build</Eyebrow>
              <h3 className="font-display text-lg font-normal">
                We leave your whole yard looking sharp, not just the new build
              </h3>
              <p className="mt-2 leading-relaxed text-foreground/70">
                While we&apos;re on site, our crew gives the rest of your property some love too:
                trimming, edging, a fresh tidy-up of the lawn and beds around the work, and a full
                cleanup before we go, so the entire yard looks finished, not just the patio.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Start My Outdoor Living Package
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: The offer */}
      <section className="bg-brand py-24 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-clay px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
              <Tag className="h-4 w-4" />
              The Offer
            </div>
            <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl lg:text-5xl">
              Save up to <span className="text-clay-soft">$1,500</span> on your complete Outdoor
              Living Package
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/80">
              Book your complete Outdoor Living Package and take up to $1,500 off. One package, one
              savings, one local crew, with the rest of your yard tidied up before we go. Not a patio
              deal plus a separate landscaping job.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Package,
                  title: 'One price, one crew',
                  body: 'One complete build and one savings, with no separate jobs to juggle.',
                },
                {
                  icon: PiggyBank,
                  title: 'Up to $1,500 off',
                  body: 'Applied to qualifying complete Outdoor Living Packages.',
                },
                {
                  icon: CalendarClock,
                  title: 'Summer 2026 slots',
                  body: 'Limited build slots, booked first come, first served.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-sm border border-white/15 bg-white/5 p-6 text-center"
                >
                  <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-clay-soft/15">
                    <Icon className="h-5 w-5 text-clay-soft" />
                  </div>
                  <h3 className="font-display text-lg font-normal text-white">{title}</h3>
                  <p className="mt-1 text-sm text-white/75">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button size="lg" onClick={openModal} className={ctaBtn}>
                Claim Up to $1,500 Off
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm text-white/65">
              About the offer: the up to $1,500 off applies to qualifying complete Outdoor Living
              Packages. It&apos;s one package at one savings, and your exact discount is confirmed
              with your free quote.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: The proof gallery */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The Proof"
            title="Real Niagara Projects. Real Finished Spaces."
            intro="Every photo below is a real GreenSweep build in the Niagara region. These are the patios, beds, and plantings we'll create for your yard."
          />

          {/* Mobile: swipeable carousel */}
          <div className="mx-auto max-w-3xl md:hidden">
            <Carousel
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 4500,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
            >
              <CarouselContent>
                {GALLERY.map((project) => (
                  <CarouselItem key={project.src}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                      <Image src={project.src} alt={project.alt} fill className="object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-sm font-medium text-white">{project.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3" />
              <CarouselNext className="right-3" />
            </Carousel>
          </div>

          {/* Desktop: bento gallery grid */}
          <div className="mx-auto hidden max-w-6xl grid-cols-2 gap-4 md:grid lg:grid-cols-4">
            {GALLERY.map((project, index) => (
              <div
                key={project.src}
                className={`group relative overflow-hidden rounded-sm ${
                  index === 0 ? 'aspect-square lg:col-span-2 lg:row-span-2' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm font-medium text-white">{project.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              I Want Results Like These
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: How it works */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="How It Works"
            title="Three Steps To A Finished Space"
            intro="From first call to a finished outdoor space, we keep it clear and simple."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                icon: ClipboardList,
                step: '01',
                title: 'Book a free quote',
                body: 'Tell us about your space. We come out, take a look, and give you a clear, no-obligation quote.',
              },
              {
                icon: PencilRuler,
                step: '02',
                title: 'We design the plan',
                body: 'We design your patio and plantings together as one cohesive outdoor living space.',
              },
              {
                icon: Hammer,
                step: '03',
                title: 'One crew builds it',
                body: 'Our local crew builds the whole project start to finish, then tidies up the rest of your yard so the entire space looks sharp.',
              },
            ].map(({ icon: Icon, step, title, body }) => (
              <div key={step} className={`${floatingCard} p-8`}>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-3xl font-light text-clay">{step}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-normal">{title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/70">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Book My Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials + trust */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Client Stories"
              title="What Niagara Homeowners Say"
              intro="Real reviews from real GreenSweep customers across the region."
            />

            {/* Trust row */}
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {[
                {
                  icon: ClipboardList,
                  title: 'Free on-site quotes',
                  body: 'A no-obligation quote for every project.',
                },
                {
                  icon: CalendarClock,
                  title: 'Reply within 24 hours',
                  body: 'We reach out fast to book your quote.',
                },
                {
                  icon: MapPin,
                  title: 'Niagara-wide service',
                  body: 'From Niagara-on-the-Lake to Niagara Falls.',
                },
                {
                  icon: Leaf,
                  title: 'Real local portfolio',
                  body: 'Every photo here is a real Niagara project.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-sage/10 text-sage">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-base font-normal">{title}</h3>
                  <p className="mt-1 text-xs text-foreground/70 md:text-sm">{body}</p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-sm border border-brand/10 bg-white p-8 shadow-sm"
                >
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="font-display text-lg font-light leading-relaxed text-foreground/80">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 not-italic">
                    <span className="font-medium">{t.name}</span>
                    <span className="ml-2 text-sm text-muted-foreground">Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" onClick={openModal} className={ctaBtn}>
                Get My Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Why GreenSweep */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[460px] overflow-hidden rounded-sm">
              <Image
                src="/project-photos/IMG_6085.JPEG"
                alt="A finished GreenSweep Niagara backyard living space"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow className="mb-5">Why GreenSweep</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Why Niagara Homeowners Choose Us
              </h2>
              <ul className="mt-8 space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Local and Niagara-owned',
                    body: 'We live and work here. Your project is built by a crew that knows Niagara yards, soil, and seasons.',
                  },
                  {
                    icon: CalendarClock,
                    title: 'Established 2024',
                    body: 'A growing local company building real outdoor spaces for real Niagara homes.',
                  },
                  {
                    icon: Sun,
                    title: 'One crew, start to finish',
                    body: 'No subcontractor shuffle. The same crew designs and builds your complete package.',
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-normal">{title}</h3>
                      <p className="mt-1 leading-relaxed text-foreground/70">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button size="lg" onClick={openModal} className={ctaBtn}>
                  Start My Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Good To Know"
            title="Questions, Answered"
            intro="Everything you need to know about the Outdoor Living Package."
          />

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "What's included in the Outdoor Living Package?",
                  a: "One complete build: a custom paver patio, shaped garden beds, and a full plant install, all designed and installed together by one local crew. It's one project, not a patio job plus a separate landscaping job. And while we're on site, we tidy up the surrounding yard too, so the whole space looks polished, not just the new build.",
                },
                {
                  q: 'How does the “up to $1,500 off” work?',
                  a: "The discount applies to qualifying complete Outdoor Living Packages. It's one package at one savings, and your exact discount is confirmed when we give you your free quote.",
                },
                {
                  q: 'How soon can you build it?',
                  a: "We're booking summer 2026 builds now, and slots are limited. Request a quote and we'll reach out within 24 hours to talk timing and reserve your spot.",
                },
                {
                  q: 'What areas do you serve?',
                  a: 'We serve the Niagara region, including Niagara-on-the-Lake, St. Catharines, Fonthill, Grimsby, Port Dalhousie, Welland, and Niagara Falls.',
                },
                {
                  q: 'What happens after I submit the form?',
                  a: "We'll reach out within 24 hours to book a free, no-obligation quote. We come out, look at your space, and put together a clear plan and price for your complete package.",
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-sm border border-brand/10 bg-white px-6 shadow-sm transition-colors data-[state=open]:border-brand/25"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-normal hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/70">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 text-center">
              <Button size="lg" onClick={openModal} className={ctaBtn}>
                Get My Free Quote
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
            <CalendarClock className="h-4 w-4" />
            Now Booking Summer 2026 Builds
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-light leading-[1.2] md:text-4xl lg:text-5xl">
            Claim up to <span className="text-clay-soft">$1,500</span> off your Outdoor Living
            Package
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-white/80">
            Summer 2026 build slots are limited. Request your free quote and we&apos;ll reach out
            within 24 hours to book it. One crew, one complete build.
          </p>
          <div className="mt-9">
            <Button size="lg" onClick={openModal} className={ctaBtn}>
              Claim Up to $1,500 Off
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Service area + contact */}
          <div className="mx-auto mt-14 max-w-5xl border-t border-white/15 pt-8">
            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/80">
              <MapPin className="h-4 w-4 text-clay-soft" />
              <span className="font-medium text-white">Serving Niagara:</span>
              Niagara-on-the-Lake · St. Catharines · Fonthill · Grimsby · Port Dalhousie · Welland ·
              Niagara Falls
            </p>
            <p className="mt-3 text-sm text-white/65">
              GreenSweep Niagara · Locally owned, established 2024 ·{' '}
              <a href="tel:+19059318022" className="font-medium text-white underline">
                (905) 931-8022
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
