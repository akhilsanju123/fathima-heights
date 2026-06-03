import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function PageHero({ eyebrow, title, description, image }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative -mt-20 h-[60vh] min-h-[440px] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[color:var(--navy)]/90 via-[color:var(--royal)]/75 to-[color:var(--navy)]/95" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 size-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl h-full px-4 flex flex-col justify-end pb-16 pt-28 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, className: "inline-block w-fit text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 ring-1 ring-white/20 px-3 py-1.5 rounded-full", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold max-w-3xl", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.25 }, className: "mt-4 max-w-2xl text-white/85 text-base sm:text-lg", children: description })
    ] })
  ] });
}
export {
  PageHero as P
};
