import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";
import { Principal } from "@/components/site/Principal";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Facilities } from "@/components/site/Facilities";
import { Academics } from "@/components/site/Academics";
import { Achievements } from "@/components/site/Achievements";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Admissions } from "@/components/site/Admissions";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "St. Maria High School — Excellence in Education Since 1980" },
      { name: "description", content: "English-medium State Board school in Lalitha Bagh, Hyderabad. 100% SSC results, 45+ years of excellence. Admissions Open 2026-27." },
      { property: "og:title", content: "St. Maria High School — Excellence in Education" },
      { property: "og:description", content: "Nurturing young minds since 1980 with quality education and holistic development." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Principal />
      <WhyChoose />
      <Facilities />
      <Academics />
      <Achievements />
      <Gallery />
      <Testimonials />
      <Admissions />
      <Contact />
    </>
  );
}
