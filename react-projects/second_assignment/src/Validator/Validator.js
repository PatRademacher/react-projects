import React from 'react';
import './Validator.css';

const validator = (props) => {
    return ( 
        <div className = "Validator">
            <input type = "text" onChange={props.changed} value = {props.name} />
            <p>{props.name.length}</p>
            <p>{props.status}</p>
        </div>
    )
};

export default validator;