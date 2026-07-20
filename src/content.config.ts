import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('ToolVerdict Editorial'),
    featured: z.boolean().default(false),
    toolsTested: z.number().int().positive().optional(),

    // The verdict is structured data: it drives the on-page VerdictBox,
    // the score chips on listing pages, and the Review JSON-LD.
    verdict: z.object({
      score: z.number().min(0).max(10),
      winner: z.string(),
      label: z.string().default('Best overall'),
      summary: z.string(),
    }),

    picks: z
      .array(
        z.object({
          label: z.string(),
          tool: z.string(),
          score: z.number().min(0).max(10),
          note: z.string(),
        })
      )
      .default([]),

    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
