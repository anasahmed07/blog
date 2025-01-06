import { fetchPostBySlug } from '@/lib/utils';
import { TypeBlogPost } from '@/lib/types';


export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post: TypeBlogPost = await fetchPostBySlug(slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <img src={post.mainImageUrl} alt={post.title} />
    </div>
    )
  }