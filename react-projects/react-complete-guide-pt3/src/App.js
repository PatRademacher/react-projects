import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

const StyledButton = styled.button`
background-color: ${personal_info => personal_info.alt ? 'silver' : 'cyan'};
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: purple;
  color: yellow;
}
`;


class App extends Component {
  state = {
    persons: [
      {id: 'p', name: 'Patchy', age: 69, nickname: 'Patricio Conway'},
      {id: 'pp', name: 'Ricky Martin', age: 101, nickname: 'JohNNY TAyLOR thomASS'},
      {id: 'ppp', name: 'Mariah Carey', age: 0, nickname: 'Fart Queen'}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( {persons: persons})
}

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
      
              changed={(event) => this.nameChangedHandler(event, person.id)}></Person> </ErrorBoundary>
          })}
        </div> 
      );

      btnClass = classes.Red;

      
      }
    

    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Patrick Rademacher's Profile</h1>
        <p className = {assignedClasses.join(' ')}>As do I...</p>
        <button className={btnClass} Button onClick={this.togglePersonsHandler}>Toggle Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I believe in Hua Mulan'), React.createElement('p', null, '...as do I...'), React.createElement('person', null, null));
  }
}

export default App;
