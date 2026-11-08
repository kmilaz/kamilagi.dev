import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      order: z.number().int().positive(),
      year: z.string().regex(/^\d{4}$/),
      context: z.string().min(1),
      summary: z.string().min(1).max(240),
      question: z.string().min(1),
      role: z.string().min(1),
      timeline: z.string().min(1),
      team: z.string().min(1),
      status: z.string().min(1),
      tools: z.array(z.string().min(1)).min(1),
      cover: image(),
      coverAlt: z.string().min(1),
      ogImage: image().optional(),
      outcome: z.string().min(1),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
