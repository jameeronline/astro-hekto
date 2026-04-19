import type { ImageMetadata } from 'astro';

export interface Product {
  id: number;
  name: string;
  image: string;
  thumbnailImages?: string[];
  originalPrice?: string;
  salePrice?: string;
  price?: string;
  rating: number;
  categories?: (string | ProductCategoryRef)[];
  tags?: string[];
  inStock?: boolean;
  description?: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  image: string;
  description: string;
}

export interface ProductCategoryRef {
  id: string;
  slug: string;
}

export interface FurnitureCollection {
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  sku: string;
  categories?: (string | ProductCategoryRef)[];
  tags?: string[];
  brand: string;
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  stock: number;
  dimensions: {
    width: number;
    depth: number;
    height: number;
    unit: string;
  };
  weight: number;
  weightUnit: string;
  material: string[];
  color: string[];
  featuredImage: ImageMetadata;
  galleryImages: string[];
  rating: number;
  reviewCount: number;
  publishedAt: Date;
  updatedAt: Date;
  isFeatured: boolean;
  specifications: {
    seatingCapacity: string;
    assembly: string;
    careInstructions: string;
    warranty: string;
    shipping: string;
  };
  reviews: FurnitureReview[];
}

export interface FurnitureReview {
  rating: number;
  text: string;
  reviewer: string;
  date: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  cover: {
    image: ImageMetadata;
    alt: string;
  };
  pubDate: Date;
  tags: string[];
  categories: string[];
  featured?: boolean;
  draft?: boolean;
}

export interface BlogMetaProps {
  categories?: string[];
  tags?: string[];
  post: Post;
  showDate?: boolean;
  showAuthor?: boolean;
}

export interface PaginationProps {
  currentPage: number;
  lastPage: number;
  prevUrl?: string;
  nextUrl?: string;
}

export interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  class?: string;
}

export interface PageHeaderProps {
  title: string;
  caption?: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
  backgroundImage?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface HeaderNavItem {
  label: string;
  href: string;
  children?: HeaderNavItem[];
}

export interface FooterLink {
  label: string;
  link: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CheckoutProductItemProps {
  item: CartItem;
  onRemove?: (id: string) => void;
}

export interface CurrencySymbolProps {
  currency?: string;
}

export interface ConfigStore {
  currency: string;
  currencySymbol: string;
  lang: string;
  theme: 'light' | 'dark';
  [key: string]: string | number | boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
