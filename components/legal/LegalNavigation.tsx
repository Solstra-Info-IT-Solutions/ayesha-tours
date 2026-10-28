import Link from "next/link";

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    label: "Cancellation & Refund",
    href: "/cancellation-refund-policy",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-policy",
  },
];

export default function LegalNavigation() {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-[24px] border border-[#e2dcdf] bg-white p-6 shadow-[0_15px_45px_rgba(63,17,82,0.06)]">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e40e83]">
          Legal Information
        </p>

        <h3 className="mt-3 font-serif text-[24px] font-bold text-[#3f1152]">
          Policies & Terms
        </h3>

        <div className="mt-6 space-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-[#6e6572] transition-all duration-300 hover:bg-[#f6f2f4] hover:text-[#3f1152]"
            >
              <span>{link.label}</span>

              <span className="text-[#e40e83] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}