import { BookOpen, HeartHandshake, Lightbulb, Users, GraduationCap, Gem } from "lucide-react";
import { Reveal } from "./Section";
import schoolImg from "@/assets/activity-science.jpg";

const coreValues = [
  { Icon: BookOpen, label: "Knowledge" },
  { Icon: HeartHandshake, label: "Character" },
  { Icon: Gem, label: "Excellence" },
];

const features = [
  { Icon: GraduationCap, title: "Digital Classrooms", desc: "A dynamic learning environment powered by digital classrooms and modern teaching tools." },
  { Icon: Users, title: "Experienced Faculty", desc: "Dedicated, experienced teachers with a student-centred approach for every child." },
  { Icon: Lightbulb, title: "Creativity & Critical Thinking", desc: "Learning that encourages creativity, critical thinking, and a lifelong passion for learning." },
  { Icon: HeartHandshake, title: "Values & Discipline", desc: "Good habits and strong values nurtured daily — including reading the Bhagavad Gita every day." },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-soft ring-1 ring-border">
                <img
                  src={schoolImg}
                  alt="St. Maria students presenting a science activity project"
                  width={899}
                  height={1599}
                  loading="lazy"
                  className="w-full h-full object-cover object-top aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 sm:-right-6 rounded-2xl gradient-primary text-primary-foreground shadow-soft px-6 py-5 text-center">
                <div className="text-4xl font-display font-bold text-gold">46+</div>
                <div className="text-xs mt-1 text-white/85">Years of Quality<br />Education</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-primary bg-primary/10 rounded-full px-3 py-1">
                About Us
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                A Beacon of <span className="text-gradient-primary">Quality Education</span> for Over 46 Years
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Welcome to St. Maria High School. We provide a dynamic learning environment
                with digital classrooms, experienced faculty, and a student-centred approach
                that encourages creativity, critical thinking, and a lifelong passion for learning.
              </p>

              <div className="mt-7">
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">Our Core Values</div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {coreValues.map((v) => (
                    <span
                      key={v.label}
                      className="inline-flex items-center gap-2 rounded-full bg-gold/15 text-foreground px-4 py-2 text-sm font-semibold border border-gold/30"
                    >
                      <v.Icon className="h-4 w-4 text-gold" />
                      {v.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

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
