import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/mockups/projectlogo.png"
                alt="Greensweep Niagara"
                width={40}
                height={40}
                className="h-10 w-10 brightness-0 invert"
              />
              <span className="font-bold text-lg uppercase">
                Greensweep
                <br />
                Niagara
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Premium landscaping services across the Niagara Region. Transform your outdoor space
              into a natural paradise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/lawn-care"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Lawn Care & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landscape-design"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hardscaping"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hardscaping & Stonework
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:9055555296"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    (905) 555-LAWN
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@greensweepniagara.ca"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    info@greensweepniagara.ca
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-sm text-primary-foreground/80">
                    Serving the Niagara Region
                    <br />
                    Ontario, Canada
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Greensweep Niagara. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
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
