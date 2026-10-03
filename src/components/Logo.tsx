import type { CSSProperties } from "react";

// "MK" monogram from Muhiq's own sketch: the M's right leg doubles as the K's stem,
// and the K's arms float as a separate chevron.
export const LOGO_PATHS = [
  "M2 20V2l6.5 10.5", // M: left leg + first diagonal
  "M10 11.5 16 2v18", // M: second diagonal + shared stem
  "M27 2l-7.5 9 8.5 7", // K: arms
];

export default function Logo({
  className = "",
  style,
  strokeWidth = 2.6,
  title,
}: {
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 30 22"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {LOGO_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
