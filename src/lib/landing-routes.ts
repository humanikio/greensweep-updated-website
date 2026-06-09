// Routes that render as standalone, distraction-free landing pages.
// On these, the global site header nav and footer are hidden so paid-traffic
// visitors have a single conversion path (the quote form) and no links to
// leave the page.
export const BARE_LANDING_ROUTES = ['/outdoor-living'];

export function isBareLandingRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  return BARE_LANDING_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}
