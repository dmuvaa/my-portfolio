import React from 'react'
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.png';
import styled from 'styled-components';

const AboutSectionStyle = styled.div`
    padding: 6rem;
    .container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .aboutSection_left,
    .aboutSection_right {
        flex: 1;
    }
    .section-title {
        text-align: left;
    }
    .hero_paragraph {
        margin-top: 1.25rem;
        margin-left: 0;
    }
    .aboutSection_buttons {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.25rem;
        margin-top: 1.25rem;
    }
    @media only screen and (max-width: 950px) {
        .aboutSection_left{
            flex: 4;
        }
        .aboutSection_right {
            flex: 3;
        }
    }
    @media only screen and (max-width: 750px) {
        .container {
            flex-direction: column;
            text-align: center;
        }
        .aboutSection_left,
        .aboutSection_right {
            width: 100%;
        }
        .section-title {
            text-align: center;
        }
        .hero_paragraph {
            margin: 0 auto;
            margin-top: 1.25rem;
        }
        .aboutSection_right {
            margin-top: 1.875rem;
        }
        .aboutSection_buttons {
            flex-direction: column;
            gap: 0;
            .button_wrapper,
            a {
                width: 100%;
                text-align: center;
            }
        }
    }
`;

const AboutSection = () => {
  return (
    <AboutSectionStyle>
        <div className='container'>
            <div className='aboutSection_left'>
                <SectionTitle subtitle='Let me introduce myself' title='About me'/>
                <PText>
                    I am a software engineer and technical writer from Nairobi, Kenya.
                    I build professional applications and always try to showcase my unique skills 
                    and originality throught my work.
                </PText>
                <div className='aboutSection_buttons'>
                    <Button btnLink="/projects" btnText="works"/>
                    <Button btnLink="/about" btnText="Read More" outline="true"/>
                </div>
            </div>
            <div className='aboutSection_right'>
                <img src={AboutImg} alt='about'></img>
            </div>
        </div>
    </AboutSectionStyle>
  )
}

export default AboutSection
