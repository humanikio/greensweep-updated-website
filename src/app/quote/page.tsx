'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';
import { toast } from 'sonner';
import { QuoteFormData, initialFormData } from '@/lib/form-types';
import { Eyebrow, primaryBtn } from '@/components/site-ui';

const expectations = [
  'A free, no-obligation quote tailored to your property',
  'A friendly response within 24 hours',
  'A personal consultation to understand your vision',
  'Clear, honest pricing with no surprises',
];

export default function QuotePage() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const canSubmit = () => {
    return formData.name && formData.email && formData.phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://automations.myzylo.app/webhook/webhook-1768088685170', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'quote-request',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast.success(
        "Quote request submitted! We'll contact you within 24 hours to discuss your project."
      );
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[45vh] items-center md:min-h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_3839.JPEG"
            alt="Layered garden beds in full seasonal bloom"
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl text-white">
            <Eyebrow className="mb-6 text-white/80">Free Quote</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Get Your Free Quote
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              Tell us about your project and we&apos;ll get back to you with a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* ============ EXPECT + FORM ============ */}
      <section className="flex-1 bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-2">
            {/* What to expect */}
            <div className="lg:pt-4">
              <Eyebrow className="mb-5">What To Expect</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                A Simple, Pressure-Free Start
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/70">
                Requesting a quote is the first easy step toward your new outdoor space. Here&apos;s
                what happens next.
              </p>
              <ul className="mt-8 space-y-4">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-sage" strokeWidth={1.75} />
                    <span className="text-lg leading-relaxed text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-foreground/70">
                Prefer to talk?{' '}
                <a href="tel:9059318022" className="font-medium text-brand hover:underline">
                  Call (905) 931-8022
                </a>
              </p>
            </div>

            {/* Form */}
            <div className="rounded-sm border border-brand/10 bg-white p-8 shadow-md ring-1 ring-black/5 md:p-10">
              <h3 className="font-display text-2xl font-normal">Request a Quote</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Fill out the form and we&apos;ll be in touch within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(905) 555-0123"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={`${primaryBtn} w-full`}
                  disabled={!canSubmit() || isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                  {!isSubmitting && <Check className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
