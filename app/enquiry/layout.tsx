import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plan Your Umrah or Haj – Pilgrimage Enquiry",
  description: "Tell us your pilgrimage type, dates, group and services needed, and Ayesha Tours will reply with suitable Umrah or Haj options.",
  path: "/enquiry",
  keywords: ["Umrah enquiry", "Haj enquiry", "plan Umrah"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
