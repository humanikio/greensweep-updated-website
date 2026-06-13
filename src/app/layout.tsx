import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fine, high-contrast display serif for elegant headings (see globals.css --font-display).
const cormorant = Cormorant_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greensweepniagara.com"),
  title: {
    default: "GreenSweep Niagara | Premium Landscaping Services in Niagara Region",
    template: "%s | GreenSweep Niagara",
  },
  description: "Transform your outdoor space with GreenSweep Niagara's professional lawn care, landscape design, and hardscaping services across the Niagara Region.",
  keywords: [
    "landscaping",
    "lawn care",
    "Niagara Region",
    "St. Catharines",
    "Niagara Falls",
    "lawn maintenance",
    "landscape design",
    "hardscaping",
    "garden maintenance",
    "outdoor living",
  ],
  authors: [{ name: "GreenSweep Niagara" }],
  creator: "GreenSweep Niagara",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://greensweepniagara.com",
    siteName: "GreenSweep Niagara",
    title: "GreenSweep Niagara | Premium Landscaping Services",
    description: "Transform your outdoor space with professional lawn care, landscape design, and hardscaping services across the Niagara Region.",
    images: [
      {
        url: "/project-photos/1.png",
        width: 1200,
        height: 630,
        alt: "GreenSweep Niagara - Upscale landscaped property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenSweep Niagara | Premium Landscaping Services",
    description: "Transform your outdoor space with professional lawn care, landscape design, and hardscaping services across the Niagara Region.",
    images: ["/project-photos/1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// LocalBusiness structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://greensweepniagara.com",
  name: "GreenSweep Niagara",
  description: "Professional landscaping services including lawn care, landscape design, and hardscaping across the Niagara Region.",
  url: "https://greensweepniagara.com",
  telephone: "+1-905-931-8022",
  email: "greensweepniagara@gmail.com",
  image: "https://greensweepniagara.com/images/greensweep-logo.png",
  logo: "https://greensweepniagara.com/images/greensweep-logo.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "St. Catharines",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.1594,
    longitude: -79.2469,
  },
  areaServed: [
    { "@type": "City", name: "St. Catharines" },
    { "@type": "City", name: "Niagara Falls" },
    { "@type": "City", name: "Niagara-on-the-Lake" },
    { "@type": "City", name: "Welland" },
    { "@type": "City", name: "Thorold" },
    { "@type": "City", name: "Fort Erie" },
    { "@type": "City", name: "Grimsby" },
    { "@type": "City", name: "Beamsville" },
    { "@type": "City", name: "Fonthill" },
    { "@type": "City", name: "Port Colborne" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    // Add social media URLs when available
    // "https://www.facebook.com/greensweepniagara",
    // "https://www.instagram.com/greensweepniagara",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "4",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jordan Duffy" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Carter and his team were flexible to my changing needs over the season and kept my yard in tip top shape.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jason Talyor" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "Highly recommend Green Sweep Niagara! Punctual, professional and go above and beyond expectations.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lawn Care & Maintenance",
          description: "Weekly mowing, fertilization, aeration, and seasonal treatments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landscape Design",
          description: "Custom landscape designs from concept to installation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hardscaping & Stonework",
          description: "Patios, walkways, retaining walls, and outdoor living spaces.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '901996119178818');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=901996119178818&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <div className="flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
              </div>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
