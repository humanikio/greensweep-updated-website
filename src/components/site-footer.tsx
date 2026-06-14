'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { isBareLandingRoute } from '@/lib/landing-routes';

export function SiteFooter() {
  const pathname = usePathname();

  // Hidden on distraction-free landing pages; those pages supply their own
  // service-area and contact block.
  if (isBareLandingRoute(pathname)) {
    return null;
  }

  return (
    <footer className="bg-brand text-white/70">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-5 inline-block">
              <Image
                src="/greensweep-logo-white.png"
                alt="GreenSweep Landscaping"
                width={1000}
                height={320}
                className="h-12 w-auto md:h-14"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/65">
              Bespoke landscaping and outdoor living for the finest homes across the Niagara Region.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/greensweepniagara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-clay-soft transition-colors hover:text-white"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/greensweepniagara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-clay-soft transition-colors hover:text-white"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-clay-soft">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-clay-soft">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/lawn-care"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Lawn Care & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landscape-design"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hardscaping"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Hardscaping & Stonework
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-clay-soft">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/areas/niagara-on-the-lake"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Niagara-on-the-Lake
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/st-catharines"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  St. Catharines
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/fonthill"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Fonthill
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/grimsby"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Grimsby
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/port-dalhousie"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  Port Dalhousie
                </Link>
              </li>
              <li>
                <Link
                  href="/areas"
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-clay-soft">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-clay-soft" />
                <div>
                  <a
                    href="tel:9059318022"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    (905) 931-8022
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-clay-soft" />
                <div>
                  <a
                    href="mailto:greensweepniagara@gmail.com"
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    greensweepniagara@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-clay-soft" />
                <div>
                  <span className="text-sm text-white/65">
                    Serving the Niagara Region
                    <br />
                    Ontario, Canada
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} GreenSweep Landscaping. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
