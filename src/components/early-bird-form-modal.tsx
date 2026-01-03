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
import { Checkbox } from '@/components/ui/checkbox';
import { Gift, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface EarlyBirdFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  { id: 'lawn-care', label: 'Lawn Care & Maintenance' },
  { id: 'landscape-design', label: 'Landscape Design' },
  { id: 'hardscaping', label: 'Hardscaping & Stonework' },
  { id: 'spring-cleanup', label: 'Spring/Fall Cleanup' },
];

export function EarlyBirdFormModal({ open, onOpenChange }: EarlyBirdFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    services: [] as string[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // TODO: Replace with actual form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after delay and close
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        services: [],
      });
      setIsSuccess(false);
      onOpenChange(false);
    }, 3000);
  };

  const handleClose = (newOpen: boolean) => {
    if (!isSubmitting) {
      onOpenChange(newOpen);
      if (!newOpen) {
        // Reset success state when closing
        setTimeout(() => setIsSuccess(false), 200);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <DialogTitle className="text-2xl mb-2">You're Entered!</DialogTitle>
            <DialogDescription className="text-base">
              Thanks for entering the Early Bird Draw! We'll be in touch with your free quote within 24 hours.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 text-accent mb-1">
                <Gift className="h-5 w-5" />
                <span className="text-sm font-semibold">EARLY BIRD DRAW ENTRY</span>
              </div>
              <DialogTitle className="text-2xl">Enter to Win 50% Off</DialogTitle>
              <DialogDescription>
                Fill out this quick form to enter the draw and receive your free quote.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  required
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Property Address (Optional)</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St, St. Catharines, ON"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-3">
                <Label>Services Interested In (Optional)</Label>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`modal-${service.id}`}
                        checked={formData.services.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                        disabled={isSubmitting}
                      />
                      <label
                        htmlFor={`modal-${service.id}`}
                        className="text-sm leading-none cursor-pointer"
                      >
                        {service.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Enter the Draw
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                No purchase necessary. By entering, you agree to receive your free quote via email.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
