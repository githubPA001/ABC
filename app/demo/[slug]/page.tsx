import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectDemo } from "@/components/project-demo";
import {
  getProjectCaseStudy,
  projectCaseStudies,
  type ProjectCaseStudy,
} from "@/data/portfolio";

type DemoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

function buildMetadata(project: ProjectCaseStudy): Metadata {
  return {
    title: `${project.title} Demo`,
    description: project.summary,
  };
}

export async function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    return {
      title: "Demo Not Found",
    };
  }

  return buildMetadata(project);
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="content" className="pb-24 pt-28">
      <div className="container-shell">
        <Link href="/#projects" className="small-button">
          Back to projects
        </Link>

        <section className="mt-8">
          <p className="eyebrow">{project.category}</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="section-title">{project.title} demo</h1>
              <p className="section-copy mt-5">
                A lightweight interactive preview of the product flow, built into the portfolio so the demo button opens something useful instead of jumping to contact.
              </p>
            </div>
            <Link href={`/systems/${project.slug}`} className="button-secondary">
              View architecture
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <ProjectDemo project={project} />
        </section>
      </div>
    </main>
  );
}
