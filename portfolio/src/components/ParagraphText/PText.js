import React from 'react'
import './pText.css'

const PText = (props) => {
    //console.log(props.children)
    return (
        <div>
            <p className='hero_paragraph'>{props.children}</p>
        </div>
    )
}

export default PText
