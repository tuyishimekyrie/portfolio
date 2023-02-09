"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="m-8 divide-y"
    >
      <h1 className="text-2xl md:text-7xl text-center font-bold pb-6 mx-6 md:mx-20">
        Turn your brand into a great one.
      </h1>
      <div className="py-6 font-semibold text-md">
        <p>2023 © Kyrie.</p>
      </div>
    </motion.div>
  );
};

export default Footer;
