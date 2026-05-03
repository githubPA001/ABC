import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";

const leadershipSignals = [
  {
    title: "Enterprise Scalability",
    detail:
      "Design systems that scale across product lines, team boundaries, and operational complexity.",
  },
  {
    title: "Technical Leadership",
    detail:
      "Guide architecture reviews, delivery rituals, and engineering standards with calm clarity.",
  },
  {
    title: "Cross-Border Delivery",
    detail:
      "Keep stakeholders in Japanese and Southeast Asian markets aligned through crisp technical communication.",
  },
];

export function HeroSection() {
  return (
    <AnimatedSection
      id="overview"
      className="grid gap-8 pb-6 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pt-20"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/55 p-6 shadow-soft sm:p-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent"
        />
        <p className="eyebrow">Senior Software Engineer</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Building enterprise-scale software with architectural discipline and
          technical leadership.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This portfolio presents a senior-level engineering profile shaped
          around scalable product systems, backend modernization, and delivery
          leadership for globally distributed teams.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#selected-works" className="button-primary">
            Explore case studies
          </Link>
          <Link href="/blog" className="button-secondary">
            Read technical deep dives
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Focus
            </p>
            <p className="mt-3 text-base font-semibold text-white">
              Platform architecture
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Delivery
            </p>
            <p className="mt-3 text-base font-semibold text-white">
              Product + enterprise systems
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Strength
            </p>
            <p className="mt-3 text-base font-semibold text-white">
              Calm execution under complexity
            </p>
          </div>
        </div>
      </div>

      <div className="card-surface p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">Operating Model</p>
          <span className="tag-chip">Dark Mode by Default</span>
        </div>
        <div className="mt-6 space-y-5">
          {leadershipSignals.map((signal, index) => (
            <article
              key={signal.title}
              className="rounded-3xl border border-white/10 bg-slate-950/35 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-white">
                  {signal.title}
                </h2>
                <span className="font-mono text-xs text-slate-500">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {signal.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
