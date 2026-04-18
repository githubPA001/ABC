import { Link, Navigate, useParams } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import type { Note } from "../types/note";

type NotePageProps = {
  notes: Note[];
  noteMap: Record<string, string>;
};

export default function NotePage({ notes, noteMap }: NotePageProps) {
  const { slug } = useParams();
  const note = notes.find((entry) => entry.slug === slug);
  const isBuiltInNote = Boolean(slug && noteMap[slug]);

  useDocumentMeta({
    title: note ? `${note.title} | Learning Journal` : "Note not found | Learning Journal",
    description: note?.preview ?? "Study note not found.",
  });

  if (!slug || !note) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex rounded-sm text-sm font-medium text-cyan-600 outline-none ring-offset-2 transition hover:text-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-cyan-300 dark:ring-offset-slate-950"
        >
          Back to all notes
        </Link>

        <article className="mt-6 rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:px-10">
          <header className="border-b border-slate-200 pb-6 dark:border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <time dateTime={note.date}>{note.date}</time>
                <span>{note.readingTime}</span>
              </div>
              {!isBuiltInNote ? (
                <Link
                  to={`/notes/${note.slug}/edit`}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-cyan-500 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:hover:border-cyan-400"
                >
                  Edit note
                </Link>
              ) : null}
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {note.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-8">
            <MarkdownRenderer content={noteMap[slug] ?? note.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
