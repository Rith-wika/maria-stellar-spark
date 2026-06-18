import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeader } from "./Section";

const reviews = [
  {
    name: "K. Laxmi",
    role: "Parent",
    text:
      "St. Maria High School provides excellent education and supports the overall development of children. The teachers are dedicated and help students build confidence, discipline, and knowledge.",
  },
  {
    name: "Ramesh Kumar",
    role: "Parent",
    text:
      "We are proud parents of a St. Maria student. The values, academics, and care the school provides are truly remarkable. Our child loves going to school every day.",
  },
  {
    name: "Sunitha R.",
    role: "Alumni Parent",
    text:
      "Both my children studied here. The 100% SSC results aren't a coincidence — it's the result of teachers who genuinely care for every student.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Parent Testimonials"
          title={<>Voices of <span className="text-gradient-primary">Trust</span></>}
        />

        <div className="mt-12 relative rounded-3xl bg-card border border-border shadow-soft p-8 sm:p-12 overflow-hidden">
          <Quote className="absolute top-6 right-8 h-20 w-20 text-primary/8" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-lg sm:text-xl text-foreground/85 leading-relaxed font-display italic">
                "{r.text}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full gradient-primary text-primary-foreground font-bold">
                  {r.name[0]}
                </span>
                <div>
                  <div className="font-bold text-foreground">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Show review ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-secondary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next"
                onClick={() => setI((p) => (p + 1) % reviews.length)}
                className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
