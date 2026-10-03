import Link from "next/link";
import type { Metadata } from "next";
import { Tag } from "@/components/ui";
import { formatDate, getEntries, hrefFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Muhiq Kapadia",
  description: "Notes on voice AI, real-time audio and frontend work.",
};

export default async function BlogIndex() {
  const posts = await getEntries("blog");
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
      <p className="font-mono text-xs uppercase tracking-widest text-signal">Blog</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Writing</h1>
      <p className="mt-4 text-muted">
        Notes on things I&apos;ve run into while building voice apps and web frontends.
      </p>
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={hrefFor(p)} className="group block py-7">
              <p className="font-mono text-[11px] text-faint">
                {formatDate(p.meta.date)} · {p.readingMinutes} min read
              </p>
              <h2 className="mt-2 text-xl font-medium tracking-tight text-balance transition group-hover:text-signal">
                {p.meta.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.meta.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.meta.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
