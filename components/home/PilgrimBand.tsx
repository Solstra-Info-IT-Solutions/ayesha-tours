import VelocityMarquee from "@/components/motion/VelocityMarquee";

/** Two counter-moving lines of place names and the Talbiyah. Decorative. */
export default function PilgrimBand() {
  return (
    <section aria-label="Places of the pilgrimage" className="overflow-hidden border-y border-stone bg-ivory py-10 sm:py-14">
      <VelocityMarquee
        baseVelocity={-1.6}
        items={["Makkah", "Madinah", "Arafat", "Mina", "Muzdalifah", "Quba", "Uhud"]}
        itemClassName="font-serif text-[clamp(3rem,1.8rem+5vw,7rem)] font-medium leading-[1.05] text-night"
      />
      <VelocityMarquee
        baseVelocity={1.2}
        className="mt-2 sm:mt-4"
        items={["Labbaik Allahumma Labbaik", "Here I am, O Allah, here I am"]}
        itemClassName="font-serif text-[clamp(1.5rem,1.1rem+1.8vw,2.75rem)] italic leading-tight text-gold-ink"
      />
      <p className="sr-only">
        Makkah, Madinah, Arafat, Mina, Muzdalifah, Quba and Uhud. Labbaik Allahumma Labbaik – here I am, O Allah, here I am.
      </p>
    </section>
  );
}
