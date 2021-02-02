import React from 'react';
import classes from './Person.css';
//import styled from 'styled-components';

/*const StyledDiv = styled.div`
    width: 69%;
    margin: auto;
    border: 1.3px solid orange;
    box-shadow: purple;
    padding: 7px;
    text-align: center;
    
    '@media (min-width: 500px)': {
        width: '500px'
    }`;
*/
const rnd = Math.random();
    if (rnd > 0.7){
        throw new Error('Something went wrong');
    }

const person = (personal_info) => {
    return ( 
       <div className={classes.Person}>
        <p onClick = {personal_info.click}>I'm {personal_info.name} and I pOOPEd {personal_info.age} times!</p>
            <p>{personal_info.children}</p>
            <input type = "text" onChange={personal_info.changed} value = {personal_info.name} />
        </div>  
    )
};

export default person;