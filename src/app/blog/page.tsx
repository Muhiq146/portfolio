import type { Metadata } from "next";
import Link from "next/link";
import EntryCard from "@/components/EntryCard";
import { Container } from "@/components/ui";
import { profile } from "@/content/site";
import { getEntries, hrefFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on voice AI, real-time audio and system design.",
  alternates: { canonical: "/blog/" },
  openGraph: { url: "/blog/", title: "Writing", description: "Notes on voice AI, real-time audio and system design." },
};

export default async function BlogIndex() {
  const [posts, caseStudies] = await Promise.all([getEntries("blog"), getEntries("case-studies")]);
  return (
    <main className="pb-24 pt-14 sm:pt-20">
      <Container>
        <p className="font-serif text-lg italic text-accent">Writing</p>
        <h1 className="mt-1 font-serif text-5xl font-medium tracking-tight sm:text-7xl">Notes from the work</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Things I&apos;ve run into while building voice apps and the systems behind them.
        </p>
        <ul className="mt-14 divide-y divide-line border-y border-line">
          {posts.map((p) => (
            <li key={p.slug}>
              <EntryCard entry={p} showDate />
            </li>
          ))}
        </ul>
      </Container>

      {/* Case studies are the longer pieces; listing them here keeps a short post list from ending in blank paper. */}
      <section className="mt-20 bg-surface/70 py-16">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-lg italic text-accent">Longer reads</p>
            <h2 className="mt-1 font-serif text-3xl font-medium tracking-tight">Case studies</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Real problems from my work, start to finish: what broke, how I found it and what I changed.
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line-strong lg:col-span-8">
            {caseStudies.map((c) => (
              <li key={c.slug}>
                <Link
                  href={hrefFor(c)}
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <span>
                    <span className="block font-serif text-xl font-medium leading-snug transition group-hover:text-accent">
                      {c.meta.title}
                    </span>
                    <span className="mt-1 block text-sm text-faint">
                      {c.meta.context} · {c.readingMinutes} min read
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-faint transition group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="mt-16">
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          I also share shorter notes on{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="ink-link text-ink">
            LinkedIn
          </a>
          . If something here was useful or you&apos;d do it differently,{" "}
          <Link href="/#contact" className="ink-link text-ink">
            I&apos;d like to hear about it
          </Link>
          .
        </p>
      </Container>
    </main>
  );
}
