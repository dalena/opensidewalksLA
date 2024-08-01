import { ReactNode } from "react"

export const InfoBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex justify-center'>
            <div className='p-8 rounded-2xl max-w-[1100px] outline outline-offset-8 m-6'>
                {children}
            </div>
        </div>
    )
}
