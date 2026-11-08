import portrait from "../assets/images/portrait-placeholder.png";

/**
 * PERSONAL DATA
 * ------------
 * Every personal detail lives in this file. Values below are taken from
 * work/docs/cv.pdf; the portrait is still a placeholder. Project writing
 * lives in src/content/projects/*.md.
 */
export const site = {
  name: "Kamila Zahwa",
  firstName: "Kamila",
  lastName: "Zahwa",
  role: "Full-stack web developer and informatics engineering student",
  description:
    "Portfolio of Kamila Zahwa, an informatics engineering student and full-stack web developer in Malang.",
  location: "Malang City, East Java",
  email: "kamilazhwa@gmail.com",
  linkedin: {
    label: "linkedin.com/in/kamila-zahwa",
    href: "https://www.linkedin.com/in/kamila-zahwa",
  },
  github: {
    label: "github.com/kmilaz",
    href: "https://github.com/kmilaz",
  },
  cv: {
    label: "Download CV",
    href: "/cv.pdf",
    fileName: "Marcella-Aurelia-CV.pdf",
  },
  portrait: {
    src: portrait,
    alt: "Placeholder portrait of Kamila Zahwa.",
  },
  availability: {
    status: "Open",
    window: "From January 2027",
    arrangement: "East Java · on-site or hybrid",
    capacity: "",
  },
  hero: {
    eyebrow: "Portfolio — 2026 edition",
    lede: "Informatics engineering student and full-stack developer. I build web apps end to end — React and Astro in front, Hono, Drizzle and Cloudflare behind.",
    supporting:
      "This site, a browser-based studio app and an MRV platform for green financing. I keep the structure simple so the next change is obvious.",
  },
  about: {
    paragraphs: [
      "I'm an informatics engineering student at Politeknik Negeri Malang, studying toward a Sarjana Terapan Teknik Informatika (2024–2028). Most of what I know comes from building: this portfolio, MarkYours, and Greenshift.",
      "I work across the stack — React, Astro and Tailwind CSS on the frontend; Hono, Drizzle ORM and Cloudflare Workers, D1, R2 and KV on the backend. I care about keeping the structure simple enough that the next change is obvious.",
      "Outside coursework I'm vice chairman of Workshop Riset Informatika, where I coordinate the divisions behind the miniclass program and mentor the 2026 board's event coordinators through their event cycle.",
    ],
    honesty: {
      title: "The honest bit",
      body: "I'm still a student. None of these projects are commercial client work, and MarkYours is co-developed with AI agents. I'd rather show what I actually built and what I don't know yet than pad the list.",
    },
    facts: [
      { label: "Based in", value: "Malang City, East Java" },
      {
        label: "Studying",
        value: "Informatics Engineering, Politeknik Negeri Malang, 2024–2028",
      },
      { label: "GPA", value: "3.94 / 4.0" },
      { label: "Leading", value: "Workshop Riset Informatika, vice chairman" },
    ],
    quote: "A good screen is usually the result of a better question.",
  },
  skills: [
    {
      id: "comfortable",
      tier: "01",
      title: "Languages",
      note: "Languages I've written across coursework, projects and experiments.",
      items: ["Java", "TypeScript", "JavaScript", "HTML / CSS", "PHP", "Python", "Dart"],
    },
    {
      id: "learning",
      tier: "02",
      title: "Frameworks & tools",
      note: "What I reach for when building: frontend, backend and the glue in between.",
      items: [
        "React",
        "Astro",
        "Vite",
        "Tailwind CSS",
        "Shadcn",
        "Hono",
        "Drizzle ORM",
        "Laravel",
        "Flutter",
        "Vitest",
        "Git",
      ],
    },
    {
      id: "interested",
      tier: "03",
      title: "Data & platforms",
      note: "Storage, deployment and analysis across my projects and coursework.",
      items: [
        "Cloudflare Workers",
        "Cloudflare D1",
        "Cloudflare R2",
        "Cloudflare KV",
        "MySQL",
        "SQLite",
        "Power BI",
        "Pentaho Data Integration",
        "Machine learning",
        "Business intelligence",
      ],
    },
  ],
  experience: [
    {
      period: "Jan 2026 — Jan 2027",
      role: "Vice Chairman",
      org: "Workshop Riset Informatika · Politeknik Negeri Malang",
      note: "Coordinate the divisions that run the miniclass program and other WRI events, and mentor the 2026 executive board's event coordinators through each event cycle.",
    },
    {
      period: "Jan 2025 — Jan 2026",
      role: "Public Relations Division Member",
      org: "Workshop Riset Informatika · Politeknik Negeri Malang",
      note: "Owned promotional strategy, event announcements and participant inquiries, acting as the main liaison between applicants, participants and the committee.",
    },
    {
      period: "Oct 2024 — Present",
      role: "Member & miniclass mentor",
      org: "Workshop Riset Informatika · Politeknik Negeri Malang",
      note: "Completed the miniclass program as a participant, then mentored new members through hands-on sessions and reviewed their work.",
    },
  ],
  education: [
    {
      period: "Aug 2024 — 2028 (expected)",
      title: "Bachelor's of Applied Science, Informatics Engineering",
      org: "Politeknik Negeri Malang",
      note: "Sarjana Terapan Teknik Informatika. Cumulative GPA 3.94/4.0.",
    },
  ],
  contact: {
    heading: "Let's talk.",
    body: "I'm an informatics engineering student in Malang building full-stack web apps with React, Astro, Hono and Cloudflare. If you want to talk about a project or the work behind any of these, my inbox is open.",
    replyTime: "I reply within two days.",
    footerNote: "Designed and built by Kamila Zahwa. Astro, hand-written CSS, no template.",
  },
} as const;
