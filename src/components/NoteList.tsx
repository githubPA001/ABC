import NoteItem from "./NoteItem";
import { Link } from "react-router-dom";
import type { Note } from "../types/note";

type NoteListProps = {
  notes: Note[];
  totalCount: number;
};

export default function NoteList({ notes, totalCount }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <section
        aria-live="polite"
        className="rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-16 text-center shadow-soft dark:border-slate-700 dark:bg-slate-900/70"
      >
        <h2 className="text-2xl font-semibold">No notes matched your search.</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Try a different keyword or switch back to the all tag.
        </p>
      </section>
    );
  }

  return (
    <section aria-label="Learning notes">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing {notes.length} of {totalCount} notes
        </p>
        <Link
          to="/new"
          className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          New note
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {notes.map((note) => (
          <NoteItem key={note.slug} note={note} />
        ))}
      </div>
    </section>
  );
}
