import Link from "next/link";
import type { ProjectCaseStudy } from "@/data/portfolio";

type CaseStudyCardProps = {
  project: ProjectCaseStudy;
};

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow">{project.category}</p>
        <span className="text-xs font-medium uppercase tracking-[0.26em] text-slate-500">
          Case Study
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="tag-chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          Problem Statement
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-200">
          {project.problem}
        </p>
      </div>

      <Link
        href={`/systems/${project.slug}`}
        className="button-primary mt-8 w-full justify-between"
      >
        View System Architecture
        <span aria-hidden="true">/</span>
      </Link>
    </article>
  );
}
