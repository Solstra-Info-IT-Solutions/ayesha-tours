import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import JourneyProcess from "@/components/services/JourneyProcess";
import ServiceExperience from "@/components/services/ServiceExperience";
import ServicesCTA from "@/components/services/ServicesCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Services – Umrah Packages, Haj Guidance, Visa & Transfers",
  description: "Explore the pilgrimage services offered by Ayesha Tours: Umrah packages, Haj guidance, visa and flight assistance, hotels near the Haramain, transfers and ziyarat.",
  path: "/services",
  keywords: ["Umrah services", "Haj travel services", "Umrah visa assistance", "ziyarat tours Makkah Madinah"],
});

export default function ServicesPage() {
  return (
    <main>
            <Navbar />
      <ServicesHero />

      <ServicesGrid />

      {/* NEW PREMIUM JOURNEY PROCESS */}
      <JourneyProcess />

      <ServiceExperience />

      <ServicesCTA />
      <Footer/>
    </main>
  );
}