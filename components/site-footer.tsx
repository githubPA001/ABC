import Link from "next/link";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-900/10 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="container-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950 dark:text-white">
            (c) 2026 {profile.name}. Built with Next.js and Tailwind CSS.
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Modern full-stack portfolio for opportunities, freelance work, and collaboration.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/#home" className="hover:text-blue-600 dark:hover:text-blue-300">
            Back to Top
          </Link>
          {profile.socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
