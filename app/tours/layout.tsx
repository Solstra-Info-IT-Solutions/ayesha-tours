import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pilgrimage Journeys – Family, Group, Ramadan & Haj",
  description: "Family Umrah, short Umrah, group pilgrimages, Ramadan Umrah and Haj guidance – pilgrimage journeys planned with care by Ayesha Tours.",
  path: "/tours",
  keywords: ["family Umrah package", "group Umrah", "Ramadan Umrah", "Haj guidance"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
