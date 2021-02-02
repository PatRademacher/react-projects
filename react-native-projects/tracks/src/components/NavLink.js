import React from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, linkText, routeName}) => {
    return (
        <>
           <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
                <Spacer>
                    <Text style={styles.textStyle}>{linkText}</Text>
                </Spacer>
            </TouchableOpacity> 
        </>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'dodgerblue'
    }
})


export default withNavigation(NavLink);
