import Link from "next/link";
import ScrollToAnchor from "./ScrollToAnchor";

const navLinks = [
  { href: "/blog", label: "Blog", isScroll: false },
  { href: "#about", label: "About", isScroll: true },
  { href: "#articles", label: "Articles", isScroll: true },
  { href: "#faq", label: "FAQ", isScroll: true },
  { href: "#contact", label: "Contact", isScroll: true },
];

export const Nav = () => {
  return (
    <nav className="top-0 z-50 w-full py-6 md:p-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center font-balto text-xl font-bold md:text-2xl">
          <Link
            className="flex cursor-pointer flex-col items-center gap-4 space-x-4 rounded-md border-2 bg-silver-100 px-2 py-1 text-silver-950 shadow-2xl outline outline-4 outline-silver-100 transition ease-in-out md:flex-row"
            href="/"
          >
            <h1>Open Sidewalks LA</h1>
          </Link>
        </div>
        <ul className="flex cursor-pointer space-x-4 rounded-md border-2 bg-azul-600 px-2 py-1 font-overpass text-base font-bold text-silver-50 shadow-2xl outline outline-4 outline-azul-600">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="transition ease-in-out hover:underline hover:decoration-wavy hover:underline-offset-4"
            >
              {link.isScroll ? (
                <ScrollToAnchor anchor={link.href.substring(1)}>
                  {link.label}
                </ScrollToAnchor>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
