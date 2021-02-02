import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const Map = () => {
    let points = [];
    for (let i = 0; i < 20; i++){
        points.push({
            latitude: 45.5109 + (i * 0.001 * Math.random(3, 22)),
            longitude: -122.5830 + i * 0.001
        })
    }
    return <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 45.5109,
                    longitude: -122.5830,
                    latitudeDelta: 0.11,
                    longitudeDelta: 0.11
                }}>
                <Polyline coordinates={points}/>        
            </MapView>;
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;