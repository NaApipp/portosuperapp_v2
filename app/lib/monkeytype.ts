import { MonkeyTypeStats, PersonalBest } from "../types/monkeytype";


const BASE_URL = "https://api.monkeytype.com";

async function fetchMonkeyType<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `ApeKey ${process.env.MONKEYTYPE_API_KEY}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(`MonkeyType API error: ${res.status} - ${err.message}`);
  }

  const json = await res.json();
  return json.data as T;
}

// Fetch personal bests - wajib kirim mode & mode2
export async function getPersonalBests(mode: string = "time", mode2: string = "60") {
  return fetchMonkeyType<PersonalBest[]>(
    `/users/personalBests?mode=${mode}&mode2=${mode2}`
  );
}

// Fetch stats (completedTests, timeTyping)
export async function getUserStats() {
  return fetchMonkeyType<{
    completedTests: number;
    startedTests: number;
    timeTyping: number;
  }>("/users/stats");
}

// Gabungkan semua data - ambil beberapa mode sekaligus
export async function getAllMonkeyTypeData() {
  const [pb_time60, pb_time15, pb_time30, stats] = await Promise.all([
    getPersonalBests("time", "60"),
    getPersonalBests("time", "15"),
    getPersonalBests("time", "30"),
    getUserStats(),
  ]);

  return {
    personalBests: {
      time: {
        "15": pb_time15,
        "30": pb_time30,
        "60": pb_time60,
      },
    },
    ...stats,
  };
}


export function getBestPB(pbs: PersonalBest[] | null | undefined): PersonalBest | null {
  if (!pbs || pbs.length === 0) return null;
  return pbs.reduce((best, curr) => (curr.wpm > best.wpm ? curr : best));
}