import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { LOGO_PATHS } from "@/components/Logo";
import { profile, SITE_URL } from "@/content/site";

// Share card shown when a page is posted on LinkedIn, WhatsApp, X and so on.
export const OG_SIZE = { width: 1200, height: 630 };

/** File name under /og/ for an article's share image. */
export const ogFileFor = (e: { collection: string; slug: string }) => `${e.collection}-${e.slug}.png`;

const COLORS = { paper: "#f5f0e6", ink: "#1e1a16", muted: "#6b6258", accent: "#b24a25", line: "#ddd2bf" };

const font = (file: string) => readFile(path.join(process.cwd(), "src/assets/og", file));

export async function renderOgImage({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  const [fraunces, frauncesItalic, geist, geistMedium] = await Promise.all([
    font("fraunces-500.ttf"),
    font("fraunces-500-italic.ttf"),
    font("geist-400.ttf"),
    font("geist-500.ttf"),
  ]);

  // Long titles step down so they always fit in three lines.
  const titleSize = title.length > 70 ? 56 : title.length > 45 ? 66 : 78;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: COLORS.paper,
          color: COLORS.ink,
          fontFamily: "Geist",
          borderBottom: `14px solid ${COLORS.accent}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg
            width="52"
            height="38"
            viewBox="0 0 30 22"
            fill="none"
            stroke={COLORS.accent}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {LOGO_PATHS.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
          <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 32 }}>{profile.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Fraunces Italic", fontSize: 32, color: COLORS.accent }}>
            {label}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontFamily: "Fraunces",
              fontSize: titleSize,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", marginTop: 22, fontSize: 28, color: COLORS.muted, maxWidth: 950 }}>
              {subtitle}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${COLORS.line}`,
            paddingTop: 22,
            fontSize: 24,
            fontWeight: 500,
            color: COLORS.muted,
          }}
        >
          <span>{profile.role}, Ahmedabad</span>
          <span>{SITE_URL.replace("https://", "")}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
        { name: "Fraunces Italic", data: frauncesItalic, style: "normal", weight: 500 },
        { name: "Geist", data: geist, style: "normal", weight: 400 },
        { name: "Geist", data: geistMedium, style: "normal", weight: 500 },
      ],
    },
  );
}
