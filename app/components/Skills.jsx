import React from "react";
import Image from "next/image";
import html from "../../public/images/skills/html.png";
import css from "../../public/images/skills/css1.png";
import js from "../../public/images/skills/javascript.png";
import react from "../../public/images/skills/react.svg";
import redux from "../../public/images/skills/redux1.png";
import next from "../../public/images/skills/next1.png";
import firebase from "../../public/images/skills/firebase1.jpg";
import tailwind from "../../public/images/skills/tailwind1.png";
import github from "../../public/images/skills/github1.png";
import vercel from "../../public/images/skills/vercel1.jpg";
import typescript from "../../public/images/skills/typescript.png";
import wordpress from "../../public/images/skills/wordpress1.png";

const Skills = () => {
  return (
    <div className="flex flex-col items-center my-8" id="skills">
      <h2 className="underline text-2xl font-bold">Skills</h2>
      <div className="grid grid-cols-3 gap-x-10 md:gap-x-14 gap-y-6 my-8">
        <Image
          src={html}
          width={300}
          height={200}
          alt="html"
          className="w-12 h-12 object-cover "
        />
        <Image
          src={css}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
        <Image
          src={js}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
        <Image
          src={react}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
        <Image
          src={redux}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
        <Image
          src={next}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
        <Image
          src={firebase}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
        <Image
          src={tailwind}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
        <Image
          src={github}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />{" "}
        <Image
          src={vercel}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
        <Image
          src={wordpress}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
        <Image
          src={typescript}
          width={300}
          height={200}
          alt="css"
          className="w-12 h-12 object-cover"
        />
      </div>
    </div>
  );
};

export default Skills;
