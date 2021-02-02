import React from 'react';
import './UserInput.css';
import './UserOutput.css';

const userInput = (props) => {
    return ( 
        <div className = "UserInput">
            <input id = "inputStyle" type = "text" onChange = {props.changed} value = {props.original}/>
            <div class="separator"></div>
        </div>
        
    )
};

export default userInput;