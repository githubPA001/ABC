import type { Note, NoteSummary } from "../types/note";

const USER_NOTES_STORAGE_KEY = "learning-journal-user-notes";

export function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 180));
  return `${minutes} min read`;
}

export function enrichNotesWithContent(
  notes: NoteSummary[],
  noteMap: Record<string, string>
): Note[] {
  return notes
    .map((note) => {
      const content = noteMap[note.slug] ?? "";

      return {
        ...note,
        content,
        readingTime: estimateReadingTime(content),
      };
    })
    .sort((left, right) => right.date.localeCompare(left.date));
}

export function buildTagOptions(notes: Note[]) {
  return ["all", ...new Set(notes.flatMap((note) => note.tags))];
}

export function filterNotes(notes: Note[], query: string, selectedTag: string) {
  const normalizedQuery = query.trim().toLowerCase();

  return notes.filter((note) => {
    const matchesTag = selectedTag === "all" || note.tags.includes(selectedTag);
    const haystack = `${note.title} ${note.preview} ${note.content}`.toLowerCase();
    const matchesQuery = normalizedQuery.length === 0 || haystack.includes(normalizedQuery);

    return matchesTag && matchesQuery;
  });
}

export function slugifyTitle(title: string) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function createPreview(content: string) {
  return content.replace(/[#>*`_-]/g, "").replace(/\s+/g, " ").trim().slice(0, 120);
}

export function parseTags(rawTags: string) {
  return rawTags
    .split(",")
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean);
}

export function loadUserNotes() {
  const rawNotes = window.localStorage.getItem(USER_NOTES_STORAGE_KEY);

  if (!rawNotes) {
    return [] as Note[];
  }

  try {
    const parsed = JSON.parse(rawNotes) as Note[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveUserNotes(notes: Note[]) {
  window.localStorage.setItem(USER_NOTES_STORAGE_KEY, JSON.stringify(notes));
}

export function buildUserNote({
  title,
  content,
  tags,
}: {
  title: string;
  content: string;
  tags: string[];
}) {
  return {
    slug: slugifyTitle(title) || `note-${Date.now()}`,
    title: title.trim(),
    date: new Date().toISOString().slice(0, 10),
    tags,
    preview: createPreview(content) || "New note",
    content: content.trim(),
    readingTime: estimateReadingTime(content),
  } satisfies Note;
}

export function updateUserNote(
  originalSlug: string,
  {
    title,
    content,
    tags,
  }: {
    title: string;
    content: string;
    tags: string[];
  }
) {
  const nextNote = buildUserNote({ title, content, tags });

  return {
    ...nextNote,
    slug: slugifyTitle(title) || originalSlug,
    date: new Date().toISOString().slice(0, 10),
  } satisfies Note;
}
