'use client'

import React from 'react';
import { useTypingStore } from '@/app/store/useTypingStore';
import { calculateStats } from '@/app/lib/calculations';
import { generateText } from '@/app/lib/textGenerator';

export const ResultModal = () => {
  const { input, text, startTime, language, reset } = useTypingStore();

  const timeSpent = startTime ? (Date.now() - startTime) / 1000 : 1;
  const stats = calculateStats(input, text, timeSpent || 1);

  const handleRestart = () => {
    reset(generateText(language));
  };

  return (
    <div className="w-full max-w-2xl mt-8 p-8 rounded-3xl bg-linear-to-br from-gray-900 to-black border border-white/10 shadow-[0_0_80px_-12px_rgba(59,130,246,0.5)] transform animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 w-full text-center md:text-left">
          <h2 className="text-4xl font-black mb-2 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Well Done!
          </h2>
          <p className="text-gray-500 text-sm font-medium italic">"Every keystroke makes you faster."</p>
          
          <button 
            onClick={handleRestart}
            className="mt-8 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 w-full md:w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            Try Again
          </button>
        </div>

        <div className="flex-1 w-full space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 transition-colors">
              <span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">WPM</span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-black text-blue-400 font-mono tracking-tighter">{stats.wpm}</span>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 transition-colors">
              <span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">ACC</span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-black text-purple-400 font-mono tracking-tighter">{stats.accuracy}</span>
                <span className="text-xs text-gray-400 font-bold">%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-between items-center px-6 py-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Errors</span>
              <span className="text-xl font-bold font-mono text-red-400">{stats.errors}</span>
            </div>
            <div className="flex justify-between items-center px-6 py-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Chars</span>
              <span className="text-xl font-bold font-mono text-white">{stats.chars}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

