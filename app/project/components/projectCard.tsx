
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/app/lib/projectData"; // function ProjectData

export default function projectCard({ project }: { project: ProjectData }) {

  return (
    <>
      <article className="flex flex-col h-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 text-[#08152F] dark:text-white bg-white dark:bg-[#2383AD]/40 shadow-sm transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-xl dark:hover:shadow-none">
        <div className="relative aspect-video w-full bg-neutral-100 shrink-0">
          <Image
            src={project.image}
            alt={project.project_name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold tracking-tight">{project.project_name}</h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {project.project_desc}
          </p>
          <div className="mt-4 mb-4">
             <p className="text-sm leading-relaxed font-bold text-zinc-700 dark:text-zinc-200">
                Tech Stack: <span className="font-medium text-zinc-500 dark:text-zinc-400">{project.tech_stack}</span>
             </p>
          </div>


          {project.links?.length ? (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
              {project.links.map((l) => {
                const isExternal = /^https?:\/\//.test(l.href);
                // Button Link
                return isExternal ? (
                  <a
                    key={`${project.id}-${l.label}`}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 font-poppins font-semibold text-sm bg-[#2383AD] text-white transition-all duration-300 hover:bg-sky-700 dark:hover:bg-sky-950 hover:shadow-lg active:scale-95"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={`${project.id}-${l.label}`}
                    href={l.href}
                    className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 font-poppins font-semibold text-sm bg-zinc-100 dark:bg-white/10 text-[#08152F] dark:text-white transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-white/20"
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
