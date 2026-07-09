import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero } from "@/components/site/PageHero";
import heroBg from "@/assets/hero-gallery.jpg";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Life at St. Maria"
        description="Campus, classrooms, events, and celebrations — captured."
        image={heroBg}
      />
      <Gallery />
      <Testimonials />
    </>
  );
}
