import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="content" className="pb-24 pt-12">
      <article className="container-shell max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
        >
          <span aria-hidden="true">/</span>
          Back to technical deep dives
        </Link>

        <div className="mt-8 card-surface px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-wrap gap-2">
            {post.metadata.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {post.metadata.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {post.metadata.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>{formatDate(post.metadata.publishedAt)}</span>
            <span aria-hidden="true">/</span>
            <span>{post.metadata.readingTime}</span>
          </div>
        </div>

        <div className="prose prose-invert mt-10 max-w-none px-2">
          {post.content}
        </div>
      </article>
    </main>
  );
}
