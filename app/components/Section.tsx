import Link from 'next/link'
import { ReactNode } from 'react'

type PropType = {
    sectionTitle: string,
    anchor: string,
    children: ReactNode
}

export const Section = ({ sectionTitle, anchor, children }: PropType) => {
    return (
        <section id={anchor} className="bg-red-500 w-full min-h-[50vh] flex justify-center text-white pt-16">
            <div className="min-w-[1000px] max-w-[1600px] px-24 py-16">
                <h2 className="font-broadcore font-bold text-6xl pb-6">{sectionTitle}</h2>
                <div className='font-overpass text-2xl'>
                    {children}
                </div>
            </div>
        </section>
    )
}
