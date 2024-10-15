import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImg: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
