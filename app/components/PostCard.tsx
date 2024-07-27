import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import type { Media } from 'payload-types'

export default async function PostCard() {
    const payload = await getPayloadHMR({ config })
    const blogPosts = await payload.find({
        collection: 'posts'
    })
    return (
        <div className="grid grid-cols-3 gap-10">
            {
                blogPosts.docs.map((post) => {
                    return (
                        <div key={post.id} className="bg-red-400 p-4 rounded-lg">
                            <h3>{post.title}</h3>
                            <Link href={`/blog/${post.slug}`}>
                                <div >
                                    <Image
                                        className='w-full max-h-[250px]'
                                        src={(post.hero as Media)?.url ?? ''}
                                        alt={(post.hero as Media)?.alt ?? ''}
                                        width={(post.hero as Media)?.width ?? 100}
                                        height={(post.hero as Media)?.height ?? 100}
                                    />
                                </div>
                            </Link>
                            <p>{post.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}