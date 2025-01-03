import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "404 | Page Not Found",
    description: "You are lost in Space !!!",
  };

export default function PageNotFound() {
  return (
    <>
      <section className="flex flex-col gap-5 px-3 pageTop py-20 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold uppercase font-barlow md:text-5xl dark:text-white">
          Stay calm and don't freak out!!
        </h1>
        <p className="text-gray-500 font-inter dark:text-gray-400/70">
          Looks like you've found the doorway to the great nothing. You didn't
          break the internet, but I can't find what you are looking for. Please
          visit my <b>Homepage</b> to get where you need to go.
        </p>

        <Link
          href="/"
          className="p-3 ml-0  w-56  font-bold mx-auto bg-gray-300 dark:bg-gray-900 text-center rounded-md text-black dark:text-white select-none  active:scale-95 transition-all  lg:hover:ring-2 ring-black/50 dark:ring-white/50"
        >
          Take me there!
        </Link>
      </section>
    </>
  );
}