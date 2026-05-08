import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";
import { SCHOOL } from "@/lib/school";

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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2 transition-all duration-300 ${
            scrolled ? "glass shadow-glow" : "bg-white/30 backdrop-blur-md border border-white/40"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Holy Fathima High School logo"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-[color:var(--gold)] transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-base font-bold text-[color:var(--navy)]">
                {SCHOOL.name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--royal)]/70">
                {SCHOOL.location} · Est. {SCHOOL.established}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-[color:var(--royal)] bg-[color:var(--gold)]/15" }}
                className="px-3.5 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-[color:var(--royal)] hover:bg-[color:var(--gold)]/10 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="ml-2 inline-flex items-center gap-2 rounded-full gradient-royal text-white px-4 py-2 text-sm font-semibold shadow-glow hover:shadow-gold transition-all hover:-translate-y-0.5"
            >
              Admissions Open
              <ChevronDown className="size-4" />
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${SCHOOL.phones[0]}`}
              className="rounded-full bg-[color:var(--gold)]/20 p-2 text-[color:var(--royal)]"
              aria-label="Call school"
            >
              <Phone className="size-5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-full bg-[color:var(--royal)] text-white p-2"
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-[color:var(--royal)] bg-[color:var(--gold)]/15" }}
                  className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-[color:var(--gold)]/10"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-xl gradient-royal text-white px-4 py-3 text-sm font-semibold"
              >
                Admissions Open
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
