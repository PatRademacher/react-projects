import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Patchy', age: 69, nickname: 'Patricio Conway'},
      {name: 'Ricky Martin', age: 101, nickname: 'JohNNY TAyLOR thomASS'},
      {name: 'Mariah Carey', age: 0, nickname: 'Fart Queen'}
    ],
    otherState: 'some other value'
  };

  switchUpYoNameHandler = () => {
    //console.log('This indeed was clicked');
    var temp = [];
    for (var i = 0; i < this.state.persons.length; i++){
      temp.push(this.state.persons[i].name);
    }
    this.setState( {
      persons: [
        {name: this.state.persons[0].nickname, age: this.state.persons[0].age, nickname: temp[0]},
        {name: this.state.persons[1].nickname, age: this.state.persons[1].age, nickname: temp[1]},
        {name: this.state.persons[2].nickname, age: this.state.persons[2].age, nickname: temp[2]}
      ]

    })
  }

  render() {
    return (
      <div className="App">
        <h1>I believe in Hua Mulan</h1>
        <p>As do I...</p>
        <button id="buttonyeah" onClick={this.switchUpYoNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My Hobbies: Living La Vida Loca </Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I believe in Hua Mulan'), React.createElement('p', null, '...as do I...'), React.createElement('person', null, null));
  }
}

export default App;
