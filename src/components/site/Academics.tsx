import { Reveal, SectionHeader } from "./Section";
import { Blocks, BookOpen, GraduationCap, Check } from "lucide-react";

const stages = [
  {
    Icon: Blocks,
    stage: "Pre-Primary",
    grades: "Nursery – UKG",
    highlight: "Activity-Based Teaching",
    points: [
      "Learning through play and hands-on activities",
      "Foundation in language and numbers",
      "Good habits and values from day one",
    ],
  },
  {
    Icon: BookOpen,
    stage: "Primary School",
    grades: "Classes 1 – 5",
    highlight: "Digital Classrooms",
    points: [
      "Interactive digital classroom learning",
      "Strong fundamentals across all subjects",
      "Creativity and critical thinking encouraged",
    ],
  },
  {
    Icon: GraduationCap,
    stage: "High School",
    grades: "Classes 6 – 10",
    highlight: "SSC Excellence",
    points: [
      "Digital classrooms with structured SSC preparation",
      "100% SSC results every year",
      "Discipline, values, and career readiness",
    ],
  },
];

export function Academics() {
  return (
    <section className="dark py-20 lg:py-28 bg-surface text-foreground">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Academics"
          title={<>Learning at <span className="text-gradient-primary">every stage</span></>}
          description="State Board • English Medium — a clear academic journey from Pre-Primary to SSC."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {stages.map((s, i) => (
            <Reveal key={s.stage} delay={i * 0.1}>
              <div className="group h-full rounded-3xl bg-card border border-border p-7 hover:border-primary/40 hover:shadow-soft transition flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-primary-foreground group-hover:scale-110 transition">
                    <s.Icon className="h-7 w-7" />
                  </span>
                  <span className="text-xs font-semibold rounded-full bg-gold/15 text-foreground border border-gold/30 px-3 py-1">
                    {s.grades}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-foreground">{s.stage}</h3>
                <div className="mt-1 text-sm font-semibold text-gold">{s.highlight}</div>
                <ul className="mt-5 space-y-3 flex-1">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-3xl gradient-primary text-primary-foreground p-7 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-bold">State Board • English Medium</h3>
              <p className="mt-1 text-sm text-white/80">School Code (UDISE): 36221292081 • Established 1980</p>
            </div>
            <div className="relative grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-white/10 backdrop-blur px-6 py-4">
                <div className="text-3xl font-display font-bold text-gold">100%</div>
                <div className="text-xs text-white/80 mt-1">SSC Results</div>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur px-6 py-4">
                <div className="text-3xl font-display font-bold text-gold">46+</div>
                <div className="text-xs text-white/80 mt-1">Years</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
