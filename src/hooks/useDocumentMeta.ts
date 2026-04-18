import { useEffect } from "react";

type DocumentMeta = {
  title: string;
  description: string;
};

export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription =
      document.querySelector('meta[name="description"]') ??
      Object.assign(document.createElement("meta"), {
        name: "description",
      });

    if (!metaDescription.parentElement) {
      document.head.appendChild(metaDescription);
    }

    document.title = title;
    metaDescription.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
    };
  }, [description, title]);
}
