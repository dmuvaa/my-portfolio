import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        font-size: 1.25rem;
        background-color: ${(props) => props.outline ? 'transparent' : 'var(--gray-1)'};
        padding: .7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: ${(props) => props.outline ? 'var(--white)' : 'var(--black)'};
    }
    @media only screen and (max-width: 750px) {
        .btn_container .button {
            font-size: .85rem;
        }
    }
`;

const Button = (props) => {
    return (
        <ButtonStyle outline={props.outline}>
            <Link className='button' to={props.btnLink}>
                {props.btnText}
            </Link>
        </ButtonStyle>
    )
}

export default Button;
