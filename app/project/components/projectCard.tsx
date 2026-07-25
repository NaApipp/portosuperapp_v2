import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/app/lib/projectData"; // function ProjectData
import { motion as m } from "framer-motion";
import { useState } from "react";
import {
  X,
  SquareArrowOutUpRight,
  Target,
  Lightbulb,
  Code2,
  Layers,
} from "lucide-react";

export default function projectCard({ project }: { project: ProjectData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <m.article
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
        className="flex flex-col h-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 text-[#08152F] dark:text-white bg-white dark:bg-[#2383AD]/40 shadow-sm transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-xl dark:hover:shadow-none"
      >
        <div className="relative aspect-video w-full bg-neutral-100 shrink-0">
          <Image
            src={project.image}
            alt={project.project_name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 420px"
          />
          <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-700 dark:text-zinc-200 absolute bottom-4 right-4 bg-white/80 dark:bg-[#0F172A]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-zinc-200/50 dark:border-white/10 shadow-sm z-10">
            {project.project_type}
          </p>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold tracking-tight">
            {project.project_name}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {project.project_desc}
          </p>
          <div className="mt-4 mb-4">
            <p className="text-sm leading-relaxed font-bold text-zinc-700 dark:text-zinc-200">
              Tech Stack:{" "}
              <span className="font-medium text-zinc-500 dark:text-zinc-400">
                {project.tech_stack}
              </span>
            </p>
          </div>

          {/* View Detail Project Button */}
          <m.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl px-6 py-2.5 font-poppins font-semibold text-sm bg-[#2383AD] text-white transition-all duration-300 hover:bg-sky-700 active:scale-95 shadow-md hover:shadow-xl"
          >
            View Detail Project
          </m.button>

          
        </div>
      </m.article>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Container Modal */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Modal */}
            <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[400px] bg-zinc-100 dark:bg-zinc-950 shrink-0 flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={project.image}
                  alt={project.project_name}
                  fill
                  className="object-cover md:object-contain p-0 md:p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Modal */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-start overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#2383AD] dark:text-[#38bdf8] bg-sky-50 dark:bg-[#2383AD]/10 rounded-full uppercase border border-sky-100 dark:border-[#2383AD]/20">
                  {project.project_type}
                </span>
              </div>

              <h2 className="text-lg sm:text-2xl font-extrabold text-zinc-900 dark:text-white mb-8 tracking-tight leading-tight">
                {project.project_name}
              </h2>

              <div className="flex flex-col gap-5 mb-8">
                {/* Description */}
                <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                      Overview
                    </h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                    {project.project_desc}
                  </p>
                </div>

                {project.target_user && (
                  <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                        Target User
                      </h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                      {project.target_user}
                    </p>
                  </div>
                )}

                {project.problem_solution && (
                  <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                        Problem & Solution
                      </h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                      {project.problem_solution}
                    </p>
                  </div>
                )}

                {project.tech_stack && (
                  <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                        Tech Stack
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.split(",").map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {project.links?.length ? (
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.links.map((l) => {
                    const isExternal = /^https?:\/\//.test(l.href);
                    return isExternal ? (
                      <a
                        key={`${project.id}-${l.label}`}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 font-poppins font-semibold text-sm bg-[#2383AD] text-white transition-all duration-300 hover:bg-sky-700 active:scale-95 shadow-md hover:shadow-xl"
                      >
                        {l.label}
                        <SquareArrowOutUpRight className="w-4 h-4 ml-2" />
                      </a>
                    ) : (
                      <Link
                        key={`${project.id}-${l.label}`}
                        href={l.href}
                        className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 font-poppins font-semibold text-sm bg-zinc-100 dark:bg-white/10 text-[#08152F] dark:text-white transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-white/20 active:scale-95"
                      >
                        {l.label}
                        <SquareArrowOutUpRight className="w-4 h-4 ml-2" />
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
