import Link from "next/link";
import type { ComponentType } from "react";
import EntryCard from "@/components/EntryCard";
import { Avatar, Container, Stack } from "@/components/ui";
import { profile } from "@/content/site";
import { formatDate, type Entry } from "@/lib/content";

const LABELS = { "case-studies": "Case study", blog: "Writing" } as const;
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
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Link href={back.href} className="text-sm text-muted transition hover:text-accent">
          ← {back.label}
        </Link>
        <header className="mt-10 border-b border-line pb-10">
          <p className="font-serif text-lg italic text-accent">
            {LABELS[collection]}
            {meta.context && <span className="text-muted"> · {meta.context}</span>}
          </p>
          <h1 className="mt-2 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-balance sm:text-6xl">
            {meta.title}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted text-pretty">{meta.description}</p>
          <div className="mt-8 flex items-center gap-3">
            <Avatar size={40} />
            <div className="text-sm">
              <p className="font-medium">{profile.name}</p>
              <p className="text-faint">
                {formatDate(meta.date)} · {entry.readingMinutes} min read
              </p>
            </div>
          </div>
          <Stack items={meta.tags} className="mt-6" />
        </header>
        <div className="prose mt-12">
          <Body />
        </div>

        <aside className="mt-16 flex flex-col gap-5 rounded-2xl bg-surface p-7 sm:flex-row sm:items-start sm:p-8">
          <Avatar size={52} />
          <div>
            <p className="font-serif text-2xl font-medium leading-snug tracking-tight">
              Working on something similar? I&apos;m happy to compare notes.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Email me at{" "}
              <a href={`mailto:${profile.email}`} className="ink-link text-ink">
                {profile.email}
              </a>{" "}
              or message me on{" "}
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="ink-link text-ink">
                LinkedIn
              </a>
              . If you&apos;d have done it differently, I&apos;d like to hear that too.
            </p>
          </div>
        </aside>
      </article>

      {more.length > 0 && (
        <section className="bg-surface/70 py-16">
          <Container>
            <h2 className="font-serif text-2xl italic text-muted">Read next</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line-strong">
              {more.map((e) => (
                <li key={e.slug}>
                  <EntryCard entry={e} showDate={e.collection === "blog"} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </main>
  );
}
