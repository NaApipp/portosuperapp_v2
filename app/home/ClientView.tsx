import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experrience";
import GithubStatus from "./components/GithubStats_Component/gitStatus";
import SeeProject from "./components/SeeProject";
import Footer from "./components/footer";

export default function ClientView() {
  return (
    <>
      <div className="dark:bg-[#08152F] bg-[#F8FAFC]">
        <main>
        <Hero/>
        <Education/>
        <Experience/>
        <GithubStatus/>
        <SeeProject />
        </main>
        <Footer/>
      </div>
    </>
  );
}
