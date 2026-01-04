"use client";

import React from "react";

const inputBase =
  "w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 " +
  "placeholder:text-zinc-500 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20";

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full border border-zinc-800 bg-zinc-950/60">
      {children}
    </span>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/40 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      {children}
    </div>
  );
}

function SocialItem({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-4 transition hover:border-zinc-700 hover:bg-zinc-950/70"
    >
      <div className="flex items-center gap-3">
        <IconWrap>{icon}</IconWrap>
        <span className="text-sm font-semibold text-zinc-100">{label}</span>
      </div>

      <span className="text-zinc-500 transition group-hover:translate-x-0.5 group-hover:text-zinc-300">
        →
      </span>
    </a>
  );
}

export default function Footer() {
  // Year Function (biar selalu update)
  const year = new Date().getFullYear();

  return (
    <section className="bg-black text-white scroll-mt-20" id="contact">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT */}
          <SectionCard>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <IconWrap>
                  {/* chat bubble */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M7 8h10M7 12h6M21 12c0 4.418-4.03 8-9 8-1.03 0-2.02-.154-2.94-.44L3 21l1.64-4.06C3.64 15.79 3 13.96 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </IconWrap>
                <div>
                  <h3 className="text-lg font-semibold">Connect With Me</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Find me on these platforms
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <SocialItem
                  label="GitHub"
                  href="https://github.com/NaApipp"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                      <path
                        d="M9 19c-4 1.5-4-2.5-5-3m10 6v-3.5c0-1 .1-1.4-.5-2 2.2-.2 4.5-1.1 4.5-5a3.9 3.9 0 0 0-1-2.7 3.6 3.6 0 0 0-.1-2.7s-.8-.3-2.9 1a10 10 0 0 0-5.2 0c-2.1-1.3-2.9-1-2.9-1a3.6 3.6 0 0 0-.1 2.7A3.9 3.9 0 0 0 6 11.5c0 3.9 2.3 4.8 4.5 5-.4.4-.5.9-.5 2V22"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />

                <SocialItem
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/nabilariftriyanto/"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                      <path
                        d="M6 9v12M6 6.5v.5M10 9v12m0-7c0-2.2 1.3-4 3.8-4 2.4 0 3.2 1.6 3.2 4.1V21"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />

                <SocialItem
                  label="Instagram"
                  href="https://www.instagram.com/n_apipppp/"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                      <path
                        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M17.5 6.5h.01"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                />

                <SocialItem
                  label="Twitter"
                  href="https://twitter.com/n_apipppp"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                      <path
                        d="M20 7.5c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.8.5-1.6.8-2.5 1A3.5 3.5 0 0 0 9 10.1c0 .3 0 .6.1.8-3-.2-5.6-1.6-7.4-3.8-.3.6-.5 1.2-.5 2 0 1.2.6 2.2 1.6 2.8-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 3.1 2.8 3.4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 2 2.6 3.7 2.6A7 7 0 0 1 1 19.3 9.9 9.9 0 0 0 6.4 21c6.5 0 10.1-5.6 10.1-10.4v-.5c.7-.5 1.3-1.1 1.8-1.8Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="border-t border-zinc-800 p-6">
              <div className="flex items-start gap-3">
                <IconWrap>
                  {/* mail */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M4 6h16v12H4V6Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </IconWrap>
                <div>
                  <h4 className="text-base font-semibold">Prefer email?</h4>
                  <p className="mt-1 text-sm text-zinc-400">
                    Use the form or reach out at{" "}
                    <a href="mailto:nabilariftriyanto@gmail.com" className="text-zinc-200">nabilariftriyanto@email.com</a>
                  </p>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* RIGHT */}
          <SectionCard>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <IconWrap>
                  {/* paper plane */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M22 2 11 13"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2 15 22l-4-9-9-4 20-7Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </IconWrap>
                <div>
                  <h3 className="text-lg font-semibold">Send a Message</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    I&apos;ll get back to you as soon as possible
                  </p>
                </div>
              </div>

              <form className="mt-6 space-y-5">
                {/* Email + Name */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-200">
                      Email
                    </label>
                    <input className={inputBase} placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-200">
                      Name
                    </label>
                    <input className={inputBase} placeholder="Your name" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-200">
                    Message
                  </label>
                  <textarea
                    rows={7}
                    className={inputBase + " resize-none leading-relaxed"}
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                {/* Button */}
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M22 2 11 13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2 15 22l-4-9-9-4 20-7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </SectionCard>
        </div>
      </div>
      
      {/* Line */}
      <div className="w-full h-px bg-[#D5DEEF] mt-[10px] mb-3"></div>

      {/* Copyright */}
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center">
          &copy; <span>{year}</span>{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            SuperApps
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Education
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Experience
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Project
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
