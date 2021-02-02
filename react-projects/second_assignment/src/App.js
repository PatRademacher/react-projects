import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validator from './Validator/Validator.js';
import Char from './Char/Char.js';
class App extends Component {
  state = {
    validators: [
      {id: 'pp', name: 'Perfect', status: 'Perfecto!'}

    ],
    wordToDivide: 'Perfect',
    otherState: 'some other value',
    showValidators: true
  };

  nameChangedHandler = (event, id) => {
    console.log(id)
    const validatorIndex = this.state.validators.findIndex(v => {
      return v.id === id;
  });
  console.log(validatorIndex);
  const validator = {
    ...this.state.validators[validatorIndex]
  };

  let wordToDivide = {
    ...this.state.wordToDivide
  };
 

  validator.name = event.target.value;
  wordToDivide = event.target.value;

  if (validator.name.length === 7){
    validator.status = 'Perfecto!';
  }
  else if (validator.name.length > 7){
    validator.status = 'Too long';
  }
  else{
    validator.status = 'Too short';
  }

  const validators = [...this.state.validators];
  validators[validatorIndex] = validator;
  this.setState( {validators: validators})
  this.setState({wordToDivide: wordToDivide})
}

  deleteCharHandler = (charIndex) => {
    let setWordToDivide = [...this.state.wordToDivide];
    let temp = '';
    for (var i = 0; i < setWordToDivide.length; i++){
      if (i !== charIndex){
        temp += setWordToDivide[i];
      }
    }
    console.log('temp: ' + temp);
    setWordToDivide = temp;
    this.setState({wordToDivide: setWordToDivide});
  }
  
  toggleValidatorHandler = () => {
    const doesShow = this.state.showValidators;
    this.setState({showValidators: !doesShow});
  }
  render() {
      
      let validators = (
        <div>
          {this.state.validators.map((validator, index) => {
            return <Validator 
              name={validator.name} 
              key={validator.id}
              status={validator.status}
              changed={(event) => this.nameChangedHandler(event, validator.id)} />
          })}
        </div> 
      )

      let chars = this.state.wordToDivide.split('').map((l, index) => {
            return <Char
              click={() => this.deleteCharHandler(index)}
              letter = {l} 
              key = {index}/>
          });
      

      
          
       
    
    return (
      <div className="App">
        <h1>It's a String Checker!</h1>
        {validators}
        {chars}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I believe in Hua Mulan'), React.createElement('p', null, '...as do I...'), React.createElement('person', null, null));
  }
}

export default App;
