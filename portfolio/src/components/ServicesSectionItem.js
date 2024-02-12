import React from 'react'
import { TfiWrite } from "react-icons/tfi";
import PText from './PText';
import styled from 'styled-components';

const ServicesSectionItemStyles = styled.div`
    text-align: center;
    .servicesItem_icon {
        svg {
            width: 2rem;
        }
        .servicesItem_title {
            font-size: 1.5rem;
            font-family: 'Montserrat SemiBold';
            margin-top: 1rem
        }
        .hero_paragraph {
            margin-top: 1.25rem;
            font-family: 'Montserrat Regular';
        }
    }
`;


const ServicesSectionItem = (props) => {
  return (
    <ServicesSectionItemStyles>
        <div className='servicesItem_icon'>
            {props.icon}
            <div className='servicesItem_title'>{props.title}</div>
            <PText>{props.description}</PText>
        </div>
    </ServicesSectionItemStyles>
  )
}

export default ServicesSectionItem;
