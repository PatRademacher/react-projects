import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput.js'
import UserOutput from './Components/UserOutput.js'

class App extends Component {
  state = {
    useroutputs: [
      {username: 'ReactGoddess'}
    ]
  };

  switchUsernameHandler = (event) => {
    
    this.setState( {
      useroutputs: [
        {username: event.target.value} 
      ]
    })
  }
    
  //};


  render() {
    return (
      <div className="App">
        <div id="separator"></div>
        <UserInput changed = {this.switchUsernameHandler} original = {this.state.useroutputs[0].username}/>
        <div id="separator"></div>        
        <UserOutput username = "ReactGod" classUsername = {this.state.useroutputs[0].username}/> 
        <div id="separator"></div> 
        <div id="separator"></div>        
        <div id="separator"></div>            

      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I believe in Hua Mulan'), React.createElement('p', null, '...as do I...'), React.createElement('person', null, null));
  }
}

export default App;
