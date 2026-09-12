"use client";

import ContributionGraph from "./ContributionGraph";
import StatCard from "./statCard";
import GitHubStatsCard from "./GitHubStatsCard";
import { motion } from "framer-motion";
import FadeDown from "@/app/components/animations/FadeDown";

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

  const statItems = [
    { title: "Repositories", value: stats.total_repos, subtitle: "Total Repositories", color: "#8b5cf6" },
    { title: "Stars", value: totalStars, subtitle: "Received on projects", color: "#facc15" },
    { title: "Followers", value: stats.followers, subtitle: "GitHub followers", color: "#3b82f6" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Open Source</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">GitHub Statistics</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Contribution Graph */}
        <div className="p-6 md:p-8 rounded-2xl border border-text-secondary/10 bg-thirdary/10">
          <p className="text-xs font-bold tracking-[0.2em] text-text-secondary uppercase mb-6">Monthly Contributions</p>
          <ContributionGraph weeks={contributions.weeks} />
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {statItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <StatCard
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
                color={item.color}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Card */}
        <GitHubStatsCard 
          totalCommits={contributions.totalContributions} 
          topLanguages={topLanguages} 
        />
      </div>
    </section>
  );
}
