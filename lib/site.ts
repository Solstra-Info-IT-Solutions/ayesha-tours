/**
 * Single source of truth for business details used by SEO metadata,
 * structured data (JSON-LD), sitemap and analytics.
 * Update here once and every page picks it up.
 *
 * DEMO NOTE: Ayesha Tours has not yet supplied its phone, WhatsApp, email,
 * address or production domain. Every value below can be set through the
 * matching NEXT_PUBLIC_* environment variable; the defaults are clearly
 * fictional placeholders (example.com is a reserved domain, and Indian
 * mobile numbers never begin with 0) so nothing routes to a stranger.
 */

const env = (value: string | undefined) => (value || "").trim();

const configuredSiteUrl = env(process.env.NEXT_PUBLIC_SITE_URL);

// On Vercel, fall back to the project's production hostname so share
// previews and canonical URLs work on the demo link (still noindex below).
const vercelProductionHost = env(process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL);

export const SITE_URL = (
  configuredSiteUrl ||
  (vercelProductionHost ? `https://${vercelProductionHost}` : "http://localhost:3000")
).replace(/\/$/, "");

/** Only allow search engines once a real production domain is configured. */
export const IS_PRODUCTION_SITE = configuredSiteUrl.length > 0;

/** Shows demo labels on illustrative prices, dates and reviews. */
export const DEMO_MODE = env(process.env.NEXT_PUBLIC_DEMO_MODE) !== "false";

const phoneDigits = env(process.env.NEXT_PUBLIC_CONTACT_PHONE).replace(/[^\d]/g, "");
const whatsappDigits = env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER).replace(/[^\d]/g, "");

const formatIndianPhone = (digits: string) =>
  digits.length === 12 && digits.startsWith("91")
    ? `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`
    : `+${digits}`;

export const SITE = {
  name: "Ayesha Tours",
  shortName: "Ayesha Tours",
  legalName: "Ayesha Tours",
  tagline: "Haj & Umrah Packages",
  description:
    "Ayesha Tours helps pilgrims plan Umrah and Haj journeys with guidance on packages, flights, hotels near the Haramain, transport, ziyarat and visa paperwork – organised with care from enquiry to return.",
  phone: phoneDigits ? formatIndianPhone(phoneDigits) : "+91 00000 00000",
  phoneHref: phoneDigits ? `+${phoneDigits}` : "",
  whatsapp: whatsappDigits || phoneDigits,
  email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL) || "enquiry@example.com",
  hasRealContact: phoneDigits.length > 0,
  address: {
    street: env(process.env.NEXT_PUBLIC_ADDRESS_STREET) || "Office address to be confirmed",
    locality: env(process.env.NEXT_PUBLIC_ADDRESS_CITY) || "India",
    region: env(process.env.NEXT_PUBLIC_ADDRESS_REGION) || "",
    country: "IN",
  },
  hours: "Mon – Sat, 10 AM – 7 PM (TBC)",
  socials: [] as string[],
  googleBusinessUrl: env(process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL),
  ogImage: "/og-image.jpg",
} as const;

export const ANALYTICS = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  bingVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
};

/**
 * WhatsApp deep link. Until the client's WhatsApp number is configured this
 * opens WhatsApp's own "choose a chat" screen with the message pre-filled,
 * rather than sending it to an unknown number.
 */
export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** tel: link, or the contact page while no phone number is configured. */
export const phoneLink = () => (SITE.phoneHref ? `tel:${SITE.phoneHref}` : "/contact");

export const mailLink = (subject?: string) =>
  `mailto:${SITE.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

/** Office map. Set NEXT_PUBLIC_MAP_QUERY (address or "lat,lng") once confirmed. */
const mapQuery = env(process.env.NEXT_PUBLIC_MAP_QUERY);
export const HAS_OFFICE_LOCATION = mapQuery.length > 0;
export const mapEmbedUrl = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(mapQuery || "India")}&z=${mapQuery ? 16 : 4}&output=embed`;
export const mapDirectionsUrl = () =>
  mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`
    : "/contact";

export const absoluteUrl =(path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
