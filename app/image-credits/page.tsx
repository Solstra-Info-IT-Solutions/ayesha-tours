import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";
import { imageCredits } from "@/lib/image-credits";

export const metadata = buildMetadata({
  title: "Image Credits",
  description: "Attribution for the photographs used on the Ayesha Tours website.",
  path: "/image-credits",
});

export default function ImageCreditsPage() {
  return (
    <main className="min-h-screen bg-[#f6f2f4]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#3e0e52] pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff058f]/80 to-transparent" />

        <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#ff058f]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff058f]">
              Attribution
            </span>
          </div>

          <h1 className="mt-5 font-serif text-[38px] font-bold leading-tight text-white sm:text-5xl">
            Image Credits
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#c9b7d0]">
            The photographs on this website are demonstration images from
            Wikimedia Commons, used under the licences listed below. They were
            resized and compressed for the web; no other changes were made.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-16">
        <ul className="grid gap-4 sm:grid-cols-2">
          {imageCredits.map((credit) => (
            <li
              key={credit.file}
              className="flex gap-4 border border-[#dfd8dc] bg-white p-4"
            >
              <img
                src={credit.file}
                alt=""
                width={96}
                height={72}
                loading="lazy"
                className="h-[72px] w-[96px] shrink-0 object-cover"
              />

              <div className="min-w-0 text-[13px] leading-6 text-[#6e6572]">
                <a
                  href={credit.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block break-words font-semibold text-[#3f1152] underline-offset-2 hover:text-[#c1124c] hover:underline"
                >
                  {credit.title}
                </a>
                <span>by {credit.author} · </span>
                <a
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b3146b] underline-offset-2 hover:underline"
                >
                  {credit.license}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
