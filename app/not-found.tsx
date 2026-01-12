import Link from "next/link";

export default function NotFound() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#08152F] min-h-screen flex flex-col text-[#D5DEEF]">
      {/* MAIN: tetap center */}
      <main className="flex flex-1 flex-col justify-center items-center gap-10">
        <div className="flex items-center justify-center gap-5">
          <h1 className="font-game text-7xl">404</h1>
          <div className="w-px h-[50px] bg-[#D5DEEF] mt-[10px] mb-3" />
          <p className="font-poppins font-bold">Page Not Found</p>
        </div>

        <div>
          <Link href="/home">
            <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[#102D41]">
              <span className="font-bold text-white text-xl relative z-10 duration-500">
                Go To Home
              </span>
              <span className="absolute top-0 left-0 w-full bg-[#102D41] duration-500 gr  oup-hover:-translate-x-full h-full" />
              <span className="absolute top-0 left-0 w-full bg-[#102D41] duration-500 group-hover:translate-x-full h-full" />
              <span className="absolute top-0 left-0 w-full bg-[#102D41] duration-500 delay-300 group-hover:-translate-y-full h-full" />
              <span className="absolute delay-300 top-0 left-0 w-full bg-[#102D41] duration-500 group-hover:translate-y-full h-full" />
            </button>
          </Link>
        </div>
      </main>

        {/* Line */}
      <div className="w-full h-px bg-[#D5DEEF]"></div>

      {/* FOOTER: */}
      <footer className="w-full mx-auto max-w-screen-xl p-4 md:flex md:flex-row md:items-center md:justify-center flex flex-col justify-center items-center font-poppins font-semibold">
        <span className="text-sm text-center md:text-center">
          &copy; <span>{year}</span>{" "}
          <a
            href="https://www.instagram.com/n_apipppp/"
            className="hover:underline"
          >
            SuperApps
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
