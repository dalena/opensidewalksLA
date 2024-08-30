import React from "react";
import Link from "next/link";
import { Post } from "../utils/interface";
import Image from "next/image";

interface Props {
  post: Post;
}
export const revalidate = 0;

const PostCard = ({ post }: Props) => {
  return (
    <>
      <Link
        className={`${cardStyle} cursor-pointer`}
        href={`/blog/${post?.slug?.current}`}
      >
        <div className="relative flex h-full flex-col gap-4">
          <div className="z-50 w-fit -translate-x-6 pb-5">
            {post?.tags?.map((tag, index) => (
              <span
                key={`${tag?._id}-${index}`}
                className="outline-3 relative inline-block rounded-md border bg-sign-500 px-2 pb-1 pt-2 font-overpass text-sm font-bold lowercase outline outline-sign-500"
              >
                {tag?.name}
              </span>
            ))}
          </div>
          <div className="absolute mb-2 h-60 w-full -translate-y-16 overflow-clip rounded-2xl shadow-xl">
            <Image
              src={post?.image}
              alt={post?.title}
              width={960}
              height={540}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-full flex-col justify-between">
            <h2 className="relative mt-32 flex min-h-[25%] flex-col justify-center font-balto text-xl font-bold tracking-wide lg:text-2xl">
              {post?.title}
            </h2>
            <p className="relative line-clamp-4 self-end font-overpass text-base">
              {post?.excerpt}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;

const cardStyle = `
    w-full
    bg-silver-200
    mb-8
    pb-6
    p-4
    rounded-3xl
    transition ease-in-out
    translate-y-24
    hover:z-50
    hover:scale-105
    border-2
    hover:bg-silver-100
    hover:shadow-xl
    duration-300
`;
