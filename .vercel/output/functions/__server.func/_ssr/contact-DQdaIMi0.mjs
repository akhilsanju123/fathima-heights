import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-CxQox5wB.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as Toaster } from "./sonner-DeNSN9-c.mjs";
import { a as SITE_MEDIA } from "./site-media-Dv7sW16B.mjs";
import { B as BRANCHES, S as SCHOOL } from "./router-CvHomHKt.mjs";
import { a as MapPin, P as Phone, b as Mail, k as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "../_libs/isbot.mjs";
function ContactPage() {
  const [sending, setSending] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    e.target.reset();
    toast.success("Message sent!", {
      description: "We'll get back to you shortly."
    });
  };
  const cards = [{
    icon: Mail,
    title: "Email",
    lines: [SCHOOL.email],
    hrefPrefix: "mailto:"
  }, {
    icon: Clock,
    title: "Hours",
    lines: ["Mon – Sat: 8:30 AM – 4:30 PM", "Sunday: Closed"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact Us", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "We'd love to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "hear from you" })
    ] }), description: "Questions about admissions, programs or a campus visit — our team is here to help.", image: SITE_MEDIA.parentsDay }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-[color:var(--navy)] text-center", children: [
        "Our ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Campuses" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-muted-foreground", children: "Visit us at our campus in Hafeezpet, Hyderabad." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid lg:grid-cols-2 gap-8", children: BRANCHES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 shadow-glow flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 grid place-items-center rounded-xl gradient-royal text-white shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-[color:var(--navy)]", children: b.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: b.address })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 grid place-items-center rounded-lg bg-[color:var(--gold)]/15 text-[color:var(--royal)] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-3 gap-y-1 text-sm", children: b.phones.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${p}`, className: "font-medium text-[color:var(--navy)] hover:text-[color:var(--royal)]", children: p }, p)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 rounded-2xl overflow-hidden border border-border min-h-[260px] flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: b.name, src: b.mapEmbed, className: "w-full h-full min-h-[260px] border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
      ] }, b.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl grid sm:grid-cols-2 gap-5", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 grid place-items-center rounded-xl gradient-royal text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-bold text-[color:var(--navy)]", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 space-y-1 text-sm text-muted-foreground", children: c.lines.map((l) => c.hrefPrefix ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:text-[color:var(--royal)]", href: `${c.hrefPrefix}${l}`, children: l }) }, l) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l }, l)) })
    ] }, c.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "rounded-3xl bg-card border border-border p-8 shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-[color:var(--navy)]", children: "Send a message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Fill in the form and our team will respond within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Your name", name: "name", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Phone", name: "phone", type: "tel", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Email", name: "email", type: "email", required: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-1.5", children: "Message *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 4, required: true, className: "w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--royal)]", placeholder: "How can we help?" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: sending, className: "mt-5 w-full inline-flex items-center justify-center rounded-full gradient-royal text-white px-6 py-3.5 font-semibold shadow-glow hover:-translate-y-0.5 transition disabled:opacity-70", children: sending ? "Sending..." : "Send Message" })
    ] }) }) })
  ] });
}
function Input({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-1.5", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, className: "w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--royal)]" })
  ] });
}
export {
  ContactPage as component
};
