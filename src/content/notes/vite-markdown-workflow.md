# A Simple Markdown Workflow with Vite

For a note-taking site, raw Markdown files can be enough for a long time.

## Loading content

Use `import.meta.glob()` to import a folder of `.md` files as raw strings:

```ts
const noteModules = import.meta.glob("./content/notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
```

## Benefits

1. No backend is required.
2. Content stays version-controlled alongside the UI.
3. Deployment remains simple because everything is static.

## Tradeoff

You will eventually want frontmatter, MDX, or a CMS once the content model grows more complex.
