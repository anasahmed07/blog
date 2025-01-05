// export default function Home() {
//   return (
//     <>
//     </>
//   );
// }

import { client } from '@/sanity/lib/client';
import Link from 'next/link';

interface BlogPost {
  title: string;
  slug: string;
  mainImageUrl: string;
  excerpt: string;
}

async function fetchPosts() {
  const query = `*[_type == "post"]{
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    excerpt
    }`;
    const posts : BlogPost[] = await client.fetch(query);
    console.log(posts);
    return posts;
  }
 
export default async function BlogPage() {
  const posts = await fetchPosts();
  return (
    <div>
      <h1>Blog Posts</h1>
      <div className="grid-rows-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/articles/${post.slug}`}>
            <div className="row-span-1 border-black">
              <img src={post.mainImageUrl} alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={`/post/${post.slug}`}>Read More</a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
