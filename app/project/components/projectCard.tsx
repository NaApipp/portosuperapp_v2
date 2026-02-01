
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/app/lib/projectData"; // function ProjectData

export default function projectCard({ project }: { project: ProjectData }) {

  return (
    <>
      <article className="overflow-hidden rounded-2xl border border-neutral-200 text-white bg-[#2383AD]/40 shadow-sm transition hover:shadow-md transition-transform duration-500 ease-out hover:scale-105">
        <div className="relative aspect-[16/9] w-full bg-neutral-100">
          <Image
            src={project.image}
            alt={project.project_name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold">{project.project_name}</h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed">
            {project.project_desc}
          </p>
          <p className="mt-2 mb-2 line-clamp-3 text-sm leading-relaxed font-bold">
            Tech Stack: <span className="font-medium">{project.tech_stack}</span>
          </p>


          {project.links?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.links.map((l) => {
                const isExternal = /^https?:\/\//.test(l.href);
                // Button Link
                return isExternal ? (
                  <a
                    key={`${project.id}-${l.label}`}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full pl-7 pr-7 pt-2 font-poppins font-medium pb-2 font-poppins bg-[#2383AD] text-white transition hover:bg-sky-950"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={`${project.id}-${l.label}`}
                    href={l.href}
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
