---
title: "Koze-Kost"
order: 4
year: "2026"
context: "Team project · Kos discovery platform"
summary: "A kos discovery platform that connects renters, property owners and admins around listings, maps, chat and room availability."
question: "How can a renter find a kos that fits while owners keep availability current and admins keep the listings trustworthy?"
role: "Front-end"
timeline: "2026"
team: "Five-person team: Tri Aldy Kurniawan, Fatah, Kamila Zahwa, Aldyth, Triya"
status: "Prototype · staging host offline"
tools:
  - "Laravel 12"
  - "Vue 3"
  - "Inertia.js"
  - "Tailwind CSS"
  - "Leaflet"
  - "SQLite"
cover: "../../assets/images/case-koze-cover.png"
coverAlt: "Typographic cover for Koze-Kost showing a stylized kos listing card with a map pin and a chat bubble."
ogImage: "../../assets/og/og-koze.png"
outcome: "Prototype built; source is on GitHub and the old staging host is offline."
draft: false
---

## What it is

Koze-Kost is a platform for finding and listing kos. It brings three roles into one system: renters looking for a room, owners managing their properties and room availability, and admins maintaining the platform.

The public side is a listing and search experience. A renter can browse kos, look at the area on a map, read the details, and start a conversation with the owner. Owners manage listings, update availability and answer messages. Admins manage users, content and the ads that keep the platform running.

## My part

The project's task breakdown documents my contribution across the interface and the product presentation:

- The application logo.
- The search-results and property-detail screens.
- The dynamic search page, connected to the listing data.
- The chat interface.
- The profile-editing flow.
- The project report.

Most of this work is on the front end, with the search and profile flows connected to the Laravel application rather than left as static mockups.

## How it fits together

The app uses Laravel 12 as the application layer, Vue 3 with Inertia.js for the interface, Tailwind for styling, and Leaflet for the map. Spatie's permission package separates the renter, owner and admin roles.

The key product decision is where the transaction ends. Koze-Kost supports discovery, availability and conversation, but payment happens outside the system. This keeps the build focused on finding a room and speaking with the property owner.

## What I learned

- A multi-role product needs each role's empty states and next actions designed, rather than only the main listing page.
- Search is a data feature before it is a screen. The interface is only as good as the listing fields behind it.
- A map and a chat window are different interactions, but both need a clear fallback when data or the other person is unavailable.

## Status

The project is a prototype. The source is public in the [Koze-Kost repository](https://github.com/m-fatahillah/koze-kost-project), and the old staging host `koze.trialdyk.id` no longer resolves. It has not been deployed as a live rental service.
