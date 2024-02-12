import React from 'react';
import PText from './PText';
import ContactFooter from './ContactFooter';
import styled from 'styled-components';

const FooterSectionStyles = styled.div`
    padding-top: 6.2rem;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        justify-content: space-between;
        gap: 1.6rem;
    }
    footerColumn1 {
        flex: 2;
    }
    footerColumn2,
    footerColumn3{
        flex: 1;
    }
    .footerColumn1Title {
        font-size: 2rem;
        margin-bottom: .625rem;
    }
    .copyrightSection {
        background-color: var(--dark-bg);
        text-align: left;
        padding: .6rem;
        margin-top: 3.125rem;

        .hero_paragraph {
            font-size: .85rem;
        }
    }
    @media only screen and (max-width: 750px) {
        .container {
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 3.2rem;
            }
        }
        .footerColumn1 .hero_paragraph {
            max-width: 100%;
        }
        .copyrightSection {
            margin-top: 0rem;
        }
    }
`;

const FooterSection = () => {
  return (
    <FooterSectionStyles>
      <div className='container'>
        <div className='footerColumn1'>
            <h1 className='footerColumn1Title'>Dennis Muvaa</h1>
            <PText>I am a software engineer who thrive on building robust and 
                scalable solutions to complex problems. With expertise in Python, Devops.
            </PText>
        </div>
        <div className='footerColumn2'>
            <ContactFooter 
                heading='Important Links' 
                links={[
                    {title: 'Home', path: '/'},
                    {title: 'About', path: '/about'},
                    {title: 'Projects', path: '/projects'},
                    {title: 'Contact', path: '/contact'}
                ]}
            />
        </div>
        <div className='footerColumn3'>
            <ContactFooter 
                heading='Social Links' 
                links={[
                    {type:'Link', title: 'Twitter', path: '/'},
                    {type:'Link', title: 'LinkedIn', path: '/about'},
                    {type:'Link',title: '+254728921448', path: '/projects'},
                    {type:'Link', title: 'Nairobi, Kenya', path: '/contact'}
                ]}
            />
        </div>
      </div>
      <div className='copyrightSection'>
        <div className='container'>
            <PText>@ 2024 - Dennis Muvaa</PText>
        </div>
      </div>
    </FooterSectionStyles>
  )
}

export default FooterSection;
