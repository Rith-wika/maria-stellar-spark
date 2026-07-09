import { Eye, Target, Gem } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

export function VisionMission() {
  return (
    <section className="dark py-20 lg:py-24 bg-surface text-foreground">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Vision, Mission & Values"
          title={<>What we <span className="text-gradient-primary">stand for</span></>}
          description="Holistic education rooted in knowledge, character, and service."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="h-full rounded-3xl gradient-primary text-primary-foreground p-8 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                <Eye className="h-7 w-7 text-gold" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 text-white/85 leading-relaxed">
                To inspire and empower every student to achieve academic excellence,
                uphold moral values, and become responsible global citizens through
                holistic education rooted in knowledge, character, and service.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-card border border-border p-8 relative overflow-hidden">
              <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-gold text-gold-foreground">
                <Target className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We instill strong moral values, discipline, and respect for all.
                We prepare students to become responsible citizens who contribute
                positively to society.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-3xl bg-gold text-gold-foreground p-8 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white/20 blur-2xl" />
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/25 backdrop-blur">
                <Gem className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Our Core Values</h3>
              <ul className="mt-4 space-y-2 text-gold-foreground/90 leading-relaxed font-medium">
                <li>• Knowledge</li>
                <li>• Character</li>
                <li>• Excellence</li>
              </ul>
              <p className="mt-4 text-sm text-gold-foreground/80">
                The three pillars that guide every classroom, every day.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
