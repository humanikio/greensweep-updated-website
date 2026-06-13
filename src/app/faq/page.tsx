import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Eyebrow, whiteBtn, lightOutlineBtn } from '@/components/site-ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | GreenSweep Niagara',
  description:
    'Answers to common questions about GreenSweep Niagara landscaping services, pricing, service areas, scheduling, and process.',
};

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What areas do you serve?',
        answer:
          'We proudly serve the entire Niagara Region, including St. Catharines, Niagara Falls, Welland, Thorold, Niagara-on-the-Lake, Fort Erie, Port Colborne, Grimsby, Lincoln, Pelham, Fonthill, Vineland, and surrounding areas.',
      },
      {
        question: 'What services do you offer?',
        answer:
          'We offer a comprehensive range of landscaping services including lawn care and maintenance, landscape design, hardscaping and stonework, garden bed installation, seasonal cleanup, irrigation systems, tree and shrub care, outdoor lighting, and snow removal.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          'Yes, GreenSweep Niagara is fully licensed and insured. We carry comprehensive liability insurance to protect both our team and your property.',
      },
      {
        question: 'What sets GreenSweep apart from other landscapers?',
        answer:
          'We take a personalized approach to every project. As a locally-owned company founded in 2024, we prioritize quality over shortcuts and focus on creating clean, low-maintenance, functional landscapes. We treat every property as if it were our own.',
      },
    ],
  },
  {
    category: 'Pricing & Quotes',
    questions: [
      {
        question: 'Do you offer free estimates?',
        answer:
          'Yes! We offer free, no-obligation consultations and estimates for all our services. Contact us to schedule a visit to your property where we can discuss your vision and provide a detailed quote.',
      },
      {
        question: 'How is pricing determined?',
        answer:
          'Pricing depends on several factors including the size of your property, the scope of work, materials required, and complexity of the project. We provide transparent, detailed quotes so you know exactly what to expect.',
      },
      {
        question: 'Do you require a deposit?',
        answer:
          'For larger projects such as hardscaping or full landscape designs, we typically require a deposit to secure materials and schedule the work. The specific terms will be outlined in your project proposal.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept various payment methods including cash, cheque, e-transfer, and major credit cards. Payment terms will be discussed and agreed upon before work begins.',
      },
    ],
  },
  {
    category: 'Scheduling & Process',
    questions: [
      {
        question: 'How do I get started with a landscaping project?',
        answer:
          "Simply give us a call at (905) 931-8022 or fill out our online quote request form. We'll schedule a consultation to discuss your vision, assess your property, and provide a detailed proposal.",
      },
      {
        question: 'How far in advance should I book?',
        answer:
          'For regular lawn care services, we can often accommodate new clients within a week or two. For larger projects like landscape design or hardscaping, we recommend booking at least two to four weeks in advance, especially during peak season.',
      },
      {
        question: 'What happens if it rains on my scheduled service day?',
        answer:
          "For lawn maintenance, light rain typically doesn't affect our schedule. However, if conditions are unsafe or would result in poor quality work, we'll reschedule at no additional cost. We'll always communicate any changes promptly.",
      },
      {
        question: 'Do I need to be home during the service?',
        answer:
          "For most lawn care and maintenance services, you don't need to be home as long as we have access to your property. For larger projects or initial consultations, we prefer to meet with you to discuss details.",
      },
    ],
  },
  {
    category: 'Lawn Care',
    questions: [
      {
        question: 'How often should my lawn be mowed?',
        answer:
          'During the growing season (typically April through October), we recommend weekly mowing for optimal lawn health. The frequency may vary based on grass type, weather conditions, and your preferences.',
      },
      {
        question: 'Do you offer fertilization programs?',
        answer:
          'Yes, we offer comprehensive fertilization programs tailored to the needs of Niagara Region lawns. Our programs typically include multiple applications throughout the growing season for optimal results.',
      },
      {
        question: 'What is lawn aeration and do I need it?',
        answer:
          'Lawn aeration involves creating small holes in the soil to allow air, water, and nutrients to reach grass roots. We recommend aeration once or twice a year to improve lawn health, especially for compacted or high-traffic lawns.',
      },
    ],
  },
  {
    category: 'Hardscaping & Design',
    questions: [
      {
        question: 'What types of hardscaping do you do?',
        answer:
          'We specialize in patios, walkways, retaining walls, driveways, fire pits, outdoor kitchens, and other outdoor living spaces. We work with natural stone, interlocking pavers, and various other materials.',
      },
      {
        question: 'How long does a typical hardscaping project take?',
        answer:
          "Project timelines vary based on scope and complexity. A simple walkway might take a day or two, while a full patio with retaining walls could take one to two weeks. We'll provide a detailed timeline in your project proposal.",
      },
      {
        question: 'Do you provide design services?',
        answer:
          'Yes! We offer complete landscape design services from initial concept to detailed plans. Our design process includes an initial consultation, concept development, and detailed design approval before installation begins.',
      },
    ],
  },
  {
    category: 'Seasonal Services',
    questions: [
      {
        question: 'Do you offer spring and fall cleanup?',
        answer:
          'Yes, we offer comprehensive seasonal cleanup services including leaf removal, garden bed cleanup, pruning, mulching, and preparing your landscape for the coming season.',
      },
      {
        question: 'Do you provide snow removal services?',
        answer:
          'Yes, we offer snow removal services for residential properties during the winter months. Contact us to discuss seasonal contracts and pricing.',
      },
      {
        question: 'When is the best time to start a landscaping project?',
        answer:
          'Spring and fall are typically ideal for planting and many landscaping projects. However, hardscaping can often be done throughout the warmer months. Contact us to discuss the best timing for your specific project.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[45vh] items-center md:min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_4042.JPEG"
            alt="Established garden border with layered shrubs and mature trees"
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl text-white">
            <Eyebrow className="mb-6 text-white/80">Good To Know</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              Answers to the questions we hear most about our services, pricing, and process.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FAQ CONTENT ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-16">
            {faqs.map((category, categoryIndex) => (
              <div key={category.category}>
                <Eyebrow className="mb-6">{category.category}</Eyebrow>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="rounded-sm border border-brand/10 bg-white px-6 shadow-sm transition-colors data-[state=open]:border-brand/25"
                    >
                      <AccordionTrigger className="py-5 text-left font-display text-lg font-normal hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-base leading-relaxed text-foreground/70">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STILL HAVE QUESTIONS (deep green band) ============ */}
      <section className="bg-brand py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Eyebrow className="mb-5 text-clay-soft">Still Have Questions?</Eyebrow>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-light leading-[1.2] md:text-4xl">
            We&apos;re Here To Help
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll be happy to answer
            any questions you have.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className={whiteBtn} asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" className={lightOutlineBtn} asChild>
              <Link href="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
