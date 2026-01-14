'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Gift } from 'lucide-react';
import { useState } from 'react';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Image
            src="/images/greensweep-logo.png"
            alt="GreenSweep Niagara"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-primary uppercase">GreenSweep Niagara</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/areas"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Areas
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/early-bird-draw"
            className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            <Gift className="h-4 w-4" />
            Win 50% Off
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:9059318022"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            (905) 931-8022
          </a>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/quote">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            <Link
              href="/services"
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/areas"
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              href="/portfolio"
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/early-bird-draw"
              className="flex items-center gap-2 py-3 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Gift className="h-4 w-4" />
              Win 50% Off — Early Bird Draw
            </Link>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:9059318022"
                className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (905) 931-8022
              </a>
              <Button asChild className="bg-accent hover:bg-accent/90 w-full">
                <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
