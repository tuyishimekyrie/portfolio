import React from "react";
import Home from "./components/Home";
import Demos from "./components/Demos";
import InnerPages from "./components/InnerPages";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const page = () => {
  return (
    <div>
      {/* Home Component */}
      <Home />
      {/* About Component */}
      <Demos />
      {/* Inner Pages Component */}
      <InnerPages />
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
