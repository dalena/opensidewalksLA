import { ReactNode } from "react"

export const InfoBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className='bg-red-400 p-8 rounded-2xl outline outline-offset-8 m-6'>
            {children}
        </div>
    )
}
