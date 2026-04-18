type SearchBarProps = {
  query: string;
  selectedTag: string;
  tags: string[];
  onQueryChange: (value: string) => void;
  onTagChange: (value: string) => void;
};

export default function SearchBar({
  query,
  selectedTag,
  tags,
  onQueryChange,
  onTagChange,
}: SearchBarProps) {
  return (
    <section
      aria-label="Search and filter notes"
      className="grid gap-4 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:grid-cols-[minmax(0,1fr)_220px]"
    >
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
          Search notes
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by title or content..."
          className="w-full rounded-2xl border border-slate-300 bg-transparent px-4 py-3 text-base outline-none ring-offset-2 transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:ring-offset-slate-900"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
          Filter by tag
        </span>
        <select
          value={selectedTag}
          onChange={(event) => onTagChange(event.target.value)}
          className="w-full rounded-2xl border border-slate-300 bg-transparent px-4 py-3 text-base outline-none ring-offset-2 transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:ring-offset-slate-900"
        >
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag === "all" ? "All tags" : tag}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
