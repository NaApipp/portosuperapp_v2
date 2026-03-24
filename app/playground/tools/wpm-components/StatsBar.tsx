'use client'

import React, { useMemo } from 'react';
import { useTypingStore } from '@/app/store/useTypingStore';
import { calculateStats } from '@/app/lib/calculations';

export const StatsBar = () => {
  const { input, text, startTime, timeLeft, isRunning } = useTypingStore();

  const stats = useMemo(() => {
    if (!isRunning && !input.length) return { wpm: 0, accuracy: 100 };
    
    const timeSpent = startTime ? (Date.now() - startTime) / 1000 : 1;
    return calculateStats(input, text, timeSpent || 1);
  }, [input, text, startTime, isRunning]);

  return (
    <div className="flex items-center justify-between gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8 w-full">
      <div className="flex items-center gap-8 px-4">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Speed</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-blue-500 font-mono tracking-tighter">
              {stats.wpm}
            </span>
            <span className="text-xs text-gray-400 font-bold">WPM</span>
          </div>
        </div>
        
        <div className="h-10 w-px bg-white/10" />
        
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Accuracy</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-purple-500 font-mono tracking-tighter">
              {stats.accuracy}
            </span>
            <span className="text-xs text-gray-400 font-bold">%</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pr-2">
        <div className="relative flex items-center justify-center w-14 h-14">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-white/5"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={150.8}
              strokeDashoffset={150.8 * (timeLeft / useTypingStore.getState().time)}
              className="text-blue-500 transition-all duration-300 ease-linear"
            />
          </svg>
          <span className="absolute text-lg font-bold text-white font-mono">
            {timeLeft}
          </span>
        </div>
      </div>
    </div>
  );
};

