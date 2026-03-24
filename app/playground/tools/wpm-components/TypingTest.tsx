'use client'

import { useEffect, useRef } from 'react'
import { useTypingStore } from '@/app/store/useTypingStore'
import { generateText } from '@/app/lib/textGenerator'
import { calculateStats } from '@/app/lib/calculations'
import { saveResult } from '@/app/lib/storage'
import { SettingsBar } from './SettingsBar'
import { StatsBar } from './StatsBar'
import { ResultModal } from './ResultModal'

export default function TypingTest() {
  const {
    text,
    input,
    timeLeft,
    isRunning,
    isFinished,
    language,
    startTime,
    setText,
    setInput,
    start,
    finish,
    reset
  } = useTypingStore()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!text) {
      setText(generateText(language))
    }
  }, [language, setText, text])

  useEffect(() => {
    if (!isRunning) return

    const i = setInterval(() => {
      useTypingStore.setState((s) => {
        if (s.timeLeft <= 1) {
          finishTest()
          return { timeLeft: 0 }
        }
        return { timeLeft: s.timeLeft - 1 }
      })
    }, 1000)

    return () => clearInterval(i)
  }, [isRunning])

  function finishTest() {
    const timeSpent = (Date.now() - (startTime || Date.now())) / 1000
    const stats = calculateStats(input, text, timeSpent)
    saveResult({ ...stats, date: new Date().toISOString() })
    finish()
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFinished) return
    if (!isRunning) start()
    setInput(e.target.value)

    if (e.target.value.length >= text.length) {
      finishTest()
    }
  }

  const handleRestart = () => {
    reset(generateText(language))
    inputRef.current?.focus()
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center">
      <SettingsBar />
      <StatsBar />

      <div 
        className="w-full relative group mb-8"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl min-h-[160px] text-2xl font-mono leading-relaxed select-none whitespace-pre-wrap">
          {text.split('').map((char, i) => {
            let color = 'text-gray-600'
            let decoration = ''
            
            if (i < input.length) {
              if (char === input[i]) {
                color = 'text-white'
              } else {
                color = 'text-red-500'
                decoration = 'underline decoration-red-500/50 bg-red-500/10 rounded-sm'
              }
            } else if (i === input.length) {
              color = 'text-blue-400 animate-pulse'
              decoration = 'border-b-2 border-blue-400'
            }
            
            return (
              <span 
                key={i} 
                className={`${color} ${decoration} transition-colors duration-150 inline-block`}
              >
                {char}
              </span>
            )
          })}
        </div>

        <input
          ref={inputRef}
          type="text"
          className="absolute inset-0 opacity-0 cursor-default"
          autoFocus
          value={input}
          onChange={handleInput}
          disabled={isFinished}
        />
      </div>

      <div className="flex gap-4">
        <button 
          onClick={handleRestart}
          className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5 font-medium flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Restart
        </button>
      </div>

      {isFinished && <ResultModal />}
    </div>
  )
}

