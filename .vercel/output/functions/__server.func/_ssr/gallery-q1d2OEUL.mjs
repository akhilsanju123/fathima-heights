import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as campus$1 } from "./router-CvHomHKt.mjs";
import { P as PageHero } from "./PageHero-CxQox5wB.mjs";
import { S as SCHOOL_GALLERY_IMAGES, a as SITE_MEDIA } from "./site-media-Dv7sW16B.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, d as ChevronLeft, e as ChevronRight } from "../_libs/lucide-react.mjs";
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
const all = [{
  src: campus$1,
  cat: "Campus",
  label: "Main Building"
}, ...SCHOOL_GALLERY_IMAGES];
function GalleryPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [active, setActive] = reactExports.useState(null);
  const filtered = all.filter((i) => filter === "All" || i.cat === filter);
  const close = () => setActive(null);
  const prev = () => setActive((a) => a === null ? a : (a - 1 + filtered.length) % filtered.length);
  const next = () => setActive((a) => a === null ? a : (a + 1) % filtered.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Gallery", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Moments from our ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "vibrant campus" })
    ] }), description: "A peek into the everyday life that makes Holy Fathima a special place to learn and grow.", image: SITE_MEDIA.readingCircle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: ["All", "Campus", "Classrooms", "Events", "Achievements"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `px-5 py-2 rounded-full text-sm font-semibold transition ${filter === f ? "gradient-royal text-white shadow-glow" : "bg-card border border-border hover:border-[color:var(--gold)]"}`, children: f }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4", children: filtered.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { layout: true, initial: {
        opacity: 0,
        scale: 0.9
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        delay: i * 0.04
      }, onClick: () => setActive(i), className: "group relative overflow-hidden rounded-2xl aspect-square", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.label, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/80 via-transparent opacity-0 group-hover:opacity-100 transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 text-left text-white opacity-0 group-hover:opacity-100 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: img.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-[color:var(--gold)]", children: img.cat })
        ] })
      ] }, img.src + i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: active !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-[60] bg-[color:var(--navy)]/95 backdrop-blur-md grid place-items-center p-4", onClick: close, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: close, className: "absolute top-5 right-5 size-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        prev();
      }, className: "absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 size-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
        e.stopPropagation();
        next();
      }, className: "absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 size-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
        opacity: 0,
        scale: 0.96
      }, animate: {
        opacity: 1,
        scale: 1
      }, src: filtered[active].src, alt: filtered[active].label, className: "max-h-[85vh] max-w-[92vw] rounded-2xl shadow-glow object-contain", onClick: (e) => e.stopPropagation() }, active),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm", children: filtered[active].label })
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
