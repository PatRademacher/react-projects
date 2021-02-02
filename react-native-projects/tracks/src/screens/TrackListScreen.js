import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
const TrackListScreen = ({navigation}) => {
    return <SafeAreaView style={styles.mainView}>
                <Text style={{color: 'plum', backgroundColor: 'brown', fontSize: 54, textAlign: 'center'}}>Track List Screen</Text>
                <Spacer>

                <Button title='Go to Track Detail'                 onPress={() => navigation.navigate('TrackDetail')} onPress={() => navigation.navigate('TrackDetail')}/>

                </Spacer>
                <Button style={{marginTop: 14, alignSelf: 'center'}} title="GO BACK" onPress={() => navigation.navigate('Signup')}/>
           </SafeAreaView>
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'rgb(231, 162, 138)',
        flexDirection: 'column',
        margin: 'auto',
        justifyContent: 'space-between'
    },
    bottomButton: {
        bottom: 0,
        color: 'purple'
    }

});

export default TrackListScreen;