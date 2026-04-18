import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  content: string;
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      className="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:text-cyan-600 prose-pre:rounded-2xl prose-pre:border prose-pre:border-slate-800 prose-code:before:hidden prose-code:after:hidden dark:prose-invert"
      rehypePlugins={[rehypeHighlight]}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
}
