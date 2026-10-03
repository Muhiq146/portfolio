import type { Metadata } from "next";
import Article from "@/components/Article";
import { getEntries, getEntry, getSlugs, type Collection } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

// Shared implementation for /case-studies/[slug] and /blog/[slug].
export function articleRoute(collection: Collection) {
  return {
    generateStaticParams: () => getSlugs(collection).map((slug) => ({ slug })),

    generateMetadata: async ({ params }: Params): Promise<Metadata> => {
      const { slug } = await params;
      const { meta } = await getEntry(collection, slug);
      return {
        title: `${meta.title} | Muhiq Kapadia`,
        description: meta.description,
        openGraph: { title: meta.title, description: meta.description, type: "article" },
      };
    },

    Page: async ({ params }: Params) => {
      const { slug } = await params;
      const { Body, ...entry } = await getEntry(collection, slug);
      const more = (await getEntries(collection)).filter((e) => e.slug !== slug).slice(0, 2);
      return <Article entry={entry} Body={Body} more={more} />;
    },
  };
}
