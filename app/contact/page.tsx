import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us – Umrah & Haj Enquiries by Phone, WhatsApp or Email",
  description: "Contact Ayesha Tours about Umrah packages, Haj guidance, visas and transfers. Send us a message on WhatsApp, by email or through our enquiry form.",
  path: "/contact",
  keywords: ["Umrah travel agent contact", "Ayesha Tours contact", "Haj enquiry"],
});

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#fbf9fa]">
       <Navbar />     
      <ContactHero />

      <ContactInfoCards />

      <ContactForm />

      <ContactMap />

      <ContactCTA />
       <Footer />
    </main>
  );
}