import {Navbar} from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle/>
        {/* Bg effects (maybe with p5.js) */}
        <Navbar/>
        {/* Navbar */}

        {/* Main Content */}
        <main>
            <HomeSection/>
            <AboutSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
    </div>
}