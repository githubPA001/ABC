import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="content"
      className="container-shell flex min-h-[60vh] items-center pb-24 pt-20"
    >
      <div className="card-surface max-w-2xl px-6 py-10 sm:px-10 sm:py-12">
        <p className="eyebrow">Not Found</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white">
          The page you requested does not exist.
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-300">
          The portfolio route may have moved, or the requested case study slug
          is not available in the current mock dataset.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="button-primary">
            Return home
          </Link>
          <Link href="/blog" className="button-secondary">
            Visit the blog
          </Link>
        </div>
      </div>
    </main>
  );
}
