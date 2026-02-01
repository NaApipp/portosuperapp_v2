"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <>
      <div
        className="pl-10 pr-10 flex flex-col-reverse gap-5 pt-20 md:flex-row md:pt-16 md:min-h-screen"
        id="home"
      >
        {/* Container 1 */}
        <div className="flex flex-col gap-4 md:gap-8 justify-center md:w-1/2">
          <p className="md:text-4xl text-2xl font-poppins font-semibold">
            Hey, I'm
          </p>
          <h1 className="font-lolita text-3xl md:text-6xl">
            <TypeAnimation
              sequence={["Nabil Arif Triyanto", 2000]}
              speed={50}
              deletionSpeed={50}
              repeat={Infinity}
            />
          </h1>
          <h2 className="font-poppins font-semibold md:text-[1rem] text-[13px]">
            Full-stack Web Developer proficient in React, Next.js, and
            TypeScript. Focused on developing innovative solutions with
            cutting-edge technologies to deliver responsive, secure, and
            user-centric digital platforms.
          </h2>
        </div>
        {/* Container 2 */}
        <div className="flex items-center justify-center md:w-1/2">
          {/* Personal Image */}
          <img
            src="asset\image\personal\personal_photo.jpg"
            alt="Image Profile"
            className="md:w-auto md:h-[500px] rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}
