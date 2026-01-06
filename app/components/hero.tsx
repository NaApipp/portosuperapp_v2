"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <>
      <div className="pl-10 pr-10 min-h-screen flex pt-16" id="home">
        {/* Container 1 */}
        <div className="md:flex md:flex-col flex-row  gap-8 justify-center w-1/2">
          <p className="text-4xl font-poppins font-semibold">Hey, I'm</p>
          <h1 className="font-lolita text-6xl">
            <TypeAnimation
              sequence={["Nabil Arif Triyanto", 2000]}
              speed={50}
              deletionSpeed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="font-poppins font-semibold text-[1rem]">
            Passionate about <span>Website Development. </span>I love creating
            innovative solutions using modern technologies like
            <span>React, Next.js, TypeScript, and more.</span> Currently focused
            on spanuilding high-performance applications and learning CI/CD
            pipelines.
          </p>
        </div>
        {/* Container 2 */}
        <div className="flex items-center justify-center w-1/2">
        {/* Personal Image */}
          <img
            src="asset\image\personal\personal_phot.jpg"
            alt="Image Profile"
            className="w-auto h-[500px] rounded"
          />
        </div>
      </div>
    </>
  );
}
