import { projectData } from "@/app/lib/projectData";
import ProjectCard from "./components/projectCard";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Project() {
    return (
        <>
        <Navbar/>
        <main className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pl-10 pr-10 pb-20 pt-20 bg-[#08152F]">
            {projectData.map((p) => (
                <ProjectCard key={p.id} project={p} />
            ))}
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    );
}