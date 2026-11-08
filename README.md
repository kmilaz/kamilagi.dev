# Portfolio — kamilagi.dev

A static portfolio for Kamila Zahwa, an informatics engineering student and full-stack developer.
The landing page is a poster-style one-pager; each project opens into a longer case study covering
what it does, the stack behind it, and what was learned building it.

Built with Astro, hand-written CSS and self-hosted variable fonts. No UI framework, no runtime
JavaScript.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type check + production build
npm run preview  # serve the built site
```

The build writes static HTML to `dist/`.

## Personal data

Every personal detail is in one file: [`src/data/site.ts`](src/data/site.ts).

| What | Where |
| --- | --- |
| Name, role, location, email, LinkedIn, GitHub | `site` object at the top of `site.ts` |
| Availability window and capacity | `site.availability` |
| Hero and about copy | `site.hero`, `site.about` |
| Skills and the three groups | `site.skills` |
| Experience and education | `site.experience`, `site.education` |
| Contact copy | `site.contact` |
| Portrait | `src/assets/images/portrait.jpg` (imported at the top of `site.ts`) |
| CV download | `public/cv.pdf`; label and filename in `site.cv` |
| Projects | `src/content/projects/*.md` |
| Project covers | `src/assets/images/case-*.png` (1600 × 1000) |
| Open Graph images | `src/assets/og/*.png` (1200 × 630) |

The personal data comes from Kamila's CV. The portrait is Kamila's photo, imported at the top of
`site.ts`.

Set the public URL when you deploy. `SITE_URL` is used for canonical links, the sitemap and absolute
Open Graph URLs:

```bash
SITE_URL=https://kamilagi.dev npm run build
```

`astro.config.mjs` falls back to `https://kamilagi.dev`, so the sitemap is valid even before
`SITE_URL` is set.

## CV download

The hero and contact sections share one download button. It points to `/cv.pdf` and uses the
filename in `site.cv`:

```ts
cv: {
  label: "Download CV",
  href: "/cv.pdf",
  fileName: "Kamila-Zahwa-CV.pdf",
},
```

`public/cv.pdf` is the current CV export. Replace it with a newer PDF and keep the filename, or
update both `href` and `fileName` in `site.ts`.

## Projects

Each Markdown file in `src/content/projects/` is one case study. The filename becomes the URL:
`portfolio-site.md` → `/work/portfolio-site/`.

Frontmatter is validated by Zod in [`src/content.config.ts`](src/content.config.ts). Required fields
include `title`, `order`, `year`, `context`, `summary`, `question`, `role`, `timeline`, `team`,
`status`, `tools`, `cover`, `coverAlt`, `outcome` and `draft`. `ogImage` is optional and falls back to
the home Open Graph card.

Add a project by copying an existing file and changing the frontmatter and body. Use `draft: true` to
hide it from the site. Body headings start at `##` because the page owns the `h1`.

## Structure

```
src/
  assets/
    fonts/          self-hosted Fraunces + Inter woff2, licences
    images/         portrait and project covers
    og/             Open Graph cards
  components/
    Header.astro, Footer.astro, ProjectCard.astro
    decor/          aria-hidden SVG stickers (star, seal, squiggle, arrow, flower)
  content/projects/ three case studies
  data/site.ts      all personal data and site copy
  layouts/BaseLayout.astro
  pages/
    index.astro
    work/[slug].astro
    robots.txt.ts
  styles/
    tokens.css      the single token file
    base.css        reset, shared primitives, prose, accessibility
```

## Design tokens

[`src/styles/tokens.css`](src/styles/tokens.css) is the only place that declares colours, font
families, type sizes, spacing, radii, shadows, motion and focus values. Component styles consume the
custom properties; keep it that way so the palette can change in one file.

Breakpoints cannot use custom properties, so they are written literally and documented in the token
file: `36rem` compact, `48rem` tablet, `56rem` case-study stack, `64rem` desktop.

## Accessibility decisions

- Body copy is at least 17px, upright and high contrast. Coral is used for large display type and
  decoration; small coral text uses the darker `--c-coral-deep`, which passes AA on cream.
- Every interactive element has a visible `:focus-visible` outline, including a lime outline on the
  blue contact section.
- Stickers are `aria-hidden`, pointer-events none, and hidden at the tablet breakpoint or smaller.
- All animation is optional and suppressed under `prefers-reduced-motion`.
- Images carry descriptive alt text.
- The page has a skip link, landmarks, one `h1`, and a logical heading order.

## Images

`<Image />` from `astro:assets` handles the portrait and project covers with responsive widths and
WebP output. The OG images are passed through `getImage` so they get an absolute URL at build time.

Project covers are typographic and generated from the same palette as the site. Replace a cover by
swapping the PNG in `src/assets/images/` and keeping the filename; screenshots can replace them
without touching the Markdown.
