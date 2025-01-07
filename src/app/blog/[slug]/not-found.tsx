import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Post Not Found",
  description: "You are lost in Space !!!",
};

export default function PageNotFound() {
  return (
    <section className="h-[80vh] flex flex-col gap-3 justify-center">
    <div className="text-3xl sm:text-6xl bg-green-200 dark:bg-transparent mx-auto">
      404 ! Post not found
    </div>
    <h1 className="text-2xl sm:text-3xl text-center uppercase font-barlow md:text-5xl">
      Stay calm and don&apos;t freak out!!
    </h1>
    <p className="text-gray-800 text-center px-2 md:px-28 dark:text-gray-100">Looks like you&apos;ve found the doorway to the<strong> great nothing.</strong> You didn&apos;t break the internet, butI can&apos;t find what you are looking for. Please visit my <Link href="/blog"><strong className="text-blue-600 hover:underline cursor-pointer"> Blogs page </strong></Link>to get where you need to go.</p>
    <Link
      href="/blog"
      className="w-56 p-3 content-center mx-auto bg-gray-300 dark:bg-gray-900 text-center rounded-md text-black dark:text-white select-none  active:scale-95 transition-all hover:bg-blue-300 font-bold lg:hover:ring-2 ring-black/50 dark:ring-white/50"
    >
      Take me there!
    </Link>
  </section>
  );
}
