---
title: "MarkYours"
order: 2
year: "2026"
context: "Personal project · Browser studio app"
summary: "A self-studio app that runs directly in the browser, built with React, Hono, Drizzle and Cloudflare."
question: "Can a studio app run entirely in the browser without a desktop install?"
role: "Planning, front-end, backend, data"
timeline: "Sep 2026 — Present"
team: "Solo, co-developed with AI agents"
status: "Live at markyours.kamilagi.dev"
tools:
  - "React"
  - "Vite"
  - "Hono"
  - "Tailwind CSS"
  - "Cloudflare Workers"
  - "Drizzle ORM"
  - "Cloudflare D1"
  - "Cloudflare R2"
cover: "../../assets/images/case-markyours-cover.png"
coverAlt: "Typographic cover for the MarkYours browser studio app case study."
ogImage: "../../assets/og/og-markyours.png"
outcome: "Live at markyours.kamilagi.dev, still in progress."
draft: false
---

## What it is

MarkYours is a self-studio app you open in the browser. There is nothing to install: the client,
the API and the stored files all live online.

The project is planned with `grill-with-docs` and co-developed with AI agents. Writing the plan
down before implementation keeps the scope and the data model reviewable as the app grows.

## Stack

- **Client:** React and Vite, styled with Tailwind CSS.
- **API:** Hono running on Cloudflare Workers.
- **Data:** Drizzle ORM over Cloudflare D1 (SQLite).
- **Files:** Cloudflare R2 object storage.

## How it fits together

The React client talks to a Hono API on Workers. Drizzle models the relational data in D1, and R2
holds the objects the studio produces. Keeping every layer on Cloudflare means deployment is one
platform rather than several services to wire together.

## What I learned

- Planning with AI agents works when the plan is an artifact, not a conversation. The documentation
  is the contract.
- Drizzle makes the schema readable in TypeScript, which matters when the same models are used by
  the API and the client.
- Object storage changes what belongs in a database: metadata in D1, blobs in R2.

## Status

Live at [markyours.kamilagi.dev](https://markyours.kamilagi.dev). The app is still being built.
