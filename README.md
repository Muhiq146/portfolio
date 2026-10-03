# Muhiq Kapadia, personal site

Next.js 16 + Tailwind CSS v4, exported as a static site.

```bash
npm install
npm run dev     # http://localhost:5000
npm run build   # static output in out/
```

## Editing

- **All copy** lives in `src/content/site.ts`. Current-employer work is described by capability only. Don't add product, client or repo names there.
- **Case studies** live in `src/content/case-studies/`, **blog posts** in `src/content/blog/`. Each is an `.mdx` file that starts with `export const meta = { title, description, date, tags }` (case studies also take `context`). Add a file and it shows up on the site automatically. Keep current-employer work anonymous: no product, client or repo names, and no copied company code.
- **Headshot:** drop a square photo at `public/headshot.jpg` and rebuild. The "MK" monogram is used until then.
- **Resume:** drop a PDF at `public/resume.pdf` and rebuild. Resume links appear in the nav and contact section only when the file exists. Use a version without current-employer project names.

## Deploying

Any static host works. On Vercel, import the repo with `site/` as the root directory. On Netlify or GitHub Pages, publish the `out/` folder.
