import { motion } from "framer-motion";
import { Star, Sun, Pencil, Heart, Sparkles, Rocket, BookOpen, Palette } from "lucide-react";

function Doodle({ Icon, className, duration, delay = 0 }) {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ y: [0, -12, 0], rotate: [-8, 8, -8] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute ${className}`}
    >
      <Icon className="h-full w-full" />
    </motion.span>
  );
}

/** Colorful floating school doodles for light backgrounds */
export function HeroDoodles() {
  return (
    <>
      <Doodle Icon={Star} className="left-[6%] top-24 h-8 w-8 text-gold fill-gold/60" duration={5} />
      <Doodle Icon={Pencil} className="right-[8%] top-32 h-9 w-9 text-flame" duration={6} delay={0.5} />
      <Doodle Icon={Sun} className="left-[42%] top-16 h-10 w-10 text-gold" duration={7} delay={1} />
      <Doodle Icon={Heart} className="left-[10%] bottom-24 h-7 w-7 text-flame fill-flame/50" duration={5.5} delay={0.8} />
      <Doodle Icon={Rocket} className="right-[16%] bottom-16 h-9 w-9 text-primary" duration={6.5} delay={0.3} />
      <Doodle Icon={Palette} className="right-[38%] bottom-8 h-8 w-8 text-success" duration={5.8} delay={1.4} />
    </>
  );
}

/** Light doodles for dark image hero banners */
export function BannerDoodles() {
  return (
    <>
      <Doodle Icon={Star} className="left-[8%] top-28 h-8 w-8 text-gold fill-gold/70" duration={5} />
      <Doodle Icon={Sparkles} className="right-[10%] top-36 h-8 w-8 text-white/80" duration={6} delay={0.6} />
      <Doodle Icon={BookOpen} className="left-[16%] bottom-10 h-8 w-8 text-white/70" duration={6.5} delay={1} />
      <Doodle Icon={Heart} className="right-[18%] bottom-14 h-7 w-7 text-flame fill-flame/60" duration={5.5} delay={0.3} />
    </>
  );
}
