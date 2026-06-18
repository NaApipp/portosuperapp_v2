
"use client";

import { motion as m } from "framer-motion";

type TechStack = {
    img: string;
    alt: string;
    description: string;
}

const techstack: TechStack[] = [
    // Tech Stack 1
    {
      img: "https://cdn.simpleicons.org/postman/374151",
      alt: "Postman",
      description: "Testing API Tools"
    },
    // tech Stack 2
    {
      img: "https://cdn.simpleicons.org/vercel/374151",
      alt: "Vercel",
      description: "Deployment Server"
    },
    // Tech Stack 3
    {
      img: "https://cdn.simpleicons.org/nextdotjs/374151",
      alt: "Next.js",
      description: "Fullstack Framework + React"
    },
    // Tech Stack 4
    {
      img: "https://cdn.simpleicons.org/mongodb/374151",
      alt: "MongoDB Atlas",
      description: "No SQL Database Server"
    },
    // Tech Stack 5
    {
      img: "https://cdn.simpleicons.org/supabase/374151",
      alt: "Supabase",
      description: "SQL Database Server"
    },
    // Tech Stack 6
    {
      img: "https://cdn.simpleicons.org/laravel/374151",
      alt: "Laravel",
      description: "Fullstack Framework"
    },
    // Tech Stack 7
    {
      img: "https://cdn.simpleicons.org/github/374151",
      alt: "Github",
      description: "Version Controll & Collaboration Tool"
    },
    // Tech Stack 8
    {
      img: "https://cdn.simpleicons.org/cypress/374151",
      alt: "Cypress",
      description: "Automation Testing Tools"
    }
]


export default function TechStack() {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-3xl font-semibold uppercase tracking-wide text-[#08152F] dark:text-zinc-100">
              Tech Stack
            </p>
            <h2 className="mt-3 text-sm font-semibold text-[#00BCFF]">
              Tools that I Use
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {techstack.map((t, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 rounded-xl border border-gray-200 bg-white/80 dark:bg-slate-900/50 border border-zinc-200 dark:border-white/10 p-6 transition hover:border-[#00BCFF] hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <img
                  className="h-12 grayscale transition hover:grayscale-0 dark:hidden"
                  src={t.img}
                  alt={t.alt}
                />
                <img
                  className="hidden h-12 grayscale transition hover:grayscale-0 dark:block"
                  src={t.img.replace('374151', 'ffffff')}
                  alt={t.alt}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t.alt}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
