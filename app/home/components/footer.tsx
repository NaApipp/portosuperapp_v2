"use client";

import React from "react";
import { useContact } from "@/app/hooks/useContact";
import FadeDown from "@/app/components/animations/FadeDown";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/NaApipp",
    tittle: "NaApipp",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M9 19c-4 1.5-4-2.5-5-3m10 6v-3.5c0-1 .1-1.4-.5-2 2.2-.2 4.5-1.1 4.5-5a3.9 3.9 0 0 0-1-2.7 3.6 3.6 0 0 0-.1-2.7s-.8-.3-2.9 1a10 10 0 0 0-5.2 0c-2.1-1.3-2.9-1-2.9-1a3.6 3.6 0 0 0-.1 2.7A3.9 3.9 0 0 0 6 11.5c0 3.9 2.3 4.8 4.5 5-.4.4-.5.9-.5 2V22" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nabilariftriyanto/",
    tittle: "Nabil Arif Triyanto",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M6 9v12M6 6.5v.5M10 9v12m0-7c0-2.2 1.3-4 3.8-4 2.4 0 3.2 1.6 3.2 4.1V21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/n_apipppp/",
    tittle: "@n_apipppp",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/n_apipppp",
    tittle: "@n_apipppp",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M20 7.5c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.8.5-1.6.8-2.5 1A3.5 3.5 0 0 0 9 10.1c0 .3 0 .6.1.8-3-.2-5.6-1.6-7.4-3.8-.3.6-.5 1.2-.5 2 0 1.2.6 2.2 1.6 2.8-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 3.1 2.8 3.4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 2 2.6 3.7 2.6A7 7 0 0 1 1 19.3 9.9 9.9 0 0 0 6.4 21c6.5 0 10.1-5.6 10.1-10.4v-.5c.7-.5 1.3-1.1 1.8-1.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "/project" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const {
    email,
    setEmail,
    name,
    setName,
    message,
    setMessage,
    status,
    statusType,
    isSubmitting,
    handleSubmit,
  } = useContact();

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10"
    >
      {/* Header */}
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Contact Me</h3>
        </div>
      </FadeDown>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

        {/* LEFT: Socials + Email */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-text-secondary uppercase mb-6">Find me on</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl border border-text-secondary/10 hover:border-text-primary/30 bg-thirdary/10 hover:bg-thirdary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-text-secondary/10 bg-background text-text-primary">
                      {s.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary tracking-wide">{s.label}</span>
                      <span className="text-xs font-semibold text-text-secondary tracking-wide">{s.tittle}</span>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-text-secondary/10 bg-thirdary/10">
            <p className="text-xs font-bold tracking-[0.2em] text-text-secondary uppercase mb-2">Prefer Email?</p>
            <a
              href="mailto:nabilariftriyanto@gmail.com"
              className="text-base font-bold text-text-primary hover:underline underline-offset-4 transition-all"
            >
              nabilariftriyanto@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-text-secondary uppercase mb-6">Send a message</p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-text-secondary uppercase tracking-widest">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-text-secondary/10 bg-thirdary/10 focus:bg-thirdary/20 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 outline-none focus:border-text-primary/30 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-text-secondary uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-text-secondary/10 bg-thirdary/10 focus:bg-thirdary/20 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 outline-none focus:border-text-primary/30 transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-text-secondary uppercase tracking-widest">Message</label>
              <textarea
                id="message"
                name="message"
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or just say hi..."
                className="w-full rounded-xl border border-text-secondary/10 bg-thirdary/10 focus:bg-thirdary/20 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 outline-none focus:border-text-primary/30 transition-all duration-300 resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-text-primary text-background font-bold text-sm tracking-widest uppercase rounded-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M22 2 11 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2 15 22l-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Status Alerts */}
            {status && statusType === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-xl border border-text-secondary/10 bg-thirdary/20">
                <svg className="w-5 h-5 text-text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm font-bold text-text-primary">{status}</p>
              </div>
            )}
            {status && statusType === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-xl border border-text-secondary/10 bg-thirdary/20">
                <svg className="w-5 h-5 text-text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-sm font-bold text-text-secondary">{status}</p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto md:px-12 mt-24 pt-8 border-t border-text-secondary/10 flex flex-col md:flex-row items-center justify-between gap-4">
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
    </section>
  );
}
