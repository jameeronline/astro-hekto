// 1. Import utilities from `astro:content`
import { defineCollection, z as zod, reference } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts" }),
  schema: ({ image }) =>
    zod.object({
      title: zod.string(),
      author: zod.string(),
      description: zod.string(),
      cover: zod.object({
        image: image().optional(),
        alt: zod.string(),
      }),
      pubDate: zod.date(),
      tags: zod.array(zod.string()),
      categories: zod.array(zod.string()),
      featured: zod.boolean().optional(),
      draft: zod.boolean().optional(),
    }),
});

const productCategories = defineCollection({
  loader: file("src/content/product-categories.json"),
  schema: zod.object({
    slug: zod.string(),
    name: zod.string(),
    image: zod.string(),
    description: zod.string(),
  }),
});

const products = defineCollection({
  loader: file("src/content/products.json"),
  schema: zod.object({
    id: zod.number(),
    name: zod.string(),
    image: zod.string(),
    thumbnailImages: zod.array(zod.string()),
    originalPrice: zod.string(),
    salePrice: zod.string(),
    rating: zod.number(),
    categories: zod.array(reference("productCategories").optional()),
    tags: zod.array(zod.string()),
    inStock: zod.boolean(),
    description: zod.string(),
  }),
});

const productCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/products" }),
  schema: zod.object({
    title: zod.string(),
    slug: zod.string(),
    price: zod.number(),
    currency: zod.string(),
    sku: zod.string(),
    category: zod.string(),
    tags: zod.array(zod.string()),
    brand: zod.string(),
    availability: zod.enum(["in-stock", "out-of-stock", "pre-order"]),
    stock: zod.number(),
    dimensions: zod.object({
      width: zod.number(),
      depth: zod.number(),
      height: zod.number(),
      unit: zod.string(),
    }),
    weight: zod.number(),
    weightUnit: zod.string(),
    material: zod.array(zod.string()),
    color: zod.array(zod.string()),
    featuredImage: zod.string(),
    galleryImages: zod.array(zod.string()),
    rating: zod.number(),
    reviewCount: zod.number(),
    publishedAt: zod.date(),
    updatedAt: zod.date(),
    isFeatured: zod.boolean(),
  }),
});

// const works = defineCollection({
//   loader: glob({ pattern: "**/*.md", base: "src/content/works" }),
//   schema: zod.object({
//     title: zod.string(),
//   }),
// });

// const teams = defineCollection({
//   loader: file("src/content/teams.json"),
//   schema: zod.object({
//     id: zod.number(),
//     name: zod.string(),
//     email: zod.string(),
//     gender: zod.string(),
//     country: zod.string(),
//     role: zod.string(),
//     description: zod.string(),
//     socialLinks: zod.array(
//       zod.object({
//         type: zod.string(),
//         url: zod.string().url(),
//       })
//     ),
//     picture: zod.string(),
//   }),
// });

// const projects = defineCollection({
//   loader: glob({ pattern: "**/*.mdx", base: "src/content/projects" }),
//   schema: zod.object({
//     id: zod.number(),
//     title: zod.string(),
//     description: zod.string(),
//     thumbnail: zod.string(),
//     images: zod.array(zod.string()),
//     type: zod.string(),
//     tags: zod.array(zod.string()),
//     technologies: zod.array(zod.string()),
//     github: zod.string().url(),
//     liveDemo: zod.string().url(),
//     year: zod.number(),
//     role: zod.string(),
//     duration: zod.string(),
//     teamSize: zod.number(),
//   }),
// });

// const projects = defineCollection({
//   loader: file("src/content/projects.json"),
//   schema: zod.object({
//     id: zod.string(),
//     title: zod.string(),
//     description: zod.string(),
//     image: zod.string(),
//     type: zod.string(),
//     tags: zod.array(zod.string()),
//     challenge: zod.string(),
//     solution: zod.string(),
//     technologies: zod.array(zod.string()),
//     github: zod.string().url(),
//     liveDemo: zod.string().url(),
//     year: zod.number(),
//     role: zod.string(),
//   }),
// });

// 4. Export a single `collections` object to register your collection(s)
//export const collections = { posts, projects, teams };
export const collections = {
  posts,
  products,
  productCollection,
  productCategories,
};
