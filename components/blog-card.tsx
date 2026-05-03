import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPostMeta;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
        <span>{formatDate(post.publishedAt)}</span>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
        {post.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
        {post.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="button-secondary mt-8 w-full justify-between"
      >
        Read article
        <span aria-hidden="true">/</span>
      </Link>
    </article>
  );
}
