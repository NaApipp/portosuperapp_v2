export default function Navbar() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 h-16 bg-[#102D41]">
        <div className="max-w-screen-xl mx-auto flex h-full flex-wrap items-center justify-between px-4">
          <a
            href="/project"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="\asset\image\logo\logo_apip_white.png"
              className="h-11"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl text-heading font-poppins font-semibold whitespace-nowrap">
              NABIL APIPP
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-solid"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid">
            <ul className="font-semibold font-poppins flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-secondary-soft">
              <li>
                <a
                  href="#education"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/project"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
