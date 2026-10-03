import Link from "next/link";
import { Tag } from "@/components/ui";
import { formatDate, hrefFor, type Entry } from "@/lib/content";

export default function EntryCard({ entry, showDate = false }: { entry: Entry; showDate?: boolean }) {
  const { meta } = entry;
  return (
    <Link
      href={hrefFor(entry)}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-line-strong"
    >
      <p className="font-mono text-[11px] text-faint">
        {showDate ? formatDate(meta.date) : meta.context}
        <span> · {entry.readingMinutes} min read</span>
      </p>
      <h3 className="mt-3 text-lg font-medium tracking-tight text-balance transition group-hover:text-signal">
        {meta.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{meta.description}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {meta.tags.slice(0, 3).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>
      <span className="mt-5 text-sm text-ink transition group-hover:text-signal">Read →</span>
    </Link>
  );
}
