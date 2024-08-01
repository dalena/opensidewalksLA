import React from 'react';
import Link from 'next/link';
import { Article } from '../utils/interface';
import Image from 'next/image';

interface Props {
    article: Article;
}

const ArticleCard = ({ article }: Props) => {
    return (
        <Link className={`${cardStyle} cursor-pointer`} href={`/article/${article?.slug?.current}`}>
            <div className='flex flex-col md:flex-row w-full gap-6 '>
                <div className='relative md:w-[33%] h-[240px] flex-none rounded-2xl overflow-clip shadow-xl md:-translate-x-16'>
                    <Image
                        src={article?.image}
                        alt={article?.title}
                        width={960}
                        height={540}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='md:w-[70%] flex-none md:-translate-x-14'>
                    <div className='flex flex-row w-full justify-between'>
                        <h2 className='font-balto tracking-wide font-bold text-xl lg:text-2xl pb-2 md:w-[90%]'>{article?.title}</h2>
                        <div className='md:w-[10%] flex justify-end align-middle'>
                            <span className='px-2 pt-2 pb-1 bg-sign-500 rounded-md border outline outline-3 outline-sign-500 text-sm lowercase font-overpass font-bold inline-block w-fit h-fit'>
                                {article?.year}
                            </span>
                        </div>
                    </div>
                    <div className='md:w-[90%]'>
                        <p className='font-broadacre text-sm pb-2'>{article?.source}</p>
                        <p className='font-overpass text-base line-clamp-4'>{article?.excerpt}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;

const cardStyle = `
    mb-8
    p-4
    rounded-3xl
    transition ease-in-out
    w-full
    hover:z-50
    hover:scale-105
    border-2
    hover:bg-silver-100
    hover:shadow-xl
    duration-300
`;

