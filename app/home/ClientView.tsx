import HeroV3 from "./components/HeroV3";
import EducationV3 from "./components/EducationV3";
import ExperienceV3 from "./components/experiencev3";
import GithubStatus from "./components/GithubStats_Component/gitStatus";
import TechStackV3 from "./components/TechStackV3";
import SeeProjectV3 from "./components/SeeProjectV3";
import Footer from "./components/footer";
import { getGitHubContributions, getGitHubRepos, getGitHubStats } from "@/app/lib/github";
import TypingDataUi from "./components/TypingDataUi";
import Header from "@/app/components/navbar";

export default async function ClientView() {
  const [stats, repos, contributions] = await Promise.all([
    getGitHubStats(),
    getGitHubRepos(),
    getGitHubContributions(),
  ]);

  return (
    <>
    <header className="cursor-default sticky top-0 z-50">
      <Header/>
    </header>
      <div>
        <main>
        <HeroV3/>
        <EducationV3/>
        <ExperienceV3/>
        <TechStackV3/>
        <TypingDataUi />
        <GithubStatus 
          stats={stats} 
          repos={repos} 
          contributions={contributions} 
        />
        <SeeProjectV3/>
        </main>
        <Footer/>
      </div>
    </>
  );
}
