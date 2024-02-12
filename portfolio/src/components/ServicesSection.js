import React from 'react';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import styled from 'styled-components';
import { TfiWrite } from "react-icons/tfi";
import { FaCode } from "react-icons/fa6";
import { MdOutlineInstallDesktop } from "react-icons/md";

const ServicesSectionStyles = styled.div`
    padding: 6.25rem 0;
    .services_allItems {
      display: flex;
      gap: 6.25rem;
      justify-content: space-between;
      margin-top: 3.125rem;
    }
    @media only screen and (max-width: 750px) {
      .services_allItems {
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 3.125rem;
        gap: 3.125rem;
      }
    }
`;

const ServicesSection = () => {
  return (
    <ServicesSectionStyles>
      <div className='container'>
      <SectionTitle subtitle='What I will do for you' title='services'/>
        <div className='services_allItems'>
          <ServicesSectionItem
            icon={<TfiWrite />}
            title='Content Writing'
            description='I have created web content for numerous websites, job platforms and blogs for companies such
            cyber Accord and Data Theory Group' 
          />
          <ServicesSectionItem
            icon={<FaCode />} 
            title='Web Development' 
            description='I am experience in eveloping complex and robust web applications that can scale'
          />
          <ServicesSectionItem
            icon={<MdOutlineInstallDesktop />} 
            title='Technical Writing' 
            description='I have wrote over 100 technical articles around topics such as Ubuntu, Node.js, Nginx, AWS and more'
          />
        </div>
      </div>
    </ServicesSectionStyles>
  )
}

export default ServicesSection;
