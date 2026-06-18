import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — St. Maria High School" },
      { name: "description", content: "Photos of campus life, events, sports, and achievements at St. Maria High School, Hyderabad." },
      { property: "og:title", content: "Gallery — St. Maria High School" },
      { property: "og:description", content: "A look into the moments that define our community." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Gallery" title="Life at St. Maria" description="Campus, classrooms, events, and celebrations — captured." />
      <Gallery />
      <Testimonials />
    </>
  ),
});
