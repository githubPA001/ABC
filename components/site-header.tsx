"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.dataset.theme = shouldUseDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.dataset.theme = nextTheme ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-white/78 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/76">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link
          href="/#home"
          className="flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white shadow-soft dark:bg-white dark:text-slate-950">
            {profile.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-slate-950 dark:text-white">
              {profile.name}
            </span>
            <span className="block text-xs text-slate-600 dark:text-slate-400">
              {profile.title}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="icon-button"
          >
            <span aria-hidden="true">{isDark ? "D" : "L"}</span>
          </button>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="icon-button lg:hidden"
          >
            <span aria-hidden="true" className="text-lg">
              {isOpen ? "X" : "="}
            </span>
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile primary"
          className="border-t border-slate-900/10 bg-white px-5 py-4 shadow-soft dark:border-white/10 dark:bg-slate-950 lg:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
