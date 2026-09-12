"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/app/lib/projectData";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SquareArrowOutUpRight } from "lucide-react";

export default function ProjectCard({ project }: { project: ProjectData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const techList =
    project.tech_stack && project.tech_stack !== "-"
      ? project.tech_stack.split(",").map((t) => t.trim())
      : [];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* ── Card ── */}
      <article
        onClick={() => setIsOpen(true)}
        className="group flex flex-col h-full bg-thirdary/10 rounded-2xl overflow-hidden border border-text-secondary/10 hover:border-text-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      >
        <div className="relative overflow-hidden aspect-[16/10] bg-text-secondary/5 border-b border-text-secondary/10">
          <Image
            src={project.image}
            alt={project.project_name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 420px"
          />
          <span className="absolute top-3 right-3 text-[9px] font-black tracking-widest uppercase bg-background/90 text-text-primary px-3 py-1 rounded-full backdrop-blur-md border border-text-secondary/10">
            {project.project_type}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1 gap-3">
          <h3 className="text-xl font-black text-text-primary tracking-tight leading-tight">
            {project.project_name}
          </h3>
          <p className="text-sm text-text-secondary font-medium leading-relaxed line-clamp-3 flex-grow">
            {project.project_desc}
          </p>
          {techList.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {techList.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold bg-background text-text-primary px-2.5 py-1 rounded-lg border border-text-secondary/10 uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
              {techList.length > 4 && (
                <span className="text-[10px] font-bold bg-background text-text-secondary px-2.5 py-1 rounded-lg border border-text-secondary/10 uppercase tracking-wider">
                  +{techList.length - 4}
                </span>
              )}
            </div>
          )}
          <div className="flex items-center justify-between pt-4 border-t border-text-secondary/10">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="text-xs font-bold tracking-[0.2em] uppercase text-text-primary flex items-center gap-2 group/btn"
            >
              View Details
              <span className="w-5 h-[2px] bg-text-primary group-hover/btn:w-9 transition-all duration-300" />
            </button>
            {project.links?.[0] && (
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 border border-text-secondary/10 rounded-xl text-text-secondary hover:text-background hover:bg-text-primary hover:border-text-primary transition-all duration-300"
              >
                <SquareArrowOutUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </article>

      {/* ── Modal (Portaled to document.body) ── */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
                />

                {/* Dialog — split left/right */}
                <motion.div
                  key="dialog"
                  initial={{ opacity: 0, scale: 0.96, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 24 }}
                  transition={{ type: "spring", damping: 30, stiffness: 320 }}
                  className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-10 pointer-events-none"
                >
                  <div
                    className="pointer-events-auto relative w-full max-w-4xl bg-background border border-text-secondary/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                    style={{ maxHeight: "88vh" }}
                  >
                    {/* LEFT — Image */}
                    <div className="hidden md:block relative w-[45%] shrink-0 bg-[#0d0d0d]">
                      <Image
                        src={project.image}
                        alt={project.project_name}
                        fill
                        className="object-contain p-4"
                        sizes="50vw"
                      />
                    </div>

                    {/* RIGHT — Content */}
                    <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
                      {/* Sticky top bar */}
                      <div className="sticky top-0 z-10 flex items-center justify-between px-6 pt-6 pb-4 bg-background/95 backdrop-blur-sm border-b border-text-secondary/10">
                        <span className="text-[9px] font-black tracking-[0.2em] uppercase bg-thirdary/30 text-text-secondary px-3 py-1.5 rounded-full border border-text-secondary/10">
                          {project.project_type}
                        </span>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="p-1.5 rounded-xl bg-thirdary/20 hover:bg-thirdary/50 text-text-secondary hover:text-text-primary transition-all duration-200"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Mobile image */}
                      <div className="md:hidden relative w-full aspect-video bg-[#0d0d0d] border-b border-text-secondary/10">
                        <Image
                          src={project.image}
                          alt={project.project_name}
                          fill
                          className="object-contain p-4"
                          sizes="100vw"
                        />
                      </div>

                      {/* Scrollable body */}
                      <div className="flex flex-col gap-4 p-6">
                        <h2 className="text-2xl font-black text-text-primary tracking-tighter">
                          {project.project_name}
                        </h2>

                        {/* Overview */}
                        <div className="rounded-2xl border border-text-secondary/10 bg-thirdary/10 p-5">
                          <p className="text-[10px] font-black tracking-[0.2em] text-text-secondary uppercase mb-3">
                            Overview
                          </p>
                          <p className="text-sm text-text-primary font-medium leading-relaxed">
                            {project.project_desc}
                          </p>
                        </div>

                        {/* Target User */}
                        {project.target_user && (
                          <div className="rounded-2xl border border-text-secondary/10 bg-thirdary/10 p-5">
                            <p className="text-[10px] font-black tracking-[0.2em] text-text-secondary uppercase mb-3">
                              Target User
                            </p>
                            <p className="text-sm text-text-primary font-medium leading-relaxed">
                              {project.target_user}
                            </p>
                          </div>
                        )}

                        {/* Problem & Solution */}
                        {project.problem_solution && (
                          <div className="rounded-2xl border border-text-secondary/10 bg-thirdary/10 p-5">
                            <p className="text-[10px] font-black tracking-[0.2em] text-text-secondary uppercase mb-3">
                              Problem & Solution
                            </p>
                            <p className="text-sm text-text-primary font-medium leading-relaxed">
                              {project.problem_solution}
                            </p>
                          </div>
                        )}

                        {/* Tech Stack */}
                        {techList.length > 0 && (
                          <div className="rounded-2xl border border-text-secondary/10 bg-thirdary/10 p-5">
                            <p className="text-[10px] font-black tracking-[0.2em] text-text-secondary uppercase mb-3">
                              Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {techList.map((tech, i) => (
                                <span
                                  key={i}
                                  className="text-xs font-bold bg-background text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Links */}
                        {project.links?.length ? (
                          <div className="flex flex-wrap gap-3 pt-2">
                            {project.links.map((l) => {
                              const isExternal = /^https?:\/\//.test(l.href);
                              return isExternal ? (
                                <a
                                  key={`${project.id}-${l.label}`}
                                  href={l.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-text-primary text-background text-xs font-black tracking-widest uppercase rounded-xl hover:-translate-y-0.5 shadow-md transition-all duration-300"
                                >
                                  {l.label}
                                  <SquareArrowOutUpRight className="w-3.5 h-3.5" />
                                </a>
                              ) : (
                                <Link
                                  key={`${project.id}-${l.label}`}
                                  href={l.href}
                                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-text-secondary/10 text-text-primary text-xs font-black tracking-widest uppercase rounded-xl hover:border-text-primary/30 hover:bg-thirdary/30 transition-all duration-300"
                                >
                                  {l.label}
                                  <SquareArrowOutUpRight className="w-3.5 h-3.5" />
                                </Link>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
