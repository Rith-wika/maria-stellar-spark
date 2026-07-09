import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Trophy, Award, BookOpen, ShieldCheck } from "lucide-react";
import results2526 from "@/assets/results-2025-26.jpg";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { Icon: Trophy, value: 100, suffix: "%", label: "SSC Results Every Year" },
  { Icon: Award, value: 46, suffix: "+", label: "Years of Excellence" },
];

export function Achievements() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden gradient-primary text-primary-foreground">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase bg-white/15 rounded-full px-3 py-1">
            Our Achievements
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            A record we're proud of
          </h2>
          <p className="mt-4 text-white/80">
            Consistent academic results and a distinctive strength in values education.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl bg-white/10 backdrop-blur border border-white/15 p-6 lg:p-7 text-center"
            >
              <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-gold text-gold-foreground">
                <s.Icon className="h-7 w-7" />
              </span>
              <div className="mt-5 text-4xl lg:text-5xl font-display font-bold">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-white/80">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl bg-white/10 backdrop-blur border border-white/15 p-6 flex items-start gap-4"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-gold-foreground">
              <BookOpen className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-bold">Values Education</h3>
              <p className="mt-1 text-sm text-white/80">
                Our students excel in Bhagavad Gita learning and values education.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="rounded-3xl bg-white/10 backdrop-blur border border-white/15 p-6 flex items-start gap-4"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold text-gold-foreground">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-bold">Trusted Since 1980</h3>
              <p className="mt-1 text-sm text-white/80">
                Generations of families have trusted us with their children's education.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden border border-white/20 shadow-glow">
            <img
              src={results2526}
              alt="St. Maria High School — 100% SSC results 2025-26, all achievers"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-center text-sm text-white/70">
            Our SSC achievers, 2025-26 — 100% results once again.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
