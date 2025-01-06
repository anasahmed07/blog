import { BlogCard } from '@/components/blogCard';
import { TypeBlogPost } from '@/lib/types';
import { fetchAllPosts } from '@/lib/utils';


export default async function BlogPage() {
  const posts = await fetchAllPosts();

  return (
    <div className='pb-10'>
      <div className='flex justify-between items-center w-full'>
        <div className=''>
          <h1 className="text-6xl font-bold my-10">Recent Blogs</h1>
        </div>

      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {posts.map((post: TypeBlogPost) => (
          <BlogCard key={post.slug} title={post.title} slug={post.slug} mainImageUrl={post.mainImageUrl} excerpt={post.excerpt} categories={post.categories} publishedAt={post.publishedAt} author={post.author}/>
        ))}
      </div>
    </div>
  );
}
