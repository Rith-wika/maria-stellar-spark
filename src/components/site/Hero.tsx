import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Trophy, Users, Award } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-24">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-success/15 blur-3xl" />
      </div>

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gold/15 text-gold-foreground px-4 py-1.5 text-xs sm:text-sm font-semibold"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            Admissions Open 2026-27
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05]"
          >
            Education with{" "}
            <span className="text-gradient-primary">Excellence</span>{" "}
            and Integrity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Nurturing young minds since 1980 through quality education, discipline,
            and holistic development at the heart of Hyderabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/admissions"
              className="group inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-95 transition"
            >
              Enroll Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition"
            >
              Explore Campus
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { v: "45+", l: "Years" },
              { v: "100%", l: "SSC Results" },
              { v: "500+", l: "Alumni" },
              { v: "30+", l: "Faculty" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-background/60 backdrop-blur border border-border p-4">
                <div className="text-2xl sm:text-3xl font-display font-bold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft ring-1 ring-border">
            <img
              src={heroImg}
              alt="St. Maria High School campus with students"
              width={1600}
              height={1100}
              className="h-full w-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/30 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 sm:-left-8 top-10 rounded-2xl bg-background shadow-soft border border-border p-4 flex items-center gap-3 max-w-[200px]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-gold text-gold-foreground">
              <Trophy className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-bold text-foreground">100% Results</div>
              <div className="text-[11px] text-muted-foreground">SSC Every Year</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-2 sm:-right-6 bottom-10 rounded-2xl bg-background shadow-soft border border-border p-4 flex items-center gap-3 max-w-[220px]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-success/15 text-success">
              <Users className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-bold text-foreground">Expert Faculty</div>
              <div className="text-[11px] text-muted-foreground">Caring & Experienced</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            className="absolute right-6 -top-4 rounded-2xl gradient-primary text-primary-foreground shadow-soft p-3 flex items-center gap-2"
          >
            <Award className="h-5 w-5 text-gold" />
            <span className="text-xs font-semibold">Since 1980</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
