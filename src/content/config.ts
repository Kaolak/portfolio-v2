import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    private: z.boolean().default(false),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
  }),
});

const challenges = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    diagram: z.string().optional(),
    tabs: z.array(z.object({
      id: z.string(),
      label: z.string(),
      content: z.string(),
      diagram: z.string().optional(),
    })).optional(),
  }),
});

const challengeTabs = defineCollection({
  type: 'content',
  schema: z.object({
    diagram: z.string().optional(),
  }),
});

export const collections = { projects, challenges, challengeTabs };