import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
            <GraduationCap className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base sm:text-lg font-bold text-foreground">
              St. Maria <span className="text-primary">High School</span>
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-muted-foreground">
              Excellence in Education
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="px-3 py-2 text-sm font-medium text-foreground/80 rounded-lg hover:bg-secondary hover:text-primary transition"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/admissions"
            className="hidden sm:inline-flex items-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-95 transition"
          >
            Enroll Today
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-background"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <ul className="container-px mx-auto max-w-7xl py-3 flex flex-col">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-sm font-medium rounded-lg hover:bg-secondary"
                    activeProps={{ className: "text-primary bg-secondary" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/admissions"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Enroll Today
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
