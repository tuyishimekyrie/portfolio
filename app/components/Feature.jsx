"use client";
import React from "react";
import { motion } from "framer-motion";

export const Feature = ({ text, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="flex flex-col mb-6 md:mb-16 mr-4 md:mr-8"
    >
      <h2 className="font-bold md:text-xl py-6"> {text}</h2>
      <motion.p
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="font-italic"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
