import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SigninScreen = ({navigationOptions}) => {
    const {state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
                />
            <AuthForm 
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                buttonTitle="Sign In"/>
            <NavLink 
                linkText="Don't have an account? Sign up instead"
                routeName="Signup"/>
        </View>
    );
}


SigninScreen.navigationOptions = {
    headerShow: false
}
const styles = StyleSheet.create({
    signIn: {
        color: 'rgb(102, 243, 217)', 
        backgroundColor: 'rgb(222, 243, 189)', 
        fontSize: 54,
        textAlign: 'center',
        borderColor: 'salmon',
        borderWidth: 10,
    },
    container: {
        borderColor: 'red',
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'turquoise'
    },


});

export default SigninScreen;