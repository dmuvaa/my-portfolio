import React from 'react'
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutPageInfoItem from '../components/AboutPageInfoItem';
import styled from 'styled-components';
import ContactBannerSection from '../components/ContactBannerSection';

const AboutPageStyles = styled.div`
    padding: 12.5rem 0 6.25rem 0;
    .topSection {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.25rem
    }
    .leftSide {
      flex: 3;
    }
    .rightSide {
      flex: 2;
    }
    .leftSide .aboutSubheading {
      font-size: 1.375rem;
      margin-bottom: 1.25rem;
      
      span {
        background-color: var(--deep-dark);
        padding: .1rem;
        border-radius: 8px;
      }
    }
    .leftSide .aboutHeading {
      font-size: 2.2rem;
      margin-bottom: 1.25rem;
    }
    .leftSide .aboutInfo {
      margin-bottom: 2.5rem;
      .hero_paragraph {
        max-width: 100%;
      }
    }

    .rightSide {
      img {
        border: 2px solid yellow;
      }
    }
    .aboutInfoItems {
      margin-top: 9.2rem;
    }
    .aboutItem {
      margin-bottom: 5rem; 
    }
    .aboutItemHeading {
      text-transform: uppercase;
    }
    @media only screen and (max-width: 750px) {
      padding: 6.25rem 0;
      .topSection {
        flex-direction: column;
        gap: 3rem;
      }
      .leftSide .aboutSubheading {
        font-size: 1rem;
      }
      .leftSide .aboutHeading {
        font-size: 1.8rem;
      }
      .aboutItemHeading {
        font-size: 1.7rem;
      }
    }
`;

const AboutPage = () => {
  return (
    <AboutPageStyles>
      <div className='container'>
        <div className='topSection'>
          <div className='leftSide'>
            <p className='aboutSubheading'>H1, I am <span>Dennis Muvaa</span></p>
            <h2 className='aboutHeading'>A web Developer</h2>
            <div className='aboutInfo'>
              <PText>
                I'm a budding software engineer with a passion for problem-solving 
                and a drive to learn and grow in the dynamic world of technology. While 
                I may be new to the field, my enthusiasm for coding and creating software 
                solutions knows no bounds.
                <br/> <br/> 
                I thrive on challenges and approach every project 
                with a curious mind and a determination to succeed. Through continuous learning 
                and hands-on experience, I aim to refine my skills and contribute meaningfully 
                to the ever-evolving landscape of software development.
                <br/> <br/>
                As I embark on this exciting journey, I look forward to collaborating with peers, 
                embracing new technologies, and making a positive impact through innovative solutions.
              </PText>
            </div>
            <Button btnText='Download CV' btnLink='#'/>
          </div>
          <div className='rightSide'>
            <img src={AboutImg} alt='Dennis Muvaa'/>
          </div>
        </div>
        <div className='aboutInfoItems'>
          <div className='aboutItem'>
            <h1 className='aboutItemHeading'>Education</h1>
            <AboutPageInfoItem 
              title='University' 
              items={['Bachelor of Arts in Economics, Egerton Universtiy 2018']}
            />
            <AboutPageInfoItem 
              title='Bootcamp' 
              items={['Sofware Enginnering, ALX 2024']}
            />
          </div>
          <div className='aboutItem'>
            <h1 className='aboutItemHeading'>MY SKILLS</h1>
            <AboutPageInfoItem 
              title='FrontEnd' 
              items={['HTML', 'CSS', 'Javascript']}
            />
            <AboutPageInfoItem 
              title='BackEnd' 
              items={['Python(Flask)', 'Node.js', 'MySQL', 'Redis']}
            />
          </div>
          <div className='aboutItem'>
            <h1 className='aboutItemHeading'>EXPERIENCES</h1>
            <AboutPageInfoItem 
              title='July 2022-Present' 
              items={['Technical Writer at Cloud Infrastructure Services Ltd']}
            />
            <AboutPageInfoItem 
              title='April 2016-Present' 
              items={['Content Writer']}
            />
            <AboutPageInfoItem 
              title='Feb 2021-Sep 2022' 
              items={['Content Writer & SEO Manager at Hidden Lemur - Travel media company']}
            />
            <AboutPageInfoItem 
              title='May 2021-May 2022' 
              items={['Technical Writer at nOps.io - Cloud management platform']}
            />
          </div>
        </div>
      </div>
      <ContactBannerSection/>
    </AboutPageStyles>
  )
}

export default AboutPage;