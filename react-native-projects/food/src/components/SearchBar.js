import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.searchBarStyle}>
            <Fontisto name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='Search'
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}>
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBarStyle: {
        backgroundColor: 'rgb(212, 165, 179)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
        
        
    },
    inputStyle: {
        
        fontSize: 18,
        flex: 1,
        color: 'yellow'
    },
    iconStyle: {
        color: 'rgb(19, 223, 219)',
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;