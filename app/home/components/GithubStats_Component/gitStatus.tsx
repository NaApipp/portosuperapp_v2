"use client";

import ContributionGraph from "./ContributionGraph";
import StatCard from "./statCard";
import GitHubStatsCard from "./GitHubStatsCard";
import { motion as m } from "framer-motion";

export default function GitHubStats({ 
  stats, 
  repos, 
  contributions 
}: { 
  stats: any; 
  repos: any[]; 
  contributions: any; 
}) {

  const totalStars = repos.reduce(
    (acc: number, repo: any) => acc + repo.stargazers_count,
    0,
  );

  // Calculate Top Languages
  const languagesMap: Record<string, number> = {};
  repos.forEach((repo: any) => {
    if (repo.language) {
      languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
    }
  });

  const totalReposWithLanguage = Object.values(languagesMap).reduce((a, b) => a + b, 0);
  
  const languageColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Python: "#3572A5",
    React: "#61dafb",
    Nextjs: "#000000",
  };

  const topLanguages = Object.entries(languagesMap)
    .map(([name, count]) => ({
      name,
      percentage: Math.round((count / totalReposWithLanguage) * 100),
      color: languageColors[name] || "#6366f1",
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3);

  return (
    <section className="mt-20 pl-10 pr-10">
      <h1 className="font-bebas text-center text-5xl font-semibold text-[#08152F] dark:text-white">
        GitHub Statistics
      </h1>

      <ContributionGraph weeks={contributions.weeks} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 mt-6 mb-20">
        {/* Status Repositories In Github */}
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
          className="transition-transform duration-300 ease-in-out
            hover:scale-105"
        >
          <StatCard
            title="Repositories"
            value={stats.total_repos}
            subtitle="Total Repositories"
            color="#8b5cf6"
          />
        </m.div>

        {/* Status Stars In Github */}
        <m.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
        className="transition-transform duration-300 ease-in-out
            hover:scale-105">
          <StatCard
          title="Stars"
          value={totalStars}
          subtitle="Received on projects"
          color="#facc15"
        />
        </m.div>

        {/* Satus Followers In Github */}
        <m.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeIn", delay: 0.7 }}
        className="transition-transform duration-300 ease-in-out
            hover:scale-105">
          <StatCard
          title="Followers"
          value={stats.followers}
          subtitle="GitHub followers"
          color="#3b82f6"
        />
        </m.div>
      </div>

      <GitHubStatsCard 
        totalCommits={contributions.totalContributions} 
        topLanguages={topLanguages} 
      />
    </section>
  );
}
