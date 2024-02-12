import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from "../components/ProjectsSection";
import CompaniesSection from "../components/CompaniesSection";
import ContactBannerSection from "../components/ContactBannerSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectsSection/>
            <CompaniesSection/>
            <ContactBannerSection/>
        </div>
        
    )
}
export default Home;