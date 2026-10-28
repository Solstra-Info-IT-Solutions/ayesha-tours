import ToursHero from "@/components/tours/ToursHero";
import TourPackagesExplorer from "@/components/tours/TourPackagesExplorer";
import WhyTravelWithUs from "@/components/tours/WhyTravelWithUs";
import TourCTA from "@/components/tours/TourCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { packages } from "@/components/tours/TourPackagesGrid";
import { DEMO_MODE, absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Umrah & Haj Packages – Economy, Standard, Premium, Family & Ramadan",
  description: "Compare Umrah and Haj package styles from Ayesha Tours – economy, standard and premium Umrah, family Umrah, Ramadan Umrah and Haj guidance. Quotes on enquiry.",
  path: "/tour-packages",
  keywords: ["Umrah packages", "Haj packages", "family Umrah package", "Ramadan Umrah package", "premium Umrah"],
});

export default function ToursPage() {
  return (
    <main>
      {/* TouristTrip data is only published once packages are confirmed (not demo). */}
      {!DEMO_MODE && <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Ayesha Tours Umrah & Haj packages",
          itemListElement: packages.map((pkg, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "TouristTrip",
              name: pkg.title,
              touristType: pkg.travelers,
              url: absoluteUrl("/tour-packages"),
              image: pkg.image.startsWith("http") ? pkg.image : absoluteUrl(pkg.image),
            },
          })),
        }}
      />}
      <Navbar /> 
      <ToursHero />

      <TourPackagesExplorer />

      <WhyTravelWithUs />

      <TourCTA />
       <Footer />
    </main>
  );
}