import React from "react";
import Link from "next/link";
import { Post } from "../utils/interface";
import Image from "next/image";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <Link
      className={`${cardStyle} cursor-pointer`}
      href={`/blog/${post?.slug?.current}`}
    >
      <div className="flex max-h-[430px] flex-col md:max-h-[460px] lg:max-h-[450px]">
        <div className="z-50 w-fit -translate-x-6 pb-5">
          {post?.tags?.map((tag) => (
            <span
              key={tag?._id}
              className="outline-3 inline-block rounded-md border bg-sign-500 px-2 pb-1 pt-2 font-overpass text-sm font-bold lowercase outline outline-sign-500"
            >
              {tag?.name}
            </span>
          ))}
        </div>
        <div className="relative h-60 w-full flex-none -translate-y-28 overflow-clip rounded-2xl shadow-xl hover:shadow-none">
          <Image
            src={post?.image}
            alt={post?.title}
            width={960}
            height={540}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="-translate-y-28 pt-8">
          <div>
            <h2 className="pb-2 font-balto text-xl font-bold tracking-wide lg:text-2xl">
              {post?.title}
            </h2>
            {/* <p className='font-balto text-base'>Published on {new Date(post?.publishedAt).toDateString()}</p> */}
            <p className="line-clamp-4 font-overpass text-base">
              {post?.excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

const cardStyle = `
    mb-8
    p-4
    rounded-3xl
    transition ease-in-out
    md:w-[33%]
    max-h-[500px]
    translate-y-24
    hover:z-50
    hover:scale-105
    border-2
    hover:bg-silver-100
    hover:shadow-xl
    duration-300
`;
