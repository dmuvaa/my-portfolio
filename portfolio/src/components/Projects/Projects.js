import React from "react";
import './projects.css'
import project from '../../assets/project.png';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2 className="projectsTitle">My Projects</h2>
            <span className="projectsDescription">
                Welcome to my projects section, where I showcase some of the exciting software projects 
                Ive had the privilege to work on. As a passionate software engineer, 
                Ive had the opportunity to collaborate on a variety of projects, 
                each presenting unique challenges and opportunities for growth.
            </span>
            <div className="projectsImgs">
                <img src={project} alt="project img" className="projectImg"></img>
                <img src={project} alt="project img" className="projectImg"></img>
                <img src={project} alt="project img" className="projectImg"></img>
                <img src={project} alt="project img" className="projectImg"></img>
                <img src={project} alt="project img" className="projectImg"></img>
            </div>
        </section>
    )
}
export default Projects;