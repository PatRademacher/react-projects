import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
const AuthForm = ({headerText, errorMessage, onSubmit, buttonTitle}) => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer>
                <Text h3 style={styles.margBot}>{headerText}</Text>
            </Spacer>
            <Input label="Email"
                    
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}/>
            <Spacer />
            <Input label="Password" 
                    
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry/>
            {!errorMessage.length ?  null : <Text style={styles.errorMessage}>{errorMessage}</Text>}
            <Spacer>
                <Button style={styles.margBot} title={buttonTitle} onPress={() => onSubmit({email,password})}/>
            </Spacer>
        </>
    )
};
            


const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    margBot:{
        marginBottom: 25
    },
   
})


export default AuthForm;