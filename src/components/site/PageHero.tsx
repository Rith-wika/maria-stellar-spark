import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { BannerDoodles } from "./Doodles";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-40 pb-14 lg:pb-20 bg-surface">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {image ? (
          <>
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/90 via-primary-deep/75 to-primary-deep/90" />
          </>
        ) : (
          <>
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
          </>
        )}
      </div>
      {image && <BannerDoodles />}
      <div className="container-px mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-block text-xs font-bold tracking-[0.22em] uppercase rounded-full px-4 py-1.5 -rotate-2 border-2 border-dashed ${
            image ? "text-gold border-gold/70 bg-white/10 backdrop-blur-sm" : "text-primary border-primary/40 bg-primary/10"
          }`}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold ${
            image ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mt-5 text-base sm:text-lg max-w-2xl mx-auto ${
              image ? "text-white/80" : "text-muted-foreground"
            }`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
