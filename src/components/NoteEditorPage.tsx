import { useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import type { DraftNote, Note } from "../types/note";
import {
  buildUserNote,
  loadUserNotes,
  parseTags,
  saveUserNotes,
  updateUserNote,
} from "../utils/notes";

type NoteEditorPageProps = {
  notes: Note[];
  onNoteSaved: (note: Note, previousSlug?: string) => void;
};

const initialDraft: DraftNote = {
  title: "",
  tags: "",
  content: "",
};

const sampleDraft: DraftNote = {
  title: "React useEffect quick notes",
  tags: "react, hooks, sample",
  content: `# React useEffect quick notes

## When to use it

- Sync with APIs
- Listen to browser events
- Clean up subscriptions

## Example code

\`\`\`tsx
import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return <p>{time}</p>;
}
\`\`\`

## Reminder

Always clean up timers, listeners, and subscriptions when needed.
`,
};

export default function NoteEditorPage({
  notes,
  onNoteSaved,
}: NoteEditorPageProps) {
  const { slug } = useParams();
  const editingNote = useMemo(
    () => (slug ? notes.find((note) => note.slug === slug) : undefined),
    [notes, slug]
  );
  const isEditing = Boolean(slug);

  useDocumentMeta({
    title: isEditing ? "Edit note | Learning Journal" : "New note | Learning Journal",
    description: isEditing
      ? "Update and save your learning note."
      : "Write and save a new learning note.",
  });

  const navigate = useNavigate();
  const [draft, setDraft] = useState<DraftNote>(() => {
    if (!editingNote) {
      return initialDraft;
    }

    return {
      title: editingNote.title,
      tags: editingNote.tags.join(", "),
      content: editingNote.content,
    };
  });
  const [error, setError] = useState("");

  if (isEditing && !editingNote) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (field: keyof DraftNote, value: string) => {
    setDraft((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const applySampleNote = () => {
    setDraft(sampleDraft);
    setError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!draft.title.trim() || !draft.content.trim()) {
      setError("Please add a title and some note content before saving.");
      return;
    }

    const tags = parseTags(draft.tags);
    const note = editingNote
      ? updateUserNote(editingNote.slug, {
          title: draft.title,
          content: draft.content,
          tags,
        })
      : buildUserNote({
          title: draft.title,
          content: draft.content,
          tags,
        });

    if (
      notes.some(
        (existingNote) =>
          existingNote.slug === note.slug && existingNote.slug !== editingNote?.slug
      )
    ) {
      setError("A note with a very similar title already exists. Please change the title.");
      return;
    }

    const nextUserNotes = editingNote
      ? loadUserNotes().map((existingNote) =>
          existingNote.slug === editingNote.slug ? note : existingNote
        )
      : [note, ...loadUserNotes()];

    saveUserNotes(nextUserNotes);
    onNoteSaved(note, editingNote?.slug);
    navigate(`/notes/${note.slug}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <Link
              to="/"
              className="text-sm font-medium text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300"
            >
              Back to notes
            </Link>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              {isEditing ? "Edit note" : "Write a new note"}
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Your note will be saved in this browser so you can keep working quickly.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-800/60">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Need an example? Load a sample note with a code snippet.
                </p>
                <button
                  type="button"
                  onClick={applySampleNote}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-cyan-500 hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:hover:border-cyan-400"
                >
                  Load sample note
                </button>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">Title</span>
                <input
                  type="text"
                  value={draft.title}
                  onChange={(event) => handleChange("title", event.target.value)}
                  placeholder="What did you learn today?"
                  className="w-full rounded-2xl border border-slate-300 bg-transparent px-4 py-3 outline-none ring-offset-2 transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:ring-offset-slate-900"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">Tags</span>
                <input
                  type="text"
                  value={draft.tags}
                  onChange={(event) => handleChange("tags", event.target.value)}
                  placeholder="react, hooks, study"
                  className="w-full rounded-2xl border border-slate-300 bg-transparent px-4 py-3 outline-none ring-offset-2 transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:ring-offset-slate-900"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">Markdown content</span>
                <textarea
                  value={draft.content}
                  onChange={(event) => handleChange("content", event.target.value)}
                  placeholder="# New note&#10;&#10;Write your thoughts here..."
                  rows={18}
                  className="w-full rounded-3xl border border-slate-300 bg-transparent px-4 py-4 outline-none ring-offset-2 transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:ring-offset-slate-900"
                />
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Code blocks use triple backticks, for example:
                  {" "}
                  <code>```tsx</code>
                </p>
              </label>
            </div>

            {error ? (
              <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
                {error}
              </p>
            ) : null}

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                className="rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                {isEditing ? "Update note" : "Save note"}
              </button>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Saved locally in this browser.
              </p>
            </div>
          </form>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-semibold">Live preview</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Preview your Markdown before saving.
            </p>
            <div className="mt-6 min-h-[28rem]">
              <MarkdownRenderer
                content={draft.content.trim() || "## Your preview will appear here"}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
