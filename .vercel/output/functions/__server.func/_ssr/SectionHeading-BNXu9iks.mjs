import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--royal)] bg-[color:var(--gold)]/15 px-3 py-1.5 rounded-full",
        children: eyebrow
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.05 },
        className: "mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--navy)]",
        children: title
      }
    ),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { delay: 0.15 },
        className: "mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed",
        children: description
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-5 h-1 w-24 rounded-full gradient-gold ${align === "center" ? "mx-auto" : ""}` })
  ] });
}
export {
  SectionHeading as S
};
