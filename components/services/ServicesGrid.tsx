// "use client";

// import {
//   Car,
//   Plane,
//   TrainFront,
//   BriefcaseBusiness,
//   Palmtree,
//   Map,
//   Hotel,
//   Users,
//   Landmark,
//   Camera,
//   BadgeIndianRupee,
// } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     title: "Private Taxi",
//     eyebrow: "Personal Mobility",
//     description:
//       "Comfortable and professionally managed transportation designed around your personal schedule and destination.",
//     icon: Car,
//     accent: "teal",
//   },
//   {
//     number: "02",
//     title: "Airport Transfers",
//     eyebrow: "Seamless Arrivals",
//     description:
//       "Reliable airport pickups and drop-offs designed to make every journey smooth, punctual and stress-free.",
//     icon: Plane,
//     accent: "gold",
//   },
//   {
//     number: "03",
//     title: "Railway Transfers",
//     eyebrow: "Connected Journeys",
//     description:
//       "Convenient transportation to and from railway stations with comfort and dependable travel assistance.",
//     icon: TrainFront,
//     accent: "teal",
//   },
//   {
//     number: "04",
//     title: "Corporate Travel",
//     eyebrow: "Business Mobility",
//     description:
//       "Professional transportation solutions for executives, corporate teams, delegates and important events.",
//     icon: BriefcaseBusiness,
//     accent: "gold",
//   },
//   {
//     number: "05",
//     title: "Holiday Packages",
//     eyebrow: "Beautiful Escapes",
//     description:
//       "Carefully planned holiday experiences that combine comfort, discovery and unforgettable destinations.",
//     icon: Palmtree,
//     accent: "gold",
//   },
//   {
//     number: "06",
//     title: "Customized Tours",
//     eyebrow: "Travel Your Way",
//     description:
//       "Personalized travel itineraries created around your interests, preferred destinations and schedule.",
//     icon: Map,
//     accent: "teal",
//   },
//   {
//     number: "07",
//     title: "Hotel Reservations",
//     eyebrow: "Comfortable Stays",
//     description:
//       "Assistance with selecting comfortable accommodation that perfectly fits your travel plans and preferences.",
//     icon: Hotel,
//     accent: "gold",
//   },
//   {
//     number: "08",
//     title: "Group & Family Tours",
//     eyebrow: "Together We Travel",
//     description:
//       "Well-organized travel experiences designed for families, friends and groups travelling together.",
//     icon: Users,
//     accent: "teal",
//   },
//   {
//     number: "09",
//     title: "Pilgrimage Tours",
//     eyebrow: "Meaningful Journeys",
//     description:
//       "Thoughtfully arranged spiritual journeys focused on comfort, convenience and peaceful travel.",
//     icon: Landmark,
//     accent: "gold",
//   },
//   {
//     number: "10",
//     title: "Sightseeing Tours",
//     eyebrow: "Discover More",
//     description:
//       "Explore iconic landmarks, hidden gems and memorable destinations with comfortable local travel.",
//     icon: Camera,
//     accent: "teal",
//   },
//   {
//   number: "11",
//   title: "Foreign Exchange",
//   eyebrow: "Travel Currency Solutions",
//   description:
//     "Convenient foreign exchange assistance to help you prepare for international journeys with confidence, comfort and complete travel readiness.",
//   icon: BadgeIndianRupee,
//   accent: "gold",
// },
// ];

// export default function ServicesGrid() {
//   return (
//     <section className="relative overflow-hidden bg-[#f6f2f4] py-24 sm:py-28 lg:py-32">

//       {/* Background */}
//       <div className="pointer-events-none absolute -left-64 top-[20%] h-[600px] w-[600px] rounded-full border border-[#e40e83]/10" />

//       <div className="pointer-events-none absolute -right-64 bottom-[10%] h-[700px] w-[700px] rounded-full border border-[#4e1367]/10" />

//       <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

//         {/* Header */}
//         <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">

//           <div className="flex items-center justify-center gap-4">
//             <span className="h-px w-10 bg-[#e40e83]" />

//             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4e1367]">
//               What We Offer
//             </span>

//             <span className="h-px w-10 bg-[#e40e83]" />
//           </div>

//           <h2 className="mt-6 font-serif text-[40px] font-bold leading-tight text-[#3f1152] sm:text-5xl lg:text-[60px]">
//             Pilgrimage Services For
//             <span className="block italic font-medium text-[#e40e83]">
//               Every Kind Of Pilgrim.
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#6e6572]">
//             Whether you are travelling for business, leisure, family or
//             exploration, our services are designed to make your journey
//             easier from beginning to end.
//           </p>

//         </div>


//         {/* Services */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

