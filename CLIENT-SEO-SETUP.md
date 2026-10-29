# Ayesha Tours – Setup & Handoff Guide

This site is a **demo** of the Ayesha Tours (Haj & Umrah Packages) website,
built on the Global Horizons reference project. It keeps the reference layout,
components and lead flow, with the Ayesha Tours logo, a palette derived from
the logo, and pilgrimage content.

Everything marked *demo* below must be confirmed or replaced by the client
before launch.

## 1. Environment variables (hosting → Settings → Environment Variables)

| Variable | What to put | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Live domain, e.g. `https://www.example.com` (no trailing slash). **Until this is set the site tells search engines not to index it** (robots.txt + `noindex`). | **Yes** |
| `NEXT_PUBLIC_DEMO_MODE` | Set to `false` once packages and content are confirmed. Hides the "demo" banner and package labels, and publishes TouristTrip structured data. | **Yes, at launch** |
| `NEXT_PUBLIC_CONTACT_PHONE` | Phone with country code, e.g. `+91 98xxx xxxxx`. Until set, the site shows `+91 00000 00000` and phone buttons go to the Contact page. | **Yes** |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code (defaults to the phone). Until set, forms open WhatsApp's "choose a chat" screen instead of a business chat. | **Yes** |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public enquiry email. Default is the placeholder `enquiry@example.com`. | **Yes** |
| `NEXT_PUBLIC_ADDRESS_STREET` / `NEXT_PUBLIC_ADDRESS_CITY` / `NEXT_PUBLIC_ADDRESS_REGION` | Office address shown in the footer and Contact page. | **Yes** |
| `NEXT_PUBLIC_MAP_QUERY` | Office address or `lat,lng` for the embedded map and "Get directions". Until set, the map shows India. | Recommended |
| `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` | Public link to the Google Business Profile. | Recommended |
| `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Analytics and verification, as in the reference project. | Optional |
| `SMTP_USER` / `SMTP_PASS` / `LEAD_TO_EMAIL` | Email copy of every form submission (see section 5). | Recommended |

Office hours ("Mon – Sat, 10 AM – 7 PM (TBC)") and social links live in
`lib/site.ts`.

## 2. Design system – "A Journey Beyond Distance"

The creative direction, research and reasoning are in
`docs/ayesha-tours-market-research.md`; the build notes are in
`docs/redesign-implementation-report.md`.

| Token (`app/globals.css`) | Value | Use |
|---|---|---|
| `night` | `#0e1f1b` | Deepest chapter backgrounds, header, footer |
| `emerald` / `emerald-soft` | `#102b25` / `#1c3b33` | Dark sections, raised dark surfaces |
| `ivory` / `ivory-deep` | `#f5f0e7` / `#ece4d6` | Light reading spreads, text on dark |
| `stone` | `#d9d2c6` | Lines and muted surfaces |
| `charcoal` / `mist` | `#202622` / `#5c6660` | Body and secondary text on ivory |
| `sage` | `#a9b8b0` | Secondary text on dark |
| `gold` / `gold-ink` | `#b89a62` / `#7a6236` | Accents on dark / gold text on ivory |

The logo keeps its own magenta, purple and green and always sits on an
ivory plate. Fonts: Cormorant Garamond (display), Manrope (interface and
body) and Amiri (only for the Arabic names of the holy cities and the
Talbiyah).

## 3. Demo content the client must confirm or replace

- **Contact details** – phone, WhatsApp, email, address, map pin, office hours, social links (section 1).
- **Packages** (`components/tours/TourPackagesGrid.tsx`, home "Packages For Every Pilgrim") – names, durations, night splits and hotel styles are illustrative. No prices are shown anywhere.
- **About page story** – the "Our Story" section has a marked demo paragraph; founding year, licences/registrations and any credentials must come from the client. Nothing like "20+ years", ratings or awards is claimed.
- **Pilgrim Memories / Gallery** – currently Wikimedia Commons photos of the holy sites; replace with the client's own group photos (with permission).
- **Vehicle photos** on Transport and the enquiry wizard are generic demo images.
- **Legal pages** (privacy, terms, booking, cancellation, payment, cookie, disclaimer) are the reference templates with light pilgrimage edits. They need review by the client / a legal adviser, especially cancellation and refund terms for Umrah/Haj.
- **Testimonials** – none are shown. Add only real, permitted reviews.
- **Haj** – the site offers "Haj guidance" only. Confirm whether the client is an authorised Haj group organiser before advertising Haj packages.

## 4. Images and licences

All demo photos are in `public/images/demo/` and come from Wikimedia Commons
under CC0, CC BY or CC BY-SA licences. Attribution is published at
`/image-credits` (linked in the footer) from `lib/image-credits.ts`. If you
replace a photo, update or remove its entry; keep the page while any CC BY /
BY-SA image remains. `public/og-image.jpg` (social share image) combines the
logo with the CC BY-SA Kaaba photo, so it is covered by the same credit.

## 5. How leads work

1. Every form (Contact, Request Quote, Transport Quote, Enquiry wizard, home contact) validates in the browser, then opens WhatsApp with the enquiry pre-filled.
2. The success message says WhatsApp has opened and that **nothing is sent until the visitor presses send** – it never claims the enquiry was received.
3. In parallel, the form data is posted to `/api/lead`, which emails it to the business **if SMTP is configured**. Without `SMTP_USER`/`SMTP_PASS` the API returns 503 silently (visible in the browser console as a failed request).

Email setup: sign in to the sending Gmail account, enable 2-Step Verification,
create an app password at myaccount.google.com/apppasswords, then set
`SMTP_USER`, `SMTP_PASS` and optionally `LEAD_TO_EMAIL` and redeploy. Submit a
test enquiry and confirm it arrives.

## 6. After launch

- Create/verify the Google Business Profile (category: *Travel agency*; add *Hajj and Umrah travel agency* if offered) with the same name, address and phone as the site.
- Add the domain to Google Search Console and submit `https://<domain>/sitemap.xml`.
- New SEO landing pages can be added in `lib/landing-pages.ts` (pages, sitemap and structured data are generated automatically).
