import MonkeyTypeStats from "./MonkeyTypeStats";
import { Suspense } from "react";
import FadeDown from "@/app/components/animations/FadeDown";

export default function TypingDataUi() {
  return (
    <section className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Speed & Accuracy</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Typing Stats</h3>
        </div>
      </FadeDown>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Suspense fallback={
          <p className="text-text-secondary font-medium italic">Loading stats from MonkeyType...</p>
        }>
          <MonkeyTypeStats />
        </Suspense>
      </div>
    </section>
  );
}