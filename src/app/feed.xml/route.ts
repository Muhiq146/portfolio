import { profile, SITE_URL } from "@/content/site";
import { getEntries, hrefFor } from "@/lib/content";

export const dynamic = "force-static";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// RSS for posts and case studies together, newest first.
export async function GET() {
  const entries = [...(await getEntries("blog")), ...(await getEntries("case-studies"))].sort((a, b) =>
    b.meta.date.localeCompare(a.meta.date),
  );
  const items = entries
    .map((e) => {
      const url = `${SITE_URL}${hrefFor(e)}`;
      return `    <item>
      <title>${escape(e.meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${e.meta.date}T00:00:00Z`).toUTCString()}</pubDate>
      <category>${e.collection === "blog" ? "Writing" : "Case study"}</category>
      <description>${escape(e.meta.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(profile.name)}: writing and case studies</title>
    <link>${SITE_URL}/</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Notes on voice AI, real-time audio and system design.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
