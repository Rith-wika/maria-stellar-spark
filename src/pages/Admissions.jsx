import { Admissions } from "@/components/site/Admissions";
import { PageHero } from "@/components/site/PageHero";
import heroBg from "@/assets/hero-admissions.jpg";

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join the St. Maria Family"
        description="A simple, transparent process to begin your child's journey of excellence."
        image={heroBg}
      />
      <Admissions />
    </>
  );
}
