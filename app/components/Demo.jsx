import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Demo = ({ src, name }) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col my-8 md:m-0">
        <Image
          src="https://raw.githubusercontent.com/tuyishimekyrie/Page_Images/main/pages/desktop-design2.jpg"
          alt="image"
          width={800}
          height={100}
          className="object-cover h-64 md:h-80 w-full "
        />
        <div className="flex justify-between mt-4">
          <p className="text-sm md:text-xl font-semibold">{name}.</p>
          <Link href="/" className="group flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-sm md:text-xl font-semibold border-b-2  group-hover:border-b-2 group-hover:border-slate-700">
              Live Preview
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Demo;
