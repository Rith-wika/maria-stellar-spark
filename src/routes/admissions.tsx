import { createFileRoute } from "@tanstack/react-router";
import { Admissions } from "@/components/site/Admissions";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions Open 2026-27 — St. Maria High School" },
      { name: "description", content: "Apply now for academic year 2026-27 at St. Maria High School. Simple 4-step process, English medium, State Board." },
      { property: "og:title", content: "Admissions Open 2026-27 — St. Maria High School" },
      { property: "og:description", content: "Secure your child's seat. Limited admissions available." },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Admissions" title="Join the St. Maria Family" description="A simple, transparent process to begin your child's journey of excellence." />
      <Admissions />
    </>
  ),
});
