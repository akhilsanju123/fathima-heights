import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-CxQox5wB.mjs";
import { a as campusData } from "./router-CvHomHKt.mjs";
import { f as MonitorSmartphone, L as Laptop, F as FlaskConical, g as Library, V as Volleyball, h as Video, B as Bus, i as Lightbulb, S as ShieldCheck, j as BookOpen } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const campus = campusData.url;
const items = [{
  icon: MonitorSmartphone,
  title: "Smart Classrooms",
  desc: "Interactive digital boards in every classroom create immersive lessons across subjects."
}, {
  icon: Laptop,
  title: "Computer Lab",
  desc: "Modern computers with high-speed internet and a structured ICT curriculum."
}, {
  icon: FlaskConical,
  title: "Science Lab",
  desc: "Well-equipped Physics, Chemistry and Biology labs for hands-on experiments."
}, {
  icon: Library,
  title: "Library",
  desc: "A growing collection of books, magazines and reference material to inspire reading."
}, {
  icon: Volleyball,
  title: "Sports & Activities",
  desc: "Indoor and outdoor games supervised by trained coaches for all-round growth."
}, {
  icon: Video,
  title: "CCTV Security",
  desc: "Round-the-clock monitoring across the entire campus for your child's safety."
}, {
  icon: Bus,
  title: "School Transport",
  desc: "Safe, reliable transport with trained drivers and dedicated attendants."
}, {
  icon: Lightbulb,
  title: "Digital Learning",
  desc: "Curated digital content, online assessments and parent-teacher portals."
}, {
  icon: ShieldCheck,
  title: "Healthcare",
  desc: "First-aid trained staff and tie-ups with nearby medical facilities."
}, {
  icon: BookOpen,
  title: "Reading Culture",
  desc: "Dedicated reading periods, story sessions and inter-class competitions."
}];
function FacilitiesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Facilities", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Everything they need to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "thrive" })
    ] }), description: "A purpose-built campus designed to support modern, joyful and safe learning for every child.", image: campus }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.04
    }, className: "group glass rounded-3xl p-7 hover:-translate-y-1 hover:shadow-glow transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 grid place-items-center rounded-2xl gradient-royal text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "size-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-bold text-[color:var(--navy)]", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc })
    ] }, f.title)) }) })
  ] });
}
export {
  FacilitiesPage as component
};
