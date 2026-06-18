import { SectionHeader, Reveal } from "./Section";
import classroom from "@/assets/facility-classroom.jpg";
import library from "@/assets/facility-library.jpg";
import lab from "@/assets/facility-lab.jpg";
import playground from "@/assets/facility-playground.jpg";
import { Shield, Laptop } from "lucide-react";

const facilities = [
  { img: classroom, title: "Smart Classrooms", desc: "Technology-enabled rooms with digital boards for interactive learning." },
  { img: library, title: "Rich Library", desc: "A curated collection of educational and literary books for every grade." },
  { img: lab, title: "Science Labs", desc: "Well-equipped labs for hands-on practical experiments." },
  { img: playground, title: "Playground", desc: "Spacious grounds for sports, games, and physical development." },
];

export function Facilities() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Campus & Facilities"
          title={<>World-class <span className="text-gradient-primary">Learning Spaces</span></>}
          description="Modern infrastructure designed to inspire curiosity and active learning."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="h-full rounded-3xl gradient-primary text-primary-foreground p-7 flex flex-col justify-between min-h-[280px]">
              <Shield className="h-10 w-10 text-gold" />
              <div>
                <h3 className="text-xl font-bold">CCTV Security</h3>
                <p className="mt-2 text-sm text-white/85">24x7 surveillance ensuring a safe and secure campus environment.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="h-full rounded-3xl bg-gold text-gold-foreground p-7 flex flex-col justify-between min-h-[280px]">
              <Laptop className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Digital Learning</h3>
                <p className="mt-2 text-sm text-gold-foreground/85">Interactive education system that complements classroom teaching.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
