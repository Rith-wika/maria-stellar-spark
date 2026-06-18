import { Reveal, SectionHeader } from "./Section";
import { BookOpen, Lightbulb, User2, HeartHandshake } from "lucide-react";

const focus = [
  { Icon: BookOpen, title: "Academic Excellence", desc: "Strong fundamentals through structured teaching." },
  { Icon: Lightbulb, title: "Skill Development", desc: "Critical thinking, creativity and problem-solving." },
  { Icon: User2, title: "Personality Development", desc: "Public speaking, leadership and confidence." },
  { Icon: HeartHandshake, title: "Value-Based Education", desc: "Empathy, integrity, and social responsibility." },
];

export function Academics() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Academics"
          title={<>A curriculum designed to <span className="text-gradient-primary">build futures</span></>}
          description="State Board • English Medium — balanced learning that goes beyond textbooks."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
          <Reveal>
            <div className="lg:col-span-2 rounded-3xl bg-card border border-border p-7 shadow-soft">
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">Curriculum</div>
              <h3 className="mt-3 text-2xl font-bold text-foreground">State Board</h3>
              <p className="text-sm text-muted-foreground mt-1">English Medium Instruction</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { v: "1-10", l: "Grades" },
                  { v: "100%", l: "SSC Results" },
                  { v: "30+", l: "Teachers" },
                  { v: "45+", l: "Years" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-surface p-4">
                    <div className="text-2xl font-display font-bold text-primary">{s.v}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {focus.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-card border border-border p-6 h-full hover:border-primary/40 transition">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold">
                    <f.Icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-lg font-bold text-foreground">{f.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