//           {services.map((service) => {
//             const Icon = service.icon;
//             const isGold = service.accent === "gold";

//             const isForeignExchange =
//                 service.title === "Foreign Exchange";

//             return (
//               <article
//                 key={service.number}
//                 className="group relative min-h-[360px] overflow-hidden rounded-[32px] border border-[#dbd2d7] bg-[#faf9fa] p-7 transition-all duration-500 sm:p-8 hover:-translate-y-2 hover:border-[#e40e83]/50 hover:bg-white hover:shadow-[0_30px_70px_rgba(63,17,82,0.12)]"
//               >

//                 {/* Background Number */}
//                 <span
//                   className={`pointer-events-none absolute right-4 top-[-10px] font-serif text-[110px] font-bold leading-none tracking-[-0.08em] ${
//                     isGold
//                       ? "text-[#e40e83]/[0.05]"
//                       : "text-[#3f1152]/[0.035]"
//                   }`}
//                 >
//                   {service.number}
//                 </span>


//                 {/* Icon */}
//                 <div
//                   className={`relative flex h-[64px] w-[64px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 ${
//                     isGold
//                       ? "border-[#e40e83]/30 bg-[#f6e8ef] text-[#c50e72]"
//                       : "border-[#4e1367]/20 bg-[#f1eaf4] text-[#4e1367]"
//                   }`}
//                 >

//                   <div
//                     className={`absolute inset-[5px] rounded-full border ${
//                       isGold
//                         ? "border-[#e40e83]/20"
//                         : "border-[#4e1367]/15"
//                     }`}
//                   />

//                   <Icon
//                     size={25}
//                     strokeWidth={1.6}
//                     className="relative z-10"
//                   />

//                 </div>


//                 {/* Eyebrow */}
//                 <div className="mt-8 flex items-center gap-3">

//                   <span
//                     className={`h-px w-9 transition-all duration-500 group-hover:w-14 ${
//                       isGold
//                         ? "bg-[#e40e83]"
//                         : "bg-[#4e1367]"
//                     }`}
//                   />

//                   <span
//                     className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
//                       isGold
//                         ? "text-[#b3146b]"
//                         : "text-[#4e1367]"
//                     }`}
//                   >
//                     {service.eyebrow}
//                   </span>

//                 </div>


//                 {/* Title */}
//                 <h3 className="mt-6 font-serif text-[29px] font-bold leading-tight text-[#3f1152]">
//                   {service.title}
//                 </h3>


//                 {/* Description */}
//                 <p className="mt-4 max-w-[330px] text-[14px] leading-7 text-[#6e6572]">
//                   {service.description}
//                 </p>


//                 {/* Bottom */}
//                 <div className="absolute bottom-0 left-7 right-7 sm:left-8 sm:right-8">

//                   <div className="h-px bg-[#dad1d6]" />

//                   <div className="flex items-center justify-between py-5">

//                     <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#928a96]">
//                       Ayesha Tours
//                     </span>

//                     <span
//                       className={`h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150 ${
//                         isGold
//                           ? "bg-[#e40e83]"
//                           : "bg-[#4e1367]"
//                       }`}
//                     />

//                   </div>

//                 </div>

