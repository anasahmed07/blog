import { BlogCard } from '@/components/blogCard';
import { TypeBlogPost } from '@/lib/types';
import { fetchAllPosts } from '@/lib/utils';
import Image from 'next/image';


export default async function BlogPage() {
    const posts = await fetchAllPosts();

    return (
        <div className='py-10 flex flex-col px-4 lg:px-10'>
            <div className='mx-auto'>
                <div className='flex flex-col-reverse content-center sm:flex-row sm:justify-between px-10 mb-6'>
                    <div className='my-10 sm:mx-10 content-center'>
                        <h1 className="text-5xl sm:text-6xl font-bold sm:mb-7">All Blogs</h1>
                        <p className="py-4">Read my thoughts on software development, design, and more.</p>
                    </div>
                    <Image className="col-span-1 mx-auto sm:mx-0 rounded sm:h-52 sm:w-52" src={"/images/writer.png"} height={300} width={250} alt={"writer picture"}/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {posts.map((post: TypeBlogPost) => (
                        <BlogCard key={post.slug} title={post.title} slug={post.slug} mainImageUrl={post.mainImageUrl} excerpt={post.excerpt} categories={post.categories} publishedAt={post.publishedAt} author={post.author}/>
                    ))}
                </div>
            </div>
        </div>
    );
}