import React, {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import {View, Text, StyleSheet} from 'react-native';


const ResolveAuthScreen = () => {
    const {tryLocalSignin} = useContext(AuthContext);

    useEffect (() => {
        tryLocalSignin();
    }, []);

    return (
        <View>
            <Text>Resolve Auth Screen</Text>
        </View>
    );
}

export default ResolveAuthScreen;