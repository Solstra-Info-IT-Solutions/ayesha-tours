import LegalPageLayout from "@/components/LegalPageLayout";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Ayesha Tours website and services.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing the Ayesha Tours website, submitting an enquiry, requesting a quotation or making a booking, you agree to comply with these Terms and Conditions.",
        "These terms apply to all travel, transportation and related services provided by Ayesha Tours unless otherwise stated in a specific written agreement.",
      ],
    },

    {
      title: "Our Services",
      content: [
        "Ayesha Tours provides Umrah and Haj travel planning, package arrangements, transfers and related pilgrimage travel services based on availability and customer requirements.",
      ],
      points: [
        "Umrah packages and customised Umrah planning.",
        "Haj guidance, subject to official quotas and regulations.",
        "Visa application assistance (visa decisions rest solely with the issuing authorities).",
        "Flight and hotel arrangements in Makkah and Madinah.",
        "Airport, intercity and ziyarat transfers in Saudi Arabia.",
        "Customised pilgrimage planning and quotations.",
      ],
    },

    {
      title: "Booking Confirmation",
      content: [
        "A booking is considered confirmed only after the required booking details have been accepted and any applicable payment or advance payment has been successfully received.",
        "A quotation or enquiry response does not automatically guarantee availability or confirm a booking.",
      ],
    },

    {
      title: "Customer Responsibilities",
      points: [
        "Provide accurate passenger, travel and contact information.",
        "Arrive at the agreed pickup point at the scheduled time.",
        "Carry valid identification and travel documents where required.",
        "Follow applicable laws, safety requirements and instructions provided during the journey.",
        "Treat vehicles, drivers, accommodation and service providers with appropriate care and respect.",
        "Inform us in advance about special requirements whenever possible.",
      ],
    },

    {
      title: "Service Availability",
      content: [
        "All travel and transportation services are subject to availability at the time of confirmation.",
        "Ayesha Tours may need to modify arrangements due to operational requirements, weather conditions, road conditions, government restrictions or circumstances beyond reasonable control.",
      ],
    },

    {
      title: "Delays and Force Majeure",
      content: [
        "We are not responsible for delays or disruptions caused by circumstances beyond our reasonable control.",
      ],
      points: [
        "Severe weather conditions.",
        "Traffic congestion or road closures.",
        "Natural disasters.",
        "Government restrictions or regulatory actions.",
        "Strikes, civil disturbances or emergencies.",
        "Unexpected mechanical or operational circumstances.",
      ],
    },

    {
      title: "Changes to Services",
      content: [
        "Where reasonably necessary, we may modify vehicle arrangements, routes, timings or service providers to ensure operational continuity and customer safety.",
        "We will make reasonable efforts to provide an equivalent or suitable alternative where a significant change becomes necessary.",
      ],
    },

    {
      title: "Limitation of Liability",
      content: [
        "Ayesha Tours will make reasonable efforts to provide services professionally and safely. However, our liability may be limited where losses arise from circumstances outside our reasonable control or from inaccurate information provided by the customer.",
        "We are not responsible for personal belongings left unattended or lost during travel unless liability is established under applicable law.",
      ],
    },

    {
      title: "Website Information",
      content: [
        "We make reasonable efforts to keep website information accurate and up to date. However, service details, pricing, availability and travel information may change.",
        "We reserve the right to correct errors, update information or modify website content without prior notice.",
      ],
    },

    {
      title: "Governing Jurisdiction",
      content: [
        "These Terms and Conditions shall be interpreted in accordance with applicable laws of India.",
        "Any disputes arising from services provided by Ayesha Tours shall be subject to the appropriate jurisdiction as permitted by applicable law.",
      ],
    },
  ];

  return (
    <LegalPageLayout
      eyebrow="Legal Information"
      title="Terms & Conditions"
      description="Important terms governing the use of our website and the travel and transportation services we provide."
      sections={sections}
    />
  );
}