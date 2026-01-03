import React from "react";

type Experience = {
  company: string;
  location: string;
  dateRange: string;
  bullets: string[];
   links?: { label: string; href: string }[];
};

const experience: Experience[] = [
  //   SMKN 4 Kendal
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
      { label: "Access Here", href: "https://greencode-v2.vercel.app/" },
    ],
  },
];

function DashItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="select-none text-zinc-500">-</span>
      <span className="text-zinc-300">{children}</span>
    </li>
  );
}

export default function Experience() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Left label */}
          <div className="md:col-span-3">
            <h2 className="font-bebas text-2xl font-semibold tracking-[0.25em] text-zinc-200">
              EXPERIENCE
            </h2>
          </div>

          {/* Right content */}
          <div className="md:col-span-9">
            <div className="space-y-12">
              {experience.map((exp) => (
                <div key={exp.company} className="space-y-2">
                  {/* Title + date */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-zinc-400">{exp.dateRange}</p>
                  </div>

                  {/* Location */}
                  <p className="text-sm font-medium text-sky-400">
                    {exp.location}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                    {exp.bullets.map((b, i) => (
                      <DashItem key={i}>{b}</DashItem>
                    ))}

                    {exp.links?.map((l) => (
                      <DashItem key={l.href}>
                        <span className="text-zinc-300">{l.label} : </span>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-400 underline-offset-4 hover:underline"
                        >
                          {l.href}
                        </a>
                      </DashItem>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
