---
title: "Lab Applied Informatics"
order: 5
year: "2025"
context: "Team project · Laboratory information system"
summary: "A public portal and admin panel for the Applied Informatics Laboratory at Politeknik Negeri Malang."
question: "How can a laboratory publish its people, work and news while giving staff one place to maintain all of it?"
role: "Full-stack development: public pages, admin CRUD, member and partner modules, gallery filters, PostgreSQL schema."
timeline: "Nov — Dec 2025"
team: "Four-person team: Kamila Zahwa, Muhammad Zuhdi, Nabhan Rizqi Julian Saputro, Otavia Ulandari"
status: "Live at appliedinformaticspolinema.alwaysdata.net"
tools:
  - "PHP"
  - "PostgreSQL"
  - "JavaScript"
  - "CSS"
cover: "../../assets/images/case-lab-applied-informatics-cover.png"
coverAlt: "Screenshot of the Lab Applied Informatics homepage with its welcome section, navigation and lab photo."
ogImage: "../../assets/og/og-lab-applied-informatics.png"
outcome: "The public portal and admin panel are live; the repository records 71 commits from me."
draft: false
---

## What it is

The Applied Informatics Laboratory at Politeknik Negeri Malang needed one place to present its work and one place to maintain it. The result has two sides: a public portal with the lab profile, products, members, news, gallery and partners; and an admin panel for the people who keep that content current.

The public side has to be credible to visitors. The admin side has to make routine updates possible without touching the database.

## My part

I worked across the public site, the admin panel and the database. The main threads in my commits:

- **Member pages:** a member directory, profile detail views, dynamic tab counts and related data for each person.
- **Partners:** the Partner model, admin CRUD, create/edit pages and the public partner listing.
- **Gallery:** filters, empty states, error logging and the public gallery view.
- **Admin structure:** sidebar links, member CRUD, validation feedback and header/navigation updates.
- **Database:** an initial PostgreSQL dump and schema work for the shared data.

The role therefore spans the full stack rather than a single layer. The public and admin features were built against the same records.

## How it fits together

The system uses a custom MVC structure in native PHP. Controllers handle the public pages and the admin area; models own the PostgreSQL queries; views render the two surfaces. Authentication separates admin and editor access, so an editor can maintain their own material without full access to every record.

The important architectural choice was to model the lab's content once and expose it twice: read-only on the public site, editable in the admin panel. That kept the public pages from turning into hand-edited HTML.

## What I learned

- Empty states are part of the feature. A gallery or partner list without data still needs to explain what to do next.
- Filters and counts make a directory usable; without them, a member page becomes an undifferentiated list of cards.
- The database structure determines how straightforward the admin panel is. Defining the relationships early reduced work on every CRUD screen.

## Status

The public portal and admin panel are live at [appliedinformaticspolinema.alwaysdata.net](https://appliedinformaticspolinema.alwaysdata.net/). The source is public in the [Lab.Applied-Informatics repository](https://github.com/rzjuliannofficial/Lab.Applied-Informatics), which lists the four-person team.
