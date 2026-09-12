"use client";

import { useMemo, useState } from "react";
import {
  projectData,
  type ProjectType,
} from "@/app/lib/projectData";
import ProjectCard from "./components/projectCard";
import FadeDown from "@/app/components/animations/FadeDown";
import FadeUp from "@/app/components/animations/FadeUp";
import Header from "../components/navbar";

type FilterType = ProjectType | "all";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Web App", value: "Website Development" },
  { label: "UI/UX Design", value: "UI/UX Design" },
  { label: "WordPress", value: "Wordpress" },
  { label: "QA Project", value: "QA Project" },
];

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Education", href: "/home#education" },
  { label: "Experience", href: "/home#experience" },
  { label: "Projects", href: "/project" },
];

export default function Project() {
  const [activeType, setActiveType] = useState<FilterType>("all");

  const filteredProjects = useMemo(() => {
    const list = activeType === "all" ? projectData : projectData.filter((p) => p.project_type === activeType);
    return [...list].sort((a, b) => Number(b.id) - Number(a.id));
  }, [activeType]);

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <header className="cursor-default sticky top-0 z-50">
            <Header/>
          </header>
      {/* Header Section */}
      <section className="w-full max-w-7xl mx-auto pt-32 pb-16 px-6 md:px-12">
        <FadeDown>
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Portfolio</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-primary tracking-tighter mb-6">
            Project Showcase
          </h1>
          <p className="text-lg md:text-xl font-medium text-text-secondary max-w-xl">
            Selected works and highlights — built with precision and passion.
          </p>
        </FadeDown>
      </section>

      {/* Filter */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-12 border-t border-text-secondary/10 pt-10">
        <FadeDown>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = activeType === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveType(f.value)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold tracking-widest uppercase border transition-all duration-300 ${
                    isActive
                      ? "bg-text-primary text-background border-text-primary"
                      : "bg-thirdary/10 text-text-secondary border-text-secondary/10 hover:border-text-primary/30 hover:bg-thirdary/30 hover:text-text-primary"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </FadeDown>
      </section>

      {/* Project Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">
        {filteredProjects.length === 0 ? (
          <FadeUp>
            <div className="text-center py-24">
              <p className="text-text-secondary font-medium">Tidak ada project untuk filter ini.</p>
            </div>
          </FadeUp>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <FadeUp key={project.id} delay={index * 0.05}>
                <ProjectCard project={project} />
              </FadeUp>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-text-secondary/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-medium text-text-secondary">
          &copy; {year}{" "}
          <a href="https://www.instagram.com/n_apipppp/" className="text-text-primary font-bold hover:underline underline-offset-4">
            Nabil Arif
          </a>
          . All Rights Reserved.
        </span>
        <nav className="flex items-center gap-6">
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} className="text-xs font-bold tracking-widest text-text-secondary uppercase hover:text-text-primary transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
