import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Sparkles, HeartHandshake, Lightbulb, BookOpen, GraduationCap, Award, Check } from "lucide-react";
import classroom2 from "@/assets/classroom-2.webp";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Programs from Nursery to +2 | Holy Fathima High School" },
      { name: "description", content: "Explore our English-medium academic programs from Nursery, Preschool, Kindergarten, Primary, Secondary to +2 at Holy Fathima High School, Hafeezpet." },
      { property: "og:title", content: "Academic Programs — Holy Fathima High School" },
      { property: "og:description", content: "A complete educational journey from early years through +2 with experienced faculty and modern teaching methods." },
    ],
  }),
  component: AcademicsPage,
});

const programs = [
  { icon: Sparkles, title: "Nursery", age: "Ages 2.5 – 3.5", points: ["Play-based exploration", "Sensory & motor activities", "Storytime, rhymes & music", "Gentle social skills development"] },
  { icon: HeartHandshake, title: "Preschool", age: "Ages 3.5 – 4.5", points: ["Pre-literacy and pre-numeracy", "Group projects & circle time", "Art, craft and movement", "Confidence and routine building"] },
  { icon: Lightbulb, title: "Kindergarten (LKG & UKG)", age: "Ages 4.5 – 6", points: ["Phonics and early reading", "Numeracy and basic math", "Themed learning units", "School-readiness in English"] },
  { icon: BookOpen, title: "Primary (Classes 1 – 5)", age: "Foundation Stage", points: ["Strong English-medium foundation", "Math, EVS, Computers, Art", "Library and reading culture", "Activity-based assessments"] },
  { icon: GraduationCap, title: "Secondary (Classes 6 – 10)", age: "Middle & High School", points: ["Concept-based learning", "Science, Math, Social, Languages", "Lab work and project-based units", "Board exam preparation"] },
  { icon: Award, title: "+2 / Intermediate", age: "Pre-University", points: ["Streams aligned with higher studies", "Competitive exam guidance", "Career counselling", "Soft-skills and communication"] },
];

function AcademicsPage() {
  return (
    <>
      <PageHero eyebrow="Academics" title={<>A complete journey from <span className="text-gradient-gold">Nursery to +2</span></>} description="Carefully crafted programs at every stage, designed to nurture curious minds, strong values and confident young adults." image={classroom2} />

      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border p-8 hover:-translate-y-1 hover:shadow-glow hover:border-[color:var(--gold)]/40 transition-all">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[color:var(--gold)]/10 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="size-14 grid place-items-center rounded-2xl gradient-royal text-white shadow-glow shrink-0"><p.icon className="size-6" /></div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[color:var(--navy)]">{p.title}</h3>
                    <div className="text-xs uppercase tracking-widest text-[color:var(--royal)] mt-1">{p.age}</div>
                  </div>
                </div>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 mt-0.5 text-[color:var(--gold)] shrink-0" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl rounded-3xl gradient-royal text-white p-10 sm:p-14 text-center shadow-glow">
          <h3 className="font-display text-3xl sm:text-4xl font-bold">Curious about our curriculum?</h3>
          <p className="mt-3 text-white/85 max-w-2xl mx-auto">Talk to our admissions team to learn more about subjects, timetables and how we support every learner.</p>
          <Link to="/admissions" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-gold text-[color:var(--navy)] px-7 py-3.5 font-bold shadow-gold hover:-translate-y-0.5 transition">
            Apply for Admission
          </Link>
        </div>
      </section>
    </>
  );
}
