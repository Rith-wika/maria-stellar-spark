import { BookOpen, HeartHandshake, Sparkles, Users } from "lucide-react";
import { SectionHeader, Reveal } from "./Section";

const features = [
  { Icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum focused on conceptual clarity and consistent results." },
  { Icon: HeartHandshake, title: "Character Building", desc: "Values, discipline, and empathy woven into everyday learning." },
  { Icon: Sparkles, title: "Student Success", desc: "Hundreds of alumni thriving in higher studies and careers." },
  { Icon: Users, title: "Experienced Faculty", desc: "Dedicated teachers who mentor every child individually." },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Us"
          title={<>A Legacy of <span className="text-gradient-primary">Quality Education</span></>}
          description="St. Maria High School has been a trusted name in Hyderabad since 1980 — a place where tradition meets modern learning, and every student is encouraged to discover their potential."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-soft transition">
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-soft group-hover:scale-110 transition">
                  <f.Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
