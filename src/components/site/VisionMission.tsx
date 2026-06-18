import { Eye, Target, Check } from "lucide-react";
import { Reveal } from "./Section";

export function VisionMission() {
  return (
    <section className="py-20 lg:py-24 bg-surface">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="h-full rounded-3xl gradient-primary text-primary-foreground p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
              <Eye className="h-7 w-7 text-gold" />
            </span>
            <h3 className="mt-6 text-3xl font-bold">Our Vision</h3>
            <p className="mt-4 text-white/85 leading-relaxed text-lg">
              To empower students with knowledge, skills, and values to become responsible citizens
              and confident leaders of tomorrow.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl bg-card border border-border p-8 lg:p-10 relative overflow-hidden">
            <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-gold text-gold-foreground">
              <Target className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-3xl font-bold text-foreground">Our Mission</h3>
            <ul className="mt-5 space-y-3">
              {[
                "Deliver quality education with care",
                "Embrace innovative teaching methods",
                "Foster all-round student growth",
                "Develop leadership and life skills",
                "Instill strong moral values",
              ].map((m) => (
                <li key={m} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm sm:text-base">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
