import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/projectImg.png';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
    .projectItemImg {
        width: 100%;
        height: 400px;
        object-fit: contain;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--gray-2);
        
        img {
            height: 100%;
        }
    }
    .projectItemInfo {
        margin-top: 0.625rem;
        background-color: var(--deep-dark);
        padding: 0.625rem;
        border-radius: 12px;
    }
    .projectItemName {
        font-size: 1.4rem;
    }
    .projectItemDescription {
        font-size: 1rem;
        font-family: 'RobotoMono Regular';
        margin-top: 0.625rem;
    }
    @media only screen and (max-width: 750px) {
        .projectItemImg {
            height: 350px;
        }
    }
`;

const ProjectItem = (props) => {
  return (
    <ProjectItemStyles>
        <Link to="/projects" className='projectItemImg'>
            <img src={projectImg} alt='projectImg'/>
        </Link>
        <div className='projectItemInfo'>
            <Link to="/projects">
                <h3 className='projectItemName'>project1</h3>
            </Link>
            <p className='projectItemDescription'>lorem ipsum dolot sit amet nion amene heknaanhe dhhdksosn</p>
        </div>
    </ProjectItemStyles>
  )
}

export default ProjectItem;
