'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, CheckCircle, Leaf } from 'lucide-react';
import { toast } from 'sonner';

// ---------------------------------------------------------------------------
// WIRE-UP POINT: where the lead is delivered.
// Replace this URL with your own handler/CRM endpoint. It currently posts to
// the shared GreenSweep automation webhook so the form works out of the box.
// ---------------------------------------------------------------------------
const QUOTE_ENDPOINT = 'https://automations.myzylo.app/webhook/webhook-1768088685170';

// Meta Pixel is initialised globally in src/app/layout.tsx.
// We fire a "Lead" conversion event here on a successful submit.
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Niagara service area. Keep in sync with the campaign brief.
const SERVICE_AREAS = [
  'Niagara-on-the-Lake',
  'St. Catharines',
  'Fonthill',
  'Grimsby',
  'Port Dalhousie',
  'Welland',
  'Niagara Falls',
  'Other / nearby Niagara',
];

const BUDGET_RANGES = [
  'Not sure yet',
  'Under $10,000',
  '$10,000 to $20,000',
  '$20,000 to $35,000',
  '$35,000+',
];

interface OutdoorLivingFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  description: string;
  budget: string;
}

const initialData: OutdoorLivingFormData = {
  name: '',
  phone: '',
  email: '',
  city: '',
  description: '',
  budget: '',
};

interface OutdoorLivingFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OutdoorLivingFormModal({ open, onOpenChange }: OutdoorLivingFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<OutdoorLivingFormData>(initialData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const canSubmit = () =>
    Boolean(formData.name && formData.phone && formData.email && formData.city);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!canSubmit()) {
      toast.error('Please add your name, phone, email, and city.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(QUOTE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'outdoor-living-package',
          offer: 'Up to $1,500 off the Outdoor Living Package',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Fire the Meta Pixel Lead conversion event.
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Outdoor Living Package',
          content_category: 'landscaping',
        });
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      toast.error('Something went wrong. Please try again or call us directly.');
    }
  };

  const handleClose = (newOpen: boolean) => {
    if (isSubmitting) return;
    onOpenChange(newOpen);
    if (!newOpen) {
      // Reset state shortly after the close animation.
      setTimeout(() => {
        setIsSuccess(false);
        setFormData(initialData);
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-h-[92vh] overflow-y-auto sm:max-w-lg"
        onInteractOutside={(e) => isSubmitting && e.preventDefault()}
      >
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <DialogTitle className="mb-2 text-2xl">Request received!</DialogTitle>
            <DialogDescription className="text-base">
              We&apos;ll reach out within 24 hours to book your free, no-obligation
              quote for the Outdoor Living Package.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="mb-1 flex items-center gap-2 text-accent">
                <Leaf className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Outdoor Living Package
                </span>
              </div>
              <DialogTitle className="text-2xl">
                Get your free quote, up to $1,500 off
              </DialogTitle>
              <DialogDescription>
                Tell us about your space and we&apos;ll reach out within 24 hours to
                book it.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ol-name">Name *</Label>
                <Input
                  id="ol-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ol-phone">Phone *</Label>
                  <Input
                    id="ol-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(905) 555-0123"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ol-email">Email *</Label>
                  <Input
                    id="ol-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ol-city">Property city / area *</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, city: value }))
                  }
                  disabled={isSubmitting}
                >
                  <SelectTrigger id="ol-city">
                    <SelectValue placeholder="Select your area" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_AREAS.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ol-description">
                  Project description{' '}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                </Label>
                <Textarea
                  id="ol-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="e.g. New paver patio and garden beds for the backyard."
                  rows={3}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ol-budget">
                  Budget range{' '}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                </Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, budget: value }))
                  }
                  disabled={isSubmitting}
                >
                  <SelectTrigger id="ol-budget">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET_RANGES.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-base font-semibold hover:bg-accent/90"
                disabled={!canSubmit() || isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Book My Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                No obligation. We&apos;ll reach out within 24 hours.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
