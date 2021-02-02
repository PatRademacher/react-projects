import React, { Component } from 'react';
import classes from './App.css';
import Person from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/components/Persons/Person/Person.js';
import styled from 'styled-components';
import ErrorBoundary from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/containers/ErrorBoundary/ErrorBoundary.js';
import Persons from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/components/Persons/Persons.js';
import Cockpit from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/Cockpit/Cockpit.js';
import withClass from '../hoc/withClass.js';
import Aux from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/hoc/Aux.js';
import AuthContext from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/context/auth-context.js';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'silver' : 'cyan'};
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: purple;
  color: yellow;
}
`;


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  
  state = {
    persons: [
      {id: 'p', name: 'Patches', age: 69, nickname: 'Patricio Conway'},
      {id: 'pp', name: 'Ricky Martin', age: 101, nickname: 'JohNNY TAyLOR thomASS'},
      {id: 'ppp', name: 'Mariah Carey', age: 0, nickname: 'Fart Queen'}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

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

  this.setState((prevState, props) => {
    return{
      persons: persons,
      changeCounter: prevState.changeCounter + 1
    };
  });
};

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  };
  render() {
    console.log('[App.js] render');
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
            isAuthenticated = {this.state.authenticated}>
            </Persons>
      }
    

    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
      <Aux classes={classes.App}>
        <button onClick={() => {this.setState({showCockpit: false});}}>Remove Cockpit</button>
        <AuthContext.Provider value = {{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {this.state.showCockpit ? (
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}>
            </Cockpit>
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I believe in Hua Mulan'), React.createElement('p', null, '...as do I...'), React.createElement('person', null, null));
  }
}

export default withClass(App, classes.App);
