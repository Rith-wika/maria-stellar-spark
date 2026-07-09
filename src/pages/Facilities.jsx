import { Facilities } from "@/components/site/Facilities";
import { WhyChoose } from "@/components/site/WhyChoose";
import { PageHero } from "@/components/site/PageHero";
import heroBg from "@/assets/hero-facilities.jpg";

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus & Facilities"
        title="A Campus Built for Learning"
        description="Modern infrastructure that supports every dimension of growth."
        image={heroBg}
      />
      <Facilities />
      <WhyChoose />
    </>
  );
}
