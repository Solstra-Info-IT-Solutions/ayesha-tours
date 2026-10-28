import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryStats from "@/components/gallery/GalleryStats";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery – Makkah, Madinah & The Haj Sites",
  description: "Photos of Masjid al-Haram, Masjid an-Nabawi, Quba, Mina and other places pilgrims visit on Umrah and Haj with Ayesha Tours.",
  path: "/gallery",
  keywords: ["Makkah photos", "Madinah photos", "Umrah gallery"],
});

export default function GalleryPage() {
  return (
    <main>
       <Navbar /> 
      <GalleryHero />

      <GalleryStats />

      <GalleryGrid />

      <GalleryCTA />
        <Footer />
    </main>
  );
}