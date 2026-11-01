import Link from "next/link";
import { formatDate, hrefFor, type Entry } from "@/lib/content";

// One row in an index of case studies or posts: meta on the left, title and summary on the right.
export default function EntryCard({ entry, showDate = false }: { entry: Entry; showDate?: boolean }) {
  const { meta } = entry;
  return (
    <Link
      href={hrefFor(entry)}
      className="group grid gap-3 py-8 sm:grid-cols-[11rem_1fr_auto] sm:gap-8"
    >
      <p className="text-sm text-faint">
        {showDate ? formatDate(meta.date) : meta.context}
        <span className="block">{entry.readingMinutes} min read</span>
      </p>
      <div>
        <h3 className="font-serif text-2xl font-medium leading-snug tracking-tight text-balance transition group-hover:text-accent">
          {meta.title}
        </h3>
        <p className="mt-2 max-w-2xl leading-relaxed text-muted text-pretty">{meta.description}</p>
      </div>
      <span
        aria-hidden
        className="hidden self-center text-xl text-faint transition group-hover:translate-x-1 group-hover:text-accent sm:block"
      >
        →
      </span>
    </Link>
  );
}
