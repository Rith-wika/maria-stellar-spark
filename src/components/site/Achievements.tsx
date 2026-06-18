import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Trophy, Award, Users, Sparkles } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
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
  { Icon: Trophy, value: 100, suffix: "%", label: "SSC Results" },
  { Icon: Award, value: 45, suffix: "+", label: "Years of Excellence" },
  { Icon: Users, value: 500, suffix: "+", label: "Proud Alumni" },
  { Icon: Sparkles, value: 30, suffix: "+", label: "Expert Teachers" },
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
            Numbers that speak for themselves
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
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
      </div>
    </section>
  );
}
