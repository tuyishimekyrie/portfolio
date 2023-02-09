import React from "react";
import { Feature } from "./Feature";

const Features = () => {
  return (
    <section className="mx-8" id="features">
      <h1 className="text-md md:text-5xl font-bold mb-4">Key Features.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <Feature
          text="Responsive Design "
          description="With a mobile focus, you can rest assured that every pixel will respond
        as it should no matter if your visitors are on a desktop, tablet or
        phone."
        />
        <Feature
          text="Design & code quality"
          description="Improper and depercated code can break layouts, corrupt data or worse. With Dannel, nothing but the latest version of HTML5 and CSS3 are used."
        />
        <Feature
          text="Easy to customize"
          description="You can easily customize colors, backgrounds & fonts via Sass files. We have created eash Sass file for each component to customize your template as you want easily."
        />
        <Feature
          text="Dark/Light mode"
          description="Each section and element has light and dark mode with easy control via our core classes and comes with auto adjust mode."
        />
        <Feature
          text="Modern layouts"
          description="A Creative, Unique and carefully crafted design by experience designer with great attention to details, flexibility and performance."
        />
        <Feature
          text="Flexibility"
          description="A combination of unique features make this template the most flexible, productivity oriented and simple to use template ever built."
        />
        <Feature
          text="Well documented"
          description="We believe that when the docs good and clear, this means not going through installation and modifications issues, which means more satisfaction."
        />
        <Feature
          text="Frequent updates"
          description="We will update our product permanently by adding new features, layouts and demos or by fixing bugs and issues."
        />
        <Feature
          text="Outstanding support"
          description="UniStudio's support experience is second to none. We not only provide a superior product... we'll be with you every step of the way."
        />
      </div>
    </section>
  );
};

export default Features;
