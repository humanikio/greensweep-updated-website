'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  ArrowRight,
  Calculator,
  Leaf,
  Paintbrush,
  HardHat,
  Sparkles,
  Info,
  Phone,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  priceType: 'fixed' | 'per_sqft' | 'per_sqm' | 'per_linear_ft' | 'per_visit' | 'per_month' | 'hourly';
  hasQuantity?: boolean;
  quantityLabel?: string;
  quantityUnit?: string;
  minQuantity?: number;
  maxQuantity?: number;
  defaultQuantity?: number;
  note?: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  services: ServiceOption[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'lawn-maintenance',
    name: 'Lawn Care & Maintenance',
    icon: <Leaf className="h-5 w-5" />,
    description: 'Regular lawn care to keep your yard looking its best',
    services: [
      {
        id: 'lawn-mowing',
        name: 'Lawn Mowing (Per Visit)',
        description: 'Professional mowing, edging, and cleanup',
        basePrice: 55,
        priceType: 'per_visit',
        note: 'Price for average residential property',
      },
      {
        id: 'monthly-maintenance',
        name: 'Monthly Maintenance Package',
        description: 'Weekly mowing from May through October',
        basePrice: 238.33,
        priceType: 'per_month',
        note: 'Billed monthly, May 1 - Oct 31',
      },
      {
        id: 'season-pass',
        name: 'Full-Season Lawn Care Package',
        description: 'Weekly grass cutting, edging, and blowing off clippings',
        basePrice: 1430,
        priceType: 'fixed',
        note: 'Full season: May 1 - Oct 31',
      },
      {
        id: 'full-maintenance',
        name: 'Full Maintenance Package',
        description: 'Weekly mowing, spring/fall cleanup, and weekly garden weeding',
        basePrice: 2700,
        priceType: 'fixed',
        note: 'Our most comprehensive package: May 1 - Oct 31',
      },
      {
        id: 'spring-cleanup',
        name: 'Spring Cleanup',
        description: 'Leaf cleanup and weed removal to start the season',
        basePrice: 350,
        priceType: 'fixed',
      },
      {
        id: 'fall-cleanup',
        name: 'Fall Cleanup / Leaf Removal',
        description: 'Complete leaf cleanup and weed removal',
        basePrice: 350,
        priceType: 'fixed',
      },
      {
        id: 'fertilization',
        name: 'Fertilization & Weed Control',
        description: 'Weed spray and fertilizer application for entire lawn',
        basePrice: 250,
        priceType: 'per_visit',
      },
      {
        id: 'aeration',
        name: 'Lawn Aeration',
        description: 'Core aeration to improve soil health and grass growth',
        basePrice: 175,
        priceType: 'fixed',
        note: 'Price for average residential lawn',
      },
      {
        id: 'overseeding',
        name: 'Overseeding',
        description: 'Spread new grass seed to thicken your lawn',
        basePrice: 200,
        priceType: 'fixed',
        note: 'Price for average residential lawn',
      },
    ],
  },
  {
    id: 'garden-services',
    name: 'Garden & Plant Care',
    icon: <Paintbrush className="h-5 w-5" />,
    description: 'Garden bed maintenance and plant care services',
    services: [
      {
        id: 'mulching',
        name: 'Mulching / Garden Bed Refresh',
        description: 'Fresh mulch application for garden beds (includes 3.5 yards)',
        basePrice: 1000,
        priceType: 'fixed',
        note: 'Based on average house with 3.5 yards of mulch',
      },
      {
        id: 'shrub-trimming',
        name: 'Shrub & Hedge Trimming',
        description: 'Professional trimming and shaping',
        basePrice: 120,
        priceType: 'fixed',
        hasQuantity: true,
        quantityLabel: 'Estimated hours',
        quantityUnit: 'hours',
        minQuantity: 2,
        maxQuantity: 8,
        defaultQuantity: 2,
        note: '$60/hr per person, 2-hour minimum',
      },
      {
        id: 'tree-pruning',
        name: 'Tree Pruning (Small/Medium)',
        description: 'Pruning for small to medium sized trees',
        basePrice: 200,
        priceType: 'fixed',
        note: 'Starting price; larger trees quoted separately',
      },
    ],
  },
  {
    id: 'landscape-design',
    name: 'Landscape Design & Installation',
    icon: <Sparkles className="h-5 w-5" />,
    description: 'Custom landscape design and professional installation',
    services: [
      {
        id: 'landscape-design',
        name: 'Landscape Design / Consultation',
        description: 'Custom design plans for your property',
        basePrice: 750,
        priceType: 'fixed',
        note: 'Typical design package; $100/hr for design work',
      },
      {
        id: 'planting',
        name: 'Planting / Garden Installation',
        description: 'Professional planting and garden bed creation',
        basePrice: 60,
        priceType: 'hourly',
        hasQuantity: true,
        quantityLabel: 'Estimated hours',
        quantityUnit: 'hours',
        minQuantity: 2,
        maxQuantity: 20,
        defaultQuantity: 4,
        note: '$60/hr per person labour',
      },
      {
        id: 'sod-installation',
        name: 'Sod Installation',
        description: 'New sod supply and professional installation',
        basePrice: 20,
        priceType: 'per_sqm',
        hasQuantity: true,
        quantityLabel: 'Area',
        quantityUnit: 'sq metres',
        minQuantity: 10,
        maxQuantity: 500,
        defaultQuantity: 50,
        note: 'Includes cost of sod and installation',
      },
      {
        id: 'topsoil',
        name: 'Topsoil / Grading',
        description: 'Soil preparation and grading work',
        basePrice: 60,
        priceType: 'hourly',
        hasQuantity: true,
        quantityLabel: 'Estimated hours',
        quantityUnit: 'hours',
        minQuantity: 2,
        maxQuantity: 20,
        defaultQuantity: 4,
        note: '$60/hr per person labour; materials extra',
      },
    ],
  },
  {
    id: 'hardscaping',
    name: 'Hardscaping & Structures',
    icon: <HardHat className="h-5 w-5" />,
    description: 'Patios, walkways, fences, and outdoor features',
    services: [
      {
        id: 'patio',
        name: 'Interlock / Paver Patio Installation',
        description: 'Custom patio design and installation',
        basePrice: 30,
        priceType: 'per_sqft',
        hasQuantity: true,
        quantityLabel: 'Patio size',
        quantityUnit: 'sq ft',
        minQuantity: 100,
        maxQuantity: 800,
        defaultQuantity: 350,
        note: 'Average patio is ~350 sq ft ($11,000)',
      },
      {
        id: 'walkway',
        name: 'Walkways / Pathways',
        description: 'Interlock or paver walkway installation',
        basePrice: 30,
        priceType: 'per_sqft',
        hasQuantity: true,
        quantityLabel: 'Walkway size',
        quantityUnit: 'sq ft',
        minQuantity: 20,
        maxQuantity: 200,
        defaultQuantity: 50,
      },
      {
        id: 'fence',
        name: 'Wooden Fence Installation',
        description: 'Quality wooden fence construction',
        basePrice: 60,
        priceType: 'per_linear_ft',
        hasQuantity: true,
        quantityLabel: 'Fence length',
        quantityUnit: 'linear ft',
        minQuantity: 20,
        maxQuantity: 300,
        defaultQuantity: 100,
      },
      {
        id: 'fire-pit',
        name: 'Outdoor Fire Pit',
        description: 'Custom fire pit installation',
        basePrice: 3500,
        priceType: 'fixed',
        note: 'Starting price; varies by design and materials',
      },
    ],
  },
  {
    id: 'seasonal',
    name: 'Seasonal & Special Services',
    icon: <Sparkles className="h-5 w-5" />,
    description: 'Seasonal maintenance and specialty services',
    services: [
      {
        id: 'gutter-cleaning',
        name: 'Gutter Cleaning',
        description: 'Complete gutter cleaning and debris removal',
        basePrice: 275,
        priceType: 'fixed',
        note: 'Price for average house',
      },
    ],
  },
];

