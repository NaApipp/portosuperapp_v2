"use client";

import React from "react";
import { motion as m } from "framer-motion";

type Education = {
  scholl_name: string;
  location: string;
  dateRange: string;
  desc: string;
  details?: string[];
};

const educationData: Education[] = [
  //   SMKN 4 Kendal
  {
    scholl_name: "SMKN 4 Kendal",
    location: "Kendal, Central Java",
    dateRange: "Jan 2024 - Present",
    desc: "High School - RPL (Rekayasa Perangkat Lunak)",
    details: [
      "Focused on the fundamentals of software engineering",
      "Web development basics",
      "Database management"
    ]
  },
];

function DetailItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4 items-start">
      <span className="w-1.5 h-1.5 rounded-full bg-violet-500/80 mt-2 flex-shrink-0" />
      <span className="dark:text-zinc-400 text-zinc-500 text-[15px] leading-relaxed font-normal">{children}</span>
    </li>
  );
}

export default function Education() {
  return (
    <section className="dark:bg-[#08152F] bg-[#F8FAFC] scroll-mt-20 py-24" id="education">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header with line */}
        <m.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex items-center gap-6 mb-16 ">
          <h2 className="font-bebas text-4xl font-semibold tracking-[0.1em] text-[#08152F] dark:text-zinc-100 uppercase">
            EDUCATION
          </h2>
          <div className="h-[3px] flex-grow bg-zinc-400"></div>
        </m.div>

        {/* Timeline Container */}
        <div className="relative  ml-3 md:ml-4 pl-8 md:pl-12 space-y-20">
          {educationData.map((edu, index) => (
            <div key={index} className="relative group">
            {/* Content Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-[#08152F] dark:text-zinc-100 tracking-tight">
                    {edu.scholl_name}
                  </h3>
                  <p className="text-[#00BCFF] font-medium text-base tracking-wide">
                    {edu.location}
                  </p>
                </div>
                
                {/* Date Badge */}
                <div className="md:mt-1">
                  <span className="bg-zinc-800/50 backdrop-blur-sm dark:bg-zinc-800/50 dark:backdrop-blur-sm dark:text-zinc-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-zinc-700/30 whitespace-nowrap">
                    {edu.dateRange}
                  </span> 
                </div>
              </div>

              {/* Description Body */}
              <div className="max-w-4xl">
                <p className="text-[#08152F] dark:text-zinc-400 text-base leading-relaxed mb-6 font-normal">
                  {edu.desc}
                </p>

                {/* Details list if exists */}
                {edu.details && edu.details.length > 0 && (
                  <ul className="space-y-4 mt-4 ">
                    {edu.details.map((detail, dIdx) => (
                      <DetailItem key={dIdx}>{detail}</DetailItem>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
