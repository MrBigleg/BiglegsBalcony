import { z } from "astro:schema";

export const directorySchema = (imageSchema: any) =>
  z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional(),
    image: imageSchema.optional(),
    link: z.string().optional(),
    artist: z.string().optional(),
    province: z.string().optional(),
    featured: z.boolean().default(false),
  });