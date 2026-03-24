'use client'

import React from 'react';
import { useTypingStore } from '@/app/store/useTypingStore';
import { generateText } from '@/app/lib/textGenerator';

export const SettingsBar = () => {
  const { 
    time, 
    setTime, 
    language, 
    setLanguage, 
    reset,
    isRunning 
  } = useTypingStore();

  const handleTimeChange = (t: number) => {
    if (isRunning) return;
    setTime(t);
    reset(generateText(language));
  };

  const handleLanguageChange = (l: 'en' | 'id') => {
    if (isRunning) return;
    setLanguage(l);
    reset(generateText(l));
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Time Controls */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2">Time</span>
        {[15, 30, 60, 120].map((t) => (
          <button 
            key={t}
            onClick={() => handleTimeChange(t)}
            disabled={isRunning}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              time === t 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white disabled:opacity-30'
            }`}
          >
            {t}s
          </button>
        ))}
        
        <div className="ml-auto flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/5">
          <button 
            onClick={() => handleLanguageChange('en')}
            disabled={isRunning}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              language === 'en' ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            ENGLISH
          </button>
          <button 
            onClick={() => handleLanguageChange('id')}
            disabled={isRunning}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              language === 'id' ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            INDONESIA
          </button>
        </div>
      </div>
    </div>
  );
};

