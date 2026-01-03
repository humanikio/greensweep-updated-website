import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Greensweep Niagara',
  description: 'Find answers to frequently asked questions about Greensweep Niagara landscaping services, pricing, service areas, and more.',
};

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What areas do you serve?',
        answer: 'We proudly serve the entire Niagara Region, including St. Catharines, Niagara Falls, Welland, Thorold, Niagara-on-the-Lake, Fort Erie, Port Colborne, Grimsby, Lincoln, Pelham, Fonthill, Vineland, and surrounding areas.',
      },
      {
        question: 'What services do you offer?',
        answer: 'We offer a comprehensive range of landscaping services including lawn care and maintenance, landscape design, hardscaping and stonework, garden bed installation, seasonal cleanup, irrigation systems, tree and shrub care, outdoor lighting, and snow removal.',
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'Yes, Greensweep Niagara is fully licensed and insured. We carry comprehensive liability insurance to protect both our team and your property.',
      },
      {
        question: 'What sets Greensweep apart from other landscapers?',
        answer: 'We take a personalized approach to every project. As a locally-owned company founded in 2024, we prioritize quality over shortcuts and focus on creating clean, low-maintenance, functional landscapes. We treat every property as if it were our own.',
      },
    ],
  },
  {
    category: 'Pricing & Quotes',
    questions: [
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes! We offer free, no-obligation consultations and estimates for all our services. Contact us to schedule a visit to your property where we can discuss your vision and provide a detailed quote.',
      },
      {
        question: 'How is pricing determined?',
        answer: 'Pricing depends on several factors including the size of your property, the scope of work, materials required, and complexity of the project. We provide transparent, detailed quotes so you know exactly what to expect.',
      },
      {
        question: 'Do you require a deposit?',
        answer: 'For larger projects such as hardscaping or full landscape designs, we typically require a deposit to secure materials and schedule the work. The specific terms will be outlined in your project proposal.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including cash, cheque, e-transfer, and major credit cards. Payment terms will be discussed and agreed upon before work begins.',
      },
    ],
  },
  {
    category: 'Scheduling & Process',
    questions: [
      {
        question: 'How do I get started with a landscaping project?',
        answer: 'Simply give us a call at (905) 931-8022 or fill out our online quote request form. We\'ll schedule a consultation to discuss your vision, assess your property, and provide a detailed proposal.',
      },
      {
        question: 'How far in advance should I book?',
        answer: 'For regular lawn care services, we can often accommodate new clients within a week or two. For larger projects like landscape design or hardscaping, we recommend booking at least 2-4 weeks in advance, especially during peak season (spring and summer).',
      },
      {
        question: 'What happens if it rains on my scheduled service day?',
        answer: 'For lawn maintenance, light rain typically doesn\'t affect our schedule. However, if conditions are unsafe or would result in poor quality work, we\'ll reschedule at no additional cost. We\'ll always communicate any changes promptly.',
      },
      {
        question: 'Do I need to be home during the service?',
        answer: 'For most lawn care and maintenance services, you don\'t need to be home as long as we have access to your property. For larger projects or initial consultations, we prefer to meet with you to discuss details.',
      },
    ],
  },
  {
    category: 'Lawn Care',
    questions: [
      {
        question: 'How often should my lawn be mowed?',
        answer: 'During the growing season (typically April through October), we recommend weekly mowing for optimal lawn health. The frequency may vary based on grass type, weather conditions, and your preferences.',
      },
      {
        question: 'Do you offer fertilization programs?',
        answer: 'Yes, we offer comprehensive fertilization programs tailored to the needs of Niagara Region lawns. Our programs typically include multiple applications throughout the growing season for optimal results.',
      },
      {
        question: 'What is lawn aeration and do I need it?',
        answer: 'Lawn aeration involves creating small holes in the soil to allow air, water, and nutrients to reach grass roots. We recommend aeration once or twice a year to improve lawn health, especially for compacted or high-traffic lawns.',
      },
    ],
  },
  {
    category: 'Hardscaping & Design',
    questions: [
      {
        question: 'What types of hardscaping do you do?',
        answer: 'We specialize in patios, walkways, retaining walls, driveways, fire pits, outdoor kitchens, and other outdoor living spaces. We work with natural stone, interlocking pavers, and various other materials.',
      },
      {
        question: 'How long does a typical hardscaping project take?',
        answer: 'Project timelines vary based on scope and complexity. A simple walkway might take 1-2 days, while a full patio with retaining walls could take 1-2 weeks. We\'ll provide a detailed timeline in your project proposal.',
      },
      {
        question: 'Do you provide design services?',
        answer: 'Yes! We offer complete landscape design services from initial concept to detailed plans. Our design process includes an initial consultation, concept development, and detailed design approval before installation begins.',
      },
    ],
  },
  {
    category: 'Seasonal Services',
    questions: [
      {
        question: 'Do you offer spring and fall cleanup?',
        answer: 'Yes, we offer comprehensive seasonal cleanup services including leaf removal, garden bed cleanup, pruning, mulching, and preparing your landscape for the coming season.',
      },
      {
        question: 'Do you provide snow removal services?',
        answer: 'Yes, we offer snow removal services for residential properties during the winter months. Contact us to discuss seasonal contracts and pricing.',
      },
      {
        question: 'When is the best time to start a landscaping project?',
        answer: 'Spring and fall are typically ideal for planting and many landscaping projects. However, hardscaping can often be done throughout the warmer months. Contact us to discuss the best timing for your specific project.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Find answers to common questions about our landscaping services, pricing, and process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={category.category} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
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

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? We're here to help. Reach out to us directly
            and we'll be happy to answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
