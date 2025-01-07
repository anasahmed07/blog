import { fetchPostBySlug } from '@/lib/utils';
import { TypePostWithContent } from '@/lib/types';
import RichText from '@/components/richText';
import { notFound } from 'next/navigation';


export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = (await fetchPostBySlug(slug) as TypePostWithContent);

  if (!post) {
    return (
      notFound()
    );
  }

  else{
  return (
    <div className="max-w-4xl lg:border-2 my-10 py-5 px-2 sm:p-10 rounded-xl mx-1 lg:mx-auto">
      <h1 className="text-5xl font- tracking-tight leadin mb-10">{post.title}</h1>
      <RichText content={post.content} />
    </div>
    )
  }
  }