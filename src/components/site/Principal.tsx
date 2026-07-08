import { Quote, Award } from "lucide-react";
import { Reveal } from "./Section";
import principalImg from "@/assets/principal-madam.jpg";

export function Principal() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-5 gap-10 items-center">
        <Reveal className="lg:col-span-2">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden sticker -rotate-1">
              <img
                src={principalImg}
                alt="Principal of St. Maria High School"
                width={665}
                height={1019}
                loading="lazy"
                className="w-full h-auto aspect-[4/5] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:-right-5 rounded-2xl gradient-gold text-gold-foreground px-5 py-3 shadow-soft flex items-center gap-2">
              <Award className="h-5 w-5" />
              <div className="leading-tight">
                <div className="text-xs font-medium opacity-80">Achievement</div>
                <div className="text-sm font-bold">100% SSC Results Every Year</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-primary bg-primary/10 border-2 border-dashed border-primary/40 rounded-full px-4 py-1.5 -rotate-2">
              Principal's Message
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              A word from our <span className="squiggle-gold"><span className="text-gradient-primary">Leadership</span></span>
            </h2>

            <div className="relative mt-6 rounded-3xl bg-card border border-border p-7 lg:p-9 shadow-soft">
              <Quote className="absolute -top-4 left-7 h-10 w-10 text-gold rotate-180" />
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                "Dear students, parents, and well-wishers — it gives me immense pleasure
                to welcome you to St. Maria High School. Our school is committed to
                providing quality education that blends academic excellence with strong
                moral values and character development. At our school, every child is
                encouraged to discover their potential, develop critical thinking skills,
                and cultivate lifelong potential."
              </p>
              <div className="mt-6 flex items-center gap-4 pt-5 border-t border-border">
                <div>
                  <div className="font-bold text-foreground">Lalitha Madam &amp; Dr. Thejasvi</div>
                  <div className="text-sm text-muted-foreground">Principal &amp; Correspondent</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
