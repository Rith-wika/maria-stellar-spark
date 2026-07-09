import { Contact } from "@/components/site/Contact";
import { PageHero } from "@/components/site/PageHero";
import heroBg from "@/assets/hero-contact.jpg";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Connect"
        description="Phone, WhatsApp, email, or visit us — we're here for you."
        image={heroBg}
      />
      <Contact />
    </>
  );
}
