"use client";
import React from "react";
export const Logo = () => {
  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    // Use window.location.replace to navigate to the homepage without retaining the hash
    window.location.replace("/");
  };
  return (
    <a
      className="flex cursor-pointer flex-col items-center gap-4 space-x-4 rounded-md border-2 bg-silver-100 px-2 py-1 text-silver-950 shadow-2xl outline outline-4 outline-silver-100 transition ease-in-out md:flex-row"
      onClick={handleLogoClick}
    >
      <h1>Open Sidewalks LA</h1>
    </a>
  );
};
