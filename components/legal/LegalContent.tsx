import { phoneLink, mailLink, SITE } from "@/lib/site";
interface LegalSection {
  title: string;
  content?: string[];
  points?: string[];
}

interface LegalContentProps {
  lastUpdated?: string;
  sections: LegalSection[];
}

export default function LegalContent({
  lastUpdated = "September 2026",
  sections,
}: LegalContentProps) {
  return (
    <div className="rounded-[28px] border border-[#e2dcdf] bg-white p-6 shadow-[0_20px_60px_rgba(63,17,82,0.05)] sm:p-10 lg:p-12">
      {/* Updated */}

      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5dfe2] pb-7">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e40e83]">
            Ayesha Tours
          </p>

          <p className="mt-2 text-sm text-[#847b88]">
            Please read this information carefully.
          </p>
        </div>

        <div className="rounded-full bg-[#f6f2f4] px-4 py-2 text-[11px] font-medium text-[#6e6572]">
          Last Updated: {lastUpdated}
        </div>
      </div>

      {/* Content */}

      <div className="mt-10 space-y-12">
        {sections.map((section, index) => (
          <section key={section.title}>
            <div className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1eaf4] text-[12px] font-bold text-[#4e1367]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-[26px] font-bold leading-tight text-[#3f1152] sm:text-[30px]">
                  {section.title}
                </h2>

                {section.content && (
                  <div className="mt-5 space-y-4">
                    {section.content.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-[15px] leading-8 text-[#6e6572]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.points && (
                  <ul className="mt-6 space-y-3">
                    {section.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex gap-3 text-[15px] leading-7 text-[#6e6572]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e40e83]" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Contact */}

      <div className="mt-12 rounded-[20px] border border-[#e40e83]/30 bg-[#f8f0f4] p-6 sm:p-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b3146b]">
          Questions?
        </p>

        <h3 className="mt-3 font-serif text-[25px] font-bold text-[#3f1152]">
          Need More Information?
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#6e6572]">
          If you have any questions regarding our policies, terms or services,
          please contact Ayesha Tours.
        </p>

        <div className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
          <a
            href={phoneLink()}
            className="font-medium text-[#4e1367] transition hover:text-[#e40e83]"
          >
            {SITE.phone}
          </a>

          <a
            href={mailLink()}
            className="font-medium text-[#4e1367] transition hover:text-[#e40e83]"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}