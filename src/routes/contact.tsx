import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — St. Maria High School" },
      { name: "description", content: "Reach St. Maria High School in Lalitha Bagh, Uppuguda, Hyderabad. Call, WhatsApp or email us today." },
      { property: "og:title", content: "Contact St. Maria High School" },
      { property: "og:description", content: "We're happy to answer your questions about admissions, campus visits, and more." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Let's Connect" description="Phone, WhatsApp, email, or visit us — we're here for you." />
      <Contact />
    </>
  ),
});
