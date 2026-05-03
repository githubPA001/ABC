import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectCaseStudy,
  projectCaseStudies,
  type ProjectCaseStudy,
} from "@/data/portfolio";

type ArchitecturePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

function buildMetadata(project: ProjectCaseStudy): Metadata {
  return {
    title: `${project.title} Architecture`,
    description: project.problem,
  };
}

export async function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ArchitecturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    return {
      title: "Architecture Not Found",
    };
  }

  return buildMetadata(project);
}

export default async function ArchitecturePage({
  params,
}: ArchitecturePageProps) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="content" className="pb-24 pt-12">
      <div className="container-shell">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
        >
          <span aria-hidden="true">/</span>
          Back to selected works
        </Link>

        <section className="mt-8 card-surface px-6 py-10 sm:px-10 sm:py-12">
          <p className="eyebrow">{project.category}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Problem Statement
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200">
                {project.problem}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Architecture Overview
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200">
                {project.architectureOverview}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card-surface p-6 sm:p-8">
            <p className="eyebrow">System Layers</p>
            <div className="mt-6 space-y-5">
              {project.systemLayers.map((layer) => (
                <article
                  key={layer.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/30 p-5"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-white">
                      {layer.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {layer.stack.map((item) => (
                        <span key={item} className="tag-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {layer.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <section className="card-surface p-6 sm:p-8">
              <p className="eyebrow">Principles</p>
              <ul className="mt-6 space-y-4">
                {project.architecturePrinciples.map((principle) => (
                  <li
                    key={principle}
                    className="flex gap-3 text-sm leading-7 text-slate-300"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"
                    />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card-surface p-6 sm:p-8">
              <p className="eyebrow">Delivery Highlights</p>
              <ul className="mt-6 space-y-4">
                {project.deliveryHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-7 text-slate-300"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
