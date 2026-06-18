import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Upload, ShieldCheck, CheckCircle2, IdCard, FileBadge, Award, ImageIcon, Send } from "lucide-react";
import { SectionHeader, Reveal } from "./Section";
import { toast } from "sonner";
import { z } from "zod";

const steps = [
  { Icon: FileText, title: "Fill Application", desc: "Submit the admission inquiry form online." },
  { Icon: Upload, title: "Submit Documents", desc: "Provide the required documents for review." },
  { Icon: ShieldCheck, title: "Verification", desc: "Our team verifies the documents shared." },
  { Icon: CheckCircle2, title: "Confirmation", desc: "Receive admission confirmation and join us!" },
];

const docs = [
  { Icon: IdCard, label: "Aadhaar Card" },
  { Icon: FileBadge, label: "Transfer Certificate" },
  { Icon: Award, label: "Previous Mark Sheets" },
  { Icon: ImageIcon, label: "Passport Size Photos" },
];

const schema = z.object({
  student: z.string().trim().min(2, "Enter student name").max(80),
  parent: z.string().trim().min(2, "Enter parent name").max(80),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile"),
  className: z.string().trim().min(1, "Select a class").max(30),
  message: z.string().trim().max(500).optional(),
});

export function Admissions() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      student: fd.get("student"),
      parent: fd.get("parent"),
      mobile: fd.get("mobile"),
      className: fd.get("className"),
      message: fd.get("message") || "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! Our team will reach out shortly.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl gradient-primary text-primary-foreground p-8 lg:p-12 relative overflow-hidden mb-14"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.22em] uppercase bg-white/15 rounded-full px-3 py-1">
                Admissions Open
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
                Academic Year <span className="text-gold">2026-27</span>
              </h2>
              <p className="mt-3 text-white/85 max-w-xl">
                Limited seats available. Begin your child's journey of excellence today.
              </p>
            </div>
            <a
              href="#admission-form"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Apply Now
            </a>
          </div>
        </motion.div>

        <SectionHeader
          eyebrow="Admission Process"
          title={<>A simple, <span className="text-gradient-primary">4-step</span> process</>}
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl bg-card border border-border p-7 text-center hover:border-primary/40 transition">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full gradient-gold text-gold-foreground text-sm font-bold">
                  {i + 1}
                </span>
                <span className="mt-3 inline-grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-primary-foreground">
                  <s.Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full rounded-3xl bg-surface border border-border p-7 lg:p-9">
              <h3 className="font-display text-2xl font-bold text-foreground">Required Documents</h3>
              <p className="mt-2 text-sm text-muted-foreground">Please keep these ready before submitting your application.</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {docs.map((d) => (
                  <li key={d.label} className="flex items-center gap-3 rounded-xl bg-card border border-border p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                      <d.Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{d.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              id="admission-form"
              onSubmit={onSubmit}
              className="rounded-3xl bg-card border border-border p-7 lg:p-9 shadow-soft"
            >
              <h3 className="font-display text-2xl font-bold text-foreground">Admission Inquiry</h3>
              <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field name="student" label="Student Name" />
                <Field name="parent" label="Parent Name" />
                <Field name="mobile" label="Mobile Number" type="tel" inputMode="numeric" />
                <Field name="className" label="Class Applying For" placeholder="e.g. Class 6" />
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
                  placeholder="Any specific question?"
                />
              </div>
              <button
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft disabled:opacity-60"
              >
                {loading ? "Sending..." : (<>Submit Inquiry <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, inputMode }: {
  name: string; label: string; type?: string; placeholder?: string; inputMode?: "numeric" | "text";
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        maxLength={80}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
      />
    </div>
  );
}
