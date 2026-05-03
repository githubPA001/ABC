import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import {
  operatingPrinciples,
  profile,
  projectCaseStudies,
  skillGroups,
  timeline,
} from "@/data/portfolio";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Main Stack", value: "React + Node" },
  { label: "Location", value: profile.location },
];

export default function HomePage() {
  return (
    <main id="content">
      <section id="home" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(16,185,129,0.16),transparent_26%)]" />
        <div className="container-shell grid min-h-[calc(100vh-5rem)] gap-10 pb-20 pt-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <AnimatedSection className="max-w-3xl">
            <p className="eyebrow">{profile.availability}</p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m {profile.name}. I build polished full-stack web apps.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              {profile.tagline} I focus on responsive interfaces, reliable APIs, and practical architecture that is easy to maintain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#projects" className="button-primary">
                View My Work
              </Link>
              <a href={`mailto:${profile.email}`} className="button-secondary">
                Contact Me
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="metric-card">
                  <p className="text-2xl font-bold text-slate-950 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="hero-panel">
            <div className="relative mx-auto grid aspect-square max-w-[420px] place-items-center rounded-full bg-gradient-to-br from-blue-500 via-slate-900 to-emerald-500 p-2 shadow-soft">
              <div className="grid h-full w-full place-items-center rounded-full bg-white text-center dark:bg-slate-950">
                <div>
                  <p className="font-mono text-sm font-semibold uppercase text-blue-600 dark:text-blue-300">
                    {profile.title}
                  </p>
                  <p className="mt-4 text-7xl font-black tracking-tight text-slate-950 dark:text-white">
                    {profile.initials}
                  </p>
                  <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">
                    React, Next.js, Express.js, REST APIs, clean UI, and production-focused delivery.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="about" className="section-band">
        <div className="container-shell">
          <AnimatedSection>
            <p className="eyebrow">About Me</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <h2 className="section-title">A developer who cares about clean delivery.</h2>
                <p className="section-copy mt-5">
                  I am a full-stack developer from Myanmar with professional experience at DIR-ACE Co., Ltd. My current focus is strengthening React, Next.js, Express.js, and full-stack architecture for production-ready applications.
                </p>
              </div>
              <div className="grid gap-4">
                {timeline.map((item) => (
                  <article key={item.label} className="timeline-card">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                      {item.meta}
                    </p>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="skills" className="section-band">
        <div className="container-shell">
          <AnimatedSection>
            <p className="eyebrow">Skills</p>
            <h2 className="section-title mt-4">Technology stack for modern web applications.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="feature-card">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {group.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="projects" className="section-band">
        <div className="container-shell">
          <AnimatedSection>
            <p className="eyebrow">Projects</p>
            <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="section-title">Selected project case studies and product concepts.</h2>
                <p className="section-copy mt-5">
                  These examples show the kind of full-stack systems I can plan, build, and improve with clean user experience and maintainable architecture.
                </p>
              </div>
              <Link href="/#contact" className="button-secondary lg:mb-1">
                Discuss a Project
              </Link>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {projectCaseStudies.map((project, index) => (
                <article key={project.slug} className="project-card">
                  <div className="project-thumb">
                    <span className="font-mono text-sm font-semibold text-white/80">
                      0{index + 1}
                    </span>
                    <span className="text-2xl font-black text-white">
                      {project.title}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tag) => (
                        <span key={tag} className="tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href={project.liveUrl} className="small-button">
                        Live Demo
                      </Link>
                      <Link href={project.sourceUrl} className="small-button">
                        Source Code
                      </Link>
                      <Link href={`/systems/${project.slug}`} className="small-button">
                        Details
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-band">
        <div className="container-shell">
          <AnimatedSection className="grid gap-5 md:grid-cols-3">
            {operatingPrinciples.map((principle) => (
              <article key={principle.title} className="feature-card">
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                  {principle.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {principle.description}
                </p>
              </article>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section id="contact" className="section-band pb-24">
        <div className="container-shell">
          <AnimatedSection className="grid gap-8 rounded-[28px] border border-slate-900/10 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/70 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title mt-4">Let&apos;s build something useful.</h2>
              <p className="section-copy mt-5">
                Open to freelance projects, collaborations, and full-time roles. Send a message or reach me directly.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
                <a href={`mailto:${profile.email}`} className="contact-link">
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="contact-link">
                  {profile.phone}
                </a>
                <p className="contact-link">{profile.location}</p>
              </div>
            </div>
            <ContactForm email={profile.email} />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
