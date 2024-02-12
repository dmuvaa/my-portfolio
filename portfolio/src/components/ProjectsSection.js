import React from 'react'
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import projectsData from '../assets/data/projectsData';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';



const ProjectsSectionStyles = styled.div`
    padding: 6.2rem 0;
    .projects_allItems {
        display: flex;
        gap: 1.875rem;
        margin-top: 3.125rem;
    }
    .swiper-container {
        padding-top: 5rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        background: var(--deep-dark);
        right: 60px;
        left: auto;
        top: 20px;
        transform: translateY(50%);
        color: yellow;
        border-radius: 8px;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 1.25rem
    }
    @media only screen and (max-width: 750px) {
        .projects_allItems {
            flex-direction-column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 4.3rem;
        }
    }
`;

const ProjectsSection = () => {
  return (
    <ProjectsSectionStyles>
        <div className='container'>
            <SectionTitle subtitle='Some of my recent works' title='Projects'/>
            <div className='projects_allItems'>
                <Swiper 
                    className='swiper-container' 
                    slidesPerView={1} 
                    spaceBetween={30} 
                    modules={[Navigation]} 
                    navigation 
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        750: {
                            slidesPerView: 2,
                        },
                        1100: {
                            slidesPerView: 3,
                        }}
                    }
                >
                    {projectsData.map((project, index) => {
                        if(index >= 5) return
                        return (
                            <SwiperSlide key={project.id}>
                                <ProjectItem
                                    title={project.name} 
                                    img={project.img} 
                                    description={project.description}
                                />
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
