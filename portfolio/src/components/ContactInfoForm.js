import React, { useState } from 'react'
import styled from 'styled-components';

const ContactInfoFormStyles = styled.form`
    width: 100%;
    .formGroup {
        width: 100%;
        margin-bottom: 1.25rem;
    }
    label {
        font-size: 1.15rem;
    }
    input,
    textarea {
        width: 100%;
        font-size: 1rem;
        padding: 0.8rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 0.625rem;
    }
    textarea {
        min-height: 250px;
        resize: vertical;
    }
    button[type="submit"] {
        background-color: var(--gray-1);
        color: var(--black);
        font-size: 1.25rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 0.625rem 2.5rem;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
    }
`;

const ContactInfoForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div>
            <ContactInfoFormStyles>
                <div className='formGroup'>
                    <label htmlFor="name">
                        Your name
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className='formGroup'>
                    <label htmlFor="email">
                        Your email
                        <input 
                            type='text' 
                            id='email' 
                            name='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className='formGroup'>
                    <label htmlFor="message">
                        Your message
                        <textarea 
                            type='text' 
                            id='message' 
                            name='message' 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button type='submit'>Send</button>
            </ContactInfoFormStyles>
        </div>
    )
}

export default ContactInfoForm;
