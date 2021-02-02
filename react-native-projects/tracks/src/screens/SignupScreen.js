import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);
    
    
    
    return (
        
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
                />
            <AuthForm 
                headerText = "Sign Up for Tracker"
                errorMessage={state.errorMessage}
                buttonTitle="Sign Up"
                onSubmit={signup} 
            />
            <NavLink
                linkText = "Already have an account? Sign in instead"
                routeName = "Signin"/>
            
        </View>
        
    );
}

SignupScreen.navigationOptions = () => {
	return{
		headerShown: false,
		};
	};

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'turquoise'
    },
    
});

export default SignupScreen;