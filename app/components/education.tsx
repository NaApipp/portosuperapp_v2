import React from "react";

type Education = {
  scholl_name: string;
  location: string;
  dateRange: string;
  desc: string;
};

const edcuation: Education[] = [
//   SMKN 4 Kendal
    {
    scholl_name: "SMKN 4 Kendal",
    location: "Kendal, Central Java",
    dateRange: "Jan 2024 - Present",
    desc: "High School - RPL (Rekayasa Perangkat Lunak)"
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

export default function Education() {
  return (
    <section className="bg-[#08152F] scroll-mt-20" id="education">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Left label */}
          <div className="md:col-span-3">
            <h2 className="font-bebas text-2xl font-semibold tracking-[0.25em] text-zinc-200">
              EDUCATION
            </h2>
          </div>

          {/* Right content */}
          <div className="md:col-span-9">
            <div className="space-y-12">
              {edcuation.map((edu) => (
                <div key={edu.scholl_name} className="space-y-2 font-poppins font-semibold">
                  {/* Title + date */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {edu.scholl_name}
                    </h3>
                    <p className="text-sm text-zinc-400 font-medium">{edu.dateRange}</p>
                  </div>

                  {/* Location */}
                  <p className="text-sm font-medium text-white">{edu.location}</p>

                  {/* Location */}
                  <p className="text-sm font-medium text-sky-400">{edu.desc}</p>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
