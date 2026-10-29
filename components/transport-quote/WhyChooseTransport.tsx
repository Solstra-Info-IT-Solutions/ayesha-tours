import {
  ShieldCheck,
  Clock3,
  Headphones,
  Sparkles,
} from "lucide-react";

export default function WhyChooseTransport() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      description:
      "Transfers planned around flights, hotel check-in and prayer times.",
    },
    {
      icon: Clock3,
      title: "Family Friendly",
    description:
      "Vehicle suggestions that consider elders, children and luggage.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
      "A contact to reach about your transfers while you travel.",
    },
  ];

  return (
    <div className="overflow-hidden rounded-[28px] bg-[#16322a] p-7 text-white shadow-xl">
      <div className="flex items-center gap-3">
        <Sparkles size={17} className="text-[#b79b66]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b79b66]">
          Travel With Confidence
        </span>
      </div>

      <h3 className="mt-5 font-serif text-3xl font-bold leading-tight">
        Calm Transfers.
        <span className="block italic font-medium text-[#b79b66]">
          Every Pilgrim.
        </span>
      </h3>

      <div className="mt-8 space-y-6">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#b79b66]">
                <Icon size={18} />
              </div>

              <div>
                <h4 className="text-sm font-semibold">
                  {feature.title}
                </h4>

                <p className="mt-1 text-xs leading-5 text-white/60">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-xs leading-6 text-white/50">
          Send your requirements and our team will reply with suitable
            vehicle options and a quotation.
        </p>
      </div>
    </div>
  );
}