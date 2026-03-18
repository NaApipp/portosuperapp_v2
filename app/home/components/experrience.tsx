import React from "react";

type Experience = {
  company: string;
  location: string;
  dateRange: string;
  bullets: string[];
  links?: { label: string; href: string }[];
};

const experience: Experience[] = [
  {
    company: "Intern Quality Assurance (QA)",
    location: "PT Bullion Ecosystem International - Bogor, West Java",
    dateRange: "Jul 2025 - Present",
    bullets: [
      "Conduct functional & UI testing for new and existing features",
      "Create detailed test cases and structured bug reports",
      "Work closely with developers to ensure high product quality",
    ],
  },
  {
    company: "IT Competetion (ITC)",
    location: "Dian Nuswantoro Unviversity - Semarang, Central Java",
    dateRange: "Jan 2025",
    bullets: [
      "Leading a team, all the way to the grand final",
      "Work in FullStack Developer",
    ],
    links: [
      { label: "Access Here", href: "https://greencodev2.vercel.app/" },
    ],
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

export default function Experience() {
  return (
    <section className="dark:bg-[#08152F] bg-[#F8FAFC] scroll-mt-20 py-24" id="experience">
      <div className="mx-auto max-w-6xl px-6 font-poppins font-semibold">
        {/* Header with line */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="font-bebas text-4xl font-semibold tracking-[0.1em] text-[#08152F] dark:text-zinc-100 uppercase">
            EXPERIENCE
          </h2>
          <div className="h-[3px] flex-grow bg-zinc-400"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative  ml-3 md:ml-4 pl-8 md:pl-12 space-y-20">
          {experience.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Content Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-[#08152F] dark:text-zinc-100 tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-[#00BCFF] font-medium text-base tracking-wide">
                    {exp.location}
                  </p>
                </div>
                
                {/* Date Badge */}
                <div className="md:mt-1">
                  <span className="bg-zinc-800/50 backdrop-blur-sm dark:bg-zinc-800/50 dark:backdrop-blur-sm dark:text-zinc-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-zinc-700/30 whitespace-nowrap">
                    {exp.dateRange}
                  </span> 
                </div>
              </div>

              {/* Description Body */}
              <div className="max-w-4xl">
                {/* Bullets list */}
                <ul className="space-y-4 mt-4">
                  {exp.bullets.map((b, i) => (
                    <DetailItem key={i}>{b}</DetailItem>
                  ))}

                  {exp.links?.map((l) => (
                    <DetailItem key={l.href}>
                      <span className="text-zinc-300 font-semibold">{l.label}: </span>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-400 underline-offset-4 hover:underline transition-colors font-medium"
                      >
                        {l.href}
                      </a>
                    </DetailItem>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
