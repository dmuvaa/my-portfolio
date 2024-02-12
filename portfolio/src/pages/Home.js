import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from "../components/ProjectsSection";
import CompaniesSection from "../components/CompaniesSection";
import ContactBannerSection from "../components/ContactBannerSection";
import FooterSection from "../components/FooterSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectsSection/>
            <CompaniesSection/>
            <ContactBannerSection/>
            <FooterSection/>
        </div>
        
    )
}
export default Home;