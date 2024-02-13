import React from 'react';
import PText from './PText';
import styled from 'styled-components';

const AboutPageInfoItemStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 3rem;
    position: relative;

    .title {
        font-size: 1.5rem;
    }
    .items {
        display: flex;
        gap: .95rem;
        position: absolute;
        left: 25rem;
    }
    .item {
        background-color: var(--deep-dark);
        padding: .625rem;
        border-radius: 8px;
    }
    @media only screen and (max-width: 750px) {
        flex-direction: column;
        align-items: flex-start;
        gap: .625rem;

        .items {
            position: initial;
            gap: 0.625rem;
            flex-wrap: wrap;
        }
    }
`;

const AboutPageInfoItem = (props) => {
  return (
    <AboutPageInfoItemStyles>
        <h1 className='title'>{props.title}</h1>
        <div className='items'>
            {props.items.map((item, index) => (
                <div key={index} className='item'>
                    <PText>{item}</PText>
                </div>
            ))}
        </div>
    </AboutPageInfoItemStyles>
  )
}

export default AboutPageInfoItem;
