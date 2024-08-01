import Link from 'next/link'
import { ReactNode } from 'react'

type PropType = {
    sectionTitle: string,
    anchor: string,
    children: ReactNode
}

export const Section = ({ sectionTitle, anchor, children }: PropType) => {
    return (
        <section id={anchor} className="bg-stone-400 w-full min-h-[50vh] flex justify-center text-white mb-14">
            <div className="md:min-w-[1000px] md:max-w-[1600px] md:px-24 md:py-10 px-10 py-4">
                <div className='w-fit pb-16'>
                    <h2 className="font-overpass font-bold text-3xl md:text-5xl pl-6 pr-8 pb-1 pt-3 bg-azul-600 rounded-md border-2 outline outline-4 outline-azul-600 text-silver-50">{sectionTitle}</h2>
                </div>
                <div className='font-overpass text-base md:text-xl'>
                    {children}
                </div>
            </div>
        </section>
    )
}
