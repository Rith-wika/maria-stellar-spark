import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";
import { Principal } from "@/components/site/Principal";
import { PageHero } from "@/components/site/PageHero";
import heroBg from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — St. Maria High School" },
      { name: "description", content: "Learn about St. Maria High School's history since 1980, vision, mission, and leadership in Hyderabad." },
      { property: "og:title", content: "About St. Maria High School" },
      { property: "og:description", content: "46+ years of nurturing young minds through values-driven, quality education." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="About Us" title="Our Story Since 1980" description="A legacy built on excellence, integrity, and care for every child." image={heroBg} />
      <About />
      <VisionMission />
      <Principal />
    </>
  ),
});
