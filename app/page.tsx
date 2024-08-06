import React, { useState } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Blog from "./components/Blog";
import Articles from "./components/Articles";
import Faq from "./components/Faq";
import { Contact } from "./components/Contact";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Articles />
      <Faq />
      <Contact />
    </>
  );
};

export default Page;
