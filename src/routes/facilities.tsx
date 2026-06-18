import { createFileRoute } from "@tanstack/react-router";
import { Facilities } from "@/components/site/Facilities";
import { WhyChoose } from "@/components/site/WhyChoose";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities & Campus — St. Maria High School" },
      { name: "description", content: "Smart classrooms, library, science labs, playground, CCTV security and digital learning at St. Maria High School." },
      { property: "og:title", content: "Facilities at St. Maria High School" },
      { property: "og:description", content: "Modern infrastructure designed for active, joyful learning." },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Campus & Facilities" title="A Campus Built for Learning" description="Modern infrastructure that supports every dimension of growth." />
      <Facilities />
      <WhyChoose />
    </>
  ),
});
