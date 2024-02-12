import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import PText from './PText';
import styled from 'styled-components';
import companies from '../assets/data/companies';

const CompaniesSectionStyles = styled.div`
    padding: 6rem 0;
    text-align: center;

    .companiesWrapper {
        position: relative;
        max-width: 700px;
        margin: 0 auto;
    }
    .companyInfo {
        width: 100%;
        height: fit-content;
        padding: 1.875rem;
        background-color: var(--deep-dark);
        border-radius: 12px;
        margin-top: 3.125rem;
    }
    .companyName {
        font-family: 'Montserrat Bold';
        font-size: 1.5rem;
    }
    .companyRole {
        margin-top: 2.5rem;
        font-size: 1rem;
    }
    .companyDescription {
        margin-top: .3rem;
        .hero_paragraph {
            text-align: center;
            font-family: 'Montserrat Regualar';
        }
    }
    .arrowsContainer {
        margin-top: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 30px;
            pointer-events: none;
            color: yellow;
        }
    }
    .previousArrow,
    .nextArrow {
        margin: 0 .5rem;
        width: fit-content;
        background-color: var(--deep-dark);
        padding: .5rem 1.25rem;
        border-radius: 8px;
        cursor: pointer;
    }
    .fade-enter {
        opacity: 0;
        transform: scale(.96);
    }
    .fade-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: 250ms ease-in;
        transition-property: opacity, transform;
    }
    .fade-exit {
        opacity: 1;
        transform: scale(1);
    }
    .fade-exit-active {
        opacity: 0;
        transform: scale(.96);
        transition: 250ms ease-in;
        transition-property: opacity, transform;
    }
    @media only screen and (max-width: 750px) {
        .arrowsContainer {
            svg {
                width: 20px;
            }
        }
    }
`;

const CompaniesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeCompanySlide = companies[activeIndex];

    const handlePrevSlide = () => {
        if (activeIndex === 0) {
            setActiveIndex(companies.length - 1)
        } else {
            setActiveIndex((oldIndex) => oldIndex - 1);
        }
    }
    const handleNextSlide = () => {
        if (activeIndex >= companies.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex((oldIndex) => oldIndex + 1);
        }
    }
    return (
        <CompaniesSectionStyles>
        <div className='container'>
            <SectionTitle subtitle='The companies I have worked with' title='Companies'/>
            <div className='companiesWrapper'>
                <SwitchTransition>
                    <CSSTransition key={activeCompanySlide.id} timeout={300} classNames="fade">
                        <div className='companyInfo'>
                            <h2 className='companyName'>{activeCompanySlide.name}</h2>
                            <p className='companyRole'>{activeCompanySlide.role}</p>
                            <div className='companyDescription'>
                                <PText>{activeCompanySlide.description}</PText>
                            </div>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className='arrowsContainer'>
                <div 
                    className='previousArrow' 
                    onClick={handlePrevSlide} 
                    role='button' 
                    tabIndex={0} 
                    onKeyDown={handlePrevSlide}
                >
                    <FaArrowLeft/>
                </div>
                <div 
                    className='nextArrow' 
                    onClick={handleNextSlide} 
                    role='button' 
                    tabIndex={0} 
                    onKeyDown={handleNextSlide}
                >
                    <FaArrowRight/>
                </div>
            </div>
        </div>
        </CompaniesSectionStyles>
    )
}

export default CompaniesSection;
