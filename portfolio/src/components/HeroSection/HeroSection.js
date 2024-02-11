import React from 'react'
import HeroImg from '../../assets/images/dmuvaa.jpg';
import PText from '../ParagraphText/PText';
import Button from '../Button/Button';
import SocialMediaArrow from '../../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';

const HeroStyles = styled.div`
    .hero {
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        padding-top: 8rem
    }
    .hero_heading {
        font-size: 1.3rem;
        margin-bottom: -3rem;
        position: relative;
        z-index: 5;
        span {
            display: inline-block;
            width: 100%
        }
        .hero_name {
            font-size: 5.5rem;
            font-family: 'Montserrat SemiBold';
            color: var(--white);
        }
    }
    .hero_img {
        position: relative;
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--white);

        .imageOverlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            pointer-events: none;
        }
    }

`;

const HeroSection = () => {
  return (
    <HeroStyles>
        <div className='hero'>
            <div className='container'>
                <h1 className='hero_heading'>
                    <span>Hello, This is</span>
                    <span className='hero_name'>Dennis Muvaa</span>
                </h1>
                <div className='hero_img'>
                    <img src={HeroImg} alt='hero'></img>
                    <div className='imageOverlay'></div>
                </div>
                <div className='hero_info'>
                    <PText>
                        I am a software engineer who thrive on building robust and scalable solutions to complex problems. 
                        With expertise in Python, Devops. I love diving deep into code and bringing innovative ideas to life.
                    </PText>
                    <Button btnLink="projects" btnText="See my works" outline={false}/>              
                </div>
                <div className='hero_social'>
                    <div className='hero_social_indicator'>
                        <p>Follow</p>
                        {/* <img src={SocialMediaArrow} alt="arror"></img> */}
                    </div>
                    <div className='hero_social_text'>
                    <ul>
                        <li><a href='#' target='_blank' rel='noreferrer'>FB</a></li>
                        <li><a href='#' target='_blank' rel='noreferrer'>TW</a></li>
                        <li><a href='#' target='_blank' rel='noreferrer'>LN</a></li>
                    </ul>
                </div>
                </div>
                <div className='hero_scrollDown'>
                    <p>Scroll</p>
                    {/* <img src={ScrollDownArrow} alt='scrollArrow'></img> */}
                </div>
            </div>
        </div>
    </HeroStyles>
  )
}

export default HeroSection
