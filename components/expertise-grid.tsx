import type { ExpertiseArea } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

type ExpertiseGridProps = {
  items: ExpertiseArea[];
};

export function ExpertiseGrid({ items }: ExpertiseGridProps) {
  return (
    <AnimatedSection id="expertise" className="pt-24" delay={0.04}>
      <SectionHeading
        eyebrow="Expertise Grid"
        title="Balanced depth across frontend product systems, backend reliability, and infrastructure operations."
        description="The portfolio is intentionally senior-level: each competency area highlights not only implementation skills, but also the architectural and leadership patterns needed to keep complex delivery moving."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="card-surface p-6">
            <p className="eyebrow">{item.category}</p>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {item.summary}
            </p>

            <ul className="mt-6 space-y-4">
              {item.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex gap-3 text-sm leading-7 text-slate-200"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"
                  />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Leadership Lens
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.leadership}
              </p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
