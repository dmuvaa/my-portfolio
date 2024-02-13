import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ContactInfoItem from '../components/ContactInfoItem';
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import ContactInfoForm from '../components/ContactInfoForm';

const ContactPageStyles = styled.div`
    padding: 6.25rem 0;
    
    .contactSectionWrapper {
      display: flex;
      gap: 3.125rem;
      margin-top: 4.375rem;
      justify-content: space-between;
      position: relative;
    }
    .contactSectionWrapper::after {
      position: absolute;
      content: '';
      width: 2px;
      height: 50%;
      background-color: yellow;
      transform: translate(-50%, -50%);
      top: 30%;
      left: 50%
    }
    .leftSide {
      width: 100%;
      max-width: 500px;
    }
    .rightSide {
      max-width: 500px;
      width: 100%;
    }

    @media only screen and (max-width: 750px) {
      .contactSectionWrapper {
        flex-direction: column;
      }
      .contactSectionWrapper::after {
        display: none;
      }
      .leftSide,
      .rightSide {
        width: 100%;
        max-width: 100%;
        padding: 2.5rem 1.25rem 1.25rem 1.25rem;
      }
    }
`;

const ContactPage = () => {
  return (
    <ContactPageStyles>
      <div className='container'>
        <SectionTitle subtitle='Get in touch' title='CONTACT'/>
        <div className='contactSectionWrapper'>
          <div className='leftSide'>
            <ContactInfoItem icon={<MdLocalPhone/>} text="+254728921448"/>
            <ContactInfoItem icon={<MdEmail/>} text="dmuvaa70@gmail.com"/>
            <ContactInfoItem icon={<MdLocationOn/>} text="Nairobi, Kenya"/>
          </div>
          <div className='rightSide'>
            <div>
              <ContactInfoForm/>
            </div>
          </div>
        </div>
      </div>
    </ContactPageStyles>
  )
}

export default ContactPage;
