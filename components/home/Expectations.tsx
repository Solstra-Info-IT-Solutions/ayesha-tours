import { DEMO_MODE } from "@/lib/site";

const commitments = [
  {
    title: "Inclusions and exclusions, in writing",
    text: "Every quote lists flights, visa processing, hotels, transfers and ziyarat – and states plainly what is not included.",
  },
  {
    title: "Hotels described honestly",
    text: "We explain hotel category and approximate walking distance to the Haram, so you can weigh comfort against cost.",
  },
  {
    title: "Documentation guidance",
    text: "A current checklist for your Umrah visa and documents, and help understanding the official process for Haj.",
  },
  {
    title: "Support before you depart",
    text: "Guidance on ihram, the rites and packing, and answers to the questions first-time pilgrims usually ask.",
  },
  {
    title: "A person to talk to",
    text: "You speak with our team directly – by phone, WhatsApp or email – rather than a booking engine.",
  },
];

export default function Expectations() {
  return (
    <section aria-labelledby="expect-title" className="bg-ivory-deep py-24 text-charcoal sm:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:px-12">
        <div data-reveal="up">
          <p className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-gold-ink">
            <span className="h-px w-8 bg-gold-ink" aria-hidden /> What you can expect
          </p>
          <h2 id="expect-title" className="mt-6 font-serif text-[length:var(--text-headline)] font-medium leading-[0.98] text-night">
            We would rather tell you what isn&apos;t included
            <span className="italic text-mist"> than surprise you later.</span>
          </h2>

          <div className="mt-12 max-w-md rounded-[20px] border border-night/15 bg-ivory p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-ink">Credentials</p>
            <p className="mt-3 text-[15px] leading-7 text-charcoal">
              {DEMO_MODE
                ? "Registrations, licences and verified client reviews will be shown here once Ayesha Tours provides them. We don't display ratings, numbers or approvals we can't verify."
                : "Ask us for our registration details at any time – we are happy to share them with every pilgrim before booking."}
            </p>
          </div>
        </div>

        <ol className="border-t border-night/15">
          {commitments.map((item, index) => (
            <li
              key={item.title}
              data-reveal="up"
              style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
              className="grid gap-3 border-b border-night/15 py-8 sm:grid-cols-[64px_1fr] sm:gap-6"
            >
              <span className="font-serif text-[22px] italic text-gold-ink">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-[28px] leading-tight text-night sm:text-[32px]">{item.title}</h3>
                <p className="mt-2 max-w-xl text-[16px] leading-7 text-mist">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
