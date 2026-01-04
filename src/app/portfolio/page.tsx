import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectCarousel } from '@/components/project-carousel';
import { ArrowRight, Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Greensweep Niagara',
  description: 'View our completed landscaping projects across the Niagara Region. See the quality and craftsmanship that sets us apart.',
};

// Portfolio data showcasing real completed projects
const portfolioItems = [
  {
    id: 1,
    title: 'Backyard Deck & Garden Retreat',
    category: 'Complete Landscape',
    location: 'St. Catharines',
    description: 'Multi-level composite deck with river rock borders, concrete steps, and lush hosta plantings leading to a private seating area.',
    image: '/project-photos/IMG_6614.JPEG',
  },
  {
    id: 2,
    title: 'Spring Garden Bed Installation',
    category: 'Landscape Design',
    location: 'Niagara Falls',
    description: 'Colorful tulip border along fence line with fresh mulch and maintained lawn edge for a clean, vibrant look.',
    image: '/project-photos/IMG_3839.JPEG',
  },
  {
    id: 3,
    title: 'Front Entry Paver Walkway',
    category: 'Hardscaping',
    location: 'Welland',
    description: 'Modern gray interlocking pavers with fresh mulch beds, ornamental shrubs, and accent boulders.',
    image: '/project-photos/IMG_0866.jpeg',
  },
  {
    id: 4,
    title: 'Curved Landscape Bed Design',
    category: 'Landscape Design',
    location: 'Niagara-on-the-Lake',
    description: 'Sweeping mulch bed with layered boxwoods, evergreens, and ornamental trees for year-round interest.',
    image: '/project-photos/IMG_4043.JPEG',
  },
  {
    id: 5,
    title: 'Professional Lawn Maintenance',
    category: 'Lawn Care',
    location: 'Lincoln',
    description: 'Weekly mowing program with precision striping, creating a lush, healthy lawn with professional results.',
    image: '/project-photos/IMG_4322.JPEG',
  },
  {
    id: 6,
    title: 'Cozy Garden Corner',
    category: 'Landscape Design',
    location: 'Grimsby',
    description: 'Intimate garden retreat with decorative bench, perennial plantings, accent boulder, and privacy screening.',
    image: '/project-photos/IMG_3838.JPEG',
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Explore our completed projects and see the transformations we've created across the
            Niagara Region.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm font-semibold">
                    {item.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">More Of Our Work</h2>
            <p className="text-lg text-muted-foreground">
              Browse through more of our completed projects across the Niagara Region.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ProjectCarousel
              projects={[
                { src: '/project-photos/IMG_3760.JPEG', alt: 'Manicured front lawn', caption: 'Residential Lawn Care' },
                { src: '/project-photos/IMG_6615.JPEG', alt: 'Deck and planter detail', caption: 'Deck & Landscape Integration' },
                { src: '/project-photos/IMG_3843.JPEG', alt: 'Front entry landscaping', caption: 'Front Yard Design' },
                { src: '/project-photos/IMG_6586.JPEG', alt: 'Stepping stones in garden', caption: 'Garden Pathway' },
                { src: '/project-photos/IMG_4057.JPEG', alt: 'Landscape bed installation', caption: 'Planting Design' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-secondary">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4">
                    "Carter and his team were flexible to my changing needs over the season and kept my yard in tip top shape. From garden prep and mulch to fall clean up they took care of all my summer chores with excellent care and attention to detail."
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">
                    — Jordan Duffy, St. Catharines
                  </cite>
                </CardContent>
              </Card>

              <Card className="bg-secondary">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4">
                    "Highly recommend Green Sweep Niagara! As advertised. Punctual, professional and go above and beyond expectations. Already reserved our spring cleaning and weekly maintenance for next season! Thank you Carter and team!"
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">
                    — Jason Talyor, St. Catharines
                  </cite>
                </CardContent>
              </Card>

              <Card className="bg-secondary">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4">
                    "The Greensweep guys have done a number of jobs at our place and they have always turned out great."
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">
                    — Bruno Bartel, St. Catharines
                  </cite>
                </CardContent>
              </Card>

              <Card className="bg-secondary">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4">
                    "Fast prompt service, worked in the rain to get the job done, and the job was completed right! With Carter and crew you will not be disappointed."
                  </blockquote>
                  <cite className="not-italic text-muted-foreground">
                    — Randy Arsenault, St. Catharines
                  </cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us for a free consultation and see
            what we can do for your property.
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
