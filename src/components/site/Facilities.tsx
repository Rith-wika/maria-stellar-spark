import { SectionHeader, Reveal } from "./Section";
import classroom from "@/assets/facility-classroom.jpg";
import library from "@/assets/facility-library.jpg";
import lab from "@/assets/facility-lab.jpg";
import playground from "@/assets/facility-playground.jpg";
import { Shield, Laptop } from "lucide-react";

const facilities = [
  { img: classroom, title: "Digital Classrooms", desc: "Technology-enabled digital classrooms for interactive, engaging lessons at every grade." },
  { img: library, title: "Library", desc: "A curated collection of educational and literary books that builds a daily reading habit." },
  { img: lab, title: "Labs", desc: "Well-equipped labs for hands-on practical learning and experiments." },
  { img: playground, title: "Playground", desc: "Open playground for sports, games, and physical development." },
];

export function Facilities() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Campus & Facilities"
          title={<>A campus built for <span className="text-gradient-primary">learning & safety</span></>}
          description="Classrooms, library, labs, playground, and round-the-clock security — everything your child needs to learn and grow."
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
                <h3 className="text-xl font-bold">Security & CCTV</h3>
                <p className="mt-2 text-sm text-white/85">24x7 CCTV surveillance ensuring a safe and secure campus environment for every child.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="h-full rounded-3xl bg-gold text-gold-foreground p-7 flex flex-col justify-between min-h-[280px]">
              <Laptop className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Digital Learning</h3>
                <p className="mt-2 text-sm text-gold-foreground/85">Smart, digital classrooms across Pre-Primary, Primary, and High School.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
