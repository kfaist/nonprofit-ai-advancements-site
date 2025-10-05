import { defineCollection, z } from 'astro:content';

/**
 * Posts collection schema with extended frontmatter. Supports canonical,
 * lastmod, tags, sources, draft and changelog fields.
 */
const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      canonical: z.string().url().optional(),
      date: z.string(),
      lastmod: z.string().optional(),
      tags: z.array(z.string()).default([]),
      sources: z
        .array(
          z.object({
            title: z.string(),
            url: z.string().url(),
          })
        )
        .default([]),
      draft: z.boolean().optional(),
      changelog: z
        .array(
          z.object({
            date: z.string(),
            change: z.string(),
          })
        )
        .default([]),
    }),
});

export const collections = { posts };
