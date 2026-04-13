# Astro-Hekto

E-commerce site built with Astro 5, deployed on Netlify.

## Dev Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Runs astro build + postbuild (pagefind)
npm run build:check  # Runs astro check + build (with type checking)
npm run preview      # Preview production build
npm run astro -- <cmd>  # Run Astro CLI commands
npm run typecheck    # Run TypeScript type checking only
```

## Build Order

`build` runs `astro build` followed by `pagefind --site dist` (search index generation).

## Key Integrations

- **UI**: React 19 (hybrid components), Alpine.js (interactive widgets), Tailwind CSS v4 (via `@tailwindcss/vite`)
- **CMS**: Sanity (`@sanity/astro`) - requires env vars `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_USE_CDN`
- **Email**: Nodemailer (contact form) - requires `GMAIL_USER`, `GMAIL_PASS`, `CONTACT_RECEIVER`
- **Adapter**: Netlify (`@astrojs/netlify`)
- **Search**: Pagefind (post-build static search)
- **Components**: Starwind UI (see `starwind.config.json`) - generated into `src/componentsy/`

## Path Aliases

All resolve from `./src/`:
- `@/*` → `.`
- `@/components/*` → `components/*`
- `@/blocks/*` → `components/blocks/*`
- `@/starwind/*` → `componentsy/starwind/*`
- `@/layouts/*`, `@/pages/*`, `@/utils/*`, `@/styles/*`, `@/config/*`, `@/assets/*`, `@/stores/*`

Note: `astro.config.mjs:36` has typo `componentsy` (no 'r').

## Content Collections

Defined in `src/content.config.ts`:
- `posts` - blog posts (glob loader, MD/MDX in `src/content/posts/`)
- `products` - product data (JSON file loader)
- `furnitureCollections` - detailed product pages (glob loader, MDX in `src/content/products/`)
- `productCategories` - category data (JSON file loader)

## TypeScript Guidelines

### TypeScript Configuration
- Extends `astro/tsconfigs/strict` for strict type checking
- React JSX is configured with `jsx: "react-jsx"` and `jsxImportSource: "react"`

### Component Props Pattern
All Astro components should define an explicit `Props` interface:

```astro
---
import type { CollectionEntry } from "astro:content";

interface Props {
  title: string;
  description?: string;
  items?: CollectionEntry<"posts">[];
}

const { title, description, items = [] } = Astro.props;
---

<h1>{title}</h1>
```

### Type Imports
Use `import type` for type-only imports to avoid bundling issues:
```typescript
import type { CollectionEntry } from "astro:content";
import type { HTMLAttributes } from "astro/types";
```

### Shared Types
Centralized types are defined in `src/types/index.ts`:
- `Product`, `ProductCategory`, `FurnitureCollection` - Product-related types
- `Post` - Blog post type
- `PaginationProps`, `SectionHeaderProps`, `PageHeaderProps` - Component prop types
- `ConfigStore` - Store type definitions

### Type Utilities
Use Astro's built-in utilities for dynamic routes:
```astro
---
import type { InferGetStaticParamsType, InferGetStaticPropsType } from "astro";

export async function getStaticPaths() { /* ... */ }

type Params = InferGetStaticParamsType<typeof getStaticPaths>;
type Props = InferGetStaticPropsType<typeof getStaticPaths>;
```

### React Components
- Use `.tsx` extension for TypeScript React components
- Define explicit interfaces for props and state
- Use explicit event types (e.g., `FormEvent`, `ChangeEvent`)

### Known TypeScript Issues
- Starwind components in `src/componentsy/` use `children: any` - not refactored
- Some pages have pre-existing `key` prop issues (React 19 behavior)
- `isotope-layout` module lacks type declarations

## Required Env Vars

```
SANITY_PROJECT_ID
SANITY_DATASET
SANITY_USE_CDN
GMAIL_USER
GMAIL_PASS
CONTACT_RECEIVER
ASTRO_SITE_URL (optional, defaults to https://jameer.online)
```

## Architecture Notes

- Site config: `src/config/siteconfig.ts`
- Pagefind generates to `dist/pagefind/` after build
- Sanity Studio is embedded via `@sanity/astro` integration
- `.astro/` contains generated types (regenerate with `astro sync`)
- Type declarations: `src/types/index.ts`, `src/glide.d.ts`

## What This Project Does NOT Have

No ESLint, Prettier, or test framework configured.

## Known Issues

- `src/componentsy/` directory name is a typo (should be `components/`) - used for Starwind generated components
- Auth pages (`/auth/login/`, `/auth/signup/`) are stubs without actual forms
- Some React components use `key` prop in JSX which causes LSP warnings (React 19 behavior)
- Starwind UI components in `componentsy/` have `children: any` types (not part of refactoring scope)
