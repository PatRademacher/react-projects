import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/containers/ErrorBoundary/ErrorBoundary.js';

class Persons extends PureComponent {
   // static getDerivedStateFromProps(props, state){
   //     console.log('[Persons.js] getDerivedStateFromProps')
   //     return state;
   // }
   
   // down below - may see in other project but not used anymore

   //componentWillReceiveProps(props){
     //   console.log('[Persons.js] componentWillReceiveProps', props);
   // }
   // shouldComponentUpdate(nextProps, nextState){
    //    console.log('[Persons.js] shouldComponentUpdate');
    //    if (nextProps.persons !== this.props.persons || 
    //        nextProps.changed !== this.props.changed || 
    //        nextProps.clicked !== this.props.clicked){
    //        return true;
    //    }
    //    else {
    //        return false;
    //    }
    //}

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js} getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    //componentWillUpdate(){}

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] did update');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
                return( 
                    <ErrorBoundary key={person.id}>
                        <Person 
                            click={() => this.props.clicked(index)}
                            name={person.name} 
                            age={person.age}
                            changed={(event) => this.props.changed(event, person.id)}>
                            </Person> 
                        </ErrorBoundary>
            );
        });
    }
}
      

  export default Persons;