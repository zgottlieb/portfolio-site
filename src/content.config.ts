import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
  work: defineCollection({
    // Load Markdown files in the src/content/work directory.
    loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      technologies: z.array(z.string()).optional(),
      // publishDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      img: z.string(),
      img_alt: z.string().optional(),
      img2: z.string().optional(),
      img2_alt: z.string().optional(),
    }),
  }),
};
