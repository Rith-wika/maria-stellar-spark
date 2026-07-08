import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Trophy, BookOpen, Award, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/school-building.jpg";
import { HeroDoodles } from "./Doodles";

const stats = [
  { v: "46+", l: "Years of Excellence" },
  { v: "100%", l: "SSC Results Every Year" },
  { v: "State", l: "Board Affiliated" },
  { v: "English", l: "Medium of Instruction" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-24">
      {/* Background image + shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-dots opacity-60" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-success/15 blur-3xl" />
      </div>

      <HeroDoodles />

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gold/20 text-gold-foreground border-2 border-dashed border-gold px-4 py-1.5 text-xs sm:text-sm font-bold -rotate-1"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            Admissions Open — Enroll today to make your child a better human
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05]"
          >
            Education with{" "}
            <span className="squiggle"><span className="text-gradient-primary">Excellence</span></span>{" "}
            and <span className="text-flame squiggle-gold">Integrity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 text-lg sm:text-xl font-display font-semibold text-primary"
          >
            Where Learning Meets Values
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            St. Maria High School has been shaping young minds with knowledge,
            discipline, and values of academic excellence and holistic development
            since 1980 — nurturing confident, responsible, and future-ready students.
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
              Enroll Today to Learn More
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
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`rounded-2xl bg-background/70 backdrop-blur border-2 p-4 transition-transform hover:scale-105 hover:rotate-0 ${
                  i % 2 === 0 ? "-rotate-1 border-primary/25" : "rotate-1 border-gold/40"
                }`}
              >
                <div className="text-xl sm:text-2xl font-display font-bold text-primary">{s.v}</div>
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
          <div className="relative rounded-[2rem] overflow-hidden sticker rotate-1">
            <img
              src={heroImg}
              alt="St. Maria High School building, Uppuguda, Hyderabad"
              width={1084}
              height={1385}
              className="h-full w-full object-cover aspect-[4/3] lg:aspect-[5/4]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/30 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 sm:-left-8 top-10 rounded-2xl bg-background shadow-soft border border-border p-4 flex items-center gap-3 max-w-[210px]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-gold text-gold-foreground">
              <Trophy className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-bold text-foreground">100% SSC Results</div>
              <div className="text-[11px] text-muted-foreground">Every Single Year</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-2 sm:-right-6 bottom-10 rounded-2xl bg-background shadow-soft border border-border p-4 flex items-center gap-3 max-w-[230px]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-success/15 text-success">
              <BookOpen className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-bold text-foreground">Values Education</div>
              <div className="text-[11px] text-muted-foreground">Daily Bhagavad Gita Reading</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            className="absolute right-6 -top-4 rounded-2xl gradient-primary text-primary-foreground shadow-soft p-3 flex items-center gap-2"
          >
            <Award className="h-5 w-5 text-gold" />
            <span className="text-xs font-semibold">Since 1980 • 46+ Years</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, delay: 0.8 }}
            className="absolute left-8 -bottom-4 rounded-2xl bg-background shadow-soft border border-border px-4 py-2.5 flex items-center gap-2"
          >
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-foreground">Safe Campus • CCTV Secured</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
