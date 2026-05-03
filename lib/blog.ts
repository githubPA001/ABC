import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/lib/mdx-components";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
};

type Frontmatter = Omit<BlogPostMeta, "slug">;

const blogDirectory = path.join(process.cwd(), "content", "blog");

function normalizeBlogMeta(
  slug: string,
  frontmatter: Partial<Frontmatter>,
): BlogPostMeta {
  return {
    slug,
    title:
      typeof frontmatter.title === "string"
        ? frontmatter.title
        : slug.replace(/-/g, " "),
    description:
      typeof frontmatter.description === "string"
        ? frontmatter.description
        : "Technical article.",
    publishedAt:
      typeof frontmatter.publishedAt === "string"
        ? frontmatter.publishedAt
        : "2026-04-01",
    readingTime:
      typeof frontmatter.readingTime === "string"
        ? frontmatter.readingTime
        : "5 min read",
    tags: Array.isArray(frontmatter.tags)
      ? frontmatter.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    featured: Boolean(frontmatter.featured),
  };
}

export const getBlogPosts = cache(async (): Promise<BlogPostMeta[]> => {
  const files = await fs.readdir(blogDirectory);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = await fs.readFile(path.join(blogDirectory, file), "utf8");
      const { data } = matter(source);

      return normalizeBlogMeta(slug, data as Partial<Frontmatter>);
    }),
  );

  return posts.sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() -
      new Date(left.publishedAt).getTime(),
  );
});

export const getFeaturedBlogPosts = cache(async (): Promise<BlogPostMeta[]> => {
  const posts = await getBlogPosts();
  const featuredPosts = posts.filter((post) => post.featured);

  return (featuredPosts.length > 0 ? featuredPosts : posts).slice(0, 3);
});

export const getBlogPost = cache(async (slug: string) => {
  try {
    const source = await fs.readFile(path.join(blogDirectory, `${slug}.mdx`), "utf8");
    const { content, frontmatter } = await compileMDX<Partial<Frontmatter>>({
      source,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
      },
    });

    return {
      content,
      metadata: normalizeBlogMeta(slug, frontmatter),
    };
  } catch {
    return null;
  }
});
