import React from 'react';
import PText from './PText';
import ContactFooter from './ContactFooter';
import styled from 'styled-components';

const FooterSectionStyles = styled.div`
    padding-top: 6.2rem;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        gap: 1.6rem;
    }
    footerColumn1 {
        flex: 2;
    }
    footerColumn2,
    footerColumn3,
    footerColumn4 {
        flex: 1;
    }
    .footerColumn1Title {
        font-size: 2rem;
        margin-bottom: .625rem;
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
            <ContactFooter/>
        </div>
        <div className='footerColumn3'>
            <ContactFooter/>
        </div>
        <div className='footerColumn4'>
            <ContactFooter/>
        </div>
      </div>
    </FooterSectionStyles>
  )
}

export default FooterSection;
