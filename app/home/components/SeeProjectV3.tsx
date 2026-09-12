"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeDown from "@/app/components/animations/FadeDown"
import FadeUp from "@/app/components/animations/FadeUp"
import { projectData, ProjectData } from "@/app/lib/projectData"

export default function ProjectV3() {
  const [isOpen, setIsOpen] = useState<string | null>(null)

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const featuredProjects = projectData.slice(-3)
  const activeProject = projectData.find((p, idx) => (p.id ?? String(idx)) === isOpen)

  return (
    <>
      <section id="projects" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
        <FadeDown>
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Selected Works</h3>
          </div>
        </FadeDown>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-8 px-6 md:px-12">
          {featuredProjects.map((project, index) => {
            const projectId = project.id ?? String(index)
            const techList = project.tech_stack && project.tech_stack !== "-" ? project.tech_stack.split(",").map(t => t.trim()) : []
            const demoLink = project.links.find(l => ["demo", "beranda", "figma", "playstore"].includes(l.label.toLowerCase()))?.href || project.links[0]?.href

            return (
              <FadeUp key={`desktop-${index}`}>
                <div className="group relative flex flex-col h-full bg-thirdary/10 rounded-2xl overflow-hidden border border-text-secondary/10 hover:border-text-primary/30 transition-all duration-500 hover:shadow-xl">
                  <div className="relative overflow-hidden aspect-[16/10] bg-text-secondary/5 border-b border-text-secondary/10">
                    <Image src={project.image} alt={project.project_name} fill className="object-cover transition-all duration-700 group-hover:scale-105" />

                    {/* Tech Stack Overlay */}
                    {techList.length > 0 && (
                      <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover:translate-y-0">
                        {techList.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-[10px] font-bold bg-background/90 text-text-primary px-2 py-1 rounded backdrop-blur-md border border-text-secondary/20 uppercase tracking-widest shadow-sm">
                            {tech}
                          </span>
                        ))}
                        {techList.length > 3 && <span className="text-[10px] font-bold bg-background/90 text-text-primary px-2 py-1 rounded backdrop-blur-md border border-text-secondary/20 uppercase tracking-widest shadow-sm">+{techList.length - 3}</span>}
                      </div>
                    )}
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                    {/* Numbering */}
                    <div className="absolute top-0 right-6 -translate-y-1/2 bg-background border border-text-secondary/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-text-secondary shadow-sm">{String(index + 1).padStart(2, "0")}</div>

                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-black text-text-primary tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-text-primary group-hover:to-text-secondary transition-all duration-500">{project.project_name}</h4>
                    </div>

                    <p className="text-sm text-text-secondary font-medium leading-relaxed mb-8 flex-grow line-clamp-3">{project.project_desc}</p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-text-secondary/10">
                      <button className="text-xs font-bold tracking-[0.2em] uppercase text-text-primary flex items-center gap-3 group/btn" onClick={() => setIsOpen(projectId)}>
                        View Details
                        <span className="w-8 h-[2px] bg-text-primary group-hover/btn:w-12 transition-all duration-300"></span>
                      </button>

                      {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="p-2 border border-text-secondary/20 rounded-full text-text-secondary hover:text-background hover:bg-text-primary hover:border-text-primary transition-all duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>

        {/* Mobile & Tablet View: Infinite Loop Slider */}
        <div className="lg:hidden w-full overflow-hidden relative py-4">
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
            <div className="flex gap-6 px-3">
              {featuredProjects.map((project, index) => {
                const projectId = project.id ?? String(index)
                const techList = project.tech_stack && project.tech_stack !== "-" ? project.tech_stack.split(",").map(t => t.trim()) : []
                const demoLink = project.links.find(l => ["demo", "beranda", "figma", "playstore"].includes(l.label.toLowerCase()))?.href || project.links[0]?.href

                return (
                  <div key={`mobile1-${index}`} className="group w-[85vw] sm:w-[400px] flex-shrink-0 flex flex-col bg-thirdary/10 rounded-2xl overflow-hidden border border-text-secondary/10">
                    <div className="relative overflow-hidden aspect-[16/10] bg-text-secondary/5 border-b border-text-secondary/10">
                      <Image src={project.image} alt={project.project_name} fill className="object-cover transition-all duration-700 group-hover:scale-105" />

                      {techList.length > 0 && (
                        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover:translate-y-0">
                          {techList.slice(0, 3).map((tech, i) => (
                            <span key={i} className="text-[10px] font-bold bg-background/90 text-text-primary px-2 py-1 rounded backdrop-blur-md border border-text-secondary/20 uppercase tracking-widest shadow-sm">
                              {tech}
                            </span>
                          ))}
                          {techList.length > 3 && <span className="text-[10px] font-bold bg-background/90 text-text-primary px-2 py-1 rounded backdrop-blur-md border border-text-secondary/20 uppercase tracking-widest shadow-sm">+{techList.length - 3}</span>}
                        </div>
                      )}
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                      <div className="absolute top-0 right-6 -translate-y-1/2 bg-background border border-text-secondary/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-text-secondary shadow-sm">{String(index + 1).padStart(2, "0")}</div>

                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-black text-text-primary tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-text-primary group-hover:to-text-secondary transition-all duration-500">{project.project_name}</h4>
                      </div>

                      <p className="text-sm text-text-secondary font-medium leading-relaxed mb-8 flex-grow line-clamp-3">{project.project_desc}</p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-text-secondary/10">
                        <button className="text-xs font-bold tracking-[0.2em] uppercase text-text-primary flex items-center gap-3 group/btn" onClick={() => setIsOpen(projectId)}>
                          View Details
                          <span className="w-8 h-[2px] bg-text-primary group-hover/btn:w-12 transition-all duration-300"></span>
                        </button>

                        {demoLink && (
                          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="p-2 border border-text-secondary/20 rounded-full text-text-secondary hover:text-background hover:bg-text-primary hover:border-text-primary transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex gap-6 px-3">
              {featuredProjects.map((project, index) => {
                const projectId = project.id ?? String(index)
                const techList = project.tech_stack && project.tech_stack !== "-" ? project.tech_stack.split(",").map(t => t.trim()) : []
                const demoLink = project.links.find(l => ["demo", "beranda", "figma", "playstore"].includes(l.label.toLowerCase()))?.href || project.links[0]?.href

                return (
                  <div key={`mobile2-${index}`} className="group w-[85vw] sm:w-[400px] flex-shrink-0 flex flex-col bg-thirdary/10 rounded-2xl overflow-hidden border border-text-secondary/10">
                    <div className="relative overflow-hidden aspect-[16/10] bg-text-secondary/5 border-b border-text-secondary/10">
                      <Image src={project.image} alt={project.project_name} fill className="object-cover transition-all duration-700 group-hover:scale-105" />

                      {techList.length > 0 && (
                        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover:translate-y-0">
                          {techList.slice(0, 3).map((tech, i) => (
                            <span key={i} className="text-[10px] font-bold bg-background/90 text-text-primary px-2 py-1 rounded backdrop-blur-md border border-text-secondary/20 uppercase tracking-widest shadow-sm">
                              {tech}
                            </span>
                          ))}
                          {techList.length > 3 && <span className="text-[10px] font-bold bg-background/90 text-text-primary px-2 py-1 rounded backdrop-blur-md border border-text-secondary/20 uppercase tracking-widest shadow-sm">+{techList.length - 3}</span>}
                        </div>
                      )}
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                      <div className="absolute top-0 right-6 -translate-y-1/2 bg-background border border-text-secondary/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-text-secondary shadow-sm">{String(index + 1).padStart(2, "0")}</div>

                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-black text-text-primary tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-text-primary group-hover:to-text-secondary transition-all duration-500">{project.project_name}</h4>
                      </div>

                      <p className="text-sm text-text-secondary font-medium leading-relaxed mb-8 flex-grow line-clamp-3">{project.project_desc}</p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-text-secondary/10">
                        <button className="text-xs font-bold tracking-[0.2em] uppercase text-text-primary flex items-center gap-3 group/btn" onClick={() => setIsOpen(projectId)}>
                          View Details
                          <span className="w-8 h-[2px] bg-text-primary group-hover/btn:w-12 transition-all duration-300"></span>
                        </button>

                        {demoLink && (
                          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="p-2 border border-text-secondary/20 rounded-full text-text-secondary hover:text-background hover:bg-text-primary hover:border-text-primary transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <FadeUp>
          <div className="mt-16 flex justify-center w-full px-6">
            <a href="/project" className="inline-flex items-center gap-3 px-8 py-4 bg-background border border-text-secondary/20 text-text-primary hover:border-text-primary hover:bg-text-primary hover:text-background rounded-xl font-bold tracking-widest text-sm uppercase transition-all duration-300 ease-out group hover:-translate-y-1.5 hover:scale-[1.02] shadow-sm hover:shadow-xl">
              <span>View More Project</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </FadeUp>

        <AnimatePresence>
          {isOpen !== null && activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              {/* Backdrop */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setIsOpen(null)} />

              {/* Modal Container */}
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 1, y: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="bg-background border border-text-secondary/20 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative z-10">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-text-secondary/10">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-1">{activeProject.project_type}</span>
                    <h4 className="text-2xl font-black text-text-primary tracking-tight">{activeProject.project_name}</h4>
                  </div>
                  <button className="text-text-secondary hover:text-text-primary transition-colors p-2 bg-text-secondary/5 rounded-full" onClick={() => setIsOpen(null)}>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar space-y-6">
                  {/* Image */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-text-secondary/10">
                    <Image src={activeProject.image} alt={activeProject.project_name} fill className="object-cover" />
                  </div>

                  {/* Description */}
                  <div>
                    <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Description</span>
                    <p className="text-sm text-text-primary font-medium leading-relaxed">{activeProject.project_desc}</p>
                  </div>

                  {/* Problem & Solution */}
                  {activeProject.problem_solution && (
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Problem & Solution</span>
                      <p className="text-sm text-text-secondary font-medium leading-relaxed">{activeProject.problem_solution}</p>
                    </div>
                  )}

                  {/* Target User */}
                  {activeProject.target_user && (
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-2">Target User</span>
                      <p className="text-sm text-text-secondary font-medium leading-relaxed">{activeProject.target_user}</p>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {activeProject.tech_stack && activeProject.tech_stack !== "-" && (
                    <div>
                      <span className="text-xs font-bold tracking-widest text-text-secondary uppercase block mb-3">Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech_stack.split(",").map((tech, i) => (
                          <span key={i} className="text-xs font-bold bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer Links */}
                <div className="p-6 border-t border-text-secondary/10 flex flex-wrap gap-3 bg-background">
                  {activeProject.links.map((link, idx) => (
                    <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="flex-1 text-center font-bold text-sm tracking-widest uppercase bg-text-primary text-background py-3 px-4 rounded-xl hover:-translate-y-1 transition-transform duration-300 min-w-[120px]">
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}
