import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/hoc/Aux.js';
import withClass from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/hoc/withClass.js';
import PropTypes from 'prop-types';
import AuthContext from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/context/auth-context.js';

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
        throw new Error('Sit down and shutup!');
    }

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] is rendering...');
        return(
            <React.Fragment>
                    {this.context.authenticated ? <p> Authenticated</p> : <p>Please log in</p>}
                <p key = "key1" onClick = {this.props.click}>I'm {this.props.name} and I pOOPEd {this.props.age} times!</p>,
                <p key = "key2">{this.props.children}</p>,
                <input key = "key3" 
                ref = {this.inputElementRef}
                // ref={(inputEl) => {this.inputElement = inputEl}}
                type = "text" 
                onChange={this.props.changed} value = {this.props.name} />
            </React.Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);