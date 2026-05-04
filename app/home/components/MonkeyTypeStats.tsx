
import { getAllMonkeyTypeData, getBestPB } from "../../lib/monkeytype";
import MonkeyTypeClient from "./MonkeyTypeClient";

export default async function MonkeyTypeStats() {
  let data;

  try {
    data = await getAllMonkeyTypeData();
  } catch (error) {
    return (
      <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-md text-red-500 dark:text-red-400 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
          <span className="text-xl">⚠️</span>
        </div>
        <p className="font-bold text-lg">Stats Sync Failed</p>
        <p className="text-sm opacity-60 mt-1 max-w-xs mx-auto">Please ensure your MonkeyType API Key is configured correctly in the environment.</p>
      </div>
    );
  }

  const pb60 = getBestPB(data.personalBests.time["60"]);
  const pb15 = getBestPB(data.personalBests.time["15"]);
  const pb30 = getBestPB(data.personalBests.time["30"]);

  const allPBs = [pb15, pb30, pb60].filter((pb): pb is NonNullable<typeof pb> => !!pb);
  const bestOverall = allPBs.length > 0 
    ? allPBs.reduce((best, curr) => (curr.wpm > best.wpm ? curr : best))
    : null;

  return (
    <MonkeyTypeClient 
      data={data} 
      pbs={{ pb15, pb30, pb60 }} 
      bestOverall={bestOverall} 
    />
  );
}