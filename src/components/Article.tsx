import Link from "next/link";
import type { ComponentType } from "react";
import EntryCard from "@/components/EntryCard";
import { Avatar, Tag } from "@/components/ui";
import { profile } from "@/content/site";
import { formatDate, type Entry } from "@/lib/content";

const LABELS = { "case-studies": "Case study", blog: "Blog" } as const;
const BACK = {
  "case-studies": { href: "/#case-studies", label: "All case studies" },
  blog: { href: "/blog/", label: "All posts" },
} as const;

export default function Article({
  entry,
  Body,
  more,
}: {
  entry: Entry;
  Body: ComponentType;
  more: Entry[];
}) {
  const { meta, collection } = entry;
  const back = BACK[collection];

  return (
    <main>
      <article className="mx-auto max-w-3xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16">
        <Link href={back.href} className="font-mono text-xs text-faint transition hover:text-signal">
          ← {back.label}
        </Link>
        <header className="mt-8 border-b border-line pb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">
            {LABELS[collection]}
            {meta.context && <span className="text-faint"> · {meta.context}</span>}
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{meta.description}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <Avatar size={36} />
              <div className="text-sm">
                <p>{profile.name}</p>
                <p className="font-mono text-[11px] text-faint">
                  {formatDate(meta.date)} · {entry.readingMinutes} min read
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {meta.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
          </div>
        </header>
        <div className="prose mt-10">
          <Body />
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-faint">Read next</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {more.map((e) => (
                <EntryCard key={e.slug} entry={e} showDate={e.collection === "blog"} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
