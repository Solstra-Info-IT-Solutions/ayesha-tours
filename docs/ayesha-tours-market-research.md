# Ayesha Tours – Market Research & Design Strategy

Prepared: 29 October 2026 · Scope: homepage redesign of the Ayesha Tours demo
(https://ayesha-tours.vercel.app) into a distinctive Haj & Umrah experience.

Method: each reference was opened in a browser and/or fetched as text on the
date above. **Observed** = seen on the page or in its text. **Assumed** = an
inference, labelled as such. No performance or functional testing was done on
third-party sites; nothing below claims it was.

---

## 1. Starting point: why the current demo reads as "a copy"

The current demo inherited the Global Horizons reference structure 1:1:
sticky pill navbar → centred hero with two buttons → feature bar → 4-card
services grid → 3 destination cards → 3 package cards → 4-step process →
transport grid → CTA band → gallery → CTA → accordion "why us" → collage →
contact form → mega footer. Thirteen sections of near-identical card rhythm,
every heading in the same "Word *Italic Accent.*" pattern. Recolouring did
not change that rhythm, which is what the client recognised.

## 2. References reviewed

| # | Site | Type | Status |
|---|---|---|---|
| 1 | https://ayeshatours.com/ | Ayesha Tours, Vadodara (Gujarat) – Haj & Umrah | Opened + text |
| 2 | https://ayeshaairtravels.com/ | Ayesha Air Travels, Dhaka – Haj, Umrah, visas | Text |
| 3 | https://eightlabs.ca/work/safar-ul-imaan | Case study – Haj/Umrah booking platform | Text |
| 4 | https://61web.com.au/work/islamic-travel/ | Case study – Islamic Travel, Sydney | Text |
| 5 | https://dribbble.com/shots/27133693-Umrah-Hajj-Travel-Website-Design-Luxury-UI | Concept shot | **Inaccessible** (empty page in browser and fetch) |
| 6 | https://bakhlatours.com/ | Mumbai Haj & Umrah operator | Opened + text |
| 7 | https://www.umrahservices.in/mumbai.html | Mumbai Umrah operator landing page | Text |
| 8 | https://www.islamictravel.co.uk/ | UK Umrah operator (ATOL) | Text |
| 9 | https://www.aman.com/ | Luxury hospitality benchmark | Opened + text |
| 10 | https://hajcommittee.gov.in/ | Haj Committee of India (official) | Text |
| 11 | https://www.visitsaudi.com/en/makkah | Official destination storytelling | **Partial** (only title returned) |

### Observations per reference

**1. ayeshatours.com** (observed) – Likely the client's current live site
(same name, Haj & Umrah, logo file named `ayesha-logo`; *assumed* same
business, to be confirmed). Grey preloader before content; serif headline
"Turning Your Dreams Into a Blessed Reality (Ayesha Tours) Hajj & Umrah"
left-aligned over a Kaaba photo; then ivory sections, green buttons,
handwritten script eyebrow ("Plan Your Sacred Journey"); packages hidden behind
"View Hajj/Umrah Packages" pop-ups with 38/40-day Hajj, 5-star hotels, Category
D Mina camp; three named reviews; phone, WhatsApp, address in Vadodara.
*Strength:* calm palette, real details. *Weakness:* preloader delays content,
generic centred sections, packages hidden in pop-ups, contact form shortcode may
not render. **Implication:** an ivory + green + classic-serif treatment would
look like the client's existing site, so the new direction must not lean on
that combination.

**2. ayeshaairtravels.com** (observed) – Different business (Dhaka). Hero "Your
Trusted Hajj & Umrah Service Partner", CTA "Plan My Journey →" plus WhatsApp;
prominent licence number and "since 2017" stats; emoji service cards; bilingual
toggle. *Strength:* credentials up front, prefilled WhatsApp. *Weakness:*
generic card grid, no package detail.

**3. Safar-ul-Imaan case study** (observed) – Dark theme, refined type, smooth
animation; value is a structured multi-step booking flow with an admin panel.
*Takeaway:* trust comes from a guided, structured flow, not decoration.

**4. Islamic Travel (61web)** (observed) – Rebuilt around package discovery and
online booking (WooCommerce). Headline "Travel with Purpose…". *Takeaway:*
package discovery is the commercial core; no visual specifics were given.

**6. Bakhla Tours, Mumbai** (observed) – Red/white, centred "BETTER
PILGRIMAGE" hero over a Kaaba photo, then 8+ Hajj cards with Mouallim
category, hotel names, INR prices and nights; YouTube testimonials; Google
rating (628 reviews); press logos; enquiry pop-up; sticky call/WhatsApp tabs.
Some Ramadan 2025 content still live in 2026. *Strength:* dense, verifiable
package facts. *Weakness:* cluttered, dated, card overload.

**7. Superb Umrah (umrahservices.in)** (observed) – SEO landing page: long
lists of inclusions, documents, policies, ziyarat; no packages or prices;
contradictory city names (Delhi vs Mumbai). *Takeaway:* Indian searchers want
inclusions, documents and policies stated plainly – an opening for a calm,
honest information design.

**8. islamictravel.co.uk** (observed) – Enquiry form is the hero; image slider
with no text; price-led cards (£ from, star ratings, nights split) but some
inconsistencies (three-star packages displaying five stars; "from £549" vs a
£249 card); ATOL number, company number, Trustpilot. *Takeaway:* conversion-led
but trust undermined by inconsistent data – accuracy is a differentiator.

**9. Aman** (observed) – Restrained header (Menu, logo centred, single
"Reserve" CTA), full-bleed film/imagery, small uppercase eyebrows over
large serif headings, warm stone palette, "Discover more" as the only repeated
action. *Takeaway:* one primary CTA, generous space, editorial captions,
calm motion.

**10. Haj Committee of India** (observed) – Haj places for Indian pilgrims flow
through official policy and Haj Group Organisers (HGO) registered per year.
*Takeaway:* the site must not imply Ayesha Tours can "sell" Haj places unless
it is a registered HGO for that season; we present Haj as guidance until
confirmed.

**11. Visit Saudi – Makkah** – Only the title "A Sacred Legacy Through Faith
and History" was retrievable; no further observations recorded.

## 3. Competitor patterns (what the category looks like)

1. Centred headline over a stock Kaaba photo + two buttons (1, 2, 6, 8).
2. Card grids for services and packages; packages either hidden (1, 7) or
   dense price cards (6, 8).
3. Trust via claims ("experienced", "since…", "approved") often without
   verifiable detail; ratings sometimes inconsistent (6, 7, 8).
4. Preloaders and pop-ups that delay or interrupt (1, 6).
5. WhatsApp/call as the real conversion path (1, 2, 6, 7, 8).
6. Little or no storytelling about Makkah and Madinah themselves; no tool that
   helps a pilgrim *think through* their journey before enquiring.

## 4. Whitespace opportunities for Ayesha Tours

- **Calm over clutter.** No Indian competitor reviewed offers a quiet, editorial,
  cinematic experience; most are dense or generic.
- **Help before selling.** A "compose your journey" planner that turns a few
  choices into a ready-to-send WhatsApp message gives value before contact –
  none of the reviewed sites do this.
- **Honesty as design.** Clear labelling of what is confirmed vs. illustrative,
  inclusions/exclusions stated plainly, Haj presented accurately against the
  HGO system.
- **Story of the two cities.** Respectful, accurate storytelling (rites in
  Makkah, the visit to Madinah, ziyarat) is largely absent from competitors.
- **Distinct from the client's own site** (ivory + green buttons + script) and
  from the reference template (card rhythm, plum/magenta).

## 5. Creative directions considered

| | A. "A Journey Beyond Distance" – cinematic nocturne | B. "Ihram White" – luminous minimal | C. "Pilgrim's Journal" – maps & itinerary |
|---|---|---|---|
| Idea | Dark, deep-emerald night palette like the Haram after Isha; ivory type; full-bleed photography in "chapters"; editorial typography; warm gold hairlines | Near-white, stone and architecture; monochrome photos; huge type; colour only in the logo | Paper textures, route line Makkah→Madinah, coordinates, stamps, handwritten notes |
| Originality | High – unlike any reviewed operator and unlike the client's ivory site | Medium – minimal-luxury is common | High, but risks gimmick |
| Emotional impact | High (night light, scale, quiet) | Medium-high | Medium |
| Premium perception | High | High | Medium |
| Sacred relevance | High – evokes night prayer, light, stillness | High – evokes ihram purity | Medium – risks trivialising |
| Mobile | Good (stacked chapters) | Very good | Fair (maps/textures heavy) |
| Accessibility | Good with ivory on deep green (high contrast) | Risk of low-contrast greys | Risk with textures/script |
| Performance | Good (few large images, CSS motion) | Very good | Fair |
| Lead generation | High – planner + conversation finale | Medium | Medium |
| Feasibility | High in current Next/Tailwind stack | High | Medium |

## 6. Recommendation: Direction A, refined

**"A Journey Beyond Distance"** – a cinematic, nocturnal editorial experience,
alternating deep-emerald "chapters" with warm-ivory reading spreads.

Design principles:
1. **One idea per screen.** Chapters, not stacked cards.
2. **Light in the dark.** Ivory and restrained gold on deep emerald; photography
   chosen for dusk/night light where possible.
3. **Editorial typography.** Oversized Cormorant Garamond display lines with
   intentional breaks; Manrope for everything functional; Amiri for the Arabic
   city names (shown respectfully, never decorative).
4. **Help first.** The planner sits directly under the hero.
5. **Honest by default.** Demo/illustrative labels, no invented numbers,
   reviews, licences or prices; Haj framed as guidance.
6. **Quiet motion.** Opening mask reveal, staggered headline, slow chapter
   crossfades, scroll-revealed images, a drawing timeline line – all disabled
   under `prefers-reduced-motion`; content is visible without JavaScript.

Palette (brief's starting point, kept because it is now used *dark* and
cinematically, unlike the client's ivory site):

| Token | Value | Role |
|---|---|---|
| `night` | `#0E1F1B` | Deepest chapter backgrounds |
| `emerald` | `#102B25` | Primary dark |
| `emerald-soft` | `#1C3B33` | Raised dark surfaces |
| `ivory` | `#F5F0E7` | Light spreads, text on dark |
| `stone` | `#D9D2C6` | Lines, muted surfaces |
| `charcoal` | `#202622` | Body text on ivory |
| `gold` | `#B89A62` | Hairlines, small accents on dark (≈5.6:1 on emerald) |
| `gold-ink` | `#7A6236` | Gold text on ivory (≥4.5:1) |

The logo keeps its own magenta/purple/green and always sits on an ivory
plate, so the brand mark is never recoloured or distorted. Magenta is not
used elsewhere – the logo carries it.

### Homepage architecture

1. Floating header (logo plate, 4 links, "Plan My Pilgrimage", full-screen menu)
2. **Cinematic opening** – three photographic chapters (Makkah · Madinah ·
   Arafat) with a chapter rail, coordinates, headline "Some journeys change
   everything." and CTAs "Plan My Pilgrimage" / "Explore Journeys"
3. **Journey composer** – sentence-style planner → prefilled WhatsApp, the
   detailed enquiry, or the matching journeys
4. **Two Cities** – Makkah and Madinah chapters with Arabic names, rites and
   visit notes, then a ziyarat strip
5. **Curated journeys** – editorial index with image preview, filters, demo labels
6. **The journey, thoughtfully arranged** – 5-stage drawn timeline
7. **What you can expect** – commitments, plus an honest credentials panel
8. **Your journey begins with a conversation** – concise accessible form,
   WhatsApp, contact details
9. Editorial footer

Budget selection was **not** included in the planner: there is no verified
package pricing to map budgets against. It can be added once the client
supplies real price bands.

### Open questions for the client
- Confirm ayeshatours.com is the same business; if so, supply the phone,
  WhatsApp, address and real package details to wire in.
- Confirm whether Ayesha Tours is a registered Haj Group Organiser for the
  coming season before Haj is presented as a package.
