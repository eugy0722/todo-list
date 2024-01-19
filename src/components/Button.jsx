import React from 'react'

function Button(props) {
    return(
        <button className={props.className}>
            {props.value}
        </button>
    )
} 

export default Button;