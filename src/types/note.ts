export type NoteSummary = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  preview: string;
};

export type Note = NoteSummary & {
  content: string;
  readingTime: string;
};

export type DraftNote = {
  title: string;
  tags: string;
  content: string;
};
