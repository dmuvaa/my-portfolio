import React from 'react';
import PText from './PText';
import styled from 'styled-components';

const ContactInfoItemStyles = styled.div`
    padding: 1.25rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 1.25rem;
    border-radius: 8px;
    margin-bottom: 1.25rem;

    .contactIcon {
        color: var(--white);
        background-color: var(--gray-2);
        padding: 0.8125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        
        svg {
            width: 2.1rem
        }
    }
    @media only screen and (max-width: 750px) {
        .contactIcon {
            padding: 0.4125rem;            
            svg {
                width: 1.6rem
            }
        }  
    }
`;

const ContactInfoItem = (props) => {
  return (
    <ContactInfoItemStyles>
        <div className='contactIcon'>{props.icon}</div>
        <div className='contactInfo'>
            <PText>{props.text}</PText>
        </div>
    </ContactInfoItemStyles>
  )
}

export default ContactInfoItem;
