import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectCarousel } from '@/components/project-carousel';
import { ArrowRight, Star } from 'lucide-react';
import { Eyebrow, SectionHeading, whiteBtn, floatingCard } from '@/components/site-ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | GreenSweep Niagara',
  description:
    'View completed landscaping projects across the Niagara Region. See the craftsmanship and quality that set GreenSweep apart.',
};

// Multi-photo projects: a lead image plus supporting shots, grouped as one project.
const featuredProjects = [
  {
    category: 'Outdoor Living Design',
    title: 'A Complete Backyard Transformation',
    location: 'Niagara Region',
    description:
      'A full backyard reimagined as one cohesive outdoor living space: a raised composite deck and pergola, a paver patio with a fire-pit lounge, an outdoor kitchen, and layered ornamental planting that ties it all together.',
    lead: {
      src: '/project-photos/newer-project-photos/project1-1.jpg',
      alt: 'Full backyard design with a raised deck, pergola, paver patio, and fire-pit lounge',
    },
    thumbs: [
      {
        src: '/project-photos/newer-project-photos/project1-2.jpg',
        alt: 'Paver inlay with ornamental grasses and seasonal flowers beside the deck',
      },
      {
        src: '/project-photos/newer-project-photos/project1-3.jpg',
        alt: 'Layered planting beds with ornamental grasses and perennials',
      },
      {
        src: '/project-photos/newer-project-photos/project1-4.jpg',
        alt: 'Sculpted boxwood border running alongside the composite deck',
      },
      {
        src: '/project-photos/newer-project-photos/project1-5.jpg',
        alt: 'Paver fire-pit lounge with seating and an evergreen backdrop',
      },
    ],
  },
  {
    category: 'Landscape & Planting',
    title: 'A Refined Front Yard',
    location: 'Niagara Region',
    description:
      'A front landscape rebuilt for standout, low-maintenance curb appeal, with sculpted boxwoods, layered evergreens, crisp mulch beds, and a lush, healthy lawn.',
    lead: {
      src: '/project-photos/newer-project-photos/project2-1-revised.jpg',
      alt: 'Pristine front lawn framed by sculpted shrubs and fresh mulch beds',
    },
    thumbs: [
      {
        src: '/project-photos/newer-project-photos/project2-2.jpg',
        alt: 'Sculpted boxwoods and layered evergreens in crisp mulch beds',
      },
      {
        src: '/project-photos/newer-project-photos/project2-3.jpg',
        alt: 'Layered shrub bed with variegated boxwood, hostas, and fresh mulch',
      },
    ],
  },
];

const portfolioItems = [
  {
    id: 1,
    title: 'Private Garden Sanctuary',
    category: 'Complete Landscape',
    location: 'St. Catharines',
    description:
      'A tranquil backyard retreat with a decorative bench nestled among lush hostas, a natural boulder accent, fresh mulch beds, and a lattice privacy screen.',
    image: '/project-photos/IMG_3838.JPEG',
  },
  {
    id: 2,
    title: 'Spring Garden Bed Installation',
    category: 'Landscape Design',
    location: 'Niagara Falls',
    description:
      'A colourful tulip border along the fence line with fresh mulch and a clean, maintained lawn edge for a vibrant look.',
    image: '/project-photos/IMG_3839.JPEG',
  },
  {
    id: 3,
    title: 'Front Entry Paver Walkway',
    category: 'Hardscaping',
    location: 'Welland',
    description:
      'Modern grey interlocking pavers with fresh mulch beds, ornamental shrubs, and accent boulders.',
    image: '/project-photos/IMG_0866.jpeg',
  },
  {
    id: 4,
    title: 'Curved Landscape Bed Design',
    category: 'Landscape Design',
    location: 'Niagara-on-the-Lake',
    description:
      'A sweeping mulch bed with layered boxwoods, evergreens, and ornamental trees for year-round interest.',
    image: '/project-photos/IMG_4043.JPEG',
  },
  {
    id: 5,
    title: 'Professional Lawn Maintenance',
    category: 'Lawn Care',
    location: 'Lincoln',
    description:
      'A weekly mowing program with precision striping, creating a lush, healthy lawn with a professional finish.',
    image: '/project-photos/IMG_4140.JPEG',
  },
  {
    id: 6,
    title: 'Interlock Patio & Cedars',
    category: 'Hardscaping',
    location: 'Grimsby',
    description:
      'An interlocking-stone patio framed by tall privacy cedars, a defined outdoor living space made for entertaining.',
    image: '/project-photos/2.png',
  },
];

