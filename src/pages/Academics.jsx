import { Academics } from "@/components/site/Academics";
import { Achievements } from "@/components/site/Achievements";
import { PageHero } from "@/components/site/PageHero";
import heroBg from "@/assets/hero-academics.jpg";

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Curriculum that Builds Futures"
        description="State Board, English Medium — balanced, rigorous, and values-driven."
        image={heroBg}
      />
      <Academics />
      <Achievements />
    </>
  );
}
