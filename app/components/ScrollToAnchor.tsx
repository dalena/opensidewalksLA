"use client";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const ScrollToAnchor = ({
  anchor,
  children,
  mobileOffset = 0,
  desktopOffset = 0,
  ...props
}: {
  anchor: string;
  children: ReactNode;
  mobileOffset?: number;
  desktopOffset?: number;
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedAnchor = sessionStorage.getItem("scrollToAnchor");
    if (storedAnchor) {
      sessionStorage.removeItem("scrollToAnchor");
      console.log(`Scrolling to stored anchor: ${storedAnchor}`);
      scrollToTargetSection(storedAnchor, mobileOffset, desktopOffset);
    }
  }, [pathname, mobileOffset, desktopOffset]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(`Anchor clicked: ${anchor}`);
    sessionStorage.setItem("scrollToAnchor", anchor);

    if (pathname !== "/") {
      console.log(`Navigating to home page`);
      router.push("/");
    } else {
      const currentHash = window.location.hash;
      if (currentHash === `#${anchor}`) {
        console.log(`Refreshing the page`);
        window.location.reload();
      } else {
        console.log(`Scrolling to anchor: ${anchor}`);
        scrollToTargetSection(anchor, mobileOffset, desktopOffset);
      }
    }
  };

  const scrollToTargetSection = (
    anchor: string,
    mobileOffset: number,
    desktopOffset: number,
  ) => {
    const element = document.getElementById(anchor);
    if (element) {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const offset = isMobile ? mobileOffset : desktopOffset;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      console.log(`Scrolling to position: ${offsetPosition}`);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.replaceState({}, "", `/#${anchor}`);
    } else {
      console.log(`Element with id ${anchor} not found`);
    }
  };

  return (
    <span
      onClick={handleClick}
      {...props}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {children}
    </span>
  );
};

export default ScrollToAnchor;
