import portrait from "../assets/images/portrait-placeholder.png";

/**
 * PLACEHOLDER PERSONAL DATA
 * -------------------------
 * Every personal detail lives in this file. Replace the values below before
 * publishing — the name and copy are taken from the design reference, while
 * the email, LinkedIn URL, dates and photo are deliberate placeholders.
 * Project writing lives in src/content/projects/*.md.
 */
export const site = {
  name: "Marcella Aurelia",
  firstName: "Marcella",
  lastName: "Aurelia",
  role: "Design student & front-end builder",
  description:
    "Portfolio of a design student and front-end builder looking for a business analyst internship in Jakarta — two case studies, an honest skills list, and contact details.",
  location: "Jakarta, Indonesia",
  email: "hello@example.com",
  linkedin: {
    label: "linkedin.com/in/your-handle",
    href: "https://www.linkedin.com/in/your-handle",
  },
  portrait: {
    src: portrait,
    alt: "Placeholder portrait of Marcella Aurelia, labelled as a photo to be replaced.",
  },
  availability: {
    status: "Open to a BA internship",
    window: "From January 2027",
    arrangement: "Jakarta · on-site or hybrid",
    capacity: "3 days a week in semester, full-time in breaks",
  },
  hero: {
    eyebrow: "Portfolio — 2027 edition",
    lede: "Design student and front-end builder. I'm looking for my first business analyst internship, where I can learn to ask better questions before anyone opens Figma.",
    supporting:
      "I can already turn a messy brief into a working screen. What I want to learn is the thinking in front of it: who has the problem, what they actually need, and what to leave out.",
  },
  about: {
    paragraphs: [
      "I'm a visual communication design student in Jakarta. Most of what I know comes from making things: editorial layouts, small websites, and campus projects where the brief was one paragraph and the deadline was Friday.",
      "Design school taught me to look at a problem from the outside. Building my own sites taught me that a polished screen is useless if the content doesn't do the job. That is what pulled me toward business analysis: it is the part where you decide what the thing should do before deciding how it looks.",
      "I'm not arriving as an analyst. I'm arriving as someone who can listen, document, prototype and build — and who wants to learn the discipline of requirements from people who do it well.",
    ],
    honesty: {
      title: "The honest bit",
      body: "I haven't worked as a business analyst yet. My experience is design internships, freelance web work and course projects. I can contribute craft and curiosity now, and I'll need a team that expects to teach. I'd rather say that plainly than dress up two student projects as professional experience.",
    },
    facts: [
      { label: "Based in", value: "Jakarta, Indonesia" },
      { label: "Studying", value: "Visual Communication Design, 2022–2027" },
      { label: "Day job", value: "Freelance design & front-end" },
      { label: "Reading up on", value: "BPMN, user stories, basic SQL" },
    ],
    quote: "A good screen is usually the result of a better question.",
  },
  skills: [
    {
      id: "comfortable",
      tier: "01",
      title: "Comfortable with",
      note: "I've used these to finish real coursework and paid freelance work. I can start on my own.",
      items: ["Figma", "HTML / CSS", "JavaScript", "Astro", "Documentation"],
    },
    {
      id: "learning",
      tier: "02",
      title: "Learning now",
      note: "Coursework, practice projects and short courses. I know the vocabulary; I'm not yet fast or independent.",
      items: ["BPMN", "User stories", "Basic SQL", "Jira / Confluence"],
    },
    {
      id: "interested",
      tier: "03",
      title: "Interested in",
      note: "The parts of the job I want to grow into with a mentor. I've read about them; I haven't done them for real.",
      items: ["Requirement elicitation", "Stakeholder work", "Process improvement"],
    },
  ],
  experience: [
    {
      period: "2025 — now",
      role: "Freelance designer & front-end builder",
      org: "Independent · Jakarta",
      note: "Small sites for student organisations and local businesses. I scope the work, write the copy with the client, build it in Astro, and ship it.",
    },
    {
      period: "Jun — Aug 2024",
      role: "Design intern",
      org: "Digital agency · Jakarta",
      note: "Campaign and social assets for two clients. I learned to work inside someone else's brand system and to ask what a brief is really for.",
    },
    {
      period: "2023",
      role: "Publication volunteer",
      org: "Campus exhibition · Tangerang",
      note: "Kept a 48-page exhibition catalogue consistent across five student teams. My first taste of chasing decisions from people who are all busy.",
    },
  ],
  education: [
    {
      period: "2022 — 2027 (expected)",
      title: "Visual Communication Design",
      org: "Multimedia Nusantara University",
      note: "Coursework in interaction design, typography and research methods.",
    },
    {
      period: "2019 — 2022",
      title: "Multimedia",
      org: "Vocational high school",
      note: "Where I first learned to build for the web, badly and then better.",
    },
  ],
  contact: {
    heading: "Let's talk.",
    body: "I'm applying for business analyst internships starting January 2027. If your team has room for someone who designs, builds and asks a lot of questions, I'd like to hear what the work is actually like.",
    replyTime: "I reply within two days.",
    footerNote: "Designed and built by Marcella. Astro, hand-written CSS, no template.",
  },
} as const;
