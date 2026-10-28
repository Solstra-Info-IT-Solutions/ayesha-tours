import FAQHero from "@/components/faq/FAQHero";
import FAQCategories from "@/components/faq/FAQCategories";
import FAQList from "@/components/faq/FAQList";
import FAQCTA from "@/components/faq/FAQCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { faqs } from "@/lib/faqs";

export const metadata = buildMetadata({
  title: "FAQs – Umrah Packages, Visas, Haj & Booking Help",
  description: "Answers to common questions about Umrah packages, visas, Haj guidance, elderly pilgrims, bookings and payments with Ayesha Tours.",
  path: "/faq",
  keywords: ["Umrah FAQ", "Umrah visa documents", "Haj questions"],
});

export default function FAQPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
       <Navbar /> 
      <FAQHero />

      <FAQCategories />

      <FAQList />

      <FAQCTA />
      <Footer />
    </main>
  );
}