interface SelectedService {
  id: string;
  quantity?: number;
}

export default function PricingPage() {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const toggleService = (serviceId: string, defaultQuantity?: number) => {
    setSelectedServices((prev) => {
      const exists = prev.find((s) => s.id === serviceId);
      if (exists) {
        return prev.filter((s) => s.id !== serviceId);
      }
      return [...prev, { id: serviceId, quantity: defaultQuantity }];
    });

    // Set default quantity if applicable
    if (defaultQuantity && !quantities[serviceId]) {
      setQuantities((prev) => ({ ...prev, [serviceId]: defaultQuantity }));
    }
  };

  const updateQuantity = (serviceId: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [serviceId]: quantity }));
  };

  const isServiceSelected = (serviceId: string) => {
    return selectedServices.some((s) => s.id === serviceId);
  };

  const getServiceById = (serviceId: string): ServiceOption | undefined => {
    for (const category of serviceCategories) {
      const service = category.services.find((s) => s.id === serviceId);
      if (service) return service;
    }
    return undefined;
  };

  const calculateServicePrice = (serviceId: string): number => {
    const service = getServiceById(serviceId);
    if (!service) return 0;

    const quantity = quantities[serviceId] || service.defaultQuantity || 1;

    switch (service.priceType) {
      case 'per_sqft':
      case 'per_sqm':
      case 'per_linear_ft':
      case 'hourly':
        return service.basePrice * quantity;
      default:
        return service.basePrice;
    }
  };

  const totalEstimate = useMemo(() => {
    return selectedServices.reduce((total, selected) => {
      return total + calculateServicePrice(selected.id);
    }, 0);
  }, [selectedServices, quantities]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getPriceLabel = (service: ServiceOption) => {
    switch (service.priceType) {
      case 'per_visit':
        return `${formatPrice(service.basePrice)}/visit`;
      case 'per_month':
        return `${formatPrice(service.basePrice)}/month`;
      case 'per_sqft':
        return `${formatPrice(service.basePrice)}/sq ft`;
      case 'per_sqm':
        return `${formatPrice(service.basePrice)}/sq m`;
      case 'per_linear_ft':
        return `${formatPrice(service.basePrice)}/linear ft`;
      case 'hourly':
        return `${formatPrice(service.basePrice)}/hr`;
      default:
        return formatPrice(service.basePrice);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
            <Calculator className="h-5 w-5" />
            <span className="text-sm font-medium">Pricing Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Estimate Your Project Cost
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Use our pricing calculator to get a rough estimate for your landscaping project.
            Select the services you're interested in to see if they align with your budget.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Service Selection */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Select Your Services</h2>
                  <p className="text-muted-foreground">
                    Choose the services you're interested in to build your estimate.
                  </p>
                </div>

                <TooltipProvider>
                  {serviceCategories.map((category) => (
                    <Card key={category.id}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-accent/10 rounded-lg text-accent">
                            {category.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{category.name}</CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {category.services.map((service) => (
                          <div
                            key={service.id}
                            className={`p-4 rounded-lg border transition-colors ${
                              isServiceSelected(service.id)
                                ? 'border-accent bg-accent/5'
                                : 'border-border hover:border-accent/50'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <Checkbox
                                id={service.id}
                                checked={isServiceSelected(service.id)}
                                onCheckedChange={() =>
                                  toggleService(service.id, service.defaultQuantity)
                                }
                                className="mt-1"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Label
                                    htmlFor={service.id}
                                    className="text-base font-medium cursor-pointer"
                                  >
                                    {service.name}
                                  </Label>
                                  {service.note && (
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="max-w-xs">{service.note}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {service.description}
                                </p>
                                <p className="text-sm font-semibold text-accent mt-2">
                                  {getPriceLabel(service)}
                                </p>

                                {/* Quantity Slider */}
                                {isServiceSelected(service.id) && service.hasQuantity && (
                                  <div className="mt-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                      <span className="text-muted-foreground">
                                        {service.quantityLabel}
                                      </span>
                                      <span className="font-medium">
                                        {quantities[service.id] || service.defaultQuantity}{' '}
                                        {service.quantityUnit}
                                      </span>
                                    </div>
                                    <Slider
                                      value={[quantities[service.id] || service.defaultQuantity || 1]}
                                      onValueChange={(value) =>
                                        updateQuantity(service.id, value[0])
                                      }
                                      min={service.minQuantity || 1}
                                      max={service.maxQuantity || 100}
                                      step={1}
                                      className="w-full"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                      <span>
                                        {service.minQuantity} {service.quantityUnit}
                                      </span>
                                      <span>
                                        {service.maxQuantity} {service.quantityUnit}
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="text-right">
                                {isServiceSelected(service.id) && (
                                  <span className="font-bold text-primary">
                                    {formatPrice(calculateServicePrice(service.id))}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </TooltipProvider>
              </div>

              {/* Estimate Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-2 border-accent">
                    <CardHeader className="bg-accent/10">
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5" />
                        Your Estimate
                      </CardTitle>
                      <CardDescription>
                        Rough estimate based on selected services
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {selectedServices.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">
                          Select services to see your estimate
                        </p>
                      ) : (
                        <div className="space-y-4">
                          {selectedServices.map((selected) => {
                            const service = getServiceById(selected.id);
                            if (!service) return null;
                            return (
                              <div
                                key={selected.id}
                                className="flex justify-between items-start text-sm"
                              >
                                <div className="flex-1 min-w-0 pr-2">
                                  <p className="font-medium truncate">{service.name}</p>
                                  {service.hasQuantity && (
                                    <p className="text-muted-foreground text-xs">
                                      {quantities[selected.id] || service.defaultQuantity}{' '}
                                      {service.quantityUnit}
                                    </p>
                                  )}
                                </div>
                                <p className="font-semibold whitespace-nowrap">
                                  {formatPrice(calculateServicePrice(selected.id))}
                                </p>
                              </div>
                            );
                          })}

                          <div className="border-t pt-4 mt-4">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-bold">Total Estimate</span>
                              <span className="text-2xl font-bold text-primary">
                                {formatPrice(totalEstimate)}
                              </span>
                            </div>
                          </div>

                          <div className="bg-secondary rounded-lg p-4 mt-4">
                            <p className="text-sm text-muted-foreground">
                              <strong>Note:</strong> This is a rough estimate only. Final pricing
                              may vary based on property size, accessibility, and specific
                              requirements. Contact us for a free, accurate quote.
                            </p>
                          </div>

                          <div className="space-y-3 mt-6">
                            <Button asChild className="w-full bg-accent hover:bg-accent/90">
                              <Link href="/quote">
                                Get Accurate Quote
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full">
                              <a href="tel:9059318022">
                                <Phone className="mr-2 h-4 w-4" />
                                Call (905) 931-8022
                              </a>
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Service Season Note */}
                  <Card className="mt-4">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Service Season</h3>
                      <p className="text-sm text-muted-foreground">
                        Our regular lawn care services run from <strong>May 1 to October 31</strong>.
                        Seasonal packages are priced for this period.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retaining Walls Note */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Custom Projects</h2>
            <p className="text-muted-foreground mb-6">
              Some projects like <strong>retaining walls</strong> and complex landscaping features
              require a custom quote based on materials, site access, and design complexity.
              Contact us for a free consultation and accurate estimate.
            </p>
            <Button asChild>
              <Link href="/quote">
                Request Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Our estimates help you plan, but every property is unique. Get a free,
            no-obligation quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quote">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white border-white/30 text-primary hover:bg-white/90"
              asChild
            >
              <a href="tel:9059318022">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
