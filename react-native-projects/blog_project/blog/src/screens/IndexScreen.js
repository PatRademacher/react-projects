import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context as Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost, getBlogPosts}= useContext(Context);
    
    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
            
        });

        return () => {
            listener.remove();
        };

    },[])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => (blogPost.title)} 
                renderItem = {({item}) => {
                    return( 
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Show', {id: item.id})
                        }}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name='trash'/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}/>
        </View>
    );
}

IndexScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name='plus' size={30} style={{right: 10}}/>
            </TouchableOpacity>
        )};
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'rgb(86, 23, 29)',
        color: 'gold'
    },
    title: {
        fontSize: 18,
        color: 'gold'
    },
    icon: {
        fontSize: 24,
        right: 10,
        color: 'gold'
    }
})

export default IndexScreen;