import Hero from "./components/hero";
import HeroV3 from "./components/HeroV3";
import Education from "./components/education";
import EducationV3 from "./components/EducationV3";
import Experience from "./components/experrience";
import ExperienceV3 from "./components/experiencev3";
import GithubStatus from "./components/GithubStats_Component/gitStatus";
import TechStack from "./components/TechStack";
import TechStackV3 from "./components/TechStackV3";
import SeeProject from "./components/SeeProject";
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
        {/* <Hero/> */}
        <HeroV3/>
        {/* <Education/> */}
        <EducationV3/>
        {/* <Experience/> */}
        <ExperienceV3/>
        {/* <TechStack/> */}
        <TechStackV3/>
        <TypingDataUi />
        <GithubStatus 
          stats={stats} 
          repos={repos} 
          contributions={contributions} 
        />
        {/* <SeeProject /> */}
        <SeeProjectV3/>
        </main>
        <Footer/>
      </div>
    </>
  );
}
