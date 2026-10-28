import { whatsappLink, phoneLink, mailLink, SITE } from "@/lib/site";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const contactItems = [
  {
    title: "Call Us",
    description: "Speak directly with our team during office hours.",
    value: SITE.phone,
    href: phoneLink(),
    icon: Phone,
  },
  {
    title: "Email Us",
    description: "Send your Umrah or Haj requirements anytime.",
    value: SITE.email,
    href: mailLink(),
    icon: Mail,
  },
  {
    title: "Visit Us",
    description: "Meet our team at the office.",
    value: SITE.address.street,
    href: "#location",
    icon: MapPin,
  },
  {
    title: "WhatsApp",
    description: "Quick answers to your pilgrimage questions.",
    value: "Chat With Us",
    href: whatsappLink(),
    icon: MessageCircle,
  },
];

export default function ContactInfoCards() {
  return (
    <section className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 xl:px-6">
      <div className="-mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden border border-[#e2d7dd] bg-[#fffdfe] p-6 shadow-[0_18px_50px_rgba(63,17,82,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#e40e83]/60 hover:shadow-[0_25px_60px_rgba(63,17,82,0.14)]"
            >
              {/* Background Accent */}

              <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-[#e40e83]/[0.05] transition-transform duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4e1367]/10 text-[#4e1367] transition-all duration-300 group-hover:bg-[#4e1367] group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#e40e83] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-6 font-serif text-[20px] font-bold text-[#3f1152]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#8e8293]">
                  {item.description}
                </p>

                <p className="mt-5 text-[13px] font-semibold text-[#4e1367]">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}