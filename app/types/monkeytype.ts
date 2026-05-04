export interface PersonalBest {
  wpm: number;
  raw: number;        // bukan rawWpm, tapi raw
  acc: number;
  consistency: number;
  timestamp: number;
  difficulty: string;
  language: string;
  punctuation: boolean;
  lazyMode: boolean;
}

export interface MonkeyTypeStats {
  completedTests: number;
  startedTests: number;
  timeTyping: number;
  personalBests: {
    time: Record<string, PersonalBest[]>;
  };
}