import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import ReelStrip from "@/components/ReelStrip";
import AboutTeaser from "@/components/AboutTeaser";
import { PROJECTS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkGrid items={PROJECTS.slice(0, 4)} />
      <ReelStrip />
      <AboutTeaser />
    </>
  );
}
