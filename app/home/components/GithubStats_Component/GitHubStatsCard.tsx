"use client";

import { GitCommit, Code2 } from "lucide-react";

interface Language {
  name: string;
  percentage: number;
  color: string;
}

interface GitHubStatsCardProps {
  totalCommits: number;
  topLanguages: Language[];
}

export default function GitHubStatsCard({ totalCommits = 0, topLanguages = [] }: GitHubStatsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Commits Card */}
      <div className="group relative overflow-hidden p-6 md:p-8 rounded-2xl border border-text-secondary/10 bg-thirdary/10 hover:bg-thirdary/30 hover:border-text-primary/30 transition-all duration-300">
        <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-text-primary">
          <GitCommit size={140} />
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="p-3 w-fit rounded-xl border border-text-secondary/10 bg-background text-text-primary">
            <GitCommit size={22} />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-text-secondary uppercase mb-2">Total Contributions</p>
            <h3 className="text-5xl font-black text-text-primary tracking-tighter">
              {totalCommits.toLocaleString()}
            </h3>
            <p className="text-sm font-medium text-text-secondary mt-2">Commits, PRs, and issues in the last year</p>
          </div>
        </div>
      </div>

      {/* Languages Card */}
      <div className="group relative overflow-hidden p-6 md:p-8 rounded-2xl border border-text-secondary/10 bg-thirdary/10 hover:bg-thirdary/30 hover:border-text-primary/30 transition-all duration-300">
        <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-text-primary">
          <Code2 size={140} />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl border border-text-secondary/10 bg-background text-text-primary">
              <Code2 size={22} />
            </div>
            <p className="text-xs font-bold tracking-[0.2em] text-text-secondary uppercase">Top Languages</p>
          </div>

          <div className="space-y-5">
            {topLanguages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                    {lang.name}
                  </span>
                  <span className="text-xs font-bold text-text-secondary font-mono">{lang.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-text-secondary/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
