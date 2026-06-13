'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { QuoteFormData, initialFormData } from '@/lib/form-types';
import { Eyebrow, SectionHeading, primaryBtn } from '@/components/site-ui';

export default function ContactPage() {
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
          formType: 'contact',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[50vh] items-center md:min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/project-photos/IMG_3843.JPEG"
            alt="Upscale front entry with paver walkway and Japanese maple"
            fill
            className="object-cover object-[50%_55%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl text-white">
            <Eyebrow className="mb-6 text-white/80">Get In Touch</Eyebrow>
            <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light text-white/85 md:text-xl">
              Have questions, or ready to start your project? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FORM + INFO ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
            {/* Form */}
            <div>
              <Eyebrow className="mb-5">Send a Message</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Tell Us About Your Project
              </h2>
              <p className="mt-6 leading-relaxed text-foreground/70">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="mt-8 rounded-sm border border-brand/10 bg-white p-8 shadow-md ring-1 ring-black/5">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Smith"
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
                      required
                      placeholder="john@example.com"
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
                      required
                      placeholder="(905) 555-0123"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className={`${primaryBtn} w-full`}
                    disabled={!canSubmit() || isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div>
              <Eyebrow className="mb-5">Reach Us Directly</Eyebrow>
              <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">
                Other Ways To Connect
              </h2>
              <p className="mt-6 leading-relaxed text-foreground/70">
                Whether it&apos;s a quick question or a large project, we&apos;re here to help.
                Reach out through any of the channels below.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="tel:9059318022"
                  className="group flex items-center gap-5 rounded-sm border border-brand/10 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                    <p className="mt-0.5 font-medium">(905) 931-8022</p>
                  </div>
                </a>
                <a
                  href="mailto:greensweepniagara@gmail.com"
                  className="group flex items-center gap-5 rounded-sm border border-brand/10 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage transition-colors group-hover:bg-sage group-hover:text-white">
                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                    <p className="mt-0.5 font-medium">greensweepniagara@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-5 rounded-sm border border-brand/10 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Service Area
                    </p>
                    <p className="mt-0.5 font-medium">Niagara Region, Ontario</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 rounded-sm border border-brand/10 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage">
                    <Clock className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Business Hours
                    </p>
                    <div className="mt-1 space-y-0.5 text-sm text-foreground/80">
                      <p>Monday to Friday: 7:00 AM – 6:00 PM</p>
                      <p>Saturday: 8:00 AM – 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section className="bg-stone py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Where We Work"
            title="Our Service Area"
            intro="Proudly serving St. Catharines, Niagara-on-the-Lake, Fonthill, Grimsby, Beamsville, and surrounding areas."
          />
          <div className="mx-auto max-w-4xl overflow-hidden rounded-sm shadow-md ring-1 ring-black/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186193.95731862052!2d-79.40889565!3d43.09022785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d35ca5f4d1c6f9%3A0xb0e2a2e5c5b0b25c!2sNiagara%20Region%2C%20ON!5e0!3m2!1sen!2sca!4v1703548800000!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GreenSweep Niagara Service Area - Niagara Region"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
