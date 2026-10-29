import {
  CalendarCheck,
  CreditCard,
  FileCheck2,
  Plane,
  ShieldCheck,
} from "lucide-react";

const categories = [
  {
    title: "Bookings",
    icon: CalendarCheck,
  },
  {
    title: "Payments",
    icon: CreditCard,
  },
  {
    title: "Visas",
    icon: FileCheck2,
  },
  {
    title: "Umrah & Haj",
    icon: Plane,
  },
  {
    title: "Policies",
    icon: ShieldCheck,
  },
];

export default function FAQCategories() {
  return (
    <section className="bg-[#f7f5f1] py-14">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-[22px] border border-[#e3ded4] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#b79b66]/60 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f6f3ec] text-[#1a3e34] transition-all duration-300 group-hover:bg-[#b79b66] group-hover:text-[#0e1f1b]">
                  <Icon size={21} />
                </div>

                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#16322a]">
                  {category.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}