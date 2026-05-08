import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";
import { SCHOOL } from "@/lib/school";

export function Footer() {
  return (
    <footer className="mt-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-royal" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative text-white">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-14 w-14 rounded-full ring-2 ring-[color:var(--gold)]" />
              <div>
                <div className="font-display font-bold text-lg">{SCHOOL.name}</div>
                <div className="text-xs uppercase tracking-widest text-gradient-gold">{SCHOOL.location}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/75 leading-relaxed">
              Building bright futures since {SCHOOL.established}. English-medium education
              from Nursery through +2 in the heart of Hafeezpet, Hyderabad.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social"
                  className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gradient-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                ["/about", "About Us"],
                ["/academics", "Academics"],
                ["/facilities", "Facilities"],
                ["/gallery", "Gallery"],
              ].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-[color:var(--gold)] transition">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gradient-gold">Admissions</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/admissions" className="hover:text-[color:var(--gold)]">How to Apply</Link></li>
              <li><Link to="/admissions" className="hover:text-[color:var(--gold)]">Required Documents</Link></li>
              <li><Link to="/academics" className="hover:text-[color:var(--gold)]">Programs Offered</Link></li>
              <li><Link to="/contact" className="hover:text-[color:var(--gold)]">Schedule a Visit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gradient-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-[color:var(--gold)] shrink-0" /><span>{SCHOOL.address}</span></li>
              <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-[color:var(--gold)] shrink-0" />
                <span>
                  <a href={`tel:${SCHOOL.phones[0]}`} className="hover:text-[color:var(--gold)]">{SCHOOL.phones[0]}</a>
                  {" / "}
                  <a href={`tel:${SCHOOL.phones[1]}`} className="hover:text-[color:var(--gold)]">{SCHOOL.phones[1]}</a>
                </span>
              </li>
              <li className="flex gap-3"><Mail className="size-4 mt-0.5 text-[color:var(--gold)] shrink-0" /><a href={`mailto:${SCHOOL.email}`} className="hover:text-[color:var(--gold)]">{SCHOOL.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
            <p>© {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</p>
            <p>Knowledge is Power · Hafeez Pet, Hyderabad</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
