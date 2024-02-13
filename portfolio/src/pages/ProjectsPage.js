import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import styled from 'styled-components';
import { MdSearch } from "react-icons/md";
import ProjectItem from '../components/ProjectItem';
import projectsData from '../assets/data/projectsData';

const ProjectsPageStyles = styled.div`
    padding: 6.25rem 0;
    
    .projectsSearchBar {
      position: relative;
      width: 300px;
      margin-top: 3.125rem;
    }
    .projectsSearchBar input {
      width: 100%;
      font-size: 1rem;
      padding: .3rem;
      color: black;
      border: none;
      border-radius: 6px;
      background-color: var(--white);
      outline: none;
    }
    .projectsSearchBar .searchIcon {
      position: absolute;
      width: 1.3rem;
      right: .65rem;
      color: black;
    }
    .projectsAllItems {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 3.125rem;
      margin-top: 3.125rem;
    }
    @media only screen and (max-width: 750px) {
      .projectsSearchBar,
      .projectsSearchBar form,
      .projectsSearchBar input {
        width: 100%;
      }
    }
`;

const ProjectsPage = () => {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(projectsData);
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (e.target.value.length <= 0) {
      setProjectData(projectsData);
    }
  }
  useEffect(() =>{
    if (searchText === '') return;
    setProjectData(() => {
      return projectsData.filter((project) => (
        project.name.toLowerCase().match(searchText.toLowerCase())
      ))
    })
  }, [searchText])
  return (
    <ProjectsPageStyles>
      <div className='container'>
        <SectionTitle subtitle='some of my recent works' title='projects'/>
        <div className='projectsSearchBar'>
          <form>
            <input 
              type='text' 
              value={searchText} 
              placeholder='project name' 
              onChange={handleChange}
            />
            <MdSearch className='searchIcon'/>
          </form>
        </div>
        <div className='projectsAllItems'>
          {
            projectData.map((project, index) => (
              <ProjectItem 
                key={project.id} 
                title={project.name} 
                description={project.description} 
                img={project.img}
              />
            ))
          }
        </div>
      </div>
    </ProjectsPageStyles>
  )
}

export default ProjectsPage;
