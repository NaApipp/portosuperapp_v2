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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto p-1 mb-10">
      {/* Commits Card */}
      <div className="relative group overflow-hidden rounded-3xl bg-slate-900/50 border border-white/10 p-8 backdrop-blur-xl">
        <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <GitCommit size={160} />
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="p-3 w-fit rounded-2xl bg-blue-500/10 text-blue-400">
            <GitCommit size={24} />
          </div>
          <div>
            <p className="text-slate-400 font-medium font-inter mb-1">Total Contributions</p>
            <h3 className="text-5xl font-bold text-white font-poppins tracking-tight">
              {totalCommits.toLocaleString()}
            </h3>
            <p className="text-sm text-slate-500 mt-2">Commits, PRs, and issues in the last year</p>
          </div>
        </div>
      </div>

      {/* Languages Card */}
      <div className="relative group overflow-hidden rounded-3xl bg-slate-900/50 border border-white/10 p-8 backdrop-blur-xl">
        <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Code2 size={160} />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-white font-poppins">Top Languages</h3>
          </div>

          <div className="space-y-5">
            {topLanguages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white font-medium flex items-center gap-2">
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: lang.color }}
                    />
                    {lang.name}
                  </span>
                  <span className="text-slate-400 font-mono">{lang.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                      boxShadow: `0 0 10px ${lang.color}40`
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
