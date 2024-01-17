// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const planetCollection = defineCollection(
    {
      type: 'data', // v2.5.0 and later
      schema: z.object({
        name: z.string(),
        order: z.number(),
        overview: z.object({
          content: z.string(),
          source: z.string(),
        }),
        structure: z.object({
          content: z.string(),
          source: z.string(),
        }),
        geology: z.object({
          content: z.string(),
          source: z.string(),
        }),
        rotation: z.string(),
        revolution: z.string(),
        radius: z.string(),
        temperature: z.string(),
        images: z.object({
          planet: z.string(),
          internal: z.string(),
          geology: z.string()
        })
      }),
    }
  );

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'planets': planetCollection,
};
