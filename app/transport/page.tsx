import Navbar from "@/components/Navbar";
import TransportHero from "@/components/Transport/TransportHero";
import TransportServices from "@/components/Transport/TransportServices";
import Fleet from "@/components/Transport/Fleet";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Transport & Ziyarat – Airport, Makkah–Madinah & Group Transfers",
  description: "Request airport pickups in Jeddah and Madinah, Makkah–Madinah transfers, Haramain train guidance and ziyarat tours for families and groups with Ayesha Tours.",
  path: "/transport",
  keywords: ["Jeddah airport to Makkah transfer", "Makkah to Madinah transport", "ziyarat tour Madinah", "Umrah group transport"],
});

export default function TransportPage() {
  return (
    <>
      <Navbar />

      <main>
        <TransportHero />
        <TransportServices />
        <Fleet />
      </main>

      <Footer />
    </>
  );
}