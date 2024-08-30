import type { Post } from "@/app/utils/interface"; // Type-only import
import { sanityFetch } from "@/sanity/lib/client";
import { PostBox } from "@/app/components/PostBox";
import { PortableText } from "@portabletext/react";
import { singlePostQuery } from "@/sanity/utils";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Params {
  params: {
    slug: string;
  };
}

export default async function PostComponent({
  params,
}: {
  params: { slug: string };
}) {
  const post: Post = await sanityFetch({
    query: singlePostQuery(params.slug), // Pass the slug here
    tags: ["post"],
  });

  if (!post) {
    return <p>No content found.</p>;
  }

  return (
    <section className="text-white mt-20 w-full px-2 md:mt-4">
      <div className="flex h-full w-full justify-center">
        <div className="w-fit rounded-2xl md:h-[50vh] lg:h-[60vh]">
          <Image
            src={post.image}
            alt={post.title}
            width={1920}
            height={1080}
            className="h-full w-full rounded-2xl object-contain"
          />
        </div>
      </div>
      <div className="-translate-y-[4vh] lg:-translate-y-[14vh]">
        <PostBox>
          <div className="flex flex-row gap-2 md:gap-4">
            <div>
              <h2 className="font-balto text-3xl font-bold tracking-wide lg:text-4xl">
                {post?.title}
              </h2>
            </div>
            <div className="w-fit">
              {post?.tags?.map((tag) => (
                <span
                  key={tag?._id}
                  className="outline-3 inline-block rounded-md border bg-sign-500 pb-1 pl-2 pr-3 pt-2 font-overpass text-sm font-bold lowercase outline outline-sign-500"
                >
                  {tag?.name}
                </span>
              ))}
            </div>
          </div>
          <div className="pb-4">
            <p>Published on {new Date(post?.publishedAt).toDateString()}</p>
          </div>
          <div className={richTextStyles}>
            <PortableText
              value={post.body}
              components={myPortableTextComponents}
            />
          </div>
        </PostBox>
      </div>
    </section>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="flex w-full flex-col justify-center">
        <Image
          src={urlFor(value).url()}
          alt={value.alt}
          width={700}
          height={700}
          className="self-center rounded-xl border border-silver-950 shadow-2xl"
        />
        <p className="max-w-[700px] self-center py-8 text-md italic">
          {value.caption}
        </p>
      </div>
    ),
  },
};

const richTextStyles = `
flex
flex-col
gap-2
text-base
lg:text-lg
font-overpass
prose-headings:mb-1
prose-headings:text-xl
md:prose-headings:text-2xl
prose-headings:font-bold
prose-p:mb-3
lg:prose-p:mb-4
prose-p:leading-12
prose-li:list-disc
prose-li:leading-12
prose-li:ml-10
`;
