import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { client } from '@/sanity/lib/client';
import { TypeBlogPost, TypePostWithContent } from "./types";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export async function fetchAllPosts() {
  const query = `*[_type == "post"]{
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    excerpt,
    "categories": categories[]->title,
    publishedAt,
    "author": author->name
    }`;
  try {
    const posts: TypeBlogPost[] = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if an error occurs
  }
}


export async function fetchPostBySlug(slug: string): Promise<TypePostWithContent | null> {

  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
  title,
  "slug": slug.current,
  "mainImageUrl": mainImage.asset->url,
  excerpt,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title,
  content
}`;

  try {
    const post: TypePostWithContent = await client.fetch(query);
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null; // Return null if an error occurs
  }
}