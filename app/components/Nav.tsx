import Image from 'next/image'
import Link from 'next/link'
import ScrollToAnchor from './ScrollToAnchor'



export const Nav = () => {
  return (
    <nav className="fixed top-0 bg-red-500 py-4 md:p-8 z-50 w-full">
      <div className="container mx-auto flex flex-col justify-between items-center gap-4 md:flex-row">
        <div className="flex flex-col font-balto font-bold text-center text-xl items-center gap-4 md:flex-row md:text-2xl">
          <Image
            src="/logo_white.svg"
            width={60}
            height={47}
            alt="Opensidewalks LA logo white gate with do not enter sign"
          />
          <h1>Open Sidewalks LA</h1>
        </div>
        <ul className="flex space-x-4 *:cursor-pointer">
          <li><ScrollToAnchor anchor="about" className="text-white hover:text-gray-300">About</ScrollToAnchor></li>
          <li><Link href="#" className="text-white hover:text-gray-300">Stories</Link></li>
          <li><Link href="#" className="text-white hover:text-gray-300">Articles</Link></li>
          <li><Link href="#" className="text-white hover:text-gray-300">Blog</Link></li>
          <li><Link href="#" className="text-white hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
