import type { ProjectCaseStudy } from "@/data/portfolio";
import { AnimatedSection } from "@/components/animated-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";

type SelectedWorksProps = {
  items: ProjectCaseStudy[];
};

export function SelectedWorks({ items }: SelectedWorksProps) {
  return (
    <AnimatedSection id="selected-works" className="pt-24" delay={0.08}>
      <SectionHeading
        eyebrow="Selected Works"
        title="Case-study storytelling framed around real systems, operational risk, and delivery outcomes."
        description="Each project is presented as a systems narrative rather than a generic gallery card, making the portfolio more credible for senior engineering and architecture conversations."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {items.map((project) => (
          <CaseStudyCard key={project.slug} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
