import { MonitorCheck, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CoingSoonPage() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-7 w-[100%]">
      <MonitorCheck
        className="text-sky-700 border-2 border-sky-700 rounded-4xl p-4"
        size={200}
      />
      <h1 className="text-2xl font-bold">
        Fitur Sedang <span className="text-sky-700">Dikembangkan</span>
      </h1>
      <p className="text-gray-500 w-2xl text-center">
        Terima kasih telah berkunjung. Saat ini saya sedang meracik sesuatu yang
        luar biasa untuk meningkatkan pengalaman Anda di portofolio ini.
      </p>
      <Link
        href="/"
        className="flex gap-3 font-bold p-5 bg-sky-800 rounded-3xl text-white hover:bg-sky-700 transition-all duration-300"
      >
        <ChevronLeft />
        Kembali Ke Beranda
      </Link>
      {/* Copyright */}
      <span className="text-sm text-center md:text-center mt-10 uppercase text-gray-600 ">
        &copy; <span>{year}</span>{" "}
        <a
          href="https://www.instagram.com/n_apipppp/"
          className="hover:underline"
        >
          SuperApps
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
}
