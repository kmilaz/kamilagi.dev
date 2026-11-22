import portrait from "../assets/images/portrait.jpg";

/**
 * PERSONAL DATA
 * ------------
 * Every personal detail lives in this file. Values below are taken from
 * the current CV; the portrait lives in src/assets/images. Project writing
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
    fileName: "Kamila-Zahwa-CV.pdf",
  },
  portrait: {
    src: portrait,
    alt: "Kamila Zahwa wearing a grey hijab and black shirt, arms crossed.",
  },
  availability: {
    status: "Open to opportunities",
    window: "From January 2027",
    arrangement: "East Java · on-site or hybrid",
  },
  hero: {
    lede: "Informatics engineering student and full-stack web developer. I build web applications end to end — React and Astro on the front end, Hono, Drizzle and Cloudflare behind.",
    supporting:
      "I work across the interface, the API and the database, and I care about keeping the result clear and maintainable.",
  },
  about: {
    paragraphs: [
      "I am an informatics engineering student at Politeknik Negeri Malang, studying toward a Sarjana Terapan Teknik Informatika (2024–2028). Most of my technical knowledge comes from building: this portfolio, MarkYours, Greenshift, Koze-Kost, and the Applied Informatics laboratory portal.",
      "I work across the stack — React, Astro and Tailwind CSS on the frontend; Hono, Drizzle ORM and Cloudflare Workers, D1, R2 and KV on the backend. I value structure that is simple enough to explain and maintain.",
      "Outside coursework, I serve as vice chairman of Workshop Riset Informatika, where I coordinate the divisions behind the miniclass program and mentor the 2026 board's event coordinators through their event cycle.",
    ],
    honesty: {
      title: "A note on experience",
      body: "I am still a student. Some of this work is collaborative: MarkYours is co-developed with AI agents, Koze-Kost is a team project, and the laboratory portal was built with three other developers. I prefer to show the work I completed and be clear about the areas where I am still learning.",
    },
    facts: [
      { label: "Based in", value: "Malang City, East Java" },
      {
        label: "Studying",
        value: "Informatics Engineering, Politeknik Negeri Malang, 2024–2028",
      },
      { label: "GPA", value: "3.94 / 4.0" },
      { label: "Role", value: "Vice chairman, Workshop Riset Informatika" },
    ],
    quote: "A good screen is usually the result of a better question.",
  },
  skills: [
    {
      id: "comfortable",
      tier: "01",
      title: "Languages",
      note: "Languages I have used across coursework, projects and independent work.",
      items: ["Java", "TypeScript", "JavaScript", "HTML / CSS", "PHP", "Python", "Dart"],
    },
    {
      id: "learning",
      tier: "02",
      title: "Frameworks & tools",
      note: "Tools I use regularly for frontend, backend and integration work.",
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
      note: "Platforms and data tools I have worked with in projects and coursework.",
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
  achievements: [
    {
      period: "Jun 2026",
      title: "Second place, Best Presentation — PLAY IT! 2026",
      org: "Politeknik Negeri Malang · Information Technology",
      note: "National web application hackathon; second place in the Best Presentation category.",
      href: null,
    },
    {
      period: "Apr 2026",
      title: "Google Student Ambassador 2026",
      org: "Google Indonesia",
      note: "Selected as the official Politeknik Negeri Malang delegate for Google Indonesia's digital capability program, focused on digital literacy and AI adoption.",
      href: null,
    },
    {
      period: "Dec 2025",
      title: "Second place, Speech — INTERCOMP",
      org: "Politeknik Negeri Malang · Information Technology",
      note: "Department-level speech competition; second place.",
      href: null,
    },
    {
      period: "Certification",
      title: "EF SET English Certificate — C1 Advanced",
      org: "EF SET",
      note: "A 90-minute standardized English proficiency test.",
      href: "https://cert.efset.org/va72na",
    },
  ],
  contact: {
    heading: "Get in touch.",
    body: "I am an informatics engineering student in Malang, building full-stack web applications with React, Astro, Hono and Cloudflare. If you would like to discuss a project or the work behind it, I would be glad to hear from you.",
    footerNote: "Designed and built by Kamila Zahwa with Astro and hand-written CSS.",
  },
} as const;
