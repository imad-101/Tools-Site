import type React from "react";
import { getPostData, type PostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  ChevronLeft,
  Calendar,
  Clock,
  Bookmark,
  Hash,
  CornerDownRight,
} from "lucide-react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getHeadings(
  content: string
): { level: number; text: string; id: string }[] {
  const lines = content.split("\n");
  const headings = lines
    .filter((line) => /^#{2,3}\s/.test(line))
    .map((line) => {
      const match = /^(#{2,3})\s+(.*)/.exec(line);
      if (!match) return null;
      const level = match[1].length;
      const text = match[2].trim();
      return { level, text, id: slugify(text) };
    })
    .filter(Boolean) as { level: number; text: string; id: string }[];
  return headings;
}

const TableOfContents = ({ content }: { content: string }) => {
  const headings = getHeadings(content);
  if (headings.length === 0) return null;
  return (
    <aside className="hidden lg:block sticky top-24 w-72 self-start p-4 border-l">
      <div className="space-y-4">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground flex items-center gap-2">
          <Hash className="h-4 w-4" />
          Table of Contents
        </h2>
        <ul className="space-y-3">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`transition-colors ${
                heading.level === 2 ? "ml-0 font-medium" : "ml-4 text-sm"
              }`}
            >
              <a
                href={`#${heading.id}`}
                className="text-muted-foreground hover:text-primary flex items-start gap-2 toc-link"
                data-id={heading.id}
              >
                {heading.level === 3 && (
                  <CornerDownRight className="h-4 w-4 mt-1 flex-shrink-0" />
                )}
                <span className="leading-snug">{heading.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const EnhancedCodeBlock = ({
  // renamed to indicate it's intentionally unused
  inline,
  children,
  ...props
}: {
  inline?: boolean;
  children?: React.ReactNode;
}) => {
  if (inline) {
    return (
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    );
  }
  return (
    <div className="my-4 overflow-x-auto rounded-lg border shadow-sm">
      <div className="flex items-center gap-2 bg-muted px-3 py-1">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <pre className="p-4">
        <code className="font-mono text-sm" {...props}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export async function generateMetadata(context: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await context.params;
  const { slug } = params;
  const post = await getPostData(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://yourdomain.com/blog/${slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
    },
  };
}

export default async function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  let post: PostData;
  try {
    post = await getPostData(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <Header />

      <div className="fixed top-0 left-0 z-40 h-1 w-full bg-muted">
        <div
          id="progress-bar"
          className="h-full bg-primary transition-all duration-150"
          style={{ width: "0%" }}
        />
      </div>

      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-2">
        <button className="rounded-full bg-background border p-2.5 shadow-sm hover:bg-muted transition-colors">
          <Bookmark className="h-4 w-4" />
        </button>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-8">
        <main className="flex-1 max-w-4xl mx-auto">
          <div className="mb-10">
            <Link href="/blog">
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 -ml-2 bg-gray-50 hover:bg-gray-100 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
                All Articles
              </Button>
            </Link>
          </div>

          <article className="space-y-8">
            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                {(post.tags?.length ?? 0) > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {(post.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 pt-4">
                <Avatar className="h-10 w-10">
                  {post.authorImage ? (
                    <AvatarImage src={post.authorImage} alt={post.authorName} />
                  ) : (
                    <AvatarFallback>{post.authorName[0]}</AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <p className="font-medium">{post.authorName}</p>
                  <p className="text-sm text-muted-foreground">
                    Linguistics Expert
                  </p>
                </div>
              </div>
            </header>

            {post.thumbnail && (
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h2: ({ ...props }) => {
                    const text = props.children?.toString() || "";
                    return (
                      <h2
                        id={slugify(text)}
                        className="text-3xl font-semibold mt-8 mb-4 scroll-mt-24"
                        {...props}
                      />
                    );
                  },
                  h3: ({ ...props }) => {
                    const text = props.children?.toString() || "";
                    return (
                      <h3
                        id={slugify(text)}
                        className="text-2xl font-semibold mt-6 mb-3 scroll-mt-24"
                        {...props}
                      />
                    );
                  },
                  p: ({ ...props }) => (
                    <p className="text-base leading-relaxed mb-4" {...props} />
                  ),
                  a: ({ ...props }) => (
                    <a
                      className="text-primary hover:text-primary/80 underline underline-offset-4"
                      {...props}
                    />
                  ),
                  blockquote: ({ ...props }) => (
                    <blockquote
                      className="mt-4 border-l-2 pl-4 italic text-muted-foreground"
                      {...props}
                    />
                  ),
                  ul: ({ ...props }) => (
                    <ul
                      className="my-4 ml-6 list-disc [&>li]:mt-2"
                      {...props}
                    />
                  ),
                  ol: ({ ...props }) => (
                    <ol
                      className="my-4 ml-6 list-decimal [&>li]:mt-2"
                      {...props}
                    />
                  ),
                  code: EnhancedCodeBlock,
                  table: ({ ...props }) => (
                    <div className="my-4 w-full overflow-x-auto">
                      <table className="w-full" {...props} />
                    </div>
                  ),
                  th: ({ ...props }) => (
                    <th
                      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                      {...props}
                    />
                  ),
                  td: ({ ...props }) => (
                    <td
                      className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                      {...props}
                    />
                  ),
                  img: ({ src, alt }: { src?: string; alt?: string }) =>
                    src ? (
                      <figure className="my-4 flex flex-col items-center">
                        <Image
                          src={src}
                          alt={alt || "Post image"}
                          width={600}
                          height={400}
                          className="rounded-lg border bg-muted"
                        />
                        {alt && (
                          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                            {alt}
                          </figcaption>
                        )}
                      </figure>
                    ) : null,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </main>

        <TableOfContents content={post.content} />
      </div>

      <Footer />
    </>
  );
}
