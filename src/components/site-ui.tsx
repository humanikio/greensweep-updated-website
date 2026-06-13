import * as React from 'react';

/**
 * Shared "Forest & Brass" design primitives, extracted from the homepage so every
 * page renders the same elegant, high-value styling. Use these instead of ad-hoc
 * Tailwind so the site stays cohesive.
 *
 * Conventions:
 *  - Headings use `font-display` (Cormorant) at light weight.
 *  - Section labels use <Eyebrow> (uppercase, tracked, brass).
 *  - Buttons/links use the class constants below (crisp corners, tracked caps).
 *  - Section vertical rhythm is `py-24 md:py-32`.
 *  - Warm field backgrounds: bg-cream / bg-wheat / bg-stone / bg-moss; dark anchor: bg-brand.
 */

// Button + link treatments.
export const primaryBtn =
  'bg-brand text-white hover:bg-brand/90 rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
export const outlineBtn =
  'border border-brand/30 bg-transparent text-brand hover:bg-brand hover:text-white rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
export const heroOutlineBtn =
  'border border-white/60 bg-transparent text-white hover:bg-white hover:text-brand rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
export const lightOutlineBtn =
  'border border-white/50 bg-transparent text-white hover:bg-white hover:text-brand rounded-sm h-12 px-8 text-xs font-medium uppercase tracking-[0.18em]';
export const whiteBtn =
  'h-12 rounded-sm bg-white px-8 text-xs font-medium uppercase tracking-[0.18em] text-brand hover:bg-white/90';

// Inline "Learn more →" style links.
export const arrowLink =
  'inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] text-sage transition-colors hover:text-brand';
export const arrowLinkLight =
  'inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] text-clay-soft transition-colors hover:text-white';

// Floating white card (image-on-top or content). Pair with `group` for hover zoom.
export const floatingCard =
  'group overflow-hidden rounded-sm bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl';

export function Eyebrow({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xs font-medium uppercase tracking-[0.25em] text-sage ${className}`}>
      {children}
    </p>
  );
}

// Subtle film-grain overlay for depth on occasional sections. Drop inside a
// `relative` section and keep sibling content on a `relative` layer above it.
export function Grain({ className = 'opacity-[0.05]' }: { className?: string }) {
  return (
    <div aria-hidden className={`bg-noise pointer-events-none absolute inset-0 ${className}`} />
  );
}

// Centered section header (eyebrow + serif title + optional intro).
export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  className = '',
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`mx-auto mb-16 max-w-2xl text-center ${className}`}>
      <Eyebrow className={`mb-5 ${dark ? 'text-clay-soft' : ''}`}>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl font-light leading-[1.2] md:text-4xl">{title}</h2>
      {intro ? (
        <p
          className={`mt-6 text-lg leading-relaxed ${dark ? 'font-light text-white/70' : 'text-foreground/70'}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
