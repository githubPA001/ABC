import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;

export const mdxComponents = {
  a: ({ href = "", children, ...props }: AnchorProps) => {
    const className =
      "font-medium text-cyan-200 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-100 hover:decoration-cyan-300";

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    }

    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  },
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      {...props}
      className="border-l border-cyan-400/40 pl-5 text-slate-200"
    />
  ),
};
