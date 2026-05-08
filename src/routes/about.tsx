import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";
import campus from "@/assets/campus.jpg";
import classroom1 from "@/assets/classroom-1.webp";
import office from "@/assets/office.webp";
import { SCHOOL } from "@/lib/school";
import { Eye, Target, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Holy Fathima High School, Hafeez Pet" },
      { name: "description", content: "Established in 2003, Holy Fathima High School is a trusted English-medium school in Hafeezpet, Hyderabad offering Nursery to +2 education." },
      { property: "og:title", content: "About Holy Fathima High School" },
      { property: "og:description", content: "A 20+ year legacy of academic excellence and character building in Hafeezpet, Hyderabad." },
      { property: "og:image", content: campus },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Our School" title={<>Two decades of <span className="text-gradient-gold">excellence</span></>} description="A trusted name in English-medium education at Hafeezpet, Hyderabad — building character, confidence and competence since 2003." image={campus} />

      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src={classroom1} alt="" className="rounded-3xl shadow-glow w-full h-[480px] object-cover" />
          <div>
            <SectionHeading align="left" eyebrow="Our Story" title={<>Built on a vision of <span className="text-gradient-gold">quality education</span></>} />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in <strong className="text-foreground">{SCHOOL.established}</strong>, Holy Fathima High School began with a simple
              promise — to make high-quality English-medium education accessible to families in Hafeezpet and beyond. Two decades on,
              we have grown into a vibrant institution with students from Nursery through +2.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our approach blends academic rigour with values, sports, the arts and modern teaching methods. Every classroom is a
              space where children feel known, supported and inspired to achieve their best.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[{ v: 22, s: "+", l: "Years" }, { v: 1500, s: "+", l: "Students" }, { v: 60, s: "+", l: "Faculty" }].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-[color:var(--royal)]"><Counter to={s.v} suffix={s.s} /></div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Foundation" title={<>Vision, Mission & <span className="text-gradient-gold">Values</span></>} />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Our Vision", desc: "To be a leading institution that nurtures globally aware, locally rooted citizens of tomorrow." },
              { icon: Target, title: "Our Mission", desc: "To deliver excellent English-medium education that develops every child academically, socially and ethically." },
              { icon: HeartHandshake, title: "Our Values", desc: "Integrity, respect, curiosity, perseverance and compassion guide everything we do as a school community." },
            ].map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-3xl p-7 shadow-glow">
                <div className="size-14 grid place-items-center rounded-2xl gradient-royal text-white"><v.icon className="size-6" /></div>
                <h3 className="mt-5 font-display text-xl font-bold text-[color:var(--navy)]">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Our Journey" title={<>Milestones along the <span className="text-gradient-gold">way</span></>} />
          <div className="mt-12 relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[color:var(--gold)] via-[color:var(--royal)] to-transparent -translate-x-1/2" />
            {[
              { y: "2003", t: "Founded", d: "Holy Fathima High School opens its doors in Hafeezpet with the founding batch." },
              { y: "2008", t: "Primary Wing Expansion", d: "Strong demand leads to a fully expanded primary section." },
              { y: "2014", t: "Secondary Section", d: "Welcomed our first Class 10 batch to outstanding results." },
              { y: "2019", t: "Smart Classrooms", d: "Digital boards installed across every classroom." },
              { y: "2024", t: "Modern Campus Upgrade", d: "Refurbished labs, library and a new sports area." },
            ].map((m, i) => (
              <motion.div key={m.y} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-8 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                <div className={`${i % 2 ? "sm:text-left sm:pl-8" : "sm:text-right sm:pr-8"}`}>
                  <div className="font-display text-3xl font-bold text-gradient-gold">{m.y}</div>
                  <div className="font-semibold text-[color:var(--navy)] mt-1">{m.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{m.d}</div>
                </div>
                <span className="absolute left-4 sm:left-1/2 top-1 size-4 rounded-full gradient-gold ring-4 ring-background -translate-x-1/2" />
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl rounded-3xl gradient-royal text-white p-10 sm:p-14 grid md:grid-cols-[1fr_auto] items-center gap-8 shadow-glow">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">Visit our campus</h3>
            <p className="mt-2 text-white/85 max-w-xl">Experience Holy Fathima first-hand. Our team would love to show you around and answer your questions.</p>
          </div>
          <a href={`tel:${SCHOOL.phones[0]}`} className="rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 font-bold shadow-gold inline-flex items-center gap-2 hover:-translate-y-0.5 transition">
            Schedule a visit
          </a>
        </div>
      </section>

      <img src={office} alt="" className="hidden" />
    </>
  );
}
