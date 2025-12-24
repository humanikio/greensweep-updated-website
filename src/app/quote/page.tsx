'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { toast } from 'sonner';

type Step = 1 | 2 | 3 | 4;

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    // Step 1: Service Selection
    services: [] as string[],
    // Step 2: Property Details
    propertyType: '',
    propertySize: '',
    // Step 3: Project Details
    timeline: '',
    budget: '',
    description: '',
    // Step 4: Contact Info
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.services.length > 0;
      case 2:
        return formData.propertyType && formData.propertySize;
      case 3:
        return formData.timeline && formData.budget;
      case 4:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(
      "Quote request submitted! We'll contact you within 24 hours to discuss your project."
    );

    // Reset form
    setFormData({
      services: [],
      propertyType: '',
      propertySize: '',
      timeline: '',
      budget: '',
      description: '',
      name: '',
      email: '',
      phone: '',
      address: '',
    });
    setCurrentStep(1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Answer a few quick questions and we'll provide a detailed quote for your landscaping
            project.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex items-center w-full">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold ${
                        step < currentStep
                          ? 'bg-accent border-accent text-accent-foreground'
                          : step === currentStep
                            ? 'border-accent text-accent'
                            : 'border-border text-muted-foreground'
                      }`}
                    >
                      {step < currentStep ? <Check className="h-5 w-5" /> : step}
                    </div>
                    {step < 4 && (
                      <div
                        className={`h-0.5 flex-1 mx-2 ${
                          step < currentStep ? 'bg-accent' : 'bg-border'
                        }`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <span className={currentStep === 1 ? 'text-accent font-medium' : 'text-muted-foreground'}>Services</span>
              <span className={currentStep === 2 ? 'text-accent font-medium' : 'text-muted-foreground'}>Property</span>
              <span className={currentStep === 3 ? 'text-accent font-medium' : 'text-muted-foreground'}>Details</span>
              <span className={currentStep === 4 ? 'text-accent font-medium' : 'text-muted-foreground'}>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>What services are you interested in?</CardTitle>
                  <CardDescription>Select all that apply</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { id: 'lawn-care', label: 'Lawn Care & Maintenance' },
                      { id: 'landscape-design', label: 'Landscape Design' },
                      { id: 'hardscaping', label: 'Hardscaping & Stonework' },
                      { id: 'spring-cleanup', label: 'Spring/Fall Cleanup' },
                      { id: 'irrigation', label: 'Irrigation Systems' },
                      { id: 'other', label: 'Other (please specify in project details)' },
                    ].map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={service.id}
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <label
                          htmlFor={service.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {service.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Property Details */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Tell us about your property</CardTitle>
                  <CardDescription>This helps us provide an accurate quote</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Property Type</Label>
                    <RadioGroup
                      value={formData.propertyType}
                      onValueChange={(value) => handleRadioChange('propertyType', value)}
                    >
                      {['Residential', 'Commercial', 'Industrial', 'Multi-Unit'].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <RadioGroupItem value={type.toLowerCase()} id={type.toLowerCase()} />
                          <Label htmlFor={type.toLowerCase()} className="font-normal cursor-pointer">
                            {type}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Approximate Property Size</Label>
                    <RadioGroup
                      value={formData.propertySize}
                      onValueChange={(value) => handleRadioChange('propertySize', value)}
                    >
                      {[
                        { value: 'small', label: 'Small (< 5,000 sq ft)' },
                        { value: 'medium', label: 'Medium (5,000 - 10,000 sq ft)' },
                        { value: 'large', label: 'Large (10,000 - 20,000 sq ft)' },
                        { value: 'extra-large', label: 'Extra Large (> 20,000 sq ft)' },
                      ].map((size) => (
                        <div key={size.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={size.value} id={size.value} />
                          <Label htmlFor={size.value} className="font-normal cursor-pointer">
                            {size.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Project Details */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Project details</CardTitle>
                  <CardDescription>Help us understand your project scope</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>When would you like to start?</Label>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) => handleRadioChange('timeline', value)}
                    >
                      {[
                        { value: 'asap', label: 'As soon as possible' },
                        { value: '1-3-months', label: 'Within 1-3 months' },
                        { value: '3-6-months', label: 'Within 3-6 months' },
                        { value: 'flexible', label: 'Flexible / Planning ahead' },
                      ].map((timeline) => (
                        <div key={timeline.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={timeline.value} id={timeline.value} />
                          <Label htmlFor={timeline.value} className="font-normal cursor-pointer">
                            {timeline.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Estimated Budget Range</Label>
                    <RadioGroup
                      value={formData.budget}
                      onValueChange={(value) => handleRadioChange('budget', value)}
                    >
                      {[
                        { value: 'under-5k', label: 'Under $5,000' },
                        { value: '5k-10k', label: '$5,000 - $10,000' },
                        { value: '10k-25k', label: '$10,000 - $25,000' },
                        { value: 'over-25k', label: 'Over $25,000' },
                        { value: 'unsure', label: "Not sure yet" },
                      ].map((budget) => (
                        <div key={budget.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={budget.value} id={budget.value} />
                          <Label htmlFor={budget.value} className="font-normal cursor-pointer">
                            {budget.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description (Optional)</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us more about your vision for this project..."
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle>Your contact information</CardTitle>
                  <CardDescription>How can we reach you with your quote?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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

                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address (Optional)</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main St, St. Catharines, ON"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-accent hover:bg-accent/90"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="bg-accent hover:bg-accent/90"
                >
                  Submit Quote Request
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
