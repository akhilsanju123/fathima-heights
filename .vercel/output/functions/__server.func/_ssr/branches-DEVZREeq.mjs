import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-CxQox5wB.mjs";
import { S as SCHOOL, B as BRANCHES } from "./router-CvHomHKt.mjs";
import { a as SITE_MEDIA } from "./site-media-Dv7sW16B.mjs";
import { a as MapPin, P as Phone } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
function BranchesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Branches", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Find your nearest ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "campus" })
    ] }), description: `${SCHOOL.shortName} Group of Schools — established ${SCHOOL.established}. Four campuses, one promise of quality English-medium education.`, image: SITE_MEDIA.sportsParade }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-8", children: BRANCHES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass rounded-3xl overflow-hidden shadow-glow flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] w-full overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.image, alt: b.name, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-[color:var(--navy)]", children: b.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-start gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 mt-0.5 text-[color:var(--royal)] shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b.address })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 mt-0.5 text-[color:var(--royal)] shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex flex-wrap gap-x-3", children: b.phones.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${p}`, className: "font-medium text-[color:var(--navy)] hover:text-[color:var(--royal)]", children: p }, p)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 rounded-2xl overflow-hidden border border-border flex-1 min-h-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: b.name, src: b.mapEmbed, className: "w-full h-full min-h-[200px] border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
      ] })
    ] }, b.id)) }) })
  ] });
}
export {
  BranchesPage as component
};
