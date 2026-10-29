# Ayesha Tours – Redesign Implementation Report

Date: 29 October 2026 · Direction: "A Journey Beyond Distance" (see
`ayesha-tours-market-research.md` for research and the reasoning).

## What changed

### New homepage (`app/page.tsx`)
| # | Section | File | Notes |
|---|---|---|---|
| 1 | Cinematic opening | `components/home/HomeHero.tsx`, `chapters.ts` | Full-bleed photographic chapters (Makkah · Madinah · Arafat) with a chapter rail, Arabic names, coordinates and caption; opening mask reveal + staggered headline; slow crossfade, auto-advance paused on hover/focus, off under reduced motion |
| 2 | Journey composer | `components/home/JourneyComposer.tsx` | Umrah/Haj, month (or Haj-season note), adults/children steppers, needs chips → live sentence → prefilled WhatsApp, the existing enquiry wizard, or the matching journeys filter |
| 3 | Two cities | `components/home/TwoCities.tsx`, `ZiyaratStrip.tsx` | Makkah and Madinah chapters (rites / visit notes, Arabic names) with mask-revealed imagery; snap-scrolling ziyarat strip with buttons |
| 4 | Curated journeys | `components/home/CuratedJourneys.tsx` | Editorial index with sticky image preview, filters, demo label; uses the existing `packages` data |
| 5 | Journey, thoughtfully arranged | `components/home/JourneyArranged.tsx` | Five stages with a gold line drawn by scroll (Framer Motion `useScroll`) |
| 6 | What you can expect | `components/home/Expectations.tsx` | Commitments plus an honest credentials panel (no invented claims) |
| 7 | Conversation | `components/home/Conversation.tsx` | Accessible form: inline errors, `aria-invalid`, focus management; WhatsApp + `/api/lead` email copy + `trackLead`, honest success state |

### Shared system
- `app/globals.css` – new tokens, fluid type scale, focus style, reveal and opening keyframes, reduced-motion rules.
- `app/layout.tsx` – Cormorant Garamond, Manrope, Amiri via `next/font`; motion bootstrap script; `RevealObserver`; theme colour.
- `components/motion/RevealObserver.tsx` – one IntersectionObserver for every `data-reveal` element; content stays visible without JS or with reduced motion.
- `components/Navbar.tsx` – new header: logo plate, four links, one CTA, full-screen menu (focus, Escape, scroll lock); `variant="overlay"` for the homepage. `Navbarforenquirypage.tsx` now reuses it with `hideCta`.
- `components/Footer.tsx`, `components/AnnouncementBar.tsx` – rewritten for the new identity; demo notice only when `DEMO_MODE`.
- `components/FloatingActions.tsx` – darker WhatsApp green for contrast; hidden and `inert` over the homepage hero.

### Secondary pages
All other pages keep their structure and functionality; their colours were
migrated to the new palette (plum → emerald, magenta → antique gold, hot-pink
CTAs → deep emerald, blush → ivory) and they inherit the new header, footer
and fonts. Contrast issues created by the migration were found with an
in-browser WCAG audit and fixed.

### Unchanged on purpose
Routes, `/api/lead`, `/api/whatsapp/send`, `lib/site.ts` contact helpers and
env vars, form logic on secondary pages, package data, SEO metadata, sitemap,
robots (noindex until a domain is set), structured data. The old homepage
section components (`Hero.tsx`, `HomeServices.tsx`, etc.) are no longer used
by the homepage but were left in place.

## Tests performed (actual results)

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass, no errors |
| ESLint on new/changed files | Clean |
| ESLint whole project | 24 errors, all pre-existing in untouched reference files (26 before this work) |
| `next build` | Pass – 38 static pages |
| Planner | Haj note shows; sentence and WhatsApp text update; "See matching journeys" filters (e.g. Ramadan) and scrolls to the list |
| Conversation form | Empty → inline errors, `aria-invalid`, focus to first field; bad email rejected; valid → WhatsApp opens with message, `/api/lead` receives `contact_form` payload, success status focused, no data in URL |
| Menu | Opens, focuses first link, locks scroll, Escape closes and returns focus |
| Header | Transparent over hero, solid once scrolled |
| Horizontal overflow | None at 360, 390, 768, 1024, 1440, 1920 px (home, about, journeys, enquiry, contact, destinations, services, request quote) |
| Contrast audit (WCAG AA, text over solid backgrounds) | Clean on all audited routes after fixes; text over photographs is excluded from the automated check and was reviewed visually |
| Headings | One `h1` per page, logical h2/h3 order on the homepage |
| Images | All have `alt`; decorative ones use `alt=""` |
| Console | No errors other than the expected `/api/lead` 503 while SMTP is unconfigured |

## Not tested / limitations
- `prefers-reduced-motion` was verified by code path and by auditing with the
  motion class removed; it was not toggled in an OS-level setting.
- No Lighthouse/Core Web Vitals run was performed in this session.
- Screen-reader testing (NVDA/VoiceOver) was not performed.
- The Haramain, hotel and vehicle imagery remain demo images from Wikimedia Commons.
- Real contact details, package facts, prices and credentials are still pending from the client.
