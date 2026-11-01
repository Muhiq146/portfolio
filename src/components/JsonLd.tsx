import { profile, SITE_URL } from "@/content/site";

// Structured data for search engines. "<" is escaped so content can never close the script tag early.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const personLd = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: profile.name,
  url: `${SITE_URL}/`,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Voice AI", "LLMs", "WebRTC", "LiveKit", "RAG", "React", "Next.js", "FastAPI", "Node.js"],
};
