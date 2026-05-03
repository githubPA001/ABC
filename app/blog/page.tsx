import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { BlogCard } from "@/components/blog-card";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Technical Deep Dives",
  description:
    "MDX technical articles covering scalable frontend systems, enterprise backend modernization, and operational delivery patterns.",
};

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <main id="content" className="pb-24 pt-12">
      <div className="container-shell">
        <AnimatedSection className="card-surface px-6 py-10 sm:px-10 sm:py-12">
          <p className="eyebrow">Technical Deep Dives</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            MDX essays on architecture, delivery patterns, and maintainable
            enterprise systems.
          </h1>
          <p className="section-copy mt-5">
            The blog is structured for static rendering and lightweight
            navigation, making it a strong base for long-form technical
            communication without sacrificing performance.
          </p>
        </AnimatedSection>

        <AnimatedSection
          as="div"
          className="mt-10 grid gap-6 lg:grid-cols-3"
          delay={0.08}
        >
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </AnimatedSection>
      </div>
    </main>
  );
}
