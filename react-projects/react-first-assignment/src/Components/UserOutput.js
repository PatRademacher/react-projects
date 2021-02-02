import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return ( 
        
        <div className = "UserOutput">
            <div class = "separator"></div>
            <p class = "par">This is representing my first paragraph. Here is the username passed in: {props.username}</p>
            <div class = "separator"></div>
            <p class = "par">This is representing my second paragraph. Here is the username being passed in through the state/class: {props.classUsername}</p>
        </div>
    )
};

export default useroutput;