import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { AnimatedSection } from "@/components/animated-section";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";

type BlogPreviewProps = {
  posts: BlogPostMeta[];
};

export function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <AnimatedSection id="blog" className="pt-24" delay={0.16}>
      <SectionHeading
        eyebrow="Technical Deep Dives"
        title="An MDX blog layout built for long-form engineering thinking."
        description="Technical writing is treated like a product surface here: statically generated content, clean metadata, and a reading experience that stays fast even as the library grows."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-8 flex justify-start">
        <Link href="/blog" className="button-secondary">
          Browse all technical articles
        </Link>
      </div>
    </AnimatedSection>
  );
}
