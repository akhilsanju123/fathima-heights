import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as campus, S as SCHOOL } from "./router-CvHomHKt.mjs";
import { P as PageHero } from "./PageHero-CxQox5wB.mjs";
import { S as SectionHeading } from "./SectionHeading-BNXu9iks.mjs";
import { C as Counter } from "./Counter-KpO1rLpB.mjs";
import { a as SITE_MEDIA } from "./site-media-Dv7sW16B.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { E as Eye, T as Target, H as HeartHandshake } from "../_libs/lucide-react.mjs";
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
const url = "/__l5e/assets-v1/5d9be4a1-3afd-493b-9e7b-a96954c498aa/chairman.jpg";
const chairmanData = {
  url
};
const chairman = chairmanData.url;
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About Our School", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Two decades of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "excellence" })
    ] }), description: "A trusted name in English-medium education at Hafeezpet, Hyderabad — building character, confidence and competence since 1989.", image: campus }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
        opacity: 0,
        x: -20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, src: SITE_MEDIA.readingCircle, alt: "Students learning together", className: "rounded-3xl shadow-glow w-full h-[480px] object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "left", eyebrow: "Our Story", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Built on a vision of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "quality education" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: [
          "Founded in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: SCHOOL.established }),
          ", Holy Fathima High School began with a simple promise — to make high-quality English-medium education accessible to families in Hafeezpet and beyond. Two decades on, we have grown into a vibrant institution with students from Nursery through Class 10."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Our approach blends academic rigour with values, sports, the arts and modern teaching methods. Every classroom is a space where children feel known, supported and inspired to achieve their best." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-4", children: [{
          v: 22,
          s: "+",
          l: "Years"
        }, {
          v: 1500,
          s: "+",
          l: "Students"
        }, {
          v: 60,
          s: "+",
          l: "Faculty"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-[color:var(--royal)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v, suffix: s.s }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: s.l })
        ] }, s.l)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Foundation", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Vision, Mission & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Values" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: [{
        icon: Eye,
        title: "Our Vision",
        desc: "To be a leading institution that nurtures globally aware, locally rooted citizens of tomorrow."
      }, {
        icon: Target,
        title: "Our Mission",
        desc: "To deliver excellent English-medium education that develops every child academically, socially and ethically."
      }, {
        icon: HeartHandshake,
        title: "Our Values",
        desc: "Integrity, respect, curiosity, perseverance and compassion guide everything we do as a school community."
      }].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "glass rounded-3xl p-7 shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 grid place-items-center rounded-2xl gradient-royal text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-bold text-[color:var(--navy)]", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.desc })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Leadership", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Chairman's ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Message" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid lg:grid-cols-[380px_1fr] gap-10 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 gradient-gold rounded-3xl opacity-25 blur-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: chairman, alt: "Chairman of Holy Fathima Group of Schools", className: "relative rounded-3xl shadow-glow w-full h-[460px] object-cover object-top" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold text-[color:var(--navy)]", children: "Chairman & Founder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Group of Holy Fathima High Schools" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Principal — Marthanda Nagar Branch" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, className: "glass rounded-3xl p-7 sm:p-9 shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Respected parents, dear students, and esteemed well-wishers, it gives me immense pride and joy to welcome you to an institution that stands as a symbol of excellence, values, and holistic education. At Holy Fathima, we believe that education is not merely about acquiring knowledge from books, but about shaping character, instilling discipline, and nurturing confidence in every child. Our mission is to create responsible, compassionate, and capable individuals who can contribute meaningfully to society." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "With a strong academic foundation, we integrate modern teaching methodologies, digital learning, and activity-based education to make learning both effective and enjoyable. Our team of highly qualified and dedicated educators works tirelessly to guide each student towards academic success and personal growth. We place equal emphasis on co-curricular and extracurricular activities, ensuring that our students develop leadership qualities, creativity, teamwork, and physical well-being. From sports and arts to public speaking and community service, we encourage every child to explore their talents and discover their true potential." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Our campuses are designed to provide a safe, secure, and inspiring environment, equipped with modern infrastructure and student-friendly facilities. We also believe in maintaining a strong partnership with parents, as together we can shape a brighter future for our children. I warmly invite you to visit our Marthanda Nagar campus, interact with our faculty, and witness the quality education and values we proudly uphold." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-lg text-[color:var(--navy)] italic", children: `"Give your child the right platform to learn, grow, and succeed. At Holy Fathima, we don't just educate minds — we shape futures."` })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Journey", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Milestones along the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "way" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--royal)] to-transparent -translate-x-1/2" }),
        [{
          y: "1989",
          t: "Founded",
          d: "Holy Fathima High School opens its doors in Hafeezpet with the founding batch."
        }, {
          y: "2008",
          t: "Primary Wing Expansion",
          d: "Strong demand leads to a fully expanded primary section."
        }, {
          y: "2014",
          t: "Secondary Section",
          d: "Welcomed our first Class 10 batch to outstanding results."
        }, {
          y: "2019",
          t: "Smart Classrooms",
          d: "Digital boards installed across every classroom."
        }, {
          y: "2024",
          t: "Modern Campus Upgrade",
          d: "Refurbished labs, library and a new sports area."
        }].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.05
        }, className: `relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-8 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${i % 2 ? "sm:text-left sm:pl-8" : "sm:text-right sm:pr-8"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-gradient-gold", children: m.y }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[color:var(--navy)] mt-1", children: m.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: m.d })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 sm:left-1/2 top-1 size-4 rounded-full gradient-gold ring-4 ring-background -translate-x-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
        ] }, m.y))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl rounded-3xl gradient-royal text-white p-10 sm:p-14 grid md:grid-cols-[1fr_auto] items-center gap-8 shadow-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl sm:text-3xl font-bold", children: "Visit our campus" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/85 max-w-xl", children: "Experience Holy Fathima first-hand. Our team would love to show you around and answer your questions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${SCHOOL.phones[0]}`, className: "rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 font-bold shadow-gold inline-flex items-center gap-2 hover:-translate-y-0.5 transition", children: "Schedule a visit" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: SITE_MEDIA.activityLearning, alt: "", className: "hidden" })
  ] });
}
export {
  AboutPage as component
};