const testimonials = [
  {
    quote:
      'Carter and his team were flexible to my changing needs over the season and kept my yard in tip top shape. From garden prep and mulch to fall clean up they took care of all my summer chores with excellent care and attention to detail.',
    author: 'Jordan Duffy, St. Catharines',
  },
  {
    quote:
      'Highly recommend Green Sweep Niagara! As advertised. Punctual, professional and go above and beyond expectations. Already reserved our spring cleaning and weekly maintenance for next season! Thank you Carter and team!',
    author: 'Jason Talyor, St. Catharines',
  },
  {
    quote:
      'The GreenSweep guys have done a number of jobs at our place and they have always turned out great.',
    author: 'Bruno Bartel, St. Catharines',
  },
  {
    quote:
      'Fast prompt service, worked in the rain to get the job done, and the job was completed right! With Carter and crew you will not be disappointed.',
    author: 'Randy Arsenault, St. Catharines',
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[55vh] items-center md:min-h-[65vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_6615.JPEG"
            alt="Composite deck and stone steps set into a wooded ravine garden"
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl text-white">
            <Eyebrow className="mb-6 text-white/80">Our Work</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Portfolio
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              A look at the transformations we&apos;ve created for properties across the Niagara
              Region.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS (grouped, multi-photo) ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Transformations, Start To Finish"
            intro="A closer look at complete projects, from the overall vision down to the finishing details."
          />
          <div className="mx-auto max-w-6xl space-y-20">
            {featuredProjects.map((project) => (
              <article key={project.title}>
                <div className="max-w-3xl">
                  <Eyebrow>{project.category}</Eyebrow>
                  <h3 className="mt-3 font-display text-3xl font-light leading-[1.15] md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-sage">
                    {project.location}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-foreground/70">
                    {project.description}
                  </p>
                </div>
                <div className="group relative mt-8 aspect-[16/9] overflow-hidden rounded-sm shadow-md ring-1 ring-black/5">
                  <Image
                    src={project.lead.src}
                    alt={project.lead.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div
                  className={`mt-3 grid gap-3 ${
                    project.thumbs.length >= 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2'
                  }`}
                >
                  {project.thumbs.map((thumb) => (
                    <div
                      key={thumb.src}
                      className="group relative aspect-[4/3] overflow-hidden rounded-sm"
                    >
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MORE PROJECTS GRID ============ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="More Of Our Work"
            title="Recent Transformations"
            intro="From private garden retreats to full hardscape builds, every project is finished to the same exacting standard."
          />
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <article key={item.id} className={floatingCard}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-sm bg-clay px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                    {item.category}
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage">{item.location}</p>
                  <h3 className="mt-2 font-display text-xl font-normal">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-foreground/70">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MORE OF OUR WORK (carousel) ============ */}
      <section className="bg-moss py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="In The Field"
            title="A Wider Look"
            intro="Browse through more completed projects from across the region."
          />
          <div className="mx-auto max-w-4xl">
            <ProjectCarousel
              projects={[
                {
                  src: '/project-photos/IMG_3760.JPEG',
                  alt: 'Manicured front lawn',
                  caption: 'Residential Lawn Care',
                },
                {
                  src: '/project-photos/IMG_6615.JPEG',
                  alt: 'Composite deck set into a wooded ravine garden',
                  caption: 'Deck & Landscape Integration',
                },
                {
                  src: '/project-photos/2707940586657463592.jpg',
                  alt: 'Garden illuminated with landscape lighting at dusk',
                  caption: 'Landscape Lighting',
                },
                {
                  src: '/project-photos/IMG_6586.JPEG',
                  alt: 'Lush deck garden framed by mature plantings',
                  caption: 'Deck & Outdoor Living',
                },
                {
                  src: '/project-photos/IMG_4057.JPEG',
                  alt: 'Layered planting bed with shrubs and mulch',
                  caption: 'Planting Design',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-wheat py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Client Stories"
            title="What Our Clients Say"
            intro="The reputation we're building, one property at a time."
          />
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="rounded-sm border border-brand/10 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="font-display text-lg font-light leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm uppercase tracking-wider text-muted-foreground">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA (deep green band) ============ */}
      <section className="bg-brand py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Eyebrow className="mb-5 text-clay-soft">Ready When You Are</Eyebrow>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-[1.2] md:text-4xl">
            Ready For Your Own Transformation?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            Let&apos;s create something beautiful together. Contact us for a free consultation and
            see what we can do for your property.
          </p>
          <div className="mt-9">
            <Button size="lg" className={whiteBtn} asChild>
              <Link href="/quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
