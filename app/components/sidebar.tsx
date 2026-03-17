"use client";

import Image from "next/image";
import { Mail, ChevronRight, Home, BookOpen, Coffee, Gamepad2, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const getLinkStyle = (href: string) => {
    const isActive = pathname === href;
    return `block flex items-center gap-4 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive 
        ? "bg-white text-[#0A1B39]" 
        : "text-white hover:bg-white/10"
    }`;
  };

  return (
    <div className="custom-scroll h-screen w-64 flex flex-col border-e bg-[#102D41] overflow-y-auto">
      <div className="px-4 py-6">
        <span className="ml-4 flex items-center gap-1 text-white">
          <Image
            src="/asset/image/logo/logo_apip_white.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="self-center text-xl text-heading font-poppins font-semibold whitespace-nowrap">
            NABIL APIPP
          </span>
        </span>
        <Link
          href="#contact"
          className="block rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#0A1B39] mt-5 flex items-center justify-between"
        >
          <span className="flex items-center gap-2 ">
            <Mail />
            <span className="font-bold font-inter">Contact Me</span>
          </span>
          <ChevronRight />
        </Link>
        {/* Main Menu */}
        <ul className="mt-6 space-y-1">
          {/* Home */}
          <li>
            <Link
              href="/home"
              className={getLinkStyle("/home")}
            >
              <Home />
              <span className="font-bold font-inter">Home</span>
            </Link>
          </li>
          {/* Education */}
          <li>
            <Link
              href="/home#education"
              className={getLinkStyle("/home#education")}
            >
              <BookOpen />
              <span className="font-bold font-inter">Education</span>
            </Link>
          </li>
          {/* Experience */}
          <li>
            <Link
              href="/home#experience"
              className={getLinkStyle("/home#experience")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 ">
                <path d="M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z" fill="currentColor" />
              </svg>
              <span className="font-bold font-inter">Experience</span>
            </Link>
          </li>
          {/* Project */}
          <li>
            <Link
              href="/project"
              className={getLinkStyle("/project")}
            >
              <Coffee />
              <span className="font-bold font-inter">Project</span>
            </Link>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-indigo-700 hover:text-white">
                <span className="font-bold font-inter flex items-center gap-2">  <Gamepad2 /> Playground </span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <Link
                    href="/playground/apps-ai"
                    className={getLinkStyle("/playground/apps-ai")}
                  >
                    Apps AI
                  </Link>
                </li>

                <li>
                  <Link
                    href="/playground/tools"
                    className={getLinkStyle("/playground/tools")}
                  >
                    Tools
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

    {/* Weather Card */}
    <div className="inset-x-0 bottom-0 p-4">
      <WeatherCard />
    </div>

      {/* Toggle Theme */}
      <div className="inset-x-0 bottom-0 border-t border-indigo-500 p-4">
        <ToggleTheme />
      </div>
    </div>
  );
}


function ToggleTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check initial theme or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex bg-[#0B1521] rounded-2xl p-1 w-full max-w-[200px] mx-auto shadow-inner">
      <button
        onClick={() => toggleTheme("light")}
        className={`flex flex-1 items-center justify-center gap-2 py-2.5 px-4 rounded-xl transition-all duration-300 ${
          theme === "light"
            ? "bg-[#1A2E42] text-white shadow-lg"
            : "text-gray-400 hover:text-gray-300"
        }`}
      >
        <Sun size={18} className={theme === "light" ? "text-yellow-400" : ""} />
        <span className="text-sm font-medium font-inter">Light</span>
      </button>
      <button
        onClick={() => toggleTheme("dark")}
        className={`flex flex-1 items-center justify-center gap-2 py-2.5 px-4 rounded-xl transition-all duration-300 ${
          theme === "dark"
            ? "bg-[#1A2E42] text-white shadow-lg"
            : "text-gray-400 hover:text-gray-300"
        }`}
      >
        <Moon size={18} className={theme === "dark" ? "text-blue-400" : ""} />
        <span className="text-sm font-medium font-inter">Dark</span>
      </button>
    </div>
  );
}


interface WeatherData {
  location: {
    name: string
  }
  current: {
    temp_c: number
    humidity: number
    wind_kph: number
    condition: {
      text: string
      icon: string
    }
  }
}

function WeatherCard() {
    const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    fetch("/api/weather?city=Semarang")
      .then(res => res.json())
      .then(data => setWeather(data))
  }, [])

  if (!weather) return <p>Loading...</p>

  return (
    <div className="rounded-[24px] bg-[#08152F] p-4">
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-[55px] font-bold font-inter leading-none text-[#00BCFF]">{weather?.current?.temp_c ? `${weather.current.temp_c}°C` : "Loading..."}</h1>
            <span className="text-[15px] font-medium font-inter text-[#00BCFF]">{weather.location.name}, Indonesia</span>
            
            {/* Gray Divider */}
            <div className="h-px w-12 bg-gray-500/50 my-2"></div>
        </div>
        <div className="flex flex-col">
            <h1 className="uppercase font-bold text-gray-600">status</h1>
            <span className="text-[13px] font-medium font-inter text-white capitalize">
                {weather.current.condition.text}
            </span>
        </div>
        <div className="flex flex-col">
            <h1 className="uppercase font-bold text-gray-600">humidity</h1>
            <span className="text-[13px] font-medium font-inter text-white capitalize">
                {weather.current.humidity}%
            </span>
        </div>
        <div className="flex flex-col">
            <h1 className="uppercase font-bold text-gray-600">wind</h1>
            <span className="text-[13px] font-medium font-inter text-white capitalize">
                {weather.current.wind_kph} km/h
            </span>
        </div>
    </div>
  );
}



