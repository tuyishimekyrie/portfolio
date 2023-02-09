"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Demo from "./Demo";
import { motion } from "framer-motion";
import data from "../../data.json";

const Demos = () => {
  const myVariants = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animating: {
      y: 1,
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        default: { ease: "linear" },
      },
    },
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={myVariants}
      initial="initial"
      whileInView="animating"
      viewport={{once: true}}
      className="grid grid-cols-1 md:grid-cols-2 md:gap-24  m-8 mt-32"
    >
      {data.map((ans, i) => {
        return (
          <motion.div
            variants={stagger}
            whileInView="animate"
            viewport={{ once: true }}
            key={i}
          >
            <Demo src={ans.src} name={ans.name} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Demos;
