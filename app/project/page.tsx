"use client";

import { useMemo, useState } from "react";
import {
  projectData,
  type ProjectType,
  type ProjectData,
} from "@/app/lib/projectData";
import ProjectCard from "./components/projectCard";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

type FilterType = ProjectType | "all";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Web Application", value: "Website Development" },
  { label: "UI/UX Design", value: "UI/UX Design" },
  { label: "Wordpress", value: "Wordpress" },
];

export default function Project() {
  const [activeType, setActiveType] = useState<FilterType>("all");

  const filteredProjects = useMemo(() => {
    if (activeType === "all") return projectData;
    return projectData.filter((p) => p.project_type === activeType);
  }, [activeType]);

  return (
    <>
      <Navbar />
      <main className="pl-10 pr-10 pb-20 pt-20 bg-[#08152F]">
        {/* Tittle */}
        <div className="flex flex-col md:flex-col md:gap-2 gap-3 items-center m-7">
          <h1 className="font-extrabold font-bebas text-3xl md:text-5xl text-sky-500">Project Showcase </h1>
          <p className="font-extrabold font-poppins text-2xl md:text-5xl text-center">Selected works <br /> and highlights</p>
        </div>
        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {FILTERS.map((f) => {
            const isActive = activeType === f.value;

            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setActiveType(f.value)}
                aria-pressed={isActive ? "true" : "false"}
                className={[
                  "px-4 py-2 rounded-full font-medium text-sm font-poppins border transition",
                  isActive
                    ? "bg-[#2383AD] text-white border-black cursor-not-allowed"
                    : "bg-white text-black border-gray-300 cursor-pointer hover:border-[#2383AD]",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* LIST (pakai card kamu yang sudah ada) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              {/* render card kamu di sini */}
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* OPTIONAL: empty state */}
        {filteredProjects.length === 0 && (
          <p className="text-sm text-gray-500">
            Tidak ada project untuk filter ini.
          </p>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
