"use client";
import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <motion.div
      initial={{ opacity:0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      
      transition={{ type: 'spring', duration: 1 }}
      className=" py-4 px-2 flex justify-between items-center "
    >
      {/* Logo */}
      <Link href="/" className="text-3xl font-bold">
        Kyrie.
      </Link>
      {/* Links */}

      <div className="hidden gap-4 md:flex ">
        <Link
          href="/"
          className="font-bold text-lg cursor-pointer hover:text-slate-500 hover:ease-in"
        >
          OverView
        </Link>
        <Link
          href="/"
          className="font-bold text-lg cursor-pointer hover:text-slate-500 hover:ease-in"
        >
          Demos
        </Link>
        <Link
          href="/"
          className="font-bold text-lg cursor-pointer hover:text-slate-500 hover:ease-in"
        >
          Features
        </Link>
      </div>
      {/* Button */}
      <button
        type="button"
        className="hidden md:flex items-center gap-1 font-bold text-xl cursor-pointer border-b-2 border-[#0F0E0E] hover:border-b-2 hover:border-slate-500 hover:text-slate-400 hover:ease-in"
      >
        More Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
      {/* Menu Mobile */}
      <div className="md:hidden relative" onClick={handleClick}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        )}
      </div>

      <div
        className={
          !isOpen
            ? "hidden"
            : "md:hidden absolute flex flex-col items-center pt-36 text-white bg-[#0F0E0E] mt-16 w-screen inset-0"
        }
      >
        <Link href="/" className="text-xl font-bold py-1.5">
          OverView
        </Link>
        <Link href="/" className="text-xl font-bold py-1.5">
          Demos
        </Link>
        <Link href="/" className="text-xl font-bold py-1.5">
          Features
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
