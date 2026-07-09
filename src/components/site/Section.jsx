import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-primary bg-primary/10 border-2 border-dashed border-primary/40 rounded-full px-4 py-1.5 -rotate-2">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      <svg
        aria-hidden="true"
        viewBox="0 0 120 10"
        className={`mt-3 h-2.5 w-28 text-gold ${align === "center" ? "mx-auto" : ""}`}
      >
        <path
          d="M2 6 Q 12 1, 22 6 T 42 6 T 62 6 T 82 6 T 102 6 T 118 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

/** Wavy divider between sections — flips to blend from/to the surface color */
export function WaveDivider({ flip = false, className = "" }) {
  return (
    <div aria-hidden="true" className={`dark overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="block h-8 w-full sm:h-14">
        <path
          d="M0 28 C 120 56, 240 0, 360 28 C 480 56, 600 0, 720 28 C 840 56, 960 0, 1080 28 C 1200 56, 1320 0, 1440 28 L 1440 56 L 0 56 Z"
          className="fill-surface"
        />
      </svg>
    </div>
  );
}

export function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
