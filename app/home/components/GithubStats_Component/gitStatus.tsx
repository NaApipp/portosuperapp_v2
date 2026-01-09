import ContributionGraph from "./ContributionGraph";
import StatCard from "./statCard";
import { getGitHubContributions, getGitHubRepos, getGitHubStats } from "@/app/lib/github";

export default async function GitHubStats() {
  const stats = await getGitHubStats();
  const repos = await getGitHubRepos();
  const contributions = await getGitHubContributions();

  const totalStars = repos.reduce(
    (acc: number, repo: any) => acc + repo.stargazers_count,
    0
  );

  return (
    <section className="mt-20 pl-10 pr-10">
      <h1 className="font-bebas text-center text-5xl font-semibold text-white">
        GitHub Statistics
      </h1>


      <ContributionGraph weeks={contributions.weeks} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mt-6 mb-20">
        <StatCard
          title="Repositories"
          value={stats.public_repos}
          subtitle="Public repositories"
          color="#8b5cf6"
        />

        <StatCard
          title="Stars"
          value={totalStars}
          subtitle="Received on projects"
          color="#facc15"
        />

        <StatCard
          title="Contributions"
          value={contributions.totalContributions}
          subtitle="Last year"
          color="#22c55e"
        />

        <StatCard
          title="Followers"
          value={stats.followers}
          subtitle="GitHub followers"
          color="#3b82f6"
        />
      </div>
    </section>
  );
}
