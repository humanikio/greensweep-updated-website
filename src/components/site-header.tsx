'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { isBareLandingRoute } from '@/lib/landing-routes';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/areas', label: 'Areas' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const navLinkClass =
  'text-xs font-medium uppercase tracking-[0.15em] text-brand/70 transition-colors hover:text-brand';

function Logo({ className = 'h-12 w-auto md:h-14' }: { className?: string }) {
  return (
    <Image
      src="/GreenSweep-New-Logo.jpg"
      alt="GreenSweep Landscaping"
      width={2000}
      height={1000}
      priority
      className={className}
    />
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Distraction-free landing pages (paid traffic) show only the logo, so there
  // are no nav links to leave the page. The only conversion path is the form.
  if (isBareLandingRoute(pathname)) {
    return (
      <header className="w-full border-b border-brand/10 bg-sand">
        <div className="container mx-auto flex h-20 items-center px-4">
          <Logo />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/10 bg-sand">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="GreenSweep Landscaping home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/outdoor-living"
            className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-sage transition-colors hover:text-brand"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Outdoor Living Package
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:9059318022"
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-brand/70 transition-colors hover:text-brand"
          >
            <Phone className="h-3.5 w-3.5" />
            (905) 931-8022
          </a>
          <Button
            asChild
            className="h-10 rounded-sm bg-brand px-6 text-xs font-medium uppercase tracking-[0.15em] text-white hover:bg-brand/90"
          >
            <Link href="/quote">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-brand md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-brand/10 bg-sand md:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-brand/10 py-4 text-xs font-medium uppercase tracking-[0.15em] text-brand/80 transition-colors hover:text-brand"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/outdoor-living"
              className="flex items-center gap-2 border-b border-brand/10 py-4 text-xs font-medium uppercase tracking-[0.15em] text-sage transition-colors hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Outdoor Living Package
            </Link>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:9059318022"
                className="flex items-center justify-center gap-2 py-2 text-xs font-medium uppercase tracking-[0.12em] text-brand/70 transition-colors hover:text-brand"
              >
                <Phone className="h-3.5 w-3.5" />
                (905) 931-8022
              </a>
              <Button
                asChild
                className="h-11 w-full rounded-sm bg-brand text-xs font-medium uppercase tracking-[0.15em] text-white hover:bg-brand/90"
              >
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
