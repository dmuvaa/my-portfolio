import React from 'react'
import styled from 'styled-components'

const HeroParagraph = styled.div`
    .hero_paragraph {
        max-width: 500px;
        margin: 0 auto;
        font-size: 1.1rem;
        line-height: 1.5rem;
        letter-spacing: .1rem;
    }

    @media only screen and (max-width: 750px) {
        .hero_paragraph {
            font-size: .9rem;
            font-family: 'Montserrat Regular'; 
        }
    }
`;

const PText = (props) => {
    //console.log(props.children)
    return (
        <HeroParagraph>
            <p className='hero_paragraph'>{props.children}</p>
        </HeroParagraph>
    )
}

export default PText
