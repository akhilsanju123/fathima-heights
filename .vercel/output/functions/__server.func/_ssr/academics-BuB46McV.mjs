import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./PageHero-CxQox5wB.mjs";
import { a as SITE_MEDIA } from "./site-media-Dv7sW16B.mjs";
import { o as Sparkles, H as HeartHandshake, i as Lightbulb, j as BookOpen, G as GraduationCap, p as Award, n as Check } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const programs = [{
  icon: Sparkles,
  title: "Nursery",
  age: "Ages 2.5 – 3.5",
  points: ["Play-based exploration", "Sensory & motor activities", "Storytime, rhymes & music", "Gentle social skills development"]
}, {
  icon: HeartHandshake,
  title: "Preschool",
  age: "Ages 3.5 – 4.5",
  points: ["Pre-literacy and pre-numeracy", "Group projects & circle time", "Art, craft and movement", "Confidence and routine building"]
}, {
  icon: Lightbulb,
  title: "Kindergarten (LKG & UKG)",
  age: "Ages 4.5 – 6",
  points: ["Phonics and early reading", "Numeracy and basic math", "Themed learning units", "School-readiness in English"]
}, {
  icon: BookOpen,
  title: "Primary (Classes 1 – 5) — CBSE",
  age: "Foundation Stage",
  points: ["CBSE-aligned curriculum", "Strong English-medium foundation", "Math, EVS, Computers, Art", "Activity-based assessments"]
}, {
  icon: GraduationCap,
  title: "High School (Classes 6 – 10) — SSC",
  age: "Middle & High School",
  points: ["SSC board curriculum", "Concept-based learning", "Science, Math, Social, Languages", "Board exam preparation"]
}, {
  icon: Award,
  title: "Enrichment — Abacus & IIT Foundation",
  age: "Skill Programs",
  points: ["Abacus for Classes 1 – 5", "IIT Foundation for Classes 5 – 10", "Mental math & logical reasoning", "Competitive exam readiness"]
}];
function AcademicsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Academics", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "A complete journey from ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Nursery to Class 10" })
    ] }), description: "CBSE primary (Nursery – 5th), SSC high school (6th – 10th), with Abacus for 1st–5th and IIT Foundation for 5th–10th — designed to nurture curious minds and confident learners.", image: SITE_MEDIA.montessoriShapes }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-6", children: programs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.05
    }, className: "group relative overflow-hidden rounded-3xl bg-card border border-border p-8 hover:-translate-y-1 hover:shadow-glow hover:border-[color:var(--gold)]/40 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-16 -top-16 size-48 rounded-full bg-[color:var(--gold)]/10 group-hover:scale-150 transition-transform duration-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 grid place-items-center rounded-2xl gradient-royal text-white shadow-glow shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-[color:var(--navy)]", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-[color:var(--royal)] mt-1", children: p.age })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 grid sm:grid-cols-2 gap-2.5", children: p.points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 mt-0.5 text-[color:var(--gold)] shrink-0" }),
          " ",
          pt
        ] }, pt)) })
      ] })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl rounded-3xl gradient-royal text-white p-10 sm:p-14 text-center shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl sm:text-4xl font-bold", children: "Curious about our curriculum?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/85 max-w-2xl mx-auto", children: "Talk to our admissions team to learn more about subjects, timetables and how we support every learner." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", className: "mt-6 inline-flex items-center gap-2 rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 font-bold shadow-gold hover:-translate-y-0.5 transition", children: "Apply for Admission" })
    ] }) })
  ] });
}
export {
  AcademicsPage as component
};
