import configData from "@util/themeConfig";
import { defineCollection } from "astro:content";
import { sheetLoad } from "./sheets";
import { directorySchema } from "@validation/directory";
import { z } from "zod";
import { glob, file } from "astro/loaders";

export function createDirectoryCollection() {
  const source = configData?.directoryData?.source?.name || "json";

  if (source === 'sheets') {
    return defineCollection({
      loader: sheetLoad(),
      schema: directorySchema(z.string().url())
    });
  }

  if (source === 'json') {
    return defineCollection({
      loader: file('src/data/directory/directory.json'),
      schema: ({ image }) => directorySchema(image())
    });
  }

  if (source === 'csv') {
    return defineCollection({
      loader: file('src/data/directory/directory.csv'),
      schema: ({ image }) => directorySchema(image())
    });
  }

  return defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/directory" }),
    schema: ({ image }) => directorySchema(image())
  });
}