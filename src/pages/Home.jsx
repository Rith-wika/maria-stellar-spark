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
import { WaveDivider } from "@/components/site/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WaveDivider />
      <VisionMission />
      <WaveDivider flip />
      <Principal />
      <WaveDivider />
      <WhyChoose />
      <WaveDivider flip />
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
