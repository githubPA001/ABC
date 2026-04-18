import { useThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, resolvedTheme, toggleTheme } = useThemeContext();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch theme. Current setting: ${theme}, resolved theme: ${resolvedTheme}`}
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-cyan-400 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-500"
    >
      {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
