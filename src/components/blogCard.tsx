import { TypeBlogPost } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = (props : TypeBlogPost) => {
    return (
        <div className="col-span-1 flex flex-col justify-between relative px-6 py-10 border border-gray-200 dark:border-2 dark:border-white rounded-3xl sm:px-10 max-w-md">
            <div className="mx-auto">
                <Link href={`/blog/${props.slug}`}>
                    <Image width={500} height={300} alt={props.title} className="rounded-3xl  dark:opacity-60" src={props.mainImageUrl}/>
                </Link>
                <div className="mt-2 font-semibold text-gray-900 dark:text-white text-3xl text-center hover:underline underline-offset-1"><Link href={`/blog/${props.slug}`}>{props.title}</Link></div>
                <p className="mt-2 line-clamp-5 my-9 text-center">{props.excerpt}</p>
                <div className="flex flex-row justify-center">
                    {props.categories.map((tag) => (
                        <span key={tag} className=" bg-gray-200 dark:bg-transparent rounded-md px-2 py-1 text-sm font-semibold text-gray-700 mb-2">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="border-t-2">
                <div className="mt-4 mb-2 text-gray-700 dark:text-white text-sm text-right">
                    {props.author}
                </div>
                <div className="mt-2 text-gray-700 dark:text-white text-sm text-right">
                    {new Intl.DateTimeFormat("en-US", {month: "long",day: "2-digit",year: "numeric"}).format(new Date(props.publishedAt))}
                </div>
            </div>
        </div>
    )
}