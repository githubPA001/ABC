import type { GlobalExperienceItem } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

type GlobalExperienceSectionProps = {
  items: GlobalExperienceItem[];
};

export function GlobalExperienceSection({
  items,
}: GlobalExperienceSectionProps) {
  return (
    <AnimatedSection id="global-experience" className="pt-24" delay={0.12}>
      <SectionHeading
        eyebrow="Global Experience"
        title="Cross-border communication that keeps delivery aligned across Japanese and Southeast Asian stakeholders."
        description="Beyond technical implementation, this portfolio emphasizes the ability to translate architecture decisions across cultures, time zones, and operational contexts."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="card-surface p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            Communication Principle
          </p>
          <blockquote className="mt-6 border-l border-cyan-400/40 pl-5 text-2xl font-semibold leading-10 text-white">
            Architecture scales faster when every market hears the same
            tradeoff in language they can act on.
          </blockquote>
          <p className="mt-6 text-base leading-8 text-slate-300">
            That means concise decision records, careful expectation management,
            and delivery rituals designed for mixed-language, multi-vendor, and
            multi-time-zone environments.
          </p>
        </div>

        <div className="grid gap-6">
          {items.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="tag-chip">{item.region}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.summary}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
