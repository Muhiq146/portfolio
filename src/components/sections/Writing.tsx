import Link from "next/link";
import EntryCard from "@/components/EntryCard";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { getEntries } from "@/lib/content";

export default async function Writing() {
  const posts = (await getEntries("blog")).slice(0, 3);
  return (
    <section id="writing" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading index="07" eyebrow="Writing" title="From the blog">
            Notes on things I&apos;ve run into while building voice apps and web frontends.
          </SectionHeading>
          <Link href="/blog/" className="mb-10 text-sm text-muted transition hover:text-signal">
            All posts →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <EntryCard entry={p} showDate />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
