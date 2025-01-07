import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface Props {
  content: any;
}

const RichText = ({ content }: Props) => {
  const components = {
    types: {
      // Render images in the rich text
      image: ({ value }: any) => {
        return (
          <div className="my-10 flex justify-center dark:opacity-60">
            <Image
              src={urlFor(value.asset._ref).width(800).url()} // Access the image URL
              alt={value.alt || " "}
              width={700}// Adjust height as needed
              height={500}
              className="rounded-lg"
            />
          </div>
        );
      },
    },
    marks: {
      // Handle links
      link: ({ value, children }: any) => {
        const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
        return (
          <Link href={value.href} rel={rel} target="_blank" className="text-blue-500 hover:underline">
            {children}
          </Link>
        );
      },
    },
    block: {
      // Handle headings
      h1: ({ children }: any) => <h1 className="text-5xl my-5 font-black" id={children}>{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-2xl my-5 font-bold" id={children}>{children}</h2>,
      h3: ({ children }: any) => <h3 className="flex text-3xl w-full pb-2 border-b my-5 font-bold" id={children}>{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-4xl my-5 font-semibold" id={children}>{children}</h4>,
      h5: ({ children }: any) => <h5 className="text-3xl font-medium" id={children}>{children}</h5>,
      normal: ({ children }: any) => <p className="font-thin text- leading-6">{children}</p>,
    },
    list: {
      // Render unordered lists
      bullet: ({ children }: any) => <ul className="list-disc pl-5">{children}</ul>,
      // Render ordered lists
      number: ({ children }: any) => <ol className="list-decimal pl-5">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="mb-2">{children}</li>,
    },
  };

  return <PortableText value={content} components={components} />;
};

export default RichText;
