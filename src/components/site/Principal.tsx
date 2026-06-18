import { Quote, Award } from "lucide-react";
import { Reveal } from "./Section";
import principalImg from "@/assets/principal.jpg";

export function Principal() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-5 gap-10 items-center">
        <Reveal>
          <div className="lg:col-span-2 relative">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-soft">
              <img
                src={principalImg}
                alt="Principal of St. Maria High School"
                width={800}
                height={900}
                loading="lazy"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:-right-5 rounded-2xl gradient-gold text-gold-foreground px-5 py-3 shadow-soft flex items-center gap-2">
              <Award className="h-5 w-5" />
              <div className="leading-tight">
                <div className="text-xs font-medium opacity-80">Achievement</div>
                <div className="text-sm font-bold">100% SSC Results</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="lg:col-span-3">
            <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-primary bg-primary/10 rounded-full px-3 py-1">
              Principal's Message
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              A word from our <span className="text-gradient-primary">Leadership</span>
            </h2>

            <div className="relative mt-6 rounded-3xl bg-card border border-border p-7 lg:p-9 shadow-soft">
              <Quote className="absolute -top-4 left-7 h-10 w-10 text-gold rotate-180" />
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                "At St. Maria High School, we believe every child carries a unique spark.
                Our mission is to nurture that spark into a flame of knowledge, character,
                and confidence. With dedicated teachers and a values-driven environment,
                we are proud to have achieved 100% SSC results year after year."
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
