import TransportQuoteHero from "@/components/transport-quote/TransportQuoteHero";
import TransportQuoteForm from "@/components/transport-quote/TransportQuoteForm";
import WhyChooseTransport from "@/components/transport-quote/WhyChooseTransport";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request a Transport & Ziyarat Quote",
  description: "Request a quote for Jeddah and Madinah airport transfers, Makkah–Madinah transport and ziyarat tours for families and groups with Ayesha Tours.",
  path: "/transport-request-quote",
  keywords: ["Umrah transport quote", "Jeddah to Makkah transfer quote", "ziyarat tour quote"],
});

export default function TransportRequestQuotePage() {
  return (
    <main className="min-h-screen bg-[#f9f7f8]">
      <TransportQuoteHero />

      <section className="relative pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_380px] lg:items-start lg:px-8 xl:gap-14">
          <TransportQuoteForm />

          <aside className="lg:sticky lg:top-28">
            <WhyChooseTransport />
          </aside>
        </div>
      </section>
    </main>
  );
}