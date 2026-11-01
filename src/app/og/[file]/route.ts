import { getEntries, type Collection } from "@/lib/content";
import { ogFileFor, renderOgImage } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

const COLLECTIONS: Collection[] = ["blog", "case-studies"];
const LABELS: Record<Collection, string> = { blog: "Writing", "case-studies": "Case study" };

// Share images as real .png files (/og/home.png, /og/blog-<slug>.png, ...), so every host
// serves them with an image content type that LinkedIn and WhatsApp accept.
async function allCards() {
  const cards = new Map<string, { label: string; title: string; subtitle?: string }>();
  cards.set("home.png", {
    label: "Software engineer",
    title: "I build real-time, voice-first AI products.",
    subtitle: "Voice agents, RAG and multi-agent systems, from React frontends to FastAPI backends.",
  });
  for (const collection of COLLECTIONS) {
    for (const e of await getEntries(collection)) {
      cards.set(ogFileFor(e), { label: LABELS[collection], title: e.meta.title, subtitle: e.meta.context });
    }
  }
  return cards;
}

export async function generateStaticParams() {
  return [...(await allCards()).keys()].map((file) => ({ file }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const card = (await allCards()).get(file);
  if (!card) return new Response("Not found", { status: 404 });
  return renderOgImage(card);
}
