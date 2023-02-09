import React from "react";
import Home from "./components/Home";
import Demos from "./components/Demos";
import InnerPages from "./components/InnerPages";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import dataImg from "./dataImg";
import Image from "next/image";
import About from "./components/About";

const page = () => {
  return (
    <div>
      {/* Home Component */}
      <Home />
      {/* About component */}
      <About />
      {/* About Component */}
      {/* <Demos /> */}
      {/* Inner Pages Component */}
      {/* <InnerPages /> */}
      {/* Skills component */}
      <Skills />
      {/* Feature Component */}

      <Features />
      {/* Contact Component */}
      <Contact />
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default page;
