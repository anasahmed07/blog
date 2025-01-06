import { TypeBlogPost } from "@/lib/types";
import Link from "next/link";

export const BlogCard = (props : TypeBlogPost) => {
    return (
            <div className="col-span-1 relative px-6 pt-10 pb-8 dark:border-2 dark:border-white shadow-xl max-w-lg rounded-3xl sm:px-10">
                <div className="mx-auto max-w-md">
                    <div className="">
                        <div className="">
                            <figure className="">
                                <img alt={props.title} className="rounded-3xl dark:opacity-60" src={props.mainImageUrl}/>
                            </figure>
                        </div>
                        <div className="">
                            <div className="">
                                <div className="mt-2 font-bold text-3xl text-center hover:underline underline-offset-1"><Link href={`/blog/${props.slug}`}>{props.title}</Link></div>
                                <p className="mt-2">{props.slug}</p>
                                <div className="w-full mt-2 line-clamp-2">{props.excerpt}</div>
                                <div className="">
                                    <Link href={`/blog/${props.slug}`} className="h-10 bg-gray-300 rounded w-32 mt-2">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}