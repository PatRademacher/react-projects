import React from 'react';
import './Person.css';

const person = (personal_info) => {
    return ( 
        <div className = "Person">
            <p onClick = {personal_info.click}>I'm {personal_info.name} and I pOOPEd {personal_info.age} times!</p>
            <p>{personal_info.children}</p>
            <input type = "text" onChange={personal_info.changed} value = {personal_info.name} />
        </div>
    )
};

export default person;