//               </article>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import {
  Moon,
  Plane,
  TrainFront,
  FileCheck2,
  Tent,
  Map,
  Hotel,
  Users,
  Landmark,
  Compass,
  Banknote,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Umrah Packages",
    eyebrow: "All Year Round",
    description:
      "Economy, standard and premium Umrah packages with clear details of flights, hotels, transfers and ziyarat.",
    icon: Landmark,
    accent: "teal",
  },
  {
    number: "02",
    title: "Airport Transfers",
    eyebrow: "Jeddah & Madinah",
    description:
      "Pickups and drop-offs at Jeddah and Madinah airports so your group reaches the hotel without stress.",
    icon: Plane,
    accent: "gold",
  },
  {
    number: "03",
    title: "Haramain Train",
    eyebrow: "Makkah ⇄ Madinah",
    description:
      "Guidance on high-speed train tickets between Makkah, Jeddah and Madinah, with station transfers on request.",
    icon: TrainFront,
    accent: "teal",
  },
  {
    number: "04",
    title: "Visa Assistance",
    eyebrow: "Paperwork Made Simple",
    description:
      "Help preparing Umrah visa applications and the supporting documents, with a clear checklist before you apply.",
    icon: FileCheck2,
    accent: "gold",
  },
  {
    number: "05",
    title: "Haj Guidance",
    eyebrow: "Journey Of A Lifetime",
    description:
      "Help understanding Haj options, eligibility, documentation and preparation for the days of Mina, Arafat and Muzdalifah.",
    icon: Tent,
    accent: "gold",
  },
  {
    number: "06",
    title: "Custom Umrah Plans",
    eyebrow: "Your Dates, Your Needs",
    description:
      "Tailor the number of nights in Makkah and Madinah, hotel category and room sharing to suit your family.",
    icon: Map,
    accent: "teal",
  },
  {
    number: "07",
    title: "Hotels Near Haram",
    eyebrow: "Makkah & Madinah",
    description:
      "Help choosing hotels by walking distance to Masjid al-Haram and Masjid an-Nabawi, budget and room type.",
    icon: Hotel,
    accent: "gold",
  },
  {
    number: "08",
    title: "Group & Family Umrah",
    eyebrow: "Travel Together",
    description:
      "Well-organised pilgrimages for families, community groups and friends travelling together.",
    icon: Users,
    accent: "teal",
  },
  {
    number: "09",
    title: "Ramadan Umrah",
    eyebrow: "Blessed Month",
    description:
      "Umrah during Ramadan, including the last ten nights, planned early for the busiest season of the year.",
    icon: Moon,
    accent: "gold",
  },
  {
    number: "10",
    title: "Ziyarat Tours",
    eyebrow: "Historic Sites",
    description:
      "Guided visits to Jabal al-Nour, Mount Uhud, Masjid Quba and other historic sites of Makkah and Madinah.",
    icon: Compass,
    accent: "teal",
  },

  /* =====================================================
      PREMIUM FOREIGN EXCHANGE SERVICE
  ===================================================== */

  {
    number: "11",
    title: "Saudi Riyal Guidance",
    eyebrow: "Travel Currency Help",
    description:
      "Practical guidance on carrying Saudi Riyals, cards and cash for your stay in Makkah and Madinah, so you travel prepared.",
    icon: Banknote,
    accent: "premium",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#f6f2f4] py-24 sm:py-28 lg:py-32">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -left-64 top-[20%] h-[600px] w-[600px] rounded-full border border-[#e40e83]/10" />

      <div className="pointer-events-none absolute -right-64 bottom-[10%] h-[700px] w-[700px] rounded-full border border-[#4e1367]/10" />

      <div className="pointer-events-none absolute left-1/2 top-[10%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#e40e83]/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#e40e83]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4e1367]">
              What We Offer
            </span>

            <span className="h-px w-10 bg-[#e40e83]" />
          </div>

          <h2 className="mt-6 font-serif text-[40px] font-bold leading-tight text-[#3f1152] sm:text-5xl lg:text-[60px]">
            Pilgrimage Services For

            <span className="block italic font-medium text-[#e40e83]">
              Every Kind Of Pilgrim.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#6e6572]">
            Whether you are travelling alone, with your family or in a group,
            our services are designed to make your Umrah or Haj easier from
            beginning to end.
          </p>
        </div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            const isGold = service.accent === "gold";

            const isPremium =
              service.accent === "premium";

            return (
              <article
                key={service.number}
                className={`group relative min-h-[370px] overflow-hidden rounded-[32px] border p-7 transition-all duration-500 sm:p-8 ${
                  isPremium
                    ? "border-[#e40e83]/35 bg-gradient-to-br from-[#2a0838] via-[#3f1152] to-[#4e1367] shadow-[0_25px_70px_rgba(63,17,82,0.22)] hover:-translate-y-2 hover:border-[#e40e83]/70 hover:shadow-[0_35px_90px_rgba(63,17,82,0.30)]"
                    : "border-[#dbd2d7] bg-[#faf9fa] hover:-translate-y-2 hover:border-[#e40e83]/50 hover:bg-white hover:shadow-[0_30px_70px_rgba(63,17,82,0.12)]"
                }`}
              >
                {/* =====================================================
                    PREMIUM FOREIGN EXCHANGE BACKGROUND
                ===================================================== */}

                {isPremium && (
                  <>
                    {/* GOLD GLOW */}

                    <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#e40e83]/15 blur-[90px]" />

                    <div className="pointer-events-none absolute -bottom-32 -left-32 h-[280px] w-[280px] rounded-full bg-[#4e1367]/60 blur-[100px]" />

                    {/* PREMIUM GRID */}

                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.045]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    {/* TOP GOLD LINE */}

                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#e40e83] to-transparent" />

                    {/* PREMIUM BADGE */}

                    <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-[#e40e83]/30 bg-[#e40e83]/10 px-3 py-1.5 backdrop-blur-md">
                      <Sparkles
                        size={10}
                        className="text-[#ff5db6]"
                      />

                      <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#ff5db6]">
                        Travelling Abroad
                      </span>
                    </div>
                  </>
                )}

                {/* =====================================================
                    BACKGROUND NUMBER
                ===================================================== */}

                <span
                  className={`pointer-events-none absolute right-4 top-[-10px] font-serif text-[110px] font-bold leading-none tracking-[-0.08em] ${
                    isPremium
                      ? "text-white/[0.05]"
                      : isGold
                      ? "text-[#e40e83]/[0.05]"
                      : "text-[#3f1152]/[0.035]"
                  }`}
                >
                  {service.number}
                </span>

                {/* =====================================================
                    ICON
                ===================================================== */}

                <div
                  className={`relative flex h-[64px] w-[64px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 ${
                    isPremium
                      ? "border-[#e40e83]/50 bg-[#e40e83]/15 text-[#ff5db6] shadow-[0_0_35px_rgba(228,14,131,0.16)]"
                      : isGold
                      ? "border-[#e40e83]/30 bg-[#f6e8ef] text-[#c50e72]"
                      : "border-[#4e1367]/20 bg-[#f1eaf4] text-[#4e1367]"
                  }`}
                >
                  {/* INNER RING */}

                  <div
                    className={`absolute inset-[5px] rounded-full border ${
                      isPremium
                        ? "border-[#e40e83]/25"
                        : isGold
                        ? "border-[#e40e83]/20"
                        : "border-[#4e1367]/15"
                    }`}
                  />

                  <Icon
                    size={25}
                    strokeWidth={1.6}
                    className="relative z-10"
                  />
                </div>

                {/* =====================================================
                    EYEBROW
                ===================================================== */}

                <div className="relative mt-8 flex items-center gap-3">
                  <span
                    className={`h-px w-9 transition-all duration-500 group-hover:w-14 ${
                      isPremium
                        ? "bg-[#e40e83]"
                        : isGold
                        ? "bg-[#e40e83]"
                        : "bg-[#4e1367]"
                    }`}
                  />

                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
                      isPremium
                        ? "text-[#ff5db6]"
                        : isGold
                        ? "text-[#b3146b]"
                        : "text-[#4e1367]"
                    }`}
                  >
                    {service.eyebrow}
                  </span>
                </div>

                {/* =====================================================
                    TITLE
                ===================================================== */}

                <h3
                  className={`relative mt-6 font-serif text-[28px] font-bold leading-tight sm:text-[30px] ${
                    isPremium
                      ? "text-white"
                      : "text-[#3f1152]"
                  }`}
                >
                  {service.title}
                </h3>

                {/* =====================================================
                    DESCRIPTION
                ===================================================== */}

                <p
                  className={`relative mt-4 max-w-[340px] text-[14px] leading-7 ${
                    isPremium
                      ? "text-[#d5c7db]"
                      : "text-[#6e6572]"
                  }`}
                >
                  {service.description}
                </p>

                {/* =====================================================
                    PREMIUM CURRENCY CHIPS
                ===================================================== */}

                {isPremium && (
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {["SAR", "INR", "USD", "AED"].map(
                      (currency) => (
                        <span
                          key={currency}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[8px] font-bold tracking-[0.16em] text-[#ff5db6] backdrop-blur-sm transition-all duration-300 hover:border-[#e40e83]/50 hover:bg-[#e40e83]/10"
                        >
                          {currency}
                        </span>
                      )
                    )}
                  </div>
                )}

                {/* =====================================================
                    BOTTOM SECTION
                ===================================================== */}

                <div className="absolute bottom-0 left-7 right-7 sm:left-8 sm:right-8">
                  <div
                    className={`h-px ${
                      isPremium
                        ? "bg-white/10"
                        : "bg-[#dad1d6]"
                    }`}
                  />

                  <div className="flex items-center justify-between py-5">
                    <span
                      className={`text-[8px] font-bold uppercase tracking-[0.28em] ${
                        isPremium
                          ? "text-white/45"
                          : "text-[#928a96]"
                      }`}
                    >
                      Ayesha Tours
                    </span>

                    <div className="flex items-center gap-2">
                      {isPremium && (
                        <span className="text-[7px] font-semibold uppercase tracking-[0.15em] text-[#e40e83]/70">
                          Travel Ready
                        </span>
                      )}

                      <span
                        className={`h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150 ${
                          isPremium
                            ? "bg-[#e40e83]"
                            : isGold
                            ? "bg-[#e40e83]"
                            : "bg-[#4e1367]"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM PREMIUM SIGNATURE
        ===================================================== */}

        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center sm:mt-20">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#e40e83]/40" />

            <Sparkles
              size={13}
              className="text-[#e40e83]"
            />

            <span className="h-px w-12 bg-[#e40e83]/40" />
          </div>

          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#948b98]">
            Every Pilgrim. Carefully Guided.
          </p>
        </div>
      </div>
    </section>
  );
}
