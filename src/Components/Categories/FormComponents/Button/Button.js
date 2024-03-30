import React from 'react';

const Button = props => {
    return (
        <button onClick={props.onclick}>{props.title}</button>
    );
}

export default Button;
