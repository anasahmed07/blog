import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { client } from '@/sanity/lib/client';
import { TypeBlogPost } from "./types";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export async function fetchAllPosts() {
  const query = `*[_type == "post"]{
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    excerpt
    }`;
  try {
    const posts: TypeBlogPost[] = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if an error occurs
  }
}


export async function fetchPostBySlug(slug: string): Promise<TypeBlogPost | null> {

  const query = `
    *[_type == "post" && slug.current == "${slug}" ][0] {
      title,
      "mainImageUrl": mainImage.asset->url,
      "slug": slug.current,
      content
    }
  `;
  
  try {
    const post: TypeBlogPost = await client.fetch(query);
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null; // Return null if an error occurs
  }
}