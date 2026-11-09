---
title: "Greenshift"
order: 3
year: "2026"
context: "Project · Green financing MRV"
summary: "An MRV platform for green financing in Indonesia: submit an energy-efficiency project, score it, match a vendor, and turn it into a fundable blueprint."
question: "How does an energy-efficiency project move from submission to a funded blueprint?"
role: "Development"
timeline: "Jul 2026 — Sep 2026"
team: "Team project"
status: "Built Jul — Sep 2026"
tools:
  - "TanStack Start"
  - "React"
  - "Vite"
  - "Hono"
  - "Tailwind CSS"
  - "Shadcn"
  - "Drizzle ORM"
  - "Cloudflare Workers"
  - "Cloudflare D1"
  - "Cloudflare KV"
  - "Cloudflare R2"
cover: "../../assets/images/case-greenshift-cover.png"
coverAlt: "Screenshot of the Greenshift landing page showing the headline and the project dashboard."
ogImage: "../../assets/og/og-greenshift.png"
outcome: "Built July to September 2026."
draft: false
---

## What it is

Greenshift is an MRV — measurement, reporting and verification — platform for green financing in
Indonesia. It connects the companies that need energy-efficiency work with the vendors who can
deliver it and the partners who can fund it.

## The flow

1. A company submits an industrial energy-efficiency project.
2. GreenShift scores the project.
3. The company is matched with a vendor.
4. The verified project becomes a Green Project Blueprint.
5. A licensed securities partner funds the blueprint.

The product is the path between those steps: each actor needs a different view of the same project,
and the project only becomes fundable after the verification stage.

## Stack

- **Client:** TanStack Start, React, Vite, Tailwind CSS and Shadcn.
- **API:** Hono on Cloudflare Workers.
- **Data:** Drizzle ORM over Cloudflare D1 (SQLite), Cloudflare KV for key-value lookups, and
  Cloudflare R2 for object storage.

## What I learned

- A multi-actor flow has to be modelled before it can be designed. The same project record means
  different things to a company, a vendor, a verifier and a funder.
- TanStack Start's routing keeps the server and client parts of a page in one place.
- Cloudflare's primitives split cleanly: D1 for relational records, KV for lookups, R2 for files.

## Status

Built from July to September 2026. The deployment is at
[greenshift.fiinnyy.my.id](https://greenshift.fiinnyy.my.id).
