import { motion } from "framer-motion";
import { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, image }: { eyebrow: string; title: ReactNode; description?: string; image: string }) {
  return (
    <section className="relative -mt-20 h-[60vh] min-h-[440px] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy)]/90 via-[color:var(--royal)]/75 to-[color:var(--navy)]/95" />
      <div className="absolute -top-20 -right-20 size-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 flex flex-col justify-end pb-16 pt-28 text-white">
        <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="inline-block w-fit text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--gold)] bg-white/10 ring-1 ring-white/20 px-3 py-1.5 rounded-full">
          {eyebrow}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold max-w-3xl">
          {title}
        </motion.h1>
        {description && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-4 max-w-2xl text-white/85 text-base sm:text-lg">
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
