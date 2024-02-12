import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from "../components/ProjectsSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectsSection/>
        </div>
        
    )
}
export default Home;