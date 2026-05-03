import type { OperatingPrinciple } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

type StandardsSectionProps = {
  items: OperatingPrinciple[];
};

export function StandardsSection({ items }: StandardsSectionProps) {
  return (
    <AnimatedSection id="senior-details" className="pt-24" delay={0.14}>
      <SectionHeading
        eyebrow="Senior Details"
        title="Responsive, accessible, and built to support long-form technical depth."
        description="The implementation is intentionally grounded in senior engineering expectations: strong semantics, reduced-motion support, performant content delivery, and layouts that remain composed across devices."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="card-surface p-6">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
            <p className="mt-5 rounded-3xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-400">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
