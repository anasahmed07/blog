import { fetchPostBySlug } from '@/lib/utils';
import { TypeBlogPost } from '@/lib/types';


export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = (await fetchPostBySlug(slug) as TypeBlogPost);

  if (!post) {
    return <div>Post not found</div>;
  }
  else{
  return (
    <div>
      <img src={post.mainImageUrl} alt={post.title} />
    </div>
    )
  }
  }