export default function Footer() {
    // Year Function (biar selalu update)
  const year = new Date().getFullYear();
    return (
        <div className="dark:bg-[#08152F] bg-[#F8FAFC]">
        {/* Line */}
      <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800"></div>

      {/* Copyright */}
      <div className="w-full mx-auto max-w-7xl p-6 md:flex md:flex-row md:items-center md:justify-between flex flex-col justify-center items-center font-poppins font-semibold border-t border-zinc-200 dark:border-zinc-800/50 mt-10">
        <span className="text-sm text-center md:text-center text-zinc-500 dark:text-zinc-400">
          &copy; <span>{year}</span>{" "}
          <a
            href="https://www.instagram.com/n_apipppp/"
            className="hover:underline text-[#08152F] dark:text-white"
          >
            SuperApps
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center justify-center mt-4 text-sm text-zinc-500 dark:text-zinc-400 sm:mt-0">
          <li>
            <a href="/home#home" className="hover:underline me-4 md:me-6 hover:text-[#08152F] dark:hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/home#education" className="hover:underline me-4 md:me-6 hover:text-[#08152F] dark:hover:text-white transition-colors">
              Education
            </a>
          </li>
          <li>
            <a href="/home#experience" className="hover:underline me-4 md:me-6 hover:text-[#08152F] dark:hover:text-white transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="/project" className="hover:underline hover:text-[#08152F] dark:hover:text-white transition-colors">
              Project
            </a>
          </li>
        </ul>
      </div>
        </div>
    )
}