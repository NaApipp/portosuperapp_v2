export default function Footer() {
    // Year Function (biar selalu update)
  const year = new Date().getFullYear();
    return (
        <div className="bg-[#08152F]">
        {/* Line */}
      <div className="w-full h-px bg-[#D5DEEF]"></div>

      {/* Copyright */}
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between font-poppins font-semibold bg-[#08152F]">
        <span className="text-sm text-body sm:text-center">
          &copy; <span>{year}</span>{" "}
          <a
            href="https://www.instagram.com/n_apipppp/"
            className="hover:underline"
          >
            SuperApps
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-body sm:mt-0">
          <li>
            <a href="/home#home" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="/home#education" className="hover:underline me-4 md:me-6">
              Education
            </a>
          </li>
          <li>
            <a href="/home#experience" className="hover:underline me-4 md:me-6">
              Experience
            </a>
          </li>
          <li>
            <a href="/project" className="hover:underline">
              Project
            </a>
          </li>
        </ul>
      </div>
        </div>
    )
}