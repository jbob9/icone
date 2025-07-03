import type { SanityAsset } from "@sanity/image-url/lib/types/types";

export type Post = {
  title: string;
  slug: { current: string };
  mainImage: { asset: SanityAsset };
  overview: string;
  body: any; // Use a more specific type if available, e.g., PortableTextBlock[]
  author: { name: string; role: string; image: SanityAsset };
  categories: { title: string }[];
  publishedAt: string;
};

export type Project = {
  name: string;
  websiteUrl: string;
  slug: { current: string };
  logo: { asset: SanityAsset };
  mainImage: { asset: SanityAsset };
  overview: string;
  tags: string[];
  solutions: string;
  challenges: string;
  gallery: { asset: SanityAsset }[];
  technologies: string[];
  features: string[];
  results: string[];
  status: string;
  publishedAt: string;
};
