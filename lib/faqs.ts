export type Faq = { question: string; answer: string };

/**
 * General pilgrim FAQs. Answers avoid quoting fees, quotas or visa rules
 * that change often – pilgrims are asked to confirm current requirements.
 */
export const faqs: Faq[] = [
  {
    question: "How do I request a quote for an Umrah package?",
    answer:
      "Use the Request a Quote or Enquiry page, or message us on WhatsApp, with your preferred month, number of adults and children, departure city and hotel preference. We will reply with suitable options and a written breakdown of what each package includes.",
  },
  {
    question: "What is usually included in an Umrah package?",
    answer:
      "Packages commonly include return flights, Umrah visa processing, hotels in Makkah and Madinah, airport and intercity transfers and ziyarat. Inclusions vary by package, so every quote lists exactly what is and is not included before you confirm.",
  },
  {
    question: "Can I customise the number of nights in Makkah and Madinah?",
    answer:
      "Yes. You can usually choose how many nights to spend in each city, the hotel category and distance from the Haram, and the room sharing arrangement. Changes may affect the final price, which we confirm in writing.",
  },
  {
    question: "What documents do I need for an Umrah visa?",
    answer:
      "Typically a passport with sufficient validity, recent photographs and the details requested in the visa application. Requirements – including vaccination rules – are set by the Saudi authorities and can change, so we share the current checklist when you enquire.",
  },
  {
    question: "Do you help with Haj as well as Umrah?",
    answer:
      "Yes, we offer guidance for Haj. Haj travel is subject to official quotas, registration processes and schedules, so availability and arrangements depend on the rules in force for that year. Contact us early to understand the options.",
  },
  {
    question: "Is Umrah suitable for elderly pilgrims or wheelchair users?",
    answer:
      "Many elderly and less mobile pilgrims perform Umrah every year. Tell us about any mobility needs so we can suggest hotels closer to the Haram, suitable transfer timings and information about wheelchair options at the Haramain.",
  },
  {
    question: "How do I confirm my booking and make payment?",
    answer:
      "Once you are happy with the quotation, we explain the confirmation steps, payment schedule and cancellation terms in writing. Bookings are only confirmed after you receive written confirmation from us.",
  },
  {
    question: "When is the best time to perform Umrah?",
    answer:
      "Umrah can be performed throughout the year outside the days of Haj. Ramadan and school holidays are the busiest and most expensive periods, while other months are often calmer and more affordable. We can help you compare.",
  },
];
