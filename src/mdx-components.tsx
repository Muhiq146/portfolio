import type { MDXComponents } from "mdx/types";

// Article styling lives in the .prose rules in globals.css.
const components: MDXComponents = {
  a: ({ href = "", ...props }) =>
    href.startsWith("http") ? (
      <a href={href} target="_blank" rel="noreferrer" {...props} />
    ) : (
      <a href={href} {...props} />
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
