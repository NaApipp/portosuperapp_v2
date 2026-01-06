import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Education from "../components/education";
import Experience from "../components/experrience";
import SeeProject from "../components/SeeProject";
import Footer from "../components/footer";

export default function page() {
  return (
    <>
      <div className="bg-black">
        {/* <Navbar /> */}
        <main>
        {/* <Hero/> */}
        <Education/>
        <Experience/>
        <SeeProject />
        </main>
        <Footer/>
      </div>
    </>
  );
}
