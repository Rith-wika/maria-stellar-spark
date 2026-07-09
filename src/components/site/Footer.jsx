import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/school-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="St. Maria High School logo"
              width={44}
              height={44}
              loading="lazy"
              className="h-11 w-11 rounded-full object-cover bg-white"
            />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold">St. Maria High School</div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-white/70">Excellence in Education</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/75 leading-relaxed">
            Shaping young minds with knowledge, discipline, and values of academic
            excellence and holistic development since 1980.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/academics", label: "Academics" },
              { to: "/admissions", label: "Admissions" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> <a href="tel:9704617316" className="hover:text-gold">+91 97046 17316</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> <a href="mailto:thejasvimedico@gmail.com" className="hover:text-gold break-all">thejasvimedico@gmail.com</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> <span>18-8-412/A, Lalitha Bagh, Uppuguda, Hyderabad</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Admissions Open</h4>
          <p className="text-sm text-white/80 leading-relaxed">
            Academic Year <span className="text-gold font-semibold">2026-27</span>. Secure your child's future today.
          </p>
          <Link
            to="/admissions"
            className="mt-4 inline-flex items-center rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© 2026 St. Maria High School. All Rights Reserved.</p>
          <p>Established 1980 • State Board • English Medium • School Code 36221292081</p>
        </div>
      </div>
    </footer>
  );
}
