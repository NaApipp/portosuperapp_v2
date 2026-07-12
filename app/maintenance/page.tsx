import { Settings } from "lucide-react";

export default function Maintenance() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center dark:bg-[#08152F] bg-[#F8FAFC]">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
                <div className="relative dark:bg-[#102D41]/30 bg-[#d4d4d4] p-6 rounded-full border dark:border-white border-black shadow-2xl backdrop-blur-sm">
                    <Settings className="w-20 h-20 text-[#00BCFF] animate-[spin_4s_linear_infinite]" />
                </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-lolita mb-4 text-[#0F172A] dark:text-white">
                Under Maintenance
            </h1>
            
            <p className="max-w-md font-inter font-medium text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                We are currently upgrading our system to provide you with the best experience. Please check back later.
            </p>
            
            <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BCFF] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00BCFF]"></span>
                    </span>
                    <span className="text-sm font-semibold text-[#0F172A] dark:text-white font-inter">
                        System Update in Progress
                    </span>
                </div>
            </div>
        </div>
    );
}