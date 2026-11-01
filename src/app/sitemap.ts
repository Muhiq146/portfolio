import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { getEntries, hrefFor } from "@/lib/content";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = [...(await getEntries("case-studies")), ...(await getEntries("blog"))];
  const newest = entries.map((e) => e.meta.date).sort().at(-1);
  return [
    { url: `${SITE_URL}/`, lastModified: newest, priority: 1 },
    { url: `${SITE_URL}/blog/`, lastModified: newest, priority: 0.8 },
    ...entries.map((e) => ({
      url: `${SITE_URL}${hrefFor(e)}`,
      lastModified: e.meta.date,
      priority: 0.7,
    })),
  ];
}
