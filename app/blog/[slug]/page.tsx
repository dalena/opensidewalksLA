import Layout from '@/app/components/Layout'
import { PostBox } from '@/app/components/PostBox'
import { Post } from '@/app/utils/interface'
import { PortableText } from '@portabletext/react'
import { getSinglePost } from '@/sanity/utils'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface Params {
    params: {
        slug: string;
    }
}

export const revalidate = 60;


const page = async ({ params }: Params) => {
    const post: Post = await getSinglePost(params?.slug)
    return (
        <Layout>
            <section className="px-8 w-full text-white py-[15vh] md:py-[10vh]">
                <div className='w-full flex justify-center relative h-[500px] rounded-2xl overflow-clip shadow-xl'>
                    <Image
                        src={post?.image}
                        alt={post?.title}
                        width={1920}
                        height={1080}
                        className='absolute inset-0 w-full h-full object-cover'
                    />
                </div>
                <div className='-translate-y-32'>
                    <PostBox>
                        <div className='flex flex-row gap-4'>
                            <div >
                                <h2 className="font-balto tracking-wide font-bold text-3xl lg:text-4xl">{post?.title}</h2>
                            </div>
                            <div className='w-fit'>
                                {post?.tags?.map((tag) => (
                                    <span key={tag?._id} className='pl-2 pr-3 pt-2 pb-1 bg-sign-500 rounded-md border outline outline-3 outline-sign-500 text-sm lowercase font-overpass font-bold inline-block'>
                                        {tag?.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className='pb-4'>
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
            </section >
        </Layout >
    )
}

export default page

const myPortableTextComponents = {
    types: {
        image: ({ value }: any) => (
            <Image
                src={urlFor(value).url()}
                alt='post'
                width={700}
                height={700}
            />
        ),
    },
};

const richTextStyles = `
flex
flex-col
gap-2
text-lg
font-overpass
prose-headings:mb-1
prose-headings:text-2xl
prose-headings:font-bold
prose-p:mb-4
prose-p:leading-12
prose-li:list-disc
prose-li:leading-12
prose-li:ml-6
`
    ;