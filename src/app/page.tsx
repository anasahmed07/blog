import { BlogCard } from '@/components/blogCard';
import { TypeBlogPost } from '@/lib/types';
import { fetchAllPosts } from '@/lib/utils';

 
export default async function BlogPage() {
  const posts = await fetchAllPosts();

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 w-full">
        {posts.map((post:TypeBlogPost) => (
          <BlogCard key={post.slug} title={post.title} slug={post.slug} mainImageUrl={post.mainImageUrl} excerpt={post.excerpt}/>
        ))}
      </div>
    </div>
  );
}
