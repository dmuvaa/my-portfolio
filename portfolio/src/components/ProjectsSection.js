import React from 'react'
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/modules';
import projectsData from '../assets/data/projectsData';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';

SwiperCore.use([Navigation]);

const ProjectsSectionStyles = styled.div`
    padding: 6.2rem 0;
    .projects_allItems {
        display: flex;
        gap: 1.875rem;
        margin-top: 3.125rem;
    }
    .swiper {
        padding-top: 5rem;
        max-width: 100%;
        display: flex;
    }
`;

const ProjectsSection = () => {
  return (
    <ProjectsSectionStyles>
        <div className='container'>
            <SectionTitle subtitle='Some of my recent works' title='Projects'/>
            <div className='projects_allItems'>
                <Swiper spaceBetween={30} slidesPerView={2} navigation>
                    {projectsData.map((project, index) => {
                        if(index >= 4) return
                        return (
                            <SwiperSlide key={project.id}>
                                <ProjectItem/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </ProjectsSectionStyles>
  )
}

export default ProjectsSection;
