// source.config.ts
import { remarkImage } from "fumadocs-core/mdx-plugins";
import {
  defineConfig,
  defineDocs,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [
        remarkImage,
        {
          onError: "ignore"
        }
      ]
    ]
  }
});
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.date().optional(),
      author: z.string().optional(),
      published: z.boolean().optional().default(true),
      video: z.string().optional(),
      links: z.object({
        doc: z.string().optional(),
        api: z.string().optional()
      }).optional()
    })
  }
});
var conditions = defineDocs({
  dir: "content/conditions",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.date().optional(),
      author: z.string().optional(),
      published: z.boolean().optional().default(true),
      video: z.string().optional(),
      links: z.object({
        doc: z.string().optional(),
        api: z.string().optional()
      }).optional()
    })
  }
});
var biomarkers = defineDocs({
  dir: "content/biomarkers",
  docs: {
    schema: frontmatterSchema.extend({
      date: z.date().optional(),
      author: z.string().optional(),
      published: z.boolean().optional().default(true),
      video: z.string().optional(),
      links: z.object({
        doc: z.string().optional(),
        api: z.string().optional()
      }).optional()
    })
  }
});
var showcase = defineDocs({
  dir: "content/showcase",
  docs: {
    schema: frontmatterSchema.extend({
      affiliation: z.string().optional(),
      featured: z.boolean().optional().default(false),
      href: z.string().url().optional(),
      image: z.string().optional()
    })
  }
});
var blog = defineDocs({
  dir: "content/blog",
  docs: {
    schema: frontmatterSchema.extend({
      tags: z.array(z.string()).optional(),
      publishedOn: z.string(),
      featured: z.boolean().optional().default(false),
      image: z.string().optional(),
      author: z.string().optional()
    })
  }
});
export {
  biomarkers,
  blog,
  conditions,
  source_config_default as default,
  docs,
  showcase
};
