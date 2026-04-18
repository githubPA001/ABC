import { Link } from "react-router-dom";
import type { Note } from "../types/note";

type NoteItemProps = {
  note: Note;
};

export default function NoteItem({ note }: NoteItemProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-800">
      <div className="flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <time dateTime={note.date}>{note.date}</time>
        <span>{note.readingTime}</span>
      </div>
      <h2 className="mt-4 text-xl font-semibold tracking-tight">
        <Link
          className="rounded-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-cyan-500 dark:ring-offset-slate-900"
          to={`/notes/${note.slug}`}
        >
          {note.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
        {note.preview}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
