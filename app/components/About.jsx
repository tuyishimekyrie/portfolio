"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="flex flex-col items-center my-24 mx-52" id="About">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <h1 className="underline text-2xl md:text-5xl text-center pb-8">
          About.
        </h1>
        <h2 className="font-bold text-xl py-4">
          Hi 👋, I `m Kyrie , a Front end developer with 4 years of experience.
        </h2>
        <p className="font-semibold ">
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences. I`m
          passionate about helping startups grow , improve their customer
          experience , and to raise venture capital.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
