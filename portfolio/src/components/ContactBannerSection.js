import React from 'react';
import PText from './PText';
import Button from './Button';
import styled from 'styled-components';

const ContactBannerSectionStyles = styled.div`
    .contactBannerWrapper {
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 3.125rem 0;
        text-align: center;
    }
    .contactBannerHeading {
        font-size: 2.2rem;
        margin-bottom: 1.25rem;
    }
    @media only screen and (max-width: 750px) {
        .contactBannerHeading {
            font-size: 1.5rem;
        }
    }
`;

const ContactBannerSection = () => {
  return (
    <ContactBannerSectionStyles>
      <div className='container'>
        <div className='contactBannerWrapper'>
            <PText>Have a project in mind?</PText>
            <h3 className='contactBannerHeading'>Let me help you</h3>
            <Button btnText='Contact Now' btnLink='/contact'/>
        </div>
      </div>
    </ContactBannerSectionStyles>
  )
}

export default ContactBannerSection;
