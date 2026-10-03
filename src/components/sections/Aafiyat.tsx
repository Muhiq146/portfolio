import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionHeading, Tag } from "@/components/ui";
import { aafiyat } from "@/content/site";

export default function Aafiyat() {
  return (
    <section id="aafiyat" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading index="02" eyebrow="My own project" title={aafiyat.name}>
          {aafiyat.intro}
        </SectionHeading>

        <div className="grid gap-4 lg:grid-cols-2">
          {aafiyat.products.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-bg p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{p.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-faint">{p.tag}</p>
                  </div>
                  {"url" in p && p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted transition hover:border-signal hover:text-signal"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
                <p className="mt-4 text-pretty text-muted">{p.body}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <Link
            href={aafiyat.caseStudy}
            className="group flex flex-col gap-2 rounded-2xl border border-signal/40 bg-signal-dim p-6 transition hover:border-signal sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-signal">Case study</p>
              <p className="mt-1 text-lg font-medium tracking-tight">
                Turning volunteers&apos; voice notes into verification forms, in Hinglish
              </p>
            </div>
            <span className="text-sm text-ink transition group-hover:text-signal">Read →</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
