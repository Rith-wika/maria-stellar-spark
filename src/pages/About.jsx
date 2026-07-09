import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";
import { Principal } from "@/components/site/Principal";
import { PageHero } from "@/components/site/PageHero";
import heroBg from "@/assets/hero-about.jpg";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story Since 1980"
        description="A legacy built on excellence, integrity, and care for every child."
        image={heroBg}
      />
      <About />
      <VisionMission />
      <Principal />
    </>
  );
}
