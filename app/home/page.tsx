import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Education from "./components/education";
import Experience from "./components/experrience";
import SeeProject from "./components/SeeProject";
import Footer from "./components/footer";

export default function age() {
  return (
    <>
      <div className="bg-[#08152F]">
        <Navbar />
        <main>
        <Hero/>
        <Education/>
        <Experience/>
        <SeeProject />
        </main>
        <Footer/>
      </div>
    </>
  );
}
