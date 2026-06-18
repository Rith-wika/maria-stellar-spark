import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { SectionHeader, Reveal } from "./Section";
import { toast } from "sonner";
import { z } from "zod";
import { useState } from "react";

const cards = [
  { Icon: Phone, title: "Call Us", value: "+91 97046 17316", href: "tel:9704617316" },
  { Icon: MessageCircle, title: "WhatsApp", value: "+91 97046 17316", href: "https://wa.me/919704617316" },
  { Icon: Mail, title: "Email Us", value: "thejasvimedico@gmail.com", href: "mailto:thejasvimedico@gmail.com" },
  { Icon: MapPin, title: "Visit Us", value: "Lalitha Bagh, Uppuguda, Hyderabad", href: "#map" },
];

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  message: z.string().trim().min(5, "Message is too short").max(800),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll reply soon.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Get in Touch"
          title={<>We'd love to <span className="text-gradient-primary">hear from you</span></>}
          description="Reach out for admissions, campus visits, or any general inquiry."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <a
                href={c.href}
                className="group h-full block rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:-translate-y-1 transition"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground group-hover:scale-110 transition">
                  <c.Icon className="h-6 w-6" />
                </span>
                <div className="mt-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground">{c.title}</div>
                <div className="mt-1 text-sm font-bold text-foreground break-words">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="lg:col-span-2 rounded-3xl bg-card border border-border p-7 lg:p-9 shadow-soft"
            >
              <h3 className="font-display text-2xl font-bold text-foreground">Send a Message</h3>
              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Your Name</label>
                  <input name="name" maxLength={80} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                  <input name="email" type="email" maxLength={120} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
                  <textarea name="message" rows={5} maxLength={800} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition" />
                </div>
              </div>
              <button disabled={loading} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft disabled:opacity-60">
                {loading ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="map" className="lg:col-span-3 rounded-3xl overflow-hidden border border-border shadow-soft h-full min-h-[420px]">
              <iframe
                title="St. Maria High School location"
                src="https://www.google.com/maps?q=Lalitha+Bagh,+Uppuguda,+Hyderabad&output=embed"
                className="w-full h-full min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
