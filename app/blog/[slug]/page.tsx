import { PostBox } from "@/app/components/PostBox";
import { Post } from "@/app/utils/interface";
import { PortableText } from "@portabletext/react";
import { getSinglePost } from "@/sanity/utils";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Params {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const post: Post = await getSinglePost(params?.slug);
  return (
    <section className="text-white w-full">
      <div className="relative flex h-[500px] w-full justify-center overflow-clip rounded-2xl shadow-xl">
        <Image
          src={post?.image}
          alt={post?.title}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="-translate-y-52 md:-translate-y-32">
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
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlFor(value).url()} alt="post" width={700} height={700} />
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
prose-li:ml-6
`;
