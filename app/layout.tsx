import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import CookieConsent from "@/components/CookieConsent";
import AnnouncementBar from "@/components/AnnouncementBar";
import Analytics from "@/components/seo/Analytics";
import ClickTracker from "@/components/seo/ClickTracker";
import JsonLd from "@/components/seo/JsonLd";
import { ANALYTICS, IS_PRODUCTION_SITE, SITE, SITE_URL, absoluteUrl } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} | Haj & Umrah Packages`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Umrah packages",
    "Haj packages",
    "Hajj and Umrah travel agency",
    "Ramadan Umrah package",
    "family Umrah package",
    "economy Umrah package",
    "premium Umrah package",
    "Umrah visa assistance",
    "Makkah Madinah ziyarat",
    "Ayesha Tours",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    url: SITE_URL,
    title: `${SITE.name} | Haj & Umrah Packages`,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  // Search engines are blocked until a production domain is configured,
  // so the demo (with placeholder contact details) is never indexed.
  robots: {
    index: IS_PRODUCTION_SITE,
    follow: IS_PRODUCTION_SITE,
    googleBot: {
      index: IS_PRODUCTION_SITE,
      follow: IS_PRODUCTION_SITE,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: ANALYTICS.googleVerification || undefined,
    other: ANALYTICS.bingVerification
      ? { "msvalidate.01": ANALYTICS.bingVerification }
      : undefined,
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3e0e52",
};

const businessLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#business`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE_URL,
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl(SITE.ogImage),
  description: SITE.description,
  telephone: SITE.hasRealContact ? SITE.phone : undefined,
  email: SITE.hasRealContact ? SITE.email : undefined,
  // Address, geo, hours and ratings are deliberately omitted until the
  // client confirms them – structured data must only contain verified facts.
  hasMap: SITE.googleBusinessUrl || undefined,
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: ["Umrah", "Hajj", "Ziyarat", "Pilgrimage travel"],
  sameAs: [...SITE.socials, ...(SITE.googleBusinessUrl ? [SITE.googleBusinessUrl] : [])],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE.name,
  publisher: { "@id": `${SITE_URL}/#business` },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd data={businessLd} />
        <JsonLd data={websiteLd} />
        <AnnouncementBar />
        {children}
        <FloatingActions />
        <CookieConsent />
        <Analytics />
        <ClickTracker />
      </body>
    </html>
  );
}
