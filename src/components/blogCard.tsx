import { TypeBlogPost } from "@/lib/types";
import Link from "next/link";

export const BlogCard = (props : TypeBlogPost) => {
    return (
            <div className="col-span-1 relative px-6 pt-10 pb-8 border border-gray-200 dark:border-2 dark:border-white max-w-lg rounded-3xl sm:px-10">
                <div className="mx-auto max-w-md">
                    <div className="">
                        <div className="">
                            <Link href={`/blog/${props.slug}`}>
                                <img alt={props.title} className="rounded-3xl dark:opacity-60" src={props.mainImageUrl}/>
                            </Link>
                        </div>
                        <div className="">
                            <div className="">
                                <div className="mt-2 font-semibold text-gray-900 dark:text-white text-3xl text-center hover:underline underline-offset-1"><Link href={`/blog/${props.slug}`}>{props.title}</Link></div>
                                <p className="mt-2 line-clamp-5 my-9">{props.excerpt}</p>
                                <Link href={`/blog/${props.slug}`} className="bg-gray-300 dark:text-gray-800 rounded px-4 py-3">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}