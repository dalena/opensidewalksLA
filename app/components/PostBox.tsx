import { ReactNode } from "react"

export const PostBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex justify-center'>
            <div className='bg-silver-100 p-8 rounded-2xl max-w-[1100px] border-2 m-6 shadow-xl'>
                {children}
            </div>
        </div>
    )
}
