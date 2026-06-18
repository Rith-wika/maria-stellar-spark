import { createFileRoute } from "@tanstack/react-router";
import { Academics } from "@/components/site/Academics";
import { Achievements } from "@/components/site/Achievements";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — St. Maria High School" },
      { name: "description", content: "State Board curriculum, English medium instruction, and focus on academic excellence, skills, and values." },
      { property: "og:title", content: "Academics at St. Maria High School" },
      { property: "og:description", content: "Curriculum and learning approach that builds strong fundamentals and character." },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Academics" title="Curriculum that Builds Futures" description="State Board, English Medium — balanced, rigorous, and values-driven." />
      <Academics />
      <Achievements />
    </>
  ),
});
