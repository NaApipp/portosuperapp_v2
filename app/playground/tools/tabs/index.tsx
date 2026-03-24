// app/tools/Tabs.tsx
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Keyboard, ChartCandlestick, MapPin } from "lucide-react";

export default function Tabs() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "wpm";

  const tabs = [
    { icon: <Keyboard />,name: "WPM Test", value: "wpm" },
    { icon: <MapPin />,name: "Postal Code", value: "postal-code" },
    { icon: <ChartCandlestick />,name: "Investment", value: "investment" },
  ];

  return (
    <div className="bg-[#08152F] flex flex-col md:flex-row gap-4 w-full max-w-4xl mx-auto px-4 md:px-0 justify-center items-center">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;
        return (
          <Link
            key={tab.value}
            href={`/playground/tools?tab=${tab.value}`}
            className={`w-full md:w-auto inline-flex items-center justify-center gap-3 
                      rounded-2xl px-8 py-4 text-sm font-bold transition-all duration-300 
                      hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg
                      ${isActive 
                        ? "bg-blue-600 dark:bg-blue-700 text-white shadow-blue-500/20" 
                        : "bg-[#406093] dark:bg-[#281C59] text-gray-300 hover:text-white"
                      }`}
          >
            <span className={isActive ? "text-blue-200" : "text-gray-400 group-hover:text-blue-300"}>{tab.icon}</span> 
            <span className="font-black whitespace-nowrap">{tab.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
