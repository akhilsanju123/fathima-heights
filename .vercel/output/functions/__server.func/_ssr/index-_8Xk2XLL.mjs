import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logo, a as campusData, S as SCHOOL } from "./router-CvHomHKt.mjs";
import { a as SITE_MEDIA } from "./site-media-Dv7sW16B.mjs";
import { S as SectionHeading } from "./SectionHeading-BNXu9iks.mjs";
import { C as Counter } from "./Counter-KpO1rLpB.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { o as Sparkles, q as ArrowRight, d as ChevronLeft, e as ChevronRight, r as Megaphone, H as HeartHandshake, i as Lightbulb, j as BookOpen, G as GraduationCap, p as Award, f as MonitorSmartphone, L as Laptop, F as FlaskConical, g as Library, V as Volleyball, h as Video, B as Bus, U as Users, S as ShieldCheck, s as Trophy, Q as Quote, l as Calendar } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const url = "/__l5e/assets-v1/30551fc3-3213-4cd4-88b2-1f273c136506/hero-banner.png";
const heroBannerData = {
  url
};
const slides = [
  {
    image: heroBannerData.url,
    eyebrow: "Welcome to Holy Fathima High School",
    title: "Building Bright Futures\nSince 1989",
    subtitle: "Premium English-medium education from Nursery to Class 10 — CBSE primary and SSC high school in the heart of Hafeezpet, Hyderabad."
  },
  {
    image: SITE_MEDIA.readingCircle,
    eyebrow: "Where Learning Comes Alive",
    title: "Inspiring Minds,\nShaping Tomorrow",
    subtitle: "Experienced faculty, modern classrooms, and a curriculum that nurtures curiosity and confidence."
  },
  {
    image: SITE_MEDIA.activityLearning,
    eyebrow: "Holistic Development",
    title: "Knowledge is Power.\nCharacter is Everything.",
    subtitle: "Academics, sports, arts and values — a complete educational journey for every child."
  }
];
function HeroSlider() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6e3);
    return () => clearInterval(t);
  }, []);
  const slide = slides[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 1.08 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.04 },
        transition: { duration: 1.2, ease: "easeOut" },
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: slide.image, alt: "", className: "h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[color:var(--navy)]/85 via-[color:var(--royal)]/70 to-[color:var(--navy)]/90" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_0,#0f1e4dcc_70%)]" })
        ]
      },
      i
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-[color:var(--royal)]/40 blur-3xl animate-float", style: { animationDelay: "1.5s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.img,
        {
          src: logo,
          alt: "",
          "aria-hidden": true,
          className: "absolute right-[6%] top-[18%] hidden lg:block h-40 w-40 rounded-full opacity-30 ring-2 ring-[color:var(--gold)]/40",
          animate: { rotate: [0, 6, -6, 0] },
          transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)] ring-1 ring-white/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5" }),
              " ",
              slide.eyebrow
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] whitespace-pre-line", children: slide.title.split("\n").map((line, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: idx === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: line }) : line }, idx)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed", children: slide.subtitle })
          ]
        },
        i
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4, duration: 0.6 },
          className: "mt-8 flex flex-wrap gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "group inline-flex items-center gap-2 rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 text-sm font-bold shadow-gold hover:-translate-y-0.5 transition-transform", children: [
              "Admissions Open",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/20 transition", children: "Contact Us" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setI((p) => (p - 1 + slides.length) % slides.length),
          "aria-label": "Previous",
          className: "size-10 grid place-items-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 text-white hover:bg-white/20",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: slides.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setI(idx),
          "aria-label": `Slide ${idx + 1}`,
          className: `h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-[color:var(--gold)]" : "w-4 bg-white/40"}`
        },
        idx
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setI((p) => (p + 1) % slides.length),
          "aria-label": "Next",
          className: "size-10 grid place-items-center rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 text-white hover:bg-white/20",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" })
        }
      )
    ] })
  ] });
}
const campus = campusData.url;
function AnnouncementTicker() {
  const items = [
    "Admissions open for academic year 2026-27",
    "Annual Sports Day celebrated with great enthusiasm",
    "Congratulations to our Class 10 toppers!",
    "New Smart Classrooms now live across all sections",
    "Parent-Teacher meeting scheduled for next Saturday"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden gradient-gold text-[color:var(--navy)] py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-12 marquee whitespace-nowrap font-semibold text-sm", children: [...items, ...items].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "size-4" }),
    " ",
    t
  ] }, i)) }) });
}
function AboutSection() {
  const stats = [
    { v: 22, suffix: "+", label: "Years of Excellence" },
    { v: 1500, suffix: "+", label: "Happy Students" },
    { v: 60, suffix: "+", label: "Qualified Teachers" },
    { v: 6, suffix: "", label: "Programs Offered" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 }, className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 gradient-gold rounded-3xl opacity-30 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid grid-cols-5 grid-rows-6 gap-3 h-[520px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: campus, alt: "School building", className: "col-span-3 row-span-4 rounded-3xl object-cover w-full h-full shadow-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: SITE_MEDIA.readingCircle, alt: "Students learning together", className: "col-span-2 row-span-3 rounded-3xl object-cover w-full h-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: SITE_MEDIA.activityLearning, alt: "Activity-based classroom", className: "col-span-2 row-span-3 rounded-3xl object-cover w-full h-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: SITE_MEDIA.montessoriShapes, alt: "Montessori learning materials", className: "col-span-3 row-span-2 rounded-3xl object-cover w-full h-full" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          align: "left",
          eyebrow: "About Our School",
          title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Where every child becomes ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "extraordinary" })
          ] }),
          description: `Established in ${SCHOOL.established}, Holy Fathima High School has been a trusted name in education at Hafeezpet, Hyderabad. We blend academic rigour with character building to prepare students for a confident future.`
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: [
        "English-medium education from Nursery through Class 10",
        "CBSE for Nursery–5th and SSC for 6th–10th with experienced faculty",
        "Smart classrooms, science lab, computer lab and library",
        "Safe campus with CCTV, transport and dedicated care"
      ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm sm:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 size-2 rounded-full gradient-gold shrink-0" }),
        " ",
        t
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "glass rounded-2xl p-4 text-center shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-[color:var(--royal)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v, suffix: s.suffix }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground mt-1", children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-[color:var(--royal)] font-semibold hover:gap-3 transition-all", children: [
        "Learn more about us ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
      ] })
    ] })
  ] }) });
}
const programs = [
  { icon: Sparkles, title: "Nursery", desc: "Joyful first steps into learning for ages 2.5–3.5 with play-based activities." },
  { icon: HeartHandshake, title: "Preschool", desc: "Fostering curiosity, social skills and pre-literacy through guided exploration." },
  { icon: Lightbulb, title: "Kindergarten", desc: "LKG & UKG building literacy, numeracy and confidence with experienced teachers." },
  { icon: BookOpen, title: "Primary 1–5 (CBSE)", desc: "A strong English-medium CBSE foundation in language, math, science and life skills." },
  { icon: GraduationCap, title: "High School 6–10 (SSC)", desc: "SSC board curriculum with concept-driven learning for academic excellence." },
  { icon: Award, title: "Abacus & IIT Foundation", desc: "Abacus for Classes 1–5 and IIT Foundation for Classes 5–10 to build a competitive edge." }
];
function ProgramsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28 px-4 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Academic Programs",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "A complete journey from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Nursery to Class 10" })
        ] }),
        description: "CBSE primary, SSC high school, plus Abacus and IIT Foundation enrichment — designed for curious minds and confident learners."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: programs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.06 },
        className: "group relative glass rounded-3xl p-7 hover:-translate-y-1 hover:shadow-glow transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1 rounded-t-3xl gradient-gold opacity-0 group-hover:opacity-100 transition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 grid place-items-center rounded-2xl gradient-royal text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-bold text-[color:var(--navy)]", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/academics", className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--royal)] group-hover:gap-2.5 transition-all", children: [
            "Learn more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const facilities = [
  { icon: MonitorSmartphone, title: "Smart Classrooms", desc: "Interactive digital boards in every classroom." },
  { icon: Laptop, title: "Computer Lab", desc: "Modern computers with high-speed internet." },
  { icon: FlaskConical, title: "Science Lab", desc: "Well-equipped Physics, Chemistry and Biology labs." },
  { icon: Library, title: "Library", desc: "A growing collection of books and reference material." },
  { icon: Volleyball, title: "Sports & Activities", desc: "Indoor and outdoor games for all-round growth." },
  { icon: Video, title: "CCTV Security", desc: "Round-the-clock monitoring across the campus." },
  { icon: Bus, title: "School Transport", desc: "Safe transport with trained drivers and attendants." },
  { icon: Lightbulb, title: "Digital Learning", desc: "Curated digital content and assessments." }
];
function FacilitiesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 sm:py-28 px-4 bg-[color:var(--navy)] text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 px-3 py-1.5 rounded-full", children: "World-class Facilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold", children: [
          "Everything they need to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "thrive" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/75", children: "A purpose-built campus with every facility a modern learner deserves." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-5 h-1 w-24 rounded-full gradient-gold" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: facilities.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.05 },
          className: "group glass-dark rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 grid place-items-center rounded-xl gradient-gold text-[color:var(--navy)] shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "size-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-bold", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-white/70", children: f.desc })
          ]
        },
        f.title
      )) })
    ] })
  ] });
}
const features = [
  { icon: Users, title: "Experienced Faculty", desc: "Caring, qualified teachers who know each child by name." },
  { icon: BookOpen, title: "English Medium", desc: "Strong communication and writing skills from day one." },
  { icon: Lightbulb, title: "Student-Centered", desc: "Personalised attention and concept-based learning." },
  { icon: ShieldCheck, title: "Safe Campus", desc: "Secure, supervised environment with full CCTV coverage." },
  { icon: HeartHandshake, title: "Holistic Development", desc: "Academics, arts, sports and values — all together." },
  { icon: Trophy, title: "Modern Methods", desc: "Smart classes, projects and technology-enabled teaching." }
];
function WhyChooseSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Why Choose Us",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Six reasons parents ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "trust us" })
        ] }),
        description: "A learning experience that balances academic excellence with values, character and care."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { delay: i * 0.05 },
        className: "relative overflow-hidden rounded-3xl bg-card p-7 shadow-glow border border-border hover:border-[color:var(--gold)]/40 transition group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 size-40 rounded-full bg-[color:var(--gold)]/10 group-hover:scale-150 transition-transform duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 grid place-items-center rounded-xl gradient-royal text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "size-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-bold text-[color:var(--navy)]", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc })
          ] })
        ]
      },
      f.title
    )) })
  ] }) });
}
function GalleryPreview() {
  const images = [
    { src: campus, label: "School Building" },
    { src: SITE_MEDIA.montessoriShapes, label: "Montessori Shapes" },
    { src: SITE_MEDIA.montessoriCircleTime, label: "Circle Time" },
    { src: SITE_MEDIA.readingCircle, label: "Reading Session" },
    { src: SITE_MEDIA.activityLearning, label: "Activity Learning" },
    { src: SITE_MEDIA.writingPractice, label: "Writing Practice" },
    { src: SITE_MEDIA.parentsDay, label: "Parents Day" },
    { src: SITE_MEDIA.awardCeremony, label: "Award Ceremony" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Campus Life",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Glimpses of our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "vibrant campus" })
        ] }),
        description: "A peek into the everyday moments that make our school a special place to learn and grow."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.04 },
        className: `group relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.label, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/80 via-transparent opacity-0 group-hover:opacity-100 transition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition", children: img.label })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 rounded-full gradient-royal text-white px-7 py-3 text-sm font-semibold shadow-glow hover:-translate-y-0.5 transition", children: [
      "Explore full gallery ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
    ] }) })
  ] }) });
}
const testimonials = [
  { name: "Mrs. Anjali Reddy", role: "Parent of Class 5", quote: "The teachers genuinely care about each child. My daughter has grown so confident since joining Holy Fathima.", img: SITE_MEDIA.readingCircle },
  { name: "Mr. Imran Khan", role: "Parent of Class 9", quote: "Excellent academics combined with strong values. The campus is safe and the staff is always approachable.", img: SITE_MEDIA.activityLearning },
  { name: "Sneha S.", role: "Alumna, Class 10", quote: "Holy Fathima shaped who I am today. The faculty pushed me to dream big and gave me the tools to get there.", img: SITE_MEDIA.awardCeremony },
  { name: "Mr. Ramesh Naidu", role: "Parent of UKG", quote: "Best decision we made. The play-based learning has my son excited to go to school every single day.", img: SITE_MEDIA.montessoriCircleTime }
];
function TestimonialsSection() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t2 = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(t2);
  }, []);
  const t = testimonials[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 sm:py-28 px-4 bg-[color:var(--navy)] text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-20 size-[30rem] rounded-full bg-[color:var(--royal)]/40 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 size-[26rem] rounded-full bg-[color:var(--gold)]/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 px-3 py-1.5 rounded-full", children: "Voices of Our Community" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold", children: "What parents and students say" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "mx-auto mt-10 size-12 text-[color:var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.blockquote,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mt-6 text-xl sm:text-2xl font-display leading-relaxed text-white/90 max-w-3xl mx-auto",
          children: [
            "“",
            t.quote,
            "”"
          ]
        },
        i
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, className: "size-14 rounded-full object-cover ring-2 ring-[color:var(--gold)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-[color:var(--gold)]", children: t.role })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center gap-2", children: testimonials.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setI(idx),
          "aria-label": `Testimonial ${idx + 1}`,
          className: `h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-[color:var(--gold)]" : "w-4 bg-white/30"}`
        },
        idx
      )) })
    ] })
  ] });
}
function AdmissionsCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl relative overflow-hidden rounded-3xl gradient-royal text-white p-10 sm:p-16 shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-24 -top-24 size-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 -bottom-20 size-72 rounded-full bg-white/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 px-3 py-1.5 rounded-full", children: "Admissions Open · 2026–27" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold", children: "Give your child the start they deserve." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/85 max-w-xl", children: "Limited seats available across all classes. Apply now to secure admission for the upcoming academic year." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row md:flex-col gap-3 md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 text-sm font-bold shadow-gold hover:-translate-y-0.5 transition", children: [
          "Apply Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${SCHOOL.phones[0]}`, className: "inline-flex items-center justify-center gap-2 rounded-full bg-white/10 ring-1 ring-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/20 transition", children: [
          "Call ",
          SCHOOL.phones[0]
        ] })
      ] })
    ] })
  ] }) });
}
const news = [
  { date: "Mar 12", title: "Annual Day 2026 — A celebration of talent", desc: "Students dazzled the audience with performances across music, dance, and drama.", img: SITE_MEDIA.parentsDay },
  { date: "Feb 24", title: "Inter-school science exhibition winners", desc: "Our Class 9 team brought home the gold in the regional science fair.", img: SITE_MEDIA.awardCeremony },
  { date: "Jan 15", title: "Parent-Teacher Workshop on digital safety", desc: "An interactive session on raising children in the digital era.", img: SITE_MEDIA.sportsParade }
];
function NewsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-24 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Latest News & Events",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "What's happening ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "on campus" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: news.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.08 },
        className: "group rounded-3xl overflow-hidden bg-card border border-border shadow-glow hover:-translate-y-1 transition",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: n.img, alt: "", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 rounded-full gradient-gold text-[color:var(--navy)] px-3 py-1 text-xs font-bold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-3.5" }),
              " ",
              n.date
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-[color:var(--navy)]", children: n.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: n.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--royal)] group-hover:gap-2.5 transition-all", children: [
              "Read more ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ] })
          ] })
        ]
      },
      i
    )) })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSlider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementTicker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FacilitiesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChooseSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdmissionsCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewsSection, {})
  ] });
}
export {
  Home as component
};
