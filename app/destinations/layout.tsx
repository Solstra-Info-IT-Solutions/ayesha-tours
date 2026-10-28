import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Makkah & Madinah – Holy Cities & Ziyarat Sites",
  description: "A guide to the holy cities of Makkah and Madinah and the ziyarat sites pilgrims visit – Jabal al-Nour, Mount Uhud, Masjid Quba, Mina and Arafat – with Ayesha Tours.",
  path: "/destinations",
  keywords: ["Makkah ziyarat", "Madinah ziyarat", "Umrah destinations", "Jabal al-Nour", "Mount Uhud"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
