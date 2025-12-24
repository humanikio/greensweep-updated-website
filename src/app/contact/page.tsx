'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Message sent successfully! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions about our services? Ready to start your project? We'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(905) 555-0123"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project or ask us a question..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you need a quick consultation or want to discuss a large project, we're
                  here to help. Reach out through any of the channels below, or use the contact form.
                </p>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Phone className="h-5 w-5 text-accent" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:9055555296"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      (905) 555-LAWN
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call us during business hours
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Mail className="h-5 w-5 text-accent" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:info@greensweepniagara.ca"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      info@greensweepniagara.ca
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <MapPin className="h-5 w-5 text-accent" />
                      Service Area
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">Niagara Region, Ontario</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Serving St. Catharines, Niagara Falls, Welland, and surrounding areas
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Clock className="h-5 w-5 text-accent" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Monday - Friday:</span> 7:00 AM - 6:00 PM
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Saturday:</span> 8:00 AM - 4:00 PM
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Sunday:</span> Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Map of Niagara Region service area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
