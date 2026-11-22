---
title: "This site, built like a CV"
order: 1
year: "2026"
context: "Personal project · Portfolio"
summary: "A CV-shaped portfolio built with Astro and deployed on Cloudflare Pages, created to learn the framework and publish the work outside a repository."
question: "How simple can the structure be while the page still reads like a designed CV?"
role: "Design, front-end, content, deployment"
timeline: "Nov 2026 — Present"
team: "Solo"
status: "Live at kamilagi.dev"
tools:
  - "Astro"
  - "Hand-written CSS"
  - "Cloudflare Pages"
cover: "../../assets/images/case-portfolio-cover.png"
coverAlt: "Typographic cover for the kamilagi.dev portfolio case study."
ogImage: "../../assets/og/og-portfolio.png"
outcome: "Live on Cloudflare Pages."
draft: false
---

## The brief

I wanted a portfolio that reads like the document it replaces: a CV you can scroll, with clear
sections and a structure of its own. The constraint was structural — keep the markup simple enough
that I could explain every part of it.

The site also became a way to learn Astro, broaden my front-end work, and publish the projects
outside their repositories.

## How it is built

Astro renders the pages statically. Personal data lives in `src/data/site.ts`; each project is a
Markdown file in a content collection, so adding a case study means adding a file rather than
touching the layout. Styling is hand-written CSS driven by a single set of design tokens.

The site is deployed on Cloudflare Pages. There is no client-side framework and no runtime
JavaScript beyond what the browser provides.

## What I learned

- Astro's content collections make a project list a data problem, not a layout problem.
- A static site still needs a image pipeline: covers and the Open Graph cards are generated at
  build time.
- Simple structure is a feature. A section that cannot justify its place is removed.

## What is next

The portrait and project covers now use real images. The next step is to keep the case studies
current as the projects evolve.
