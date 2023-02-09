"use client";
import React from "react";
import data from "../../data.json";
import Image from "next/image";

const Inner = () => {
  return (
    <div className="relative  flex overflow-x-scroll snap-mandatory snap-x gap-x-14 py-8 ">
      {data.map((ans, i) => {
        return (
          <div key={i} className=" flex flex-shrink-0 flex-col snap-center ">
            <Image
              src="https://raw.githubusercontent.com/tuyishimekyrie/Page_Images/main/pages/desktop-design.jpg"
              width={100}
              height={400}
              alt={ans.name}
              className="w-80 h-80 object-contain"
            />
            <p className="text-md md:text-2xl font-semibold pt-4">
              {ans.name} - Website.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Inner;
