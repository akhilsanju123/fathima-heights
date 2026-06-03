import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useRouterState, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as ChevronDown, P as Phone, X, M as Menu, a as MapPin, b as Mail, c as MessageCircle, A as ArrowUp } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-BSMpVXb7.css";
const logo = "/assets/logo-DT_n9zXs.webp";
const url$3 = "/__l5e/assets-v1/a801c4ff-542f-4a83-af74-50af4506591f/marthanda-nagar.jpg";
const campusData = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/6013b076-3040-4fe1-b27c-5fcf86a55b25/aditya-nagar-branch.jpg";
const adityaImg = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/0cb1f4f5-4fc2-4621-819b-e54980b28be4/prem-nagar-branch.webp";
const premImg = {
  url: url$1
};
const url = "/__l5e/assets-v1/93c62c4d-d8fa-4fa4-a5ff-281a7d5b00bc/kollur-branch.jpg";
const kollurImg = {
  url
};
const SCHOOL = {
  name: "Holy Fathima High School",
  shortName: "Holy Fathima",
  location: "Hafeez Pet",
  established: 1989,
  phones: ["9391668092", "8121731765", "9391837245"],
  email: "holyfathimahighschool1992@gmail.com",
  whatsapp: "919391668092",
  facebook: "https://www.facebook.com/profile.php?id=61560533938458",
  instagram: "https://www.instagram.com/holyfathimahighschool.mn/"
};
const BRANCHES = [
  {
    id: "marthanda-nagar",
    name: "Main Branch — Marthanda Nagar",
    address: "H.No. 4-161, Near Rahamaniya Masjid, Marthanda Nagar, Hafeezpet, Hyderabad",
    phones: ["9391668092"],
    image: campusData.url,
    mapEmbed: "https://www.google.com/maps?q=Marthanda+Nagar,+Hafeezpet,+Hyderabad&output=embed"
  },
  {
    id: "aditya-nagar",
    name: "Aditya Nagar Branch",
    address: "#3-450, Street No. 8, Near Rashideen Masjid, Aditya Nagar, Hyderabad",
    phones: ["9391668092"],
    image: adityaImg.url,
    mapEmbed: "https://www.google.com/maps?q=Aditya+Nagar,+Hafeezpet,+Hyderabad&output=embed"
  },
  {
    id: "prem-nagar",
    name: "Prem Nagar Branch",
    address: "Beside Seeyounu Church, Prem Nagar, Hyderabad",
    phones: ["9391668092"],
    image: premImg.url,
    mapEmbed: "https://www.google.com/maps?q=Prem+Nagar,+Hafeezpet,+Hyderabad&output=embed"
  },
  {
    id: "indra-reddy-nagar",
    name: "Indra Reddy Nagar Branch",
    address: "Phase-I, KCR Nagar, Kollur, Rangareddy Dist",
    phones: ["9391668092", "7416315599"],
    image: kollurImg.url,
    mapEmbed: "https://www.google.com/maps?q=Indra+Reddy+Nagar,+KCR+Nagar,+Kollur&output=embed"
  }
];
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/facilities", label: "Facilities" },
  { to: "/branches", label: "Branches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `mx-auto max-w-7xl px-4 transition-all duration-300 ${scrolled ? "" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex items-center justify-between rounded-2xl px-4 py-2 transition-all duration-300 ${scrolled ? "glass shadow-glow" : "bg-white/30 backdrop-blur-md border border-white/40"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: logo,
                        alt: "Holy Fathima High School logo",
                        className: "h-12 w-12 rounded-full object-cover ring-2 ring-[color:var(--gold)] transition-transform group-hover:scale-105"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block leading-tight", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold text-[color:var(--navy)]", children: SCHOOL.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.18em] text-[color:var(--royal)]/70", children: [
                        SCHOOL.location,
                        " · Est. ",
                        SCHOOL.established
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
                    links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: l.to,
                        activeOptions: { exact: l.to === "/" },
                        activeProps: { className: "text-[color:var(--royal)] bg-[color:var(--gold)]/15" },
                        className: "px-3.5 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-[color:var(--royal)] hover:bg-[color:var(--gold)]/10 transition-colors",
                        children: l.label
                      },
                      l.to
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/admissions",
                        className: "ml-2 inline-flex items-center gap-2 rounded-full gradient-royal text-white px-4 py-2 text-sm font-semibold shadow-glow hover:shadow-gold transition-all hover:-translate-y-0.5",
                        children: [
                          "Admissions Open",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `tel:${SCHOOL.phones[0]}`,
                        className: "rounded-full bg-[color:var(--gold)]/20 p-2 text-[color:var(--royal)]",
                        "aria-label": "Call school",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setOpen((v) => !v),
                        className: "rounded-full bg-[color:var(--royal)] text-white p-2",
                        "aria-label": "Toggle menu",
                        children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
                      }
                    )
                  ] })
                ]
              }
            ),
            open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-2 glass rounded-2xl p-3 animate-in fade-in slide-in-from-top-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  activeOptions: { exact: l.to === "/" },
                  activeProps: { className: "text-[color:var(--royal)] bg-[color:var(--gold)]/15" },
                  className: "px-4 py-3 rounded-xl text-sm font-medium hover:bg-[color:var(--gold)]/10",
                  children: l.label
                },
                l.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/admissions",
                  onClick: () => setOpen(false),
                  className: "mt-2 text-center rounded-xl gradient-royal text-white px-4 py-3 text-sm font-semibold",
                  children: "Admissions Open"
                }
              )
            ] }) })
          ]
        }
      )
    }
  );
}
const Facebook = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...p, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2.1-2H17V2.2C16.7 2.1 15.6 2 14.4 2 11.9 2 10 3.5 10 6.7V10H7v4h3v8h3z" }) });
const Instagram = (p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...p, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor" })
] });
const Youtube = (p) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", ...p, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23 7.5c-.3-1.7-1.2-2.5-2.8-2.7C18 4.5 12 4.5 12 4.5s-6 0-8.2.3C2.2 5 1.3 5.8 1 7.5.7 9.3.7 12 .7 12s0 2.7.3 4.5c.3 1.7 1.2 2.5 2.8 2.7C6 19.5 12 19.5 12 19.5s6 0 8.2-.3c1.6-.2 2.5-1 2.8-2.7.3-1.8.3-4.5.3-4.5s0-2.7-.3-4.5zM10 15.5v-7l6 3.5-6 3.5z" }) });
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-royal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 pt-16 pb-8 grid gap-10 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "h-14 w-14 rounded-full ring-2 ring-[color:var(--gold)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg", children: SCHOOL.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-gradient-gold", children: SCHOOL.location })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-white/75 leading-relaxed", children: [
            "Building bright futures since ",
            SCHOOL.established,
            ". English-medium education from Nursery through Class 10 in the heart of Hafeezpet, Hyderabad."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: SCHOOL.facebook, target: "_blank", rel: "noreferrer", "aria-label": "Facebook", className: "size-9 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: SCHOOL.instagram, target: "_blank", rel: "noreferrer", "aria-label": "Instagram", className: "size-9 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "YouTube", className: "size-9 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "size-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-4 text-gradient-gold", children: "Quick Links" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-white/80", children: [
            ["/about", "About Us"],
            ["/academics", "Academics"],
            ["/facilities", "Facilities"],
            ["/branches", "Branches"],
            ["/gallery", "Gallery"]
          ].map(([to, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "hover:text-[color:var(--gold)] transition", children: label }) }, to)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-4 text-gradient-gold", children: "Admissions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", className: "hover:text-[color:var(--gold)]", children: "How to Apply" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", className: "hover:text-[color:var(--gold)]", children: "Required Documents" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/academics", className: "hover:text-[color:var(--gold)]", children: "Programs Offered" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-[color:var(--gold)]", children: "Schedule a Visit" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg mb-4 text-gradient-gold", children: "Our Campuses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm text-white/80", children: [
            BRANCHES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: b.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 mt-0.5 text-[color:var(--gold)] shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b.address })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 mt-0.5 text-[color:var(--gold)] shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b.phones.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  i > 0 && " · ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${p}`, className: "hover:text-[color:var(--gold)]", children: p })
                ] }, p)) })
              ] })
            ] }, b.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 pt-2 border-t border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 mt-0.5 text-[color:var(--gold)] shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${SCHOOL.email}`, className: "hover:text-[color:var(--gold)]", children: SCHOOL.email })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          SCHOOL.name,
          ". All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Knowledge is Power · Hafeez Pet, Hyderabad" })
      ] }) })
    ] })
  ] });
}
function FloatingActions() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-5 right-5 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: `https://wa.me/${SCHOOL.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20about%20admissions`,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "WhatsApp",
        className: "size-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-glow hover:scale-110 transition-transform animate-float",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6" })
      }
    ),
    show && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "Back to top",
        className: "size-12 grid place-items-center rounded-full gradient-royal text-white shadow-glow hover:-translate-y-1 transition-transform",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "size-5" })
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl font-bold text-[color:var(--royal)]", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-full gradient-royal px-6 py-2.5 text-sm font-semibold text-white shadow-glow", children: "Back to Home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-full gradient-royal px-5 py-2 text-sm font-semibold text-white", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border border-input bg-background px-5 py-2 text-sm font-semibold", children: "Go home" })
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Holy Fathima High School, Hafeez Pet — Building Bright Futures Since 1989" },
      { name: "description", content: "Premium English-medium school in Hafeezpet, Hyderabad offering Nursery to Class 10 — CBSE primary and SSC high school with experienced faculty, modern facilities and a safe campus." },
      { property: "og:title", content: "Holy Fathima High School, Hafeez Pet" },
      { property: "og:description", content: "English-medium education from Nursery to Class 10 in Hafeezpet, Hyderabad. Building bright futures since 1989." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingActions, {})
  ] });
}
const campus$1 = campusData.url;
const $$splitComponentImporter$7 = () => import("./gallery-q1d2OEUL.mjs");
const Route$7 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Campus Life at Holy Fathima High School"
    }, {
      name: "description",
      content: "A glimpse into life at Holy Fathima High School, Hafeezpet — classrooms, campus, events and student moments."
    }, {
      property: "og:title",
      content: "Gallery — Holy Fathima High School"
    }, {
      property: "og:description",
      content: "Photos of our campus, classrooms and student life in Hafeezpet, Hyderabad."
    }, {
      property: "og:image",
      content: campus$1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./facilities-CGrt24jP.mjs");
const Route$6 = createFileRoute("/facilities")({
  head: () => ({
    meta: [{
      title: "Facilities — Smart Classrooms, Labs, Library & Sports | Holy Fathima High School"
    }, {
      name: "description",
      content: "Modern facilities at Holy Fathima High School — smart classrooms, science & computer labs, library, sports, transport and CCTV-monitored safe campus."
    }, {
      property: "og:title",
      content: "Facilities at Holy Fathima High School"
    }, {
      property: "og:description",
      content: "Everything a modern learner needs — labs, library, sports, transport and a safe campus in Hafeezpet, Hyderabad."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-DQdaIMi0.mjs");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — Holy Fathima High School, Hafeez Pet"
    }, {
      name: "description",
      content: "Get in touch with Holy Fathima High School. Address: 4-1061/84, New Hafeezpet, Hyderabad. Phone: 9391668092 / 8121731765 / 9391837245."
    }, {
      property: "og:title",
      content: "Contact Holy Fathima High School"
    }, {
      property: "og:description",
      content: "Reach our admissions team in Hafeezpet, Hyderabad — call, email or visit our campus."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./branches-DEVZREeq.mjs");
const Route$4 = createFileRoute("/branches")({
  head: () => ({
    meta: [{
      title: "Our Branches — Holy Fathima High School"
    }, {
      name: "description",
      content: "Visit any of our four campuses — Marthanda Nagar (Main), Aditya Nagar, Prem Nagar and Indra Reddy Nagar (Kollur)."
    }, {
      property: "og:title",
      content: "Branches — Holy Fathima High School"
    }, {
      property: "og:description",
      content: "Four campuses serving Hafeezpet, Hyderabad and Kollur."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admissions-DHDirlPV.mjs");
const Route$3 = createFileRoute("/admissions")({
  head: () => ({
    meta: [{
      title: "Admissions Open 2026–27 — Holy Fathima High School, Hafeez Pet"
    }, {
      name: "description",
      content: "Admissions open at Holy Fathima High School, Hafeezpet. Apply for Nursery, Preschool, Kindergarten, CBSE Primary (1–5) or SSC High School (6–10)."
    }, {
      property: "og:title",
      content: "Admissions — Holy Fathima High School"
    }, {
      property: "og:description",
      content: "Secure your child's seat for the upcoming academic year. Limited seats across all classes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./academics-BuB46McV.mjs");
const Route$2 = createFileRoute("/academics")({
  head: () => ({
    meta: [{
      title: "Academics — Programs from Nursery to 10th | Holy Fathima High School"
    }, {
      name: "description",
      content: "Explore our English-medium academic programs at Holy Fathima High School, Hafeezpet — Nursery to 5th (CBSE), 6th to 10th (SSC), Abacus for 1st–5th and IIT Foundation for 5th–10th."
    }, {
      property: "og:title",
      content: "Academic Programs — Holy Fathima High School"
    }, {
      property: "og:description",
      content: "A complete educational journey from Nursery to Class 10 with CBSE primary, SSC high school, plus Abacus and IIT Foundation programs."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const campus = campusData.url;
const $$splitComponentImporter$1 = () => import("./about-DfPeL2gY.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Holy Fathima High School, Hafeez Pet"
    }, {
      name: "description",
      content: "Established in 1989, Holy Fathima High School is a trusted English-medium school in Hafeezpet, Hyderabad offering Nursery to Class 10 — CBSE primary and SSC high school."
    }, {
      property: "og:title",
      content: "About Holy Fathima High School"
    }, {
      property: "og:description",
      content: "A 20+ year legacy of academic excellence and character building in Hafeezpet, Hyderabad."
    }, {
      property: "og:image",
      content: campus
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-_8Xk2XLL.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Holy Fathima High School, Hafeez Pet — English-medium School in Hyderabad"
    }, {
      name: "description",
      content: "Premium English-medium school in Hafeezpet, Hyderabad. Nursery to Class 10 — CBSE primary, SSC high school, plus Abacus and IIT Foundation. Admissions open."
    }, {
      property: "og:title",
      content: "Holy Fathima High School, Hafeez Pet"
    }, {
      property: "og:description",
      content: "Building bright futures since 1989. English-medium education from Nursery to Class 10 in Hafeezpet, Hyderabad."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const GalleryRoute = Route$7.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$8
});
const FacilitiesRoute = Route$6.update({
  id: "/facilities",
  path: "/facilities",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const BranchesRoute = Route$4.update({
  id: "/branches",
  path: "/branches",
  getParentRoute: () => Route$8
});
const AdmissionsRoute = Route$3.update({
  id: "/admissions",
  path: "/admissions",
  getParentRoute: () => Route$8
});
const AcademicsRoute = Route$2.update({
  id: "/academics",
  path: "/academics",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AcademicsRoute,
  AdmissionsRoute,
  BranchesRoute,
  ContactRoute,
  FacilitiesRoute,
  GalleryRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BRANCHES as B,
  SCHOOL as S,
  campusData as a,
  campus as b,
  campus$1 as c,
  logo as l,
  router as r
};
