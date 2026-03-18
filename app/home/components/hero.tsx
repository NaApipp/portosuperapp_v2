"use client";

import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div
        className="pl-10 pr-10 flex flex-col gap-5 pt-20 md:flex-row md:pt-16 md:min-h-screen"
        id="home"
      >
        {/* Container 1 */}
        <div className="flex flex-col gap-4 md:gap-8 justify-center md:w-1/2">
          <p className="md:text-4xl text-2xl font-poppins font-semibold text-[#0F172A] dark:text-white">
            Hey, I'm
          </p>
          <h1 className="font-lolita text-3xl md:text-5xl text-[#0F172A] dark:text-white">
            <TypeAnimation
              sequence={["Nabil Arif Triyanto", 2000]}
              speed={50}
              deletionSpeed={50}
              repeat={Infinity}
            />
          </h1>
          <h2 className="font-poppins font-semibold md:text-[1rem] text-[13px] text-[#0F172A] dark:text-white">
            Full-stack Web Developer proficient in React, Next.js, and
            TypeScript. Focused on developing innovative solutions with
            cutting-edge technologies to deliver responsive, secure, and
            user-centric digital platforms.
          </h2>
          <div className="flex items-center gap-2">
            <p className="font-inter font-light text-gray-400 mr-3">
              Find me on
            </p>
            <Link href="https://github.com/NaApipp">
              <Github className="hover:text-gray-500 dark:text-white text-black cursor-pointer transition-colors duration-300 border border-2 border-gray-600 p-3 rounded-2xl w-12 h-auto" />
            </Link>
            <Link href="https://www.linkedin.com/in/nabilariftriyanto/">
              <Linkedin className="hover:text-gray-500 dark:text-white text-black cursor-pointer transition-colors duration-300 border border-2 border-gray-600 p-3 rounded-2xl w-12 h-auto" />
            </Link>
            <Link href="https://www.instagram.com/n_apipppp/">
              <Instagram className="hover:text-gray-500 dark:text-white text-black cursor-pointer transition-colors duration-300 border border-2 border-gray-600 p-3 rounded-2xl w-12 h-auto" />
            </Link>
          </div>
          <div className="dark:bg-[#102D41]/30 bg-[#d4d4d4] p-5 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="border dark:border-white border-black w-7"></div>
              <h1 className="font-poppins font-semibold text-2xl text-black dark:text-white">About</h1>
            </div>
            
            <p className="font-inter font-medium text-gray-600 dark:text-white">
              I’m a full-stack developer specializing in <span className="font-semibold text-black dark:text-[#00BCFF]">React, Next.js, and TypeScript</span>. I enjoy building fast, scalable, and intuitive web
              applications that deliver real value to users. My focus is on
              clean architecture, performance, and creating seamless user
              experiences.
            </p>
          </div>
        </div>
        {/* Container 2 */}
        <div className="flex items-center justify-center md:w-1/2">
          {/* Personal Image */}
          <img
            src="asset\image\personal\personal_photo.jpg"
            alt="Image Profile"
            className="md:w-auto md:h-[500px] rounded-2xl border border-white shadow-black shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}
