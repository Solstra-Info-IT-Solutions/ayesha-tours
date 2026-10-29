import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import WhatWeDo from "@/components/about/WhatWeDo";
import OurApproach from "@/components/about/OurApproach";
import LocalPartner from "@/components/about/LocalPartner";
import PlanJourney from "@/components/about/PlanJourney";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us – Haj & Umrah Travel Specialists",
  description: "Meet Ayesha Tours, a travel company focused on Umrah and Haj – helping pilgrims with packages, hotels near the Haramain, flights, visa paperwork, transfers and ziyarat.",
  path: "/about",
  keywords: ["about Ayesha Tours", "Haj and Umrah travel agency", "Umrah package specialists"],
});

export default function AboutPage() {
  return (
    
    <main className="bg-[#faf8f5]">
        <Navbar/>
      <AboutHero />
      <OurStory />
      <OurValues />
      <WhatWeDo />
      <OurApproach />
      <LocalPartner />
      <PlanJourney />
      <Footer/>
    </main>
  );
}