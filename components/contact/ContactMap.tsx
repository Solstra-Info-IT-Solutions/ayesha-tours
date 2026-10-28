import { MapPin, Navigation } from "lucide-react";
import { SITE, mapEmbedUrl } from "@/lib/site";

export default function ContactMap() {
  return (
    <section
      id="location"
      className="bg-[#f4f6f5] py-20"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 xl:px-6">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Info */}

          <div>

            <div className="flex items-center gap-3">
              <MapPin
                size={18}
                className="text-[#e40e83]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#4e1367]">
                Find Us
              </span>
            </div>

            <h2 className="mt-6 font-serif text-[36px] font-bold text-[#3f1152]">
              Visit Our

              <span className="block italic text-[#e40e83]">
                Office.
              </span>
            </h2>

            <p className="mt-5 max-w-[420px] text-[14px] leading-7 text-[#7c7181]">
              Visit us to discuss your Umrah or Haj plans in person. Please call
            or message ahead so the right person is available.
            </p>


            <div className="mt-8 flex items-start gap-4 border-l-2 border-[#e40e83] bg-white p-5 shadow-sm">

              <MapPin
                size={20}
                className="mt-1 text-[#4e1367]"
              />

              <p className="text-[14px] leading-7 text-[#5d5163]">
                {SITE.address.street}
                <br />
                {SITE.address.locality}
                {SITE.address.region ? `, ${SITE.address.region}` : ""}
              </p>

            </div>

          </div>


          {/* Map */}

          <div className="overflow-hidden border border-[#dad2d6] bg-white p-2 shadow-[0_20px_60px_rgba(63,17,82,0.10)]">

            <div className="relative h-[400px] overflow-hidden">

              <iframe
                src={mapEmbedUrl()}
                title="Ayesha Tours office location"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0 grayscale-[15%]"
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#3f1152] via-[#e40e83] to-[#3f1152]" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}