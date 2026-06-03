import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useInView, a as useMotionValue, b as useTransform, c as animate, m as motion } from "../_libs/framer-motion.mjs";
function Counter({ to, suffix = "", duration = 2 }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  reactExports.useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, to, duration, mv]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "inline-flex items-baseline", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { children: rounded }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: suffix })
  ] });
}
export {
  Counter as C
};
