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
    <div style={{ display: "flex", gap: 16 }} className="bg-[#08152F]">
      {tabs.map((tab) => (
        <Link
          key={tab.value}
          href={`/playground/tools?tab=${tab.value}`}
          style={{
            fontWeight: activeTab === tab.value ? "bold" : "normal",
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 
                    rounded-2xl bg-[#406093] dark:bg-[#281C59] px-8 py-4 text-sm font-bold
                     dark:text-white text-white transition-all duration-300 
                     hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 
                     cursor-pointer shadow-lg hover:shadow-xl dark:shadow-none"
        >
          <span>{tab.icon}</span> <span className="font-black">{tab.name}</span>
        </Link>
      ))}
    </div>
  );
}
