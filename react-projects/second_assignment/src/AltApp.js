import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';


const app = personal_info => {
  const [ personsState, setPersonsState] = useState(
    {
      persons: [
        {name: 'Patchy', age: 69},
        {name: 'Ricky Martin', age: 101},
        {name: 'Mariah Carey', age: 0}
      ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchUpYoNameHandler = (newName) => {
      setPersonsState( {
        persons: [
          {name: newName, age: 69},
          {name: "Little Angel Devil", age: 101},
          {name: "Little Singer of Gods", age: 444}
        ]
    
      });}

      const nameChangerHandler = (event) => {
        setPersonsState( {
          persons: [
            {name: 'Patchy', age: 69},
            {name: event.target.value, age: 101},
            {name: "Little Singer of Gods", age: 444}
          ]
      
        });}
    

  
    return (
      <div className="App">
        <h1>I believe in Hua Mulan</h1>
        <p>As do I...</p>
        <button id="buttonyeah" onClick={switchUpYoNameHandler.bind(personsState, "Billy Penny Kraftwich")}>Switch Name</button>
        <Person 
          name = {personsState.persons[0].name} 
          age = {personsState.persons[0].age}/>
        <Person 
          name = {personsState.persons[1].name} 
          age = {personsState.persons[1].age}
          click = {switchUpYoNameHandler.bind(personsState, "Lenny KRavITz")}
          changed = {nameChangerHandler}>
          My Hobbies: Living La Vida Loca </Person>
        <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
      </div>
    );
}

export default app;
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I believe in Hua Mulan'), React.createElement('p', null, '...as do I...'), React.createElement('person', null, null));
