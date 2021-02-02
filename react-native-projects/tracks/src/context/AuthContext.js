import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) =>{
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        case 'signout':
            return {token: null, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token){
        dispatch({type: 'signin', payload: token});
        navigate('TrackList');
    }
    else{
        navigate('Signup');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}

const signup = (dispatch) => { 
    return (
        async ({email, password}) => {
            const STORAGE_KEY = '@token'
            try {
                const response = await trackerApi.post('/signup', {email, password});
                await AsyncStorage.setItem(STORAGE_KEY, response.data.token);
                console.log(response.data.token);
                dispatch({type: 'signup', payload: response.data.token});
                console.log('Did we get to here?');
                console.log(STORAGE_KEY);
                navigate('TrackList');
            } catch (err){
                dispatch({type: 'add_error', payload: 'Trouble signing up'});
            }
       
    }
    )
}


const signin = (dispatch) => { 
    return (
        async ({email, password}) => {
            const STORAGE_KEY = '@token'
            try {
                const response = await trackerApi.post('/signin', {email, password});
                await AsyncStorage.setItem(STORAGE_KEY, response.data.token);
                console.log(response.data.token);
                dispatch({type: 'signin', payload: response.data.token});
                console.log('Did we get to here?');
                console.log(STORAGE_KEY);
                navigate('TrackList');
            } catch (err){
                dispatch({type: 'add_error', payload: 'Error signing in'});
            }
       
    }
    )
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('@token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
}
    


export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);