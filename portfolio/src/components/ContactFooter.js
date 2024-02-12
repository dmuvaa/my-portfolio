import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContactFooterStyles = styled.div`
    .heading {
        font-size: 1.5rem;
        margin-bottom: 1.25rem;
    }
    li {
        margin-bottom: 0.625rem;
    }
    a {
        font-size: 1.1rem;
    }
`;

const ContactFooter = (props) => {
  console.log(props);
  return (
    <ContactFooterStyles>
      <div className='heading'>{props.heading}</div>
      <ul>
        {
            props.links.map((item, index) => (
                <li key={index}>
                    { item.type === 'Link' ? (
                        <Link to={item.path}>{item.title}</Link>
                        ) : (
                        <a href={item.path} target='_blank' rel='noreferrer'>{item.title}</a>
                        )
                    }
                </li>
            ))
        }
      </ul>
    </ContactFooterStyles>
  )
}

export default ContactFooter;
