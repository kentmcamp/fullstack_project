import React from 'react';
import './CatButton.scss';

const Button = props => {
    return (
        <button onClick={props.onclick}>{props.title}</button>
    );
}

export default Button;
