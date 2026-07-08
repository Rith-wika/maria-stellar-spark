import { GraduationCap, Users, Shield, Laptop, Trophy, Heart } from "lucide-react";
import { SectionHeader, Reveal } from "./Section";

const colors = [
  { bubble: "bg-primary/12 text-primary", border: "border-primary/30" },
  { bubble: "bg-gold/20 text-gold", border: "border-gold/50" },
  { bubble: "bg-flame/15 text-flame", border: "border-flame/40" },
  { bubble: "bg-success/15 text-success", border: "border-success/40" },
];

const items = [
  { Icon: Trophy, title: "100% SSC Results", desc: "Consistent 100% SSC results, every single year." },
  { Icon: Users, title: "Experienced Faculty", desc: "Dedicated teachers with a student-centred approach to every child." },
  { Icon: Laptop, title: "Digital Classrooms", desc: "A dynamic learning environment with digital classrooms at every stage." },
  { Icon: Heart, title: "Values & Discipline", desc: "Strong moral values, discipline, and good daily habits — including Bhagavad Gita reading." },
  { Icon: Shield, title: "Safe Campus", desc: "CCTV surveillance and attentive staff for a secure environment." },
  { Icon: GraduationCap, title: "46+ Years of Trust", desc: "A beacon of quality education in Hyderabad since 1980." },
];

export function WhyChoose() {
  return (
    <section className="dark py-20 lg:py-28 bg-surface text-foreground">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>What makes <span className="text-gradient-primary">St. Maria</span> special</>}
          description="Six pillars that have shaped generations of confident, responsible, future-ready students."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div
                className={`group h-full rounded-2xl bg-card border-2 p-7 transition hover:-translate-y-1 hover:rotate-0 hover:shadow-soft ${
                  colors[i % colors.length].border
                } ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
              >
                <span className={`grid h-14 w-14 place-items-center rounded-2xl -rotate-3 transition group-hover:rotate-6 group-hover:scale-110 ${colors[i % colors.length].bubble}`}>
                  <it.Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
