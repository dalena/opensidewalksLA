import React from 'react';
import Link from 'next/link';
import { Post } from '../utils/interface';
import Image from 'next/image';

interface Props {
    post: Post;
}

const PostCard = ({ post }: Props) => {
    return (
        <Link className={`${cardStyle} cursor-pointer`} href={`/blog/${post?.slug?.current}`}>
            <div className='flex flex-col'>
                <div className='pb-5 z-50 -translate-x-6 w-fit'>
                    {post?.tags?.map((tag) => (
                        <span key={tag?._id} className='px-2 pt-2 pb-1 bg-sign-500 rounded-md border outline outline-3 outline-sign-500 text-sm lowercase font-overpass font-bold inline-block'>
                            {tag?.name}
                        </span>
                    ))}
                </div>
                <div className='relative w-full h-60 rounded-2xl overflow-clip -translate-y-28 shadow-xl'>
                    <Image
                        src={post?.image}
                        alt={post?.title}
                        width={960}
                        height={540}
                        className='absolute inset-0 w-full h-full object-cover'
                    />
                </div>
                <div className='-translate-y-24 pt-8'>
                    <div>
                        <h2 className='font-balto tracking-wide font-bold text-xl lg:text-2xl pb-2'>{post?.title}</h2>
                        {/* <p className='font-balto text-base'>Published on {new Date(post?.publishedAt).toDateString()}</p> */}
                        <p className='font-overpass text-base line-clamp-4'>{post?.excerpt}</p>
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