import { GraduationCap, Users, Shield, Laptop, Trophy, Heart } from "lucide-react";
import { SectionHeader, Reveal } from "./Section";

const items = [
  { Icon: GraduationCap, title: "Academic Excellence", desc: "Consistent 100% results and strong fundamentals." },
  { Icon: Users, title: "Experienced Teachers", desc: "Mentors who know each student by name." },
  { Icon: Shield, title: "Safe Campus", desc: "CCTV surveillance and trained staff at all times." },
  { Icon: Laptop, title: "Digital Learning", desc: "Smart classrooms and interactive content." },
  { Icon: Trophy, title: "Sports Activities", desc: "Open playground for fitness and team spirit." },
  { Icon: Heart, title: "Character Development", desc: "Values, empathy, and discipline first." },
];

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>What makes <span className="text-gradient-primary">St. Maria</span> special</>}
          description="Six pillars that have shaped generations of confident, capable students."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl bg-card border border-border p-7 hover:-translate-y-1 hover:shadow-soft hover:border-primary/40 transition">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition">
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
