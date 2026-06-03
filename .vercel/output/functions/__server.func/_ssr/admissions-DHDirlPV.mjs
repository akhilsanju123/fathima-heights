import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./PageHero-CxQox5wB.mjs";
import { S as SectionHeading } from "./SectionHeading-BNXu9iks.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as Toaster } from "./sonner-DeNSN9-c.mjs";
import { a as SITE_MEDIA } from "./site-media-Dv7sW16B.mjs";
import { S as SCHOOL } from "./router-CvHomHKt.mjs";
import { P as Phone, l as Calendar, m as FileText, G as GraduationCap, n as Check, C as ChevronDown } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const steps = [{
  icon: Phone,
  title: "Enquire",
  desc: "Submit the form below or call us to schedule a campus visit."
}, {
  icon: Calendar,
  title: "Visit & Interact",
  desc: "Tour the campus, meet teachers and understand our programs."
}, {
  icon: FileText,
  title: "Submit Documents",
  desc: "Provide required documents along with the admission form."
}, {
  icon: GraduationCap,
  title: "Confirmation",
  desc: "Receive admission confirmation and joining instructions."
}];
const docs = ["Birth certificate of the child", "Previous school transfer certificate (if applicable)", "Aadhar card copy of student and parents", "Recent passport-size photographs", "Address proof of parents"];
const faqs = [{
  q: "What is the medium of instruction?",
  a: "Holy Fathima High School is an English-medium institution from Nursery through Class 10 — CBSE for Nursery–5th and SSC for 6th–10th."
}, {
  q: "What is the age criterion for Nursery?",
  a: "Children should be between 2.5 and 3.5 years old as on 1st June of the academic year."
}, {
  q: "Do you provide transport?",
  a: "Yes, we operate a safe school transport service with trained drivers and dedicated attendants."
}, {
  q: "How can I schedule a campus visit?",
  a: "Submit the inquiry form below or call us at " + SCHOOL.phones[0] + " to schedule a visit at your convenience."
}];
function AdmissionsPage() {
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    e.target.reset();
    toast.success("Inquiry received!", {
      description: "Our admissions team will contact you within 24 hours."
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Admissions Open · 2026–27", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Give your child the start they ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "deserve" })
    ] }), description: "Limited seats available across all classes. Apply now to secure admission for the upcoming academic year.", image: SITE_MEDIA.awardCeremony }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "How to Apply", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "A simple ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "4-step" }),
        " process"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08
      }, className: "relative glass rounded-3xl p-6 shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 -right-3 size-10 grid place-items-center rounded-full gradient-gold font-display font-bold text-[color:var(--navy)] shadow-gold", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 grid place-items-center rounded-2xl gradient-royal text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-bold text-[color:var(--navy)]", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl gradient-royal text-white p-8 sm:p-10 shadow-glow relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 size-72 rounded-full bg-[color:var(--gold)]/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 px-3 py-1.5 rounded-full", children: "Inquiry Form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl sm:text-3xl font-bold", children: "Tell us about your child" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/80 text-sm", children: "Our admissions team will reach out within 24 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-6 grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Student name", name: "student", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Parent name", name: "parent", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone number", name: "phone", type: "tel", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectField, { label: "Class applying for", name: "class", options: ["Nursery", "Preschool", "LKG", "UKG", "Class 1-5 (CBSE)", "Class 6-10 (SSC)", "Abacus (1-5)", "IIT Foundation (5-10)"], required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", name: "city", defaultValue: "Hyderabad" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-white/70 mb-1.5", children: "Message (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 3, className: "w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[color:var(--gold)]", placeholder: "Anything you'd like us to know..." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: submitting, className: "sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 font-bold shadow-gold hover:-translate-y-0.5 transition disabled:opacity-70", children: submitting ? "Submitting..." : "Submit Inquiry" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card border border-border p-8 sm:p-10 shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--royal)] bg-[color:var(--gold)]/15 px-3 py-1.5 rounded-full", children: "Required Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl sm:text-3xl font-bold text-[color:var(--navy)]", children: "Documents to bring along" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-6 grid place-items-center rounded-full gradient-gold text-[color:var(--navy)] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }) }),
          d
        ] }, d)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-5 rounded-2xl bg-[color:var(--gold)]/10 border border-[color:var(--gold)]/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Need help with documents?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground mt-1", children: [
            "Call ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SCHOOL.phones[0]}`, className: "text-[color:var(--royal)] font-semibold", children: SCHOOL.phones[0] }),
            " or ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SCHOOL.phones[1]}`, className: "text-[color:var(--royal)] font-semibold", children: SCHOOL.phones[1] }),
            " — we're happy to help."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "FAQ", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Frequently asked ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "questions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(openFaq === i ? null : i), className: "w-full flex items-center justify-between gap-3 p-5 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[color:var(--navy)]", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-5 transition-transform ${openFaq === i ? "rotate-180" : ""}` })
        ] }),
        openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          height: 0,
          opacity: 0
        }, animate: {
          height: "auto",
          opacity: 1
        }, className: "px-5 pb-5 text-sm text-muted-foreground", children: f.a })
      ] }, i)) })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs uppercase tracking-widest text-white/70 mb-1.5", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, defaultValue, className: "w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[color:var(--gold)]" })
  ] });
}
function SelectField({
  label,
  name,
  options,
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs uppercase tracking-widest text-white/70 mb-1.5", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name, required, defaultValue: "", className: "w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[color:var(--gold)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, className: "text-[color:var(--navy)]", children: "Select class" }),
      options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, className: "text-[color:var(--navy)]", children: o }, o))
    ] })
  ] });
}
export {
  AdmissionsPage as component
};
