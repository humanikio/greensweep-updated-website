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
import { Leaf, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { QuoteFormData, initialFormData } from '@/lib/form-types';

interface SpringCleanupFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SpringCleanupFormModal({ open, onOpenChange }: SpringCleanupFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);

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

    if (!canSubmit()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://automations.myzylo.app/webhook/webhook-1768088685170', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'spring-cleanup',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Something went wrong. Please try again or call us directly.');
      return;
    }

    // Reset form after delay and close
    setTimeout(() => {
      setFormData(initialFormData);
      setIsSuccess(false);
      onOpenChange(false);
    }, 3000);
  };

  const handleClose = (newOpen: boolean) => {
    if (!isSubmitting) {
      onOpenChange(newOpen);
      if (!newOpen) {
        // Reset state when closing
        setTimeout(() => setIsSuccess(false), 200);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <DialogTitle className="text-2xl mb-2">You're All Set!</DialogTitle>
            <DialogDescription className="text-base">
              Thanks for booking your spring cleanup bundle! We'll be in touch within a few hours to confirm details and schedule your service.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 text-accent mb-1">
                <Leaf className="h-5 w-5" />
                <span className="text-sm font-semibold">SPRING CLEANUP BUNDLE</span>
              </div>
              <DialogTitle className="text-2xl">Claim 10% Off Your Spring Bundle</DialogTitle>
              <DialogDescription>
                Fill out this quick form and we'll get back to you within a few hours to schedule your spring cleanup + mulch service.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="modal-name">Full Name *</Label>
                <Input
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-email">Email Address *</Label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-phone">Phone Number *</Label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(905) 555-0123"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90"
                disabled={!canSubmit() || isSubmitting}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Claim 10% Off My Spring Bundle
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Offer valid until April 15, 2026. We'll reach out to confirm your service.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
