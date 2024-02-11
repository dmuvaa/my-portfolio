import React from 'react'
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
    text-align: center;
    p {
        font-family: 'RobotoMono Regular';
        font-size: 1.3rem;
    }
    h2 {
        font-family: 'Montserrat Bold';
        font-size: 4rem;
        margin-top: .3rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 750px) {
        p {
            font-size: .9rem;
        }
        h2 {
            font-size: 2.9rem;
        }
    }
`;

/*you can add default values to destructured props*/
const SectionTitle = ({ subtitle='this is subtitle', title='this is title'}) => {
  return (
    <SectionTitleStyle className='section-title'>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </SectionTitleStyle>
  )
}

export default SectionTitle;
