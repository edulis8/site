import { defineConfig, defineCollection, s } from 'velite';

// blog/hello-world
// we need to remove the "blog" part
// allowing us to read the below data, and modify the slug based on the value of the slug
const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
});

const posts = defineCollection({
  name: 'Posts',
  pattern: '/blog/**/*.mdx', // look for all .mdx files in the /blog directory or any nested directories
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true), // if false, the post will not be show up in production
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name] - [hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
