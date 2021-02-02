import React, {useEffect, useRef, useContext} from 'react';
import classes from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/Cockpit/Cockpit.css';
import AuthContext from '/Users/patrickrademacher/REACT/Udemy/Projects/react-complete-guide-pt_four/src/context/auth-context.js';


const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        //setTimeout(() => {
        //    alert('Saved data to cloud!');
        //}, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

        // useEffect
    
    
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons === false){
        btnClass = classes.Blue;
    }
    else{
        btnClass = classes.Red;}
    if (props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <=1){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className = {assignedClasses.join(' ')}>As do I...</p>
          <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Name</button>
          <button onClick={authContext.login}>Log in</button>
        </div>
      );
};

export default React.memo(cockpit);