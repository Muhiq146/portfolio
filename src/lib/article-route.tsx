import type { Metadata } from "next";
import Article from "@/components/Article";
import JsonLd, { personLd } from "@/components/JsonLd";
import { profile, SITE_URL } from "@/content/site";
import { getEntries, getEntry, getSlugs, hrefFor, type Collection } from "@/lib/content";
import { ogFileFor } from "@/lib/og";

type Params = { params: Promise<{ slug: string }> };

const SECTION = {
  blog: { name: "Writing", path: "/blog/" },
  "case-studies": { name: "Case studies", path: "/#case-studies" },
} as const;

// Shared implementation for /case-studies/[slug] and /blog/[slug].
export function articleRoute(collection: Collection) {
  return {
    generateStaticParams: () => getSlugs(collection).map((slug) => ({ slug })),

    generateMetadata: async ({ params }: Params): Promise<Metadata> => {
      const { slug } = await params;
      const { meta } = await getEntry(collection, slug);
      const url = hrefFor({ collection, slug });
      const image = { url: `/og/${ogFileFor({ collection, slug })}`, width: 1200, height: 630, alt: meta.title };
      return {
        title: meta.title,
        description: meta.description,
        keywords: meta.tags,
        alternates: { canonical: url },
        openGraph: {
          type: "article",
          url,
          title: meta.title,
          description: meta.description,
          publishedTime: meta.date,
          authors: [profile.name],
          tags: meta.tags,
          images: [image],
        },
        twitter: { card: "summary_large_image", images: [image.url] },
      };
    },

    Page: async ({ params }: Params) => {
      const { slug } = await params;
      const { Body, ...entry } = await getEntry(collection, slug);
      const more = (await getEntries(collection)).filter((e) => e.slug !== slug).slice(0, 2);
      const url = `${SITE_URL}${hrefFor(entry)}`;
      const section = SECTION[collection];

      return (
        <>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BlogPosting",
                  headline: entry.meta.title,
                  description: entry.meta.description,
                  datePublished: entry.meta.date,
                  url,
                  mainEntityOfPage: url,
                  image: `${SITE_URL}/og/${ogFileFor(entry)}`,
                  keywords: entry.meta.tags.join(", "),
                  author: { "@id": personLd["@id"] },
                },
                personLd,
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                    { "@type": "ListItem", position: 2, name: section.name, item: `${SITE_URL}${section.path}` },
                    { "@type": "ListItem", position: 3, name: entry.meta.title, item: url },
                  ],
                },
              ],
            }}
          />
          <Article entry={entry} Body={Body} more={more} />
        </>
      );
    },
  };
}
