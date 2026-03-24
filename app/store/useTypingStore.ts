import { create } from 'zustand'

interface State {
  text: string
  input: string
  time: number
  timeLeft: number
  isRunning: boolean
  isFinished: boolean
  language: 'en' | 'id'
  startTime: number | null

  setText: (t: string) => void
  setInput: (i: string) => void
  start: () => void
  finish: () => void
  reset: (text: string) => void
  setTime: (t: number) => void
  setLanguage: (l: 'en' | 'id') => void
}

export const useTypingStore = create<State>((set) => ({
  text: '',
  input: '',
  time: 30,
  timeLeft: 30,
  isRunning: false,
  isFinished: false,
  language: 'en',
  startTime: null,

  setText: (t) => set({ text: t }),
  setInput: (i) => set({ input: i }),

  start: () => set({ isRunning: true, startTime: Date.now() }),

  finish: () => set({ isRunning: false, isFinished: true }),

  reset: (text) => set((s) => ({
    text,
    input: '',
    isRunning: false,
    isFinished: false,
    timeLeft: s.time
  })),

  setTime: (t) => set({ time: t, timeLeft: t }),
  setLanguage: (l) => set({ language: l })
}))