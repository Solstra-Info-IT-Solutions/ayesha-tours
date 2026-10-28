/**
 * Search-focused landing pages. Each entry becomes a page at /<slug>
 * (see app/[slug]/page.tsx), is added to the sitemap and gets
 * Service + FAQ + Breadcrumb structured data.
 *
 * Content is deliberately factual and price-free. Rules that change (visas,
 * quotas, fees) are described generally and pilgrims are asked to confirm.
 * To add a page, add an entry here — no other code changes are needed.
 */

export type LandingPage = {
  slug: string;
  /** Used for <title>; the site name is appended automatically */
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  h1Accent: string;
  eyebrow: string;
  intro: string;
  heroImage: string;
  serviceType: "tour" | "transport";
  highlights: { title: string; text: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  goodToKnow: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
  whatsappText: string;
};

const D = "/images/demo/";

export const landingPages: LandingPage[] = [
  {
    slug: "umrah-packages",
    seoTitle: "Umrah Packages – Economy, Standard & Premium Options",
    metaDescription:
      "Compare economy, standard and premium Umrah packages from Ayesha Tours with flights, hotels in Makkah and Madinah, transfers and ziyarat. Request a quote.",
    keywords: ["Umrah packages", "economy Umrah package", "premium Umrah package", "Umrah package with flights", "Umrah travel agency"],
    h1: "Umrah Packages",
    h1Accent: "For Every Pilgrim",
    eyebrow: "Umrah All Year Round",
    intro:
      "Whether it is your first Umrah or a return journey, we help you choose a package that balances budget, hotel distance from the Haram and the number of nights in Makkah and Madinah – with every inclusion explained in writing.",
    heroImage: `${D}kaaba-tawaf.jpg`,
    serviceType: "tour",
    highlights: [
      { title: "Economy Umrah", text: "Value-focused packages with comfortable hotels a little further from the Haram and shared transfers." },
      { title: "Standard Umrah", text: "A balance of comfort and cost, with hotels at a reasonable walking distance in both cities." },
      { title: "Premium Umrah", text: "Hotels close to Masjid al-Haram and Masjid an-Nabawi for shorter walks between prayers." },
      { title: "Clear Inclusions", text: "Flights, visa processing, hotels, transfers and ziyarat listed clearly so you can compare properly." },
    ],
    sections: [
      {
        heading: "Choosing the right Umrah package",
        paragraphs: [
          "The biggest differences between packages are hotel distance from the Haram, room sharing, the split of nights between Makkah and Madinah and whether flights and ziyarat are included. We explain these trade-offs so you can choose with confidence.",
          "Send us your preferred month, departure city, number of adults and children and any special needs, and we will reply with suitable options.",
        ],
      },
      {
        heading: "Adjust a package to suit your family",
        paragraphs: [
          "Most packages can be adapted – more nights in Madinah, a hotel closer to the Haram for elderly parents, or extra ziyarat days. Changes are confirmed in your written quote.",
        ],
      },
    ],
    goodToKnow: [
      "Umrah visa rules, vaccination requirements and fees are set by the Saudi authorities and can change – we share the current checklist when you enquire.",
      "Ramadan and school holidays are the busiest periods; booking early gives more hotel choice.",
      "Hotel walking distances are approximate and depend on the gate you use at the Haram.",
      "Prices are quoted on enquiry and confirmed only in writing.",
    ],
    faqs: [
      { question: "What is included in an Umrah package?", answer: "Packages commonly include flights, Umrah visa processing, hotels in Makkah and Madinah, transfers and ziyarat. Each quote lists exactly what is and is not included." },
      { question: "How many days do I need for Umrah?", answer: "The rites of Umrah themselves can be completed in a few hours, but most pilgrims spend 10 to 15 days in total to include Madinah and some rest. Shorter and longer options are available." },
      { question: "Can I choose hotels close to the Haram?", answer: "Yes. Premium options focus on hotels close to the Haram, while economy options keep costs down with hotels further away. We explain the distance for each option." },
      { question: "How do I get a price?", answer: "Send us your dates, departure city and number of pilgrims through our quote form or WhatsApp and we will reply with a customised quotation." },
    ],
    related: ["family-umrah-package", "ramadan-umrah-package", "makkah-madinah-ziyarat-tours"],
    whatsappText: "Assalamu alaikum Ayesha Tours, I would like a quote for an Umrah package.",
  },
  {
    slug: "family-umrah-package",
    seoTitle: "Family Umrah Package – Umrah With Parents & Children",
    metaDescription:
      "Plan a family Umrah with Ayesha Tours – hotels near the Haram, family rooms, unhurried transfers and guidance for elderly parents and children. Request a quote.",
    keywords: ["family Umrah package", "Umrah with children", "Umrah with elderly parents", "family Umrah hotels"],
    h1: "Family Umrah Package",
    h1Accent: "Together In Worship",
    eyebrow: "Family & Multi-Generation Umrah",
    intro:
      "Performing Umrah as a family is a blessing that needs thoughtful planning. We help you choose hotels, rooms and transfer timings that work for grandparents, parents and children alike.",
    heroImage: `${D}nabawi-umbrellas.jpg`,
    serviceType: "tour",
    highlights: [
      { title: "Family Rooms", text: "Triple, quad and connecting room options where available, so the family stays together." },
      { title: "Shorter Walks", text: "Hotel suggestions closer to the Haram for elderly parents and young children." },
      { title: "Unhurried Timings", text: "Transfers planned around rest, meals and prayer times rather than a tight schedule." },
      { title: "Guidance For All", text: "Simple pre-departure guidance on ihram and the rites, suitable for first-time family members." },
    ],
    sections: [
      {
        heading: "Planning Umrah with elders and children",
        paragraphs: [
          "Heat, crowds and walking distances matter more when travelling with elders and children. We help you decide on the best season, hotel location and pace for your family.",
          "Tell us the ages of everyone travelling and any mobility needs, and we will suggest options that keep everyone comfortable.",
        ],
      },
    ],
    goodToKnow: [
      "Wheelchair options are available at the Haramain; let us know in advance so we can share current information.",
      "Children's documentation and visa requirements should be checked early.",
      "Cooler months are usually more comfortable for elderly pilgrims and young children.",
      "Room availability for larger families is limited in peak seasons – enquire early.",
    ],
    faqs: [
      { question: "Can children perform Umrah?", answer: "Yes, children can accompany their families and perform Umrah. Parents usually help younger children with the rites. Please check current visa and documentation requirements for minors." },
      { question: "Can we get rooms together as a family?", answer: "We look for triple, quad or connecting rooms where available. Availability depends on the hotel and season, so we confirm the room arrangement in your quote." },
      { question: "Is Umrah suitable for elderly parents?", answer: "Many elderly pilgrims perform Umrah every year. Choosing a hotel closer to the Haram, travelling in cooler months and arranging wheelchair help can make the journey much easier." },
    ],
    related: ["umrah-packages", "makkah-madinah-ziyarat-tours", "jeddah-airport-to-makkah-transfer"],
    whatsappText: "Assalamu alaikum Ayesha Tours, I would like a quote for a family Umrah.",
  },
  {
    slug: "ramadan-umrah-package",
    seoTitle: "Ramadan Umrah Package – Including The Last 10 Nights",
    metaDescription:
      "Plan Umrah during Ramadan or the last ten nights with Ayesha Tours. Early planning, hotel options in Makkah and Madinah and clear inclusions. Request a quote.",
    keywords: ["Ramadan Umrah package", "last 10 nights Umrah", "Umrah in Ramadan", "Itikaf Umrah"],
    h1: "Ramadan Umrah",
    h1Accent: "In The Blessed Month",
    eyebrow: "Ramadan In The Haramain",
    intro:
      "Spending Ramadan in Makkah and Madinah is a dream for many. Because it is the busiest season of the year, early planning makes a real difference to hotel choice and cost.",
    heroImage: `${D}haram-aerial.jpg`,
    serviceType: "tour",
    highlights: [
      { title: "Early Planning", text: "We help you plan months ahead, when the widest choice of hotels is available." },
      { title: "Last Ten Nights", text: "Options focused on the last ten nights, including the search for Laylat al-Qadr." },
      { title: "Both Holy Cities", text: "Split your Ramadan between Makkah and Madinah, or focus on one city." },
      { title: "Clear Pricing", text: "Peak-season pricing explained upfront, with inclusions confirmed in writing." },
    ],
    sections: [
      {
        heading: "What to expect during Ramadan Umrah",
        paragraphs: [
          "The Haramain are at their busiest in Ramadan, especially during the last ten nights. Expect large crowds at taraweeh and qiyam, and plan extra time to reach the mosque.",
          "Exact dates depend on the sighting of the moon, so packages are planned around expected dates and confirmed closer to departure.",
        ],
      },
    ],
    goodToKnow: [
      "Ramadan dates depend on moon sighting and may shift by a day.",
      "Hotel prices and availability are at their peak – earlier enquiries have more options.",
      "Itikaf arrangements are subject to the rules of the Haramain authorities for that year.",
      "Plan for rest during the day to manage fasting in the heat.",
    ],
    faqs: [
      { question: "When should I book Ramadan Umrah?", answer: "As early as possible. Hotels near the Haram fill quickly for Ramadan, especially the last ten nights, so enquiring several months ahead gives the best choice." },
      { question: "Can I spend only the last ten nights?", answer: "Yes. Many pilgrims choose packages focused on the last ten nights. We can also arrange longer stays or a split between Makkah and Madinah." },
      { question: "Are Ramadan packages more expensive?", answer: "Generally yes, because demand is highest. We explain the pricing clearly so you can compare options." },
    ],
    related: ["umrah-packages", "family-umrah-package", "makkah-madinah-ziyarat-tours"],
    whatsappText: "Assalamu alaikum Ayesha Tours, I would like information about Ramadan Umrah.",
  },
  {
    slug: "haj-guidance",
    seoTitle: "Haj Guidance – Preparing For The Journey Of A Lifetime",
    metaDescription:
      "Understand Haj options, documentation and preparation with Ayesha Tours – what to expect in Mina, Arafat and Muzdalifah and how to plan. Enquire today.",
    keywords: ["Haj package", "Hajj guidance", "Haj preparation", "Hajj travel agency"],
    h1: "Haj Guidance",
    h1Accent: "The Journey Of A Lifetime",
    eyebrow: "The Fifth Pillar Of Islam",
    intro:
      "Haj is a once-in-a-lifetime obligation for those who are able. It follows official quotas, registration processes and schedules, so understanding the process early is essential. We help you prepare with clear, honest guidance.",
    heroImage: `${D}arafat.jpg`,
    serviceType: "tour",
    highlights: [
      { title: "Understand The Process", text: "Guidance on registration, eligibility and documentation according to the rules in force." },
      { title: "Mina, Arafat, Muzdalifah", text: "What to expect on each day of Haj, from the tents of Mina to the standing at Arafat." },
      { title: "Preparation", text: "Practical advice on health, packing, ihram and the rites before you travel." },
      { title: "Madinah Visit", text: "Options to visit Madinah before or after Haj, subject to the official schedule." },
    ],
    sections: [
      {
        heading: "How Haj travel works",
        paragraphs: [
          "Haj places are allocated through official channels and quotas, and arrangements must follow the regulations announced for each year. We explain the options available to you and what each involves.",
          "Contact us early with your details so we can guide you through the steps and timelines that apply.",
        ],
      },
    ],
    goodToKnow: [
      "Haj availability, quotas and requirements are set by the authorities each year and can change.",
      "Health checks and vaccinations are typically required – follow official guidance.",
      "The days of Haj involve significant walking and heat; preparation and pacing matter.",
      "Ayesha Tours confirms Haj arrangements only in writing, in line with official regulations.",
    ],
    faqs: [
      { question: "When should I start planning for Haj?", answer: "As early as possible. Registration windows and quotas are announced by the authorities, and preparation – documents, health checks and savings – takes time." },
      { question: "What happens during the days of Haj?", answer: "Pilgrims enter ihram, spend time in Mina, stand at Arafat on the 9th of Dhul Hijjah, spend the night at Muzdalifah, then perform the stoning, sacrifice, shaving or trimming, and tawaf al-ifadah." },
      { question: "Can I visit Madinah during my Haj trip?", answer: "Many Haj itineraries include Madinah before or after Haj, depending on the official schedule and arrangements for that year." },
    ],
    related: ["umrah-packages", "makkah-madinah-ziyarat-tours", "jeddah-airport-to-makkah-transfer"],
    whatsappText: "Assalamu alaikum Ayesha Tours, I would like guidance about Haj.",
  },
  {
    slug: "makkah-madinah-ziyarat-tours",
    seoTitle: "Makkah & Madinah Ziyarat Tours – Historic Islamic Sites",
    metaDescription:
      "Add ziyarat to your Umrah with Ayesha Tours: Jabal al-Nour, Jabal Thawr, Mina and Arafat in Makkah; Uhud, Quba and Qiblatayn in Madinah. Request a quote.",
    keywords: ["Makkah ziyarat", "Madinah ziyarat", "ziyarat tour", "Uhud Quba ziyarat"],
    h1: "Ziyarat Tours",
    h1Accent: "In Makkah & Madinah",
    eyebrow: "Historic Islamic Sites",
    intro:
      "Ziyarat connects you with the history of Islam – the places where revelation began, where the Prophet ﷺ lived and where his companions are remembered. Ziyarat can be added to most Umrah packages.",
    heroImage: `${D}jabal-nour.jpg`,
    serviceType: "transport",
    highlights: [
      { title: "Makkah Ziyarat", text: "Jabal al-Nour, Jabal Thawr, Mina, Muzdalifah and Arafat." },
      { title: "Madinah Ziyarat", text: "Masjid Quba, Masjid al-Qiblatayn, Mount Uhud and the martyrs of Uhud." },
      { title: "Group Or Private", text: "Join a group ziyarat or arrange a private vehicle for your family." },
      { title: "Around Your Prayers", text: "Timed so you return to the Haram for congregational prayers." },
    ],
    sections: [
      {
        heading: "Planning your ziyarat",
        paragraphs: [
          "Most Makkah and Madinah ziyarat tours take a few hours each. Morning visits are usually cooler and quieter. We help plan them around your hotel location and prayer times.",
        ],
      },
    ],
    goodToKnow: [
      "Some sites involve climbing or walking on uneven ground – let us know about mobility needs.",
      "Access to certain sites can change with local regulations.",
      "Carry water and sun protection, especially in summer.",
      "Ziyarat is recommended but not part of the rites of Umrah or Haj.",
    ],
    faqs: [
      { question: "Which places are visited on Madinah ziyarat?", answer: "Common stops include Masjid Quba, Masjid al-Qiblatayn, Mount Uhud and the graves of the martyrs of Uhud. Exact stops can be tailored." },
      { question: "How long does a ziyarat tour take?", answer: "Typically two to four hours per city, depending on the number of stops and traffic." },
      { question: "Can ziyarat be added to any package?", answer: "In most cases, yes. Ziyarat can be included in your package or arranged separately." },
    ],
    related: ["umrah-packages", "jeddah-airport-to-makkah-transfer", "family-umrah-package"],
    whatsappText: "Assalamu alaikum Ayesha Tours, I would like to arrange ziyarat in Makkah and Madinah.",
  },
  {
    slug: "jeddah-airport-to-makkah-transfer",
    seoTitle: "Jeddah Airport to Makkah Transfer – Pilgrim Transport",
    metaDescription:
      "Request a Jeddah airport to Makkah transfer, Makkah to Madinah transport and Madinah airport pickups for families and groups with Ayesha Tours.",
    keywords: ["Jeddah airport to Makkah transfer", "Makkah to Madinah transport", "Madinah airport transfer", "Umrah transport"],
    h1: "Airport & Intercity Transfers",
    h1Accent: "For Pilgrims",
    eyebrow: "Jeddah • Makkah • Madinah",
    intro:
      "After a long flight, a smooth transfer to your hotel makes all the difference. We arrange pickups from Jeddah and Madinah airports and road transfers between Makkah and Madinah for families and groups.",
    heroImage: `${D}hajj-terminal.jpg`,
    serviceType: "transport",
    highlights: [
      { title: "Airport Pickups", text: "From King Abdulaziz Airport, Jeddah, or Prince Mohammad bin Abdulaziz Airport, Madinah." },
      { title: "Makkah ⇄ Madinah", text: "Road transfers timed around hotel check-out, check-in and prayers." },
      { title: "Right-Sized Vehicles", text: "Sedans, family SUVs, vans and coaches depending on your group and luggage." },
      { title: "Haramain Train", text: "Guidance on high-speed rail as an alternative, with station transfers." },
    ],
    sections: [
      {
        heading: "How transfers work",
        paragraphs: [
          "Share your flight details, hotel names and group size, and we will suggest a suitable vehicle. If you are in ihram for Umrah on arrival, transfers are planned so you can travel directly to Makkah.",
        ],
      },
    ],
    goodToKnow: [
      "Share flight numbers so pickup times can be adjusted for delays.",
      "Tell us about extra luggage, child seats or wheelchairs in advance.",
      "Travel times vary with traffic and checkpoints, especially in peak seasons.",
      "Vehicle types shown on this site are examples; confirmed vehicles are stated in your quote.",
    ],
    faqs: [
      { question: "How long is the drive from Jeddah airport to Makkah?", answer: "Usually around one to one and a half hours, depending on traffic and checkpoints." },
      { question: "Can you arrange Makkah to Madinah transport?", answer: "Yes. We arrange road transfers between the two cities and can also guide you on the Haramain high-speed train." },
      { question: "What vehicles are available?", answer: "Options typically include sedans, family SUVs, vans and coaches, depending on availability and group size." },
    ],
    related: ["makkah-madinah-ziyarat-tours", "umrah-packages", "family-umrah-package"],
    whatsappText: "Assalamu alaikum Ayesha Tours, I would like a quote for airport and intercity transfers.",
  },
];

export const getLandingPage = (slug: string) =>
  landingPages.find((page) => page.slug === slug);
