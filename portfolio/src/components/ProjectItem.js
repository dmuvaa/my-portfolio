import React from 'react';
import { Link } from 'react-router-dom';
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
        color: yellow;
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
            <img src={props.img} alt='projectImg'/>
        </Link>
        <div className='projectItemInfo'>
            <Link to="/projects">
                <h3 className='projectItemName'>{props.title}</h3>
            </Link>
            <p className='projectItemDescription'>{props.description}</p>
        </div>
    </ProjectItemStyles>
  )
}

export default ProjectItem;
