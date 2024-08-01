import Image from 'next/image'
import Link from 'next/link'
import ScrollToAnchor from './ScrollToAnchor'



export const Nav = () => {
  return (
    <nav className="fixed top-0 py-4 md:p-8 z-50 w-full">
      <div className="container mx-auto flex flex-col justify-between items-center gap-4 md:flex-row">
        <div className="font-balto font-bold text-center text-xl md:text-2xl">
          <Link className="flex flex-col items-center gap-4 md:flex-row px-2 py-1 transition ease-in-out" href="/">
            <h1>Open Sidewalks LA</h1>
          </Link>
        </div>
        <ul className="flex space-x-4 *:cursor-pointer font-overpass text-base font-bold px-2 py-1 bg-azul-600 rounded-md border-2 outline outline-4 outline-azul-600 text-silver-50">
          <li className='transition ease-in-out hover:underline hover:underline-offset-4 hover:decoration-wavy'><ScrollToAnchor anchor="about">About</ScrollToAnchor></li>
          <li className='transition ease-in-out hover:underline hover:underline-offset-4 hover:decoration-wavy'><Link href="#">Blog</Link></li>
          <li className='transition ease-in-out hover:underline hover:underline-offset-4 hover:decoration-wavy'><ScrollToAnchor anchor="articles">Articles</ScrollToAnchor></li>
          <li className='transition ease-in-out hover:underline hover:underline-offset-4 hover:decoration-wavy'><Link href="#">FAQ</Link></li>
          <li className='transition ease-in-out hover:underline hover:underline-offset-4 hover:decoration-wavy'><Link href="#">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
