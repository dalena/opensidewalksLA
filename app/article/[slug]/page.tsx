import Layout from '@/app/components/Layout'
import { PostBox } from '@/app/components/PostBox'
import { Article } from '@/app/utils/interface'
import { PortableText } from '@portabletext/react'
import { getSingleArticle } from '@/sanity/utils'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link';

interface Params {
    params: {
        slug: string;
    }
}


const page = async ({ params }: Params) => {
    const article: Article = await getSingleArticle(params?.slug)
    return (
        <Layout>
            <section className="px-8 w-full text-white py-[15vh] md:py-[10vh]">
                <div className='w-full flex justify-center relative h-[500px] rounded-2xl overflow-clip shadow-xl'>
                    <Image
                        src={article?.image}
                        alt={article?.title}
                        width={1920}
                        height={1080}
                        className='absolute inset-0 w-full h-full object-cover'
                    />
                </div>
                <div className='-translate-y-32'>
                    <PostBox>
                        <div className='flex flex-row gap-4'>
                            <h2 className="font-balto tracking-wide leading-tight font-bold text-3xl lg:text-4xl">{article?.title}</h2>
                        </div>
                        <div className='font-broadacre pt-2'>
                            <p>Published in <Link className='underline underline-offset-4 text-azul-600' href={article?.url} target="_blank">{article?.source}, {article?.year}</Link></p>
                        </div>
                    </PostBox>
                    <PostBox>
                        <div className={richTextStyles}>
                            <PortableText
                                value={article.body}
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
text-base
lg:text-lg
font-overpass
prose-headings:mb-1
prose-headings:text-2xl
prose-headings:font-bold
prose-p:mb-3
lg:prose-p:mb-4
prose-p:leading-12
prose-li:list-disc
prose-li:leading-12
prose-li:ml-6
`
    ;