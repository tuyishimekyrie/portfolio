"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

 const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 1.3 }}
      className="flex flex-col text-center items-center justify-center  sm:mt-6 mx:0 sm:mx-8"
    >
      <h1 className="text-[32px] sm:text-[45px] md:text-[70px]  font-bold py-14 md:py-8">
        Setup your <br />
        <span className="text-slate-800 text-[32px] sm:text-[45px] md:text-[70px]">
          <Typewriter
            words={[" portfolio", " agency", " studio", " creative"]}
            loop={10}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        website <br />
        with kyrie.
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.25 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1.6 }}
      >
        <button className="group md:mt-12 flex items-center text-xl md:text-2xl font-bold gap-2 bg-slate-800 px-6 md:px-8 py-3 hover:bg-slate-700 hover:ease-in ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:translate-y-1.5 group-hover:ease-in"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
          <p>Export Demos</p>
        </button>
      </motion.div>
    </motion.div>
  );
};
export default Home;