import ScrollToAnchor from "./ScrollToAnchor";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#articles", label: "Articles" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];
const homeLink = { href: "#home", label: "Open Sidewalks LA" };

export const Nav = () => {
  return (
    <nav className="pb-[8vh]">
      <div className="fixed top-0 z-50 w-full py-6 md:p-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center font-balto text-xl font-bold md:text-2xl">
            <ScrollToAnchor
              anchor={homeLink.href.substring(1)}
              mobileOffset={150}
              desktopOffset={80}
            >
              <h1 className="flex cursor-pointer flex-col items-center gap-4 space-x-4 rounded-md border-2 bg-silver-100 px-2 py-1 text-silver-950 shadow-2xl outline outline-4 outline-silver-100 transition ease-in-out md:flex-row">
                {homeLink.label}
              </h1>
            </ScrollToAnchor>
          </div>
          <ul className="flex cursor-pointer space-x-4 rounded-md border-2 bg-silver-100 px-2 py-1 font-overpass text-base font-bold text-silver-950 shadow-2xl outline outline-4 outline-silver-100">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="transition ease-in-out hover:underline hover:decoration-wavy hover:underline-offset-4"
              >
                <ScrollToAnchor
                  anchor={link.href.substring(1)}
                  mobileOffset={150}
                  desktopOffset={80}
                >
                  {link.label}
                </ScrollToAnchor>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
