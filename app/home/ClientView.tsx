import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experrience";
import GithubStatus from "./components/GithubStats_Component/gitStatus";
import SeeProject from "./components/SeeProject";
import Footer from "./components/footer";
import { getGitHubContributions, getGitHubRepos, getGitHubStats } from "@/app/lib/github";

export default async function ClientView() {
  const [stats, repos, contributions] = await Promise.all([
    getGitHubStats(),
    getGitHubRepos(),
    getGitHubContributions(),
  ]);

  return (
    <>
      <div className="dark:bg-[#08152F] bg-[#F8FAFC]">
        <main>
        <Hero/>
        <Education/>
        <Experience/>
        <GithubStatus 
          stats={stats} 
          repos={repos} 
          contributions={contributions} 
        />
        <SeeProject />
        </main>
        <Footer/>
      </div>
    </>
  );
}
