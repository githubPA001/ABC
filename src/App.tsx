import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NoteEditorPage from "./components/NoteEditorPage";
import NoteList from "./components/NoteList";
import NotePage from "./components/NotePage";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import notesIndex from "./content/notes/index.json";
import { useDocumentMeta } from "./hooks/useDocumentMeta";
import type { Note, NoteSummary } from "./types/note";
import {
  buildTagOptions,
  enrichNotesWithContent,
  filterNotes,
  loadUserNotes,
} from "./utils/notes";

const rawNoteModules = import.meta.glob("./content/notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const noteMap = Object.fromEntries(
  Object.entries(rawNoteModules).map(([path, content]) => [
    path.split("/").pop()?.replace(".md", "") ?? "",
    String(content),
  ])
);

const builtInNotes = enrichNotesWithContent(notesIndex as NoteSummary[], noteMap);

type HomePageProps = {
  notes: Note[];
};

function HomePage({ notes }: HomePageProps) {
  useDocumentMeta({
    title: "Learning Journal",
    description:
      "Browse study notes, filter by topic, and revisit highlights from your learning journal.",
  });

  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const tagOptions = useMemo(() => buildTagOptions(notes), [notes]);
  const filteredNotes = useMemo(
    () => filterNotes(notes, query, selectedTag),
    [notes, query, selectedTag]
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-6 border-b border-slate-200 pb-8 dark:border-slate-800">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">
                Personal Knowledge Base
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                A calm home for your study notes.
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Write in Markdown, organize by tags, and find ideas quickly with
                fast client-side search.
              </p>
            </div>
            <ThemeToggle />
          </div>
          <SearchBar
            query={query}
            selectedTag={selectedTag}
            tags={tagOptions}
            onQueryChange={setQuery}
            onTagChange={setSelectedTag}
          />
        </header>

        <main className="flex-1">
          <NoteList notes={filteredNotes} totalCount={notes.length} />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const [notes, setNotes] = useState<Note[]>(builtInNotes);

  useEffect(() => {
    const userNotes = loadUserNotes();
    setNotes([...userNotes, ...builtInNotes]);
  }, []);

  const handleNoteSaved = (note: Note, previousSlug?: string) => {
    setNotes((currentNotes) => {
      if (!previousSlug) {
        return [note, ...currentNotes];
      }

      return currentNotes.map((currentNote) =>
        currentNote.slug === previousSlug ? note : currentNote
      );
    });
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage notes={notes} />} />
      <Route
        path="/new"
        element={<NoteEditorPage notes={notes} onNoteSaved={handleNoteSaved} />}
      />
      <Route
        path="/notes/:slug/edit"
        element={<NoteEditorPage notes={notes} onNoteSaved={handleNoteSaved} />}
      />
      <Route path="/notes/:slug" element={<NotePage noteMap={noteMap} notes={notes} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
