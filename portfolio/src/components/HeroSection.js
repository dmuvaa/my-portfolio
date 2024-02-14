import React from 'react'
import HeroImg from '../assets/images/dmuvaa.jpg'
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
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
    }
    .hero_heading {
        font-size: 1.3rem;
        margin-bottom: -3rem;
        position: relative;
        z-index: 5;
        span {
            display: inline-block;
            width: 100%;
            color: var(--gray-1);
        }
        .hero_name {
            font-size: 5rem;
            font-family: 'Montserrat SemiBold';
            color: var(--gray-1);
        }
    }
    .hero_img {
        position: relative;
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
        z-index: -5;

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
    .hero_info {
        margin-top: -11rem;
        color: var(--gray-1)
    }
    .hero_social,
    .hero_scrollDown {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        position: absolute;
        bottom: 20px;
        width: 50px;
    }
    .hero_social {
        left: 50px;
    }
    .hero_scrollDown {
        right: 50px;
    }
    .hero_social_indicator,
    .hero_scrollDown {
        width: 50px;
        p {
            font-size: 0.9rem;
            transform: translateY(-70px) rotate(90deg);
            letter-spacing: .1rem;
            text-transform: uppercase;
            color: var(--gray-1);
        }
        img {
            max-height: 45px;
            width: 16px;
            margin: 0 auto;
            object-fit: contain;
        }
    }
    .hero_scrollDown {
        img {
            max-height: 70px;
            height: 70px;
        }
    }
    .hero_social {
        .hero_social_text {
            ul {
                li {
                    margin-bottom: .8rem;
                }
                a {
                    display: inline-block;
                    font-size: .9rem;
                    transform: rotate(-90deg);
                    letter-spacing: 3px;
                    color: var(--gray-1);
                }
            }
        }
    }
    @media only screen and (max-width: 750px) {
        .hero {
            min-height: 750px;
        }
        .hero_heading {
            font-size: .9rem;
            .hero_name {
                font-size: 4rem;
            }
        }
        .hero_img {
            height: 300px;
        }
        .hero_info {
            margin-top: 2rem;
        }
        .hero_social {
            left: 0px;
            bottom: -10px;
            width: 20px;
            .hero_social_indicator {
                width: 20px;
                p {
                    font-size: .8rem;
                }
                img {
                    max-height: 22px;
                }
            }
            .hero_social_text {
                ul {
                    li {
                        a {
                            font-size: .8rem;
                            margin-bottom: .2rem;
                        }
                    }
                }
            }
        }
        .hero_scrollDown {
            right: 0px;
            width: 20px;
            gap: 1rem;
            p {
                font-size: .8rem;
            }
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
                        With expertise in Python, Devops.
                    </PText>
                    <Button btnLink="projects" btnText="See my works" outline={false}/>
                    <Button btnLink="" btnText="Download CV" outline={false}/>            
                </div>
                <div className='hero_social'>
                    <div className='hero_social_indicator'>
                        <p>Follow</p>
                        <img src={SocialMediaArrow} alt="arror"></img>
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
                    <img src={ScrollDownArrow} alt='scrollArrow'></img>
                </div>
            </div>
        </div>
    </HeroStyles>
  )
}

export default HeroSection
