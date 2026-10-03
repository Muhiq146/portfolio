import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

export type Collection = "case-studies" | "blog";

export type EntryMeta = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  context?: string; // case studies: what kind of product, which role
};

export type Entry = {
  collection: Collection;
  slug: string;
  meta: EntryMeta;
  readingMinutes: number;
};

const dirFor = (collection: Collection) => path.join(process.cwd(), "src", "content", collection);

export const hrefFor = (e: Pick<Entry, "collection" | "slug">) => `/${e.collection}/${e.slug}/`;

export function getSlugs(collection: Collection): string[] {
  return readdirSync(dirFor(collection))
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// Static import prefixes per collection so the bundler knows which files to include.
async function importEntry(collection: Collection, slug: string) {
  return collection === "blog"
    ? import(`@/content/blog/${slug}.mdx`)
    : import(`@/content/case-studies/${slug}.mdx`);
}

export async function getEntry(
  collection: Collection,
  slug: string,
): Promise<Entry & { Body: ComponentType }> {
  const mod = await importEntry(collection, slug);
  const words = readFileSync(path.join(dirFor(collection), `${slug}.mdx`), "utf8").split(/\s+/).length;
  return {
    collection,
    slug,
    meta: mod.meta as EntryMeta,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    Body: mod.default,
  };
}

export async function getEntries(collection: Collection): Promise<Entry[]> {
  const entries = await Promise.all(getSlugs(collection).map((s) => getEntry(collection, s)));
  return entries
    .map(({ collection, slug, meta, readingMinutes }) => ({ collection, slug, meta, readingMinutes }))
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
