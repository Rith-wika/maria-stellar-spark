import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./Section";

export function Testimonials() {
  return (
    <section className="dark py-20 lg:py-28 bg-surface text-foreground">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Parent Testimonials"
          title={<>Voices of <span className="text-gradient-primary">Trust</span></>}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-12 relative rounded-3xl bg-card border border-border shadow-soft p-8 sm:p-12 overflow-hidden text-center"
        >
          <Quote className="absolute top-6 right-8 h-20 w-20 text-primary/8" />
          <div className="flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-6 text-lg sm:text-2xl text-foreground/85 leading-relaxed font-display italic">
            "This school has provided excellent education and helped my child grow
            in confidence, discipline, and knowledge."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full gradient-primary text-primary-foreground font-bold">
              K
            </span>
            <div className="text-left">
              <div className="font-bold text-foreground">K. Laxmi</div>
              <div className="text-sm text-muted-foreground">Parent</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
