import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeader } from "./Section";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Item = { src: string; cat: string; title: string; w: number; h: number };

const items: Item[] = [
  { src: g1, cat: "Events", title: "Annual Day Certificates", w: 800, h: 800 },
  { src: g2, cat: "Classrooms", title: "Active Learning", w: 800, h: 600 },
  { src: g3, cat: "Events", title: "Cultural Performance", w: 800, h: 1000 },
  { src: g4, cat: "Sports", title: "Sports Day", w: 800, h: 600 },
  { src: g5, cat: "Campus", title: "School Entrance", w: 800, h: 700 },
  { src: g6, cat: "Achievements", title: "Award Ceremony", w: 800, h: 900 },
];

const cats = ["All", "Campus", "Classrooms", "Events", "Sports", "Achievements"];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Item | null>(null);
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title={<>Moments from <span className="text-gradient-primary">Campus Life</span></>}
          description="A glimpse into events, classrooms, and milestones at St. Maria High School."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === c
                  ? "gradient-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((it, i) => (
            <motion.button
              key={it.src + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              onClick={() => setOpen(it)}
              className="mb-5 break-inside-avoid block w-full overflow-hidden rounded-2xl border border-border group relative"
            >
              <img
                src={it.src}
                alt={it.title}
                width={it.w}
                height={it.h}
                loading="lazy"
                className="w-full h-auto group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <div className="text-left text-primary-foreground">
                  <div className="text-xs uppercase tracking-widest text-gold">{it.cat}</div>
                  <div className="font-bold">{it.title}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-primary-deep/90 backdrop-blur grid place-items-center p-4"
          >
            <button
              aria-label="Close"
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
              onClick={() => setOpen(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={open.src}
              alt={open.title}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
