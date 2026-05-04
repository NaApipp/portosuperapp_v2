// app/page.tsx atau app/about/page.tsx
import MonkeyTypeStats from "./MonkeyTypeStats";
import { Suspense } from "react";

export default function TypingDataUi() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-white">Typing Stats</h2>
      <Suspense fallback={<p className="text-zinc-400 italic">Loading stats from MonkeyType...</p>}>
        <MonkeyTypeStats />
      </Suspense>
    </section>
  );
}