import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import JourneyComposer from "@/components/home/JourneyComposer";
import TwoCities from "@/components/home/TwoCities";
import CuratedJourneys from "@/components/home/CuratedJourneys";
import JourneyArranged from "@/components/home/JourneyArranged";
import Expectations from "@/components/home/Expectations";
import Conversation from "@/components/home/Conversation";

/**
 * "A Journey Beyond Distance" – see docs/ayesha-tours-market-research.md.
 * Opening → planner → the two cities → journeys → process → trust → conversation.
 */
export default function Home() {
  return (
    <>
      <Navbar variant="overlay" />
      <main>
        <HomeHero />
        <JourneyComposer />
        <TwoCities />
        <CuratedJourneys />
        <JourneyArranged />
        <Expectations />
        <Conversation />
      </main>
      <Footer />
    </>
  );
}
